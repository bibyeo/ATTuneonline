/* ---------- 3D world: textured 3D rooms, flat pixel-art characters (see STYLE.txt) ---------- */
const W3 = { ok:false, renderer:null, composer:null, camera:null, room:null, rooms:{}, assets:{}, loads:{}, mouse:{x:0,y:0}, camPos:null, camLook:null, curPos:null, curLook:null, t:0 };
const V = (x,y,z) => (window.THREE ? new THREE.Vector3(x,y,z) : { x, y, z, clone(){ return V(this.x,this.y,this.z); } });

/* model + sprite files */
const ASSET_FILES = {
  classroom: "models/classroom-styloo.glb",
  lecture:   "models/lecture_hall.glb",
  animals:   "models/voxel-animals-ay23man.glb"
};
const SPRITE_FILES = {
  derpy0: "sprites/derpy-talk-0.png", derpy1: "sprites/derpy-talk-1.png",
  s0: "sprites/student-0.png", s1: "sprites/student-1.png", s2: "sprites/student-2.png",
  s3: "sprites/student-3.png", s4: "sprites/student-4.png", s5: "sprites/student-5.png",
  peacock: "sprites/peacock.png", porcupine: "sprites/porcupine.png"
};
const LECTURE_SCALE = 1/16;   // the lecture hall GLB is modelled in 1/16 m units

function init3D(){
  if (!window.THREE) return false;
  if (W3.ok) return true;
  try {
    W3.small = !!(window.matchMedia && matchMedia("(pointer: coarse)").matches);   // touch devices: lighter render, same rooms and grade (a narrow desktop window is not a phone)
    const r = new THREE.WebGLRenderer({ antialias: !W3.small, powerPreference:"high-performance" });
    r.setPixelRatio(W3.small ? 1 : Math.min(window.devicePixelRatio || 1, 1.5));
    r.setSize(innerWidth, innerHeight);
    r.shadowMap.enabled = !W3.small; r.shadowMap.type = THREE.PCFSoftShadowMap;
    if (/[?&]noshadow\b/.test(location.search)) r.shadowMap.enabled = false;   // test switch
    r.outputColorSpace = THREE.SRGBColorSpace;
    r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 0.95;
    r.domElement.addEventListener("webglcontextlost", e => { e.preventDefault(); if (window.showFatal) showFatal("This device ran out of graphics memory."); });
    document.getElementById("stage").appendChild(r.domElement);
    W3.renderer = r;
    W3.camera = new THREE.PerspectiveCamera(46, innerWidth/innerHeight, 0.05, 120);
    W3.curPos = V(0, 3, -4.6); W3.curLook = V(0, 1.2, 4); W3.camPos = W3.curPos.clone(); W3.camLook = W3.curLook.clone();
    W3.lastW = innerWidth;
    setupPost();
    addEventListener("resize", () => {
      if (W3.small && innerWidth === W3.lastW) return;      // soft keyboard: leave the canvas alone
      W3.lastW = innerWidth;
      r.setSize(innerWidth, innerHeight); W3.camera.aspect = innerWidth/innerHeight; W3.camera.updateProjectionMatrix();
      if (W3.composer) { W3.composer.setSize(innerWidth, innerHeight); W3.grade.uniforms.res.value.set(innerWidth, innerHeight); }
    });
    addEventListener("pointermove", e => { W3.mouse.x = (e.clientX/innerWidth)*2 - 1; W3.mouse.y = (e.clientY/innerHeight)*2 - 1; });
    W3.ok = true;
    W3.builders = { classroom: buildClassroom, lecture: buildLecture };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => (W3.texts || []).forEach(redrawTex));
    return true;
  } catch(e) { console.error(e); W3.ok = false; return false; }
}

/* grading, applied after rendering: bloom on the brightest areas only, warm push, a little saturation,
   a soft vignette, and blur on the very bottom of the frame only */
const GRADE_SHADER = {
  uniforms: { tDiffuse:{ value:null }, res:{ value:null } },
  vertexShader: "varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform vec2 res; varying vec2 vUv;
    void main(){
      vec2 uv = vUv;
      vec4 c = texture2D(tDiffuse, uv);
      float b = smoothstep(0.12, 0.0, uv.y);           // bottom strip only
      if (b > 0.002) {
        vec2 px = vec2(1.0/res.x, 1.0/res.y) * (1.0 + 7.0*b);
        vec4 acc = c;
        acc += texture2D(tDiffuse, uv + px*vec2( 1.0, 0.0)); acc += texture2D(tDiffuse, uv + px*vec2(-1.0, 0.0));
        acc += texture2D(tDiffuse, uv + px*vec2( 0.0, 1.0)); acc += texture2D(tDiffuse, uv + px*vec2( 0.0,-1.0));
        acc += texture2D(tDiffuse, uv + px*vec2( 0.7, 0.7)); acc += texture2D(tDiffuse, uv + px*vec2(-0.7, 0.7));
        acc += texture2D(tDiffuse, uv + px*vec2( 0.7,-0.7)); acc += texture2D(tDiffuse, uv + px*vec2(-0.7,-0.7));
        c = mix(c, acc/9.0, b);
      }
      vec3 col = c.rgb * vec3(1.06, 1.0, 0.88);          // warm push
      float l = dot(col, vec3(0.299, 0.587, 0.114));
      col = mix(vec3(l), col, 1.16);                     // richer colour
      vec2 d = (uv - 0.5) * vec2(1.05, 1.2);
      col *= mix(0.42, 1.0, smoothstep(0.85, 0.3, length(d)));   // soft vignette
      gl_FragColor = vec4(col, 1.0);
    }`
};
function setupPost(){
  if (!THREE.EffectComposer) return;                   // the grade runs everywhere; phones skip only the bloom
  try {
    const comp = new THREE.EffectComposer(W3.renderer);
    const rp = new THREE.RenderPass(new THREE.Scene(), W3.camera);
    const bloom = new THREE.UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.22, 0.35, 0.93);
    const out = new THREE.OutputPass();
    const grade = new THREE.ShaderPass({ uniforms: THREE.UniformsUtils.clone(GRADE_SHADER.uniforms), vertexShader: GRADE_SHADER.vertexShader, fragmentShader: GRADE_SHADER.fragmentShader });
    grade.uniforms.res.value = new THREE.Vector2(innerWidth, innerHeight);
    comp.addPass(rp); if (!W3.small) comp.addPass(bloom); comp.addPass(out); comp.addPass(grade);
    W3.composer = comp; W3.renderPass = rp; W3.grade = grade;
    document.body.classList.add("graded");
  } catch(e) { console.warn("post-processing off", e); W3.composer = null; }
}

/* ---------- asset loading ---------- */
function loadGLB(name){
  if (W3.loads[name]) return W3.loads[name];
  W3.loads[name] = new Promise((res, rej) => {
    new THREE.GLTFLoader().load(ASSET_FILES[name], g => { W3.assets[name] = g; res(g); },
      ev => { if (ev && ev.total && W3.onModelProgress) W3.onModelProgress(name, ev.loaded/ev.total); },
      err => { W3.loads[name] = null; rej(err); });
  });
  return W3.loads[name];
}
function loadSprites(){
  if (W3.loads.sprites) return W3.loads.sprites;
  const tl = new THREE.TextureLoader();
  W3.tex = {};
  W3.loads.sprites = Promise.all(Object.entries(SPRITE_FILES).map(([k, url]) => new Promise((res, rej) => tl.load(url, t => {
    t.colorSpace = THREE.SRGBColorSpace; t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter; t.generateMipmaps = false;
    W3.tex[k] = t; res();
  }, undefined, rej))));
  return W3.loads.sprites;
}
/* everything a room needs before it can be built */
function roomAssets(name){
  const needs = name === "classroom" ? ["classroom", "animals"] : ["lecture", "animals"];
  return Promise.all([loadSprites(), ...needs.map(loadGLB)]);
}

/* ---------- helpers ---------- */
function canvasTex(w, h, draw){
  const c = document.createElement("canvas"); c.width = w; c.height = h;
  const ctx = c.getContext("2d"); draw(ctx, w, h);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  tex.userData = { ctx, draw, w, h };
  return tex;
}
function fitText(c, text, weightFamily, size, maxW){
  let px = size; c.font = `${weightFamily.replace('{px}', px)}`;
  while (c.measureText(text).width > maxW && px > 10) { px -= 4; c.font = weightFamily.replace('{px}', px); }
}
function redrawTex(tex){ const u = tex.userData; u.ctx.clearRect(0,0,u.w,u.h); u.draw(u.ctx,u.w,u.h); tex.needsUpdate = true; }
const CHALK = "#F3EEDC";
const PIXEL_FONT = "'Pixelify Sans', 'Courier New', monospace";

function fixNormals(geo){        // some exported meshes carry zero-length normals, which turn shadowed pixels into NaN
  const n = geo.attributes.normal;
  if (!n) { geo.computeVertexNormals(); return; }
  for (let i=0;i<n.count;i++){ const x = n.getX(i), y = n.getY(i), z = n.getZ(i), l = x*x + y*y + z*z; if (!(l > 1e-8) || !isFinite(l)) { geo.computeVertexNormals(); return; } }
}
function prepModel(root){
  root.traverse(o => {
    if (!o.isMesh) return;
    fixNormals(o.geometry);
    o.castShadow = !W3.small; o.receiveShadow = true;
    const mats = Array.isArray(o.material) ? o.material : [o.material];
    mats.forEach(m => { if (m && m.map) { m.map.anisotropy = 4; } });
  });
  return root;
}
/* pull one named animal out of the voxel pack, re-centred with its feet at y=0 */
function voxelAnimal(nodeName, height){
  const g = W3.assets.animals;
  g.scene.updateMatrixWorld(true);
  let src = null; g.scene.traverse(o => { if (!src && o.name === nodeName) src = o; });
  if (!src) return new THREE.Group();
  const inner = new THREE.Group();
  src.children.forEach(ch => {
    ch.updateWorldMatrix(true, true);
    const c = ch.clone(true);
    ch.matrixWorld.decompose(c.position, c.quaternion, c.scale);
    inner.add(c);
  });
  prepModel(inner);
  const box = new THREE.Box3().setFromObject(inner), size = box.getSize(new THREE.Vector3()), ctr = box.getCenter(new THREE.Vector3());
  inner.position.set(-ctr.x, -box.min.y, -ctr.z);
  const holder = new THREE.Group(); holder.add(inner);
  const outer = new THREE.Group(); outer.add(holder);
  holder.scale.setScalar(height / size.y);
  outer.userData.size = size.clone().multiplyScalar(height/size.y);
  outer.userData.holder = holder;
  return outer;
}

/* soft contact shadow so characters don't float */
let SHADOW_TEX = null;
function contactShadow(w, d){
  if (!SHADOW_TEX) SHADOW_TEX = canvasTex(128, 128, (c, W, H) => {
    const g = c.createRadialGradient(W/2, H/2, 2, W/2, H/2, W/2);
    g.addColorStop(0, "rgba(20,10,0,0.75)"); g.addColorStop(0.55, "rgba(20,10,0,0.35)"); g.addColorStop(1, "rgba(20,10,0,0)");
    c.fillStyle = g; c.fillRect(0, 0, W, H);
  });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), new THREE.MeshBasicMaterial({ map:SHADOW_TEX, transparent:true, depthWrite:false, opacity:0.8 }));
  m.rotation.x = -Math.PI/2; m.position.y = 0.012; m.renderOrder = 1;
  return m;
}

/* ---------- characters ---------- */
/* A flat pixel-art character on a plane that always turns to face the camera.
   userData keeps the same fields the game flow drives: talkTarget, turnTarget, standTarget, walk, lean, name. */
function makeSprite(texKeys, height, { seated=false, lift=0, shadow=true, frames=null }={}){
  const tex = W3.tex[texKeys[0]];
  const aspect = tex.image.width / tex.image.height;
  const w = height*aspect;
  const mat = new THREE.MeshStandardMaterial({ map:tex, alphaTest:0.5, side:THREE.DoubleSide, roughness:0.95, metalness:0 });
  const plane = new THREE.Mesh(new THREE.PlaneGeometry(w, height), mat);
  plane.geometry.translate(0, height/2, 0);
  plane.castShadow = false; plane.receiveShadow = false;
  const g = new THREE.Group();
  const body = new THREE.Group(); body.add(plane); g.add(body);
  const headPivot = new THREE.Object3D(); headPivot.position.y = height*0.86; body.add(headPivot);
  if (shadow) { const s = contactShadow(w*1.1, w*0.55); s.position.y = 0.012 - lift; g.add(s); g.userData.shadowMesh = s; }
  g.userData = Object.assign(g.userData, { kind:"sprite", plane, body, mat, headPivot, texKeys, frames, height, lift, seated,
    stand:seated?0:1, standTarget:seated?0:1, phase:Math.random()*10, talk:0, talkTarget:0, mouth:0, mouthUntil:0, level:0,
    turn:0, turnTarget:0, lean:0, walk:0, flip:1 });
  body.position.y = lift;
  return g;
}
/* a voxel animal from the pack, animated the same way */
function makeVoxel(nodeName, height){
  const g = voxelAnimal(nodeName, height);
  const headPivot = new THREE.Object3D(); g.userData.holder.add(headPivot);
  headPivot.position.set(0, height*0.92/g.userData.holder.scale.y, 0);
  const s = contactShadow(g.userData.size.x*1.4, g.userData.size.z*1.4); g.add(s);
  g.userData.holder.userData.s0 = g.userData.holder.scale.x;
  Object.assign(g.userData, { kind:"voxel", body:g.userData.holder, headPivot, height, phase:Math.random()*10,
    talk:0, talkTarget:0, turn:0, turnTarget:0, stand:1, standTarget:1, lean:0, walk:0, baseRotY:0 });
  return g;
}
function setFigColor(){ /* the old red/white look highlighted figures by colour; the new art style doesn't */ }

function poseFigure(g, t){
  const u = g.userData;
  if (u.idle) u.talkTarget = Math.sin(t*0.8 + u.phase) > 0.35 ? u.idle : 0;          // animals fidget now and then
  if (u.wander) {                                                                    // and some of them roam
    const w = u.wander, k = Math.sin(t*w.speed + u.phase);
    g.position[w.axis] = w.mid + k*w.range;
    const dir = Math.cos(t*w.speed + u.phase);
    if (u.kind === "sprite") u.flip = dir > 0 ? w.face : -w.face; else u.baseRotY = dir > 0 ? w.rotA : w.rotB;
    u.walk = 0.6;
  }
  u.talk += (u.talkTarget - u.talk) * 0.25;
  u.turn += (u.turnTarget - u.turn) * 0.08;
  u.stand += (u.standTarget - u.stand) * 0.1;
  const k = u.talk;
  if (u.kind === "voxel") {
    const bob = Math.abs(Math.sin(t*8.5 + u.phase))*0.05*k*u.height;
    u.body.position.y = bob + (u.walk ? Math.abs(Math.sin(t*9))*0.06 : 0);
    u.body.rotation.z = Math.sin(t*5.2 + u.phase)*0.05*k + u.lean;
    u.body.rotation.x = -Math.sin(t*9 + u.phase)*0.06*k;
    u.body.rotation.y = u.baseRotY + u.turn*0.6;
    const sq = 1 + Math.sin(t*1.6 + u.phase)*0.012 + Math.sin(t*14 + u.phase)*0.025*k;
    u.body.scale.set(u.body.userData.s0*(2 - sq), u.body.userData.s0*sq, u.body.userData.s0*(2 - sq));
    return;
  }
  // sprites: face the camera around the vertical axis
  if (W3.camera) { if (!TMPV) TMPV = new THREE.Vector3(); const cp = W3.camera.position, wp = g.getWorldPosition(TMPV); g.rotation.y = Math.atan2(cp.x - wp.x, cp.z - wp.z) - (g.parent ? g.parent.rotation.y : 0); }
  const breathe = 1 + Math.sin(t*1.7 + u.phase)*0.012;
  const talkBob = Math.abs(Math.sin(t*9 + u.phase))*0.035*k;
  const walkBob = u.walk ? Math.abs(Math.sin(t*8))*0.08 : 0;
  const standUp = (u.seated ? 0.32 : 0) * (u.stand - (u.seated ? 0 : 1));
  u.body.position.y = u.lift + standUp + talkBob*u.height*0.6 + walkBob;
  u.body.scale.set(u.flip*(1 + talkBob*0.4), breathe + talkBob*0.8, 1);
  u.body.rotation.z = u.lean + Math.sin(t*4.3 + u.phase)*0.045*k + (u.walk ? Math.sin(t*8)*0.06 : 0) - u.turn*0.12;
  // looking to the side: mirror the sprite once the turn is big enough
  u.flip = u.turn < -0.35 ? -1 : (u.turn > 0.35 ? 1 : u.flip);
  if (u.frames) {                    // mouth frames follow the voice, with a short hold so it reads as talking
    const now = t;
    if (u.level > 0.018 && Math.sin(t*23 + u.phase) > -0.55) u.mouthUntil = now + 0.07;
    const open = now < u.mouthUntil;
    const want = W3.tex[u.frames[open ? 1 : 0]];
    if (u.mat.map !== want) { u.mat.map = want; u.mat.needsUpdate = true; }
  }
}
let TMPV = null;
function headWorld(g, up=0.12){ if (!W3.ok || !g || !g.userData.headPivot || !g.userData.headPivot.getWorldPosition) return null; const v = V(0,0,0); g.userData.headPivot.getWorldPosition(v); v.y += up; return v; }

/* ---------- lighting ---------- */
function roomLights(scene, { key, keyTarget, keyColor=0xFFB968, keyI=2.6, fill=0xFFC08A, fillI=0.45, bounce=0x4A230C, pools=[], poolColor=0xFFC47A, poolI=6, poolDist=6, shadowBox=8, ambI=0.1 }){
  scene.add(new THREE.HemisphereLight(fill, bounce, fillI));
  scene.add(new THREE.AmbientLight(0xFFC690, ambI));
  const d = new THREE.DirectionalLight(keyColor, keyI);
  d.position.copy(key); d.target.position.copy(keyTarget); scene.add(d.target);
  d.castShadow = !W3.small;
  d.shadow.mapSize.set(2048, 2048); const sc = d.shadow.camera; sc.left = -shadowBox; sc.right = shadowBox; sc.top = shadowBox; sc.bottom = -shadowBox; sc.near = 0.5; sc.far = 60;
  d.shadow.bias = -0.0006; d.shadow.normalBias = 0.03; d.shadow.radius = 4;
  scene.add(d);
  pools.forEach(p => { const l = new THREE.PointLight(poolColor, poolI, poolDist, 1.6); l.position.copy(p); scene.add(l); });
  return d;
}

/* ---------- classroom (Styloo classroom pack) ---------- */
/* The model ships without a ceiling, the right-hand wall or the back wall. We build them here,
   using the model's own palette texture so they match the existing front wall exactly. */
const CLASS = { x0:-4.02, x1:4.46, z0:-4.87, z1:5.17, h:3.24,
  cols:[-2.9, -0.78, 0.99, 2.78], rows:[-3.35, -1.84, -0.33, 1.17] };
function paletteMaterial(root){ let mat = null; root.traverse(o => { if (!mat && o.isMesh && o.material && o.material.name && o.material.name.trim() === "normal") mat = o.material; }); return mat; }
function flatUV(geo, u, v){ const uv = geo.attributes.uv; for (let i=0;i<uv.count;i++) uv.setXY(i, u, v); uv.needsUpdate = true; return geo; }
function closeClassroom(scene, pal){
  const WALL = [0.153, 0.07];
  const wallMat = pal ? pal : new THREE.MeshStandardMaterial({ color:0xC9C4BC, roughness:0.9 });
  const add = (geo, x, y, z, ry=0, rx=0) => { if (pal) flatUV(geo, ...WALL); const m = new THREE.Mesh(geo, wallMat); m.position.set(x, y, z); m.rotation.set(rx, ry, 0); m.receiveShadow = true; m.castShadow = false; scene.add(m); return m; };
  const W = CLASS.x1 - CLASS.x0 + 0.3, D = CLASS.z1 - CLASS.z0 + 0.3, cx = (CLASS.x0 + CLASS.x1)/2, cz = (CLASS.z0 + CLASS.z1)/2;
  // ceiling: slightly warm off-white, lit from below by the fixtures
  const ceilMat = new THREE.MeshStandardMaterial({ color:0x8A5A30, roughness:0.95 });
  const ceil = new THREE.Mesh(new THREE.BoxGeometry(W, 0.12, D), ceilMat); ceil.position.set(cx, CLASS.h + 0.06, cz); ceil.receiveShadow = true; scene.add(ceil);
  // right-hand wall (x = -4.02) and back wall (z = -4.87), as thin boxes so they read from both sides
  add(new THREE.BoxGeometry(0.14, CLASS.h, D), CLASS.x0 - 0.07, CLASS.h/2, cz);
  add(new THREE.BoxGeometry(W, CLASS.h, 0.14), cx, CLASS.h/2, CLASS.z0 - 0.07);
  // skirting and a cornice line so the new walls sit in the room like the others
  const trim = new THREE.MeshStandardMaterial({ color:0x6B4428, roughness:0.8 });
  const t1 = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.1, D - 0.3), trim); t1.position.set(CLASS.x0 + 0.015, 0.05, cz); scene.add(t1);
  const t2 = new THREE.Mesh(new THREE.BoxGeometry(W - 0.3, 0.1, 0.03), trim); t2.position.set(cx, 0.05, CLASS.z0 + 0.015); scene.add(t2);
  const post = new THREE.Mesh(new THREE.BoxGeometry(0.16, CLASS.h, 0.16), new THREE.MeshStandardMaterial({ color:0x2F4E7A, roughness:0.7 }));
  post.position.set(CLASS.x0 + 0.08, CLASS.h/2, CLASS.z1 - 0.3); scene.add(post);
  // a door and a noticeboard on the right wall, so it isn't a blank slab
  const door = new THREE.Mesh(new THREE.BoxGeometry(0.06, 2.1, 0.95), new THREE.MeshStandardMaterial({ color:0x7A4A26, roughness:0.75 }));
  door.position.set(CLASS.x0 + 0.03, 1.05, -2.7); scene.add(door);
  const knob = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 6), new THREE.MeshStandardMaterial({ color:0xC9A24A, metalness:0.6, roughness:0.3 }));
  knob.position.set(CLASS.x0 + 0.08, 1.0, -2.35); scene.add(knob);
  const cork = canvasTex(256, 160, (c, w, h) => {
    c.fillStyle = "#B7864F"; c.fillRect(0,0,w,h); c.strokeStyle = "#6B4428"; c.lineWidth = 12; c.strokeRect(0,0,w,h);
    [["#F2D35B",30,26,70,60],["#E86A5A",120,34,56,48],["#8FC7E8",60,92,74,46],["#F3EEDC",160,96,64,44]].forEach(([col,x,y,ww,hh]) => { c.fillStyle = col; c.fillRect(x,y,ww,hh); });
  });
  const board = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.95), new THREE.MeshStandardMaterial({ map:cork, roughness:0.9 }));
  board.position.set(CLASS.x0 + 0.015, 1.6, 0.4); board.rotation.y = Math.PI/2; scene.add(board);
}

/* ---------- stage 2 props: small low-poly things you can use ---------- */
function mat(color, o={}){ return new THREE.MeshStandardMaterial(Object.assign({ color, roughness:0.75, metalness:0 }, o)); }
function mbox(w, h, d, m, x=0, y=0, z=0, parent=null){ const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); b.position.set(x, y, z); b.castShadow = !W3.small; b.receiveShadow = true; if (parent) parent.add(b); return b; }
function mcyl(rt, rb, h, m, x=0, y=0, z=0, parent=null, seg=10){ const c = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), m); c.position.set(x, y, z); c.castShadow = !W3.small; c.receiveShadow = true; if (parent) parent.add(c); return c; }
function labelTex(text, bg, fg, w=256, h=96){ return canvasTex(w, h, (c, W, H) => { c.fillStyle = bg; c.fillRect(0,0,W,H); c.fillStyle = fg; fitText(c, text, `700 {px}px ${PIXEL_FONT}`, 56, W - 24); c.textBaseline = "middle"; c.fillText(text, 12, H/2 + 2); }); }
function buildTaskProps(scene, kids, figures){
  const props = [];
  const byId = {};
  const prop = (obj, label, actions, id) => { obj.userData.task = { label, actions }; if (id) { obj.userData.id = id; byId[id] = obj; obj.userData.home = { pos:obj.position.clone(), rot:obj.rotation.clone(), parent:null }; } if (!obj.parent) scene.add(obj); props.push(obj); return obj; };
  const G = (x, y, z, ry=0) => { const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.y = ry; scene.add(g); return g; };
  const wood = mat(0x8A5530), darkWood = mat(0x5C3820), metal = mat(0x9EA3A8, { metalness:0.6, roughness:0.35 }), white = mat(0xF4EEDF, { roughness:1 });
  // --- your desk (back row, third column)
  const D = { x:0.99, y:0.847, z:-2.82 };
  const book = (col, x, z, ry) => { const g = G(D.x + x, D.y, D.z + z, ry); mbox(0.2, 0.018, 0.27, mat(col), 0, 0.009, 0, g); mbox(0.19, 0.012, 0.26, white, 0.004, 0.009, 0, g); return g; };
  prop(book(0x3E8E4A, -0.27, 0.1, 0.08), "Green exercise book", ["Take out your green exercise book"], "greenbook");
  prop(book(0xC0392B, -0.02, 0.1, -0.06), "Red book", ["Take out your red exercise book", "Put the red book on the shelf", "Put the book in your bag"], "redbook");
  prop(book(0x2F6DB5, 0.28, -0.17, 0.15), "Blue book", ["Put the blue book on the shelf", "Put the book in your bag"], "bluebook");
  const page = G(D.x - 0.2, D.y + 0.004, D.z - 0.01, -0.05);
  mbox(0.36, 0.01, 0.25, white, 0, 0.005, 0, page); mbox(0.004, 0.012, 0.25, mat(0xB9B2A2), 0, 0.006, 0, page);
  for (let i=0;i<5;i++) mbox(0.15, 0.001, 0.003, mat(0x9DB4CF), -0.09, 0.011, -0.08 + i*0.04, page);
  const pageCover = mbox(0.37, 0.006, 0.26, mat(0x3E8E4A), 0, 0.0, 0, page); pageCover.position.y = -0.001; page.userData.cover = pageCover;
  prop(page, "Your exercise book", ["Write today's date at the top of a new page", "Write your name at the top", "Turn to the last page"], "exbook"); page.visible = false;
  const text = G(D.x + 0.25, D.y, D.z + 0.1, 0.15);
  mbox(0.22, 0.02, 0.28, mat(0x6A4C8C), 0, 0.01, 0, text); mbox(0.2, 0.004, 0.26, white, 0, 0.022, 0, text);
  for (let i=0;i<4;i++) mbox(0.14, 0.001, 0.004, mat(0x444444), 0, 0.025, -0.08 + i*0.035, text);
  prop(text, "Reading book", ["Underline the verbs in the first paragraph", "Underline the nouns in the first paragraph"], "reader"); text.userData.cover = text.children[0];
  const pen = (col, x, z, label, act, id) => { const g = G(D.x + x, D.y + 0.008, D.z + z, 0.2); const c = mcyl(0.007, 0.007, 0.16, mat(col, { roughness:0.35 }), 0, 0, 0, g, 8); c.rotation.z = Math.PI/2; mcyl(0.0075, 0.0075, 0.035, mat(0xDDDDDD), 0.065, 0, 0, g, 8).rotation.z = Math.PI/2; const hb = mbox(0.19, 0.035, 0.045, new THREE.MeshBasicMaterial({ visible:false }), 0, 0.01, 0, g); hb.castShadow = false; return prop(g, label, [act], id); };
  pen(0x2F5DA8, 0.13, -0.245, "Blue pen", "Grab a blue pen", "bluepen");
  pen(0x1E1E1E, 0.15, -0.19, "Black pen", "Grab a black pen", "blackpen");
  const draw = G(D.x - 0.02, D.y + 0.002, D.z - 0.16, 0.2); mbox(0.2, 0.004, 0.14, mat(0xFFFDF5), 0, 0, 0, draw);
  prop(draw, "Drawing paper", ["Draw a big sun", "Draw a big moon"], "paper");
  const ws = G(D.x - 0.03, D.y + 0.002, D.z - 0.17, 0.12); mbox(0.21, 0.004, 0.15, white, 0, 0, 0, ws);
  for (let i=0;i<5;i++) mbox(0.15, 0.001, 0.006, mat(0x77706A), -0.01, 0.003, -0.05 + i*0.025, ws);
  mbox(0.06, 0.001, 0.02, mat(0x2F6DB5), -0.06, 0.003, -0.066, ws);
  prop(ws, "Your worksheet", [], "worksheet");
  const chair = G(0.99, 0, -3.3); const hit = mbox(0.5, 0.5, 0.45, new THREE.MeshBasicMaterial({ visible:false }), 0, 0.25, 0, chair); hit.castShadow = false; chair.userData.low = true;
  prop(chair, "Your chair", ["Stop kicking the chair", "Sit down", "Stack your chair", "Stack all the chairs"], "chair");
  // --- classmates
  kids.forEach(k => {
    if (k.userData.name === "Mia") k.userData.task = { label:"Mia", actions:["Give the pen back to Mia"] };
    if (k.userData.name === "Sam") k.userData.task = { label:"Sam", actions:["Remind Sam about his permission slip"] };
    if (k.userData.task) { k.userData.low = true; k.userData.id = k.userData.name.toLowerCase(); byId[k.userData.id] = k; props.push(k); }
  });
  const left = kids.find(k => Math.abs(k.position.x - 2.78) < 0.2 && Math.abs(k.position.z - -3.29) < 0.2);
  if (left) { left.userData.id = "left"; byId.left = left; left.userData.low = true; left.userData.task = { label:"The person on your left", actions:["Swap books with the person on your left"] }; props.push(left); }
  const rightKid = makeSprite(["s3"], 0.98, { seated:true, lift:0.55 }); rightKid.position.set(-0.78, 0, -3.29); rightKid.visible = false; rightKid.userData.low = true;
  rightKid.userData.task = { label:"The person on your right", actions:["Swap books with the person on your right"] };
  scene.add(rightKid); figures.push(rightKid); props.push(rightKid); rightKid.userData.id = "right"; byId.right = rightKid;
  // --- teacher's desk at the front, with trays, the register and the phone box
  const td = G(-2.55, 0, 3.75, 0.08);
  mbox(1.5, 0.05, 0.72, wood, 0, 0.76, 0, td); [[-0.68,-0.3],[0.68,-0.3],[-0.68,0.3],[0.68,0.3]].forEach(([x, z]) => mbox(0.06, 0.74, 0.06, darkWood, x, 0.37, z, td));
  mbox(1.4, 0.55, 0.03, darkWood, 0, 0.45, 0.33, td);
  const trayDesk = G(-2.95, 0.79, 3.72, 0.1); mbox(0.36, 0.012, 0.27, metal, 0, 0.006, 0, trayDesk); [[0,0.13],[0,-0.13]].forEach(([x,z]) => mbox(0.36, 0.05, 0.01, metal, x, 0.03, z, trayDesk)); [[-0.18,0],[0.18,0]].forEach(([x,z]) => mbox(0.01, 0.05, 0.27, metal, x, 0.03, z, trayDesk));
  for (let i=0;i<3;i++) mbox(0.3, 0.003, 0.22, white, 0, 0.015 + i*0.004, 0, trayDesk);
  prop(trayDesk, "Tray on his desk", ["Put your worksheet in the tray on his desk"], "traydesk");
  const reg = G(-2.45, 0.79, 3.7, -0.2); mbox(0.3, 0.035, 0.24, mat(0x2F4E7A), 0, 0.017, 0, reg);
  const regLabel = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 0.07), new THREE.MeshStandardMaterial({ map:labelTex("REGISTER", "#F4EEDF", "#2F4E7A") })); regLabel.rotation.x = -Math.PI/2; regLabel.rotation.z = Math.PI; regLabel.position.set(0, 0.036, 0); reg.add(regLabel);
  prop(reg, "The register", ["Take the register back to the office"], "register");
  const pbox = G(-2.0, 0.79, 3.72, 0.3); mbox(0.24, 0.12, 0.16, mat(0xE8A33D), 0, 0.06, 0, pbox); mbox(0.2, 0.01, 0.12, mat(0x3A2412), 0, 0.121, 0, pbox);
  const pLabel = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 0.06), new THREE.MeshStandardMaterial({ map:labelTex("PHONES", "#E8A33D", "#2A1A0C") })); pLabel.position.set(0, 0.06, -0.081); pLabel.rotation.y = Math.PI; pbox.add(pLabel);
  prop(pbox, "Phone box", ["Put your phone in the box"], "phones");
  // --- the door (right-hand wall) and the tray on a little table beside it
  const door = G(-4.0, 0, -2.7); const dh = mbox(0.08, 2.1, 0.98, new THREE.MeshBasicMaterial({ visible:false }), 0.05, 1.05, 0, door); dh.castShadow = false;
  door.userData.low = true; prop(door, "Classroom door", ["Meet him on the field at ten past", "Meet him in the gym", "Take the register back to the office"], "door");
  const side = G(-3.65, 0, -1.55); mbox(0.5, 0.04, 0.45, wood, 0, 0.72, 0, side); [[-0.22,-0.19],[0.22,-0.19],[-0.22,0.19],[0.22,0.19]].forEach(([x,z]) => mbox(0.04, 0.7, 0.04, darkWood, x, 0.35, z, side));
  const trayDoor = G(-3.65, 0.74, -1.55, 0.3); mbox(0.36, 0.012, 0.27, mat(0x3E8E4A), 0, 0.006, 0, trayDoor); [[0,0.13],[0,-0.13]].forEach(([x,z]) => mbox(0.36, 0.05, 0.01, mat(0x3E8E4A), x, 0.03, z, trayDoor)); [[-0.18,0],[0.18,0]].forEach(([x,z]) => mbox(0.01, 0.05, 0.27, mat(0x3E8E4A), x, 0.03, z, trayDoor));
  prop(trayDoor, "Tray by the door", ["Put your worksheet in the tray by the door"], "traydoor");
  // --- the windows
  const win = G(4.3, 0, 0.3); const wh = mbox(0.08, 1.7, 3.6, new THREE.MeshBasicMaterial({ visible:false }), 0, 1.75, 0, win); wh.castShadow = false;
  win.userData.low = true; prop(win, "Window", ["Close the window"], "window");
  // --- behind you: the cubby shelf, coats, sink and the sports corner
  const lunch = G(1.35, 1.12, -4.62); mbox(0.3, 0.16, 0.2, mat(0xD9443A), 0, 0.08, 0, lunch); mbox(0.12, 0.03, 0.02, mat(0x2A1A0C), 0, 0.17, 0, lunch);
  prop(lunch, "Your lunchbox", ["Get your lunchbox"], "lunch");
  const crayons = (col, x, label, act, id) => { const g = G(x, 1.84, -4.65); mbox(0.22, 0.09, 0.12, mat(col), 0, 0.045, 0, g); for (let i=0;i<6;i++) mcyl(0.008, 0.008, 0.06, mat(col, { roughness:0.5 }), -0.08 + i*0.032, 0.11, 0, g, 6); return prop(g, label, [act], id); };
  crayons(0x3E9E4A, 2.1, "Green crayons", "Get the green crayons", "greencray");
  crayons(0x2F6DB5, 2.5, "Blue crayons", "Get the blue crayons", "bluecray");
  const paints = G(2.95, 1.84, -4.65); mbox(0.3, 0.04, 0.16, mat(0xEFE7D6), 0, 0.02, 0, paints); [0xD9443A, 0xF2C230, 0x2F6DB5, 0x3E9E4A, 0x8A4FB5].forEach((c, i) => mcyl(0.022, 0.022, 0.02, mat(c), -0.1 + i*0.05, 0.05, 0, paints, 10));
  prop(paints, "Paints", ["Get the paints"], "paints");
  const hooks = G(-1.6, 0, -4.8);
  mbox(1.6, 0.06, 0.04, darkWood, 0, 1.62, 0, hooks);
  [0x2F6DB5, 0xD9443A, 0xE8A33D, 0x3E9E4A].forEach((c, i) => { mbox(0.34, 0.62, 0.1, mat(c, { roughness:0.95 }), -0.6 + i*0.4, 1.28, 0.06, hooks); mbox(0.24, 0.12, 0.1, mat(c, { roughness:0.95 }), -0.6 + i*0.4, 1.58, 0.07, hooks); });
  prop(hooks, "Coat hooks and bags", ["Get your coat", "Put the book in your bag"], "hooks");
  const sink = G(-3.75, 0, -0.55, Math.PI/2);
  mbox(0.8, 0.85, 0.5, mat(0xE9E4DA), 0, 0.425, 0, sink); mbox(0.52, 0.06, 0.36, mat(0xBFC5C9, { metalness:0.5, roughness:0.3 }), 0, 0.86, 0.02, sink);
  const tap = mcyl(0.015, 0.015, 0.22, metal, 0, 1.0, -0.17, sink, 8); tap.rotation.x = 0.4;
  mbox(0.3, 0.42, 0.03, mat(0x7FB7D9, { roughness:1 }), 0.55, 1.05, -0.22, sink);
  prop(sink, "Sink and towel", ["Wash your hands", "Dry your hands"], "sink");
  const cup = G(-3.55, 0, -4.45); mbox(0.9, 1.9, 0.6, mat(0x6B7B8C, { metalness:0.3, roughness:0.5 }), 0, 0.95, 0, cup); mbox(0.02, 1.8, 0.01, mat(0x3A4450), 0, 0.95, 0.305, cup);
  const cupLabel = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.14), new THREE.MeshStandardMaterial({ map:labelTex("SPORTS", "#F2C230", "#2A1A0C") })); cupLabel.position.set(0, 1.55, 0.306); cup.add(cupLabel);
  const cupDoors = [-1, 1].map(sd => { const piv = new THREE.Group(); piv.position.set(sd*0.45, 0, 0.31); cup.add(piv); mbox(0.44, 1.8, 0.03, mat(0x7A8B9C, { metalness:0.3, roughness:0.5 }), -sd*0.22, 0.95, 0.0, piv); return piv; });
  cup.userData.doors = cupDoors; cupLabel.position.z = 0.33;
  prop(cup, "Sports cupboard", ["Take the sports gear out of the cupboard"], "cupboard");
  const cones = G(-2.75, 0, -4.35); for (let i=0;i<4;i++) { const c = mcyl(0.02, 0.12, 0.3, mat(0xF07A22), i*0.28 - 0.4, 0.15, 0, cones, 12); for (let j=1;j<3;j++) mcyl(0.02, 0.12, 0.3, mat(0xF07A22), i*0.28 - 0.4, 0.15 + j*0.06, 0, cones, 12); }
  prop(cones, "Cones", ["Count out twenty cones", "Count out twelve cones"], "cones"); cones.visible = false;
  const balls = G(-3.1, 0, -3.95); [0xD9443A, 0xF2C230, 0xF4EEDF].forEach((c, i) => { const b = new THREE.Mesh(new THREE.SphereGeometry(0.11, 14, 10), mat(c)); b.position.set(i*0.26, 0.11, (i%2)*0.1); b.castShadow = !W3.small; balls.add(b); }); balls.visible = false; byId.balls = balls;
  const bag = (col, x, label, act, id) => { const g = G(x, 0, -4.15); const b = mbox(0.45, 0.3, 0.3, mat(col, { roughness:0.95 }), 0, 0.15, 0, g); b.scale.y = 1; mbox(0.3, 0.04, 0.04, mat(0x2A1A0C), 0, 0.33, 0, g); return prop(g, label, [act], id); };
  bag(0x2F6DB5, -2.1, "Blue bag", "Put them in the blue bag", "bluebag");
  bag(0xC0392B, -1.5, "Red bag", "Put them in the red bag", "redbag");
  const clip = G(-2.95, 1.35, -4.84); mbox(0.24, 0.32, 0.02, mat(0x8A5530), 0, 0, 0, clip); mbox(0.2, 0.26, 0.004, white, 0, -0.01, 0.012, clip); mbox(0.1, 0.03, 0.02, metal, 0, 0.15, 0.012, clip);
  prop(clip, "Equipment sheet", ["Sign the equipment sheet"], "sheet");
  // the cubby shelf behind you, as one big target for "put it on the shelf"
  const shelf = G(1.55, 0, -4.62); const sh = mbox(3.1, 1.8, 0.3, new THREE.MeshBasicMaterial({ visible:false }), 0, 0.9, 0, shelf); sh.castShadow = false; shelf.userData.low = true;
  prop(shelf, "Shelf", ["Put the red book on the shelf", "Put the blue book on the shelf"], "shelf");
  // today's date on a card above the board, so you can copy it
  const today = new Date();
  const dateStr = today.toLocaleDateString("en-NZ", { weekday:"long", day:"numeric", month:"long", year:"numeric" }).replace(/,/g, "");
  const dateTex = canvasTex(1024, 220, (c, w, h) => { c.fillStyle = "#FBF1DA"; c.fillRect(0,0,w,h); c.strokeStyle = "#B8680F"; c.lineWidth = 10; c.strokeRect(5,5,w-10,h-10);
    c.fillStyle = "#8A5530"; fitText(c, "Today is", `700 {px}px ${PIXEL_FONT}`, 50, w - 80); c.fillText("Today is", 40, 70);
    c.fillStyle = "#2A1A0C"; fitText(c, dateStr, `700 {px}px ${PIXEL_FONT}`, 92, w - 80); c.fillText(dateStr, 40, 170); });
  const dateCard = new THREE.Mesh(new THREE.PlaneGeometry(2.1, 0.45), new THREE.MeshBasicMaterial({ map:dateTex, toneMapped:false }));
  dateCard.position.set(1.95, 2.86, 4.5); dateCard.rotation.y = Math.PI; scene.add(dateCard);
  return { props, rightKid, byId };
}

function buildClassroom(){
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x140B03);
  const model = W3.assets.classroom.scene.clone(true);
  prepModel(model); scene.add(model);
  // the fluorescent tubes: warm and soft rather than blown-out white, so the room feels lamp-lit
  model.traverse(o => { if (!o.isMesh) return; const ms = Array.isArray(o.material) ? o.material : [o.material];
    ms.forEach((m, i) => { if (m && m.name === "emissionwhite") { const w = m.clone(); w.emissive = new THREE.Color(0xFFD9A6); w.emissiveIntensity = 1.35; if (Array.isArray(o.material)) o.material[i] = w; else o.material = w; o.castShadow = false; } }); });
  closeClassroom(scene, paletteMaterial(model));
  // warm key through the windows (on the left as you face the board), casting desk shadows across the floor
  roomLights(scene, { key:V(10, 5.5, -1.5), keyTarget:V(-1, 0.4, 1.0), keyI:3.0, fillI:0.5, fill:0xFFE0C0,
    pools:[V(-1.7, 2.7, -1.9), V(1.9, 2.7, -1.9), V(-1.7, 2.7, 2.4), V(1.9, 2.7, 2.4)], poolI:3.2, poolDist:4.5, shadowBox:7 });
  const win = new THREE.PointLight(0xFFD7A0, 3, 7, 1.8); win.position.set(3.8, 2.0, 0.0); scene.add(win);
  // daylight in the windows: a bright panel just outside the window wall
  const sky = new THREE.Mesh(new THREE.PlaneGeometry(10.5, 3.2), new THREE.MeshBasicMaterial({ color:0xFFF1D8, toneMapped:false }));
  sky.position.set(5.2, 1.7, 0.2); sky.rotation.y = -Math.PI/2; scene.add(sky);
  // the hot spot on the ceiling above the board
  const glowC = new THREE.PointLight(0xFFC98A, 1.1, 4, 1.8); glowC.position.set(0.2, 2.45, 2.6);
  const backLamp = new THREE.PointLight(0xFFB870, 5.5, 7, 1.6); backLamp.position.set(-0.6, 2.55, -2.6); scene.add(backLamp); scene.add(glowC);
  const boardWash = new THREE.SpotLight(0xFFD29A, 18, 12, 0.6, 0.7, 1.5); boardWash.position.set(0.2, 3.0, -1.0); boardWash.target.position.set(0.2, 1.6, 4.9); scene.add(boardWash, boardWash.target);

  // chalkboard: title written on in chalk
  const boardTex = canvasTex(1024, 300, (c, w, h) => {
    c.clearRect(0,0,w,h);
    c.fillStyle = CHALK; fitText(c, "The Lighthouse Keeper", `700 {px}px ${PIXEL_FONT}`, 104, w - 110); c.fillText("The Lighthouse Keeper", 55, 140);
    c.globalAlpha = .7; fitText(c, "Read aloud, then questions", `500 {px}px ${PIXEL_FONT}`, 50, w - 120); c.fillText("Read aloud, then questions", 60, 225); c.globalAlpha = 1;
  });
  const board = new THREE.Mesh(new THREE.PlaneGeometry(3.7, 1.08), new THREE.MeshBasicMaterial({ map:boardTex, transparent:true, depthWrite:false, toneMapped:false, opacity:0.9 }));
  board.position.set(0.16, 1.66, 4.56); board.rotation.y = Math.PI; scene.add(board);

  // pupils: seen from behind, in the chairs ahead of you
  const kids = [], figures = [];
  const skins = ["s0","s1","s2","s3","s4","s5"];
  let n = 0;
  CLASS.rows.forEach((z, ri) => CLASS.cols.forEach((x, ci) => {
    if (ri === 0 && ci === 2) return;                         // your seat
    if (ri === 0 && (ci === 1 || ci === 2)) return;           // the two desks right in front of you stay empty
    if (ri === 3 && ci === 2) return;                         // and one at the front, by the lectern
    const isHorse = ri === 3 && ci === 0;                     // one classmate is, inexplicably, a donkey
    let f;
    if (isHorse) {
      f = makeVoxel("Donkey", 1.55); f.userData.baseRotY = -Math.PI/2; f.position.set(x - 0.05, 0, z + 0.05);
            f.userData.horse = true;
    } else {
      f = makeSprite([skins[n++ % skins.length]], 0.98, { seated:true, lift:0.55 });
      if (n % 4 === 3) f.userData.flip = -1;
      f.position.set(x + (Math.random()-.5)*0.05, 0, z + 0.06);
    }
    f.userData.name = ri === 1 && ci === 1 ? "Sam" : ri === 1 && ci === 2 ? "Mia" : ri === 2 && ci === 3 ? "Leo" : null;
    scene.add(f); kids.push(f); figures.push(f);
  }));

  // animals around the room: more things competing for your attention
  const animals = [];
  const addVox = (node, h, x, y, z, rot, idle) => { const a = makeVoxel(node, h); a.userData.baseRotY = rot; a.userData.idle = idle; a.position.set(x, y, z); scene.add(a); figures.push(a); animals.push(a); return a; };
  addVox("Dog", 0.62, 2.9, 0, 3.1, -2.4, 0.5);                   // by the windows at the front
  addVox("Duck", 0.34, 0.99, 0.845, 1.8, Math.PI, 0.7);          // sitting on an empty desk
  addVox("Rabbit", 0.3, 3.35, 1.5, 4.47, Math.PI, 0.6);          // on top of the bookshelf
  const dog2 = addVox("Dog", 0.5, -2.2, 0, 2.75, 1.2, 0.4);        // another dog, wandering along the front
  dog2.userData.wander = { axis:"x", mid:-2.4, range:1.1, speed:0.35, rotA:Math.PI/2, rotB:-Math.PI/2 };
  const pea = makeSprite(["peacock"], 0.95, {}); pea.position.set(-3.35, 0, 1.6); pea.userData.idle = 0.5; scene.add(pea); figures.push(pea); animals.push(pea);
  pea.userData.wander = { axis:"z", mid:1.0, range:1.6, speed:0.22, face:1 };
  const porc = makeSprite(["porcupine"], 0.36, {}); porc.position.set(0.1, 0, 0.5); scene.add(porc); figures.push(porc); animals.push(porc);
  porc.userData.wander = { axis:"z", mid:0.2, range:1.6, speed:0.3, face:-1 };

  // the teacher: Derpy, whose mouth moves when he talks
  const teacher = makeSprite(["derpy0"], 2.1, { frames:["derpy0","derpy1"] });
  teacher.position.set(-0.95, 0, 3.6);
  scene.add(teacher); figures.push(teacher);

  // everything you can pick up, open or walk to in stage 2
  const taskProps = buildTaskProps(scene, kids, figures);

  W3.texts = (W3.texts || []).concat([boardTex]);
  return { scene, kids, teacher, figures, animals, props:taskProps.props, rightKid:taskProps.rightKid, byId:taskProps.byId,
    seat:{ pos:V(0.99, 1.24, -3.62), yaw:0, pitch:-0.22, backOff:V(-0.62, 0.42, 2.35) },
    spots:{ home:V(-0.95, 0, 3.6), aisle:V(0.12, 0, 2.6), desk:V(2.05, 0, 1.95), side:V(-0.1, 0, -2.3) },
    views:{ back:{ pos:V(0.1, 1.55, -4.4), look:V(0.1, 1.33, 4.8), fov:52 },
            desk:{ pos:V(0.95, 1.34, -3.95), look:V(0.55, 1.0, -1.7) },
            fly:{ pos:V(-0.2, 2.9, -4.6), look:V(0.3, 1.2, 4.2) } } };
}

/* ---------- lecture hall (used for the lecture and for the school assembly) ---------- */
const HALL = (() => {
  const s = LECTURE_SCALE;
  // tier floors and seat rows, measured from the model (model units), front to back.
  // zb is the seat back; people sit ~6 units in front of it, and the desk is ~14 units in front of it.
  const rows = [[-103,22],[-74,33],[-47,45],[-17,56],[10,67],[39,79],[66,90]].map(([z, y]) => ({ zb:z*s, z:(z - 6)*s, desk:(z - 14)*s, y:y*s }));
  const seatsX = []; for (let i=0;i<8;i++) seatsX.push((-35 + i*10.6)*s);
  const sideL = [], sideR = []; for (let i=0;i<5;i++){ sideL.push((-136 + i*11)*s); sideR.push((96 + i*11)*s); }
  return { s, rows, seatsX, sideL, sideR };
})();
function buildLecture(){
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x120A04);
  const model = W3.assets.lecture.scene.clone(true);
  model.scale.setScalar(HALL.s);
  prepModel(model);
  model.traverse(o => {
    if (!o.isMesh) return;
    if (/glass/.test(o.name)) { o.material = o.material.clone(); o.material.emissive = new THREE.Color(0xFFC27A); o.material.emissiveIntensity = 0.55; o.castShadow = false; }
    if (/papers/.test(o.name)) o.castShadow = false;
  });
  scene.add(model);
  roomLights(scene, { key:V(-16, 13, -4), keyTarget:V(2, 2, -4), keyI:2.8, fillI:0.95, shadowBox:14,
    pools:[V(-5, 9.5, -11), V(5, 9.5, -11), V(0, 9.5, -5), V(-6, 10, 0), V(6, 10, 0), V(0, 10.5, 3)], poolI:22, poolDist:13 });
  const front = new THREE.SpotLight(0xFFE4B8, 60, 22, 0.55, 0.6, 1.4); front.position.set(0, 10, -6); front.target.position.set(0.2, 1.5, -13.6); scene.add(front, front.target);

  // what's written on the board
  const screenTex = canvasTex(1024, 640, (c, w, h) => {
    const title = (W3.screenText && W3.screenText.title) || "Soil drainage";
    const sub = (W3.screenText && W3.screenText.sub) || "Week 3, lecture 2";
    c.clearRect(0,0,w,h);
    c.fillStyle = CHALK; fitText(c, title, `700 {px}px ${PIXEL_FONT}`, 150, w - 120); c.fillText(title, 60, 250);
    c.globalAlpha = .72; c.font = `500 60px ${PIXEL_FONT}`; c.fillText(sub, 66, 345);
    c.globalAlpha = .45; c.fillRect(66, 420, 520, 12); c.fillRect(66, 470, 380, 12); c.globalAlpha = 1;
  });
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(3.9, 2.44), new THREE.MeshBasicMaterial({ map:screenTex, transparent:true, depthWrite:false, toneMapped:false, opacity:0.92 }));
  screen.position.set(0, 3.7, -14.6); scene.add(screen);

  // the lecturer / principal: the chicken, behind the front bench
  const lecturer = makeVoxel("Empty", 2.1);
  lecturer.userData.baseRotY = Math.PI;
    lecturer.position.set(3.45, 0, -13.1);
  lecturer.userData.baseRotY = Math.PI - 0.35;
  scene.add(lecturer);

  const others = [], figures = [lecturer];
  const skins = ["s0","s1","s2","s3","s4","s5"];
  const seat = (x, r, skin, flip=1) => { const f = makeSprite([skin], 0.98, { seated:true, lift:0.3 }); f.userData.flip = flip; f.position.set(x, HALL.rows[r].y, HALL.rows[r].z); scene.add(f); figures.push(f); return f; };
  const YOU = 4, you = { x:HALL.seatsX[4], r:YOU };
  // the rows in front of you: a scattered class
  let n = 0;
  for (let r=0; r<YOU; r++){
    HALL.seatsX.forEach((x, i) => {
      if ((i*3 + r*5) % 4 === 0) return;
      if (r === 3 && (i >= 2 && i <= 5)) return;       // the gamer sits here; the seats right ahead stay empty
      if (r === 2 && (i === 2 || i === 3)) return;     // the gossips sit here
      if (W3.small && (i % 2)) return;
      others.push(seat(x, r, skins[n++ % 6], (n % 3) ? 1 : -1));
    });
    if (!W3.small) [HALL.sideL, HALL.sideR].forEach((xs, side) => xs.forEach((x, i) => { if ((i + r + side) % 3 === 0) others.push(seat(x, r, skins[n++ % 6], side ? -1 : 1)); }));
  }
  // your row, beside you
  [0, 1].forEach(i => others.push(seat(HALL.seatsX[i], YOU, skins[n++ % 6])));
  // the two gossips, one row ahead and to your left, turned towards each other
  const g1 = seat(HALL.seatsX[2], 2, "s1"), g2 = seat(HALL.seatsX[3], 2, "s4");
  g1.userData.turnTarget = 0.55; g2.userData.turnTarget = -0.55; g1.userData.lean = -0.05; g2.userData.lean = 0.05;
  // the gamer, one row ahead and to your right, with a laptop
  const gamer = seat(HALL.seatsX[5], 3, "s2");
  const deskTop = HALL.rows[3].y + 12*HALL.s + 0.02, deskZ = HALL.rows[3].desk;
  const laptop = new THREE.Group(); laptop.position.set(HALL.seatsX[5], deskTop, deskZ); scene.add(laptop);
  const dark = new THREE.MeshStandardMaterial({ color:0x2A2522, roughness:0.5, metalness:0.3 });
  const base = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.02, 0.25), dark); laptop.add(base);
  const gameTex = canvasTex(256, 160, () => {});
  gameTex.magFilter = THREE.NearestFilter;
  const lid = new THREE.Group(); lid.position.set(0, 0.01, -0.12); lid.rotation.x = -0.25; laptop.add(lid);
  const back = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.24, 0.012), dark); back.position.set(0, 0.12, -0.007); lid.add(back);
  const scr = new THREE.Mesh(new THREE.PlaneGeometry(0.33, 0.21), new THREE.MeshBasicMaterial({ map:gameTex, toneMapped:false })); scr.position.set(0, 0.12, 0.0); lid.add(scr);
  const glow = new THREE.PointLight(0x7FD0FF, 0.0, 2.2, 1.5); glow.position.set(HALL.seatsX[5], deskTop + 0.35, deskZ + 0.3); scene.add(glow);
  // your notepad and pen
  const yDesk = HALL.rows[YOU].y + 12*HALL.s + 0.02, zDesk = HALL.rows[YOU].desk;
  const pad = new THREE.Mesh(new THREE.PlaneGeometry(0.26, 0.34), new THREE.MeshStandardMaterial({ color:0xF6F0E2, roughness:1 })); pad.rotation.x = -Math.PI/2; pad.rotation.z = -0.1; pad.position.set(you.x - 0.05, yDesk, zDesk); scene.add(pad);
  for (let l=0;l<6;l++){ const ln = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 0.004), new THREE.MeshBasicMaterial({ color:0x9DB4CF })); ln.rotation.x = -Math.PI/2; ln.rotation.z = -0.1; ln.position.set(you.x - 0.05 + l*0.004, yDesk + 0.001, zDesk - 0.12 + l*0.045); scene.add(ln); }
  const pen = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.15, 6), new THREE.MeshStandardMaterial({ color:0x2F5DA8 })); pen.rotation.z = Math.PI/2; pen.rotation.y = 0.7; pen.position.set(you.x + 0.17, yDesk + 0.008, zDesk + 0.03); scene.add(pen);
  // a donkey has wandered in at the front: whatever everyone is whispering about, you can see it
  const donkey = makeVoxel("Donkey", 1.5); donkey.userData.baseRotY = -0.6;
  donkey.position.set(-4.6, 0, -11.0); donkey.visible = false; scene.add(donkey); figures.push(donkey);

  W3.texts = (W3.texts || []).concat([screenTex]);
  const eyeY = HALL.rows[YOU].y + 1.62;
  return { scene, lecturer, gamer, gossip:[g1, g2], others, gameTex, screenTex, glow, donkey, figures,
    views:{ seat:{ pos:V(you.x + 0.05, eyeY, HALL.rows[YOU].z - 0.3), look:V(0.35, 1.9, -14) },
            seatSmall:{ pos:V(you.x + 0.1, eyeY + 0.25, HALL.rows[YOU].z), look:V(0.4, 1.7, -14) },
            fly:{ pos:V(0, 8.5, 3.2), look:V(0, 2, -12) } } };
}

/* laptop game drawing */
const GAME = { x:0, score:0, jumpAt:-9, coins:[], flash:null, next:0 };
function drawGame(tex, t){ if (!tex) return;
  const c = tex.userData.ctx, w = 256, h = 160;
  GAME.x += 2.2;
  c.fillStyle = "#1B2B4A"; c.fillRect(0,0,w,h);
  c.fillStyle = "#2E4A7A"; for (let k=0;k<5;k++){ const hx = ((k*70 - GAME.x*0.3) % 350 + 350) % 350 - 40; c.fillRect(hx, 90, 46, 42); }
  c.fillStyle = "#6BBF59";
  for (let k=0;k<9;k++){ const bx = ((k*44 - GAME.x) % 396 + 396) % 396 - 40; c.fillRect(bx, 132, 38, 14); }
  if (Math.random() < 0.03) GAME.coins.push({ x:270, y:40 + Math.random()*50 });
  GAME.coins = GAME.coins.filter(o => (o.x -= 2.2) > -10);
  c.fillStyle = "#F7C948"; GAME.coins.forEach(o => { c.fillRect(o.x - 5, o.y - 5, 10, 10); });
  const jh = Math.max(0, Math.sin(Math.min(1, (t - GAME.jumpAt)/0.55)*Math.PI))*42;
  c.fillStyle = "#F08A3E"; c.fillRect(50, 104 - jh, 22, 28); c.fillStyle = "#1B2B4A"; c.fillRect(64, 110 - jh, 4, 4);
  c.fillStyle = "#FFFFFF"; c.font = `700 20px ${PIXEL_FONT}`; c.fillText(String(GAME.score), 200, 26);
  if (GAME.flash && t - GAME.flash.t < 0.9){ c.globalAlpha = 1 - (t - GAME.flash.t)/0.9; c.font = `700 30px ${PIXEL_FONT}`; c.fillText(GAME.flash.text, 80, 70); c.globalAlpha = 1; }
  tex.needsUpdate = true;
}

/* stand-ins used when 3D is off: same shape, no meshes */
function stubFigure(){ return { userData:{ talkTarget:0, turnTarget:0, standTarget:0, lean:0, name:null, level:0 }, position:{ set(){}, clone(){ return V(0,0,0); } }, rotation:{}, visible:true }; }
function stubRooms(){
  const kids = Array.from({length:12}, stubFigure);
  kids[7].userData.name = "Sam"; kids[8].userData.name = "Mia"; kids[5].userData.name = "Leo";
  W3.rooms.classroom = { scene:null, kids, teacher:stubFigure(), figures:[], spots:{ home:V(0,0,0), aisle:V(0,0,0), desk:V(0,0,0) }, views:{ back:null, desk:null, fly:null } };
  W3.rooms.lecture = { scene:null, lecturer:stubFigure(), gamer:stubFigure(), gossip:[stubFigure(), stubFigure()], others:[], donkey:stubFigure(),
    gameTex:null, screenTex:null, glow:{ intensity:0 }, figures:[], views:{ seat:null, seatSmall:null, fly:null } };
}
function setFlatScene(kind){
  const stage = document.getElementById("stage");
  if (!stage) return;
  // simple flat stand-ins in the room palette: warm heads for classmates, green for the speaker, a chalkboard
  const rows = (ys, sizes, xs) => ys.flatMap((y, i) => xs[i].map(x => [x, y, sizes[i], ""]));
  const bars = ys => ys.map(([y, h]) => ({ bar:true, y, h }));
  const layout = {
    classroom: {
      shapes: rows([46, 60, 78], [7, 9, 12], [[18, 38, 62, 82], [12, 34, 58, 84], [22, 50, 78]])
        .concat([[50, 26, 9, "ink"], [50, 14, 26, "board"]]),
      bars: bars([[52, 3], [67, 3.5], [87, 4]])
    },
    desk: {
      shapes: [[50, 40, 18, "ink"], [14, 56, 13, ""], [86, 56, 13, ""], [30, 30, 7, ""], [70, 28, 7, ""], [50, 12, 22, "board"]],
      bars: bars([[72, 8]])
    },
    intro: {
      shapes: [[62, 34, 8, ""], [78, 30, 6, ""], [92, 38, 7, ""], [70, 52, 11, ""], [86, 48, 9, ""], [58, 66, 13, ""], [76, 70, 12, ""], [93, 62, 10, ""], [66, 86, 15, ""], [88, 84, 14, ""]],
      bars: bars([[40, 2], [58, 2.5], [76, 3], [94, 3.5]])
    },
    lecture: {
      shapes: [[34, 26, 30, "board"], [56, 46, 7, "ink"], [22, 64, 11, ""], [38, 66, 11, ""], [70, 66, 11, ""], [86, 62, 8, "grey"]],
      bars: bars([[74, 3.5], [88, 5]])
    }
  }[kind] || { shapes:[], bars:[] };
  const shape = ([x, y, size, cls]) => cls === "board"
    ? `<i class="board" style="left:${x}%;top:${y}%;width:${size*2.4}vmin;height:${size*1.5}vmin"></i>`
    : `<i class="${cls}" style="left:${x}%;top:${y}%;width:${size}vmin;height:${size}vmin"></i>`;
  stage.innerHTML = `<div class="flat">${layout.bars.map(b => `<i class="deskbar" style="top:${b.y}%;height:${b.h}vmin"></i>`).join("")}${layout.shapes.map(shape).join("")}</div>`;
}

/* camera + render */
function setView(view, snap=false){ if (!W3.ok || !view) return; W3.camPos = view.pos.clone(); W3.camLook = view.look.clone(); W3.fovTarget = view.fov || 46; if (snap){ W3.curPos.copy(view.pos); W3.curLook.copy(view.look); W3.camera.fov = W3.fovTarget; W3.camera.updateProjectionMatrix(); } }
function ensureRoom(name){
  if (!W3.ok) return null;
  if (!W3.rooms[name]) {
    if (!W3.builders[name] || !W3.tex) return null;
    W3.rooms[name] = W3.builders[name]();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => (W3.texts || []).forEach(redrawTex));
  }
  return W3.rooms[name];
}
function setRoom(name){ if (!W3.ok) return; if (!ensureRoom(name)) return; W3.room = W3.rooms[name]; if (W3.renderPass) W3.renderPass.scene = W3.room.scene; }
function render3D(t){
  if (!W3.ok || !W3.room || W3.hold) return;
  const cam = W3.camera;
  const nowMs = performance.now(), dt = Math.min(0.25, (nowMs - (W3.lastMs || nowMs))/1000); W3.lastMs = nowMs;
  if (W3.free) {                    // stage 2: you sit at your desk and look around freely
    const F = W3.free;
    F.yaw += (F.tyaw - F.yaw)*(1 - Math.exp(-dt*8)); F.pitch += (F.tpitch - F.pitch)*(1 - Math.exp(-dt*8));
    const back = Math.max(0, -Math.cos(F.yaw));          // turned round: stand up and step into the aisle so the back of the room is in view
    if (!F.tp) F.tp = V(0,0,0);
    F.tp.copy(F.pos); if (F.backOff) F.tp.addScaledVector(F.backOff, back);
    W3.curPos.lerp(F.tp, 1 - Math.exp(-dt*4));
    const dir = V(Math.sin(F.yaw)*Math.cos(F.pitch), Math.sin(F.pitch), Math.cos(F.yaw)*Math.cos(F.pitch));
    W3.curLook.copy(W3.curPos).add(dir);
    cam.position.copy(W3.curPos); cam.lookAt(W3.curLook);
  } else {
  W3.curPos.lerp(W3.camPos, 1 - Math.exp(-dt*2.2)); W3.curLook.lerp(W3.camLook, 1 - Math.exp(-dt*3.0));
  const par = V(W3.mouse.x*0.45, -W3.mouse.y*0.25, 0);
  cam.position.set(W3.curPos.x + Math.sin(t*0.5)*0.012, W3.curPos.y + Math.sin(t*1.1)*0.01, W3.curPos.z);
  cam.lookAt(W3.curLook.x + par.x, W3.curLook.y + par.y, W3.curLook.z);
  }
  const fovT = W3.free ? 62 : W3.fovTarget;
  if (fovT && Math.abs(cam.fov - fovT) > 0.05) { cam.fov += (fovT - cam.fov)*(1 - Math.exp(-dt*2.2)); cam.updateProjectionMatrix(); }
  cam.updateMatrixWorld();
  for (const f of W3.room.figures) poseFigure(f, t);
  if (W3.composer) W3.composer.render(); else W3.renderer.render(W3.room.scene, cam);
}
/* free look + picking for stage 2 */
function startFreeLook(seat){
  if (!W3.ok || !seat) return;
  const d = V(0,0,0).copy(W3.curLook).sub(W3.curPos).normalize();
  W3.free = { pos:seat.pos.clone(), backOff:seat.backOff ? seat.backOff.clone() : null, yaw:Math.atan2(d.x, d.z), pitch:Math.asin(Math.max(-1, Math.min(1, d.y))), tyaw:seat.yaw, tpitch:seat.pitch };
  W3.fovTarget = 62;
}
function stopFreeLook(){ if (!W3.free) return; W3.camPos = W3.curPos.clone(); W3.camLook = W3.curLook.clone(); W3.free = null; setHover(null); }
function turnBy(dyaw, dpitch=0){ if (!W3.free) return; W3.free.tyaw += dyaw; W3.free.tpitch = Math.max(-1.15, Math.min(0.7, W3.free.tpitch + dpitch)); }
function pickProp(clientX, clientY){
  if (!W3.ok || !W3.room || !W3.room.props) return null;
  if (!W3.ray) W3.ray = new THREE.Raycaster();
  const ndc = new THREE.Vector2(clientX/innerWidth*2 - 1, -(clientY/innerHeight)*2 + 1);
  W3.ray.setFromCamera(ndc, W3.camera);
  const vis = W3.room.props.filter(p => p.visible);
  const hits = W3.ray.intersectObjects(vis, true);
  let low = null;                     // big invisible hitboxes (chair, door, window, classmates) lose to real objects behind them
  for (const h of hits) { let o = h.object; while (o && !(o.userData && o.userData.task)) o = o.parent; if (!o) continue; if (!o.userData.low) return o; if (!low) low = o; }
  return low;
}
function setHover(p){
  if (W3.hoverProp === p) return;
  if (W3.hoverBox) { W3.hoverBox.parent && W3.hoverBox.parent.remove(W3.hoverBox); W3.hoverBox.geometry.dispose(); W3.hoverBox = null; }
  W3.hoverProp = p;
  if (p && W3.room) { W3.hoverBox = new THREE.BoxHelper(p, 0xFFC35A); W3.hoverBox.material.depthTest = false; W3.hoverBox.renderOrder = 10; W3.room.scene.add(W3.hoverBox); }
}
function bumpProp(p){ if (!p) return; const s0 = p.scale.clone(), t0 = performance.now(); const f = () => { const k = (performance.now() - t0)/260; const b = k < 1 ? 1 + Math.sin(k*Math.PI)*0.18 : 1; p.scale.set(s0.x*b, s0.y*b, s0.z*b); if (k < 1) requestAnimationFrame(f); else p.scale.copy(s0); }; f(); }
function setScreen(title, sub){ W3.screenText = { title, sub }; if (W3.ok && W3.rooms.lecture) redrawTex(W3.rooms.lecture.screenTex); }
function project(v){ if (!W3.ok || !v) return null;
  const p = v.clone().project(W3.camera);
  if (p.z > 1 || p.z < -1) return null;
  return { x:(p.x+1)/2*innerWidth, y:(-p.y+1)/2*innerHeight };
}
