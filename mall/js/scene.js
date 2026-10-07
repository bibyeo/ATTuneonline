/* ---------- 3D mall: lamp-lit rooms, flat pixel-art people (same look as the Focus Check) ---------- */
const W3 = { ok:false, renderer:null, composer:null, camera:null, scene:null, tex:{}, assets:{}, mouse:{x:0, y:0},
  curPos:null, curLook:null, camPos:null, camLook:null, fovTarget:50, world:null, texts:[], loads:{} };
const V = (x, y, z) => new THREE.Vector3(x, y, z);

const SPRITE_FILES = {
  derpy0:"sprites/derpy-talk-0.png", derpy1:"sprites/derpy-talk-1.png",
  s0:"sprites/student-0.png", s1:"sprites/student-1.png", s2:"sprites/student-2.png",
  s3:"sprites/student-3.png", s4:"sprites/student-4.png", s5:"sprites/student-5.png",
  peacock:"sprites/peacock.png", porcupine:"sprites/porcupine.png"
};
const PIXEL_FONT = "'Pixelify Sans', 'Courier New', monospace";

/* where the camera sits and looks for each part of the level */
const SHOTS = {
  intro:  { pos:[-9.5, 6.8, -10], look:[1.5, 1.6, 14], fov:54 },
  listen: { pos:[-1.5, 1.75, -9.5], look:[0.6, 2.3, 14], fov:50 },
  follow: { pos:[-6.2, 1.8, -7.5], look:[-11, 2.5, 14], fov:58 },
  twist:  { pos:[-2.5, 3.2, -5.5], look:[0, 1.3, 9], fov:54 },
  stay:   { pos:[4.4, 1.7, 17.5], look:[8.8, 1.75, 33.5], fov:56 },
  wrap:   { pos:[-7.5, 5.2, 24], look:[2, 1.5, 5], fov:54 }
};

function init3D(){
  if (!window.THREE) return false;
  if (W3.ok) return true;
  try {
    W3.small = !!(window.matchMedia && matchMedia("(pointer: coarse)").matches);
    const r = new THREE.WebGLRenderer({ antialias:!W3.small, powerPreference:"high-performance" });
    r.setPixelRatio(W3.small ? 1 : Math.min(window.devicePixelRatio || 1, 1.5));
    r.setSize(innerWidth, innerHeight);
    r.outputColorSpace = THREE.SRGBColorSpace;
    r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 1.0;
    $("#stage").appendChild(r.domElement);
    W3.renderer = r;
    W3.camera = new THREE.PerspectiveCamera(50, innerWidth/innerHeight, 0.05, 140);
    W3.curPos = V(...SHOTS.intro.pos); W3.curLook = V(...SHOTS.intro.look); W3.camPos = W3.curPos.clone(); W3.camLook = W3.curLook.clone();
    W3.lastW = innerWidth;
    setupPost();
    addEventListener("resize", () => {
      if (W3.small && innerWidth === W3.lastW) return;
      W3.lastW = innerWidth;
      r.setSize(innerWidth, innerHeight); W3.camera.aspect = innerWidth/innerHeight; W3.camera.updateProjectionMatrix();
      if (W3.composer) { W3.composer.setSize(innerWidth, innerHeight); W3.grade.uniforms.res.value.set(innerWidth, innerHeight); }
    });
    addEventListener("pointermove", e => { W3.mouse.x = (e.clientX/innerWidth)*2 - 1; W3.mouse.y = (e.clientY/innerHeight)*2 - 1; });
    W3.ok = true;
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => W3.texts.forEach(redrawTex));
    return true;
  } catch(e) { console.error(e); W3.ok = false; return false; }
}

/* the Focus Check's grade: bloom on the brightest areas only, a warm push, richer colour, a soft vignette */
const GRADE_SHADER = {
  uniforms:{ tDiffuse:{ value:null }, res:{ value:null } },
  vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",
  fragmentShader:`
    uniform sampler2D tDiffuse; uniform vec2 res; varying vec2 vUv;
    void main(){
      vec2 uv = vUv;
      vec4 c = texture2D(tDiffuse, uv);
      float b = smoothstep(0.12, 0.0, uv.y);
      if (b > 0.002) {
        vec2 px = vec2(1.0/res.x, 1.0/res.y) * (1.0 + 7.0*b);
        vec4 acc = c;
        acc += texture2D(tDiffuse, uv + px*vec2( 1.0, 0.0)); acc += texture2D(tDiffuse, uv + px*vec2(-1.0, 0.0));
        acc += texture2D(tDiffuse, uv + px*vec2( 0.0, 1.0)); acc += texture2D(tDiffuse, uv + px*vec2( 0.0,-1.0));
        acc += texture2D(tDiffuse, uv + px*vec2( 0.7, 0.7)); acc += texture2D(tDiffuse, uv + px*vec2(-0.7, 0.7));
        acc += texture2D(tDiffuse, uv + px*vec2( 0.7,-0.7)); acc += texture2D(tDiffuse, uv + px*vec2(-0.7,-0.7));
        c = mix(c, acc/9.0, b);
      }
      vec3 col = c.rgb * vec3(1.05, 1.0, 0.9);
      float l = dot(col, vec3(0.299, 0.587, 0.114));
      col = mix(vec3(l), col, 1.16);
      vec2 d = (uv - 0.5) * vec2(1.05, 1.2);
      col *= mix(0.5, 1.0, smoothstep(0.9, 0.32, length(d)));
      gl_FragColor = vec4(col, 1.0);
    }`
};
function setupPost(){
  if (!THREE.EffectComposer) return;
  try {
    const comp = new THREE.EffectComposer(W3.renderer);
    const rp = new THREE.RenderPass(new THREE.Scene(), W3.camera);
    const bloom = new THREE.UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.24, 0.4, 0.92);
    const out = new THREE.OutputPass();
    const grade = new THREE.ShaderPass({ uniforms:THREE.UniformsUtils.clone(GRADE_SHADER.uniforms), vertexShader:GRADE_SHADER.vertexShader, fragmentShader:GRADE_SHADER.fragmentShader });
    grade.uniforms.res.value = new THREE.Vector2(innerWidth, innerHeight);
    comp.addPass(rp); if (!W3.small) comp.addPass(bloom); comp.addPass(out); comp.addPass(grade);
    W3.composer = comp; W3.renderPass = rp; W3.grade = grade;
    document.body.classList.add("graded");
  } catch(e) { console.warn("post-processing off", e); W3.composer = null; }
}

/* ---------- assets ---------- */
function loadSprites(){
  if (W3.loads.sprites) return W3.loads.sprites;
  const tl = new THREE.TextureLoader();
  W3.loads.sprites = Promise.all(Object.entries(SPRITE_FILES).map(([k, url]) => new Promise((res, rej) => tl.load(url, t => {
    t.colorSpace = THREE.SRGBColorSpace; t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter; t.generateMipmaps = false;
    W3.tex[k] = t; res();
  }, undefined, rej))));
  return W3.loads.sprites;
}
function loadAnimals(){
  if (W3.loads.animals) return W3.loads.animals;
  W3.loads.animals = new Promise(res => new THREE.GLTFLoader().load("models/voxel-animals-ay23man.glb", g => { W3.assets.animals = g; res(true); }, undefined, () => res(false)));
  return W3.loads.animals;
}

/* ---------- helpers ---------- */
function canvasTex(w, h, draw){
  const c = document.createElement("canvas"); c.width = w; c.height = h;
  const ctx = c.getContext("2d"); draw(ctx, w, h);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  tex.userData = { ctx, draw, w, h };
  return tex;
}
function redrawTex(tex){ const u = tex.userData; u.ctx.clearRect(0, 0, u.w, u.h); u.draw(u.ctx, u.w, u.h); tex.needsUpdate = true; }
function fitText(c, text, family, size, maxW){ let px = size; c.font = family.replace("{px}", px); while (c.measureText(text).width > maxW && px > 10) { px -= 4; c.font = family.replace("{px}", px); } return px; }
function mat(color, o={}){ return new THREE.MeshStandardMaterial(Object.assign({ color, roughness:0.8, metalness:0 }, o)); }
function glow(color, o={}){ return new THREE.MeshBasicMaterial(Object.assign({ color, toneMapped:false }, o)); }
function mbox(w, h, d, m, x=0, y=0, z=0, parent=null){ const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); b.position.set(x, y, z); if (parent) parent.add(b); return b; }
function mcyl(rt, rb, h, m, x=0, y=0, z=0, parent=null, seg=14){ const c = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), m); c.position.set(x, y, z); if (parent) parent.add(c); return c; }
function mplane(w, h, m, x=0, y=0, z=0, ry=0, parent=null){ const p = new THREE.Mesh(new THREE.PlaneGeometry(w, h), m); p.position.set(x, y, z); p.rotation.y = ry; if (parent) parent.add(p); return p; }
function seeded(seed){ let s = seed >>> 0; return () => ((s = (s*1664525 + 1013904223) >>> 0) / 4294967296); }
function fixNormals(geo){
  const n = geo.attributes.normal; if (!n) { geo.computeVertexNormals(); return; }
  for (let i = 0; i < n.count; i++) { const x = n.getX(i), y = n.getY(i), z = n.getZ(i), l = x*x + y*y + z*z; if (!(l > 1e-8) || !isFinite(l)) { geo.computeVertexNormals(); return; } }
}
function prepModel(root){ root.traverse(o => { if (o.isMesh) { fixNormals(o.geometry); } }); return root; }

/* a soft contact shadow so people do not float */
let SHADOW_TEX = null;
function contactShadow(w, d){
  if (!SHADOW_TEX) SHADOW_TEX = canvasTex(128, 128, (c, W, H) => {
    const g = c.createRadialGradient(W/2, H/2, 2, W/2, H/2, W/2);
    g.addColorStop(0, "rgba(30,14,2,0.7)"); g.addColorStop(0.55, "rgba(30,14,2,0.32)"); g.addColorStop(1, "rgba(30,14,2,0)");
    c.fillStyle = g; c.fillRect(0, 0, W, H);
  });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), new THREE.MeshBasicMaterial({ map:SHADOW_TEX, transparent:true, depthWrite:false, opacity:0.85 }));
  m.rotation.x = -Math.PI/2; m.position.y = 0.012; m.renderOrder = 1;
  return m;
}

/* ---------- people ---------- */
/* A flat pixel-art person on a plane that always turns to face the camera. */
function makeSprite(texKeys, height, { shadow=true, tint=null, frames=null }={}){
  const tex = W3.tex[texKeys[0]];
  const w = height*(tex.image.width/tex.image.height);
  const m = new THREE.MeshStandardMaterial({ map:tex, alphaTest:0.5, side:THREE.DoubleSide, roughness:0.95, metalness:0 });
  if (tint) m.color.set(tint);
  const plane = new THREE.Mesh(new THREE.PlaneGeometry(w, height), m);
  plane.geometry.translate(0, height/2, 0);
  const g = new THREE.Group(), body = new THREE.Group(); body.add(plane); g.add(body);
  const headPivot = new THREE.Object3D(); headPivot.position.y = height*0.86; body.add(headPivot);
  if (shadow) g.add(contactShadow(w*1.1, w*0.55));
  g.userData = { kind:"sprite", plane, body, mat:m, headPivot, height, frames, phase:Math.random()*10, talk:0, talkTarget:0, flip:1, walk:0, dance:0 };
  return g;
}
function voxelAnimal(nodeName, height){
  const gl = W3.assets.animals; if (!gl) return new THREE.Group();
  gl.scene.updateMatrixWorld(true);
  let src = null; gl.scene.traverse(o => { if (!src && o.name === nodeName) src = o; });
  if (!src) return new THREE.Group();
  const inner = new THREE.Group();
  src.children.forEach(ch => { ch.updateWorldMatrix(true, true); const c = ch.clone(true); ch.matrixWorld.decompose(c.position, c.quaternion, c.scale); inner.add(c); });
  prepModel(inner);
  const box = new THREE.Box3().setFromObject(inner), size = box.getSize(new THREE.Vector3()), ctr = box.getCenter(new THREE.Vector3());
  inner.position.set(-ctr.x, -box.min.y, -ctr.z);
  const holder = new THREE.Group(); holder.add(inner);
  const outer = new THREE.Group(); outer.add(holder);
  holder.scale.setScalar(height/size.y);
  outer.userData.size = size.clone().multiplyScalar(height/size.y); outer.userData.holder = holder;
  return outer;
}
function makeVoxel(nodeName, height){
  const g = voxelAnimal(nodeName, height);
  if (!g.userData.holder) return g;
  g.add(contactShadow(g.userData.size.x*1.4, g.userData.size.z*1.4));
  g.userData.holder.userData.s0 = g.userData.holder.scale.x;
  Object.assign(g.userData, { kind:"voxel", body:g.userData.holder, height, phase:Math.random()*10, talk:0, talkTarget:0, baseRotY:0, walk:0 });
  return g;
}
let TMPV = null;
function poseFigure(g, t){
  const u = g.userData; if (!u.kind) return;
  u.talk += (u.talkTarget - u.talk)*0.25;
  const k = u.talk;
  if (u.kind === "voxel") {
    const bob = Math.abs(Math.sin(t*8.5 + u.phase))*0.05*k*u.height + (u.walk ? Math.abs(Math.sin(t*9))*0.04 : 0);
    u.body.position.y = bob; u.body.rotation.y = u.baseRotY;
    const sq = 1 + Math.sin(t*1.6 + u.phase)*0.012 + Math.sin(t*14 + u.phase)*0.025*k;
    u.body.scale.set(u.body.userData.s0*(2 - sq), u.body.userData.s0*sq, u.body.userData.s0*(2 - sq));
    return;
  }
  if (W3.camera) { if (!TMPV) TMPV = new THREE.Vector3(); const cp = W3.camera.position, wp = g.getWorldPosition(TMPV); g.rotation.y = Math.atan2(cp.x - wp.x, cp.z - wp.z); }
  const breathe = 1 + Math.sin(t*1.7 + u.phase)*0.012;
  const talkBob = Math.abs(Math.sin(t*9 + u.phase))*0.035*k;
  const walkBob = u.walk ? Math.abs(Math.sin(t*8 + u.phase))*0.06 : 0;
  const jump = u.dance ? Math.abs(Math.sin(t*6 + u.phase))*0.38 : 0;
  u.body.position.y = talkBob*u.height*0.6 + walkBob + jump;
  u.body.scale.set(u.flip*(1 + talkBob*0.4), breathe + talkBob*0.8, 1);
  u.body.rotation.z = Math.sin(t*4.3 + u.phase)*0.045*k + (u.walk ? Math.sin(t*8 + u.phase)*0.05 : 0) + (u.dance ? Math.sin(t*6 + u.phase)*0.16 : 0);
  if (u.dance) u.flip = Math.sin(t*3 + u.phase) > 0 ? 1 : -1;
  if (u.frames) {                                          // mouth frames while talking
    const open = k > 0.4 && Math.sin(t*23 + u.phase) > -0.35;
    const want = W3.tex[u.frames[open ? 1 : 0]];
    if (u.mat.map !== want) { u.mat.map = want; u.mat.needsUpdate = true; }
  }
}
function headWorld(g, up=0.12){ if (!W3.ok || !g || !g.userData.headPivot) return null; const v = V(0, 0, 0); g.userData.headPivot.getWorldPosition(v); v.y += up; return v; }
function project(v){ if (!W3.ok || !v) return null; const p = v.clone().project(W3.camera); if (p.z > 1 || p.z < -1) return null; return { x:(p.x + 1)/2*innerWidth, y:(-p.y + 1)/2*innerHeight }; }

/* ---------- textures for the mall ---------- */
function floorTexture(){
  return canvasTex(512, 512, (c, w, h) => {
    const R = seeded(7), n = 4, s = w/n;
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      const tone = 226 + Math.floor(R()*18) - ((i + j) % 2 ? 10 : 0);
      c.fillStyle = `rgb(${tone}, ${tone - 22}, ${tone - 62})`; c.fillRect(i*s, j*s, s, s);
      for (let k = 0; k < 90; k++) { c.fillStyle = `rgba(${R() < 0.5 ? "120,80,40" : "255,255,240"}, ${0.05 + R()*0.06})`; c.fillRect(i*s + R()*s, j*s + R()*s, 1 + R()*3, 1 + R()*3); }
    }
    c.strokeStyle = "rgba(122, 84, 44, 0.55)"; c.lineWidth = 3;
    for (let i = 0; i <= n; i++) { c.beginPath(); c.moveTo(i*s, 0); c.lineTo(i*s, h); c.stroke(); c.beginPath(); c.moveTo(0, i*s); c.lineTo(w, i*s); c.stroke(); }
  });
}
function plasterTexture(base="#E9CFA4"){
  return canvasTex(256, 256, (c, w, h) => {
    const R = seeded(11); c.fillStyle = base; c.fillRect(0, 0, w, h);
    for (let k = 0; k < 600; k++) { c.fillStyle = `rgba(${R() < 0.5 ? "150,100,50" : "255,248,230"}, ${0.04 + R()*0.06})`; c.fillRect(R()*w, R()*h, 2 + R()*5, 2 + R()*5); }
  });
}
function signTex(text, bg, fg, { sub="", w=512, h=128, trim="#2A1A0C" }={}){
  const tex = canvasTex(w, h, (c, W, H) => {
    c.fillStyle = bg; c.fillRect(0, 0, W, H);
    c.strokeStyle = trim; c.lineWidth = 10; c.strokeRect(5, 5, W - 10, H - 10);
    c.strokeStyle = fg; c.globalAlpha = 0.35; c.lineWidth = 3; c.strokeRect(16, 16, W - 32, H - 32); c.globalAlpha = 1;
    c.fillStyle = fg; c.textAlign = "center"; c.textBaseline = "middle";
    const px = fitText(c, text, `700 {px}px ${PIXEL_FONT}`, sub ? 62 : 74, W - 60);
    c.fillText(text, W/2, sub ? H*0.43 : H/2 + 3);
    if (sub) { c.font = `500 ${Math.max(18, px*0.42)}px ${PIXEL_FONT}`; c.globalAlpha = 0.8; c.fillText(sub, W/2, H*0.78); c.globalAlpha = 1; }
  });
  W3.texts.push(tex);
  return tex;
}
function interiorTex(kind, seed=1){
  return canvasTex(256, 192, (c, w, h) => {
    const R = seeded(seed*97 + 3);
    const bgs = { pharmacy:"#F4EEDD", bakery:"#8A5530", cards:"#F2D9A8", toys:"#6FA6D6", optical:"#E8E2D4", sports:"#2F4E7A", shoes:"#C9803A", cinema:"#2A1A2E", books:"#6B4428", tech:"#3A4A5E", fashion:"#C98080", games:"#4A2E7A", cafe:"#B8723A" };
    c.fillStyle = bgs[kind] || "#C9A57A"; c.fillRect(0, 0, w, h);
    const cols = { pharmacy:["#5BB36B","#E8E2D0","#7FB7D9","#E3A23A"], bakery:["#F2C27A","#D9873A","#F7E1B0","#B8652A"], cards:["#E86A5A","#F2D35B","#7FB7D9","#5BB36B"], toys:["#E86A5A","#F2D35B","#5BB36B","#FFFFFF"],
      optical:["#2A1A0C","#7FB7D9","#B8680F","#444"], sports:["#E86A5A","#F2D35B","#F4EEDD","#5BB36B"], shoes:["#F4EEDD","#2A1A0C","#E86A5A","#F2D35B"], cinema:["#E86A5A","#F2D35B","#7FB7D9","#B86CE0"],
      books:["#E86A5A","#F2D35B","#5BB36B","#7FB7D9","#F4EEDD"], tech:["#9AD0F2","#F2D35B","#EEE","#5BB36B"], fashion:["#F4EEDD","#7FB7D9","#2A1A0C","#F2D35B"], games:["#5BB36B","#E86A5A","#F2D35B","#7FB7D9"], cafe:["#F4EEDD","#5BB36B","#F2C27A","#2A1A0C"] }[kind] || ["#E86A5A", "#F2D35B"];
    for (let row = 0; row < 3; row++) {
      const y = 12 + row*60;
      c.fillStyle = "rgba(0,0,0,0.35)"; c.fillRect(0, y + 44, w, 6);
      for (let x = 8; x < w - 10; x += 14 + R()*14) {
        const ww = 8 + R()*16, hh = 14 + R()*28;
        c.fillStyle = cols[Math.floor(R()*cols.length)]; c.fillRect(x, y + 44 - hh, ww, hh);
        c.fillStyle = "rgba(255,255,255,0.18)"; c.fillRect(x, y + 44 - hh, ww, 3);
        x += ww;
      }
    }
    const g = c.createLinearGradient(0, 0, 0, h); g.addColorStop(0, "rgba(255,240,200,0.22)"); g.addColorStop(1, "rgba(0,0,0,0.18)"); c.fillStyle = g; c.fillRect(0, 0, w, h);
  });
}
function stripeTex(a, b, n=8){
  return canvasTex(256, 64, (c, w, h) => { for (let i = 0; i < n; i++) { c.fillStyle = i % 2 ? b : a; c.fillRect(i*w/n, 0, w/n + 1, h); } });
}
function stepsTex(){
  return canvasTex(128, 256, (c, w, h) => {
    c.fillStyle = "#58606A"; c.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 16) { c.fillStyle = "#8A929C"; c.fillRect(0, y, w, 4); c.fillStyle = "#3C434B"; c.fillRect(0, y + 10, w, 6); }
  });
}

/* ---------- the mall ---------- */
const MALL = { x:16, z0:-14, z1:36, floor:0, deck:4.6, roof:10 };
const SHOPS = {
  Pharmacy:     { z:4,  kind:"pharmacy", bg:"#2E8B57", fg:"#FFFFFF", sub:"Health & care" },
  Bakery:       { z:10, kind:"bakery",   bg:"#B8680F", fg:"#FFF3DC", sub:"Fresh daily" },
  "Card shop":  { z:16, kind:"cards",    bg:"#C8445A", fg:"#FFF3DC", sub:"Cards & gifts" },
  "Toy shop":   { z:22, kind:"toys",     bg:"#2F6DB5", fg:"#FFF3DC", sub:"Toys & games" },
  Optometrist:  { z:28, kind:"optical",  bg:"#3E4A5E", fg:"#FFF3DC", sub:"Eye care" },
  Sportsworld:  { z:4,  kind:"sports",   bg:"#1F3F73", fg:"#F6A623", sub:"Sport & running", right:true },
  "Shoe Barn":  { z:10, kind:"shoes",    bg:"#7A4A26", fg:"#FFF3DC", sub:"Shoes", right:true }
};

function buildMall(){
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x1A0F06);
  const world = { scene, figures:[], crowd:[], actors:{}, shops:{}, dancers:[], horns:[], lights:{} };
  const X = MALL.x, DECK = MALL.deck, ROOF = MALL.roof, Z0 = MALL.z0, Z1 = MALL.z1, ZC = (Z0 + Z1)/2, ZL = Z1 - Z0;
  const trim = mat(0x5C3820, { roughness:0.7 }), cream = mat(0xF1DFBC, { roughness:0.85 }), dark = mat(0x2A1A0C, { roughness:0.6 }), amberM = mat(0xF6A623, { roughness:0.5 });

  /* floor + walls */
  const ft = floorTexture(); ft.wrapS = ft.wrapT = THREE.RepeatWrapping; ft.repeat.set(2*X/6, ZL/6);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(2*X, ZL), new THREE.MeshStandardMaterial({ map:ft, roughness:0.55, metalness:0.05 }));
  floor.rotation.x = -Math.PI/2; floor.position.set(0, 0, ZC); scene.add(floor);
  const wallTex = plasterTexture(); wallTex.wrapS = wallTex.wrapT = THREE.RepeatWrapping; wallTex.repeat.set(10, 3);
  const wallM = new THREE.MeshStandardMaterial({ map:wallTex, roughness:0.95 });
  mplane(ZL, ROOF, wallM, -X, ROOF/2, ZC, Math.PI/2, scene); mplane(ZL, ROOF, wallM, X, ROOF/2, ZC, -Math.PI/2, scene);
  mplane(2*X, ROOF, wallM, 0, ROOF/2, Z1, Math.PI, scene); mplane(2*X, ROOF, wallM, 0, ROOF/2, Z0, 0, scene);
  // ceiling with a skylight grid
  const ceil = mplane(2*X, ZL, mat(0x6B4428, { roughness:0.95 }), 0, ROOF, ZC, 0, scene); ceil.rotation.x = Math.PI/2; ceil.rotation.y = 0;
  const skyM = glow(0xFFF1D0);
  for (let i = -3; i <= 3; i++) for (let j = 0; j < 6; j++) { const p = mplane(3.6, 5.4, skyM, i*4.4, ROOF - 0.03, Z0 + 4 + j*8.2, 0, scene); p.rotation.x = Math.PI/2; }
  for (let i = -3; i <= 2; i++) mbox(0.3, 0.4, ZL, trim, i*4.4 + 2.2, ROOF - 0.25, ZC, scene);
  for (let j = 0; j <= 5; j++) mbox(2*X, 0.4, 0.3, trim, 0, ROOF - 0.25, Z0 + 1.2 + j*8.2, scene);

  /* the second floor: a deck along each side wall and the back, with railings */
  const deckM = mat(0xD8BC8C, { roughness:0.7 });
  [-1, 1].forEach(s => {
    mbox(X - 11.5, 0.3, ZL, deckM, s*(11.5 + (X - 11.5)/2), DECK - 0.15, ZC, scene);
    const segs = s > 0 ? [[Z0, 14.5], [16.5, Z1]] : [[Z0, Z1]];                   // the escalator lands through a gap on the right
    segs.forEach(([a, b]) => { mbox(0.12, 1.0, b - a, mat(0x8FC7E8, { transparent:true, opacity:0.35, roughness:0.2 }), s*11.5, DECK + 0.5, (a + b)/2, scene); mbox(0.2, 0.12, b - a, trim, s*11.5, DECK + 1.04, (a + b)/2, scene); });
    mbox(0.5, 0.5, ZL, trim, s*11.5, DECK - 0.55, ZC, scene);                     // fascia under the deck edge
  });
  /* columns */
  for (let k = 0; k < 8; k++) [-1, 1].forEach(s => {
    const z = Z0 + 4 + k*5.9, col = mcyl(0.42, 0.46, ROOF, cream, s*11.5, ROOF/2, z, scene, 16);
    mcyl(0.5, 0.5, 0.22, amberM, s*11.5, 1.0, z, scene, 16); mcyl(0.5, 0.5, 0.22, amberM, s*11.5, DECK + 1.2, z, scene, 16);
  });

  /* shop fronts */
  const shopFront = (name, slot, level, side) => {
    const w = 5.2, h = level ? 3.7 : 3.8, y0 = level ? DECK : 0, faceX = level ? side*14.0 : side*11.5, depth = level ? 1.6 : 4.2;
    const g = new THREE.Group(); g.position.set(0, y0, slot.z); scene.add(g);
    const face = -side*Math.PI/2;                                                  // plane normal points into the atrium
    const xin = side*(X - depth/2 - 0.3), shell = mat(0xEFD9AE, { side:THREE.DoubleSide });
    // interior: back wall, side walls and a warm lit ceiling
    mplane(w, h - 0.4, new THREE.MeshBasicMaterial({ map:interiorTex(slot.kind, slot.z + (side > 0 ? 3 : 0) + level*5), toneMapped:false }), side*(X - 0.3), h/2 - 0.2, 0, face, g);
    mplane(depth, h - 0.4, shell, xin, h/2 - 0.2, -w/2, 0, g); mplane(depth, h - 0.4, shell, xin, h/2 - 0.2, w/2, 0, g);
    mbox(depth, 0.05, w, glow(0xFFE9C0), xin, h - 0.4, 0, g);
    // frame: lintel + posts + sill
    mbox(0.5, 0.65, w + 0.4, trim, faceX + side*0.2, h - 0.3, 0, g);
    [-1, 1].forEach(sz => mbox(0.4, h, 0.28, trim, faceX + side*0.2, h/2, sz*(w/2 + 0.1), g));
    mbox(0.5, 0.5, w + 0.4, mat(0x7A4A26), faceX + side*0.2, 0.25, 0, g);
    // sign
    const sign = mplane(w - 0.4, (w - 0.4)/4, glow(0xDDDDDD, { map:signTex(name.toUpperCase(), slot.bg, slot.fg, { sub:slot.sub }) }), faceX - side*0.08, h - 0.3, 0, face, g);
    world.shops[name] = { sign, group:g, level };
    if (slot.kind === "bakery") {                                                  // striped awning
      const st = stripeTex("#F4EEDD", "#C8445A", 10); st.wrapS = THREE.RepeatWrapping;
      const aw = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.1, w), new THREE.MeshStandardMaterial({ map:st }));
      aw.position.set(faceX - side*0.55, h - 0.85, 0); aw.rotation.z = side*0.28; g.add(aw);
    }
  };
  Object.entries(SHOPS).forEach(([name, s]) => shopFront(name, s, 0, s.right ? 1 : -1));
  // second floor shops
  const UP = { Cinema:{ z:4, kind:"cinema", bg:"#2A1A2E", fg:"#F6A623", sub:"Now showing", right:true }, Bookshop:{ z:15.5, kind:"books", bg:"#5C3820", fg:"#FFF3DC", sub:"Books & more", right:true },
    Fashion:{ z:4, kind:"fashion", bg:"#8A3A5A", fg:"#FFF3DC", sub:"Style", right:false }, Tech:{ z:12, kind:"tech", bg:"#1F3A5E", fg:"#9AD0F2", sub:"Gadgets", right:false },
    Games:{ z:20, kind:"games", bg:"#4A2E7A", fg:"#F2D35B", sub:"Arcade", right:false }, Cafe:{ z:28, kind:"cafe", bg:"#7A4A26", fg:"#FFF3DC", sub:"Coffee", right:false } };
  Object.entries(UP).forEach(([name, s]) => shopFront(name, s, 1, s.right ? 1 : -1));

  /* back wall: the entrance doors and the food court */
  const doorGlass = mat(0x8FC7E8, { transparent:true, opacity:0.5, roughness:0.15 });
  [-9, -6.4].forEach(x => { mbox(2.4, 3.2, 0.1, doorGlass, x, 1.6, Z1 - 0.1, scene); mbox(0.12, 3.3, 0.14, trim, x - 1.2, 1.65, Z1 - 0.1, scene); });
  mbox(0.12, 3.3, 0.14, trim, -5.2, 1.65, Z1 - 0.1, scene); mbox(6.4, 0.3, 0.2, trim, -7.2, 3.3, Z1 - 0.1, scene);
  const exitSign = mplane(2.6, 0.65, glow(0xFFFFFF, { map:signTex("WELCOME", "#1F3F73", "#F6A623", { w:512, h:128 }) }), -7.2, 3.85, Z1 - 0.2, Math.PI, scene);
  // food court counters
  const counterM = mat(0xE9E0CE, { roughness:0.7 });
  [[5.2, "Noodles", "#C8445A"], [8.6, "Burgers", "#B8680F"], [12, "Pizza", "#2E8B57"]].forEach(([x, label, col]) => {
    mbox(2.8, 1.05, 0.9, counterM, x, 0.525, Z1 - 1.8, scene); mbox(2.9, 0.08, 1.0, dark, x, 1.07, Z1 - 1.8, scene);
    mplane(2.6, 0.65, glow(0xDDDDDD, { map:signTex(label.toUpperCase(), col, "#FFF3DC", { w:512, h:128 }) }), x, 2.6, Z1 - 0.25, Math.PI, scene);
    mbox(2.6, 0.9, 0.08, mat(0x3A2412), x, 2.0, Z1 - 0.12, scene);
  });
  const fcSign = mplane(5.4, 1.05, glow(0xDDDDDD, { map:signTex("FOOD COURT", "#B8680F", "#FFF3DC", { sub:"Order here", w:640, h:128 }) }), 8.6, 4.1, Z1 - 0.2, Math.PI, scene);
  world.shops["Food court"] = { sign:fcSign };
  // tables and chairs in front of the counters
  const R = seeded(5);
  for (let i = 0; i < 6; i++) { const tx = -4.6 + (i%3)*3.4, tz = 26 + Math.floor(i/3)*3.6; const tbl = new THREE.Group(); tbl.position.set(tx, 0, tz); scene.add(tbl);
    mcyl(0.55, 0.55, 0.06, mat(0xF2E6CC), 0, 0.74, 0, tbl, 18); mcyl(0.06, 0.1, 0.72, dark, 0, 0.36, 0, tbl, 8);
    [0, 1, 2, 3].forEach(k => { const a = k*Math.PI/2 + 0.4, ch = mbox(0.4, 0.06, 0.4, mat([0xC8445A, 0x2E8B57, 0xF6A623, 0x2F6DB5][(i + k) % 4]), Math.cos(a)*0.95, 0.46, Math.sin(a)*0.95, tbl); mbox(0.4, 0.4, 0.05, ch.material, Math.cos(a)*1.12, 0.66, Math.sin(a)*1.12, tbl).rotation.y = -a; }); }

  /* escalator on the right, rising from the atrium floor to the second floor */
  const esc = new THREE.Group(); esc.position.set(7.5, 0, 15.5); scene.add(esc);
  const stepsT = stepsTex(); stepsT.wrapS = stepsT.wrapT = THREE.RepeatWrapping; stepsT.repeat.set(1, 4);
  const eRun = 8.1, eLen = Math.hypot(eRun, DECK), eAng = Math.atan2(DECK, eRun);
  const ramp = mbox(eLen, 0.28, 1.5, new THREE.MeshStandardMaterial({ map:stepsT, roughness:0.5, metalness:0.2 }), 0, DECK/2, 0, esc); ramp.rotation.z = eAng;
  const glassRail = mat(0x8FC7E8, { transparent:true, opacity:0.4, roughness:0.2 });
  [-1, 1].forEach(sz => { const rail = mbox(eLen, 0.9, 0.1, glassRail, 0, DECK/2 + 0.6, sz*0.82, esc); rail.rotation.z = eAng; const hr = mbox(eLen, 0.1, 0.16, dark, 0, DECK/2 + 1.08, sz*0.82, esc); hr.rotation.z = eAng; });
  mbox(1.6, 0.2, 1.7, dark, -eRun/2 - 0.2, 0.1, 0, esc);

  /* fountain in the atrium */
  const fountain = new THREE.Group(); fountain.position.set(0, 0, 8); scene.add(fountain);
  const stone = mat(0xD9C7A5, { roughness:0.6 }), water = new THREE.MeshStandardMaterial({ color:0x4FA9C9, roughness:0.15, metalness:0.1, transparent:true, opacity:0.85, emissive:0x1B6C88, emissiveIntensity:0.45 });
  mcyl(2.75, 2.8, 0.55, stone, 0, 0.275, 0, fountain, 32); mcyl(2.5, 2.5, 0.04, water, 0, 0.5, 0, fountain, 32);
  mcyl(0.45, 0.6, 1.5, stone, 0, 1.0, 0, fountain, 16); mcyl(1.3, 0.8, 0.3, stone, 0, 1.7, 0, fountain, 24); mcyl(1.15, 1.15, 0.04, water, 0, 1.86, 0, fountain, 24);
  mcyl(0.12, 0.2, 1.0, stone, 0, 2.3, 0, fountain, 10);
  const drops = []; const dGeo = new THREE.BufferGeometry(); const DN = 140, dPos = new Float32Array(DN*3);
  for (let i = 0; i < DN; i++) drops.push({ a:Math.random()*Math.PI*2, v:1.2 + Math.random()*1.4, t:Math.random()*2, r:0.6 + Math.random()*1.5 });
  dGeo.setAttribute("position", new THREE.BufferAttribute(dPos, 3));
  const dropPts = new THREE.Points(dGeo, new THREE.PointsMaterial({ color:0xBFEAFF, size:0.09, transparent:true, opacity:0.9, depthWrite:false })); dropPts.frustumCulled = false; fountain.add(dropPts);
  world.fountain = { group:fountain, drops, dGeo, dPos, DN };
  // inlay rings around the fountain
  [3.2, 3.5].forEach((r, i) => { const ring = new THREE.Mesh(new THREE.RingGeometry(r, r + 0.12, 48), glow(i ? 0xF6A623 : 0x8A5530)); ring.rotation.x = -Math.PI/2; ring.position.set(0, 0.02, 8); scene.add(ring); });

  /* information desk, with the lost boy waiting beside it */
  const info = new THREE.Group(); info.position.set(5.2, 0, 11.5); scene.add(info);
  mbox(3.4, 1.1, 1.1, mat(0xF1DFBC), 0, 0.55, 0, info); mbox(3.5, 0.08, 1.2, mat(0x2F6DB5), 0, 1.12, 0, info); mbox(3.4, 0.12, 0.05, amberM, 0, 0.9, -0.58, info);
  const infoSign = mplane(2.2, 0.55, glow(0xFFFFFF, { map:signTex("INFORMATION", "#2F6DB5", "#FFF3DC", { w:512, h:128 }) }), 0, 2.2, 0.05, Math.PI, info);
  mcyl(0.04, 0.04, 1.1, dark, -1.0, 1.65, 0, info, 6); mcyl(0.04, 0.04, 1.1, dark, 1.0, 1.65, 0, info, 6);
  const staff = makeSprite(["s2"], 1.6); staff.position.set(5.2, 0, 12.6); scene.add(staff); world.figures.push(staff);
  const leo = makeSprite(["s5"], 0.95, { tint:0xFFE27A }); leo.position.set(3.1, 0, 10.6); scene.add(leo); world.figures.push(leo); world.actors.leo = leo;

  /* the kiosk and its seller */
  const kiosk = new THREE.Group(); kiosk.position.set(7.4, 0, 3.4); scene.add(kiosk);
  mbox(2.2, 1.0, 1.2, mat(0xE8A33D), 0, 0.5, 0, kiosk); mbox(2.3, 0.06, 1.3, dark, 0, 1.03, 0, kiosk);
  [-1, 1].forEach(sx => [-1, 1].forEach(sz => mcyl(0.04, 0.04, 2.4, dark, sx*1.05, 1.2, sz*0.55, kiosk, 6)));
  const canopy = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.1, 1.6), new THREE.MeshStandardMaterial({ map:stripeTex("#F4EEDD", "#E8602A", 8) })); canopy.position.set(0, 2.45, 0); kiosk.add(canopy);
  mplane(1.6, 0.4, glow(0xDDDDDD, { map:signTex("SKIN KIOSK", "#8A3A5A", "#FFF3DC", { w:512, h:128 }) }), 0, 1.6, -0.62, Math.PI, kiosk);
  [0, 1, 2].forEach(i => mcyl(0.1, 0.12, 0.3, mat([0x7A3A1A, 0xF2C27A, 0x5BB36B][i]), -0.5 + i*0.5, 1.2, 0.1, kiosk, 10));
  const seller = makeSprite(["peacock"], 1.3); seller.position.set(7.4, 0, 4.7); scene.add(seller); world.figures.push(seller); world.actors.seller = seller;

  const skins0 = ["s0", "s1", "s2", "s3", "s4", "s5"];
  /* the cashier at the food court */
  const cashier = makeSprite(["derpy0"], 1.7, { frames:["derpy0", "derpy1"] }); cashier.position.set(8.6, 0, Z1 - 0.9); scene.add(cashier); world.figures.push(cashier); world.actors.cashier = cashier;
  // the queue in front of the counter
  [[8.5, 29.2, 0], [9.5, 27.6, 4], [8.2, 26.0, 1], [9.2, 24.4, 3]].forEach(([x, z, k], i) => { const q = makeSprite([skins0[(k + i) % 6]], 1.65); q.position.set(x, 0, z); q.userData.flip = i % 2 ? -1 : 1; scene.add(q); world.figures.push(q); });

  /* the couple, with their dog */
  const cw = makeSprite(["s0"], 1.55), cm = makeSprite(["s3"], 1.7); cm.userData.flip = -1;
  scene.add(cw, cm); world.figures.push(cw, cm); world.actors.coupleW = cw; world.actors.coupleM = cm;
  const dog = makeVoxel("Dog", 0.55); if (dog.userData.holder) { scene.add(dog); world.figures.push(dog); world.actors.dog = dog; }

  /* the public address horns, on columns */
  const hornPos = [[-11.1, 3.4, -4.7], [11.1, 3.4, -4.7], [-11.1, 3.4, 13.1], [11.1, 3.4, 13.1]];
  hornPos.forEach(([x, y, z]) => {
    const h = new THREE.Group(); h.position.set(x, y, z); h.rotation.y = x < 0 ? Math.PI/2 : -Math.PI/2; scene.add(h);
    mbox(0.5, 0.5, 0.4, dark, 0, 0, -0.1, h);
    const cone = mcyl(0.12, 0.36, 0.5, mat(0x3A3F46, { metalness:0.4, roughness:0.4 }), 0, 0, 0.3, h, 12); cone.rotation.x = Math.PI/2;
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.4, 0.46, 32), new THREE.MeshBasicMaterial({ color:0xFFC35A, transparent:true, opacity:0, side:THREE.DoubleSide, toneMapped:false })); ring.position.set(0, 0, 0.6); h.add(ring);
    world.horns.push({ ring, base:h });
  });

  /* signs and decoration */
  const banner = (x, z, text, col, ry) => { const g = new THREE.Group(); g.position.set(x, 7.0, z); g.rotation.y = ry; scene.add(g); mbox(1.5, 2.6, 0.05, mat(col), 0, 0, 0, g); mplane(1.3, 0.5, glow(0xEEEEEE, { map:signTex(text, "#FFF3DC", "#2A1A0C", { w:384, h:128 }) }), 0, 0.5, 0.03, 0, g); g.rotation.y = ry; };
  banner(-5, 6, "SALE", 0xC8445A, 0); banner(5, 18, "WELCOME", 0x2F6DB5, 0); banner(-5, 26, "SPRING", 0x2E8B57, 0);
  const plant = (x, z) => { const g = new THREE.Group(); g.position.set(x, 0, z); scene.add(g); mcyl(0.45, 0.35, 0.7, mat(0x8A5530), 0, 0.35, 0, g, 12);
    for (let i = 0; i < 7; i++) { const l = mcyl(0.02, 0.22, 1.5, mat(0x3E8E4A, { side:THREE.DoubleSide }), 0, 1.3, 0, g, 6); l.rotation.set(0.4 + (i%3)*0.18, i*0.9, 0.3); l.position.set(Math.sin(i*0.9)*0.3, 1.25, Math.cos(i*0.9)*0.3); } };
  [[-9, 2], [-9, 14], [9, 1], [-9, 26], [2.4, 4], [-2.4, 18], [3.2, 30]].forEach(([x, z]) => plant(x, z));
  const bench = (x, z, ry) => { const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = ry; scene.add(g); mbox(1.8, 0.1, 0.5, mat(0x8A5530), 0, 0.5, 0, g); mbox(1.8, 0.45, 0.08, mat(0x8A5530), 0, 0.8, -0.24, g); [-0.8, 0.8].forEach(x2 => mbox(0.08, 0.5, 0.45, dark, x2, 0.25, 0, g)); };
  bench(-5, 10, 0.3); bench(-5, 24, Math.PI/2); bench(-5, 3, 0);

  /* lighting: warm daylight from the skylights, lamp glow at the shops */
  scene.add(new THREE.HemisphereLight(0xFFE2BC, 0x6B3F1C, 1.0));
  scene.add(new THREE.AmbientLight(0xFFC690, 0.22));
  const sun = new THREE.DirectionalLight(0xFFD7A0, 1.5); sun.position.set(6, 14, -4); sun.target.position.set(0, 0, 14); scene.add(sun, sun.target);
  [[0, 8.5, 0], [0, 8.5, 14], [0, 8.5, 28], [-7, 7, 8], [7, 7, 22]].forEach(([x, y, z]) => { const l = new THREE.PointLight(0xFFD9A6, 14, 22, 1.5); l.position.set(x, y, z); scene.add(l); });
  [[-10, 2.2, 8], [-10, 2.2, 22], [10, 2.2, 6], [10, 2.2, 28]].forEach(([x, y, z]) => { const l = new THREE.PointLight(0xFFB870, 6, 12, 1.6); l.position.set(x, y, z); scene.add(l); });
  const party = [0xFF5AA5, 0x5AD7FF, 0xFFE15A].map((c, i) => { const l = new THREE.PointLight(c, 0, 14, 1.4); l.position.set((i - 1)*3.5, 4.5, 8 + (i%2)*2); l.visible = false; scene.add(l); return l; });
  world.lights.party = party;

  /* the crowd: a mix of tall and small people strolling about */
  const skins = ["s0", "s1", "s2", "s3", "s4", "s5"];
    const free = () => { for (;;) { const x = rand(-9.5, 9.5), z = rand(1, 22.5); if (Math.hypot(x, z - 8) < 4.3) continue; if (Math.abs(x - 5.2) < 2.4 && Math.abs(z - 12) < 2) continue; if (x > 2.5 && x < 12.5 && z > 13 && z < 23) continue; return V(x, 0, z); } };
  const N = W3.small ? 34 : 64;
  for (let i = 0; i < N; i++) {
    const kid = i % 5 === 0, f = makeSprite([skins[i % 6]], kid ? 1.05 : rand(1.5, 1.75));
    const p = free(); f.position.copy(p); f.userData.flip = Math.random() < 0.5 ? 1 : -1;
    f.userData.target = free(); f.userData.speed = rand(0.45, 1.1); f.userData.pause = Math.random()*3; f.userData.walk = 1;
    scene.add(f); world.figures.push(f); world.crowd.push(f);
  }
  world.free = free;
  // a few animals in the crowd
  [["Duck", 0.32, 2.6, 8.9, 2.5], ["Rabbit", 0.34, -9.1, 20, 1.2], ["Donkey", 1.1, -8.4, 20.5, 2.2]].forEach(([n, h, x, z, ry]) => { const a = makeVoxel(n, h); if (a.userData.holder) { a.position.set(x, 0, z); a.userData.baseRotY = ry; scene.add(a); world.figures.push(a); } });
  // the flash mob: waiting, out of sight, until the Twist part
  const mobN = W3.small ? 8 : 14;
  for (let i = 0; i < mobN; i++) {
    const f = makeSprite([skins[(i + 2) % 6]], rand(1.5, 1.7)), a = i/mobN*Math.PI*2, r = 4.4 + (i%3)*0.9;
    f.position.set(Math.cos(a)*r, 0, 8 + Math.sin(a)*r); f.userData.phase = Math.random()*10; f.visible = false;
    scene.add(f); world.figures.push(f); world.dancers.push(f);
  }
  const conf = (() => { const N2 = 160, pos = new Float32Array(N2*3), col = new Float32Array(N2*3), pal = [[1, 0.35, 0.65], [0.35, 0.85, 1], [1, 0.9, 0.35], [0.6, 1, 0.5]];
    for (let i = 0; i < N2; i++) { pos[i*3] = rand(-6, 6); pos[i*3 + 1] = rand(0, 8); pos[i*3 + 2] = rand(3, 14); const c = pal[i % 4]; col.set(c, i*3); }
    const g = new THREE.BufferGeometry(); g.setAttribute("position", new THREE.BufferAttribute(pos, 3)); g.setAttribute("color", new THREE.BufferAttribute(col, 3));
    const pts = new THREE.Points(g, new THREE.PointsMaterial({ size:0.16, vertexColors:true, toneMapped:false })); pts.visible = false; pts.frustumCulled = false; scene.add(pts); return { pts, pos, N2 }; })();
  world.confetti = conf;
  return world;
}

/* ---------- running the world ---------- */
function ensureWorld(){ if (!W3.ok) return null; if (!W3.world) { W3.world = buildMall(); W3.scene = W3.world.scene; if (W3.renderPass) W3.renderPass.scene = W3.scene; if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => W3.texts.forEach(redrawTex)); } return W3.world; }

function setShot(name, snap=false){
  const s = SHOTS[name]; if (!s || !W3.ok) return;
  W3.camPos = V(...s.pos); W3.camLook = V(...s.look); W3.fovTarget = s.fov; W3.shotName = name;
  if (snap) { W3.curPos.copy(W3.camPos); W3.curLook.copy(W3.camLook); W3.camera.fov = s.fov; W3.camera.updateProjectionMatrix(); }
  placeCouple();
}
/* the couple stand just beside the camera, so their voices have somebody to come from */
function placeCouple(){
  const w = W3.world; if (!w || !w.actors.coupleW) return;
  const fwd = W3.camLook.clone().sub(W3.camPos); fwd.y = 0; fwd.normalize();
  const left = new THREE.Vector3(fwd.z, 0, -fwd.x);                            // the viewer's left, on the floor
  const at = W3.camPos.clone(); at.y = 0; at.addScaledVector(fwd, 5.6).addScaledVector(left, 3.9);
  w.actors.coupleW.position.copy(at);
  w.actors.coupleM.position.copy(at.clone().addScaledVector(left, -0.95).addScaledVector(fwd, 0.3));
  if (w.actors.dog) { w.actors.dog.position.copy(at.clone().addScaledVector(left, 0.9).addScaledVector(fwd, -0.5)); w.actors.dog.userData.baseRotY = Math.atan2(-fwd.x, -fwd.z) + 0.6; }
}
function setTalking(actor, on){
  const w = W3.world; if (!w) return;
  if (actor === "pa") { w.paOn = on; return; }
  const f = w.actors[actor]; if (f) f.userData.talkTarget = on ? 1 : 0;
  if (actor === "coupleW" && w.actors.dog) w.actors.dog.userData.talkTarget = on ? 0.6 : 0;
}
function setFlashMob(on){
  const w = W3.world; if (!w) return;
  w.dancers.forEach(f => { f.visible = on; f.userData.dance = on ? 1 : 0; });
  w.confetti.pts.visible = on; w.mob = on;
  w.lights.party.forEach(l => { l.visible = on; if (!on) l.intensity = 0; });
}
function pulseShop(name){ const s = W3.world && W3.world.shops[name]; if (s) s.pulse = performance.now(); }

function render3D(t){
  const w = W3.world; if (!W3.ok || !w || W3.hold) return;
  const cam = W3.camera, nowMs = performance.now(), dt = Math.min(0.25, (nowMs - (W3.lastMs || nowMs))/1000); W3.lastMs = nowMs;
  W3.curPos.lerp(W3.camPos, 1 - Math.exp(-dt*1.6)); W3.curLook.lerp(W3.camLook, 1 - Math.exp(-dt*2.0));
  // looking around: the view follows the mouse (right = right, up = up), measured from the camera's own sides
  const fwd = W3.curLook.clone().sub(W3.curPos).normalize(), right = new THREE.Vector3().crossVectors(fwd, V(0, 1, 0)).normalize();
  const mx = W3.mouse.x*(W3.free ? 1 : 0.55), my = W3.mouse.y*(W3.free ? 1 : 0.55);
  const look = W3.curLook.clone().addScaledVector(right, mx*4.5).addScaledVector(V(0, 1, 0), -my*2.0);
  cam.position.set(W3.curPos.x + Math.sin(t*0.5)*0.03, W3.curPos.y + Math.sin(t*1.1)*0.02, W3.curPos.z);
  cam.lookAt(look);
  if (Math.abs(cam.fov - W3.fovTarget) > 0.05) { cam.fov += (W3.fovTarget - cam.fov)*(1 - Math.exp(-dt*2.0)); cam.updateProjectionMatrix(); }
  cam.updateMatrixWorld();

  // the crowd strolls
  for (const f of w.crowd) {
    const u = f.userData;
    if (u.pause > 0) { u.pause -= dt; u.walk = 0; continue; }
    const to = u.target.clone().sub(f.position); to.y = 0; const d = to.length();
    if (d < 0.3) { u.pause = rand(0.5, 4); u.target = null; u.target = W3.world.free(); continue; }
    to.multiplyScalar(1/d); f.position.addScaledVector(to, u.speed*dt); u.walk = 1;
    if (Math.abs(to.x) > 0.25) u.flip = to.x > 0 ? -1 : 1;
  }
  // water, party lights, confetti, horn rings, shop signs
  const fo = w.fountain;
  for (let i = 0; i < fo.DN; i++) { const d = fo.drops[i]; d.t += dt*0.9; if (d.t > 2.2) { d.t = 0; d.a = Math.random()*Math.PI*2; d.v = 1.2 + Math.random()*1.4; d.r = 0.6 + Math.random()*1.5; }
    const k = d.t, rr = d.r*k*0.9, y = 2.4 + d.v*k*1.2 - 2.4*k*k; fo.dPos[i*3] = Math.cos(d.a)*rr; fo.dPos[i*3 + 1] = Math.max(0.55, y); fo.dPos[i*3 + 2] = Math.sin(d.a)*rr; }
  fo.dGeo.attributes.position.needsUpdate = true;
  if (w.mob) {
    w.lights.party.forEach((l, i) => { l.intensity = 30*(0.55 + 0.45*Math.sin(t*5 + i*2.1)); l.color.setHSL((t*0.4 + i/3) % 1, 0.9, 0.6); });
    const c = w.confetti; for (let i = 0; i < c.N2; i++) { c.pos[i*3 + 1] -= dt*(1.2 + (i%5)*0.25); c.pos[i*3] += Math.sin(t*2 + i)*dt*0.4; if (c.pos[i*3 + 1] < 0) c.pos[i*3 + 1] = 8; }
    c.pts.geometry.attributes.position.needsUpdate = true;
  }
  const paK = w.paOn ? 0.55 + 0.45*Math.abs(Math.sin(t*9)) : 0;
  w.horns.forEach(h => { h.ring.material.opacity += ((w.paOn ? 0.85 : 0) - h.ring.material.opacity)*0.2; const s = 1 + paK*0.55 + (w.paOn ? Math.sin(t*3)*0.1 : 0); h.ring.scale.set(s, s, 1); });
  for (const s of Object.values(w.shops)) { if (!s.sign) continue; const k = s.pulse ? Math.max(0, 1 - (nowMs - s.pulse)/700) : 0; const v = 0.87 + k*1.6; s.sign.material.color.setRGB(v, v, v); }
  for (const f of w.figures) poseFigure(f, t);
  if (W3.composer) W3.composer.render(); else W3.renderer.render(W3.scene, cam);
}
