/* Saturday Errands: the flow of the level. Five parts (Listen, Follow, Twist, Stay, Wrap-up), scored on three skills.
   Same lines, timings, questions and scoring as the Listening Levels mall level, in the Focus Check's look. */
const PART_NAMES = ["Listen", "Follow", "Twist", "Stay", "Wrap-up"];
const SHOT_FOR = { Listen:"listen", Follow:"follow", Twist:"twist", Stay:"stay", "Wrap-up":"wrap" };
const G = { runId:0, running:false, t0:0, talk:[], cues:null, results:[], paused:false, cleanups:new Set(), partIdx:-1 };
const best = { get(){ try { return JSON.parse(localStorage.getItem("attune.mall.best")); } catch(e) { return null; } }, set(v){ try { localStorage.setItem("attune.mall.best", JSON.stringify(v)); } catch(e) {} } };

/* ---------- small UI helpers ---------- */
function setHud(partIdx){
  const hud = $("#hud"); hud.hidden = false;
  $("#hudParts").innerHTML = PART_NAMES.map((n, i) => `<li class="${i < partIdx ? "done" : i === partIdx ? "now" : ""}"><i></i><span>${n}</span></li>`).join("");
}
function setDock(node, cls=""){
  const d = $("#dock"); d.innerHTML = ""; d.className = "box " + cls;
  if (node) { d.appendChild(node); d.hidden = false; } else d.hidden = true;
}
function showTip(text){
  const t = $("#tip"); t.textContent = text; t.hidden = false; t.classList.remove("show"); void t.offsetWidth; t.classList.add("show");
  clearTimeout(showTip.t); showTip.t = setTimeout(() => { t.hidden = true; }, 4200);
}
function el(tag, cls, html){ const e = document.createElement(tag); if (cls) e.className = cls; if (html !== undefined) e.innerHTML = html; return e; }
function aborted(id){ return id !== G.runId; }

/* hold-to-advance. A quick click works too, so nobody gets stuck. */
function holdButton(container, label, sub, { onProgress, guard, onBlocked }={}){
  return new Promise(res => {
    const C = 207.35;
    container.hidden = false;
    container.innerHTML = `<button class="hold" type="button" aria-label="${esc(label)}. Press and hold, or click."><svg viewBox="0 0 74 74" aria-hidden="true"><circle class="track" cx="37" cy="37" r="33"/><circle class="fill" cx="37" cy="37" r="33" stroke-dasharray="${C}" stroke-dashoffset="${C}"/><circle class="dot" cx="37" cy="37" r="9"/></svg><span class="txt"><b>${esc(label)}</b><small>${esc(sub)}</small></span></button>`;
    const btn = container.querySelector(".hold"), fill = container.querySelector(".fill");
    const DUR = 1000, QUICK = 500; let start = null, raf = null, p = 0, done = false;
    const draw = () => { fill.style.strokeDashoffset = (C*(1 - p)).toFixed(1); A.holdTone(start === null ? 0 : p); A.swell(p*0.5); if (onProgress) onProgress(p); };
    const ready = () => !guard || guard();
    const blocked = () => { btn.classList.remove("pressing"); btn.classList.add("blocked"); setTimeout(() => btn.classList.remove("blocked"), 500); if (onBlocked) onBlocked(); };
    const finish = () => { if (done) return; done = true; p = 1; draw(); A.holdTone(0); A.swell(0); A.whoosh(1.0); btn.classList.remove("pressing"); cleanup(); res(); };
    const step = () => {
      if (start === null) { p = Math.max(0, p - 0.05); draw(); if (p > 0) raf = requestAnimationFrame(step); return; }
      p = Math.min(1, (performance.now() - start)/DUR); draw();
      if (p >= 1) finish(); else raf = requestAnimationFrame(step);
    };
    const begin = e => {
      if (done || start !== null) return;
      if (!ready()) { blocked(); return; }
      A.unlock();
      if (e && e.cancelable) e.preventDefault();
      start = performance.now() - p*DUR; btn.classList.add("pressing");
      cancelAnimationFrame(raf); raf = requestAnimationFrame(step);
    };
    const release = () => {
      if (done || start === null) return;
      const held = performance.now() - start;
      start = null; btn.classList.remove("pressing"); cancelAnimationFrame(raf);
      if (held >= DUR || held < QUICK) { if (ready()) { finish(); return; } blocked(); }
      raf = requestAnimationFrame(step);
    };
    const kd = e => { if ((e.key === " " || e.key === "Enter") && !e.repeat) { e.preventDefault(); begin(e); } };
    const ku = e => { if (e.key === " " || e.key === "Enter") release(); };
    btn.addEventListener("pointerdown", begin); btn.addEventListener("keydown", kd); btn.addEventListener("keyup", ku);
    btn.addEventListener("contextmenu", e => e.preventDefault());
    window.addEventListener("pointerup", release); window.addEventListener("pointercancel", release);
    const cleanup = () => {
      btn.removeEventListener("pointerdown", begin); btn.removeEventListener("keydown", kd); btn.removeEventListener("keyup", ku);
      window.removeEventListener("pointerup", release); window.removeEventListener("pointercancel", release); G.cleanups.delete(cleanup);
    };
    G.cleanups.add(cleanup);
    btn.focus({ preventScroll:true });
    if (AUTO) setTimeout(() => { if (ready()) { A.unlock(); finish(); } }, 150);
  });
}

/* title card over the scene, then hold to carry on */
async function titleCard({ num, title, text, shot, hold="Hold to tune in" }){
  const words = title.split(" "), t = $("#title"); t.hidden = false;
  t.innerHTML = `<div class="num">${esc(num)}</div><h1>${words.map((w, k) => `<span style="animation-delay:${0.15 + k*0.12}s">${esc(w)}</span> `).join("")}</h1>
    <p style="animation-delay:${0.3 + words.length*0.12}s">${esc(text)}</p><div id="holdSlot" style="pointer-events:auto"></div>`;
  if (shot) setShot(shot);
  A.whoosh(0.9);
  await wait(0.2 + words.length*0.12);
  await holdButton($("#holdSlot"), hold, "Hold it, or just click");
  t.hidden = true; t.innerHTML = "";
}

/* ---------- the audio schedule ---------- */
/* lay lines end to end from `start`; each line remembers when it starts and ends and when its key word lands */
function schedule(lines, start){
  let t = start; const items = [];
  for (const ln of lines) {
    const dur = ln.clip[1]/SPEED;
    items.push({ ln, spk:LEVEL.speakers[ln.s], at:t, end:t + dur, keyT:t + (ln.clip[2] || 0)/SPEED });
    t += dur + ln.gap/SPEED;
  }
  return { items, end:items.length ? items[items.length - 1].end : start };
}
function playItems(items){
  for (const it of items) {
    const sp = it.spk, gain = sp.gain !== undefined ? sp.gain : sp.role === "target" ? 1 : 0.45;
    A.play("mall.mp3", it.ln.clip, { when:it.at, pan:sp.pan || 0, gain });
    G.talk.push(it);
  }
}
async function waitUntil(t, id){ while (A.now < t) { await new Promise(r => setTimeout(r, 60)); if (aborted(id)) throw new Error("abort"); } }

/* ambience: fade each layer of the part in, or out if the part does not use it */
function setAmbience(part){
  const layers = (part.amb && part.amb.layers) || {};
  for (const n in A.layers) if (!(n in layers)) A.setLayer(n, 0, 1.5);
  for (const [n, [lo]] of Object.entries(layers)) A.setLayer(n, lo, 1.8);
}
function rampAmbience(part, from, to, k0, k1){
  const layers = (part.amb && part.amb.layers) || {};
  for (const [n, [lo, hi]] of Object.entries(layers)) {
    const g = A.layer(n).out.gain, a = lo + (hi - lo)*k0, b = lo + (hi - lo)*k1;
    g.cancelScheduledValues(from); g.setValueAtTime(a, from); g.linearRampToValueAtTime(b, Math.max(to, from + 0.1));
  }
}
function startEvents(part){ A.startEvents((part.amb && part.amb.ev) || {}); }

/* who is talking right now: drives the people in the scene and the phone call */
function tickTalk(){
  if (A.ctx) {
    const now = A.now, on = {}; let phone = null;
    for (const it of G.talk) if (now >= it.at && now < it.end) { on[it.spk.actor] = true; if (it.spk.actor === "phone") phone = it.spk.name; }
    for (const a of ["pa", "seller", "cashier", "coupleW", "coupleM"]) setTalking(a, !!on[a]);
    const ph = $("#phone");
    if (phone) { ph.hidden = false; $("#phoneName").textContent = phone; } else ph.hidden = true;
    G.talk = G.talk.filter(it => it.end > now - 1);
  }
  requestAnimationFrame(tickTalk);
}

/* ---------- questions ---------- */
function askQuestion(q, { n, total, label="Question" }={}){
  return new Promise(res => {
    const opts = shuffle(q.o), box = el("div", "qbox");
    box.innerHTML = `<p class="kicker">${esc(label)} ${n} of ${total}</p><div class="grid"><p class="q">${esc(q.q)}</p>
      <div class="opts" role="group" aria-label="Answers">${opts.map((o, i) => `<button type="button" class="opt" aria-pressed="false" data-i="${i}"><kbd>${i + 1}</kbd><span>${esc(o)}</span></button>`).join("")}</div></div>`;
    setDock(box, "is-q");
    let done = false;
    const pickIt = i => {
      if (done || !opts[i]) return; done = true; A.tick();
      $$(".opt", box)[i].setAttribute("aria-pressed", "true"); off();
      setTimeout(() => res({ q:q.q, pick:opts[i], right:opts[i] === q.a, a:q.a }), 380/Math.min(SPEED, 3));
    };
    const keys = e => { const k = +e.key; if (k >= 1 && k <= 4) pickIt(k - 1); };
    const off = () => { document.removeEventListener("keydown", keys); G.cleanups.delete(off); };
    document.addEventListener("keydown", keys); G.cleanups.add(off);
    $$(".opt", box).forEach(b => b.addEventListener("click", () => pickIt(+b.dataset.i)));
    if (AUTO) setTimeout(() => pickIt(Math.random() < 0.8 ? opts.indexOf(q.a) : 0), 150);
  });
}

/* ---------- Listen ---------- */
async function runListen(part, id){
  const layers = (part.amb && part.amb.layers) || {};
  const total = part.chunks.reduce((s, c) => s + c.lines.reduce((s2, l) => s2 + (l.clip[1] + l.gap)/SPEED, 0), 0);
  const nQ = part.chunks.reduce((s, c) => s + c.questions.length, 0), answers = []; let done = 0, q = 0;
  startEvents(part);
  for (const chunk of part.chunks) {
    const start = A.now + 0.5/SPEED, main = schedule(chunk.lines, start), side = chunk.side ? schedule(chunk.side.lines, start + chunk.side.at/SPEED) : null;
    const len = main.end - start;
    rampAmbience(part, start, main.end, done/total, Math.min(1, (done + len)/total));
    playItems(main.items); if (side) playItems(side.items);
    await waitUntil(Math.max(main.end, side ? side.end : 0) + 0.5/SPEED, id);
    done += len;
    A.duck(true);
    for (const qq of chunk.questions) { answers.push(await askQuestion(qq, { n:++q, total:nQ })); if (aborted(id)) throw new Error("abort"); }
    A.duck(false); setDock(null);
  }
  A.stopEvents();
  return { title:part.title, cats:part.scores, score:answers.filter(a => a.right).length/answers.length, answers };
}

/* ---------- Follow and Twist: listen, then do the task ---------- */
function sequenceTask(task, id){
  return new Promise(res => {
    const tiles = shuffle(task.tiles), n = task.answer.length, chosen = [];
    const box = el("div", "taskbox");
    const draw = () => {
      box.innerHTML = `<p class="kicker">${esc(task.prompt)}</p>
        <ol class="steps-chosen" aria-label="Your stops">${chosen.length ? chosen.map((c, k) => `<li><button type="button" data-k="${k}" aria-label="Remove ${esc(c)}">${esc(c)}</button></li>`).join("") : `<li class="empty">${n} stops · tap a shop to add it, tap a stop to take it back off</li>`}</ol>
        <div class="tiles">${tiles.map((t, i) => `<button type="button" class="tile" data-i="${i}" ${chosen.includes(t) ? "disabled" : ""}>${esc(t)}</button>`).join("")}</div>
        <div class="box-actions"><button type="button" class="btn ghost" data-act="clear">Clear</button><button type="button" class="btn" data-act="ok" ${chosen.length === n ? "" : "disabled"}>Lock it in</button></div>`;
      $$(".tile", box).forEach(b => b.addEventListener("click", () => { if (chosen.length < n) { chosen.push(tiles[+b.dataset.i]); A.tap(); pulseShop(tiles[+b.dataset.i]); draw(); } }));
      $$(".steps-chosen button", box).forEach(b => b.addEventListener("click", () => { chosen.splice(+b.dataset.k, 1); draw(); }));
      $("[data-act=clear]", box).addEventListener("click", () => { chosen.length = 0; draw(); });
      $("[data-act=ok]", box).addEventListener("click", () => { A.ok(); res({ picked:chosen.slice(), score:task.answer.filter((a, k) => chosen[k] === a).length/n }); });
    };
    draw(); setDock(box, "is-task");
    if (AUTO) setTimeout(() => { const p = Math.random() < 0.75 ? task.answer.slice() : shuffle(task.answer); res({ picked:p, score:task.answer.filter((a, k) => p[k] === a).length/n }); }, 200);
  });
}
function fieldsTask(task){
  return new Promise(res => {
    const rows = task.fields.map(f => ({ f, o:shuffle(f.o) })), picks = task.fields.map(() => null), box = el("div", "taskbox");
    const draw = () => {
      box.innerHTML = `<p class="kicker">${esc(task.prompt)}</p>
        <div class="frows">${rows.map((r, i) => `<div class="frow"><span class="flabel">${esc(r.f.label)}</span><div class="fopts">${r.o.map(o => `<button type="button" class="chip${picks[i] === o ? " on" : ""}" data-r="${i}" data-v="${esc(o)}">${esc(o)}</button>`).join("")}</div></div>`).join("")}</div>
        <div class="box-actions"><button type="button" class="btn" data-act="ok" ${picks.every(Boolean) ? "" : "disabled"}>Lock it in</button></div>`;
      $$(".chip", box).forEach(b => b.addEventListener("click", () => { picks[+b.dataset.r] = b.dataset.v; A.tap(); draw(); }));
      $("[data-act=ok]", box).addEventListener("click", () => { A.ok(); res({ picks:picks.slice(), score:task.fields.filter((f, i) => picks[i] === f.o[0]).length/task.fields.length }); });
    };
    draw(); setDock(box, "is-task");
    if (AUTO) setTimeout(() => { const p = task.fields.map(f => Math.random() < 0.8 ? f.o[0] : f.o[1]); res({ picks:p, score:task.fields.filter((f, i) => p[i] === f.o[0]).length/task.fields.length }); }, 200);
  });
}
async function runTask(part, id){
  startEvents(part);
  const start = A.now + 0.5/SPEED, main = schedule(part.lines, start), side = part.side ? schedule(part.side.lines, start + part.side.at/SPEED) : null;
  rampAmbience(part, start, main.end, 0, 1);
  playItems(main.items); if (side) playItems(side.items);
  await waitUntil(Math.max(main.end, side ? side.end : 0) + 0.6/SPEED, id);
  A.duck(true);
  const r = part.task.kind === "sequence" ? await sequenceTask(part.task, id) : await fieldsTask(part.task);
  A.duck(false); A.stopEvents(); setDock(null);
  return { title:part.title, cats:part.scores, score:r.score, task:part.task, pick:r };
}

/* ---------- Stay: tap only when your number is called ---------- */
/* each tap is matched to the nearest unmatched call; calls for 47 are targets, near misses are lures */
function scoreTaps(cues, taps, grace=2.2){
  const c = cues.map(d => Object.assign({}, d, { hit:false, rt:null, fa:false })); let stray = 0;
  for (const tp of taps) {
    const near = c.filter(p => tp.t >= p.keyT - 0.25 && tp.t <= p.end + grace);
    const hit = near.filter(p => p.target && !p.hit && p.btn === tp.btn).sort((a, b) => b.keyT - a.keyT)[0];
    if (hit) { hit.hit = true; hit.rt = Math.max(0, tp.t - hit.keyT); continue; }
    const lure = near.filter(p => !p.target && p.btn === tp.btn && !p.fa).sort((a, b) => b.keyT - a.keyT)[0];
    if (lure) { lure.fa = true; continue; }
    stray++;
  }
  const targets = c.filter(d => d.target), lures = c.filter(d => !d.target && d.btn);
  const hits = targets.filter(d => d.hit).length, fas = lures.filter(d => d.fa).length;
  return { score:Math.max(0, Math.min(1, hits/targets.length - 0.5*(fas/Math.max(1, lures.length)) - 0.05*Math.min(stray, 6))), hits, targets:targets.length, fas, lures:lures.length, extra:stray, cues:c };
}
async function runRespond(part, id){
  const pad = el("div", "pad");
  pad.innerHTML = `<p class="pad-rule">Tap only on <b>${esc(part.padLabel)}</b></p><button type="button" class="tapbtn" data-b="tap"><span>Tap</span><kbd>space</kbd></button>`;
  const taps = []; let cues = [];
  const tap = () => {
    taps.push({ t:A.now, btn:"tap" }); A.tap();
    const live = cues.find(c => c.target && ((A.now >= c.keyT - 0.25) && (A.now <= c.end + 2.2/SPEED)) && !c._seen);
    const b = $(".tapbtn", pad); b.classList.remove("flash-ok", "flash-no"); void b.offsetWidth; b.classList.add(live ? "flash-ok" : "flash-no");
    if (live) live._seen = true;
  };
  $(".tapbtn", pad).addEventListener("pointerdown", e => { e.preventDefault(); tap(); });
  const kd = e => { if (e.code === "Space" && !e.repeat) { e.preventDefault(); tap(); } };
  document.addEventListener("keydown", kd);
  const off = () => { document.removeEventListener("keydown", kd); G.cleanups.delete(off); }; G.cleanups.add(off);
  setDock(pad, "is-pad"); startEvents(part);
  const start = A.now + 0.8/SPEED, main = schedule(part.lines, start), side = part.side ? schedule(part.side.lines, start + part.side.at/SPEED) : null;
  rampAmbience(part, start, main.end, 0, 1);
  playItems(main.items); if (side) playItems(side.items);
  cues = main.items.filter(m => m.ln.cue).map(m => ({ keyT:m.keyT, end:m.end, target:!m.ln.lure, btn:m.ln.cue, text:m.ln.t }));
  G.cues = cues;
  let tipN = 0;
  const tips = cues.filter(c => c.target).map(c => setTimeout(() => { if (!c._seen && tipN < 2 && G.running) showTip(TIPS[tipN++ % TIPS.length]); }, (c.end + 2.3 - A.now)*1000));
  if (AUTO) cues.forEach(c => { if (Math.random() < (c.target ? 0.85 : 0.15)) setTimeout(tap, (c.keyT + 0.45/SPEED - A.now)*1000); });
  await waitUntil(Math.max(main.end, side ? side.end : 0) + 2.4/SPEED, id);
  tips.forEach(clearTimeout); off(); A.stopEvents(); setDock(null);
  const r = scoreTaps(cues, taps, 2.2/SPEED);
  return { title:part.title, cats:part.scores, score:r.score, cues:r.cues, t0:start, stats:r };
}

/* ---------- Wrap-up ---------- */
async function runWrap(part, id){
  A.duck(true);
  const answers = [];
  for (const [i, q] of part.questions.entries()) { answers.push(await askQuestion(q, { n:i + 1, total:part.questions.length + 1, label:"Think back" })); if (aborted(id)) throw new Error("abort"); }
  const side = await askQuestion(part.sideQ, { n:part.questions.length + 1, total:part.questions.length + 1, label:"Think back" });
  A.duck(false); setDock(null);
  return { title:part.title, cats:part.scores, score:answers.filter(a => a.right).length/answers.length, answers, side };
}

/* ---------- results ---------- */
function summarise(results){
  const by = {}; SKILLS.forEach(s => by[s.id] = []);
  for (const r of results) if (r.cats) for (const c of r.cats) by[c].push(r.score);
  const sub = {}; SKILLS.forEach(s => { const v = by[s.id]; sub[s.id] = v.length ? Math.round(v.reduce((a, b) => a + b, 0)/v.length*100) : null; });
  const have = Object.values(sub).filter(v => v !== null), overall = Math.round(have.reduce((a, b) => a + b, 0)/have.length);
  const band = overall >= 85 ? "Locked in" : overall >= 70 ? "Tuned in" : overall >= 50 ? "In and out" : "Lots of static";
  // where did attention first slip? a missed call, or a reaction much slower than the player's usual
  const calls = [];
  results.forEach(r => r.cues && r.cues.forEach(c => { if (c.target) calls.push({ part:r.title, t:c.keyT - r.t0, rt:c.hit ? c.rt : null }); }));
  let drift = null;
  if (calls.length) {
    const rts = calls.filter(c => c.rt !== null).map(c => c.rt).sort((a, b) => a - b), med = rts.length ? rts[Math.floor(rts.length/2)] : 0;
    const slips = calls.filter(c => c.rt === null || c.rt > Math.max(1.6, med*1.8));
    if (!slips.length) drift = { ok:true, text:"No drift spotted — your reactions stayed steady the whole way." };
    else { const f = slips[0], when = f.t < 4 ? `right at the start of “${f.part}”` : `${Math.floor(f.t/60) ? Math.floor(f.t/60) + " min " : ""}${Math.round(f.t%60)} s into “${f.part}”`;
      drift = { ok:false, text:`Your attention first slipped ${when}${f.rt === null ? " — you missed a call there" : " — your reaction slowed right down"}.${slips.length > 1 ? ` It slipped ${slips.length} times in all.` : ""}` }; }
  }
  return { sub, overall, band, drift };
}
function showResults(results){
  setHud(5); setDock(null); $("#phone").hidden = true; A.silenceLayers([], 3); setShot("wrap");
  const sum = summarise(results), wrap = results.find(r => r.title === "Wrap-up");
  const leoRight = wrap && wrap.answers.every(a => a.right), catRight = wrap && wrap.side.right;
  const line = catRight && !leoRight ? LEVEL.side.line : catRight ? `You caught ${LEVEL.side.who} and the details that mattered. Big ears.` : `You didn’t take in ${LEVEL.side.who} at all. That’s filtering.`;
  const prev = best.get(); if (prev === null || sum.overall > prev) best.set(sum.overall);
  const missed = [];
  results.forEach(r => { (r.answers || []).forEach(a => { if (!a.right) missed.push(`${esc(a.q)} — <b>${esc(a.a)}</b>`); });
    if (r.task && r.score < 1) missed.push(`${esc(r.task.prompt)} — <b>${esc(r.task.kind === "sequence" ? r.task.answer.join(" → ") : r.task.fields.map(f => f.o[0]).join(" · "))}</b>`); });
  const out = $("#results"); out.hidden = false;
  out.innerHTML = `<div><p class="eyebrow">Level 0${LEVEL.num} · ${esc(LEVEL.place)}</p>
      <div class="big">${sum.overall}</div><div class="of">${esc(sum.band)}${prev !== null && prev !== sum.overall ? ` · best ${Math.max(prev, sum.overall)}` : ""}</div>
      <p class="donkey">${esc(line)}</p>
      <div class="rbtns"><button class="btn" type="button" id="again">Play again</button><a class="btn ghost" href="../">Back to ATTune</a></div></div>
    <div>${SKILLS.map(s => `<div class="rrow"><div class="head"><h3>${esc(s.name)}</h3><span class="val">${sum.sub[s.id] === null ? "–" : sum.sub[s.id]}</span></div><div class="rbar"><span style="width:${sum.sub[s.id] || 0}%"></span></div><p class="fine">${esc(s.blurb)}</p></div>`).join("")}
      ${sum.drift ? `<div class="rrow"><div class="head"><h3>Drift</h3></div><p>${esc(sum.drift.text)}</p></div>` : ""}
      ${missed.length ? `<div class="rrow"><div class="head"><h3>What you missed</h3></div><ul>${missed.map(m => `<li>${m}</li>`).join("")}</ul></div>` : ""}</div>`;
  $("#again").addEventListener("click", () => location.reload());
}

/* ---------- running the level ---------- */
async function runLevel(){
  const id = ++G.runId; G.results = []; G.running = true; G.t0 = performance.now();
  try {
    let i = 0;
    for (const part of LEVEL.parts) {
      if (part.type === "intro") continue;
      setHud(i); setDock(null);
      setAmbience(part);
      if (part.title === "Twist") setFlashMob(true);
      await titleCard({ num:`Part ${i + 1} of 5 · ${part.title}`, title:`${part.title}.`, text:part.card || "Last few questions. Think back.", shot:SHOT_FOR[part.title] });
      if (aborted(id)) return;
      const run = { listen:runListen, task:runTask, respond:runRespond, wrap:runWrap }[part.type];
      const r = await run(part, id);
      r.type = part.type; G.results.push(r);
      if (part.title === "Twist") setFlashMob(false);
      i++;
    }
    G.running = false; showResults(G.results);
  } catch(e) {
    if (aborted(id) || e.message === "abort") return;
    G.running = false; console.error(e);
    const t = $("#title"); t.hidden = false; t.innerHTML = `<div class="num">Something went wrong</div><h1>Oops.</h1><p>${esc(e.message || e)}. Check your connection and reload to try again.</p>`;
  }
}

/* ---------- boot ---------- */
function wantsLite(){ return /[?&]lite=1\b/.test(location.search); }
function loadThree(){
  return new Promise(res => {
    if (window.THREE) return res(true);
    addEventListener("three-ready", () => res(true), { once:true });
    setTimeout(() => res(!!window.THREE), 12000);
  });
}
function fatal(msg){ $("#enterWrap").innerHTML = `<p class="err">${esc(msg)}</p>`; }
(async function boot(){
  setInterval(() => { const c = $("#clock"); if (c && G.running) { const s = Math.floor((performance.now() - G.t0)/1000*SPEED); c.textContent = `${Math.floor(s/60)}:${String(s%60).padStart(2, "0")}`; } }, 500);
  requestAnimationFrame(tickTalk);
  if (!A.unlock()) { fatal("This browser can't play the sound this game needs."); return; }
  const bar = $("#loadBar"), prog = {}, total = AUDIO_FILES.length + 1;
  const showProgress = () => { const a = AUDIO_FILES.reduce((s, f) => s + (prog[f] || 0), 0); bar.style.width = (((a + (prog.world || 0))/total)*100).toFixed(0) + "%"; };
  let three = false;
  if (!wantsLite()) { three = await loadThree(); }
  const audioP = Promise.all(AUDIO_FILES.map(f => A.load(f, p => { prog[f] = p; showProgress(); }).then(() => { prog[f] = 1; showProgress(); })));
  let has3D = false;
  if (three) { has3D = init3D(); }
  if (has3D) { try { await Promise.all([loadSprites(), loadAnimals()]); ensureWorld(); setShot("intro", true); } catch(e) { console.error(e); has3D = false; W3.ok = false; } }
  if (!has3D) { document.body.classList.add("lite"); $("#stage").innerHTML = `<div class="flat"></div>`; $("#enterWrap").insertAdjacentHTML("beforebegin", `<p class="lite-note">Running without the 3D mall on this device.</p>`); }
  prog.world = 1;
  try { await audioP; } catch(e) { console.error(e); fatal("Sound couldn't load here: " + (e && e.message || e)); return; }
  bar.style.width = "100%";
  // headphone check
  $$("[data-hp]").forEach(b => b.addEventListener("click", () => { A.unlock(); A.play("shared.mp3", HEADPHONE_CLIPS[b.dataset.hp], { pan:b.dataset.hp === "L" ? -1 : 1, gain:0.9, bus:"ui" }); }));
  // top bar
  $("#muteBtn").textContent = A.muted ? "Sound off" : "Sound on";
  $("#muteBtn").addEventListener("click", () => { A.setVolume(A.vol, !A.muted); $("#muteBtn").textContent = A.muted ? "Sound off" : "Sound on"; });
  document.addEventListener("keydown", e => { if ((e.key === "m" || e.key === "M") && !e.target.closest("input, textarea")) $("#muteBtn").click(); });
  $("#pauseBtn").addEventListener("click", () => setPaused(!G.paused)); $("#resumeBtn").addEventListener("click", () => setPaused(false));
  document.addEventListener("visibilitychange", () => { if (document.hidden && G.running && !G.paused) setPaused(true); });
  await holdButton($("#enterWrap"), "Hold to tune in", "Hold it, or just click");
  $("#loader").hidden = true;
  A.unlock(); setHud(-1);
  runLevel();
})();
function setPaused(p){
  if (!A.ctx || !G.running) return;
  G.paused = p; $("#veil").hidden = !p; $("#pauseBtn").textContent = p ? "Resume" : "Pause";
  if (p) { A.ctx.suspend(); $("#resumeBtn").focus(); } else A.ctx.resume();
}
(function frame(){
  requestAnimationFrame(frame);
  try { render3D(performance.now()/1000); } catch(e) { console.error(e); }
})();
