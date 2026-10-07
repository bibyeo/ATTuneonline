/* Audio for the mall level: voice clips cut out of audio/mall.mp3, ambience layers (crowd, music, fountain, sizzle),
   one-off sound events (cheers) and small interface sounds. Everything is scheduled on the audio clock. */
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const rand = (a, b) => a + Math.random()*(b - a);
const pick = arr => arr[Math.floor(Math.random()*arr.length)];
function shuffle(a){ a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random()*(i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

const QUERY = new URLSearchParams(location.search);
const SPEED = Math.max(1, +QUERY.get("speed") || 1);     // ?speed=4 plays the whole level faster (testing)
const AUTO = QUERY.has("auto");                           // ?auto plays itself (testing)
const wait = secs => new Promise(r => setTimeout(r, secs*1000/SPEED));

const AUDIO_FILES = ["mall.mp3", "crowd.mp3", "music.mp3", "cheers.mp3", "shared.mp3"];

const A = {
  ctx:null, master:null, voice:null, amb:null, duckNode:null, ui:null,
  bufs:{}, layers:{}, evTimers:[], live:new Set(), noise:null, pink:null,
  vol:0.8, muted:QUERY.has("mute"), hold:null,    // ?mute starts with the sound off (testing)

  gainFor(v){ return 0.95*Math.pow(Math.max(0, Math.min(1, v)), 1.6); },
  setVolume(v, muted){
    this.vol = v; this.muted = !!muted;
    if (this.master) this.master.gain.setTargetAtTime(this.muted ? 0 : this.gainFor(this.vol), this.ctx.currentTime, 0.04);
  },
  get now(){ return this.ctx ? this.ctx.currentTime : 0; },

  /* must be called from a user gesture */
  unlock(){
    if (!this.ctx) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return false;
      const c = this.ctx = new Ctx({ latencyHint:"interactive" });
      this.master = c.createGain(); this.master.gain.value = this.muted ? 0 : this.gainFor(this.vol);
      const comp = c.createDynamicsCompressor();
      comp.threshold.value = -14; comp.ratio.value = 3; comp.attack.value = 0.01; comp.release.value = 0.2;
      this.master.connect(comp).connect(c.destination);
      this.voice = c.createGain(); this.voice.connect(this.master);
      this.duckNode = c.createGain(); this.duckNode.connect(this.master);
      this.amb = c.createGain(); this.amb.connect(this.duckNode);
      this.ui = c.createGain(); this.ui.gain.value = 0.5; this.ui.connect(this.master);
      const len = c.sampleRate*4;
      this.noise = c.createBuffer(2, len, c.sampleRate);
      this.pink = c.createBuffer(2, len, c.sampleRate);
      for (let ch = 0; ch < 2; ch++) {
        const w = this.noise.getChannelData(ch), p = this.pink.getChannelData(ch);
        let b0 = 0, b1 = 0, b2 = 0;
        for (let i = 0; i < len; i++) { const x = Math.random()*2 - 1; w[i] = x; b0 = 0.997*b0 + x*0.029; b1 = 0.985*b1 + x*0.032; b2 = 0.95*b2 + x*0.048; p[i] = (b0 + b1 + b2)*2.2; }
      }
    }
    if (this.ctx.state !== "running") this.ctx.resume();
    return true;
  },

  /* fetch + decode one file, reporting progress 0..1 */
  async load(file, onProgress){
    if (this.bufs[file]) return this.bufs[file];
    const res = await fetch("audio/" + file);
    if (!res.ok) throw new Error("Could not load " + file);
    const total = +res.headers.get("content-length") || 0;
    let data;
    if (res.body && total && onProgress) {
      const rd = res.body.getReader(), parts = []; let got = 0;
      for (;;) { const { done, value } = await rd.read(); if (done) break; parts.push(value); got += value.length; onProgress(got/total); }
      const all = new Uint8Array(got); let o = 0; for (const p of parts) { all.set(p, o); o += p.length; }
      data = all.buffer;
    } else data = await res.arrayBuffer();
    const buf = await new Promise((ok, bad) => this.ctx.decodeAudioData(data, ok, bad));
    return (this.bufs[file] = buf);
  },

  /* play [start, length] of a file at a given audio-clock time */
  play(file, clip, { when=0, pan=0, gain=1, bus="voice" }={}){
    const c = this.ctx, buf = this.bufs[file];
    if (!c || !buf) return null;
    const src = c.createBufferSource(); src.buffer = buf; src.playbackRate.value = SPEED;
    const g = c.createGain(); g.gain.value = gain; src.connect(g);
    let tail = g;
    if (pan && c.createStereoPanner) { const p = c.createStereoPanner(); p.pan.value = pan; g.connect(p); tail = p; }
    tail.connect(bus === "amb" ? this.amb : bus === "ui" ? this.ui : this.voice);
    const at = Math.max(when || c.currentTime, c.currentTime);
    src.start(at, Math.max(0, clip[0] - 0.02), clip[1] + 0.06);
    this.live.add(src); src.onended = () => this.live.delete(src);
    return src;
  },
  stopVoices(){ for (const s of this.live) { try { s.stop(); } catch(e) {} } this.live.clear(); },

  /* ambience layers: named loops with their own gain, faded by the level's part definitions */
  layer(name){
    if (this.layers[name]) return this.layers[name];
    const c = this.ctx, out = c.createGain(); out.gain.value = 0; out.connect(this.amb);
    const L = { out, name, stop:[] };
    const loop = (buf, rate=1) => { const s = c.createBufferSource(); s.buffer = buf; s.loop = true; s.playbackRate.value = rate; s.start(c.currentTime, Math.random()*buf.duration); L.stop.push(s); return s; };
    const filt = (type, f, q=0.7) => { const b = c.createBiquadFilter(); b.type = type; b.frequency.value = f; b.Q.value = q; return b; };
    const files = { crowd:"crowd.mp3", music:"music.mp3" };
    if (files[name]) {
      const buf = this.bufs[files[name]];
      if (buf) {
        const a = loop(buf);
        if (name === "crowd") {                              // two slightly detuned copies, panned apart, so it sounds like a room
          const b = loop(buf, 0.97), pr = c.createStereoPanner(); pr.pan.value = 0.6; b.connect(pr).connect(out);
          const pl = c.createStereoPanner(); pl.pan.value = -0.5; a.connect(pl).connect(out);
        } else a.connect(out);
      }
    } else if (name === "fountain") {
      loop(this.noise).connect(filt("bandpass", 1400, 0.35)).connect(filt("highpass", 380)).connect(out);
    } else if (name === "sizzle") {
      const s = loop(this.noise), g = c.createGain(); g.gain.value = 0.5;
      s.connect(filt("highpass", 3800)).connect(g).connect(out);
      const lfo = c.createOscillator(); lfo.type = "square"; lfo.frequency.value = 23;
      const lg = c.createGain(); lg.gain.value = 0.35; lfo.connect(lg).connect(g.gain); lfo.start(); L.stop.push(lfo);
    }
    return (this.layers[name] = L);
  },
  setLayer(name, v, secs=1.2){
    const g = this.layer(name).out.gain, t = this.ctx.currentTime;
    g.cancelScheduledValues(t); g.setValueAtTime(g.value, t); g.linearRampToValueAtTime(Math.max(0, v), t + secs);
  },
  silenceLayers(keep=[], secs=1.5){ for (const n in this.layers) if (!keep.includes(n)) this.setLayer(n, 0, secs); },
  killLayers(){
    for (const n in this.layers) { const L = this.layers[n]; for (const s of L.stop) { try { s.stop(); } catch(e) {} } try { L.out.disconnect(); } catch(e) {} }
    this.layers = {}; this.stopEvents();
  },
  duck(on, secs=0.6){
    const g = this.duckNode.gain, t = this.ctx.currentTime;
    g.cancelScheduledValues(t); g.setValueAtTime(g.value, t); g.linearRampToValueAtTime(on ? 0.42 : 1, t + secs);
  },
  swell(k){ if (!this.amb) return; const g = this.amb.gain, t = this.ctx.currentTime; g.cancelScheduledValues(t); g.setTargetAtTime(1 + k*0.9, t, 0.06); },

  /* sound events that fire at random: { cheer:[minSecs, maxSecs] } */
  startEvents(ev={}, cb){
    this.stopEvents();
    for (const [name, [lo, hi]] of Object.entries(ev)) {
      const fire = () => { this.fx(name); if (cb) cb(name); this.evTimers.push(setTimeout(fire, (lo + Math.random()*(hi - lo))*1000/SPEED)); };
      this.evTimers.push(setTimeout(fire, (lo*0.5 + Math.random()*lo)*1000/SPEED));
    }
  },
  stopEvents(){ this.evTimers.forEach(clearTimeout); this.evTimers = []; },

  /* synth helpers */
  env(g, t, attack, peak, decay){ g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(peak, t + attack); g.gain.exponentialRampToValueAtTime(1e-4, t + attack + decay); },
  noiseHit(dest, t, { type="bandpass", f=1000, q=0.7, a=0.005, d=0.2, peak=0.5, pan=0, sweep=0, buf }={}){
    const c = this.ctx, s = c.createBufferSource(); s.buffer = buf || this.noise;
    const fl = c.createBiquadFilter(); fl.type = type; fl.frequency.value = f; fl.Q.value = q;
    if (sweep) fl.frequency.exponentialRampToValueAtTime(sweep, t + a + d);
    const g = c.createGain(); this.env(g, t, a, peak, d);
    const p = c.createStereoPanner(); p.pan.value = pan;
    s.connect(fl).connect(g).connect(p).connect(dest); s.start(t, Math.random()*3, a + d + 0.05);
  },
  tone(dest, t, freq, dur, { type="sine", peak=0.2, a=0.004, pan=0, to }={}){
    const c = this.ctx, o = c.createOscillator(); o.type = type; o.frequency.setValueAtTime(freq, t);
    if (to) o.frequency.exponentialRampToValueAtTime(to, t + dur);
    const g = c.createGain(); this.env(g, t, a, peak, dur);
    const p = c.createStereoPanner(); p.pan.value = pan;
    o.connect(g).connect(p).connect(dest); o.start(t); o.stop(t + a + dur + 0.05);
  },
  fx(name){
    const c = this.ctx; if (!c) return;
    const t = c.currentTime + 0.02, r = () => Math.random()*2 - 1;
    if (name === "cheer") {
      this.play("cheers.mp3", pick(CHEER_CLIPS), { pan:r()*0.7, gain:0.5, bus:"amb" });
      this.noiseHit(this.amb, t, { f:1800, q:0.3, a:0.3, d:1.4, peak:0.07 });
    }
  },
  whoosh(k=1.1){ if (!this.ctx) return; this.noiseHit(this.ui, this.ctx.currentTime, { f:300, q:0.8, a:k*0.6, d:k*0.5, peak:0.5, sweep:3200, buf:this.pink }); },
  tick(){ if (this.ctx) this.tone(this.ui, this.ctx.currentTime, 1560, 0.05, { peak:0.08 }); },
  tap(){ if (this.ctx) this.tone(this.ui, this.ctx.currentTime, 660, 0.06, { peak:0.12, type:"triangle" }); },
  ok(){ if (!this.ctx) return; const t = this.ctx.currentTime; this.tone(this.ui, t, 880, 0.12, { peak:0.1 }); this.tone(this.ui, t + 0.08, 1320, 0.16, { peak:0.08 }); },
  ping(){ if (!this.ctx) return; const t = this.ctx.currentTime; this.tone(this.amb, t, 1318, 0.25, { peak:0.12, pan:0.3 }); this.tone(this.amb, t + 0.09, 1760, 0.35, { peak:0.1, pan:0.3 }); },
  holdTone(k){
    if (!this.ctx) return;
    if (!this.hold) { const c = this.ctx, o = c.createOscillator(); o.type = "sine"; const g = c.createGain(); g.gain.value = 0; o.connect(g).connect(this.ui); o.start(); this.hold = { o, g }; }
    const t = this.ctx.currentTime;
    this.hold.o.frequency.setTargetAtTime(110 + k*220, t, 0.05);
    this.hold.g.gain.setTargetAtTime(k > 0 ? 0.05 + k*0.08 : 0, t, 0.05);
  }
};
