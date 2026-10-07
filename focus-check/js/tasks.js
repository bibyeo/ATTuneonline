/* Stage 2, hands-on: you sit at your desk, turn round and actually do what the teacher asked.
   Books open in front of you and you write in them, you underline words with the pen you picked up,
   you count cones, sign sheets and carry things to where they belong. What you do is recorded as the
   same step strings the scoring already uses, plus a "work" record of how well you did each job. */

/* ---------- checking what people write ---------- */
const MONTHS = ["january","february","march","april","may","june","july","august","september","october","november","december"];
const WEEKDAYS = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
const MONTH_ABBR = { jan:1, feb:2, mar:3, apr:4, jun:6, jul:7, aug:8, sep:9, sept:9, oct:10, nov:11, dec:12 };
const DAY_ABBR = { sun:0, mon:1, tue:2, tues:2, wed:3, weds:3, thu:4, thur:4, thurs:4, fri:5, sat:6 };
const ORD_UNITS = ["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth"];
const ORD_WORDS = (() => {
  const w = { tenth:10, eleventh:11, twelfth:12, thirteenth:13, fourteenth:14, fifteenth:15, sixteenth:16, seventeenth:17, eighteenth:18, nineteenth:19, twentieth:20, thirtieth:30 };
  ORD_UNITS.forEach((u, i) => { w[u] = i + 1; w["twenty" + u] = 21 + i; if (i === 0) w["thirty" + u] = 31; });
  return w;
})();
const CARD_WORDS = { one:1, two:2, three:3, four:4, five:5, six:6, seven:7, eight:8, nine:9, ten:10, eleven:11, twelve:12, thirteen:13, fourteen:14, fifteen:15, sixteen:16, seventeen:17, eighteen:18, nineteen:19, twenty:20, thirty:30 };
const DATE_FILLER = new Set(["the","of","today","todays","is","its","it","date","on","day","a"]);

function lev(a, b){
  if (a === b) return 0; if (!a.length) return b.length; if (!b.length) return a.length;
  let prev = Array.from({ length:b.length + 1 }, (_, j) => j);
  for (let i=1;i<=a.length;i++){
    const cur = [i];
    for (let j=1;j<=b.length;j++){
      let v = Math.min(prev[j] + 1, cur[j-1] + 1, prev[j-1] + (a[i-1] === b[j-1] ? 0 : 1));
      if (i > 1 && j > 1 && a[i-1] === b[j-2] && a[i-2] === b[j-1]) v = Math.min(v, (i > 2 && j > 2 ? prev[j-2] : Math.max(i, j) - 2) + 1);   // swapped letters count as one slip
      cur.push(v);
    }
    prev = cur;
  }
  return prev[b.length];
}
// best fuzzy match of a word against a list of {word, val}; exact matches (including accepted abbreviations) win
function fuzzy(word, entries){
  let best = null;
  for (const e of entries){
    const d = lev(word, e.word);
    const limit = e.word.length <= 4 ? (e.abbr ? 0 : 1) : e.word.length <= 6 ? 1 : 2;
    if (d <= limit && (!best || d < best.dist)) best = { val:e.val, dist:d, should:e.full || e.word };
  }
  return best;
}
const MONTH_ENTRIES = MONTHS.map((m, i) => ({ word:m, val:i + 1 })).concat(Object.entries(MONTH_ABBR).map(([w, v]) => ({ word:w, val:v, abbr:true, full:MONTHS[v-1] })));
const DAY_ENTRIES = WEEKDAYS.map((d, i) => ({ word:d, val:i })).concat(Object.entries(DAY_ABBR).map(([w, v]) => ({ word:w, val:v, abbr:true, full:WEEKDAYS[v] })));
const ORD_ENTRIES = Object.entries(ORD_WORDS).map(([w, v]) => ({ word:w, val:v }));
const CARD_ENTRIES = Object.entries(CARD_WORDS).map(([w, v]) => ({ word:w, val:v }));
const cap = s => s ? s[0].toUpperCase() + s.slice(1) : s;
function ordSuffix(n){ const t = n % 100; if (t >= 11 && t <= 13) return "th"; return ["th","st","nd","rd"][n % 10] || "th"; }

/* Reads a written date the way a teacher would: numbers (30/9/2026, 30-09-26, 2026-09-30) or words
   (Wednesday 30th September, Sept 30, the thirtieth of September). Spelling slips in month and day
   names are found (and named) without making the date wrong. */
function checkDate(raw, when=new Date()){
  const T = { D:when.getDate(), M:when.getMonth() + 1, Y:when.getFullYear(), W:when.getDay() };
  const out = { raw:String(raw || "").trim(), isDate:false, ok:false, spelling:[], problems:[], unknown:[] };
  const s = out.raw.toLowerCase();
  if (!s) return out;
  const nums = m => {                              // 30/9/2026, 9/30/26, 2026-09-30
    let d, m2, y = null; const a = +m[1], b = +m[2], c = m[3];
    if (m[1].length === 4){ y = a; m2 = b; d = c ? +c : null; }
    else {
      if (c) y = c.length === 2 ? 2000 + +c : +c;
      if (a === T.D && b === T.M){ d = a; m2 = b; }
      else if (a === T.M && b === T.D){ d = b; m2 = a; out.monthFirst = true; }
      else { d = a; m2 = b; }
    }
    return { day:d, month:m2, year:y };
  };
  const NUMRE = /(\d{1,4})\s*[\/\-.]\s*(\d{1,2})(?:\s*[\/\-.]\s*(\d{2,4}))?/;
  const num = s.replace(/\s+/g, "").match(new RegExp("^" + NUMRE.source + "$"));
  if (num){
    out.isDate = true; out.format = "numbers";
    Object.assign(out, nums(num));
  } else {
    let rest = s, embedded = null;
    const em = s.match(NUMRE); if (em && /[a-z]/.test(s)) { embedded = nums(em); rest = s.replace(em[0], " "); }
    const toks = rest.replace(/[,.;:!]/g, " ").replace(/[\/\-]/g, " ").split(/\s+/).filter(Boolean);
    let day = null, month = null, weekday = null, year = null;
    for (let i=0;i<toks.length;i++){
      let t = toks[i].replace(/'s$/, "").replace(/'/g, "");
      const dm = t.match(/^(\d{1,4})([a-z]*)$/);
      if (dm){
        const n = +dm[1];
        if (dm[1].length === 4 || (day !== null && month !== null && dm[1].length === 2 && !dm[2])) { year = dm[1].length === 2 ? 2000 + n : n; continue; }
        day = n;
        if (dm[2]) { const want = ordSuffix(n); if (dm[2] !== want) out.spelling.push({ typed:toks[i], should:n + want }); }
        continue;
      }
      if (!/^[a-z]+$/.test(t) || DATE_FILLER.has(t)) continue;
      // "twenty first", "thirty-first": join tens with the next ordinal
      const tens = fuzzy(t, [{ word:"twenty", val:20 }, { word:"thirty", val:30 }]);
      if (tens && toks[i+1]) {
        const unit = fuzzy(toks[i+1].replace(/'/g, ""), ORD_UNITS.map((w, k) => ({ word:w, val:k + 1 })));
        if (unit){ day = tens.val + unit.val; if (tens.dist) out.spelling.push({ typed:t, should:tens.should }); if (unit.dist) out.spelling.push({ typed:toks[i+1], should:unit.should }); i++; continue; }
      }
      const mo = fuzzy(t, MONTH_ENTRIES), wd = fuzzy(t, DAY_ENTRIES), od = fuzzy(t, ORD_ENTRIES), cd = fuzzy(t, CARD_ENTRIES);
      const pick = [mo && { k:"month", ...mo }, wd && { k:"weekday", ...wd }, od && { k:"day", ...od }, cd && { k:"day", ...cd }].filter(Boolean).sort((p, q) => p.dist - q.dist)[0];
      if (!pick){ out.unknown.push(toks[i]); continue; }
      if (pick.k === "month") month = pick.val; else if (pick.k === "weekday") weekday = pick.val; else day = pick.val;
      if (pick.dist) out.spelling.push({ typed:toks[i], should:pick.should });
    }
    if (embedded) { day = embedded.day; month = embedded.month; if (embedded.year) year = embedded.year; }
    out.isDate = month !== null || (day !== null && weekday !== null);
    out.format = "words";
    Object.assign(out, { day, month, year, weekday });
  }
  if (!out.isDate) return out;
  if (out.day === null || out.day === undefined) out.problems.push("no day of the month");
  else if (out.day !== T.D) out.problems.push(`the day is ${T.D}, not ${out.day}`);
  if (out.month === null || out.month === undefined) out.problems.push("no month");
  else if (out.month !== T.M) out.problems.push(`the month is ${cap(MONTHS[T.M-1])}${out.month >= 1 && out.month <= 12 ? `, not ${cap(MONTHS[out.month-1])}` : ""}`);
  if (out.weekday !== null && out.weekday !== undefined && out.weekday !== T.W) out.problems.push(`today is ${cap(WEEKDAYS[T.W])}, not ${cap(WEEKDAYS[out.weekday])}`);
  if (out.year !== null && out.year !== undefined && out.year !== T.Y) out.problems.push(`the year is ${T.Y}, not ${out.year}`);
  out.ok = !out.problems.length;
  return out;
}
function checkName(raw, name){
  const typed = String(raw || "").trim(); if (!typed) return null;
  const words = typed.toLowerCase().split(/\s+/);
  if (!name) return (words.length <= 3 && words.every(w => /^[a-z'-]+$/.test(w)) && !checkDate(typed).isDate) ? { typed, exact:true } : null;
  const n = name.toLowerCase();
  let best = Infinity; words.concat([typed.toLowerCase()]).forEach(w => { best = Math.min(best, lev(w, n)); });
  const limit = n.length <= 6 ? 1 : 2;
  return best <= limit && words.some(w => w[0] === n[0]) ? { typed, exact:best === 0, should:name } : null;
}
function describeDate(r){
  if (!r || !r.isDate) return "";
  const slips = r.spelling.length ? ` Spelling: ${r.spelling.map(x => `"${esc(x.typed)}" should be "${esc(cap(x.should))}"`).join(", ")}.` : "";
  return r.ok ? `Wrote the date correctly: "${esc(r.raw)}".${slips}` : `Wrote "${esc(r.raw)}", but ${r.problems.map(esc).join(" and ")}.${slips}`;
}

/* ---------- reading book ---------- */
const READER = {
  title:"Chapter 3: The Storm",
  paras:[
    "Agnes climbs the lighthouse stairs every evening. She lights the lamp, polishes the glass and watches the boats. Her old cat sleeps by the warm window.",
    "One stormy night, the wind howls and the waves crash on the rocks. Agnes hurries down to the harbour with her lantern."
  ],
  verbs:new Set(["climbs","lights","polishes","watches","sleeps"]),
  nouns:new Set(["agnes","lighthouse","stairs","evening","lamp","glass","boats","cat","window"])
};

/* ---------- the world you act on (lasts for the whole stage) ---------- */
const WORK = { hand:null, book:null, reader:null, cones:0, cupboardOpen:false, chairStacked:false, sheet:null, drawing:null, log:{} };
function resetWork(){
  const back = n => { const d = new Date(); d.setDate(d.getDate() - n); return d.toLocaleDateString("en-NZ", { weekday:"long", day:"numeric", month:"long" }).replace(/,/g, ""); };
  Object.assign(WORK, { hand:null, cones:0, cupboardOpen:false, chairStacked:false, sheet:null, drawing:null, log:{},
    book:{ which:null, page:2, visitedLast:false, pages:Array.from({ length:24 }, () => ({ top:"", body:"" })) },
    reader:{ marks:{}, swapped:false } });
  const P = WORK.book.pages;
  P[0] = { top:back(15), body:"Spelling\nharbour, beacon, keeper\nlantern, stormy, rescue", used:true };
  P[1] = { top:back(9), body:"Times tables\n7 x 8 = 56    6 x 9 = 54\n8 x 8 = 64    9 x 7 = 63", used:true };
  P[2] = { top:back(2), body:"Story plan\nAgnes, the cat, a storm.\nThe boat is lost. The lamp goes out!", used:true };
}

/* ---------- small 3D helpers ---------- */
function tween(obj, toPos, secs=0.45, { rotY=null, rotX=null, rotZ=null, lift=0.12 }={}){
  if (!obj) return Promise.resolve();
  const from = obj.position.clone(), t0 = now(), r0 = obj.rotation.clone();
  return new Promise(r => {
    const f = t => { const k = Math.min(1, (t - t0)/secs), e = k < .5 ? 2*k*k : 1 - Math.pow(-2*k + 2, 2)/2;
      obj.position.lerpVectors(from, toPos, e); obj.position.y += Math.sin(k*Math.PI)*lift;
      if (rotY !== null) obj.rotation.y = r0.y + (rotY - r0.y)*e; if (rotX !== null) obj.rotation.x = r0.x + (rotX - r0.x)*e; if (rotZ !== null) obj.rotation.z = r0.z + (rotZ - r0.z)*e;
      if (k >= 1) { ticks.delete(f); r(); } };
    ticks.add(f);
  });
}
function homeOf(p){ return p && p.userData.home; }
function restore(p){ const h = homeOf(p); if (!h) return; p.position.copy(h.pos); p.rotation.copy(h.rot); p.visible = true; }
function worldPos(p, up=0.25){ const v = new THREE.Vector3(); p.getWorldPosition(v); v.y += up; return v; }
let stackedChair = null;
function makeStackedChair(scene){
  const g = new THREE.Group(), seatM = mat(0xE8782A, { roughness:0.6 }), legM = mat(0x1E1A18, { metalness:0.5, roughness:0.4 });
  mbox(0.42, 0.035, 0.4, seatM, 0, 0, 0, g);                                 // seat, upside down on the desk
  mbox(0.42, 0.28, 0.03, seatM, 0, -0.2, -0.2, g);                           // backrest hangs over the back edge
  [[-0.19,-0.17],[0.19,-0.17],[-0.19,0.17],[0.19,0.17]].forEach(([x, z]) => mcyl(0.012, 0.012, 0.42, legM, x, 0.23, z, g, 6));
  g.position.set(0.99, 0.91, -2.82); g.visible = false; scene.add(g); return g;
}

/* ---------- overlays: the book, the reading book, cones, the sheet, drawing ---------- */
function workEl(){ return $("#work"); }
function closeWorkEl(){ const el = workEl(); if (el) { el.hidden = true; el.innerHTML = ""; el.className = "work"; } document.body.classList.remove("working"); }
function openWorkEl(cls, title, html){
  const el = workEl(); el.className = "work " + cls; el.hidden = false; document.body.classList.add("working");
  el.innerHTML = `<div class="work-head"><h3>${title}</h3><button type="button" class="btn small" data-close>Close</button></div><div class="work-body">${html}</div>`;
  return el;
}
function inkOf(){ const h = WORK.hand; return h && h.kind === "pen" ? h.colour : "pencil"; }
const INK = { blue:"#2451A6", black:"#1B1B1B", pencil:"#6E6A64", green:"#2E8B3E", red:"#C0392B" };

/* ---------- the round ---------- */
function doTasks(round, seconds, n, of){
  return new Promise((res, rej) => {
    const room = W3.rooms.classroom, byId = room.byId || {};
    const allowed = new Set([...round.steps, ...round.superseded, ...round.distractors]);
    const panel = $("#taskpanel"), menu = $("#actmenu"), tip = $("#proptip");
    const chosen = [], t0 = now(), end = t0 + seconds;
    let done = false, down = null, dragged = false, overlay = null;
    if (!stackedChair || stackedChair.parent !== room.scene) stackedChair = makeStackedChair(room.scene);
    // start of a round: whatever you were carrying goes back where it came from
    if (WORK.hand && WORK.hand.obj && !WORK.hand.keep) restore(WORK.hand.obj);
    WORK.hand = null;
    panel.hidden = false;
    panel.innerHTML = `<div class="timer"></div><p class="kicker">Instructions ${n} of ${of} · ${round.steps.length} steps</p>
      <p class="tq">Now do what he asked, in order.</p><p class="hint">Drag to look around. Click things to pick them up or use them. Arrow keys turn too.</p>
      <p class="hand-chip" aria-live="polite"></p>
      <ol class="steps-chosen done-list" aria-label="What you have done"></ol>
      <div class="task-actions"><button type="button" class="btn ghost" data-act="turn">Turn around</button><button type="button" class="btn" data-act="done" disabled>I'm done</button></div>
      <button type="button" class="linkbtn" data-act="list">Use a list instead</button>`;
    const list = panel.querySelector(".steps-chosen"), doneBtn = panel.querySelector('[data-act="done"]'), bar = panel.querySelector(".timer"), handChip = panel.querySelector(".hand-chip");
    const render = () => {
      list.innerHTML = chosen.length ? chosen.map(c => `<li><span>${esc(c)}</span></li>`).join("") : `<li class="empty">What you do shows up here.</li>`;
      doneBtn.disabled = !chosen.length;
      const h = WORK.hand; handChip.innerHTML = h ? `In your hand: <b>${esc(h.label)}</b>` : "Your hands are empty.";
    };
    render();
    const say = (p, text) => spawnWord(p ? worldPos(p, 0.3) : null, text, "say", 1.6);
    const nudge = p => { bumpProp(p); };
    // record a step (only things the teacher's round can hear about count)
    const record = (text, p) => {
      if (!allowed.has(text) && !/^Count out \d+ cones$/.test(text)) return false;
      if (!chosen.includes(text)) chosen.push(text);
      tick(); if (p) { bumpProp(p); say(p, text); } render(); return true;
    };
    const unrecord = text => { const i = chosen.indexOf(text); if (i >= 0) { chosen.splice(i, 1); render(); } };
    const hold = (p, label, kind, extra={}) => {
      if (WORK.hand && WORK.hand.obj && WORK.hand.obj !== p) restore(WORK.hand.obj);
      WORK.hand = { obj:p, label, kind, ...extra }; tick();
      if (p) { const cam = W3.camera.position.clone(); tween(p, cam.lerp(p.position, 0.55), 0.3).then(() => { p.visible = false; }); }
      render();
    };
    const drop = () => { WORK.hand = null; render(); };
    const closeMenu = () => { menu.hidden = true; menu.innerHTML = ""; };
    const openMenu = (p, header, opts, x, y) => {
      menu.innerHTML = `<p>${esc(header)}</p>${opts.map((o, i) => `<button type="button" data-i="${i}">${esc(o.label)}</button>`).join("")}<button type="button" class="cancel">Never mind</button>`;
      menu.hidden = false; tip.hidden = true;
      const w = menu.offsetWidth, h = menu.offsetHeight;
      menu.style.left = Math.max(8, Math.min(innerWidth - w - 8, x + 12)) + "px"; menu.style.top = Math.max(8, Math.min(innerHeight - h - 8, y - 20)) + "px";
      menu.querySelectorAll("button[data-i]").forEach(b => b.addEventListener("click", () => { closeMenu(); opts[+b.dataset.i].run(); }));
      menu.querySelector(".cancel").addEventListener("click", closeMenu);
      const first = menu.querySelector("button"); if (first) first.focus({ preventScroll:true });
    };
    const choose = (p, header, opts, x, y) => { opts = opts.filter(Boolean); if (!opts.length) { nudge(p); return; } if (opts.length === 1 && !opts[0].ask) opts[0].run(); else openMenu(p, header, opts, x, y); };
    const opt = (text, run, label) => allowed.has(text) ? { label:label || text, run:run || (() => record(text, lastProp)) } : null;
    let lastProp = null;

    /* --- the exercise book --- */
    const takeOut = (p, colour, text) => {
      const ex = byId.exbook, B = WORK.book;
      if (B.which && B.which !== colour) { const prev = byId[B.which + "book"]; if (prev) restore(prev); }
      B.which = colour; record(text, null);
      tween(p, ex.position.clone(), 0.4, { rotY:ex.rotation.y }).then(() => {
        p.visible = false; ex.visible = true; ex.userData.cover.material = mat(colour === "red" ? 0xC0392B : 0x3E8E4A);
        ex.userData.task.label = `Your ${colour} exercise book`; bumpProp(ex);
      });
    };
    const openBook = () => {
      const B = WORK.book, name = `${cap(B.which || "green")} exercise book`;
      const el = openWorkEl("book", esc(name), `<div class="bookwrap"><div class="sheet" style="--pen:${INK[inkOf()]}"></div>
        <div class="pager"><button type="button" class="btn ghost small" data-pg="first">« First</button><button type="button" class="btn ghost small" data-pg="prev">‹ Back</button>
        <span class="pgno"></span><button type="button" class="btn ghost small" data-pg="next">Next ›</button><button type="button" class="btn ghost small" data-pg="last">Last »</button></div>
        <p class="work-note">${WORK.hand && WORK.hand.kind === "pen" ? `Writing with the ${esc(WORK.hand.label.toLowerCase())}.` : "Writing in pencil."} Tap a line to write on it.</p></div>`);
      const sheet = el.querySelector(".sheet"), pgno = el.querySelector(".pgno");
      const draw = () => {
        const i = B.page, pg = B.pages[i], used = !!pg.used;
        pgno.textContent = `Page ${i + 1} of ${B.pages.length}`;
        sheet.classList.toggle("used", used);
        const bodyLines = 9;
        sheet.innerHTML = used
          ? `<div class="topline"><span class="hand old">${esc(pg.top)}</span></div>${pg.body.split("\n").concat(Array(bodyLines).fill("")).slice(0, bodyLines).map(l => `<div class="line"><span class="hand old">${esc(l)}</span></div>`).join("")}`
          : `<div class="topline"><input class="hand" type="text" maxlength="48" aria-label="Top line of page ${i + 1}" value="${esc(pg.top)}" autocomplete="off" spellcheck="false"></div>
             <textarea class="hand body" rows="${bodyLines}" aria-label="Page ${i + 1}" spellcheck="false">${esc(pg.body)}</textarea>`;
        if (!used) {
          const top = sheet.querySelector("input"), body = sheet.querySelector("textarea");
          top.addEventListener("input", () => { pg.top = top.value; pg.ink = inkOf(); B.lastPage = i; });
          body.addEventListener("input", () => { pg.body = body.value; });
          top.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); body.focus(); } });
        }
        if (i === B.pages.length - 1 && !B.visitedLast) { B.visitedLast = true; record("Turn to the last page", null); }
      };
      el.querySelectorAll("[data-pg]").forEach(b => b.addEventListener("click", () => {
        const k = b.dataset.pg, L = B.pages.length - 1;
        B.page = k === "first" ? 0 : k === "last" ? L : Math.max(0, Math.min(L, B.page + (k === "next" ? 1 : -1))); draw();
      }));
      draw();
      overlay = { el, close:evalBook };
    };
    const evalBook = () => {
      const B = WORK.book, who = state.player && state.player.name;
      // look at every page you wrote a top line on; the date and your name each count once
      let dateRes = null, datePage = -1, nameRes = null;
      B.pages.forEach((pg, i) => {
        if (pg.used || !pg.top.trim()) return;
        const d = checkDate(pg.top);
        if (d.isDate) { if (!dateRes || d.ok || !dateRes.ok) { dateRes = d; datePage = i; } return; }
        const nm = checkName(pg.top, who); if (nm) nameRes = nm;
      });
      const DATE = "Write today's date at the top of a new page", NAME = "Write your name at the top";
      if (dateRes) {
        WORK.log.date = { ...dateRes, page:datePage + 1, ink:B.pages[datePage].ink };
        if (dateRes.ok) record(DATE, null); else unrecord(DATE);
      } else { delete WORK.log.date; unrecord(DATE); }
      if (nameRes) { WORK.log.name = nameRes; record(NAME, null); } else { delete WORK.log.name; unrecord(NAME); }
    };

    /* --- the reading book: underline words --- */
    const openReader = () => {
      const R = WORK.reader, pen = WORK.hand && WORK.hand.kind === "pen" ? WORK.hand : null;
      const words = (para, pi) => para.split(/(\s+)/).map((w, wi) => /\s+/.test(w) ? w : (() => {
        const key = `${pi}:${wi}`, mk = R.marks[key];
        return `<button type="button" class="bword${mk ? " marked" : ""}" data-k="${key}" style="${mk ? `--mark:${INK[mk]}` : ""}">${esc(w)}</button>`;
      })()).join("");
      const el = openWorkEl("reader", R.swapped ? "Reading book (your neighbour's copy)" : "Reading book",
        `<div class="page-read"><h4>${esc(READER.title)}</h4>${READER.paras.map((p, i) => `<p>${words(p, i)}</p>`).join("")}</div>
         <p class="work-note">${pen ? `Tap a word to underline it with the ${esc(pen.label.toLowerCase())}. Tap it again to rub it out.` : "You need a pen to underline anything. Close the book and pick one up."}</p>`);
      el.querySelectorAll(".bword").forEach(b => b.addEventListener("click", () => {
        if (!pen) { el.querySelector(".work-note").classList.add("warn"); return; }
        const k = b.dataset.k;
        if (R.marks[k]) { delete R.marks[k]; b.classList.remove("marked"); } else { R.marks[k] = pen.colour; b.classList.add("marked"); b.style.setProperty("--mark", INK[pen.colour]); }
      }));
      overlay = { el, close:evalReader };
    };
    const evalReader = () => {
      const R = WORK.reader, clean = w => w.toLowerCase().replace(/[^a-z']/g, "");
      const tokens = READER.paras.map(p => p.split(/(\s+)/));
      const first = [], other = [], inks = new Set();
      Object.entries(R.marks).forEach(([k, ink]) => { const [pi, wi] = k.split(":").map(Number); const w = clean(tokens[pi][wi]); (pi === 0 ? first : other).push(w); inks.add(ink); });
      const VERBS = "Underline the verbs in the first paragraph", NOUNS = "Underline the nouns in the first paragraph";
      unrecord(VERBS); unrecord(NOUNS);
      if (!first.length && !other.length) { delete WORK.log.underline; return; }
      const v = first.filter(w => READER.verbs.has(w)).length, nn = first.filter(w => READER.nouns.has(w)).length;
      const target = v >= nn ? "verbs" : "nouns", set = target === "verbs" ? READER.verbs : READER.nouns;
      WORK.log.underline = { target, found:first.filter(w => set.has(w)).length, of:set.size, wrong:first.filter(w => !set.has(w)), otherPara:other.length, inks:[...inks] };
      if (v || nn) record(target === "verbs" ? VERBS : NOUNS, null);
    };

    /* --- counting cones --- */
    const openCones = () => {
      const TOTAL = 30;
      const el = openWorkEl("cones", "Cones", `<p class="work-note">Tap a cone to move it to your pile. Tap one in your pile to put it back.</p>
        <div class="cone-rows"><div><h4>In the cupboard</h4><div class="conebox src"></div></div><div><h4>Your pile</h4><div class="conebox pile"></div></div></div>
        <div class="work-foot"><button type="button" class="btn" data-conesdone>Done counting</button></div>`);
      const src = el.querySelector(".src"), pile = el.querySelector(".pile");
      const cone = () => `<button type="button" class="cone" aria-label="Cone"><svg viewBox="0 0 20 22" aria-hidden="true"><path d="M10 1 L17 19 H3 Z" fill="#F07A22" stroke="#2A1A0C" stroke-width="1.4"/><path d="M6.6 11 H13.4" stroke="#FFF3DC" stroke-width="2"/><rect x="1" y="18.5" width="18" height="3" fill="#C85A12" stroke="#2A1A0C" stroke-width="1"/></svg></button>`;
      const draw = () => { src.innerHTML = cone().repeat(TOTAL - WORK.cones); pile.innerHTML = cone().repeat(WORK.cones);
        src.querySelectorAll(".cone").forEach(b => b.addEventListener("click", () => { WORK.cones++; tick(); draw(); }));
        pile.querySelectorAll(".cone").forEach(b => b.addEventListener("click", () => { WORK.cones--; draw(); })); };
      draw();
      el.querySelector("[data-conesdone]").addEventListener("click", () => closeOverlay());
      overlay = { el, close:evalCones };
    };
    const evalCones = () => {
      const n = WORK.cones, T = "Count out twenty cones", W = "Count out twelve cones";
      chosen.filter(c => /^Count out/.test(c)).forEach(unrecord);
      if (!n) { delete WORK.log.cones; if (WORK.hand && WORK.hand.kind === "cones") drop(); return; }
      WORK.log.cones = { n };
      record(n === 20 ? T : n === 12 ? W : `Count out ${n} cones`, byId.cones);
      WORK.hand = { obj:null, label:`${n} cone${n === 1 ? "" : "s"}`, kind:"cones", n }; render();
    };

    /* --- the equipment sheet --- */
    const openSheet = () => {
      const S = WORK.sheet || (WORK.sheet = { qty:"", ink:0, strokes:[] });
      const el = openWorkEl("sheetw", "Equipment sheet", `<table class="eqsheet"><thead><tr><th>Item</th><th>How many</th><th>Taken by (sign)</th></tr></thead>
        <tbody><tr class="done-row"><td>Netballs</td><td class="hand old">4</td><td class="hand old">Mr D</td></tr>
        <tr><td>Cones</td><td><input class="hand qty" inputmode="numeric" maxlength="4" value="${esc(S.qty)}" aria-label="How many cones"></td><td><canvas class="sig" width="420" height="120" aria-label="Sign here"></canvas></td></tr></tbody></table>
        <div class="work-foot"><button type="button" class="btn ghost small" data-sigclear>Clear signature</button><button type="button" class="btn" data-sigdone>Done</button></div>`);
      const q = el.querySelector(".qty"); q.addEventListener("input", () => { S.qty = q.value; });
      const cv = el.querySelector(".sig"), ctx = cv.getContext("2d");
      const paint = () => { ctx.clearRect(0,0,cv.width,cv.height); ctx.strokeStyle = "#B9A98C"; ctx.setLineDash([6,6]); ctx.beginPath(); ctx.moveTo(10, 96); ctx.lineTo(410, 96); ctx.stroke(); ctx.setLineDash([]);
        ctx.strokeStyle = INK[inkOf()]; ctx.lineWidth = 3; ctx.lineCap = "round"; ctx.lineJoin = "round";
        S.strokes.forEach(st => { ctx.beginPath(); st.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.stroke(); }); };
      let cur = null;
      const at = e => { const r = cv.getBoundingClientRect(); return [(e.clientX - r.left)*cv.width/r.width, (e.clientY - r.top)*cv.height/r.height]; };
      cv.addEventListener("pointerdown", e => { cur = [at(e)]; S.strokes.push(cur); try { cv.setPointerCapture(e.pointerId); } catch(_) {} e.preventDefault(); });
      cv.addEventListener("pointermove", e => { if (!cur) return; const p = at(e), l = cur[cur.length-1]; S.ink += Math.hypot(p[0]-l[0], p[1]-l[1]); cur.push(p); paint(); });
      cv.addEventListener("pointerup", () => { cur = null; });
      el.querySelector("[data-sigclear]").addEventListener("click", () => { S.strokes = []; S.ink = 0; paint(); });
      el.querySelector("[data-sigdone]").addEventListener("click", () => closeOverlay());
      paint();
      overlay = { el, close:() => {
        const signed = S.ink > 60;
        WORK.log.sheet = { signed, qty:S.qty.trim(), counted:WORK.cones };
        if (signed) record("Sign the equipment sheet", byId.sheet); else unrecord("Sign the equipment sheet");
      } };
    };

    /* --- drawing (younger players) --- */
    const openDrawing = () => {
      const h = WORK.hand, tool = h && (h.kind === "crayons" || h.kind === "paints") ? h : null;
      const D = WORK.drawing || (WORK.drawing = { strokes:[] });
      const el = openWorkEl("drawing", "Drawing paper", `<canvas class="drawcv" width="640" height="420" aria-label="Drawing paper"></canvas>
        <p class="work-note">${tool ? `Drawing with the ${esc(tool.label.toLowerCase())}.` : "You need something to draw with. Close this and get it first."}</p>
        <div class="work-foot"><button type="button" class="btn ghost small" data-drclear>Start again</button><button type="button" class="btn" data-drdone>Finished</button></div>`);
      const cv = el.querySelector(".drawcv"), ctx = cv.getContext("2d");
      const paint = () => { ctx.fillStyle = "#FFFDF5"; ctx.fillRect(0,0,cv.width,cv.height); ctx.lineCap = "round"; ctx.lineJoin = "round";
        D.strokes.forEach(st => { ctx.strokeStyle = st.c; ctx.lineWidth = st.w; ctx.beginPath(); st.p.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.stroke(); }); };
      let cur = null;
      const at = e => { const r = cv.getBoundingClientRect(); return [(e.clientX - r.left)*cv.width/r.width, (e.clientY - r.top)*cv.height/r.height]; };
      cv.addEventListener("pointerdown", e => { if (!tool) { el.querySelector(".work-note").classList.add("warn"); return; } cur = { c:tool.colour, w:tool.kind === "paints" ? 16 : 8, p:[at(e)] }; D.strokes.push(cur); try { cv.setPointerCapture(e.pointerId); } catch(_) {} e.preventDefault(); });
      cv.addEventListener("pointermove", e => { if (!cur) return; cur.p.push(at(e)); paint(); });
      cv.addEventListener("pointerup", () => { cur = null; });
      el.querySelector("[data-drclear]").addEventListener("click", () => { D.strokes = []; paint(); });
      el.querySelector("[data-drdone]").addEventListener("click", () => {
        if (!D.strokes.length) { closeOverlay(); return; }
        const foot = el.querySelector(".work-foot");
        foot.innerHTML = `<span class="work-q">What did you draw?</span><button type="button" class="btn small" data-what="sun">A big sun</button><button type="button" class="btn small" data-what="moon">A big moon</button><button type="button" class="btn ghost small" data-what="other">Something else</button>`;
        foot.querySelectorAll("[data-what]").forEach(b => b.addEventListener("click", () => { D.what = b.dataset.what; closeOverlay(); }));
      });
      paint();
      overlay = { el, close:() => {
        if (!D.strokes.length) return;
        WORK.log.drawing = { what:D.what || "other", colour:tool ? tool.label : null };
        if (D.what === "sun") record("Draw a big sun", byId.paper); else if (D.what === "moon") record("Draw a big moon", byId.paper);
      } };
    };
    const closeOverlay = () => { if (!overlay) return; const o = overlay; overlay = null; try { o.close(); } finally { closeWorkEl(); } };

    /* --- what clicking each thing does --- */
    const interact = (p, x, y) => {
      lastProp = p; const id = p.userData.id, h = WORK.hand, label = p.userData.task.label;
      const holding = k => h && h.kind === k;
      switch (id) {
        case "greenbook": return choose(p, label, [opt("Take out your green exercise book", () => takeOut(p, "green", "Take out your green exercise book"))], x, y);
        case "redbook": case "bluebook": {
          const col = id === "redbook" ? "red" : "blue";
          return choose(p, label, [
            opt("Take out your red exercise book", () => takeOut(p, "red", "Take out your red exercise book")),
            (allowed.has(`Put the ${col} book on the shelf`) || allowed.has("Put the book in your bag")) ? { label:"Pick it up", run:() => hold(p, `${cap(col)} book`, "book", { colour:col }) } : null
          ].filter(o => o && (col === "red" || !/red exercise/.test(o.label))), x, y);
        }
        case "exbook": return openBook();
        case "reader": return openReader();
        case "bluepen": case "blackpen": {
          const col = id === "bluepen" ? "blue" : "black";
          hold(p, `${cap(col)} pen`, "pen", { colour:col }); record(`Grab a ${col} pen`, null); return;
        }
        case "paper": return openDrawing();
        case "worksheet": return hold(p, "Your worksheet", "worksheet");
        case "register": return hold(p, "The register", "register");
        case "traydesk": case "traydoor": {
          const text = id === "traydesk" ? "Put your worksheet in the tray on his desk" : "Put your worksheet in the tray by the door";
          if (!holding("worksheet")) { say(p, h ? `You can't put the ${h.label.toLowerCase()} there` : "Your hands are empty"); return; }
          if (!allowed.has(text)) return nudge(p);
          const ws = h.obj; ws.visible = true; ws.position.copy(worldPos(p, 0.03)); ws.rotation.set(0, p.rotation.y, 0); h.keep = true; WORK.hand = null; record(text, p); return;
        }
        case "chair": return choose(p, label, [
          opt("Stack your chair", () => { if (WORK.chairStacked) return; WORK.chairStacked = true; ["greenbook","redbook","bluebook","exbook","reader","bluepen","blackpen","paper","worksheet"].forEach(k => { if (byId[k] && byId[k] !== (WORK.hand && WORK.hand.obj)) byId[k].visible = false; });
            stackedChair.visible = true; stackedChair.position.y = 1.5; stackedChair.rotation.z = Math.PI; tween(stackedChair, new THREE.Vector3(0.99, 0.91, -2.82), 0.5, { lift:0 }); record("Stack your chair", p); }),
          opt("Stack all the chairs"), opt("Sit down"), opt("Stop kicking the chair")], x, y);
        case "mia": return choose(p, "Say to Mia", [opt("Give the pen back to Mia", () => { if (holding("pen")) drop(); record("Give the pen back to Mia", p); }, "Here's your pen back, Mia")], x, y);
        case "sam": return choose(p, "Say to Sam", [opt("Remind Sam about his permission slip", null, "Sam, don't forget your permission slip!"), opt("Stop kicking the chair", null, "Sam, stop kicking the chair!"), opt("Close the window", null, "Sam, close the window")], x, y);
        case "left": case "right": {
          const text = `Swap books with the person on your ${id}`;
          return choose(p, `The person on your ${id}`, [opt(text, () => { WORK.reader.swapped = true; const r = byId.reader; if (r && r.userData.cover) r.userData.cover.material = mat(id === "left" ? 0x2F7A6B : 0xB5552F); record(text, p); }, "Swap reading books")], x, y);
        }
        case "door": return choose(p, label, [
          holding("register") ? opt("Take the register back to the office", () => { h.keep = true; WORK.hand = null; record("Take the register back to the office", p); }) : null,
          opt("Meet him on the field at ten past", null, "Go out to the field"), opt("Meet him in the gym", null, "Go to the gym")], x, y);
        case "phones": return choose(p, label, [opt("Put your phone in the box")], x, y);
        case "window": return choose(p, label, [opt("Close the window")], x, y);
        case "lunch": return choose(p, label, [opt("Get your lunchbox", () => { hold(p, "Your lunchbox", "lunch"); record("Get your lunchbox", null); })], x, y);
        case "hooks": return choose(p, label, [opt("Get your coat"),
          holding("book") ? opt("Put the book in your bag", () => { h.keep = true; WORK.hand = null; record("Put the book in your bag", p); }) : null], x, y);
        case "greencray": case "bluecray": case "paints": {
          const text = id === "paints" ? "Get the paints" : `Get the ${id === "greencray" ? "green" : "blue"} crayons`;
          if (!allowed.has(text)) return nudge(p);
          hold(p, id === "paints" ? "Paints" : `${id === "greencray" ? "Green" : "Blue"} crayons`, id === "paints" ? "paints" : "crayons", { colour:id === "bluecray" ? INK.blue : id === "paints" ? "#E8A33D" : INK.green });
          record(text, null); return;
        }
        case "sink": return choose(p, label, [opt("Wash your hands"), opt("Dry your hands")], x, y);
        case "cupboard": {
          if (WORK.cupboardOpen) return nudge(p);
          return choose(p, label, [opt("Take the sports gear out of the cupboard", () => {
            WORK.cupboardOpen = true; (p.userData.doors || []).forEach((d, i) => tween(d, d.position.clone(), 0.6, { rotY:(i ? -1 : 1)*1.9, lift:0 }));
            if (byId.cones) byId.cones.visible = true; if (byId.balls) byId.balls.visible = true; record("Take the sports gear out of the cupboard", p); })], x, y);
        }
        case "cones": return openCones();
        case "bluebag": case "redbag": {
          const text = `Put them in the ${id === "bluebag" ? "blue" : "red"} bag`;
          if (!holding("cones")) { say(p, h ? `You can't put the ${h.label.toLowerCase()} in there` : "Your hands are empty"); return; }
          if (!allowed.has(text)) return nudge(p);
          WORK.log.bag = { colour:id === "bluebag" ? "blue" : "red", n:h.n }; WORK.hand = null; record(text, p); return;
        }
        case "sheet": return openSheet();
        case "shelf": {
          if (!holding("book")) { say(p, "Your hands are empty"); return; }
          const text = `Put the ${h.colour} book on the shelf`; if (!allowed.has(text)) return nudge(p);
          const b = h.obj; b.visible = true; b.position.set(1.0 + (h.colour === "red" ? 0 : 0.3), 1.86, -4.62); b.rotation.set(0, 0, 0); h.keep = true; WORK.hand = null; record(text, p); return;
        }
        default: return nudge(p);
      }
    };

    /* --- input --- */
    const onUI = e => e.target && e.target.closest && e.target.closest(".taskpanel, .actmenu, .hud, .veil, .results, .work");
    const pd = e => { if (onUI(e) || overlay) return; closeMenu(); down = { x:e.clientX, y:e.clientY }; dragged = false; };
    const pm = e => {
      if (down) {
        const dx = e.clientX - down.x, dy = e.clientY - down.y;
        if (dragged || Math.abs(dx) + Math.abs(dy) > 5) { dragged = true; turnBy(dx*0.006, dy*0.0045); down = { x:e.clientX, y:e.clientY }; tip.hidden = true; setHover(null); }
        return;
      }
      if (onUI(e) || overlay || !menu.hidden) { tip.hidden = true; if (overlay) setHover(null); document.body.style.cursor = ""; return; }
      const p = pickProp(e.clientX, e.clientY);
      setHover(p); document.body.style.cursor = p ? "pointer" : "grab";
      if (p) { tip.hidden = false; tip.textContent = p.userData.task.label; tip.style.left = (e.clientX + 14) + "px"; tip.style.top = (e.clientY + 16) + "px"; } else tip.hidden = true;
    };
    const pu = e => {
      if (!down) return; const wasDrag = dragged; down = null; dragged = false;
      if (wasDrag || onUI(e) || done || paused || overlay) return;
      const p = pickProp(e.clientX, e.clientY); if (!p) return;
      tip.hidden = true; interact(p, e.clientX, e.clientY);
    };
    const kd = e => {
      if (e.key === "Escape") { if (overlay) closeOverlay(); else closeMenu(); return; }
      if (overlay || (e.target && e.target.closest && e.target.closest("input, textarea"))) return;
      if (e.key === "ArrowLeft") { turnBy(0.4); e.preventDefault(); } if (e.key === "ArrowRight") { turnBy(-0.4); e.preventDefault(); }
      if (e.key === "ArrowUp") { turnBy(0, 0.25); e.preventDefault(); } if (e.key === "ArrowDown") { turnBy(0, -0.25); e.preventDefault(); }
    };
    const onWorkClick = e => { if (e.target.closest("[data-close]")) closeOverlay(); };
    workEl().addEventListener("click", onWorkClick);
    addEventListener("pointerdown", pd); addEventListener("pointermove", pm); addEventListener("pointerup", pu); addEventListener("keydown", kd);
    const tt = t => { const left = Math.max(0, end - t); bar.style.width = (left/seconds*100) + "%"; if (left <= 0 && !paused) finish(); };
    ticks.add(tt);
    const cleanup = () => {
      if (overlay) closeOverlay();
      workEl().removeEventListener("click", onWorkClick);
      removeEventListener("pointerdown", pd); removeEventListener("pointermove", pm); removeEventListener("pointerup", pu); removeEventListener("keydown", kd);
      ticks.delete(tt); closeMenu(); closeWorkEl(); tip.hidden = true; panel.hidden = true; panel.innerHTML = ""; setHover(null); document.body.style.cursor = "";
    };
    taskCleanup = cleanup;
    const result = () => ({ chosen:chosen.slice(), seconds:+(now() - t0).toFixed(1), work:JSON.parse(JSON.stringify(WORK.log)) });
    const finish = () => { if (done) return; if (overlay) closeOverlay(); done = true; offSkip(); taskCleanup = null; cleanup(); res(result()); };
    const offSkip = onSkip(() => { done = true; taskCleanup = null; cleanup(); rej(new Skipped()); });
    panel.querySelector('[data-act="turn"]').addEventListener("click", () => { tip.hidden = true; setHover(null); turnBy(Math.PI); });
    doneBtn.addEventListener("click", finish);
    panel.querySelector('[data-act="list"]').addEventListener("click", () => {
      if (done) return; if (overlay) closeOverlay(); done = true; offSkip(); taskCleanup = null; cleanup();
      pickSteps(round, Math.max(10, end - now()), n, of).then(r => res({ chosen:chosen.concat(r.chosen), seconds:+(now() - t0).toFixed(1), work:JSON.parse(JSON.stringify(WORK.log)) }), rej);
    });
  });
}

/* what you actually did, for the results screen */
function workDetail(log){
  if (!log) return "";
  const li = [];
  if (log.date) li.push(`<li>${describeDate(log.date)}${log.date.page && log.date.page <= 3 ? " It went on an old page, not a new one." : ""}</li>`);
  if (log.name) li.push(`<li>Wrote a name at the top${log.name.exact ? "" : `, spelled "${esc(log.name.typed)}"`}.</li>`);
  if (log.underline) { const u = log.underline; li.push(`<li>Underlined ${u.found} of the ${u.of} ${u.target}${u.wrong.length ? `, plus ${u.wrong.length} word${u.wrong.length === 1 ? "" : "s"} that ${u.wrong.length === 1 ? "isn't" : "aren't"} (${u.wrong.slice(0, 4).map(esc).join(", ")})` : ""}${u.otherPara ? `, and ${u.otherPara} in the second paragraph` : ""}, in ${u.inks.map(i => i === "pencil" ? "pencil" : i + " pen").join(" and ")}.</li>`); }
  if (log.cones) li.push(`<li>Counted out ${log.cones.n} cone${log.cones.n === 1 ? "" : "s"}${log.cones.n === 20 ? " (right)" : " (he asked for twenty)"}.</li>`);
  if (log.bag) li.push(`<li>Put the cones in the ${log.bag.colour} bag.</li>`);
  if (log.sheet) li.push(`<li>${log.sheet.signed ? "Signed the equipment sheet" : "Opened the equipment sheet but didn't sign it"}${log.sheet.qty ? `, and wrote ${esc(log.sheet.qty)} cones on it${+log.sheet.qty !== log.sheet.counted ? ` (you counted ${log.sheet.counted})` : ""}` : ""}.</li>`);
  if (log.drawing) li.push(`<li>Drew ${log.drawing.what === "other" ? "something" : "a big " + log.drawing.what}${log.drawing.colour ? ` with the ${esc(log.drawing.colour.toLowerCase())}` : ""}.</li>`);
  return li.length ? `<p class="fine"><b>What you actually did</b></p><ul class="worklist">${li.join("")}</ul>` : "";
}
