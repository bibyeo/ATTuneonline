(()=>{var Mh=0,Dl=1,Sh=2;var nr=1,wh=2,ms=3,pi=0,Jt=1,pn=2,zn=0,gs=1,Nl=2,Ul=3,Fl=4,Th=5;var Di=100,Eh=101,Ah=102,Ch=103,Rh=104,Ph=200,Ih=201,Lh=202,Dh=203,kl=204,Ol=205,Nh=206,Uh=207,Fh=208,kh=209,Oh=210,Bh=211,zh=212,Hh=213,Vh=214,Zr=0,Jr=1,Kr=2,ts=3,jr=4,Qr=5,ea=6,ta=7,Oa=0,Gh=1,Wh=2,Sn=0,Bl=1,zl=2,Hl=3,Vl=4,Gl=5,Wl=6,ql=7;var Xl=300,mi=301,Ni=302,Ba=303,za=304,ir=306,na=1e3,Dn=1001,ia=1002,Ot=1003,qh=1004;var sr=1005;var Ht=1006,Ha=1007;var gi=1008;var nn=1009,$l=1010,Yl=1011,ys=1012,Va=1013,wn=1014,Tn=1015,En=1016,Ga=1017,Wa=1018,_s=1020,Zl=35902,Jl=35899,Kl=1021,jl=1022,mn=1023,Nn=1026,yi=1027,Ql=1028,qa=1029,_i=1030,Xa=1031;var $a=1033,rr=33776,ar=33777,or=33778,lr=33779,Ya=35840,Za=35841,Ja=35842,Ka=35843,ja=36196,Qa=37492,eo=37496,to=37488,no=37489,cr=37490,io=37491,so=37808,ro=37809,ao=37810,oo=37811,lo=37812,co=37813,ho=37814,uo=37815,fo=37816,po=37817,mo=37818,go=37819,yo=37820,_o=37821,xo=36492,vo=36494,bo=36495,Mo=36283,So=36284,hr=36285,wo=36286;var Ns=2300,sa=2301,$r=2302,Tl=2303,El=2400,Al=2401,Cl=2402;var Xh=3200;var ur=0,$h=1,Jn="",Bt="srgb",Us="srgb-linear",Fs="linear",st="srgb";var Yr=7680;var Yh=519,Zh=512,Jh=513,Kh=514,To=515,jh=516,Qh=517,Eo=518,eu=519,tu=35044;var ec="300 es",bn=2e3,ns=2001;function ad(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function od(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nu(){let i=ks("canvas");return i.style.display="block",i}var Yc={},is=null;function tc(...i){let e="THREE."+i.shift();is?is("log",e,...i):console.log(e,...i)}function iu(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ne(...i){i=iu(i);let e="THREE."+i.shift();if(is)is("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Fe(...i){i=iu(i);let e="THREE."+i.shift();if(is)is("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ci(...i){let e=i.join(" ");e in Yc||(Yc[e]=!0,Ne(...i))}function su(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var ru={[Zr]:Jr,[Kr]:ea,[jr]:ta,[ts]:Qr,[Jr]:Zr,[ea]:Kr,[ta]:jr,[Qr]:ts},Un=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var jo=Math.PI/180,ra=180/Math.PI;function dr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function ld(i,e){return(i%e+e)%e}function Qo(i,e,t){return(1-t)*i+t*e}function Es(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function jt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var oc=class oc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};oc.prototype.isVector2=!0;var Te=oc,Fn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],u=n[s+3],h=r[a+0],f=r[a+1],p=r[a+2],y=r[a+3];if(u!==y||l!==h||c!==f||d!==p){let m=l*h+c*f+d*p+u*y;m<0&&(h=-h,f=-f,p=-p,y=-y,m=-m);let g=1-o;if(m<.9995){let w=Math.acos(m),T=Math.sin(w);g=Math.sin(g*w)/T,o=Math.sin(o*w)/T,l=l*g+h*o,c=c*g+f*o,d=d*g+p*o,u=u*g+y*o}else{l=l*g+h*o,c=c*g+f*o,d=d*g+p*o,u=u*g+y*o;let w=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=w,c*=w,d*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],u=r[a],h=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+d*u+l*f-c*h,e[t+1]=l*p+d*h+c*u-o*f,e[t+2]=c*p+d*f+o*h-l*u,e[t+3]=d*p-o*u-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),u=o(r/2),h=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=h*d*u+c*f*p,this._y=c*f*u-h*d*p,this._z=c*d*p+h*f*u,this._w=c*d*u-h*f*p;break;case"YXZ":this._x=h*d*u+c*f*p,this._y=c*f*u-h*d*p,this._z=c*d*p-h*f*u,this._w=c*d*u+h*f*p;break;case"ZXY":this._x=h*d*u-c*f*p,this._y=c*f*u+h*d*p,this._z=c*d*p+h*f*u,this._w=c*d*u-h*f*p;break;case"ZYX":this._x=h*d*u-c*f*p,this._y=c*f*u+h*d*p,this._z=c*d*p-h*f*u,this._w=c*d*u+h*f*p;break;case"YZX":this._x=h*d*u+c*f*p,this._y=c*f*u+h*d*p,this._z=c*d*p-h*f*u,this._w=c*d*u-h*f*p;break;case"XZY":this._x=h*d*u-c*f*p,this._y=c*f*u-h*d*p,this._z=c*d*p+h*f*u,this._w=c*d*u+h*f*p;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=n+o+u;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(d-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},lc=class lc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),d=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*d,this.y=n+l*d+o*c-r*u,this.z=s+l*u+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return el.copy(this).projectOnVector(e),this.sub(el)}reflect(e){return this.sub(el.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lc.prototype.isVector3=!0;var P=lc,el=new P,Zc=new Fn,cc=class cc{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],u=n[7],h=n[2],f=n[5],p=n[8],y=s[0],m=s[3],g=s[6],w=s[1],T=s[4],v=s[7],S=s[2],b=s[5],A=s[8];return r[0]=a*y+o*w+l*S,r[3]=a*m+o*T+l*b,r[6]=a*g+o*v+l*A,r[1]=c*y+d*w+u*S,r[4]=c*m+d*T+u*b,r[7]=c*g+d*v+u*A,r[2]=h*y+f*w+p*S,r[5]=h*m+f*T+p*b,r[8]=h*g+f*v+p*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=d*a-o*c,h=o*l-d*r,f=c*r-a*l,p=t*u+n*h+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return e[0]=u*y,e[1]=(s*c-d*n)*y,e[2]=(o*n-s*a)*y,e[3]=h*y,e[4]=(d*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ci("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(tl.makeScale(e,t)),this}rotate(e){return Ci("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(tl.makeRotation(-e)),this}translate(e,t){return Ci("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};cc.prototype.isMatrix3=!0;var Oe=cc,tl=new Oe,Jc=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kc=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cd(){let i={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===st&&(s.r=Zn(s.r),s.g=Zn(s.g),s.b=Zn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(s.r=es(s.r),s.g=es(s.g),s.b=es(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Jn?Fs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ci("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ci("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Us]:{primaries:e,whitePoint:n,transfer:Fs,toXYZ:Jc,fromXYZ:Kc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:n,transfer:st,toXYZ:Jc,fromXYZ:Kc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),i}var Ze=cd();function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Hi,aa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Hi===void 0&&(Hi=ks("canvas")),Hi.width=e.width,Hi.height=e.height;let s=Hi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Hi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=ks("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Zn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zn(t[n]/255)*255):t[n]=Zn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},hd=0,ss=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=dr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(nl(s[a].image)):r.push(nl(s[a]))}else r=nl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function nl(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?aa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}var ud=0,il=new P,Zt=class i extends Un{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Dn,s=Dn,r=Ht,a=gi,o=mn,l=nn,c=i.DEFAULT_ANISOTROPY,d=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=dr(),this.name="",this.source=new ss(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(il).x}get height(){return this.source.getSize(il).y}get depth(){return this.source.getSize(il).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case na:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case na:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Xl;Zt.DEFAULT_ANISOTROPY=1;var hc=class hc{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],p=l[9],y=l[2],m=l[6],g=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-y)<.01&&Math.abs(p-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+y)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,v=(f+1)/2,S=(g+1)/2,b=(d+h)/4,A=(u+y)/4,_=(p+m)/4;return T>v&&T>S?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=b/n,r=A/n):v>S?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=b/s,r=_/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=A/r,s=_/r),this.set(n,s,r,t),this}let w=Math.sqrt((m-p)*(m-p)+(u-y)*(u-y)+(h-d)*(h-d));return Math.abs(w)<.001&&(w=1),this.x=(m-p)/w,this.y=(u-y)/w,this.z=(h-d)/w,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hc.prototype.isVector4=!0;var xt=hc,oa=class extends Un{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Zt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ss(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends oa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Os=class extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var la=class extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ka=class ka{constructor(e,t,n,s,r,a,o,l,c,d,u,h,f,p,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,d,u,h,f,p,y,m)}set(e,t,n,s,r,a,o,l,c,d,u,h,f,p,y,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=d,g[10]=u,g[14]=h,g[3]=f,g[7]=p,g[11]=y,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ka().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Vi.setFromMatrixColumn(e,0).length(),r=1/Vi.setFromMatrixColumn(e,1).length(),a=1/Vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let h=a*d,f=a*u,p=o*d,y=o*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=h-y*c,t[9]=-o*l,t[2]=y-h*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*d,f=l*u,p=c*d,y=c*u;t[0]=h+y*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=f*o-p,t[6]=y+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*d,f=l*u,p=c*d,y=c*u;t[0]=h-y*o,t[4]=-a*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*d,t[9]=y-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*d,f=a*u,p=o*d,y=o*u;t[0]=l*d,t[4]=p*c-f,t[8]=h*c+y,t[1]=l*u,t[5]=y*c+h,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,f=a*c,p=o*l,y=o*c;t[0]=l*d,t[4]=y-h*u,t[8]=p*u+f,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=f*u+p,t[10]=h-y*u}else if(e.order==="XZY"){let h=a*l,f=a*c,p=o*l,y=o*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+y,t[5]=a*d,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*d,t[10]=y*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dd,e,fd)}lookAt(e,t,n){let s=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ti.crossVectors(n,rn),ti.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ti.crossVectors(n,rn)),ti.normalize(),Er.crossVectors(rn,ti),s[0]=ti.x,s[4]=Er.x,s[8]=rn.x,s[1]=ti.y,s[5]=Er.y,s[9]=rn.y,s[2]=ti.z,s[6]=Er.z,s[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],u=n[5],h=n[9],f=n[13],p=n[2],y=n[6],m=n[10],g=n[14],w=n[3],T=n[7],v=n[11],S=n[15],b=s[0],A=s[4],_=s[8],E=s[12],R=s[1],U=s[5],k=s[9],V=s[13],D=s[2],I=s[6],B=s[10],G=s[14],ee=s[3],X=s[7],K=s[11],se=s[15];return r[0]=a*b+o*R+l*D+c*ee,r[4]=a*A+o*U+l*I+c*X,r[8]=a*_+o*k+l*B+c*K,r[12]=a*E+o*V+l*G+c*se,r[1]=d*b+u*R+h*D+f*ee,r[5]=d*A+u*U+h*I+f*X,r[9]=d*_+u*k+h*B+f*K,r[13]=d*E+u*V+h*G+f*se,r[2]=p*b+y*R+m*D+g*ee,r[6]=p*A+y*U+m*I+g*X,r[10]=p*_+y*k+m*B+g*K,r[14]=p*E+y*V+m*G+g*se,r[3]=w*b+T*R+v*D+S*ee,r[7]=w*A+T*U+v*I+S*X,r[11]=w*_+T*k+v*B+S*K,r[15]=w*E+T*V+v*G+S*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],f=e[14],p=e[3],y=e[7],m=e[11],g=e[15],w=l*f-c*h,T=o*f-c*u,v=o*h-l*u,S=a*f-c*d,b=a*h-l*d,A=a*u-o*d;return t*(y*w-m*T+g*v)-n*(p*w-m*S+g*b)+s*(p*T-y*S+g*A)-r*(p*v-y*b+m*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-n*(r*d-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],f=e[11],p=e[12],y=e[13],m=e[14],g=e[15],w=t*o-n*a,T=t*l-s*a,v=t*c-r*a,S=n*l-s*o,b=n*c-r*o,A=s*c-r*l,_=d*y-u*p,E=d*m-h*p,R=d*g-f*p,U=u*m-h*y,k=u*g-f*y,V=h*g-f*m,D=w*V-T*k+v*U+S*R-b*E+A*_;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/D;return e[0]=(o*V-l*k+c*U)*I,e[1]=(s*k-n*V-r*U)*I,e[2]=(y*A-m*b+g*S)*I,e[3]=(h*b-u*A-f*S)*I,e[4]=(l*R-a*V-c*E)*I,e[5]=(t*V-s*R+r*E)*I,e[6]=(m*v-p*A-g*T)*I,e[7]=(d*A-h*v+f*T)*I,e[8]=(a*k-o*R+c*_)*I,e[9]=(n*R-t*k-r*_)*I,e[10]=(p*b-y*v+g*w)*I,e[11]=(u*v-d*b-f*w)*I,e[12]=(o*E-a*U-l*_)*I,e[13]=(t*U-n*E+s*_)*I,e[14]=(y*T-p*S-m*w)*I,e[15]=(d*S-u*T+h*w)*I,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,u=o+o,h=r*c,f=r*d,p=r*u,y=a*d,m=a*u,g=o*u,w=l*c,T=l*d,v=l*u,S=n.x,b=n.y,A=n.z;return s[0]=(1-(y+g))*S,s[1]=(f+v)*S,s[2]=(p-T)*S,s[3]=0,s[4]=(f-v)*b,s[5]=(1-(h+g))*b,s[6]=(m+w)*b,s[7]=0,s[8]=(p+T)*A,s[9]=(m-w)*A,s[10]=(1-(h+y))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Vi.set(s[0],s[1],s[2]).length(),o=Vi.set(s[4],s[5],s[6]).length(),l=Vi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),yn.copy(this);let c=1/a,d=1/o,u=1/l;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=d,yn.elements[5]*=d,yn.elements[6]*=d,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,t.setFromRotationMatrix(yn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=bn,l=!1){let c=this.elements,d=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),p,y;if(l)p=r/(a-r),y=a*r/(a-r);else if(o===bn)p=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===ns)p=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=bn,l=!1){let c=this.elements,d=2/(t-e),u=2/(n-s),h=-(t+e)/(t-e),f=-(n+s)/(n-s),p,y;if(l)p=1/(a-r),y=a/(a-r);else if(o===bn)p=-2/(a-r),y=-(a+r)/(a-r);else if(o===ns)p=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ka.prototype.isMatrix4=!0;var yt=ka,Vi=new P,yn=new yt,dd=new P(0,0,0),fd=new P(1,1,1),ti=new P,Er=new P,rn=new P,jc=new yt,Qc=new Fn,kn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],u=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qc.setFromEuler(this),this.setFromQuaternion(Qc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kn.DEFAULT_ORDER="XYZ";var Bs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},pd=0,eh=new P,Gi=new Fn,Wn=new yt,Ar=new P,As=new P,md=new P,gd=new Fn,th=new P(1,0,0),nh=new P(0,1,0),ih=new P(0,0,1),sh={type:"added"},yd={type:"removed"},Wi={type:"childadded",child:null},sl={type:"childremoved",child:null},Vt=class i extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new kn,n=new Fn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new yt},normalMatrix:{value:new Oe}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.premultiply(Gi),this}rotateX(e){return this.rotateOnAxis(th,e)}rotateY(e){return this.rotateOnAxis(nh,e)}rotateZ(e){return this.rotateOnAxis(ih,e)}translateOnAxis(e,t){return eh.copy(e).applyQuaternion(this.quaternion),this.position.add(eh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(th,e)}translateY(e){return this.translateOnAxis(nh,e)}translateZ(e){return this.translateOnAxis(ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ar.copy(e):Ar.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(As,Ar,this.up):Wn.lookAt(Ar,As,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),Gi.setFromRotationMatrix(Wn),this.quaternion.premultiply(Gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Fe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sh),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yd),sl.child=e,this.dispatchEvent(sl),sl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sh),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,e,md),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,gd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),u=a(e.shapes),h=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Vt.DEFAULT_UP=new P(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var lt=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},_d={type:"move"},rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),g=this._getHandJoint(c,y);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_d)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new lt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function rl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=ld(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=rl(a,r,e+1/3),this.g=rl(a,r,e),this.b=rl(a,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=Bt){function n(r){r!==void 0&&parseFloat(r)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){let n=au[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return Ze.workingToColorSpace(Xt.copy(this),e),Math.round($e(Xt.r*255,0,255))*65536+Math.round($e(Xt.g*255,0,255))*256+Math.round($e(Xt.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Xt.copy(this),t);let n=Xt.r,s=Xt.g,r=Xt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,d=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Bt){Ze.workingToColorSpace(Xt.copy(this),e);let t=Xt.r,n=Xt.g,s=Xt.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ni),this.setHSL(ni.h+e,ni.s+t,ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL(Cr);let n=Qo(ni.h,Cr.h,t),s=Qo(ni.s,Cr.s,t),r=Qo(ni.l,Cr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new Be;Be.NAMES=au;var zs=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Hs=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},_n=new P,qn=new P,al=new P,Xn=new P,qi=new P,Xi=new P,rh=new P,ol=new P,ll=new P,cl=new P,hl=new xt,ul=new xt,dl=new xt,ai=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),_n.subVectors(e,t),s.cross(_n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){_n.subVectors(s,t),qn.subVectors(n,t),al.subVectors(e,t);let a=_n.dot(_n),o=_n.dot(qn),l=_n.dot(al),c=qn.dot(qn),d=qn.dot(al),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let h=1/u,f=(c*l-o*d)*h,p=(a*d-o*l)*h;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(a,Xn.y),l.addScaledVector(o,Xn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return hl.setScalar(0),ul.setScalar(0),dl.setScalar(0),hl.fromBufferAttribute(e,t),ul.fromBufferAttribute(e,n),dl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(hl,r.x),a.addScaledVector(ul,r.y),a.addScaledVector(dl,r.z),a}static isFrontFacing(e,t,n,s){return _n.subVectors(n,t),qn.subVectors(e,t),_n.cross(qn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),_n.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;qi.subVectors(s,n),Xi.subVectors(r,n),ol.subVectors(e,n);let l=qi.dot(ol),c=Xi.dot(ol);if(l<=0&&c<=0)return t.copy(n);ll.subVectors(e,s);let d=qi.dot(ll),u=Xi.dot(ll);if(d>=0&&u<=d)return t.copy(s);let h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(qi,a);cl.subVectors(e,r);let f=qi.dot(cl),p=Xi.dot(cl);if(p>=0&&f<=p)return t.copy(r);let y=f*c-l*p;if(y<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Xi,o);let m=d*p-f*u;if(m<=0&&u-d>=0&&f-p>=0)return rh.subVectors(r,s),o=(u-d)/(u-d+(f-p)),t.copy(s).addScaledVector(rh,o);let g=1/(m+y+h);return a=y*g,o=h*g,t.copy(n).addScaledVector(qi,a).addScaledVector(Xi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},oi=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,xn):xn.fromBufferAttribute(r,a),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rr.copy(n.boundingBox)),Rr.applyMatrix4(e.matrixWorld),this.union(Rr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cs),Pr.subVectors(this.max,Cs),$i.subVectors(e.a,Cs),Yi.subVectors(e.b,Cs),Zi.subVectors(e.c,Cs),ii.subVectors(Yi,$i),si.subVectors(Zi,Yi),wi.subVectors($i,Zi);let t=[0,-ii.z,ii.y,0,-si.z,si.y,0,-wi.z,wi.y,ii.z,0,-ii.x,si.z,0,-si.x,wi.z,0,-wi.x,-ii.y,ii.x,0,-si.y,si.x,0,-wi.y,wi.x,0];return!fl(t,$i,Yi,Zi,Pr)||(t=[1,0,0,0,1,0,0,0,1],!fl(t,$i,Yi,Zi,Pr))?!1:(Ir.crossVectors(ii,si),t=[Ir.x,Ir.y,Ir.z],fl(t,$i,Yi,Zi,Pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},$n=[new P,new P,new P,new P,new P,new P,new P,new P],xn=new P,Rr=new oi,$i=new P,Yi=new P,Zi=new P,ii=new P,si=new P,wi=new P,Cs=new P,Pr=new P,Ir=new P,Ti=new P;function fl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ti.fromArray(i,r);let o=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),l=e.dot(Ti),c=t.dot(Ti),d=n.dot(Ti);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var Ct=new P,Lr=new Te,xd=0,Qt=class extends Un{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=tu,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Lr.fromBufferAttribute(this,t),Lr.applyMatrix3(e),this.setXY(t,Lr.x,Lr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Es(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Es(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Es(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Es(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Es(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),s=jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Vs=class extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Gs=class extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var tt=class extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}},vd=new oi,Rs=new P,pl=new P,Ri=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):vd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rs.subVectors(e,this.center);let t=Rs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Rs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rs.copy(e.center).add(pl)),this.expandByPoint(Rs.copy(e.center).sub(pl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},bd=0,dn=new yt,ml=new Vt,Ji=new P,an=new oi,Ps=new oi,kt=new P,Lt=class i extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=dr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ad(e)?Gs:Vs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Oe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return ml.lookAt(e),ml.updateMatrix(),this.applyMatrix4(ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new tt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ps.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(an.min,Ps.min),an.expandByPoint(kt),kt.addVectors(an.max,Ps.max),an.expandByPoint(kt)):(an.expandByPoint(Ps.min),an.expandByPoint(Ps.max))}an.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)kt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(kt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)kt.fromBufferAttribute(o,c),l&&(Ji.fromBufferAttribute(e,c),kt.add(Ji)),s=Math.max(s,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Qt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new P,l[_]=new P;let c=new P,d=new P,u=new P,h=new Te,f=new Te,p=new Te,y=new P,m=new P;function g(_,E,R){c.fromBufferAttribute(n,_),d.fromBufferAttribute(n,E),u.fromBufferAttribute(n,R),h.fromBufferAttribute(r,_),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,R),d.sub(c),u.sub(c),f.sub(h),p.sub(h);let U=1/(f.x*p.y-p.x*f.y);isFinite(U)&&(y.copy(d).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(U),m.copy(u).multiplyScalar(f.x).addScaledVector(d,-p.x).multiplyScalar(U),o[_].add(y),o[E].add(y),o[R].add(y),l[_].add(m),l[E].add(m),l[R].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let _=0,E=w.length;_<E;++_){let R=w[_],U=R.start,k=R.count;for(let V=U,D=U+k;V<D;V+=3)g(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let T=new P,v=new P,S=new P,b=new P;function A(_){S.fromBufferAttribute(s,_),b.copy(S);let E=o[_];T.copy(E),T.sub(S.multiplyScalar(S.dot(E))).normalize(),v.crossVectors(b,E);let U=v.dot(l[_])<0?-1:1;a.setXYZW(_,T.x,T.y,T.z,U)}for(let _=0,E=w.length;_<E;++_){let R=w[_],U=R.start,k=R.count;for(let V=U,D=U+k;V<D;V+=3)A(e.getX(V+0)),A(e.getX(V+1)),A(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,d=new P,u=new P;if(e)for(let h=0,f=e.count;h<f;h+=3){let p=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){let c=o.array,d=o.itemSize,u=o.normalized,h=new c.constructor(l.length*d),f=0,p=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*d;for(let g=0;g<d;g++)h[p++]=c[f++]}return new Qt(h,d,u)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let d=0,u=c.length;d<u;d++){let h=c[d],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){let f=c[u];d.push(f.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],u=r[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,d=a.length;c<d;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var gl=new P,Md=new P,Sd=new Oe,vn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=gl.subVectors(n,t).cross(Md.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(gl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Sd.getNormalMatrix(e),s=this.coplanarPoint(gl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},wd=0,On=class extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=dr(),this.name="",this.type="Material",this.blending=gs,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kl,this.blendDst=Ol,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new vn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Te().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Te().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Yn=new P,yl=new P,Dr=new P,Nr=new P,Ws=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){yl.copy(e).add(t).multiplyScalar(.5),Dr.copy(t).sub(e).normalize(),Nr.copy(this.origin).sub(yl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Dr),o=Nr.dot(this.direction),l=-Nr.dot(Dr),c=Nr.lengthSq(),d=Math.abs(1-a*a),u,h,f,p;if(d>0)if(u=a*l-o,h=a*o-l,p=r*d,u>=0)if(h>=-p)if(h<=p){let y=1/d;u*=y,h*=y,f=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=r,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;else h<=-p?(u=Math.max(0,-(-a*r+o)),h=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c):h<=p?(u=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(u=Math.max(0,-(a*r+o)),h=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c);else h=a>0?-r:r,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(yl).addScaledVector(Dr,h),f}intersectSphere(e,t){if(e.radius<0)return null;Yn.subVectors(e.center,this.origin);let n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,u=e.x-a.x,h=e.y-a.y,f=e.z-a.z,p=t.x-a.x,y=t.y-a.y,m=t.z-a.z,g=n.x-a.x,w=n.y-a.y,T=n.z-a.z,v=Math.abs(l),S=Math.abs(c),b=Math.abs(d),A,_,E,R,U,k,V,D,I,B,G,ee;if(v>=S&&v>=b?(E=l,k=u,I=p,ee=g,l>=0?(A=c,_=d,R=h,U=f,V=y,D=m,B=w,G=T):(A=d,_=c,R=f,U=h,V=m,D=y,B=T,G=w)):S>=b?(E=c,k=h,I=y,ee=w,c>=0?(A=d,_=l,R=f,U=u,V=m,D=p,B=T,G=g):(A=l,_=d,R=u,U=f,V=p,D=m,B=g,G=T)):(E=d,k=f,I=m,ee=T,d>=0?(A=l,_=c,R=u,U=h,V=p,D=y,B=g,G=w):(A=c,_=l,R=h,U=u,V=y,D=p,B=w,G=g)),E===0)return null;let X=A/E,K=_/E,se=1/E,De=R-X*k,Ce=U-K*k,ht=V-X*I,Ke=D-K*I,et=B-X*ee,Z=G-K*ee,te=et*Ke-Z*ht,ve=De*Z-Ce*et,ze=ht*Ce-Ke*De;if(s){if(te<0||ve<0||ze<0)return null}else if((te<0||ve<0||ze<0)&&(te>0||ve>0||ze>0))return null;let _e=te+ve+ze;if(_e===0)return null;let We=se*(te*k+ve*I+ze*ee);return(_e>0?We<0:We>0)?null:this.at(We/_e,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rt=class extends On{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=Oa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ah=new yt,Ei=new Ws,Ur=new Ri,oh=new P,Fr=new P,kr=new P,Or=new P,_l=new P,Br=new P,lh=new P,zr=new P,Je=class extends Vt{constructor(e=new Lt,t=new Rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=o[l],u=r[l];d!==0&&(_l.fromBufferAttribute(u,e),a?Br.addScaledVector(_l,d):Br.addScaledVector(_l.sub(t),d))}t.add(Br)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(r),Ei.copy(e.ray).recast(e.near),!(Ur.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Ur,oh)===null||Ei.origin.distanceToSquared(oh)>(e.far-e.near)**2))&&(ah.copy(r).invert(),Ei.copy(e.ray).applyMatrix4(ah),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,y=h.length;p<y;p++){let m=h[p],g=a[m.materialIndex],w=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=w,S=T;v<S;v+=3){let b=o.getX(v),A=o.getX(v+1),_=o.getX(v+2);s=Hr(this,g,e,n,c,d,u,b,A,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=p,g=y;m<g;m+=3){let w=o.getX(m),T=o.getX(m+1),v=o.getX(m+2);s=Hr(this,a,e,n,c,d,u,w,T,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,y=h.length;p<y;p++){let m=h[p],g=a[m.materialIndex],w=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=w,S=T;v<S;v+=3){let b=v,A=v+1,_=v+2;s=Hr(this,g,e,n,c,d,u,b,A,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=p,g=y;m<g;m+=3){let w=m,T=m+1,v=m+2;s=Hr(this,a,e,n,c,d,u,w,T,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Td(i,e,t,n,s,r,a,o){let l;if(e.side===Jt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===pi,o),l===null)return null;zr.copy(o),zr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(zr);return c<t.near||c>t.far?null:{distance:c,point:zr.clone(),object:i}}function Hr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Fr),i.getVertexPosition(l,kr),i.getVertexPosition(c,Or);let d=Td(i,e,t,n,Fr,kr,Or,lh);if(d){let u=new P;ai.getBarycoord(lh,Fr,kr,Or,u),s&&(d.uv=ai.getInterpolatedAttribute(s,o,l,c,u,new Te)),r&&(d.uv1=ai.getInterpolatedAttribute(r,o,l,c,u,new Te)),a&&(d.normal=ai.getInterpolatedAttribute(a,o,l,c,u,new P),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new P,materialIndex:0};ai.getNormal(Fr,kr,Or,h.normal),d.face=h,d.barycoord=u}return d}var ca=class extends Zt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ot,d=Ot,u,h){super(null,a,o,l,c,d,s,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ai=new Ri,Ed=new Te(.5,.5),Vr=new P,as=class{constructor(e=new vn,t=new vn,n=new vn,s=new vn,r=new vn,a=new vn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],u=r[5],h=r[6],f=r[7],p=r[8],y=r[9],m=r[10],g=r[11],w=r[12],T=r[13],v=r[14],S=r[15];if(s[0].setComponents(c-a,f-d,g-p,S-w).normalize(),s[1].setComponents(c+a,f+d,g+p,S+w).normalize(),s[2].setComponents(c+o,f+u,g+y,S+T).normalize(),s[3].setComponents(c-o,f-u,g-y,S-T).normalize(),n)s[4].setComponents(l,h,m,v).normalize(),s[5].setComponents(c-l,f-h,g-m,S-v).normalize();else if(s[4].setComponents(c-l,f-h,g-m,S-v).normalize(),t===bn)s[5].setComponents(c+l,f+h,g+m,S+v).normalize();else if(t===ns)s[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){Ai.center.set(0,0,0);let t=Ed.distanceTo(e.center);return Ai.radius=.7071067811865476+t,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Vr.x=s.normal.x>0?e.max.x:e.min.x,Vr.y=s.normal.y>0?e.max.y:e.min.y,Vr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Pi=class extends On{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ha=new P,ua=new P,ch=new yt,Is=new Ws,Gr=new Ri,xl=new P,hh=new P,da=class extends Vt{constructor(e=new Lt,t=new Pi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ha.fromBufferAttribute(t,s-1),ua.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ha.distanceTo(ua);e.setAttribute("lineDistance",new tt(n,1))}else Ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(s),Gr.radius+=r,e.ray.intersectsSphere(Gr)===!1)return;ch.copy(s).invert(),Is.copy(e.ray).applyMatrix4(ch);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let y=f,m=p-1;y<m;y+=c){let g=d.getX(y),w=d.getX(y+1),T=Wr(this,e,Is,l,g,w,y);T&&t.push(T)}if(this.isLineLoop){let y=d.getX(p-1),m=d.getX(f),g=Wr(this,e,Is,l,y,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let y=f,m=p-1;y<m;y+=c){let g=Wr(this,e,Is,l,y,y+1,y);g&&t.push(g)}if(this.isLineLoop){let y=Wr(this,e,Is,l,p-1,f,p-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Wr(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(ha.fromBufferAttribute(o,s),ua.fromBufferAttribute(o,r),t.distanceSqToSegment(ha,ua,xl,hh)>n)return;xl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(xl);if(!(c<e.near||c>e.far))return{distance:c,point:hh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var uh=new P,dh=new P,os=class extends da{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)uh.fromBufferAttribute(t,s),dh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+uh.distanceTo(dh);e.setAttribute("lineDistance",new tt(n,1))}else Ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var qs=class extends Zt{constructor(e=[],t=mi,n,s,r,a,o,l,c,d){super(e,t,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ls=class extends Zt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var li=class extends Zt{constructor(e,t,n=wn,s,r,a,o=Ot,l=Ot,c,d=Nn,u=1){if(d!==Nn&&d!==yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:u};super(h,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ss(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},fa=class extends li{constructor(e,t=wn,n=mi,s,r,a=Ot,o=Ot,l,c=Nn){let d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Xs=class extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ci=class i extends Lt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],d=[],u=[],h=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(u,2));function p(y,m,g,w,T,v,S,b,A,_,E){let R=v/A,U=S/_,k=v/2,V=S/2,D=b/2,I=A+1,B=_+1,G=0,ee=0,X=new P;for(let K=0;K<B;K++){let se=K*U-V;for(let De=0;De<I;De++){let Ce=De*R-k;X[y]=Ce*w,X[m]=se*T,X[g]=D,c.push(X.x,X.y,X.z),X[y]=0,X[m]=0,X[g]=b>0?1:-1,d.push(X.x,X.y,X.z),u.push(De/A),u.push(1-K/_),G+=1}}for(let K=0;K<_;K++)for(let se=0;se<A;se++){let De=h+se+I*K,Ce=h+se+I*(K+1),ht=h+(se+1)+I*(K+1),Ke=h+(se+1)+I*K;l.push(De,Ce,Ke),l.push(Ce,ht,Ke),ee+=6}o.addGroup(f,ee,E),f+=ee,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Mn=class i extends Lt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],u=[],h=[],f=[],p=0,y=[],m=n/2,g=0;w(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(d),this.setAttribute("position",new tt(u,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(f,2));function w(){let v=new P,S=new P,b=0,A=(t-e)/n;for(let _=0;_<=r;_++){let E=[],R=_/r,U=R*(t-e)+e;for(let k=0;k<=s;k++){let V=k/s,D=V*l+o,I=Math.sin(D),B=Math.cos(D);S.x=U*I,S.y=-R*n+m,S.z=U*B,u.push(S.x,S.y,S.z),v.set(I,A,B).normalize(),h.push(v.x,v.y,v.z),f.push(V,1-R),E.push(p++)}y.push(E)}for(let _=0;_<s;_++)for(let E=0;E<r;E++){let R=y[E][_],U=y[E+1][_],k=y[E+1][_+1],V=y[E][_+1];(e>0||E!==0)&&(d.push(R,U,V),b+=3),(t>0||E!==r-1)&&(d.push(U,k,V),b+=3)}c.addGroup(g,b,0),g+=b}function T(v){let S=p,b=new Te,A=new P,_=0,E=v===!0?e:t,R=v===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*R,0),h.push(0,R,0),f.push(.5,.5),p++;let U=p;for(let k=0;k<=s;k++){let D=k/s*l+o,I=Math.cos(D),B=Math.sin(D);A.x=E*B,A.y=m*R,A.z=E*I,u.push(A.x,A.y,A.z),h.push(0,R,0),b.x=I*.5+.5,b.y=B*.5*R+.5,f.push(b.x,b.y),p++}for(let k=0;k<s;k++){let V=S+k,D=U+k;v===!0?d.push(D,D+1,V):d.push(D+1,D,V),_+=3}c.addGroup(g,_,v===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},cs=class i extends Mn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},pa=class i extends Lt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),d(),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(r.slice(),3)),this.setAttribute("uv",new tt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(w){let T=new P,v=new P,S=new P;for(let b=0;b<t.length;b+=3)f(t[b+0],T),f(t[b+1],v),f(t[b+2],S),l(T,v,S,w)}function l(w,T,v,S){let b=S+1,A=[];for(let _=0;_<=b;_++){A[_]=[];let E=w.clone().lerp(v,_/b),R=T.clone().lerp(v,_/b),U=b-_;for(let k=0;k<=U;k++)k===0&&_===b?A[_][k]=E:A[_][k]=E.clone().lerp(R,k/U)}for(let _=0;_<b;_++)for(let E=0;E<2*(b-_)-1;E++){let R=Math.floor(E/2);E%2===0?(h(A[_][R+1]),h(A[_+1][R]),h(A[_][R])):(h(A[_][R+1]),h(A[_+1][R+1]),h(A[_+1][R]))}}function c(w){let T=new P;for(let v=0;v<r.length;v+=3)T.x=r[v+0],T.y=r[v+1],T.z=r[v+2],T.normalize().multiplyScalar(w),r[v+0]=T.x,r[v+1]=T.y,r[v+2]=T.z}function d(){let w=new P;for(let T=0;T<r.length;T+=3){w.x=r[T+0],w.y=r[T+1],w.z=r[T+2];let v=m(w)/2/Math.PI+.5,S=g(w)/Math.PI+.5;a.push(v,1-S)}p(),u()}function u(){for(let w=0;w<a.length;w+=6){let T=a[w+0],v=a[w+2],S=a[w+4],b=Math.max(T,v,S),A=Math.min(T,v,S);b>.9&&A<.1&&(T<.2&&(a[w+0]+=1),v<.2&&(a[w+2]+=1),S<.2&&(a[w+4]+=1))}}function h(w){r.push(w.x,w.y,w.z)}function f(w,T){let v=w*3;T.x=e[v+0],T.y=e[v+1],T.z=e[v+2]}function p(){let w=new P,T=new P,v=new P,S=new P,b=new Te,A=new Te,_=new Te;for(let E=0,R=0;E<r.length;E+=9,R+=6){w.set(r[E+0],r[E+1],r[E+2]),T.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),b.set(a[R+0],a[R+1]),A.set(a[R+2],a[R+3]),_.set(a[R+4],a[R+5]),S.copy(w).add(T).add(v).divideScalar(3);let U=m(S);y(b,R+0,w,U),y(A,R+2,T,U),y(_,R+4,v,U)}}function y(w,T,v,S){S<0&&w.x===1&&(a[T]=w.x-1),v.x===0&&v.z===0&&(a[T]=S/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function g(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ne("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let d=n[s],h=n[s+1]-d,f=(a-d)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Te:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,s=[],r=[],a=[],o=new P,l=new yt;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,d=Math.abs(s[0].x),u=Math.abs(s[0].y),h=Math.abs(s[0].z);d<=c&&(c=d,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos($e(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos($e(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},$s=class extends fn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Te){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*d-f*u+this.aX,c=h*u+f*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ma=class extends $s{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function nc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,d,u){let h=(a-r)/c-(o-r)/(c+d)+(o-a)/d,f=(o-a)/d-(l-a)/(d+u)+(l-o)/u;h*=d,f*=d,s(a,o,h,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var fh=new P,ph=new P,vl=new nc,bl=new nc,Ml=new nc,Ii=class extends fn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,d;this.closed||o>0?c=s[(o-1)%r]:(ph.subVectors(s[0],s[1]).add(s[0]),c=ph);let u=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(fh.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=fh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(d),f);y<1e-4&&(y=1),p<1e-4&&(p=y),m<1e-4&&(m=y),vl.initNonuniformCatmullRom(c.x,u.x,h.x,d.x,p,y,m),bl.initNonuniformCatmullRom(c.y,u.y,h.y,d.y,p,y,m),Ml.initNonuniformCatmullRom(c.z,u.z,h.z,d.z,p,y,m)}else this.curveType==="catmullrom"&&(vl.initCatmullRom(c.x,u.x,h.x,d.x,this.tension),bl.initCatmullRom(c.y,u.y,h.y,d.y,this.tension),Ml.initCatmullRom(c.z,u.z,h.z,d.z,this.tension));return n.set(vl.calc(l),bl.calc(l),Ml.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function mh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Ad(i,e){let t=1-i;return t*t*e}function Cd(i,e){return 2*(1-i)*i*e}function Rd(i,e){return i*i*e}function Ls(i,e,t,n){return Ad(i,e)+Cd(i,t)+Rd(i,n)}function Pd(i,e){let t=1-i;return t*t*t*e}function Id(i,e){let t=1-i;return 3*t*t*i*e}function Ld(i,e){return 3*(1-i)*i*i*e}function Dd(i,e){return i*i*i*e}function Ds(i,e,t,n,s){return Pd(i,e)+Id(i,t)+Ld(i,n)+Dd(i,s)}var ga=class extends fn{constructor(e=new Te,t=new Te,n=new Te,s=new Te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Te){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ds(e,s.x,r.x,a.x,o.x),Ds(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ya=class extends fn{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ds(e,s.x,r.x,a.x,o.x),Ds(e,s.y,r.y,a.y,o.y),Ds(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_a=class extends fn{constructor(e=new Te,t=new Te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Te){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xa=class extends fn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},va=class extends fn{constructor(e=new Te,t=new Te,n=new Te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Te){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ls(e,s.x,r.x,a.x),Ls(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ys=class extends fn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ls(e,s.x,r.x,a.x),Ls(e,s.y,r.y,a.y),Ls(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ba=class extends fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Te){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],d=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(mh(o,l.x,c.x,d.x,u.x),mh(o,l.y,c.y,d.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Te().fromArray(s))}return this}},Nd=Object.freeze({__proto__:null,ArcCurve:ma,CatmullRomCurve3:Ii,CubicBezierCurve:ga,CubicBezierCurve3:ya,EllipseCurve:$s,LineCurve:_a,LineCurve3:xa,QuadraticBezierCurve:va,QuadraticBezierCurve3:Ys,SplineCurve:ba});var Li=class i extends pa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Bn=class i extends Lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,u=e/o,h=t/l,f=[],p=[],y=[],m=[];for(let g=0;g<d;g++){let w=g*h-a;for(let T=0;T<c;T++){let v=T*u-r;p.push(v,-w,0),y.push(0,0,1),m.push(T/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let w=0;w<o;w++){let T=w+c*g,v=w+c*(g+1),S=w+1+c*(g+1),b=w+1+c*g;f.push(T,v,b),f.push(v,S,b)}this.setIndex(f),this.setAttribute("position",new tt(p,3)),this.setAttribute("normal",new tt(y,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},hs=class i extends Lt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],d=[],u=e,h=(t-e)/s,f=new P,p=new Te;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let g=r+m/n*a;f.x=u*Math.cos(g),f.y=u*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,d.push(p.x,p.y)}u+=h}for(let y=0;y<s;y++){let m=y*(n+1);for(let g=0;g<n;g++){let w=g+m,T=w,v=w+n+1,S=w+n+2,b=w+1;o.push(T,v,b),o.push(v,S,b)}}this.setIndex(o),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Zs=class i extends Lt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],d=[],u=[],h=new P,f=new P,p=new P;for(let y=0;y<=n;y++){let m=a+y/n*o;for(let g=0;g<=s;g++){let w=g/s*r;f.x=(e+t*Math.cos(m))*Math.cos(w),f.y=(e+t*Math.cos(m))*Math.sin(w),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),h.x=e*Math.cos(w),h.y=e*Math.sin(w),p.subVectors(f,h).normalize(),d.push(p.x,p.y,p.z),u.push(g/s),u.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let g=(s+1)*y+m-1,w=(s+1)*(y-1)+m-1,T=(s+1)*(y-1)+m,v=(s+1)*y+m;l.push(g,w,v),l.push(w,T,v)}this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Js=class i extends Lt{constructor(e=new Ys(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new Te,d=new P,u=[],h=[],f=[],p=[];y(),this.setIndex(p),this.setAttribute("position",new tt(u,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(f,2));function y(){for(let T=0;T<t;T++)m(T);m(r===!1?t:0),w(),g()}function m(T){d=e.getPointAt(T/t,d);let v=a.normals[T],S=a.binormals[T];for(let b=0;b<=s;b++){let A=b/s*Math.PI*2,_=Math.sin(A),E=-Math.cos(A);l.x=E*v.x+_*S.x,l.y=E*v.y+_*S.y,l.z=E*v.z+_*S.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=d.x+n*l.x,o.y=d.y+n*l.y,o.z=d.z+n*l.z,u.push(o.x,o.y,o.z)}}function g(){for(let T=1;T<=t;T++)for(let v=1;v<=s;v++){let S=(s+1)*(T-1)+(v-1),b=(s+1)*T+(v-1),A=(s+1)*T+v,_=(s+1)*(T-1)+v;p.push(S,b,_),p.push(b,A,_)}}function w(){for(let T=0;T<=t;T++)for(let v=0;v<=s;v++)c.x=T/t,c.y=v/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Nd[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Ui(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(gh(s))s.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(gh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function $t(i){let e={};for(let t=0;t<i.length;t++){let n=Ui(i[t]);for(let s in n)e[s]=n[s]}return e}function gh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ud(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ic(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var ou={clone:Ui,merge:$t},Fd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,on=class extends On{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fd,this.fragmentShader=kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ui(e.uniforms),this.uniformsGroups=Ud(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Be().setHex(s.value);break;case"v2":this.uniforms[n].value=new Te().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new xt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Oe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new yt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ma=class extends on{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},hi=class extends On{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ur,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var tn=class extends On{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ur,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=Oa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Sa=class extends On{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},wa=class extends On{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ki(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Sl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ui=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ta=class extends ui{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:El,endingEnd:El}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Al:r=e,o=2*t-n;break;case Cl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Al:a=e,l=2*n-t;break;case Cl:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),y=p*p,m=y*p,g=-h*m+2*h*y-h*p,w=(1+h)*m+(-1.5-2*h)*y+(-.5+h)*p+1,T=(-1-f)*m+(1.5+f)*y+.5*p,v=f*m-f*y;for(let S=0;S!==o;++S)r[S]=g*a[d+S]+w*a[c+S]+T*a[l+S]+v*a[u+S];return r}},Ea=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(n-t)/(s-t),u=1-d;for(let h=0;h!==o;++h)r[h]=a[c+h]*u+a[l+h]*d;return r}},Aa=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ca=class extends ui{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this.inTangents,u=this.outTangents;if(!d||!u){let p=(n-t)/(s-t),y=1-p;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*p;return r}let h=o*2,f=e-1;for(let p=0;p!==o;++p){let y=a[c+p],m=a[l+p],g=f*h+p*2,w=u[g],T=u[g+1],v=e*h+p*2,S=d[v],b=d[v+1],A=Bd(n,t,w,S,s);r[p]=lu(A,y,T,b,m)}return r}};function lu(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Od(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Bd(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=lu(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Od(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var ln=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ki(t,this.TimeBufferType),this.values=Ki(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ki(e.times,Array),values:Ki(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Sl(e.settings)&&(n.settings={inTangents:Ki(e.settings.inTangents,Array),outTangents:Ki(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Aa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ea(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ta(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ca(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ns:t=this.InterpolantFactoryMethodDiscrete;break;case sa:t=this.InterpolantFactoryMethodLinear;break;case $r:t=this.InterpolantFactoryMethodSmooth;break;case Tl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ne("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ns;case this.InterpolantFactoryMethodLinear:return sa;case this.InterpolantFactoryMethodSmooth:return $r;case this.InterpolantFactoryMethodBezier:return Tl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Sl(this.settings)&&(yh(this.settings.inTangents,e),yh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Fe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Fe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Fe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Fe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&od(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Fe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===$r,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,h=u-n,f=u+n;for(let p=0;p!==n;++p){let y=t[u+p];if(y!==t[h+p]||y!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Sl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function yh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}ln.prototype.ValueTypeName="";ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=sa;var di=class extends ln{constructor(e,t,n){super(e,t,n)}};di.prototype.ValueTypeName="bool";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=Ns;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends ln{constructor(e,t,n,s){super(e,t,n,s)}};Ra.prototype.ValueTypeName="color";var Pa=class extends ln{constructor(e,t,n,s){super(e,t,n,s)}};Pa.prototype.ValueTypeName="number";var Ia=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let d=c+o;c!==d;c+=4)Fn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ks=class extends ln{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ia(this.times,this.values,this.getValueSize(),e)}};Ks.prototype.ValueTypeName="quaternion";Ks.prototype.InterpolantFactoryMethodSmooth=void 0;var fi=class extends ln{constructor(e,t,n){super(e,t,n)}};fi.prototype.ValueTypeName="string";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=Ns;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var La=class extends ln{constructor(e,t,n,s){super(e,t,n,s)}};La.prototype.ValueTypeName="vector";var Da=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){let u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=c.length;u<h;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(d))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},cu=new Da,Na=class{constructor(e){this.manager=e!==void 0?e:cu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Na.DEFAULT_MATERIAL_NAME="__DEFAULT";var us=class extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},js=class extends us{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},wl=new yt,_h=new P,xh=new P,Qs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new as,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;_h.setFromMatrixPosition(e.matrixWorld),t.position.copy(_h),xh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){wl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(wl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ns||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(wl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},qr=new P,Xr=new Fn,Ln=new P,er=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(qr,Xr,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qr,Xr,Ln.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(qr,Xr,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qr,Xr,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ri=new P,vh=new Te,bh=new Te,zt=class extends er{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ra*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(jo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ra*2*Math.atan(Math.tan(jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ri.x,ri.y).multiplyScalar(-e/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-e/ri.z)}getViewSize(e,t){return this.getViewBounds(e,vh,bh),t.subVectors(bh,vh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(jo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Rl=class extends Qs{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0}},ds=class extends us{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Rl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},fs=class extends er{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Pl=class extends Qs{constructor(){super(new fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ps=class extends us{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new Pl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ji=-90,Qi=1,Ua=class extends Vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new zt(ji,Qi,e,t);s.layers=this.layers,this.add(s);let r=new zt(ji,Qi,e,t);r.layers=this.layers,this.add(r);let a=new zt(ji,Qi,e,t);a.layers=this.layers,this.add(a);let o=new zt(ji,Qi,e,t);o.layers=this.layers,this.add(o);let l=new zt(ji,Qi,e,t);l.layers=this.layers,this.add(l);let c=new zt(ji,Qi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Fa=class extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var sc="\\[\\]\\.:\\/",zd=new RegExp("["+sc+"]","g"),rc="[^"+sc+"]",Hd="[^"+sc.replace("\\.","")+"]",Vd=/((?:WC+[\/:])*)/.source.replace("WC",rc),Gd=/(WCOD+)?/.source.replace("WCOD",Hd),Wd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rc),qd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rc),Xd=new RegExp("^"+Vd+Gd+Wd+qd+"$"),$d=["material","materials","bones","map"],Il=class{constructor(e,t,n){let s=n||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},gt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zd,"")}static parseTrackName(e){let t=Xd.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);$d.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Fe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Fe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Fe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Fe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Fe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Fe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gt.Composite=Il;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Sy=new Float32Array(1);var uc=class uc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};uc.prototype.isMatrix2=!0;var Ll=uc;var tr=class extends os{constructor(e=10,t=10,n=4473924,s=8947848){n=new Be(n),s=new Be(s);let r=t/2,a=e/t,o=e/2,l=[],c=[];for(let h=0,f=0,p=-o;h<=t;h++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);let y=h===r?n:s;y.toArray(c,f),f+=3,y.toArray(c,f),f+=3,y.toArray(c,f),f+=3,y.toArray(c,f),f+=3}let d=new Lt;d.setAttribute("position",new tt(l,3)),d.setAttribute("color",new tt(c,3));let u=new Pi({vertexColors:!0,toneMapped:!1});super(d,u),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function ac(i,e,t,n){let s=Yd(n);switch(t){case Kl:return i*e;case Ql:return i*e/s.components*s.byteLength;case qa:return i*e/s.components*s.byteLength;case _i:return i*e*2/s.components*s.byteLength;case Xa:return i*e*2/s.components*s.byteLength;case jl:return i*e*3/s.components*s.byteLength;case mn:return i*e*4/s.components*s.byteLength;case $a:return i*e*4/s.components*s.byteLength;case rr:case ar:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case or:case lr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Za:case Ka:return Math.max(i,16)*Math.max(e,8)/4;case Ya:case Ja:return Math.max(i,8)*Math.max(e,8)/2;case ja:case Qa:case to:case no:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case eo:case cr:case io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case so:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ro:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ao:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case oo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case lo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case co:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ho:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case uo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case fo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case po:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case mo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case go:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case yo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case _o:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case xo:case vo:case bo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Mo:case So:return Math.ceil(i/4)*Math.ceil(e/4)*8;case hr:case wo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Yd(i){switch(i){case nn:case $l:return{byteLength:1,components:1};case ys:case Yl:case En:return{byteLength:2,components:1};case Ga:case Wa:return{byteLength:2,components:4};case wn:case Va:case Tn:return{byteLength:4,components:1};case Zl:case Jl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Iu(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Jd(i){let e=new WeakMap;function t(o,l){let c=o.array,d=o.usage,u=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let d=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,d);else{u.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<u.length;f++){let p=u[h],y=u[f];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++h,u[h]=y)}u.length=h+1;for(let f=0,p=u.length;f<p;f++){let y=u[f];i.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ef=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,af=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,of=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,df=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_f=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,bf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,wf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ef=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Af=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,If=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Lf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Df=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Uf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ff=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Of=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Wf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$f=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ep=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,tp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,np=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ip=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ap=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,up=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,bp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ep=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ap=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Cp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ip=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Np=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$p=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,am=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,om=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,um=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ym=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_m=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Am=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Im=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:Kd,alphahash_pars_fragment:jd,alphamap_fragment:Qd,alphamap_pars_fragment:ef,alphatest_fragment:tf,alphatest_pars_fragment:nf,aomap_fragment:sf,aomap_pars_fragment:rf,batching_pars_vertex:af,batching_vertex:of,begin_vertex:lf,beginnormal_vertex:cf,bsdfs:hf,iridescence_fragment:uf,bumpmap_pars_fragment:df,clipping_planes_fragment:ff,clipping_planes_pars_fragment:pf,clipping_planes_pars_vertex:mf,clipping_planes_vertex:gf,color_fragment:yf,color_pars_fragment:_f,color_pars_vertex:xf,color_vertex:vf,common:bf,cube_uv_reflection_fragment:Mf,defaultnormal_vertex:Sf,displacementmap_pars_vertex:wf,displacementmap_vertex:Tf,emissivemap_fragment:Ef,emissivemap_pars_fragment:Af,colorspace_fragment:Cf,colorspace_pars_fragment:Rf,envmap_fragment:Pf,envmap_common_pars_fragment:If,envmap_pars_fragment:Lf,envmap_pars_vertex:Df,envmap_physical_pars_fragment:Wf,envmap_vertex:Nf,fog_vertex:Uf,fog_pars_vertex:Ff,fog_fragment:kf,fog_pars_fragment:Of,gradientmap_pars_fragment:Bf,lightmap_pars_fragment:zf,lights_lambert_fragment:Hf,lights_lambert_pars_fragment:Vf,lights_pars_begin:Gf,lights_toon_fragment:qf,lights_toon_pars_fragment:Xf,lights_phong_fragment:$f,lights_phong_pars_fragment:Yf,lights_physical_fragment:Zf,lights_physical_pars_fragment:Jf,lights_fragment_begin:Kf,lights_fragment_maps:jf,lights_fragment_end:Qf,lightprobes_pars_fragment:ep,logdepthbuf_fragment:tp,logdepthbuf_pars_fragment:np,logdepthbuf_pars_vertex:ip,logdepthbuf_vertex:sp,map_fragment:rp,map_pars_fragment:ap,map_particle_fragment:op,map_particle_pars_fragment:lp,metalnessmap_fragment:cp,metalnessmap_pars_fragment:hp,morphinstance_vertex:up,morphcolor_vertex:dp,morphnormal_vertex:fp,morphtarget_pars_vertex:pp,morphtarget_vertex:mp,normal_fragment_begin:gp,normal_fragment_maps:yp,normal_pars_fragment:_p,normal_pars_vertex:xp,normal_vertex:vp,normalmap_pars_fragment:bp,clearcoat_normal_fragment_begin:Mp,clearcoat_normal_fragment_maps:Sp,clearcoat_pars_fragment:wp,iridescence_pars_fragment:Tp,opaque_fragment:Ep,packing:Ap,premultiplied_alpha_fragment:Cp,project_vertex:Rp,dithering_fragment:Pp,dithering_pars_fragment:Ip,roughnessmap_fragment:Lp,roughnessmap_pars_fragment:Dp,shadowmap_pars_fragment:Np,shadowmap_pars_vertex:Up,shadowmap_vertex:Fp,shadowmask_pars_fragment:kp,skinbase_vertex:Op,skinning_pars_vertex:Bp,skinning_vertex:zp,skinnormal_vertex:Hp,specularmap_fragment:Vp,specularmap_pars_fragment:Gp,tonemapping_fragment:Wp,tonemapping_pars_fragment:qp,transmission_fragment:Xp,transmission_pars_fragment:$p,uv_pars_fragment:Yp,uv_pars_vertex:Zp,uv_vertex:Jp,worldpos_vertex:Kp,background_vert:jp,background_frag:Qp,backgroundCube_vert:em,backgroundCube_frag:tm,cube_vert:nm,cube_frag:im,depth_vert:sm,depth_frag:rm,distance_vert:am,distance_frag:om,equirect_vert:lm,equirect_frag:cm,linedashed_vert:hm,linedashed_frag:um,meshbasic_vert:dm,meshbasic_frag:fm,meshlambert_vert:pm,meshlambert_frag:mm,meshmatcap_vert:gm,meshmatcap_frag:ym,meshnormal_vert:_m,meshnormal_frag:xm,meshphong_vert:vm,meshphong_frag:bm,meshphysical_vert:Mm,meshphysical_frag:Sm,meshtoon_vert:wm,meshtoon_frag:Tm,points_vert:Em,points_frag:Am,shadow_vert:Cm,shadow_frag:Rm,sprite_vert:Pm,sprite_frag:Im},fe={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Vn={basic:{uniforms:$t([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:$t([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:$t([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:$t([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:$t([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:$t([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:$t([fe.points,fe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:$t([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:$t([fe.common,fe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:$t([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:$t([fe.sprite,fe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:$t([fe.common,fe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:$t([fe.lights,fe.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Vn.physical={uniforms:$t([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var Ao={r:0,b:0,g:0},Lm=new yt,Lu=new Oe;Lu.set(-1,0,0,0,1,0,0,0,1);function Dm(i,e,t,n,s,r){let a=new Be(0),o=s===!0?0:1,l,c,d=null,u=0,h=null;function f(w){let T=w.isScene===!0?w.background:null;if(T&&T.isTexture){let v=w.backgroundBlurriness>0;T=e.get(T,v)}return T}function p(w){let T=!1,v=f(w);v===null?m(a,o):v&&v.isColor&&(m(v,1),T=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(w,T){let v=f(T);v&&(v.isCubeTexture||v.mapping===ir)?(c===void 0&&(c=new Je(new ci(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:Ui(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Lm.makeRotationFromEuler(T.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Lu),c.material.toneMapped=Ze.getTransfer(v.colorSpace)!==st,(d!==v||u!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,h=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Je(new Bn(2,2),new on({name:"BackgroundMaterial",uniforms:Ui(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(v.colorSpace)!==st,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=v,u=v.version,h=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,T){w.getRGB(Ao,ic(i)),t.buffers.color.setClear(Ao.r,Ao.g,Ao.b,T,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,T=1){a.set(w),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,m(a,o)},render:p,addToRenderList:y,dispose:g}}function Nm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(U,k,V,D,I){let B=!1,G=u(U,D,V,k);r!==G&&(r=G,c(r.object)),B=f(U,D,V,I),B&&p(U,D,V,I),I!==null&&e.update(I,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,v(U,k,V,D),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function d(U){return i.deleteVertexArray(U)}function u(U,k,V,D){let I=D.wireframe===!0,B=n[k.id];B===void 0&&(B={},n[k.id]=B);let G=U.isInstancedMesh===!0?U.id:0,ee=B[G];ee===void 0&&(ee={},B[G]=ee);let X=ee[V.id];X===void 0&&(X={},ee[V.id]=X);let K=X[I];return K===void 0&&(K=h(l()),X[I]=K),K}function h(U){let k=[],V=[],D=[];for(let I=0;I<t;I++)k[I]=0,V[I]=0,D[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:V,attributeDivisors:D,object:U,attributes:{},index:null}}function f(U,k,V,D){let I=r.attributes,B=k.attributes,G=0,ee=V.getAttributes();for(let X in ee)if(ee[X].location>=0){let se=I[X],De=B[X];if(De===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(De=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(De=U.instanceColor)),se===void 0||se.attribute!==De||De&&se.data!==De.data)return!0;G++}return r.attributesNum!==G||r.index!==D}function p(U,k,V,D){let I={},B=k.attributes,G=0,ee=V.getAttributes();for(let X in ee)if(ee[X].location>=0){let se=B[X];se===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(se=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(se=U.instanceColor));let De={};De.attribute=se,se&&se.data&&(De.data=se.data),I[X]=De,G++}r.attributes=I,r.attributesNum=G,r.index=D}function y(){let U=r.newAttributes;for(let k=0,V=U.length;k<V;k++)U[k]=0}function m(U){g(U,0)}function g(U,k){let V=r.newAttributes,D=r.enabledAttributes,I=r.attributeDivisors;V[U]=1,D[U]===0&&(i.enableVertexAttribArray(U),D[U]=1),I[U]!==k&&(i.vertexAttribDivisor(U,k),I[U]=k)}function w(){let U=r.newAttributes,k=r.enabledAttributes;for(let V=0,D=k.length;V<D;V++)k[V]!==U[V]&&(i.disableVertexAttribArray(V),k[V]=0)}function T(U,k,V,D,I,B,G){G===!0?i.vertexAttribIPointer(U,k,V,I,B):i.vertexAttribPointer(U,k,V,D,I,B)}function v(U,k,V,D){y();let I=D.attributes,B=V.getAttributes(),G=k.defaultAttributeValues;for(let ee in B){let X=B[ee];if(X.location>=0){let K=I[ee];if(K===void 0&&(ee==="instanceMatrix"&&U.instanceMatrix&&(K=U.instanceMatrix),ee==="instanceColor"&&U.instanceColor&&(K=U.instanceColor)),K!==void 0){let se=K.normalized,De=K.itemSize,Ce=e.get(K);if(Ce===void 0)continue;let ht=Ce.buffer,Ke=Ce.type,et=Ce.bytesPerElement,Z=Ke===i.INT||Ke===i.UNSIGNED_INT||K.gpuType===Va;if(K.isInterleavedBufferAttribute){let te=K.data,ve=te.stride,ze=K.offset;if(te.isInstancedInterleavedBuffer){for(let _e=0;_e<X.locationSize;_e++)g(X.location+_e,te.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let _e=0;_e<X.locationSize;_e++)m(X.location+_e);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let _e=0;_e<X.locationSize;_e++)T(X.location+_e,De/X.locationSize,Ke,se,ve*et,(ze+De/X.locationSize*_e)*et,Z)}else{if(K.isInstancedBufferAttribute){for(let te=0;te<X.locationSize;te++)g(X.location+te,K.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let te=0;te<X.locationSize;te++)m(X.location+te);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let te=0;te<X.locationSize;te++)T(X.location+te,De/X.locationSize,Ke,se,De*et,De/X.locationSize*te*et,Z)}}else if(G!==void 0){let se=G[ee];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(X.location,se);break;case 3:i.vertexAttrib3fv(X.location,se);break;case 4:i.vertexAttrib4fv(X.location,se);break;default:i.vertexAttrib1fv(X.location,se)}}}}w()}function S(){E();for(let U in n){let k=n[U];for(let V in k){let D=k[V];for(let I in D){let B=D[I];for(let G in B)d(B[G].object),delete B[G];delete D[I]}}delete n[U]}}function b(U){if(n[U.id]===void 0)return;let k=n[U.id];for(let V in k){let D=k[V];for(let I in D){let B=D[I];for(let G in B)d(B[G].object),delete B[G];delete D[I]}}delete n[U.id]}function A(U){for(let k in n){let V=n[k];for(let D in V){let I=V[D];if(I[U.id]===void 0)continue;let B=I[U.id];for(let G in B)d(B[G].object),delete B[G];delete I[U.id]}}}function _(U){for(let k in n){let V=n[k],D=U.isInstancedMesh===!0?U.id:0,I=V[D];if(I!==void 0){for(let B in I){let G=I[B];for(let ee in G)d(G[ee].object),delete G[ee];delete I[B]}delete V[D],Object.keys(V).length===0&&delete n[k]}}}function E(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:w}}function Um(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let h=0;for(let f=0;f<d;f++)h+=c[f];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Fm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==mn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let _=A===En&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==nn&&A!==Tn&&!_&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(Ne("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:w,maxVaryings:T,maxFragmentUniforms:v,maxSamples:S,samples:b}}function km(i){let e=this,t=null,n=0,s=!1,r=!1,a=new vn,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let f=u.length!==0||h||n!==0||s;return s=h,n=u.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){let p=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?d(null):c();else{let w=r?0:n,T=w*4,v=g.clippingState||null;l.value=v,v=d(p,h,T,f);for(let S=0;S!==T;++S)v[S]=t[S];g.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,f,p){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,p!==!0||m===null){let g=f+y*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<g)&&(m=new Float32Array(g));for(let T=0,v=f;T!==y;++T,v+=4)a.copy(u[T]).applyMatrix4(w,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var vs=4,Om=6,Bm=20,zm=256,fr=new fs,hu=new Be,dc=null,fc=0,pc=0,mc=!1,Hm=new P,Fi=new P,Ro=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Hm}=r;dc=this._renderer.getRenderTarget(),fc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=du(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(dc,fc,pc),this._renderer.xr.enabled=mc,e.scissorTest=!1,xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mi||e.mapping===Ni?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dc=this._renderer.getRenderTarget(),fc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:En,format:mn,colorSpace:Us,depthBuffer:!1},s=uu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uu(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Vm(r)),this._blurMaterial=Wm(r,e,t),this._ggxMaterial=Gm(r,e,t)}return s}_compileMaterial(e){let t=new Je(new Lt,e);this._renderer.compile(t,fr)}_sceneToCubeUV(e,t,n,s,r){let l=new zt(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(hu),u.toneMapping=Sn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Je(new ci,new Rt({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,g=!1,w=e.background;w?w.isColor&&(m.color.copy(w),e.background=null,g=!0):(m.color.copy(hu),g=!0);for(let T=0;T<6;T++){let v=T%3;v===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[T],r.y,r.z)):v===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[T]));let S=this._cubeSize;xs(s,v*S,T>2?S:0,S,S),u.setRenderTarget(s),g&&u.render(y,l),u.render(e,l)}u.toneMapping=f,u.autoClear=h,e.background=w}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===mi||e.mapping===Ni;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=du());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;xs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,fr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-d*d),h=c*1.25,f=u*h,{_lodMax:p}=this,y=this._sizeLods[n],m=3*y*(n>p-vs?n-p+vs:0),g=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,xs(r,m,g,3*y,2*y),s.setRenderTarget(r),s.render(o,fr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,xs(e,m,g,3*y,2*y),s.setRenderTarget(e),s.render(o,fr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],u=3*d*(s>this._lodMax-vs?s-this._lodMax+vs:0),h=4*(this._cubeSize-d);xs(t,u,h,3*d,2*d),a.setRenderTarget(t),a.render(l,fr)}};function Vm(i){let e=[],t=[],n=i,s=i-vs+1+Om;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,h=6,f=3,p=new Float32Array(f*h*u),y=new Float32Array(f*h*u);for(let g=0;g<u;g++){let w=g%3*2/3-1,T=g>2?0:-1,v=[w,T,0,w+2/3,T,0,w+2/3,T+1,0,w,T,0,w+2/3,T+1,0,w,T+1,0];p.set(v,f*h*g);for(let S=0;S<h;S++){let b=d[S*2]*2-1,A=d[S*2+1]*2-1;g===0?Fi.set(1,A,b):g===1?Fi.set(-b,1,-A):g===2?Fi.set(-b,A,1):g===3?Fi.set(-1,A,-b):g===4?Fi.set(-b,-1,A):Fi.set(b,A,-1),Fi.toArray(y,(g*h+S)*f)}}let m=new Lt;m.setAttribute("position",new Qt(p,f)),m.setAttribute("outputDirection",new Qt(y,f)),t.push(new Je(m,null)),n>vs&&n--}return{lodMeshes:t,sizeLods:e}}function uu(i,e,t){let n=new en(i,e,t);return n.texture.mapping=ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Gm(i,e,t){return new on({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Wm(i,e,t){return new on({name:"SphericalGaussianBlur",defines:{SAMPLES:Bm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Lo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function du(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function fu(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Lo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Po=class extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new qs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ci(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:zn});r.uniforms.tEquirect.value=t;let a=new Je(s,r),o=t.minFilter;return t.minFilter===gi&&(t.minFilter=Ht),new Ua(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function qm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===Ba||f===za)if(e.has(h)){let p=e.get(h).texture;return o(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let y=new Po(p.height);return y.fromEquirectangularTexture(i,h),e.set(h,y),h.addEventListener("dispose",c),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,p=f===Ba||f===za,y=f===mi||f===Ni;if(p||y){let m=t.get(h),g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new Ro(i)),m=p?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let w=h.image;return p&&w&&w.height>0||y&&w&&l(w)?(n===null&&(n=new Ro(i)),m=p?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",d),m.texture):null}}}return h}function o(h,f){return f===Ba?h.mapping=mi:f===za&&(h.mapping=Ni),h}function l(h){let f=0,p=6;for(let y=0;y<p;y++)h[y]!==void 0&&f++;return f===p}function c(h){let f=h.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(h){let f=h.target;f.removeEventListener("dispose",d);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Xm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ci("WebGLRenderer: "+n+" extension not supported."),s}}}function $m(i,e,t,n){let s={},r=new WeakMap;function a(u){let h=u.target;h.index!==null&&e.remove(h.index);for(let p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(u){let h=u.attributes;for(let f in h)e.update(h[f],i.ARRAY_BUFFER)}function c(u){let h=[],f=u.index,p=u.attributes.position,y=0;if(p===void 0)return;if(f!==null){let w=f.array;y=f.version;for(let T=0,v=w.length;T<v;T+=3){let S=w[T+0],b=w[T+1],A=w[T+2];h.push(S,b,b,A,A,S)}}else{let w=p.array;y=p.version;for(let T=0,v=w.length/3-1;T<v;T+=3){let S=T+0,b=T+1,A=T+2;h.push(S,b,b,A,A,S)}}let m=new(p.count>=65535?Gs:Vs)(h,1);m.version=y;let g=r.get(u);g&&e.remove(g),r.set(u,m)}function d(u){let h=r.get(u);if(h){let f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function Ym(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,h){i.drawElements(n,h,r,u*a),t.update(h,n,1)}function c(u,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,u*a,f),t.update(h,n,f))}function d(u,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,u,0,f);let y=0;for(let m=0;m<f;m++)y+=h[m];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function Zm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Fe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Jm(i,e,t){let n=new WeakMap,s=new xt;function r(a,o,l){let c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0,h=n.get(o);if(h===void 0||h.count!==u){let E=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],T=0;f===!0&&(T=1),p===!0&&(T=2),y===!0&&(T=3);let v=o.attributes.position.count*T,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let b=new Float32Array(v*S*4*u),A=new Os(b,v,S,u);A.type=Tn,A.needsUpdate=!0;let _=T*4;for(let R=0;R<u;R++){let U=m[R],k=g[R],V=w[R],D=v*S*4*R;for(let I=0;I<U.count;I++){let B=I*_;f===!0&&(s.fromBufferAttribute(U,I),b[D+B+0]=s.x,b[D+B+1]=s.y,b[D+B+2]=s.z,b[D+B+3]=0),p===!0&&(s.fromBufferAttribute(k,I),b[D+B+4]=s.x,b[D+B+5]=s.y,b[D+B+6]=s.z,b[D+B+7]=0),y===!0&&(s.fromBufferAttribute(V,I),b[D+B+8]=s.x,b[D+B+9]=s.y,b[D+B+10]=s.z,b[D+B+11]=V.itemSize===4?s.w:1)}}h={count:u,texture:A,size:new Te(v,S)},n.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Km(i,e,t,n,s){let r=new WeakMap;function a(c){let d=s.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==d&&(e.update(h),r.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return h}function o(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}var jm={[Bl]:"LINEAR_TONE_MAPPING",[zl]:"REINHARD_TONE_MAPPING",[Hl]:"CINEON_TONE_MAPPING",[Vl]:"ACES_FILMIC_TONE_MAPPING",[Wl]:"AGX_TONE_MAPPING",[ql]:"NEUTRAL_TONE_MAPPING",[Gl]:"CUSTOM_TONE_MAPPING"};function Qm(i,e,t,n,s,r){let a=new en(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Lt;c.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new tt([0,2,0,0,2,0],2));let d=new Ma({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Je(c,d),h=new fs(-1,1,1,-1,0,1),f=null,p=null,y=!1,m,g=null,w=[],T=!1;this.setSize=function(v,S){a.setSize(v,S),o!==null&&o.setSize(v,S),l!==null&&l.setSize(v,S);for(let b=0;b<w.length;b++){let A=w[b];A.setSize&&A.setSize(v,S)}},this.setEffects=function(v){w=v,T=w.length>0&&w[0].isRenderPass===!0;let S=a.width,b=a.height;w.length>0&&o===null&&(o=new en(S,b,{type:En,depthBuffer:!1,stencilBuffer:!1}),l=new en(S,b,{type:En,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<w.length;A++){let _=w[A];_.setSize&&_.setSize(S,b)}},this.begin=function(v,S){if(y||v.toneMapping===Sn&&w.length===0)return!1;if(g=S,S!==null){let b=S.width,A=S.height;(a.width!==b||a.height!==A)&&this.setSize(b,A)}return T===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=Sn,!0},this.hasRenderPass=function(){return T},this.end=function(v,S){v.toneMapping=m,y=!0;let b=a,A=o;for(let _=0;_<w.length;_++){let E=w[_];E.enabled!==!1&&(E.render(v,A,b,S),E.needsSwap!==!1&&(b=A,A=A===o?l:o))}if(f!==v.outputColorSpace||p!==v.toneMapping){f=v.outputColorSpace,p=v.toneMapping,d.defines={},Ze.getTransfer(f)===st&&(d.defines.SRGB_TRANSFER="");let _=jm[p];_&&(d.defines[_]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(g),v.render(u,h),g=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}var Du=new Zt,_c=new li(1,1),Nu=new Os,Uu=new la,Fu=new qs,pu=[],mu=[],gu=new Float32Array(16),yu=new Float32Array(9),_u=new Float32Array(4);function Ms(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=pu[s];if(r===void 0&&(r=new Float32Array(s),pu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Nt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Do(i,e){let t=mu[e];t===void 0&&(t=new Int32Array(e),mu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function e0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function t0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2fv(this.addr,e),Nt(t,e)}}function n0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;i.uniform3fv(this.addr,e),Nt(t,e)}}function i0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4fv(this.addr,e),Nt(t,e)}}function s0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;_u.set(n),i.uniformMatrix2fv(this.addr,!1,_u),Nt(t,n)}}function r0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;yu.set(n),i.uniformMatrix3fv(this.addr,!1,yu),Nt(t,n)}}function a0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;gu.set(n),i.uniformMatrix4fv(this.addr,!1,gu),Nt(t,n)}}function o0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function l0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2iv(this.addr,e),Nt(t,e)}}function c0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3iv(this.addr,e),Nt(t,e)}}function h0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4iv(this.addr,e),Nt(t,e)}}function u0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function d0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2uiv(this.addr,e),Nt(t,e)}}function f0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3uiv(this.addr,e),Nt(t,e)}}function p0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4uiv(this.addr,e),Nt(t,e)}}function m0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_c.compareFunction=t.isReversedDepthBuffer()?Eo:To,r=_c):r=Du,t.setTexture2D(e||r,s)}function g0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Uu,s)}function y0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Fu,s)}function _0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Nu,s)}function x0(i){switch(i){case 5126:return e0;case 35664:return t0;case 35665:return n0;case 35666:return i0;case 35674:return s0;case 35675:return r0;case 35676:return a0;case 5124:case 35670:return o0;case 35667:case 35671:return l0;case 35668:case 35672:return c0;case 35669:case 35673:return h0;case 5125:return u0;case 36294:return d0;case 36295:return f0;case 36296:return p0;case 35678:case 36198:case 36298:case 36306:case 35682:return m0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return y0;case 36289:case 36303:case 36311:case 36292:return _0}}function v0(i,e){i.uniform1fv(this.addr,e)}function b0(i,e){let t=Ms(e,this.size,2);i.uniform2fv(this.addr,t)}function M0(i,e){let t=Ms(e,this.size,3);i.uniform3fv(this.addr,t)}function S0(i,e){let t=Ms(e,this.size,4);i.uniform4fv(this.addr,t)}function w0(i,e){let t=Ms(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function T0(i,e){let t=Ms(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function E0(i,e){let t=Ms(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function A0(i,e){i.uniform1iv(this.addr,e)}function C0(i,e){i.uniform2iv(this.addr,e)}function R0(i,e){i.uniform3iv(this.addr,e)}function P0(i,e){i.uniform4iv(this.addr,e)}function I0(i,e){i.uniform1uiv(this.addr,e)}function L0(i,e){i.uniform2uiv(this.addr,e)}function D0(i,e){i.uniform3uiv(this.addr,e)}function N0(i,e){i.uniform4uiv(this.addr,e)}function U0(i,e,t){let n=this.cache,s=e.length,r=Do(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=_c:a=Du;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function F0(i,e,t){let n=this.cache,s=e.length,r=Do(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Uu,r[a])}function k0(i,e,t){let n=this.cache,s=e.length,r=Do(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Fu,r[a])}function O0(i,e,t){let n=this.cache,s=e.length,r=Do(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Nu,r[a])}function B0(i){switch(i){case 5126:return v0;case 35664:return b0;case 35665:return M0;case 35666:return S0;case 35674:return w0;case 35675:return T0;case 35676:return E0;case 5124:case 35670:return A0;case 35667:case 35671:return C0;case 35668:case 35672:return R0;case 35669:case 35673:return P0;case 5125:return I0;case 36294:return L0;case 36295:return D0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return U0;case 35679:case 36299:case 36307:return F0;case 35680:case 36300:case 36308:case 36293:return k0;case 36289:case 36303:case 36311:case 36292:return O0}}var xc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=x0(t.type)}},vc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=B0(t.type)}},bc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},gc=/(\w+)(\])?(\[|\.)?/g;function xu(i,e){i.seq.push(e),i.map[e.id]=e}function z0(i,e,t){let n=i.name,s=n.length;for(gc.lastIndex=0;;){let r=gc.exec(n),a=gc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){xu(t,c===void 0?new xc(o,i,e):new vc(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new bc(o),xu(t,u)),t=u}}}var bs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);z0(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function vu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var H0=37297,V0=0;function G0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var bu=new Oe;function W0(i){Ze._getMatrix(bu,Ze.workingColorSpace,i);let e=`mat3( ${bu.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case Fs:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Mu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+G0(i.getShaderSource(e),o)}else return r}function q0(i,e){let t=W0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var X0={[Bl]:"Linear",[zl]:"Reinhard",[Hl]:"Cineon",[Vl]:"ACESFilmic",[Wl]:"AgX",[ql]:"Neutral",[Gl]:"Custom"};function $0(i,e){let t=X0[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Co=new P;function Y0(){Ze.getLuminanceCoefficients(Co);let i=Co.x.toFixed(4),e=Co.y.toFixed(4),t=Co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function J0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function K0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function mr(i){return i!==""}function Su(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var j0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mc(i){return i.replace(j0,eg)}var Q0=new Map;function eg(i,e){let t=Ge[e];if(t===void 0){let n=Q0.get(e);if(n!==void 0)t=Ge[n],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Mc(t)}var tg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tu(i){return i.replace(tg,ng)}function ng(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Eu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var ig={[nr]:"SHADOWMAP_TYPE_PCF",[ms]:"SHADOWMAP_TYPE_VSM"};function sg(i){return ig[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var rg={[mi]:"ENVMAP_TYPE_CUBE",[Ni]:"ENVMAP_TYPE_CUBE",[ir]:"ENVMAP_TYPE_CUBE_UV"};function ag(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":rg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var og={[Ni]:"ENVMAP_MODE_REFRACTION"};function lg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":og[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var cg={[Oa]:"ENVMAP_BLENDING_MULTIPLY",[Gh]:"ENVMAP_BLENDING_MIX",[Wh]:"ENVMAP_BLENDING_ADD"};function hg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":cg[i.combine]||"ENVMAP_BLENDING_NONE"}function ug(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function dg(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=sg(t),c=ag(t),d=lg(t),u=hg(t),h=ug(t),f=Z0(t),p=J0(r),y=s.createProgram(),m,g,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(mr).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(mr).join(`
`),g.length>0&&(g+=`
`)):(m=[Eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),g=[Eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Sn?$0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,q0("linearToOutputTexel",t.outputColorSpace),Y0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),a=Mc(a),a=Su(a,t),a=wu(a,t),o=Mc(o),o=Su(o,t),o=wu(o,t),a=Tu(a),o=Tu(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let T=w+m+a,v=w+g+o,S=vu(s,s.VERTEX_SHADER,T),b=vu(s,s.FRAGMENT_SHADER,v);s.attachShader(y,S),s.attachShader(y,b),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function A(U){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(y)||"",V=s.getShaderInfoLog(S)||"",D=s.getShaderInfoLog(b)||"",I=k.trim(),B=V.trim(),G=D.trim(),ee=!0,X=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,S,b);else{let K=Mu(s,S,"vertex"),se=Mu(s,b,"fragment");Fe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+I+`
`+K+`
`+se)}else I!==""?Ne("WebGLProgram: Program Info Log:",I):(B===""||G==="")&&(X=!1);X&&(U.diagnostics={runnable:ee,programLog:I,vertexShader:{log:B,prefix:m},fragmentShader:{log:G,prefix:g}})}s.deleteShader(S),s.deleteShader(b),_=new bs(s,y),E=K0(s,y)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(y,H0)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=V0++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=b,this}var fg=0,Sc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wc(e),t.set(e,n)),n}},wc=class{constructor(e){this.id=fg++,this.code=e,this.usedTimes=0}};function pg(i){return i===_i||i===cr||i===hr}function mg(i,e,t,n,s,r){let a=new Bs,o=new Sc,l=new Set,c=[],d=new Map,u=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,E,R,U,k,V){let D=U.fog,I=k.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?U.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ee=e.get(_.envMap||B,G),X=ee&&ee.mapping===ir?ee.image.height:null,K=f[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&Ne("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let se=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,De=se!==void 0?se.length:0,Ce=0;I.morphAttributes.position!==void 0&&(Ce=1),I.morphAttributes.normal!==void 0&&(Ce=2),I.morphAttributes.color!==void 0&&(Ce=3);let ht,Ke,et,Z;if(K){let dt=Vn[K];ht=dt.vertexShader,Ke=dt.fragmentShader}else{ht=_.vertexShader,Ke=_.fragmentShader;let dt=o.getVertexShaderStage(_),nt=o.getFragmentShaderStage(_);o.update(_,dt,nt),et=dt.id,Z=nt.id}let te=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),ze=k.isInstancedMesh===!0,_e=k.isBatchedMesh===!0,We=!!_.map,It=!!_.matcap,qe=!!ee,Qe=!!_.aoMap,ut=!!_.lightMap,Ye=!!_.bumpMap&&_.wireframe===!1,_t=!!_.normalMap,Ft=!!_.displacementMap,Kt=!!_.emissiveMap,Mt=!!_.metalnessMap,Et=!!_.roughnessMap,F=_.anisotropy>0,Gt=_.clearcoat>0,rt=_.dispersion>0,C=_.retroreflectivity>0,x=_.iridescence>0,O=_.sheen>0,W=_.transmission>0,$=F&&!!_.anisotropyMap,ae=Gt&&!!_.clearcoatMap,oe=Gt&&!!_.clearcoatNormalMap,J=Gt&&!!_.clearcoatRoughnessMap,Q=x&&!!_.iridescenceMap,le=x&&!!_.iridescenceThicknessMap,Ee=O&&!!_.sheenColorMap,de=O&&!!_.sheenRoughnessMap,ce=!!_.specularMap,Ae=!!_.specularColorMap,Ue=!!_.specularIntensityMap,He=W&&!!_.transmissionMap,N=W&&!!_.thicknessMap,he=!!_.gradientMap,j=!!_.alphaMap,ue=_.alphaTest>0,ge=!!_.alphaHash,ie=!!_.extensions,Re=Sn;_.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Re=i.toneMapping);let Se={shaderID:K,shaderType:_.type,shaderName:_.name,vertexShader:ht,fragmentShader:Ke,defines:_.defines,customVertexShaderID:et,customFragmentShaderID:Z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:_e,batchingColor:_e&&k._colorsTexture!==null,instancing:ze,instancingColor:ze&&k.instanceColor!==null,instancingMorph:ze&&k.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:We,matcap:It,envMap:qe,envMapMode:qe&&ee.mapping,envMapCubeUVHeight:X,aoMap:Qe,lightMap:ut,bumpMap:Ye,normalMap:_t,displacementMap:Ft,emissiveMap:Kt,normalMapObjectSpace:_t&&_.normalMapType===$h,normalMapTangentSpace:_t&&_.normalMapType===ur,packedNormalMap:_t&&_.normalMapType===ur&&pg(_.normalMap.format),metalnessMap:Mt,roughnessMap:Et,anisotropy:F,anisotropyMap:$,clearcoat:Gt,clearcoatMap:ae,clearcoatNormalMap:oe,clearcoatRoughnessMap:J,dispersion:rt,retroreflection:C,iridescence:x,iridescenceMap:Q,iridescenceThicknessMap:le,sheen:O,sheenColorMap:Ee,sheenRoughnessMap:de,specularMap:ce,specularColorMap:Ae,specularIntensityMap:Ue,transmission:W,transmissionMap:He,thicknessMap:N,gradientMap:he,opaque:_.transparent===!1&&_.blending===gs&&_.alphaToCoverage===!1,alphaMap:j,alphaTest:ue,alphaHash:ge,combine:_.combine,mapUv:We&&p(_.map.channel),aoMapUv:Qe&&p(_.aoMap.channel),lightMapUv:ut&&p(_.lightMap.channel),bumpMapUv:Ye&&p(_.bumpMap.channel),normalMapUv:_t&&p(_.normalMap.channel),displacementMapUv:Ft&&p(_.displacementMap.channel),emissiveMapUv:Kt&&p(_.emissiveMap.channel),metalnessMapUv:Mt&&p(_.metalnessMap.channel),roughnessMapUv:Et&&p(_.roughnessMap.channel),anisotropyMapUv:$&&p(_.anisotropyMap.channel),clearcoatMapUv:ae&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:oe&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:le&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:de&&p(_.sheenRoughnessMap.channel),specularMapUv:ce&&p(_.specularMap.channel),specularColorMapUv:Ae&&p(_.specularColorMap.channel),specularIntensityMapUv:Ue&&p(_.specularIntensityMap.channel),transmissionMapUv:He&&p(_.transmissionMap.channel),thicknessMapUv:N&&p(_.thicknessMap.channel),alphaMapUv:j&&p(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(_t||F),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!I.attributes.uv&&(We||j),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&_t===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ve,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:Ce,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Re,decodeVideoTexture:We&&_.map.isVideoTexture===!0&&Ze.getTransfer(_.map.colorSpace)===st,decodeVideoTextureEmissive:Kt&&_.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(_.emissiveMap.colorSpace)===st,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===pn,flipSided:_.side===Jt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ie&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&_.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se}function m(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)E.push(R),E.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(g(E,_),w(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function g(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function w(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function T(_){let E=f[_.type],R;if(E){let U=Vn[E];R=ou.clone(U.uniforms)}else R=_.uniforms;return R}function v(_,E){let R=d.get(E);return R!==void 0?++R.usedTimes:(R=new dg(i,E,_,s),c.push(R),d.set(E,R)),R}function S(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),d.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function A(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:T,acquireProgram:v,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:A}}function gg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function yg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Au(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Cu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,p,y,m,g){let w=i[e];return w===void 0?(w={id:h.id,object:h,geometry:f,material:p,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:g},i[e]=w):(w.id=h.id,w.object=h,w.geometry=f,w.material=p,w.materialVariant=a(h),w.groupOrder=y,w.renderOrder=h.renderOrder,w.z=m,w.group=g),e++,w}function l(h,f,p,y,m,g,w){w.reversedDepth===!0&&(m=-m);let T=o(h,f,p,y,m,g);p.transmission>0?n.push(T):p.transparent===!0?s.push(T):t.push(T)}function c(h,f,p,y,m,g){let w=o(h,f,p,y,m,g);p.transmission>0?n.unshift(w):p.transparent===!0?s.unshift(w):t.unshift(w)}function d(h,f){t.length>1&&t.sort(h||yg),n.length>1&&n.sort(f||Au),s.length>1&&s.sort(f||Au)}function u(){for(let h=e,f=i.length;h<f;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:d}}function _g(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Cu,i.set(n,[a])):s>=r.length?(a=new Cu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function xg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new Be};break;case"SpotLight":t={position:new P,direction:new P,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function vg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var bg=0;function Mg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Sg(i){let e=new xg,t=vg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new yt,a=new yt;function o(c){let d=0,u=0,h=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let f=0,p=0,y=0,m=0,g=0,w=0,T=0,v=0,S=0,b=0,A=0,_=0,E=0,R=0;c.sort(Mg);for(let k=0,V=c.length;k<V;k++){let D=c[k],I=D.color,B=D.intensity,G=D.distance,ee=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===_i?ee=D.shadow.map.texture:ee=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)d+=I.r*B,u+=I.g*B,h+=I.b*B;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],B);R++}else if(D.isSunLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let K=D.shadow,se=t.get(D);se.shadowIntensity=K.intensity,se.shadowBias=K.bias,se.shadowNormalBias=K.normalBias,se.shadowRadius=K.radius,se.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[p]=se,n.sunShadowMap[p]=ee;let De=K.getViewportCount();for(let Ce=0;Ce<De;Ce++)n.sunShadowMatrix[y+Ce]=K.getMatrix(Ce),n.sunShadowCascade[y+Ce]=K._cascadeData[Ce];y+=De,p++}n.sun[f]=X,f++}else if(D.isDirectionalLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let K=D.shadow,se=t.get(D);se.shadowIntensity=K.intensity,se.shadowBias=K.bias,se.shadowNormalBias=K.normalBias,se.shadowRadius=K.radius,se.shadowMapSize=K.mapSize,n.directionalShadow[m]=se,n.directionalShadowMap[m]=ee,n.directionalShadowMatrix[m]=D.shadow.matrix,S++}n.directional[m]=X,m++}else if(D.isSpotLight){let X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(I).multiplyScalar(B),X.distance=G,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[w]=X;let K=D.shadow;if(D.map&&(n.spotLightMap[_]=D.map,_++,K.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[w]=K.matrix,D.castShadow){let se=t.get(D);se.shadowIntensity=K.intensity,se.shadowBias=K.bias,se.shadowNormalBias=K.normalBias,se.shadowRadius=K.radius,se.shadowMapSize=K.mapSize,n.spotShadow[w]=se,n.spotShadowMap[w]=ee,A++}w++}else if(D.isRectAreaLight){let X=e.get(D);X.color.copy(I).multiplyScalar(B),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[T]=X,T++}else if(D.isPointLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){let K=D.shadow,se=t.get(D);se.shadowIntensity=K.intensity,se.shadowBias=K.bias,se.shadowNormalBias=K.normalBias,se.shadowRadius=K.radius,se.shadowMapSize=K.mapSize,se.shadowCameraNear=K.camera.near,se.shadowCameraFar=K.camera.far,n.pointShadow[g]=se,n.pointShadowMap[g]=ee,n.pointShadowMatrix[g]=D.shadow.matrix,b++}n.point[g]=X,g++}else if(D.isHemisphereLight){let X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(B),X.groundColor.copy(D.groundColor).multiplyScalar(B),n.hemi[v]=X,v++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;let U=n.hash;(U.sunLength!==f||U.directionalLength!==m||U.pointLength!==g||U.spotLength!==w||U.rectAreaLength!==T||U.hemiLength!==v||U.numSunShadows!==p||U.numDirectionalShadows!==S||U.numPointShadows!==b||U.numSpotShadows!==A||U.numSpotMaps!==_||U.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=w,n.rectArea.length=T,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+_-E,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,U.sunLength=f,U.directionalLength=m,U.pointLength=g,U.spotLength=w,U.rectAreaLength=T,U.hemiLength=v,U.numSunShadows=p,U.numDirectionalShadows=S,U.numPointShadows=b,U.numSpotShadows=A,U.numSpotMaps=_,U.numLightProbes=R,n.version=bg++)}function l(c,d){let u=0,h=0,f=0,p=0,y=0,m=0,g=d.matrixWorldInverse;for(let w=0,T=c.length;w<T;w++){let v=c[w];if(v.isSunLight){let S=n.sun[u];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),u++}else if(v.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),h++}else if(v.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let S=n.rectArea[y];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function Ru(i){let e=new Sg(i),t=[],n=[],s=[];function r(h){u.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function d(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function wg(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Ru(i),e.set(s,[o])):r>=a.length?(o=new Ru(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Tg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ag=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Cg=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Pu=new yt,pr=new P,yc=new P;function Rg(i,e,t){let n=new as,s=new Te,r=new Te,a=new xt,o=new Sa,l=new wa,c={},d=t.maxTextureSize,u={[pi]:Jt,[Jt]:pi,[pn]:pn},h=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:Tg,fragmentShader:Eg}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let p=new Lt;p.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Je(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nr;let g=this.type;this.render=function(b,A,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===wh&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=nr);let E=i.getRenderTarget(),R=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),k=i.state;k.setBlending(zn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let V=g!==this.type;V&&A.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(I=>I.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,I=b.length;D<I;D++){let B=b[D],G=B.shadow;if(G===void 0){Ne("WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ee=G.getFrameExtents();s.multiply(ee),r.copy(G.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ee.x),s.x=r.x*ee.x,G.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ee.y),s.y=r.y*ee.y,G.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=X,G.map===null||V===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===ms){if(B.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new en(s.x,s.y,{format:_i,type:En,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),G.map.texture.name=B.name+".shadowMap",G.map.depthTexture=new li(s.x,s.y,Tn),G.map.depthTexture.name=B.name+".shadowMapDepth",G.map.depthTexture.format=Nn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ot,G.map.depthTexture.magFilter=Ot}else B.isPointLight?(G.map=new Po(s.x),G.map.depthTexture=new fa(s.x,wn)):(G.map=new en(s.x,s.y),G.map.depthTexture=new li(s.x,s.y,wn)),G.map.depthTexture.name=B.name+".shadowMap",G.map.depthTexture.format=Nn,this.type===nr?(G.map.depthTexture.compareFunction=X?Eo:To,G.map.depthTexture.minFilter=Ht,G.map.depthTexture.magFilter=Ht):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ot,G.map.depthTexture.magFilter=Ot);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let K=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();B.isPointLight!==!0&&G.updateMatrices(B,_);for(let se=0;se<K;se++){let De=G.getCamera(se);if(B.isPointLight){let Ce=G.camera,ht=G.matrix,Ke=B.distance||Ce.far;Ke!==Ce.far&&(Ce.far=Ke,Ce.updateProjectionMatrix()),pr.setFromMatrixPosition(B.matrixWorld),Ce.position.copy(pr),yc.copy(Ce.position),yc.add(Ag[se]),Ce.up.copy(Cg[se]),Ce.lookAt(yc),Ce.updateMatrixWorld(),ht.makeTranslation(-pr.x,-pr.y,-pr.z),Pu.multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Pu,Ce.coordinateSystem,Ce.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,se),i.clear();else{se===0&&(i.setRenderTarget(G.map),i.clear());let Ce=G.getViewport(se);a.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),k.viewport(a)}n=G.getFrustum(se),v(A,_,De,B,this.type)}G.isPointLightShadow!==!0&&this.type===ms&&w(G,_),G.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(E,R,U)};function w(b,A){let _=e.update(y);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new en(s.x,s.y,{format:_i,type:En}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(A,null,_,h,y,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(A,null,_,f,y,null)}function T(b,A,_,E){let R=null,U=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(U!==void 0)R=U;else if(R=_.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let k=R.uuid,V=A.uuid,D=c[k];D===void 0&&(D={},c[k]=D);let I=D[V];I===void 0&&(I=R.clone(),D[V]=I,A.addEventListener("dispose",S)),R=I}if(R.visible=A.visible,R.wireframe=A.wireframe,E===ms?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:u[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let k=i.properties.get(R);k.light=_}return R}function v(b,A,_,E,R){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===ms)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);let V=e.update(b),D=b.material;if(Array.isArray(D)){let I=V.groups;for(let B=0,G=I.length;B<G;B++){let ee=I[B],X=D[ee.materialIndex];if(X&&X.visible){let K=T(b,X,E,R);b.onBeforeShadow(i,b,A,_,V,K,ee),i.renderBufferDirect(_,null,V,K,b,ee),b.onAfterShadow(i,b,A,_,V,K,ee)}}}else if(D.visible){let I=T(b,D,E,R);b.onBeforeShadow(i,b,A,_,V,I,null),i.renderBufferDirect(_,null,V,I,b,null),b.onAfterShadow(i,b,A,_,V,I,null)}}let k=b.children;for(let V=0,D=k.length;V<D;V++)v(k[V],A,_,E,R)}function S(b){b.target.removeEventListener("dispose",S);for(let _ in c){let E=c[_],R=b.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function Pg(i,e){function t(){let N=!1,he=new xt,j=null,ue=new xt(0,0,0,0);return{setMask:function(ge){j!==ge&&!N&&(i.colorMask(ge,ge,ge,ge),j=ge)},setLocked:function(ge){N=ge},setClear:function(ge,ie,Re,Se,dt){dt===!0&&(ge*=Se,ie*=Se,Re*=Se),he.set(ge,ie,Re,Se),ue.equals(he)===!1&&(i.clearColor(ge,ie,Re,Se),ue.copy(he))},reset:function(){N=!1,j=null,ue.set(-1,0,0,0)}}}function n(){let N=!1,he=!1,j=null,ue=null,ge=null;return{setReversed:function(ie){if(he!==ie){let Re=e.get("EXT_clip_control");ie?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),he=ie;let Se=ge;ge=null,this.setClear(Se)}},getReversed:function(){return he},setTest:function(ie){ie?te(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(ie){j!==ie&&!N&&(i.depthMask(ie),j=ie)},setFunc:function(ie){if(he&&(ie=ru[ie]),ue!==ie){switch(ie){case Zr:i.depthFunc(i.NEVER);break;case Jr:i.depthFunc(i.ALWAYS);break;case Kr:i.depthFunc(i.LESS);break;case ts:i.depthFunc(i.LEQUAL);break;case jr:i.depthFunc(i.EQUAL);break;case Qr:i.depthFunc(i.GEQUAL);break;case ea:i.depthFunc(i.GREATER);break;case ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=ie}},setLocked:function(ie){N=ie},setClear:function(ie){ge!==ie&&(ge=ie,he&&(ie=1-ie),i.clearDepth(ie))},reset:function(){N=!1,j=null,ue=null,ge=null,he=!1}}}function s(){let N=!1,he=null,j=null,ue=null,ge=null,ie=null,Re=null,Se=null,dt=null;return{setTest:function(nt){N||(nt?te(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(nt){he!==nt&&!N&&(i.stencilMask(nt),he=nt)},setFunc:function(nt,gn,Pn){(j!==nt||ue!==gn||ge!==Pn)&&(i.stencilFunc(nt,gn,Pn),j=nt,ue=gn,ge=Pn)},setOp:function(nt,gn,Pn){(ie!==nt||Re!==gn||Se!==Pn)&&(i.stencilOp(nt,gn,Pn),ie=nt,Re=gn,Se=Pn)},setLocked:function(nt){N=nt},setClear:function(nt){dt!==nt&&(i.clearStencil(nt),dt=nt)},reset:function(){N=!1,he=null,j=null,ue=null,ge=null,ie=null,Re=null,Se=null,dt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,d={},u={},h={},f=new WeakMap,p=[],y=null,m=!1,g=null,w=null,T=null,v=null,S=null,b=null,A=null,_=new Be(0,0,0),E=0,R=!1,U=null,k=null,V=null,D=null,I=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,ee=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=ee>=1):X.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=ee>=2);let K=null,se={},De=i.getParameter(i.SCISSOR_BOX),Ce=i.getParameter(i.VIEWPORT),ht=new xt().fromArray(De),Ke=new xt().fromArray(Ce);function et(N,he,j,ue){let ge=new Uint8Array(4),ie=i.createTexture();i.bindTexture(N,ie),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<j;Re++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(he+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return ie}let Z={};Z[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(i.DEPTH_TEST),a.setFunc(ts),Ye(!1),_t(Dl),te(i.CULL_FACE),Qe(zn);function te(N){d[N]!==!0&&(i.enable(N),d[N]=!0)}function ve(N){d[N]!==!1&&(i.disable(N),d[N]=!1)}function ze(N,he){return h[N]!==he?(i.bindFramebuffer(N,he),h[N]=he,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=he),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=he),!0):!1}function _e(N,he){let j=p,ue=!1;if(N){j=f.get(he),j===void 0&&(j=[],f.set(he,j));let ge=N.textures;if(j.length!==ge.length||j[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,Re=ge.length;ie<Re;ie++)j[ie]=i.COLOR_ATTACHMENT0+ie;j.length=ge.length,ue=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,ue=!0);ue&&i.drawBuffers(j)}function We(N){return y!==N?(i.useProgram(N),y=N,!0):!1}let It={[Di]:i.FUNC_ADD,[Eh]:i.FUNC_SUBTRACT,[Ah]:i.FUNC_REVERSE_SUBTRACT};It[Ch]=i.MIN,It[Rh]=i.MAX;let qe={[Ph]:i.ZERO,[Ih]:i.ONE,[Lh]:i.SRC_COLOR,[kl]:i.SRC_ALPHA,[Oh]:i.SRC_ALPHA_SATURATE,[Fh]:i.DST_COLOR,[Nh]:i.DST_ALPHA,[Dh]:i.ONE_MINUS_SRC_COLOR,[Ol]:i.ONE_MINUS_SRC_ALPHA,[kh]:i.ONE_MINUS_DST_COLOR,[Uh]:i.ONE_MINUS_DST_ALPHA,[Bh]:i.CONSTANT_COLOR,[zh]:i.ONE_MINUS_CONSTANT_COLOR,[Hh]:i.CONSTANT_ALPHA,[Vh]:i.ONE_MINUS_CONSTANT_ALPHA};function Qe(N,he,j,ue,ge,ie,Re,Se,dt,nt){if(N===zn){m===!0&&(ve(i.BLEND),m=!1);return}if(m===!1&&(te(i.BLEND),m=!0),N!==Th){if(N!==g||nt!==R){if((w!==Di||S!==Di)&&(i.blendEquation(i.FUNC_ADD),w=Di,S=Di),nt)switch(N){case gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nl:i.blendFunc(i.ONE,i.ONE);break;case Ul:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Fe("WebGLState: Invalid blending: ",N);break}else switch(N){case gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ul:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fl:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",N);break}T=null,v=null,b=null,A=null,_.set(0,0,0),E=0,g=N,R=nt}return}ge=ge||he,ie=ie||j,Re=Re||ue,(he!==w||ge!==S)&&(i.blendEquationSeparate(It[he],It[ge]),w=he,S=ge),(j!==T||ue!==v||ie!==b||Re!==A)&&(i.blendFuncSeparate(qe[j],qe[ue],qe[ie],qe[Re]),T=j,v=ue,b=ie,A=Re),(Se.equals(_)===!1||dt!==E)&&(i.blendColor(Se.r,Se.g,Se.b,dt),_.copy(Se),E=dt),g=N,R=!1}function ut(N,he){N.side===pn?ve(i.CULL_FACE):te(i.CULL_FACE);let j=N.side===Jt;he&&(j=!j),Ye(j),N.blending===gs&&N.transparent===!1?Qe(zn):Qe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let ue=N.stencilWrite;o.setTest(ue),ue&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Kt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(N){U!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),U=N)}function _t(N){N!==Mh?(te(i.CULL_FACE),N!==k&&(N===Dl?i.cullFace(i.BACK):N===Sh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),k=N}function Ft(N){N!==V&&(G&&i.lineWidth(N),V=N)}function Kt(N,he,j){N?(te(i.POLYGON_OFFSET_FILL),(D!==he||I!==j)&&(D=he,I=j,a.getReversed()&&(he=-he),i.polygonOffset(he,j))):ve(i.POLYGON_OFFSET_FILL)}function Mt(N){N?te(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function Et(N){N===void 0&&(N=i.TEXTURE0+B-1),K!==N&&(i.activeTexture(N),K=N)}function F(N,he,j){j===void 0&&(K===null?j=i.TEXTURE0+B-1:j=K);let ue=se[j];ue===void 0&&(ue={type:void 0,texture:void 0},se[j]=ue),(ue.type!==N||ue.texture!==he)&&(K!==j&&(i.activeTexture(j),K=j),i.bindTexture(N,he||Z[N]),ue.type=N,ue.texture=he)}function Gt(){let N=se[K];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function rt(){try{i.compressedTexImage2D(...arguments)}catch(N){Fe("WebGLState:",N)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(N){Fe("WebGLState:",N)}}function x(){try{i.texSubImage2D(...arguments)}catch(N){Fe("WebGLState:",N)}}function O(){try{i.texSubImage3D(...arguments)}catch(N){Fe("WebGLState:",N)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Fe("WebGLState:",N)}}function $(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Fe("WebGLState:",N)}}function ae(){try{i.texStorage2D(...arguments)}catch(N){Fe("WebGLState:",N)}}function oe(){try{i.texStorage3D(...arguments)}catch(N){Fe("WebGLState:",N)}}function J(){try{i.texImage2D(...arguments)}catch(N){Fe("WebGLState:",N)}}function Q(){try{i.texImage3D(...arguments)}catch(N){Fe("WebGLState:",N)}}function le(N){return u[N]!==void 0?u[N]:i.getParameter(N)}function Ee(N,he){u[N]!==he&&(i.pixelStorei(N,he),u[N]=he)}function de(N){ht.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ht.copy(N))}function ce(N){Ke.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Ke.copy(N))}function Ae(N,he){let j=c.get(he);j===void 0&&(j=new WeakMap,c.set(he,j));let ue=j.get(N);ue===void 0&&(ue=i.getUniformBlockIndex(he,N.name),j.set(N,ue))}function Ue(N,he){let ue=c.get(he).get(N);l.get(he)!==ue&&(i.uniformBlockBinding(he,ue,N.__bindingPointIndex),l.set(he,ue))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},u={},K=null,se={},h={},f=new WeakMap,p=[],y=null,m=!1,g=null,w=null,T=null,v=null,S=null,b=null,A=null,_=new Be(0,0,0),E=0,R=!1,U=null,k=null,V=null,D=null,I=null,ht.set(0,0,i.canvas.width,i.canvas.height),Ke.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:ve,bindFramebuffer:ze,drawBuffers:_e,useProgram:We,setBlending:Qe,setMaterial:ut,setFlipSided:Ye,setCullFace:_t,setLineWidth:Ft,setPolygonOffset:Kt,setScissorTest:Mt,activeTexture:Et,bindTexture:F,unbindTexture:Gt,compressedTexImage2D:rt,compressedTexImage3D:C,texImage2D:J,texImage3D:Q,pixelStorei:Ee,getParameter:le,updateUBOMapping:Ae,uniformBlockBinding:Ue,texStorage2D:ae,texStorage3D:oe,texSubImage2D:x,texSubImage3D:O,compressedTexSubImage2D:W,compressedTexSubImage3D:$,scissor:de,viewport:ce,reset:He}}function Ig(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Te,d=new WeakMap,u=new Set,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,x){return p?new OffscreenCanvas(C,x):ks("canvas")}function m(C,x,O){let W=1,$=rt(C);if(($.width>O||$.height>O)&&(W=O/Math.max($.width,$.height)),W<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let ae=Math.floor(W*$.width),oe=Math.floor(W*$.height);h===void 0&&(h=y(ae,oe));let J=x?y(ae,oe):h;return J.width=ae,J.height=oe,J.getContext("2d").drawImage(C,0,0,ae,oe),Ne("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ae+"x"+oe+")."),J}else return"data"in C&&Ne("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function g(C){return C.generateMipmaps}function w(C){i.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(C,x,O,W,$,ae=!1){if(C!==null){if(i[C]!==void 0)return i[C];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let oe;W&&(oe=e.get("EXT_texture_norm16"),oe||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=x;if(x===i.RED&&(O===i.FLOAT&&(J=i.R32F),O===i.HALF_FLOAT&&(J=i.R16F),O===i.UNSIGNED_BYTE&&(J=i.R8),O===i.UNSIGNED_SHORT&&oe&&(J=oe.R16_EXT),O===i.SHORT&&oe&&(J=oe.R16_SNORM_EXT)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.R8UI),O===i.UNSIGNED_SHORT&&(J=i.R16UI),O===i.UNSIGNED_INT&&(J=i.R32UI),O===i.BYTE&&(J=i.R8I),O===i.SHORT&&(J=i.R16I),O===i.INT&&(J=i.R32I)),x===i.RG&&(O===i.FLOAT&&(J=i.RG32F),O===i.HALF_FLOAT&&(J=i.RG16F),O===i.UNSIGNED_BYTE&&(J=i.RG8),O===i.UNSIGNED_SHORT&&oe&&(J=oe.RG16_EXT),O===i.SHORT&&oe&&(J=oe.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RG8UI),O===i.UNSIGNED_SHORT&&(J=i.RG16UI),O===i.UNSIGNED_INT&&(J=i.RG32UI),O===i.BYTE&&(J=i.RG8I),O===i.SHORT&&(J=i.RG16I),O===i.INT&&(J=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGB8UI),O===i.UNSIGNED_SHORT&&(J=i.RGB16UI),O===i.UNSIGNED_INT&&(J=i.RGB32UI),O===i.BYTE&&(J=i.RGB8I),O===i.SHORT&&(J=i.RGB16I),O===i.INT&&(J=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),O===i.UNSIGNED_INT&&(J=i.RGBA32UI),O===i.BYTE&&(J=i.RGBA8I),O===i.SHORT&&(J=i.RGBA16I),O===i.INT&&(J=i.RGBA32I)),x===i.RGB&&(O===i.UNSIGNED_SHORT&&oe&&(J=oe.RGB16_EXT),O===i.SHORT&&oe&&(J=oe.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),x===i.RGBA){let Q=ae?Fs:Ze.getTransfer($);O===i.FLOAT&&(J=i.RGBA32F),O===i.HALF_FLOAT&&(J=i.RGBA16F),O===i.UNSIGNED_BYTE&&(J=Q===st?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&oe&&(J=oe.RGBA16_EXT),O===i.SHORT&&oe&&(J=oe.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function S(C,x){let O;return C?x===null||x===wn||x===_s?O=i.DEPTH24_STENCIL8:x===Tn?O=i.DEPTH32F_STENCIL8:x===ys&&(O=i.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===wn||x===_s?O=i.DEPTH_COMPONENT24:x===Tn?O=i.DEPTH_COMPONENT32F:x===ys&&(O=i.DEPTH_COMPONENT16),O}function b(C,x){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ot&&C.minFilter!==Ht?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function A(C){let x=C.target;x.removeEventListener("dispose",A),E(x),x.isVideoTexture&&d.delete(x),x.isHTMLTexture&&u.delete(x)}function _(C){let x=C.target;x.removeEventListener("dispose",_),U(x)}function E(C){let x=n.get(C);if(x.__webglInit===void 0)return;let O=C.source,W=f.get(O);if(W){let $=W[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&R(C),Object.keys(W).length===0&&f.delete(O)}n.remove(C)}function R(C){let x=n.get(C);i.deleteTexture(x.__webglTexture);let O=C.source,W=f.get(O);delete W[x.__cacheKey],a.memory.textures--}function U(C){let x=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let $=0;$<x.__webglFramebuffer[W].length;$++)i.deleteFramebuffer(x.__webglFramebuffer[W][$]);else i.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)i.deleteFramebuffer(x.__webglFramebuffer[W]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let O=C.textures;for(let W=0,$=O.length;W<$;W++){let ae=n.get(O[W]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),a.memory.textures--),n.remove(O[W])}n.remove(C)}let k=0;function V(){k=0}function D(){return k}function I(C){k=C}function B(){let C=k;return C>=s.maxTextures&&Ne("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,C}function G(C){let x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function ee(C,x){let O=n.get(C);if(C.isVideoTexture&&F(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){let W=C.image;if(W===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(O,C,x);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function X(C,x){let O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){ve(O,C,x);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function K(C,x){let O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){ve(O,C,x);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function se(C,x){let O=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&O.__version!==C.version){ze(O,C,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}let De={[na]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[ia]:i.MIRRORED_REPEAT},Ce={[Ot]:i.NEAREST,[qh]:i.NEAREST_MIPMAP_NEAREST,[sr]:i.NEAREST_MIPMAP_LINEAR,[Ht]:i.LINEAR,[Ha]:i.LINEAR_MIPMAP_NEAREST,[gi]:i.LINEAR_MIPMAP_LINEAR},ht={[Zh]:i.NEVER,[eu]:i.ALWAYS,[Jh]:i.LESS,[To]:i.LEQUAL,[Kh]:i.EQUAL,[Eo]:i.GEQUAL,[jh]:i.GREATER,[Qh]:i.NOTEQUAL};function Ke(C,x){if(x.type===Tn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ht||x.magFilter===Ha||x.magFilter===sr||x.magFilter===gi||x.minFilter===Ht||x.minFilter===Ha||x.minFilter===sr||x.minFilter===gi)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,De[x.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,De[x.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,De[x.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Ce[x.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Ce[x.minFilter]),x.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,ht[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ot||x.minFilter!==sr&&x.minFilter!==gi||x.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function et(C,x){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",A));let W=x.source,$=f.get(W);$===void 0&&($={},f.set(W,$));let ae=G(x);if(ae!==C.__cacheKey){$[ae]===void 0&&($[ae]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),$[ae].usedTimes++;let oe=$[C.__cacheKey];oe!==void 0&&($[C.__cacheKey].usedTimes--,oe.usedTimes===0&&R(x)),C.__cacheKey=ae,C.__webglTexture=$[ae].texture}return O}function Z(C,x,O){return Math.floor(Math.floor(C/O)/x)}function te(C,x,O,W){let ae=C.updateRanges;if(ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,O,W,x.data);else{ae.sort((Ee,de)=>Ee.start-de.start);let oe=0;for(let Ee=1;Ee<ae.length;Ee++){let de=ae[oe],ce=ae[Ee],Ae=de.start+de.count,Ue=Z(ce.start,x.width,4),He=Z(de.start,x.width,4);ce.start<=Ae+1&&Ue===He&&Z(ce.start+ce.count-1,x.width,4)===Ue?de.count=Math.max(de.count,ce.start+ce.count-de.start):(++oe,ae[oe]=ce)}ae.length=oe+1;let J=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),le=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Ee=0,de=ae.length;Ee<de;Ee++){let ce=ae[Ee],Ae=Math.floor(ce.start/4),Ue=Math.ceil(ce.count/4),He=Ae%x.width,N=Math.floor(Ae/x.width),he=Ue,j=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,He),t.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,He,N,he,j,O,W,x.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,le)}}function ve(C,x,O){let W=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=i.TEXTURE_3D);let $=et(C,x),ae=x.source;t.bindTexture(W,C.__webglTexture,i.TEXTURE0+O);let oe=n.get(ae);if(ae.version!==oe.__version||$===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap!="undefined"&&x.image instanceof ImageBitmap)===!1){let j=Ze.getPrimaries(Ze.workingColorSpace),ue=x.colorSpace===Jn?null:Ze.getPrimaries(x.colorSpace),ge=x.colorSpace===Jn||j===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let Q=m(x.image,!1,s.maxTextureSize);Q=Gt(x,Q);let le=r.convert(x.format,x.colorSpace),Ee=r.convert(x.type),de=v(x.internalFormat,le,Ee,x.normalized,x.colorSpace,x.isVideoTexture);Ke(W,x);let ce,Ae=x.mipmaps,Ue=x.isVideoTexture!==!0,He=oe.__version===void 0||$===!0,N=ae.dataReady,he=b(x,Q);if(x.isDepthTexture)de=S(x.format===yi,x.type),He&&(Ue?t.texStorage2D(i.TEXTURE_2D,1,de,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,de,Q.width,Q.height,0,le,Ee,null));else if(x.isDataTexture)if(Ae.length>0){Ue&&He&&t.texStorage2D(i.TEXTURE_2D,he,de,Ae[0].width,Ae[0].height);for(let j=0,ue=Ae.length;j<ue;j++)ce=Ae[j],Ue?N&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ce.width,ce.height,le,Ee,ce.data):t.texImage2D(i.TEXTURE_2D,j,de,ce.width,ce.height,0,le,Ee,ce.data);x.generateMipmaps=!1}else Ue?(He&&t.texStorage2D(i.TEXTURE_2D,he,de,Q.width,Q.height),N&&te(x,Q,le,Ee)):t.texImage2D(i.TEXTURE_2D,0,de,Q.width,Q.height,0,le,Ee,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ue&&He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,de,Ae[0].width,Ae[0].height,Q.depth);for(let j=0,ue=Ae.length;j<ue;j++)if(ce=Ae[j],x.format!==mn)if(le!==null)if(Ue){if(N)if(x.layerUpdates.size>0){let ge=ac(ce.width,ce.height,x.format,x.type);for(let ie of x.layerUpdates){let Re=ce.data.subarray(ie*ge/ce.data.BYTES_PER_ELEMENT,(ie+1)*ge/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,ie,ce.width,ce.height,1,le,Re)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,ce.width,ce.height,Q.depth,le,ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,de,ce.width,ce.height,Q.depth,0,ce.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,ce.width,ce.height,Q.depth,le,Ee,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,de,ce.width,ce.height,Q.depth,0,le,Ee,ce.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ue&&He&&t.texStorage2D(i.TEXTURE_2D,he,de,Ae[0].width,Ae[0].height);for(let j=0,ue=Ae.length;j<ue;j++)ce=Ae[j],x.format!==mn?le!==null?Ue?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,ce.width,ce.height,le,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,j,de,ce.width,ce.height,0,ce.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?N&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ce.width,ce.height,le,Ee,ce.data):t.texImage2D(i.TEXTURE_2D,j,de,ce.width,ce.height,0,le,Ee,ce.data)}else if(x.isDataArrayTexture)if(Ue){if(He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,de,Q.width,Q.height,Q.depth),N)if(x.layerUpdates.size>0){let j=ac(Q.width,Q.height,x.format,x.type);for(let ue of x.layerUpdates){let ge=Q.data.subarray(ue*j/Q.data.BYTES_PER_ELEMENT,(ue+1)*j/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ue,Q.width,Q.height,1,le,Ee,ge)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,le,Ee,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,de,Q.width,Q.height,Q.depth,0,le,Ee,Q.data);else if(x.isData3DTexture)Ue?(He&&t.texStorage3D(i.TEXTURE_3D,he,de,Q.width,Q.height,Q.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,le,Ee,Q.data)):t.texImage3D(i.TEXTURE_3D,0,de,Q.width,Q.height,Q.depth,0,le,Ee,Q.data);else if(x.isFramebufferTexture){if(He)if(Ue)t.texStorage2D(i.TEXTURE_2D,he,de,Q.width,Q.height);else{let j=Q.width,ue=Q.height;for(let ge=0;ge<he;ge++)t.texImage2D(i.TEXTURE_2D,ge,de,j,ue,0,le,Ee,null),j>>=1,ue>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),Q.parentNode!==j){j.appendChild(Q),u.add(x),j.onpaint=ue=>{let ge=ue.changedElements;for(let ie of u)ge.includes(ie.image)&&(ie.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let ge=i.RGBA,ie=i.RGBA,Re=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ge,ie,Re,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Ue&&He){let j=rt(Ae[0]);t.texStorage2D(i.TEXTURE_2D,he,de,j.width,j.height)}for(let j=0,ue=Ae.length;j<ue;j++)ce=Ae[j],Ue?N&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,le,Ee,ce):t.texImage2D(i.TEXTURE_2D,j,de,le,Ee,ce);x.generateMipmaps=!1}else if(Ue){if(He){let j=rt(Q);t.texStorage2D(i.TEXTURE_2D,he,de,j.width,j.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,Ee,Q)}else t.texImage2D(i.TEXTURE_2D,0,de,le,Ee,Q);g(x)&&w(W),oe.__version=ae.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function ze(C,x,O){if(x.image.length!==6)return;let W=et(C,x),$=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+O);let ae=n.get($);if($.version!==ae.__version||W===!0){t.activeTexture(i.TEXTURE0+O);let oe=Ze.getPrimaries(Ze.workingColorSpace),J=x.colorSpace===Jn?null:Ze.getPrimaries(x.colorSpace),Q=x.colorSpace===Jn||oe===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let le=x.isCompressedTexture||x.image[0].isCompressedTexture,Ee=x.image[0]&&x.image[0].isDataTexture,de=[];for(let ie=0;ie<6;ie++)!le&&!Ee?de[ie]=m(x.image[ie],!0,s.maxCubemapSize):de[ie]=Ee?x.image[ie].image:x.image[ie],de[ie]=Gt(x,de[ie]);let ce=de[0],Ae=r.convert(x.format,x.colorSpace),Ue=r.convert(x.type),He=v(x.internalFormat,Ae,Ue,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,he=ae.__version===void 0||W===!0,j=$.dataReady,ue=b(x,ce);Ke(i.TEXTURE_CUBE_MAP,x);let ge;if(le){N&&he&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,He,ce.width,ce.height);for(let ie=0;ie<6;ie++){ge=de[ie].mipmaps;for(let Re=0;Re<ge.length;Re++){let Se=ge[Re];x.format!==mn?Ae!==null?N?j&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,0,0,Se.width,Se.height,Ae,Se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,He,Se.width,Se.height,0,Se.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,0,0,Se.width,Se.height,Ae,Ue,Se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,He,Se.width,Se.height,0,Ae,Ue,Se.data)}}}else{if(ge=x.mipmaps,N&&he){ge.length>0&&ue++;let ie=rt(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,He,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ee){N?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,de[ie].width,de[ie].height,Ae,Ue,de[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,He,de[ie].width,de[ie].height,0,Ae,Ue,de[ie].data);for(let Re=0;Re<ge.length;Re++){let dt=ge[Re].image[ie].image;N?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,0,0,dt.width,dt.height,Ae,Ue,dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,He,dt.width,dt.height,0,Ae,Ue,dt.data)}}else{N?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ae,Ue,de[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,He,Ae,Ue,de[ie]);for(let Re=0;Re<ge.length;Re++){let Se=ge[Re];N?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,0,0,Ae,Ue,Se.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,He,Ae,Ue,Se.image[ie])}}}g(x)&&w(i.TEXTURE_CUBE_MAP),ae.__version=$.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function _e(C,x,O,W,$,ae){let oe=r.convert(O.format,O.colorSpace),J=r.convert(O.type),Q=v(O.internalFormat,oe,J,O.normalized,O.colorSpace),le=n.get(x),Ee=n.get(O);if(Ee.__renderTarget=x,!le.__hasExternalTextures){let de=Math.max(1,x.width>>ae),ce=Math.max(1,x.height>>ae);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,ae,Q,de,ce,x.depth,0,oe,J,null):t.texImage2D($,ae,Q,de,ce,0,oe,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Et(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,$,Ee.__webglTexture,0,Mt(x)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,$,Ee.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(C,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,C),x.depthBuffer){let W=x.depthTexture,$=W&&W.isDepthTexture?W.type:null,ae=S(x.stencilBuffer,$),oe=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Et(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(x),ae,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(x),ae,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ae,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,C)}else{let W=x.textures;for(let $=0;$<W.length;$++){let ae=W[$],oe=r.convert(ae.format,ae.colorSpace),J=r.convert(ae.type),Q=v(ae.internalFormat,oe,J,ae.normalized,ae.colorSpace);Et(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(x),Q,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(x),Q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Q,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function It(C,x,O){let W=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(x.depthTexture);if($.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W){if($.__webglInit===void 0&&($.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ke(i.TEXTURE_CUBE_MAP,x.depthTexture);let le=r.convert(x.depthTexture.format),Ee=r.convert(x.depthTexture.type),de;x.depthTexture.format===Nn?de=i.DEPTH_COMPONENT24:x.depthTexture.format===yi&&(de=i.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,de,x.width,x.height,0,le,Ee,null)}}else ee(x.depthTexture,0);let ae=$.__webglTexture,oe=Mt(x),J=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,Q=x.depthTexture.format===yi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Nn)Et(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,J,ae,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,Q,J,ae,0);else if(x.depthTexture.format===yi)Et(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,J,ae,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,Q,J,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function qe(C){let x=n.get(C),O=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){let W=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),W){let $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,W.removeEventListener("dispose",$)};W.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=W}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let W=0;W<6;W++)It(x.__webglFramebuffer[W],C,W);else{let W=C.texture.mipmaps;W&&W.length>0?It(x.__webglFramebuffer[0],C,0):It(x.__webglFramebuffer,C,0)}else if(O){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]===void 0)x.__webglDepthbuffer[W]=i.createRenderbuffer(),We(x.__webglDepthbuffer[W],C,!1);else{let $=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=x.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ae)}}else{let W=C.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),We(x.__webglDepthbuffer,C,!1);else{let $=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ae)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(C,x,O){let W=n.get(C);x!==void 0&&_e(W.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&qe(C)}function ut(C){let x=C.texture,O=n.get(C),W=n.get(x);C.addEventListener("dispose",_);let $=C.textures,ae=C.isWebGLCubeRenderTarget===!0,oe=$.length>1;if(oe||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=x.version,a.memory.textures++),ae){O.__webglFramebuffer=[];for(let J=0;J<6;J++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[J]=[];for(let Q=0;Q<x.mipmaps.length;Q++)O.__webglFramebuffer[J][Q]=i.createFramebuffer()}else O.__webglFramebuffer[J]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let J=0;J<x.mipmaps.length;J++)O.__webglFramebuffer[J]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(oe)for(let J=0,Q=$.length;J<Q;J++){let le=n.get($[J]);le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Et(C)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let J=0;J<$.length;J++){let Q=$[J];O.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[J]);let le=r.convert(Q.format,Q.colorSpace),Ee=r.convert(Q.type),de=v(Q.internalFormat,le,Ee,Q.normalized,Q.colorSpace,C.isXRRenderTarget===!0),ce=Mt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,de,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,O.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),We(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Ke(i.TEXTURE_CUBE_MAP,x);for(let J=0;J<6;J++)if(x.mipmaps&&x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)_e(O.__webglFramebuffer[J][Q],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Q);else _e(O.__webglFramebuffer[J],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);g(x)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let J=0,Q=$.length;J<Q;J++){let le=$[J],Ee=n.get(le),de=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(de=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,Ee.__webglTexture),Ke(de,le),_e(O.__webglFramebuffer,C,le,i.COLOR_ATTACHMENT0+J,de,0),g(le)&&w(de)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,W.__webglTexture),Ke(J,x),x.mipmaps&&x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)_e(O.__webglFramebuffer[Q],C,x,i.COLOR_ATTACHMENT0,J,Q);else _e(O.__webglFramebuffer,C,x,i.COLOR_ATTACHMENT0,J,0);g(x)&&w(J),t.unbindTexture()}C.depthBuffer&&qe(C)}function Ye(C){let x=C.textures;for(let O=0,W=x.length;O<W;O++){let $=x[O];if(g($)){let ae=T(C),oe=n.get($).__webglTexture;t.bindTexture(ae,oe),w(ae),t.unbindTexture()}}}let _t=[],Ft=[];function Kt(C){if(C.samples>0){if(Et(C)===!1){let x=C.textures,O=C.width,W=C.height,$=i.COLOR_BUFFER_BIT,ae=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(C),J=x.length>1;if(J)for(let le=0;le<x.length;le++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);let Q=C.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let le=0;le<x.length;le++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);let Ee=n.get(x[le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,O,W,0,0,O,W,$,i.NEAREST),l===!0&&(_t.length=0,Ft.length=0,_t.push(i.COLOR_ATTACHMENT0+le),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(_t.push(ae),Ft.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ft)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let le=0;le<x.length;le++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);let Ee=n.get(x[le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,Ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let x=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Mt(C){return Math.min(s.maxSamples,C.samples)}function Et(C){let x=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function F(C){let x=a.render.frame;d.get(C)!==x&&(d.set(C,x),C.update())}function Gt(C,x){let O=C.colorSpace,W=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==Us&&O!==Jn&&(Ze.getTransfer(O)===st?(W!==mn||$!==nn)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",O)),x}function rt(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=V,this.getTextureUnits=D,this.setTextureUnits=I,this.setTexture2D=ee,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=se,this.rebindTextures=Qe,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Et,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Lg(i,e){function t(n,s=Jn){let r,a=Ze.getTransfer(s);if(n===nn)return i.UNSIGNED_BYTE;if(n===Ga)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Zl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Jl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===$l)return i.BYTE;if(n===Yl)return i.SHORT;if(n===ys)return i.UNSIGNED_SHORT;if(n===Va)return i.INT;if(n===wn)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===En)return i.HALF_FLOAT;if(n===Kl)return i.ALPHA;if(n===jl)return i.RGB;if(n===mn)return i.RGBA;if(n===Nn)return i.DEPTH_COMPONENT;if(n===yi)return i.DEPTH_STENCIL;if(n===Ql)return i.RED;if(n===qa)return i.RED_INTEGER;if(n===_i)return i.RG;if(n===Xa)return i.RG_INTEGER;if(n===$a)return i.RGBA_INTEGER;if(n===rr||n===ar||n===or||n===lr)if(a===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ya||n===Za||n===Ja||n===Ka)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ja||n===Qa||n===eo||n===to||n===no||n===cr||n===io)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ja||n===Qa)return a===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===eo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===to)return r.COMPRESSED_R11_EAC;if(n===no)return r.COMPRESSED_SIGNED_R11_EAC;if(n===cr)return r.COMPRESSED_RG11_EAC;if(n===io)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===yo||n===_o)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===so)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ro)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ao)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===lo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===co)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ho)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===po)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===go)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_o)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xo||n===vo||n===bo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===xo)return a===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mo||n===So||n===hr||n===wo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Mo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===So)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ng=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Tc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Xs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new on({vertexShader:Dg,fragmentShader:Ng,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Je(new Bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ec=class extends Un{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,p=null,y=typeof XRWebGLBinding!="undefined",m=new Tc,g={},w=t.getContextAttributes(),T=null,v=null,S=[],b=[],A=new Te,_=null,E=null,R=new zt;R.viewport=new xt;let U=new zt;U.viewport=new xt;let k=[R,U],V=new Fa,D=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let te=S[Z];return te===void 0&&(te=new rs,S[Z]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Z){let te=S[Z];return te===void 0&&(te=new rs,S[Z]=te),te.getGripSpace()},this.getHand=function(Z){let te=S[Z];return te===void 0&&(te=new rs,S[Z]=te),te.getHandSpace()};function B(Z){let te=b.indexOf(Z.inputSource);if(te===-1)return;let ve=S[te];ve!==void 0&&(ve.update(Z.inputSource,Z.frame,c||a),ve.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",ee);for(let Z=0;Z<S.length;Z++){let te=b[Z];te!==null&&(b[Z]=null,S[Z].disconnect(te))}D=null,I=null,m.reset();for(let Z in g)delete g[Z];if(e.setRenderTarget(T),f=null,h=null,u=null,s=null,v=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),E!==null){let Z=E.camera;Z.fov=E.fov,Z.zoom=E.zoom,Z.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",G),s.addEventListener("inputsourceschange",ee),w.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,ze=null,_e=null;w.depth&&(_e=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=w.stencil?yi:Nn,ze=w.stencil?_s:wn);let We={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};u=this.getBinding(),h=u.createProjectionLayer(We),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new en(h.textureWidth,h.textureHeight,{format:mn,type:nn,depthTexture:new li(h.textureWidth,h.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ve={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new en(f.framebufferWidth,f.framebufferHeight,{format:mn,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),et.setContext(s),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ee(Z){for(let te=0;te<Z.removed.length;te++){let ve=Z.removed[te],ze=b.indexOf(ve);ze>=0&&(b[ze]=null,S[ze].disconnect(ve))}for(let te=0;te<Z.added.length;te++){let ve=Z.added[te],ze=b.indexOf(ve);if(ze===-1){for(let We=0;We<S.length;We++)if(We>=b.length){b.push(ve),ze=We;break}else if(b[We]===null){b[We]=ve,ze=We;break}if(ze===-1)break}let _e=S[ze];_e&&_e.connect(ve)}}let X=new P,K=new P;function se(Z,te,ve){X.setFromMatrixPosition(te.matrixWorld),K.setFromMatrixPosition(ve.matrixWorld);let ze=X.distanceTo(K),_e=te.projectionMatrix.elements,We=ve.projectionMatrix.elements,It=_e[14]/(_e[10]-1),qe=_e[14]/(_e[10]+1),Qe=(_e[9]+1)/_e[5],ut=(_e[9]-1)/_e[5],Ye=(_e[8]-1)/_e[0],_t=(We[8]+1)/We[0],Ft=It*Ye,Kt=It*_t,Mt=ze/(-Ye+_t),Et=Mt*-Ye;if(te.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Et),Z.translateZ(Mt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),_e[10]===-1)Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let F=It+Mt,Gt=qe+Mt,rt=Ft-Et,C=Kt+(ze-Et),x=Qe*qe/Gt*F,O=ut*qe/Gt*F;Z.projectionMatrix.makePerspective(rt,C,x,O,F,Gt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function De(Z,te){te===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(te.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let te=Z.near,ve=Z.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),V.near=U.near=R.near=te,V.far=U.far=R.far=ve,(D!==V.near||I!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),D=V.near,I=V.far),V.layers.mask=Z.layers.mask|6,R.layers.mask=V.layers.mask&-5,U.layers.mask=V.layers.mask&-3;let ze=Z.parent,_e=V.cameras;De(V,ze);for(let We=0;We<_e.length;We++)De(_e[We],ze);_e.length===2?se(V,R,U):V.projectionMatrix.copy(R.projectionMatrix),E===null&&Z.isPerspectiveCamera&&(E={camera:Z,fov:Z.fov,zoom:Z.zoom}),Ce(Z,V,ze)};function Ce(Z,te,ve){ve===null?Z.matrix.copy(te.matrixWorld):(Z.matrix.copy(ve.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(te.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ra*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(Z){return g[Z]};let ht=null;function Ke(Z,te){if(d=te.getViewerPose(c||a),p=te,d!==null){let ve=d.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ze=!1;ve.length!==V.cameras.length&&(V.cameras.length=0,ze=!0);for(let qe=0;qe<ve.length;qe++){let Qe=ve[qe],ut=null;if(f!==null)ut=f.getViewport(Qe);else{let _t=u.getViewSubImage(h,Qe);ut=_t.viewport,qe===0&&(e.setRenderTargetTextures(v,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(v))}let Ye=k[qe];Ye===void 0&&(Ye=new zt,Ye.layers.enable(qe),Ye.viewport=new xt,k[qe]=Ye),Ye.matrix.fromArray(Qe.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(Qe.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(ut.x,ut.y,ut.width,ut.height),qe===0&&(V.matrix.copy(Ye.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),ze===!0&&V.cameras.push(Ye)}let _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let qe=u.getDepthInformation(ve[0]);qe&&qe.isValid&&qe.texture&&m.init(qe,s.renderState)}if(_e&&_e.includes("camera-access")&&y){e.state.unbindTexture(),u=n.getBinding();for(let qe=0;qe<ve.length;qe++){let Qe=ve[qe].camera;if(Qe){let ut=g[Qe];ut||(ut=new Xs,g[Qe]=ut);let Ye=u.getCameraImage(Qe);ut.sourceTexture=Ye}}}}for(let ve=0;ve<S.length;ve++){let ze=b[ve],_e=S[ve];ze!==null&&_e!==void 0&&_e.update(ze,te,c||a)}ht&&ht(Z,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),p=null}let et=new Iu;et.setAnimationLoop(Ke),this.setAnimationLoop=function(Z){ht=Z},this.dispose=function(){}}},Ug=new yt,ku=new Oe;ku.set(-1,0,0,0,1,0,0,0,1);function Fg(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,ic(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,w,T,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),d(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),h(m,g),g.isMeshPhysicalMaterial&&f(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),y(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,w,T):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Jt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Jt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let w=e.get(g),T=w.envMap,v=w.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(Ug.makeRotationFromEuler(v)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ku),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,w,T){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*w,m.scale.value=T*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function d(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,w){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Jt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function y(m,g){let w=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function kg(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let b=S.program;n.uniformBlockBinding(v,b)}function c(v,S){let b=s[v.id];b===void 0&&(m(v),b=d(v),s[v.id]=b,v.addEventListener("dispose",w));let A=S.program;n.updateUBOMapping(v,A);let _=e.render.frame;r[v.id]!==_&&(h(v),r[v.id]=_)}function d(v){let S=u();v.__bindingPointIndex=S;let b=i.createBuffer(),A=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,A,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let S=s[v.id],b=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let _=0,E=b.length;_<E;_++){let R=b[_];if(Array.isArray(R))for(let U=0,k=R.length;U<k;U++)f(R[U],_,U,A);else f(R,_,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,S,b,A){if(y(v,S,b,A)===!0){let _=v.__offset,E=v.value;if(Array.isArray(E)){let R=0;for(let U=0;U<E.length;U++){let k=E[U],V=g(k);p(k,v.__data,R),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(R+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function p(v,S,b){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,b)}function y(v,S,b,A){let _=v.value,E=S+"_"+b;if(A[E]===void 0)return typeof _=="number"||typeof _=="boolean"?A[E]=_:ArrayBuffer.isView(_)?A[E]=_.slice():A[E]=_.clone(),!0;{let R=A[E];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return A[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function m(v){let S=v.uniforms,b=0,A=16;for(let E=0,R=S.length;E<R;E++){let U=Array.isArray(S[E])?S[E]:[S[E]];for(let k=0,V=U.length;k<V;k++){let D=U[k],I=Array.isArray(D.value)?D.value:[D.value];for(let B=0,G=I.length;B<G;B++){let ee=I[B],X=g(ee),K=b%A,se=K%X.boundary,De=K+se;b+=se,De!==0&&A-De<X.storage&&(b+=A-De),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=X.storage}}}let _=b%A;return _>0&&(b+=A-_),v.__size=b,v.__cache={},this}function g(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",v),S}function w(v){let S=v.target;S.removeEventListener("dispose",w);let b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function T(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:T}}var Og=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hn=null;function Bg(){return Hn===null&&(Hn=new ca(Og,16,16,_i,En),Hn.name="DFG_LUT",Hn.minFilter=Ht,Hn.magFilter=Ht,Hn.wrapS=Dn,Hn.wrapT=Dn,Hn.generateMipmaps=!1,Hn.needsUpdate=!0),Hn}var Io=class{constructor(e={}){let{canvas:t=nu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:f=nn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let y=f,m=new Set([$a,Xa,qa]),g=new Set([nn,wn,ys,_s,Ga,Wa]),w=new Uint32Array(4),T=new Int32Array(4),v=new P,S=null,b=null,A=[],_=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,U=!1,k=null,V=null,D=null,I=null;this._outputColorSpace=Bt;let B=0,G=0,ee=null,X=-1,K=null,se=new xt,De=new xt,Ce=null,ht=new Be(0),Ke=0,et=t.width,Z=t.height,te=1,ve=null,ze=null,_e=new xt(0,0,et,Z),We=new xt(0,0,et,Z),It=!1,qe=new as,Qe=!1,ut=!1,Ye=new yt,_t=new P,Ft=new xt,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Mt=!1;function Et(){return ee===null?te:1}let F=n;function Gt(M,L){return t.getContext(M,L)}let rt,C,x,O,W,$,ae,oe,J,Q,le,Ee,de,ce,Ae,Ue,He,N,he,j,ue,ge,ie;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",dt,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",gn,!1),F===null){let L="webgl2";if(F=Gt(L,M),F===null)throw Gt(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Re()}catch(M){throw t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",gn,!1),Fe("WebGLRenderer: "+M.message),M}function Re(){rt=new Xm(F),rt.init(),ue=new Lg(F,rt),C=new Fm(F,rt,e,ue),x=new Pg(F,rt),C.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),V=F.createFramebuffer(),D=F.createFramebuffer(),I=F.createFramebuffer(),O=new Zm(F),W=new gg,$=new Ig(F,rt,x,W,C,ue,O),ae=new qm(R),oe=new Jd(F),ge=new Nm(F,oe),J=new $m(F,oe,O,ge),Q=new Km(F,J,oe,ge,O),N=new Jm(F,C,$),Ae=new km(W),le=new mg(R,ae,rt,C,ge,Ae),Ee=new Fg(R,W),de=new _g,ce=new wg(rt),He=new Dm(R,ae,x,Q,p,l),Ue=new Rg(R,Q,C),ie=new kg(F,O,C,x),he=new Um(F,rt,O),j=new Ym(F,rt,O),O.programs=le.programs,R.capabilities=C,R.extensions=rt,R.properties=W,R.renderLists=de,R.shadowMap=Ue,R.state=x,R.info=O}y!==nn&&(E=new Qm(y,t.width,t.height,o,s,r));let Se=new Ec(R,F);this.xr=Se,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let M=rt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=rt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(M){M!==void 0&&(te=M,this.setSize(et,Z,!1))},this.getSize=function(M){return M.set(et,Z)},this.setSize=function(M,L,q=!0){if(Se.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}et=M,Z=L,t.width=Math.floor(M*te),t.height=Math.floor(L*te),q===!0&&(t.style.width=M+"px",t.style.height=L+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(et*te,Z*te).floor()},this.setDrawingBufferSize=function(M,L,q){et=M,Z=L,te=q,t.width=Math.floor(M*q),t.height=Math.floor(L*q),this.setViewport(0,0,M,L)},this.setEffects=function(M){if(y===nn){Fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let L=0;L<M.length;L++)if(M[L].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(se)},this.getViewport=function(M){return M.copy(_e)},this.setViewport=function(M,L,q,z){M.isVector4?_e.set(M.x,M.y,M.z,M.w):_e.set(M,L,q,z),x.viewport(se.copy(_e).multiplyScalar(te).round())},this.getScissor=function(M){return M.copy(We)},this.setScissor=function(M,L,q,z){M.isVector4?We.set(M.x,M.y,M.z,M.w):We.set(M,L,q,z),x.scissor(De.copy(We).multiplyScalar(te).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(M){x.setScissorTest(It=M)},this.setOpaqueSort=function(M){ve=M},this.setTransparentSort=function(M){ze=M},this.getClearColor=function(M){return M.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(M=!0,L=!0,q=!0){let z=0;if(M){let H=!1;if(ee!==null){let me=ee.texture.format;H=m.has(me)}if(H){let me=ee.texture.type,xe=g.has(me),pe=He.getClearColor(),be=He.getClearAlpha(),we=pe.r,Ve=pe.g,Xe=pe.b;xe?(w[0]=we,w[1]=Ve,w[2]=Xe,w[3]=be,F.clearBufferuiv(F.COLOR,0,w)):(T[0]=we,T[1]=Ve,T[2]=Xe,T[3]=be,F.clearBufferiv(F.COLOR,0,T))}else z|=F.COLOR_BUFFER_BIT}L&&(z|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&F.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),k=M},this.dispose=function(){t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",gn,!1),He.dispose(),de.dispose(),ce.dispose(),W.dispose(),ae.dispose(),Q.dispose(),ge.dispose(),ie.dispose(),le.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Bc),Se.removeEventListener("sessionend",zc),Si.stop()};function dt(M){M.preventDefault(),tc("WebGLRenderer: Context Lost."),U=!0}function nt(){tc("WebGLRenderer: Context Restored."),U=!1;let M=O.autoReset,L=Ue.enabled,q=Ue.autoUpdate,z=Ue.needsUpdate,H=Ue.type;Re(),O.autoReset=M,Ue.enabled=L,Ue.autoUpdate=q,Ue.needsUpdate=z,Ue.type=H}function gn(M){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Pn(M){let L=M.target;L.removeEventListener("dispose",Pn),Qu(L)}function Qu(M){ed(M),W.remove(M)}function ed(M){let L=W.get(M).programs;L!==void 0&&(L.forEach(function(q){le.releaseProgram(q)}),M.isShaderMaterial&&le.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,q,z,H,me){L===null&&(L=Kt);let xe=H.isMesh&&H.matrixWorld.determinantAffine()<0,pe=id(M,L,q,z,H);x.setMaterial(z,xe);let be=q.index,we=1;if(z.wireframe===!0){if(be=J.getWireframeAttribute(q),be===void 0)return;we=2}let Ve=q.drawRange,Xe=q.attributes.position,Me=Ve.start*we,it=(Ve.start+Ve.count)*we;me!==null&&(Me=Math.max(Me,me.start*we),it=Math.min(it,(me.start+me.count)*we)),be!==null?(Me=Math.max(Me,0),it=Math.min(it,be.count)):Xe!=null&&(Me=Math.max(Me,0),it=Math.min(it,Xe.count));let At=it-Me;if(At<0||At===1/0)return;ge.setup(H,z,pe,q,be);let mt,ot=he;if(be!==null&&(mt=oe.get(be),ot=j,ot.setIndex(mt)),H.isMesh)z.wireframe===!0?(x.setLineWidth(z.wireframeLinewidth*Et()),ot.setMode(F.LINES)):ot.setMode(F.TRIANGLES);else if(H.isLine){let Wt=z.linewidth;Wt===void 0&&(Wt=1),x.setLineWidth(Wt*Et()),H.isLineSegments?ot.setMode(F.LINES):H.isLineLoop?ot.setMode(F.LINE_LOOP):ot.setMode(F.LINE_STRIP)}else H.isPoints?ot.setMode(F.POINTS):H.isSprite&&ot.setMode(F.TRIANGLES);if(H.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))ot.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Wt=H._multiDrawStarts,ye=H._multiDrawCounts,Yt=H._multiDrawCount,je=be?oe.get(be).bytesPerElement:1,un=W.get(z).currentProgram.getUniforms();for(let In=0;In<Yt;In++)un.setValue(F,"_gl_DrawID",In),ot.render(Wt[In]/je,ye[In])}else if(H.isInstancedMesh)ot.renderInstances(Me,At,H.count);else if(q.isInstancedBufferGeometry){let Wt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ye=Math.min(q.instanceCount,Wt);ot.renderInstances(Me,At,ye)}else ot.render(Me,At)};function Oc(M,L,q,z){k!==null&&M.isNodeMaterial&&k.setObject(z,M),Qe===!0&&Ae.setState(M,q,!1),M.transparent===!0&&M.side===pn&&M.forceSinglePass===!1?(M.side=Jt,M.needsUpdate=!0,Tr(M,L,z),M.side=pi,M.needsUpdate=!0,Tr(M,L,z),M.side=pn):Tr(M,L,z)}this.compile=function(M,L,q=null){q===null&&(q=M),k!==null&&k.renderStart(M,L,q),b=ce.get(q),b.init(L),_.push(b),q.traverseVisible(function(H){H.isLight&&H.layers.test(L.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),M!==q&&M.traverseVisible(function(H){H.isLight&&H.layers.test(L.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),b.setupLights(),k!==null&&k.updateLights(b.state.lightsArray),ut=this.localClippingEnabled,Qe=Ae.init(this.clippingPlanes,ut),Qe===!0&&Ae.setGlobalState(this.clippingPlanes,L),k!==null&&Ue.render(b.state.shadowsArray,q,L);let z=new Set;return M.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let me=H.material;if(me)if(Array.isArray(me))for(let xe=0;xe<me.length;xe++){let pe=me[xe];Oc(pe,q,L,H),z.add(pe)}else Oc(me,q,L,H),z.add(me)}),b=_.pop(),k!==null&&k.renderEnd(),z},this.compileAsync=function(M,L,q=null){let z=this.compile(M,L,q);return new Promise(H=>{function me(){if(z.forEach(function(xe){let be=W.get(xe).currentProgram;(be===void 0||be.isReady())&&z.delete(xe)}),z.size===0){H(M);return}setTimeout(me,10)}rt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Jo=null;function td(M){Jo&&Jo(M)}function Bc(){Si.stop()}function zc(){Si.start()}let Si=new Iu;Si.setAnimationLoop(td),typeof self!="undefined"&&Si.setContext(self),this.setAnimationLoop=function(M){Jo=M,Se.setAnimationLoop(M),M===null?Si.stop():Si.start()},Se.addEventListener("sessionstart",Bc),Se.addEventListener("sessionend",zc),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;k!==null&&k.renderStart(M,L);let q=Se.enabled===!0&&Se.isPresenting===!0,z=E!==null&&(ee===null||q)&&E.begin(R,ee);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(L),L=Se.getCamera()),M.isScene===!0&&M.onBeforeRender(R,M,L,ee),b=ce.get(M,_.length),b.init(L),b.state.textureUnits=$.getTextureUnits(),_.push(b),Ye.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),qe.setFromProjectionMatrix(Ye,bn,L.reversedDepth),ut=this.localClippingEnabled,Qe=Ae.init(this.clippingPlanes,ut),S=de.get(M,A.length),S.init(),A.push(S),Se.enabled===!0&&Se.isPresenting===!0){let xe=R.xr.getDepthSensingMesh();xe!==null&&Ko(xe,L,-1/0,R.sortObjects)}Ko(M,L,0,R.sortObjects),S.finish(),k!==null&&k.updateLights(b.state.lightsArray),R.sortObjects===!0&&S.sort(ve,ze),Mt=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,Mt&&He.addToRenderList(S,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qe===!0&&Ae.beginShadows();let H=b.state.shadowsArray;if(Ue.render(H,M,L),Qe===!0&&Ae.endShadows(),(z&&E.hasRenderPass())===!1){let xe=S.opaque,pe=S.transmissive;if(b.setupLights(),L.isArrayCamera){let be=L.cameras;if(pe.length>0)for(let we=0,Ve=be.length;we<Ve;we++){let Xe=be[we];Vc(xe,pe,M,Xe)}Mt&&He.render(M);for(let we=0,Ve=be.length;we<Ve;we++){let Xe=be[we];Hc(S,M,Xe,Xe.viewport)}}else pe.length>0&&Vc(xe,pe,M,L),Mt&&He.render(M),Hc(S,M,L)}ee!==null&&G===0&&($.updateMultisampleRenderTarget(ee),$.updateRenderTargetMipmap(ee)),z&&E.end(R),M.isScene===!0&&M.onAfterRender(R,M,L),ge.resetDefaultState(),X=-1,K=null,_.pop(),_.length>0?(b=_[_.length-1],$.setTextureUnits(b.state.textureUnits),Qe===!0&&Ae.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,k!==null&&k.renderEnd()};function Ko(M,L,q,z){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLightProbeGrid)b.pushLightProbeGrid(M);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(qe)){z&&Ft.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ye);let xe=Q.update(M),pe=M.material;pe.visible&&S.push(M,xe,pe,q,Ft.z,null,L)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(qe))){let xe=Q.update(M),pe=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ft.copy(M.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ft.copy(xe.boundingSphere.center)),Ft.applyMatrix4(M.matrixWorld).applyMatrix4(Ye)),Array.isArray(pe)){let be=xe.groups;for(let we=0,Ve=be.length;we<Ve;we++){let Xe=be[we],Me=pe[Xe.materialIndex];Me&&Me.visible&&S.push(M,xe,Me,q,Ft.z,Xe,L)}}else pe.visible&&S.push(M,xe,pe,q,Ft.z,null,L)}}let me=M.children;for(let xe=0,pe=me.length;xe<pe;xe++)Ko(me[xe],L,q,z)}function Hc(M,L,q,z){let{opaque:H,transmissive:me,transparent:xe}=M;b.setupLightsView(q),Qe===!0&&Ae.setGlobalState(R.clippingPlanes,q),z&&x.viewport(se.copy(z)),H.length>0&&wr(H,L,q),me.length>0&&wr(me,L,q),xe.length>0&&wr(xe,L,q),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Vc(M,L,q,z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[z.id]===void 0){let Me=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[z.id]=new en(1,1,{generateMipmaps:!0,type:Me?En:nn,minFilter:gi,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}let me=b.state.transmissionRenderTarget[z.id],xe=z.viewport||se;me.setSize(xe.z*R.transmissionResolutionScale,xe.w*R.transmissionResolutionScale);let pe=R.getRenderTarget(),be=R.getActiveCubeFace(),we=R.getActiveMipmapLevel();R.setRenderTarget(me),R.getClearColor(ht),Ke=R.getClearAlpha(),Ke<1&&R.setClearColor(16777215,.5),R.clear(),Mt&&He.render(q);let Ve=R.toneMapping;R.toneMapping=Sn;let Xe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),b.setupLightsView(z),Qe===!0&&Ae.setGlobalState(R.clippingPlanes,z),wr(M,q,z),$.updateMultisampleRenderTarget(me),$.updateRenderTargetMipmap(me),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let it=0,At=L.length;it<At;it++){let mt=L[it],{object:ot,geometry:Wt,material:ye,group:Yt}=mt;if(ye.side===pn&&ot.layers.test(z.layers)){let je=ye.side;ye.side=Jt,ye.needsUpdate=!0,Gc(ot,q,z,Wt,ye,Yt),ye.side=je,ye.needsUpdate=!0,Me=!0}}Me===!0&&($.updateMultisampleRenderTarget(me),$.updateRenderTargetMipmap(me))}R.setRenderTarget(pe,be,we),R.setClearColor(ht,Ke),Xe!==void 0&&(z.viewport=Xe),R.toneMapping=Ve}function wr(M,L,q){let z=L.isScene===!0?L.overrideMaterial:null;for(let H=0,me=M.length;H<me;H++){let xe=M[H],{object:pe,geometry:be,group:we}=xe,Ve=xe.material;Ve.allowOverride===!0&&z!==null&&(Ve=z),pe.layers.test(q.layers)&&Gc(pe,L,q,be,Ve,we)}}function Gc(M,L,q,z,H,me){k!==null&&H.isNodeMaterial&&k.setObject(M,H),M.onBeforeRender(R,L,q,z,H,me),M.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(R,L,q,z,M,me),H.transparent===!0&&H.side===pn&&H.forceSinglePass===!1?(H.side=Jt,H.needsUpdate=!0,R.renderBufferDirect(q,L,z,H,M,me),H.side=pi,H.needsUpdate=!0,R.renderBufferDirect(q,L,z,H,M,me),H.side=pn):R.renderBufferDirect(q,L,z,H,M,me),M.onAfterRender(R,L,q,z,H,me)}function Tr(M,L,q){L.isScene!==!0&&(L=Kt);let z=W.get(M),H=b.state.lights,me=b.state.shadowsArray,xe=H.state.version,pe=le.getParameters(M,H.state,me,L,q,b.state.lightProbeGridArray),be=le.getProgramCacheKey(pe),we=z.programs;z.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?L.environment:null,z.fog=L.fog;let Ve=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;z.envMap=ae.get(M.envMap||z.environment,Ve),z.envMapRotation=z.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,we===void 0&&(M.addEventListener("dispose",Pn),we=new Map,z.programs=we);let Xe=we.get(be);if(Xe!==void 0){if(z.currentProgram===Xe&&z.lightsStateVersion===xe)return qc(M,pe),Xe}else pe.uniforms=le.getUniforms(M),k!==null&&M.isNodeMaterial&&k.build(M,q,pe),M.onBeforeCompile(pe,R),Xe=le.acquireProgram(pe,be),we.set(be,Xe),z.uniforms=pe.uniforms;let Me=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Me.clippingPlanes=Ae.uniform),qc(M,pe),z.needsLights=rd(M),z.lightsStateVersion=xe,z.needsLights&&(Me.ambientLightColor.value=H.state.ambient,Me.lightProbe.value=H.state.probe,Me.sunLights.value=H.state.sun,Me.sunLightShadows.value=H.state.sunShadow,Me.directionalLights.value=H.state.directional,Me.directionalLightShadows.value=H.state.directionalShadow,Me.spotLights.value=H.state.spot,Me.spotLightShadows.value=H.state.spotShadow,Me.rectAreaLights.value=H.state.rectArea,Me.ltc_1.value=H.state.rectAreaLTC1,Me.ltc_2.value=H.state.rectAreaLTC2,Me.pointLights.value=H.state.point,Me.pointLightShadows.value=H.state.pointShadow,Me.hemisphereLights.value=H.state.hemi,Me.sunShadowMatrix.value=H.state.sunShadowMatrix,Me.sunShadowCascade.value=H.state.sunShadowCascade,Me.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Me.spotLightMatrix.value=H.state.spotLightMatrix,Me.spotLightMap.value=H.state.spotLightMap,Me.pointShadowMatrix.value=H.state.pointShadowMatrix),z.lightProbeGrid=b.state.lightProbeGridArray.length>0,z.currentProgram=Xe,z.uniformsList=null,Xe}function Wc(M){if(M.uniformsList===null){let L=M.currentProgram.getUniforms();M.uniformsList=bs.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function qc(M,L){let q=W.get(M);q.outputColorSpace=L.outputColorSpace,q.batching=L.batching,q.batchingColor=L.batchingColor,q.instancing=L.instancing,q.instancingColor=L.instancingColor,q.instancingMorph=L.instancingMorph,q.skinning=L.skinning,q.morphTargets=L.morphTargets,q.morphNormals=L.morphNormals,q.morphColors=L.morphColors,q.morphTargetsCount=L.morphTargetsCount,q.numClippingPlanes=L.numClippingPlanes,q.numIntersection=L.numClipIntersection,q.vertexAlphas=L.vertexAlphas,q.vertexTangents=L.vertexTangents,q.toneMapping=L.toneMapping}function nd(M,L){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;v.setFromMatrixPosition(L.matrixWorld);for(let q=0,z=M.length;q<z;q++){let H=M[q];if(H.texture!==null&&H.boundingBox.containsPoint(v))return H}return null}function id(M,L,q,z,H){L.isScene!==!0&&(L=Kt),$.resetTextureUnits();let me=L.fog,xe=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?L.environment:null,pe=ee===null?R.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ze.workingColorSpace,be=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,we=ae.get(z.envMap||xe,be),Ve=z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Xe=!!q.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Me=!!q.morphAttributes.position,it=!!q.morphAttributes.normal,At=!!q.morphAttributes.color,mt=Sn;z.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(mt=R.toneMapping);let ot=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Wt=ot!==void 0?ot.length:0,ye=W.get(z),Yt=b.state.lights;if(Qe===!0&&(ut===!0||M!==K)){let ft=M===K&&z.id===X;Ae.setState(z,M,ft)}let je=!1;z.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Yt.state.version||ye.outputColorSpace!==pe||H.isBatchedMesh&&ye.batching===!1||!H.isBatchedMesh&&ye.batching===!0||H.isBatchedMesh&&ye.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&ye.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&ye.instancing===!1||!H.isInstancedMesh&&ye.instancing===!0||H.isSkinnedMesh&&ye.skinning===!1||!H.isSkinnedMesh&&ye.skinning===!0||H.isInstancedMesh&&ye.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ye.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ye.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ye.instancingMorph===!1&&H.morphTexture!==null||ye.envMap!==we||z.fog===!0&&ye.fog!==me||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Ae.numPlanes||ye.numIntersection!==Ae.numIntersection)||ye.vertexAlphas!==Ve||ye.vertexTangents!==Xe||ye.morphTargets!==Me||ye.morphNormals!==it||ye.morphColors!==At||ye.toneMapping!==mt||ye.morphTargetsCount!==Wt||!!ye.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(je=!0):(je=!0,ye.__version=z.version);let un=ye.currentProgram;je===!0&&(un=Tr(z,L,H),k&&z.isNodeMaterial&&k.onUpdateProgram(z,un,ye));let In=!1,jn=!1,Bi=!1,at=un.getUniforms(),Tt=ye.uniforms;if(x.useProgram(un.program)&&(In=!0,jn=!0,Bi=!0),z.id!==X&&(X=z.id,jn=!0),ye.needsLights){let ft=nd(b.state.lightProbeGridArray,H);ye.lightProbeGrid!==ft&&(ye.lightProbeGrid=ft,jn=!0)}if(In||K!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),at.setValue(F,"projectionMatrix",M.projectionMatrix),at.setValue(F,"viewMatrix",M.matrixWorldInverse);let ei=at.map.cameraPosition;ei!==void 0&&ei.setValue(F,_t.setFromMatrixPosition(M.matrixWorld)),C.logarithmicDepthBuffer&&at.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&at.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),K!==M&&(K=M,jn=!0,Bi=!0)}if(ye.needsLights&&(Yt.state.sunShadowMap.length>0&&at.setValue(F,"sunShadowMap",Yt.state.sunShadowMap,$),Yt.state.directionalShadowMap.length>0&&at.setValue(F,"directionalShadowMap",Yt.state.directionalShadowMap,$),Yt.state.spotShadowMap.length>0&&at.setValue(F,"spotShadowMap",Yt.state.spotShadowMap,$),Yt.state.pointShadowMap.length>0&&at.setValue(F,"pointShadowMap",Yt.state.pointShadowMap,$)),H.isSkinnedMesh){at.setOptional(F,H,"bindMatrix"),at.setOptional(F,H,"bindMatrixInverse");let ft=H.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),at.setValue(F,"boneTexture",ft.boneTexture,$))}H.isBatchedMesh&&(at.setOptional(F,H,"batchingTexture"),at.setValue(F,"batchingTexture",H._matricesTexture,$),at.setOptional(F,H,"batchingIdTexture"),at.setValue(F,"batchingIdTexture",H._indirectTexture,$),at.setOptional(F,H,"batchingColorTexture"),H._colorsTexture!==null&&at.setValue(F,"batchingColorTexture",H._colorsTexture,$));let Qn=q.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0)&&N.update(H,q,un),(jn||ye.receiveShadow!==H.receiveShadow)&&(ye.receiveShadow=H.receiveShadow,at.setValue(F,"receiveShadow",H.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&L.environment!==null&&(Tt.envMapIntensity.value=L.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=Bg()),jn){if(at.setValue(F,"toneMappingExposure",R.toneMappingExposure),ye.needsLights&&sd(Tt,Bi),me&&z.fog===!0&&Ee.refreshFogUniforms(Tt,me),Ee.refreshMaterialUniforms(Tt,z,te,Z,b.state.transmissionRenderTarget[M.id]),ye.needsLights&&ye.lightProbeGrid){let ft=ye.lightProbeGrid;Tt.probesSH.value=ft.texture,Tt.probesMin.value.copy(ft.boundingBox.min),Tt.probesMax.value.copy(ft.boundingBox.max),Tt.probesResolution.value.copy(ft.resolution)}bs.upload(F,Wc(ye),Tt,$)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(bs.upload(F,Wc(ye),Tt,$),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&at.setValue(F,"center",H.center),at.setValue(F,"modelViewMatrix",H.modelViewMatrix),at.setValue(F,"normalMatrix",H.normalMatrix),at.setValue(F,"modelMatrix",H.matrixWorld),z.uniformsGroups!==void 0){let ft=z.uniformsGroups;for(let ei=0,zi=ft.length;ei<zi;ei++){let $c=ft[ei];ie.update($c,un),ie.bind($c,un)}}return un}function sd(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.sunLights.needsUpdate=L,M.sunLightShadows.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function rd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(M,L,q){let z=W.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),W.get(M.texture).__webglTexture=L,W.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:q,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,L){let q=W.get(M);q.__webglFramebuffer=L,q.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,q=0){ee=M,B=L,G=q;let z=null,H=!1,me=!1;if(M){let pe=W.get(M);if(pe.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(F.FRAMEBUFFER,pe.__webglFramebuffer),se.copy(M.viewport),De.copy(M.scissor),Ce=M.scissorTest,x.viewport(se),x.scissor(De),x.setScissorTest(Ce),X=-1;return}else if(pe.__webglFramebuffer===void 0)$.setupRenderTarget(M);else if(pe.__hasExternalTextures)$.rebindTextures(M,W.get(M.texture).__webglTexture,W.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ve=M.depthTexture;if(pe.__boundDepthTexture!==Ve){if(Ve!==null&&W.has(Ve)&&(M.width!==Ve.image.width||M.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(M)}}let be=M.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(me=!0);let we=W.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(we[L])?z=we[L][q]:z=we[L],H=!0):M.samples>0&&$.useMultisampledRTT(M)===!1?z=W.get(M).__webglMultisampledFramebuffer:Array.isArray(we)?z=we[q]:z=we,se.copy(M.viewport),De.copy(M.scissor),Ce=M.scissorTest}else se.copy(_e).multiplyScalar(te).floor(),De.copy(We).multiplyScalar(te).floor(),Ce=It;if(q!==0&&(z=V),x.bindFramebuffer(F.FRAMEBUFFER,z)&&x.drawBuffers(M,z),x.viewport(se),x.scissor(De),x.setScissorTest(Ce),H){let pe=W.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+L,pe.__webglTexture,q)}else if(me){let pe=L;for(let be=0;be<M.textures.length;be++){let we=W.get(M.textures[be]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+be,we.__webglTexture,q,pe)}}else if(M!==null&&q!==0){let pe=W.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pe.__webglTexture,q)}X=-1};function Xc(M){let L=W.get(M);return(L.__readFormat!==M.format||L.__readType!==M.type)&&(L.__readFormat=M.format,L.__readType=M.type,L.__formatReadable=C.textureFormatReadable(M.format),L.__typeReadable=C.textureTypeReadable(M.type)),L}this.readRenderTargetPixels=function(M,L,q,z,H,me,xe,pe=0){if(!(M&&M.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=W.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be){x.bindFramebuffer(F.FRAMEBUFFER,be);try{let we=M.textures[pe],Ve=we.format,Xe=we.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+pe);let Me=Xc(we);if(Me.__formatReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Me.__typeReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-z&&q>=0&&q<=M.height-H&&F.readPixels(L,q,z,H,ue.convert(Ve),ue.convert(Xe),me)}finally{let we=ee!==null?W.get(ee).__webglFramebuffer:null;x.bindFramebuffer(F.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(M,L,q,z,H,me,xe,pe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=W.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be)if(L>=0&&L<=M.width-z&&q>=0&&q<=M.height-H){x.bindFramebuffer(F.FRAMEBUFFER,be);let we=M.textures[pe],Ve=we.format,Xe=we.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+pe);let Me=Xc(we);if(Me.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Me.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let it=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,it),F.bufferData(F.PIXEL_PACK_BUFFER,me.byteLength,F.STREAM_READ),F.readPixels(L,q,z,H,ue.convert(Ve),ue.convert(Xe),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let At=ee!==null?W.get(ee).__webglFramebuffer:null;x.bindFramebuffer(F.FRAMEBUFFER,At);let mt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await su(F,mt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,it),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,me),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(it),F.deleteSync(mt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,L=null,q=0){let z=Math.pow(2,-q),H=Math.floor(M.image.width*z),me=Math.floor(M.image.height*z),xe=L!==null?L.x:0,pe=L!==null?L.y:0;$.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,xe,pe,H,me),x.unbindTexture()},this.copyTextureToTexture=function(M,L,q=null,z=null,H=0,me=0){let xe,pe,be,we,Ve,Xe,Me,it,At,mt=M.isCompressedTexture?M.mipmaps[me]:M.image;if(q!==null)xe=q.max.x-q.min.x,pe=q.max.y-q.min.y,be=q.isBox3?q.max.z-q.min.z:1,we=q.min.x,Ve=q.min.y,Xe=q.isBox3?q.min.z:0;else{let Tt=Math.pow(2,-H);xe=Math.floor(mt.width*Tt),pe=Math.floor(mt.height*Tt),M.isDataArrayTexture?be=mt.depth:M.isData3DTexture?be=Math.floor(mt.depth*Tt):be=1,we=0,Ve=0,Xe=0}z!==null?(Me=z.x,it=z.y,At=z.z):(Me=0,it=0,At=0);let ot=ue.convert(L.format),Wt=ue.convert(L.type),ye;L.isData3DTexture?($.setTexture3D(L,0),ye=F.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?($.setTexture2DArray(L,0),ye=F.TEXTURE_2D_ARRAY):($.setTexture2D(L,0),ye=F.TEXTURE_2D),x.activeTexture(F.TEXTURE0),x.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,L.flipY),x.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),x.pixelStorei(F.UNPACK_ALIGNMENT,L.unpackAlignment);let Yt=x.getParameter(F.UNPACK_ROW_LENGTH),je=x.getParameter(F.UNPACK_IMAGE_HEIGHT),un=x.getParameter(F.UNPACK_SKIP_PIXELS),In=x.getParameter(F.UNPACK_SKIP_ROWS),jn=x.getParameter(F.UNPACK_SKIP_IMAGES);x.pixelStorei(F.UNPACK_ROW_LENGTH,mt.width),x.pixelStorei(F.UNPACK_IMAGE_HEIGHT,mt.height),x.pixelStorei(F.UNPACK_SKIP_PIXELS,we),x.pixelStorei(F.UNPACK_SKIP_ROWS,Ve),x.pixelStorei(F.UNPACK_SKIP_IMAGES,Xe);let Bi=M.isDataArrayTexture||M.isData3DTexture,at=L.isDataArrayTexture||L.isData3DTexture;if(M.isDepthTexture){let Tt=W.get(M),Qn=W.get(L),ft=W.get(Tt.__renderTarget),ei=W.get(Qn.__renderTarget);x.bindFramebuffer(F.READ_FRAMEBUFFER,ft.__webglFramebuffer),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let zi=0;zi<be;zi++)Bi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(M).__webglTexture,H,Xe+zi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(L).__webglTexture,me,At+zi)),F.blitFramebuffer(we,Ve,xe,pe,Me,it,xe,pe,F.DEPTH_BUFFER_BIT,F.NEAREST);x.bindFramebuffer(F.READ_FRAMEBUFFER,null),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(H!==0||M.isRenderTargetTexture||W.has(M)){let Tt=W.get(M),Qn=W.get(L);x.bindFramebuffer(F.READ_FRAMEBUFFER,D),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,I);for(let ft=0;ft<be;ft++)Bi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Tt.__webglTexture,H,Xe+ft):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Tt.__webglTexture,H),at?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Qn.__webglTexture,me,At+ft):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Qn.__webglTexture,me),H!==0?F.blitFramebuffer(we,Ve,xe,pe,Me,it,xe,pe,F.COLOR_BUFFER_BIT,F.NEAREST):at?F.copyTexSubImage3D(ye,me,Me,it,At+ft,we,Ve,xe,pe):F.copyTexSubImage2D(ye,me,Me,it,we,Ve,xe,pe);x.bindFramebuffer(F.READ_FRAMEBUFFER,null),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else at?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(ye,me,Me,it,At,xe,pe,be,ot,Wt,mt.data):L.isCompressedArrayTexture?F.compressedTexSubImage3D(ye,me,Me,it,At,xe,pe,be,ot,mt.data):F.texSubImage3D(ye,me,Me,it,At,xe,pe,be,ot,Wt,mt):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,me,Me,it,xe,pe,ot,Wt,mt.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,me,Me,it,mt.width,mt.height,ot,mt.data):F.texSubImage2D(F.TEXTURE_2D,me,Me,it,xe,pe,ot,Wt,mt);x.pixelStorei(F.UNPACK_ROW_LENGTH,Yt),x.pixelStorei(F.UNPACK_IMAGE_HEIGHT,je),x.pixelStorei(F.UNPACK_SKIP_PIXELS,un),x.pixelStorei(F.UNPACK_SKIP_ROWS,In),x.pixelStorei(F.UNPACK_SKIP_IMAGES,jn),me===0&&L.generateMipmaps&&F.generateMipmap(ye),x.unbindTexture()},this.initRenderTarget=function(M){W.get(M).__webglFramebuffer===void 0&&$.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?$.setTextureCube(M,0):M.isData3DTexture?$.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?$.setTexture2DArray(M,0):$.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){B=0,G=0,ee=null,x.reset(),ge.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};var Ou=new P(0,1,0),Hg=15657958,Vg=14473426,Bu=12433843,zu=723725,Cc=14885916,No=1,cn=()=>(No=No*16807%2147483647,(No-1)/2147483646),vt=(i,e)=>i+(e-i)*cn();var Y={};function Gg(){Y.world=new tn({color:Hg,flatShading:!0}),Y.world2=new tn({color:Vg,flatShading:!0}),Y.grey=new tn({color:Bu,flatShading:!0}),Y.dark=new tn({color:9407108,flatShading:!0}),Y.line=new Rt({color:16777215}),Y.glass=new tn({color:16777215,transparent:!0,opacity:.18,depthWrite:!1}),Y.light=new Rt({color:16777215}),Y.redProp=new hi({color:Cc,flatShading:!0,roughness:.4,emissive:3801088}),Y.inkProp=new hi({color:zu,flatShading:!0,roughness:.16,metalness:.3})}var Wg=()=>new hi({color:Cc,flatShading:!0,roughness:.32,metalness:.05,emissive:2752512}),qg=()=>new hi({color:zu,flatShading:!0,roughness:.14,metalness:.35,emissive:0}),Xg=()=>new tn({color:Bu,flatShading:!0});function re(i,e,t,n=Y.world,s=0,r=0,a=0,o){let l=new Je(new ci(i,e,t),n);return l.position.set(s,r+e/2,a),o&&o.add(l),l}function pt(i,e,t,n,s=Y.world,r=0,a=0,o=0,l){let c=new Je(new Mn(i,e,t,n),s);return c.position.set(r,a+t/2,o),l&&l.add(c),c}function Ac(i,{w:e=512,h:t=256,bg:n="#f4f2ee",fg:s="#0b0b0d",size:r=80,font:a="800 {s}px Archivo, Arial, sans-serif",align:o="center"}={}){let l=document.createElement("canvas");l.width=e,l.height=t;let c=l.getContext("2d");c.fillStyle=n,c.fillRect(0,0,e,t),c.fillStyle=s,c.textAlign=o,c.textBaseline="middle";let d=Array.isArray(i)?i:[i];d.forEach((h,f)=>{let p=typeof h=="object"?h.s:r,y=typeof h=="object"?h.t:h;c.font=a.replace("{s}",p),typeof h=="object"&&h.c?c.fillStyle=h.c:c.fillStyle=s,c.fillText(y,o==="center"?e/2:30,t/2+(f-(d.length-1)/2)*p*1.15)});let u=new ls(l);return u.colorSpace=Bt,u.anisotropy=4,u}function sn(i,e,t,n,s,r,a,o={}){let l=Ac(i,{w:Math.round(256*e/t)*2,h:256,size:110,...o}),c=new Je(new Bn(e,t),new Rt({map:l,toneMapped:!1}));return c.position.set(n,s,r),o.ry&&(c.rotation.y=o.ry),a.add(c),c}function Uo(i="grey",{h:e=1.72,sit:t=!1,kid:n=!1,arms:s="down"}={}){let r=new lt,a=i==="red"?Wg():i==="ink"?qg():Xg(),o=n?.72:e/1.72,l=new lt;r.add(l);let c=t?.45:0,d=new Mn(.075,.06,.85,5);for(let T of[-.1,.1]){let v=new Je(d,a);if(t){v.rotation.x=Math.PI/2,v.position.set(T,.47,.25);let S=new Je(d,a);S.scale.y=.55,S.position.set(T,.23,.62),l.add(S)}else v.position.set(T,.43,0);l.add(v)}let u=new Je(new Mn(.19,.17,.2,6),a);u.position.y=c+.92-(t?.45:0),l.add(u);let h=new Je(new Mn(.25,.18,.62,6),a);h.position.y=u.position.y+.4,l.add(h);let f=new Mn(.055,.045,.62,5),p=new Je(f,a),y=new Je(f,a);p.position.set(-.31,h.position.y-.02,0),y.position.set(.31,h.position.y-.02,0),p.rotation.z=.12,y.rotation.z=-.12,s==="desk"&&(p.rotation.x=y.rotation.x=-1.1,p.position.z=y.position.z=.2),l.add(p,y);let m=new lt;m.position.y=h.position.y+.47,l.add(m);let g=new Je(new Li(.15,0),a);g.scale.set(1,1.18,1.05),m.add(g);let w=new Je(new Mn(.06,.07,.12,5),a);return w.position.y=h.position.y+.34,l.add(w),r.scale.setScalar(o),r.userData={mat:a,head:m,armL:p,armR:y,body:l,kind:i,baseY:0,phase:cn()*10,talk:0,talking:!1},r}var Fo=class{constructor(e){this.canvas=e,this.renderer=new Io({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),this.renderer.outputColorSpace=Bt,this.scene=new Hs,this.bg=new Be(15921130),this.scene.background=this.bg,this.scene.fog=new zs(15921130,18,95),this.camera=new zt(56,1,.05,400),this.camera.position.set(0,3,10),Gg();let t=new js(16777215,13617344,1.55);this.scene.add(t);let n=new ps(16777215,1.55);n.position.set(8,16,9),this.scene.add(n);let s=new ps(16777215,.7);s.position.set(-10,6,-8),this.scene.add(s),this.hemi=t,this.sun=n,this.flashLight=new ds(16777215,0,60),this.scene.add(this.flashLight),this.root=new lt,this.scene.add(this.root),this.actors={},this.walkers=[],this.updaters=[],this.rings=[],this.mouse={x:0,y:0,sx:0,sy:0},this.shot={p:new P(0,3,10),l:new P(0,1.5,0)},this.cur={p:this.shot.p.clone(),l:this.shot.l.clone()},this.fly=null,this.t=0,this.push=0,this.shake=0,this.ringGeo=new hs(.2,.235,28),this.look={yaw:0,pitch:0,ty:0,tp:0},this.drag=null;let r=.62,a=.3,o=(c,d)=>Math.max(-d,Math.min(d,c));window.addEventListener("pointermove",c=>{if(this.drag&&c.pointerId===this.drag.id){this.look.ty=o(this.drag.y0+(c.clientX-this.drag.x)*.006,r),this.look.tp=o(this.drag.p0+(c.clientY-this.drag.yy)*.005,a);return}if(c.pointerType!=="mouse"||c.target!==e)return;let d=c.clientX/window.innerWidth*2-1,u=c.clientY/window.innerHeight*2-1,h=f=>Math.sign(f)*Math.min(1,Math.abs(f)*1.15);this.look.ty=h(d)*r,this.look.tp=-h(u)*a}),e.addEventListener("pointerdown",c=>{c.pointerType!=="mouse"&&(this.drag={id:c.pointerId,x:c.clientX,yy:c.clientY,y0:this.look.ty,p0:this.look.tp})}),window.addEventListener("pointerup",c=>{this.drag&&c.pointerId===this.drag.id&&(this.drag=null)}),window.addEventListener("pointercancel",()=>{this.drag=null}),this.fov=44,this.fovT=44,this.resize(),window.addEventListener("resize",()=>this.resize()),this.last=performance.now(),this.slow=matchMedia("(prefers-reduced-motion: reduce)").matches;let l=()=>{this.frame(),this.raf=requestAnimationFrame(l)};l()}resize(){let e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.portrait=e/t<.8,this.camera.updateProjectionMatrix()}clear(){this.root.traverse(e=>{if(e.isMesh){e.geometry.dispose();let t=e.material;t&&t.map&&t.map.dispose()}}),this.scene.remove(this.root),this.root=new lt,this.scene.add(this.root),this.actors={},this.walkers=[],this.updaters=[],this.rings.forEach(e=>e.parent&&e.parent.remove(e)),this.rings=[],this.setWeather(0)}load(e){this.clear(),No=11+e.length*7,this.levelId=e;let t=Hu[e];this.def=t(this,this.root),this.setShot("intro",0)}addActor(e,t){return(this.actors[e]=this.actors[e]||[]).push(t),t}setShot(e,t=2.4){this.shotName=e,this.zoomed=!1;let n=this.def.shots[e]||this.def.shots.listen;this.fovT=n.fov||(e==="intro"||e==="wrap"?50:44),this.look.ty=0,this.look.tp=0;let s=new P(...n.p),r=new P(...n.l),a=this.cur.p.distanceTo(s)>40;!t||this.slow?(this.cur.p.copy(s),this.cur.l.copy(r),this.fly=null):a?(this.onCut&&this.onCut(),this.fly=null,clearTimeout(this.cutT),this.cutT=setTimeout(()=>{this.cur.p.copy(s),this.cur.l.copy(r)},230)):this.fly={p0:this.cur.p.clone(),l0:this.cur.l.clone(),p:s,l:r,t:0,d:t},this.shot={p:s,l:r,orbit:n.orbit},this.def.onShot&&this.def.onShot(e)}setMode(e){this.def.setMode&&this.def.setMode(e)}setTalking(e,t){let n=this.actors[e];if(n)for(let s of n)s.userData.talking=t}flash(e=1){this.flashAmt=e}setWeather(e){this.weather=e,this.rain&&(this.rain.visible=e>0)}setPush(e){this.push=e}setZoomOut(e){let t=this.def.shots[this.shotName]||this.def.shots.intro,n=e?this.def.shots.overview||{p:t.p.map((s,r)=>t.l[r]+(s-t.l[r])*2.1+(r===1?4:0)),l:t.l}:t;this.zoomed=e,this.fly={p0:this.cur.p.clone(),l0:this.cur.l.clone(),p:new P(...n.p),l:new P(...n.l),t:0,d:2.2},this.shot={p:this.fly.p,l:this.fly.l},this.fovT=e?60:t.fov||50,this.def.onZoom&&this.def.onZoom(e)}ring(e,t){let n=new Je(this.ringGeo,new Rt({color:t,transparent:!0,opacity:.9,depthWrite:!1,side:pn})),s=new P;(e.userData.head||e).getWorldPosition(s),n.position.copy(s),n.userData.age=0,this.scene.add(n),this.rings.push(n)}frame(){let e=performance.now(),t=Math.min(.05,(e-this.last)/1e3);this.last=e,this.t+=t;let n=this.t;if(this.fly){this.fly.t+=t;let u=Math.min(1,this.fly.t/this.fly.d),h=u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2;this.cur.p.lerpVectors(this.fly.p0,this.fly.p,h),this.cur.l.lerpVectors(this.fly.l0,this.fly.l,h),u>=1&&(this.fly=null)}else if(this.shot.orbit){let u=this.shot.orbit,h=n*.05;this.cur.p.set(u[0]+Math.cos(h)*u[3],u[1],u[2]+Math.sin(h)*u[3])}let s=this.slow?0:1,r=this.slow?1:.045;this.look.yaw+=(this.look.ty-this.look.yaw)*r,this.look.pitch+=(this.look.tp-this.look.pitch)*r;let a=this.fovT+(this.portrait?14:0);Math.abs(this.camera.fov-a)>.01&&(this.camera.fov+=(a-this.camera.fov)*.05,this.camera.updateProjectionMatrix());let o=this.camera;o.position.copy(this.cur.p);let l=new P().subVectors(this.cur.l,this.cur.p);o.position.addScaledVector(l.normalize(),this.push*.9),o.position.x+=Math.sin(n*.31)*.05*s,o.position.y+=Math.sin(n*.47)*.035*s,this.shake>0&&(o.position.x+=(Math.random()-.5)*this.shake,o.position.y+=(Math.random()-.5)*this.shake,this.shake*=.9);let c=new P().subVectors(this.cur.l,this.cur.p).normalize();c.applyAxisAngle(Ou,-this.look.yaw);let d=new P().crossVectors(c,Ou).normalize();c.applyAxisAngle(d,this.look.pitch+Math.sin(n*.23)*.006*s),o.lookAt(o.position.clone().add(c)),this.flashAmt&&(this.flashLight.position.copy(o.position).add(new P(0,6,-4)),this.flashLight.intensity=this.flashAmt*900,this.flashAmt*=.86,this.flashAmt<.01&&(this.flashAmt=0,this.flashLight.intensity=0));for(let u in this.actors)for(let h of this.actors[u]){let f=h.userData;if(!f.mat)continue;f.talk+=((f.talking?1:0)-f.talk)*.18;let p=f.talk*(.55+.45*Math.sin(n*17+f.phase)*Math.sin(n*5.3));f.kind==="red"?f.mat.emissive.setRGB(.16+p*.55,p*.06,p*.02):f.kind==="ink"&&f.mat.emissive.setRGB(p*.07,p*.07,p*.08),f.head&&(f.head.rotation.x=-.05+Math.sin(n*9+f.phase)*.06*f.talk,f.head.rotation.y=(f.look||0)+Math.sin(n*.7+f.phase)*.15),f.talking&&(!f.nextRing||n>f.nextRing)&&(f.nextRing=n+.42,h.getWorldPosition(this._wp||(this._wp=new P)),this._wp.distanceTo(o.position)>2.6&&this.ring(h,f.kind==="red"?Cc:f.kind==="ink"?1118481:10066329)),f.armR&&f.talk>.05&&!f.fixedArms&&(f.armR.rotation.x=-.35*f.talk+Math.sin(n*3+f.phase)*.25*f.talk),f.bounce&&(h.position.y=f.baseY+Math.abs(Math.sin(n*5.2+f.phase))*f.bounce)}for(let u of this.rings){u.userData.age+=t;let h=u.userData.age/1.1;u.scale.setScalar(1+h*3.2),u.material.opacity=Math.max(0,.75*(1-h)),u.quaternion.copy(o.quaternion)}this.rings=this.rings.filter(u=>u.userData.age>1.1?(this.scene.remove(u),u.material.dispose(),!1):!0);for(let u of this.walkers){u.k+=t*u.v/u.len,u.k>1&&(u.k=0,[u.a,u.b]=[u.b,u.a],u.o.rotation.y=Math.atan2(u.b.x-u.a.x,u.b.z-u.a.z)),u.o.position.lerpVectors(u.a,u.b,u.k),u.o.position.y=Math.abs(Math.sin(this.t*7+u.o.userData.phase))*.04;let h=Math.sin(this.t*7+u.o.userData.phase)*.35;u.o.userData.armL.rotation.x=h,u.o.userData.armR.rotation.x=-h}for(let u of this.updaters)u(t,n);if(this.rain&&this.rain.visible){let u=this.rain.geometry.attributes.position,h=u.array;for(let f=0;f<h.length;f+=6)if(h[f+1]-=t*22,h[f+4]-=t*22,h[f+1]<0){let p=18+Math.random()*4;h[f+1]=p,h[f+4]=p-.5}u.needsUpdate=!0,this.rain.position.set(o.position.x,0,o.position.z)}this.renderer.render(this.scene,o)}crowd(e,t,n,{redShare:s=0,y:r=0}={}){for(let a=0;a<t;a++){let o=Uo(cn()<s?"red":"grey",{h:vt(1.55,1.85)}),l=new P(vt(n[0],n[1]),r,vt(n[2],n[3])),c=new P(vt(n[0],n[1]),r,vt(n[2],n[3]));o.position.copy(l),e.add(o),this.walkers.push({o,a:l,b:c,k:cn(),v:vt(.8,1.4),len:Math.max(2,l.distanceTo(c))}),o.rotation.y=Math.atan2(c.x-l.x,c.z-l.z)}}standing(e,t,n,s,r=0,a={}){let o=Uo(t,a);return o.position.set(n,a.y||0,s),o.rotation.y=r,o.userData.baseY=a.y||0,e.add(o),o}makeRain(){let t=new Float32Array(8400);for(let s=0;s<1400;s++){let r=(Math.random()-.5)*60,a=Math.random()*20,o=(Math.random()-.5)*60;t.set([r,a,o,r-.05,a-.5,o],s*6)}let n=new Lt;n.setAttribute("position",new Qt(t,3)),this.rain=new os(n,new Pi({color:10131088,transparent:!0,opacity:.55})),this.rain.visible=!1,this.scene.add(this.rain)}},Hu={mall(i,e){re(60,.2,50,Y.world,0,-.2,-2,e);let t=new tr(60,30,14078410,14867926);t.position.set(0,.01,-2),e.add(t);for(let[u,h]of[[4.6,1],[9.2,2]])re(40,.4,5,Y.world,0,u-.4,-15.5,e),re(5,.4,26,Y.world,-17.5,u-.4,-3,e),re(5,.4,26,Y.world,17.5,u-.4,-3,e),re(30,1.05,.08,Y.glass,0,u,-13,e),re(.08,1.05,26,Y.glass,-15,u,-3,e),re(.08,1.05,26,Y.glass,15,u,-3,e),re(30,.08,.1,Y.grey,0,u+1.05,-13,e),sn(`LEVEL ${h}`,3,.7,-8,u+1.8,-17.9,e,{size:120});re(44,14,.5,Y.world2,0,0,-18.3,e),re(.5,14,30,Y.world2,-20.2,0,-3,e),re(.5,14,30,Y.world2,20.2,0,-3,e);let n=new lt;e.add(n);for(let u=-3;u<=3;u++)re(.3,.3,30,Y.grey,u*6,13.6,-3,n);re(44,.1,30,new Rt({color:16777215}),0,14.2,-3,n);let s=[["PHARMACY",-14],["BAKERY",-8],["CARD SHOP",-2],["OPTOMETRIST",4],["TOY SHOP",10]];for(let[u,h]of s)re(5.2,3.6,.3,Y.glass,h,0,-17.6,e),re(5.6,.9,.5,Y.world,h,3.6,-17.8,e),sn(u,5,.75,h,4.05,-17.5,e,{size:118});for(let[u,h]of[["SPORTSWORLD",-6],["SHOE BARN",6]])sn(u,5,.75,h,8.6,-17.5,e,{size:118}),re(5.2,3.2,.3,Y.glass,h,4.6,-17.6,e);for(let[u,h]of[["CINEMA",-6],["BOOKSHOP",6]])sn(u,5,.75,h,13.1,-17.5,e,{size:118}),re(5.2,3.2,.3,Y.glass,h,9.2,-17.6,e);for(let u of[-10,10])for(let h of[-8,2]){pt(.45,.45,13.6,8,Y.world2,u,0,h,e);let f=re(.6,.9,.5,Y.inkProp.clone(),u,5.6,h+.5,e);f.userData={mat:f.material,kind:"ink",phase:cn()*6,talk:0},i.addActor("pa",f)}let r=new lt;r.position.set(12,0,-4),e.add(r);let a=re(1.8,.3,11,Y.world2,0,0,0,r);a.rotation.x=.43,a.position.y=2.3,re(.12,1,11.4,Y.glass,-.95,2.4,0,r).rotation.x=.43,re(.12,1,11.4,Y.glass,.95,2.4,0,r).rotation.x=.43,pt(2.6,2.8,.55,10,Y.world2,0,0,-5,e),pt(2.3,2.3,.1,10,Y.glass,0,.5,-5,e),pt(.35,.5,2.2,8,Y.world,0,0,-5,e);let o=[];for(let u=0;u<6;u++){let h=pt(.03,.12,1.6,5,Y.glass,Math.cos(u)*.9,.5,-5+Math.sin(u)*.9,e);o.push(h)}i.updaters.push((u,h)=>o.forEach((f,p)=>{f.scale.y=.8+Math.sin(h*4+p)*.2})),re(2.6,1.1,1,Y.world2,-4.8,0,-3.2,e),sn("INFORMATION",2.4,.4,-4.8,1.45,-2.68,e,{size:150}),i.standing(e,"grey",-4.2,-3.9,0,{kid:!0}),i.standing(e,"grey",-5.4,-3.95,.2),re(1.8,1.05,1.2,Y.world2,4.6,0,2.2,e),pt(.1,.1,1.2,6,Y.grey,4.6,1.05,2.2,e),re(2.2,.12,1.6,Y.world,4.6,2.2,2.2,e),i.addActor("seller",i.standing(e,"red",3.9,3.2,-.9)),re(6,1.1,1.2,Y.world2,12.5,0,6.5,e),sn("ORDER HERE",3.2,.55,12.5,3,5.4,e,{size:150}),sn([{t:"NOW SERVING",s:70},{t:"\u2014 \u2014",s:110}],2.2,1.1,15,2.6,5.4,e,{bg:"#0b0b0d",fg:"#f4f2ee"}),i.addActor("cashier",i.standing(e,"ink",12.2,7.3,Math.PI));for(let u=0;u<6;u++){let h=6+u%3*3.2,f=9.5+Math.floor(u/3)*3;pt(.7,.7,.08,10,Y.world,h,.75,f,e),pt(.07,.1,.75,6,Y.grey,h,0,f,e),cn()<.7&&i.standing(e,"grey",h-.8,f,Math.PI/2,{sit:!0})}for(let u=0;u<3;u++)i.standing(e,"grey",12.4+vt(-.2,.2),4.4+u*.85-3.2+3,Math.PI);let l=i.standing(e,"red",8.6,12.8,2.6,{h:1.66}),c=i.standing(e,"red",9.3,13.2,3.4,{h:1.84});i.addActor("coupleW",l),i.addActor("coupleM",c),i.crowd(e,26,[-14,14,-12,6],{redShare:.18});for(let u=0;u<4;u++){let h=vt(-12,8),f=vt(-11,4);i.standing(e,"red",h,f,.5).userData.talking=!0,i.standing(e,"red",h+.8,f+.3,-2.5)}let d=new lt;e.add(d),d.visible=!1;for(let u=0;u<16;u++){let h=u/16*Math.PI*2,f=4+u%2*1.4,p=i.standing(d,"red",Math.cos(h)*f,-5+Math.sin(h)*f,-h+Math.PI/2);p.userData.bounce=.35,p.userData.fixedArms=!0,p.userData.armL.rotation.z=2.6,p.userData.armR.rotation.z=-2.6}return{shots:{intro:{p:[0,9,17],l:[0,2,-6],orbit:null},overview:{p:[-26,24,36],l:[0,2,-5]},listen:{p:[.6,1.66,8.5],l:[-1.5,3.2,-6]},follow:{p:[2.2,1.66,6.2],l:[4.2,1.6,2.4]},twist:{p:[-9,6.3,-9.5],l:[0,.8,-4.5]},stay:{p:[11.8,1.66,11.8],l:[12.6,1.8,6]},wrap:{p:[0,12,14],l:[0,2,-5]}},onShot(u){d.visible=u==="twist",n.visible=!0},onZoom(u){n.visible=!u}}},park(i,e){re(220,.2,220,Y.world,0,-.2,0,e);let t=[[-4,1.5,-8],[6,3,-12],[16,12,-18],[22,22,-24],[26,22.5,-28],[30,14,-34],[26,3,-42],[10,6,-46],[-8,12,-44],[-20,5,-38],[-28,9,-26],[-22,3,-14],[-14,1.5,-8]],n=new Ii(t.map(b=>new P(...b)),!0,"catmullrom",.3),s=n.computeFrenetFrames(400,!0);for(let b of[-.55,.55]){let A=n.getSpacedPoints(400).map((E,R)=>E.clone().addScaledVector(s.binormals[R%400],b)),_=new Ii(A,!0);e.add(new Je(new Js(_,400,.1,5,!0),Y.inkProp))}for(let b=0;b<90;b++){let A=n.getPointAt(b/90);A.y>2&&pt(.12,.16,A.y-.2,5,Y.world2,A.x,0,A.z,e)}let r=new lt;e.add(r);let a=[];for(let b=0;b<4;b++){let A=new lt;re(1.5,.7,1.6,Y.world,0,0,0,A),re(1.5,.4,.2,Y.grey,0,.7,-.7,A);for(let _ of[-.35,.35]){let E=Uo("red",{sit:!0,h:1.6});E.position.set(_,.1,.1),E.rotation.y=Math.PI,E.scale.multiplyScalar(.9),A.add(E),E.userData.fixedArms=!0,E.userData.armL.rotation.z=2.8,E.userData.armR.rotation.z=-2.8,b===0&&i.addActor(_<0?"rider1":"rider2",E)}r.add(A),a.push(A)}let o=.02,l=.03,c=!1,d=0,u=-1;for(let b=0;b<400;b++){let A=n.getPointAt(b/400);A.y>u&&(u=A.y,d=b/400)}d+=.006;let h=n.getPointAt(d-.01).add(new P(0,3,0)),f=n.getPointAt(d+.085);i.updaters.push(b=>{if(!c){let A=n.getPointAt(o);l+=((A.y>12?.012:.05)-l)*.02,o=(o+b*l)%1}a.forEach((A,_)=>{let E=(o-_*.012+1)%1,R=n.getPointAt(E),U=n.getTangentAt(E);A.position.copy(R).y+=.2,A.lookAt(R.clone().sub(U))})}),re(10,.4,8,Y.world2,0,0,0,e);for(let b=0;b<5;b++)re(8,.06,.06,Y.grey,0,1,-2.5+b*1.4,e);for(let b=0;b<6;b++)for(let A=0;A<5;A++)pt(.05,.05,1,5,Y.grey,-4+b*1.6,.4,-2.5+A*1.4,e);re(2.2,2.6,1.6,Y.world,3.2,.4,-3,e),re(2.4,.2,1.8,Y.grey,3.2,3,-3,e),i.addActor("operator",i.standing(e,"ink",2.2,-2.2,.3,{y:.4}));for(let b of[4.4,5.3])re(.8,1,.8,Y.world2,b,.4,1.8,e);sn("BINS",1.8,.4,4.85,1.75,2.25,e,{size:150}),sn([{t:"THUNDERBOLT",s:120,c:"#e3241c"},{t:"MIN HEIGHT \u2014 SEE SIGN",s:50}],3.4,1.2,-1,3.4,-3.6,e,{bg:"#0b0b0d",fg:"#f4f2ee"}),pt(.08,.08,2.2,6,Y.grey,-3,.4,-1.2,e);let p=Ac([{t:"THE LEGEND OF",s:60},{t:"CAPTAIN BOLT",s:110}],{bg:"#0b0b0d",fg:"#f4f2ee",w:640,h:360}),y=re(1.9,1.1,.12,Y.inkProp.clone(),-3,2.4,-1.2,e),m=new Je(new Bn(1.75,.98),new Rt({map:p,toneMapped:!1}));m.position.set(-3,2.95,-1.13),e.add(m),y.userData={mat:y.material,kind:"ink",phase:1,talk:0},i.addActor("tv",y),pt(.07,.07,5,6,Y.grey,6,0,-5,e);let g=pt(.35,.12,.6,8,Y.inkProp.clone(),6,4.6,-5,e);g.rotation.x=1.2,g.userData={mat:g.material,kind:"ink",phase:2,talk:0},i.addActor("pa",g);let w=pt(.35,.12,.6,8,Y.redProp.clone(),-8,4.6,4,e);w.rotation.x=1.2,pt(.07,.07,5,6,Y.grey,-8,0,4,e),w.userData={mat:w.material,kind:"red",phase:3,talk:0},i.addActor("parkpa",w),i.addActor("brother",i.standing(e,"red",1.4,4.3,2.8,{kid:!0,y:.4})),i.addActor("teen1",i.standing(e,"red",1.8,6.4,3.3,{h:1.62,y:.4})),i.addActor("teen2",i.standing(e,"red",2.5,6,3.8,{h:1.7,y:.4}));for(let b=0;b<6;b++)i.standing(e,"grey",vt(-4,2),vt(-2,3),vt(0,6),{y:.4});let T=new lt;T.position.set(-18,0,12),e.add(T),pt(5,5,.5,16,Y.world2,0,0,0,T);let v=new Je(new cs(5.6,2.4,16),Y.world);v.position.y=5.5,T.add(v);for(let b=0;b<10;b++){let A=b/10*Math.PI*2;pt(.05,.05,4,5,Y.grey,Math.cos(A)*3.8,.5,Math.sin(A)*3.8,T),re(.3,.5,.9,Y.world,Math.cos(A)*3.8,1.6,Math.sin(A)*3.8,T)}i.updaters.push(b=>{T.rotation.y+=b*.2}),sn("CAROUSEL",3,.6,-18,7.4,12,e,{size:130});let S=new lt;S.position.set(26,11,14),e.add(S),S.add(new Je(new Zs(9,.18,6,40),Y.world2));for(let b=0;b<12;b++){let A=b/12*Math.PI*2,_=re(.12,9,.12,Y.grey,0,0,0,S);_.position.set(Math.cos(A)*4.5,Math.sin(A)*4.5,0),_.rotation.z=A+Math.PI/2;let E=re(1,1.1,1,Y.world,Math.cos(A)*9,Math.sin(A)*9-1,0,S);E.userData.a=A}pt(.3,.6,11,6,Y.world2,26,0,14,e),i.updaters.push(b=>{S.rotation.z+=b*.05}),re(12,.3,9,Y.world2,12,0,22,e),sn("DODGEMS",3.4,.6,12,3,17.5,e,{size:130});for(let b=0;b<6;b++)re(1.2,.6,1.8,Y.grey,8+b%3*3.5,.3,20+Math.floor(b/3)*3.5,e);return i.crowd(e,30,[-25,25,4,30],{redShare:.1}),{shots:{intro:{p:[-14,14,26],l:[4,8,-18]},listen:{p:[-.6,2.05,4.8],l:[1.9,2.1,-2.4]},follow:{p:[-.2,2.05,4.4],l:[-12,3.2,12]},twist:{p:h.toArray(),l:f.toArray()},stay:{p:[-1.2,2.05,3],l:[-3,2.85,-1.2]},wrap:{p:[-20,18,30],l:[4,8,-18]}},onShot(b){c=b==="twist",c&&(o=d)}}},football(i,e){re(160,.2,200,Y.world,0,-.2,0,e),re(44,.02,68,new tn({color:15131868}),0,0,0,e);let t=Y.line,n=(f,p,y,m)=>re(f,.03,p,t,y,.01,m,e);n(44,.12,0,34),n(44,.12,0,-34),n(.12,68,22,0),n(.12,68,-22,0),n(44,.12,0,0);let s=new Je(new hs(5.8,6,40),t);s.rotation.x=-Math.PI/2,s.position.y=.03,e.add(s);for(let f of[-1,1])n(20,.12,0,f*26),n(.12,8,-10,f*30),n(.12,8,10,f*30),re(7.3,.14,.14,Y.light,0,2.44,f*34,e),re(.14,2.44,.14,Y.light,-3.65,0,f*34,e),re(.14,2.44,.14,Y.light,3.65,0,f*34,e),re(7.3,2.44,2,Y.glass,0,0,f*35,e);for(let f of[-1,1]){for(let p=0;p<6;p++)re(2,.8,70,Y.world2,f*(30+p*2),p*.8,0,e);for(let p=0;p<70;p++){let y=Math.floor(cn()*6),m=Uo(cn()<.2?"red":"grey",{sit:!0});m.position.set(f*(30+y*2),y*.8+.8,vt(-33,33)),m.rotation.y=-f*Math.PI/2,e.add(m),cn()<.3&&(m.userData.bounce=.08),m.userData.baseY=m.position.y}}for(let[f,p]of[[-40,-40],[40,-40],[-40,40],[40,40]])pt(.4,.6,24,6,Y.world2,f,0,p,e),re(4,2,.6,Y.light,f,24,p,e);let r=i.standing(e,"ink",-23.5,-4,1.2);i.addActor("coach",r),r.userData.look=0,i.addActor("oppcoach",i.standing(e,"red",23.5,-8,-1.4)),i.addActor("parent1",i.standing(e,"red",-25.5,10.5,1.6,{h:1.66})),i.addActor("parent2",i.standing(e,"red",-25.8,11.4,1.9,{h:1.7}));let a=new lt;e.add(a),a.position.set(-12,0,12);let o=i.standing(a,"ink",0,0,Math.PI);i.addActor("coach",o);for(let f=0;f<9;f++){let p=Math.PI*.2+f/9*Math.PI*1.55;i.standing(a,f%3===0?"red":"grey",Math.cos(p)*2,Math.sin(p)*2-.2,-p-Math.PI/2)}let l=new lt;e.add(l);let c=[["tm1",6,-8],["tm2",-6,-16],["tm3",12,2]];for(let[f,p,y]of c){let m=i.standing(l,"red",p,y,Math.PI);i.addActor(f,m),m.userData.bounce=.05}for(let f=0;f<12;f++){let p=i.standing(l,"grey",vt(-18,18),vt(-30,8),vt(0,6));i.walkers.push({o:p,a:p.position.clone(),b:new P(vt(-18,18),0,vt(-30,8)),k:cn(),v:vt(2,4),len:14})}let d=new Je(new Li(.22,1),Y.inkProp);d.position.set(0,.22,-6),l.add(d),i.updaters.push((f,p)=>{d.position.x=Math.sin(p*.4)*10,d.position.z=-8+Math.cos(p*.3)*12,d.rotation.x+=f*4}),i.makeRain();let u=new lt;u.position.set(0,0,120),e.add(u),re(14,.2,10,Y.world2,0,-.2,0,u),re(14,4,.3,Y.world,0,0,-5,u),re(.3,4,10,Y.world,-7,0,0,u),re(.3,4,10,Y.world,7,0,0,u);for(let f=0;f<12;f++)re(.9,2.2,.6,Y.world2,-5.5+f*1,0,-4.5,u),re(.02,1.8,.02,Y.grey,-5.5+f*1+.3,.2,-4.18,u);re(10,.45,.6,Y.world2,0,0,2.5,u);let h=i.standing(u,"ink",.4,-2.2,0);i.addActor("coach2",h),i.addActor("bench1",i.standing(u,"red",1.6,2.6,Math.PI+.3,{sit:!0})),i.addActor("bench2",i.standing(u,"red",2.5,2.6,Math.PI-.2,{sit:!0}));for(let f of[-3.5,-2.4,-1.2,3.6])i.standing(u,"grey",f,2.6,Math.PI+vt(-.3,.3),{sit:!0});return re(14,.1,10,new Rt({color:16777215}),0,4,0,u),{shots:{intro:{p:[-30,20,40],l:[0,0,0]},listen:{p:[-12.2,1.62,15.2],l:[-12,1.55,12]},follow:{p:[-17,1.62,5],l:[-11,1.3,-18]},twist:{p:[-17,1.62,5],l:[-11,1.3,-18]},stay:{p:[.6,1.25,124.2],l:[.3,1.5,117.8]},wrap:{p:[-30,20,40],l:[0,0,0]}},onShot(f){let p=f==="twist";i.setWeather(p?1:0),i.bg.set(p?12368566:15921130),i.scene.fog.color.set(p?12368566:15921130),i.scene.fog.near=p?8:18,i.scene.fog.far=p?60:95,i.hemi.intensity=p?1:1.55,a.visible=f==="listen"||f==="intro",l.visible=f!=="listen"}}},lab(i,e){re(18,.2,14,Y.world2,0,-.2,0,e),re(18,4,.3,Y.world,0,0,-6,e),re(.3,4,14,Y.world,-9,0,0,e),re(.3,4,14,Y.world,9,0,0,e),re(18,.2,14,new Rt({color:14999770}),0,4,0,e);for(let y=-2;y<=2;y++)re(2.4,1.8,.05,new Rt({color:16777215}),8.8*0+y*3,1.3,6.9,e);for(let y=-4;y<=6;y+=2.5)re(.05,2,1.8,new Rt({color:16777215}),-8.84,1.2,y,e);for(let y=-6;y<=6;y+=3)re(1.8,.05,.3,Y.light,y,3.95,-1,e);let t=Ac([{t:"ACIDS & BASES",s:96},{t:" ",s:40},{t:"pH   0 \u2014\u2014\u2014 7 \u2014\u2014\u2014 14",s:64}],{w:1024,h:420,bg:"#fbfaf8"}),n=new Je(new Bn(6,2.4),new Rt({map:t,toneMapped:!1}));n.position.set(0,2.1,-5.84),e.add(n),re(6.3,2.6,.08,Y.grey,0,.9,-5.9,e),re(4,1,1,Y.world2,0,0,-4.4,e),i.addActor("teacher",i.standing(e,"ink",-1.6,-3.9,.15));let s=[];for(let y=0;y<3;y++)for(let m=0;m<2;m++){let g=m===0?-3.4:3.4,w=-1.4+y*2.8;s.push([g,w]),re(4.4,.95,1.3,Y.world2,g,0,w,e),re(4.6,.06,1.4,Y.grey,g,.95,w,e);for(let T of[-1.2,1.2]){pt(.1,.13,.25,8,Y.dark,g+T,1,w-.25,e);let v=new Je(new cs(.06,.28,6),Y.light);v.position.set(g+T,1.4,w-.25),e.add(v)}}let r=[3.4,1.4],a=new lt;a.position.set(r[0]-.9,1,r[1]-.1),e.add(a),re(.8,.05,.25,Y.grey,0,.18,0,a);let o=new tn({color:16777215,transparent:!0,opacity:.55}),l=[];for(let y=0;y<4;y++){let m=pt(.045,.045,.34,8,o,-.3+y*.2,0,0,a);l.push(m)}let c=(y,m)=>{let g=new tn({color:y,flatShading:!0});pt(.09,.09,.24,8,g,r[0]+m,1,r[1]+.1,e),pt(.03,.05,.08,6,Y.dark,r[0]+m,1.24,r[1]+.1,e)};c(8080816,.15),c(3960785,.45),pt(.14,.12,.26,10,Y.glass,r[0]+.85,1,r[1]-.05,e);let d=[],u=new Set(["3.4,1.4","4.7,1.4","2.1,1.4","-2.1,1.4","-3.4,4.2","-4.7,4.2"]);s.forEach(([y,m],g)=>{for(let w of[-1.3,0,1.3]){if(pt(.2,.2,.62,8,Y.grey,y+w,0,m+.95,e),u.has(`${(y+w).toFixed(1)},${m.toFixed(1)}`))continue;let T=cn()<.3,v=i.standing(e,T?"red":"grey",y+w,m+.95,Math.PI,{sit:!0,h:1.66});v.position.y=.2,d.push(v),T&&(v.userData.talking=cn()<.5)}}),i.addActor("jayden",i.standing(e,"red",3.4+1.3+.2,1.4+.95,Math.PI+.5,{sit:!0,h:1.7})).position.y=.2,i.addActor("student1",i.standing(e,"red",3.4-1.3,1.4+.95,Math.PI-.3,{sit:!0,h:1.62})).position.y=.2,i.addActor("student2",i.standing(e,"red",-3.4+1.3,1.4+.95,Math.PI+.6,{sit:!0,h:1.7})).position.y=.2,i.addActor("gossip1",i.standing(e,"red",-3.4-.2,4.2+.95,Math.PI+.9,{sit:!0,h:1.6})).position.y=.2,i.addActor("gossip2",i.standing(e,"red",-3.4-1.3,4.2+.95,Math.PI+.4,{sit:!0,h:1.66})).position.y=.2;let h=new lt;h.position.set(r[0]-.9-.3+.2*1,1.35,r[1]-.1),e.add(h),h.visible=!1;let f=[];for(let y=0;y<42;y++){let m=new Je(new Li(vt(.05,.13),0),Y.world);m.userData.v=new P(vt(-.25,.35),vt(-.05,.25),vt(-.25,.3)),h.add(m),f.push(m)}let p=0;return i.updaters.push((y,m)=>{h.visible&&(p=Math.min(p+y*.2,1),f.forEach((g,w)=>{let T=(m*.3+w/f.length)%1*p;g.position.copy(g.userData.v).multiplyScalar(T*3.2),g.position.y-=T*T*1.2,g.scale.setScalar(.6+T*1.6)}))}),{shots:{intro:{p:[6.5,3.4,6.2],l:[-1,1.2,-3.5]},listen:{p:[r[0],1.28,r[1]+1],l:[-.6,1.55,-4.5]},follow:{p:[r[0]-.2,1.55,r[1]+1.05],l:[r[0]-.4,.9,r[1]-.6]},twist:{p:[r[0]+.3,1.7,r[1]+1.9],l:[r[0]-.7,1.05,r[1]-.4]},stay:{p:[r[0]-.4,1.28,r[1]+1],l:[0,1.95,-5.8]},wrap:{p:[6.5,3.4,6.2],l:[-1,1.2,-3.5]}},onShot(y){h.visible=y==="twist",y==="twist"&&(p=.3)}}},office(i,e){re(30,.2,22,Y.world2,0,-.2,0,e),re(30,.2,22,new Rt({color:15131356}),0,3.4,0,e),re(30,3.4,.2,new Rt({color:16777215}),0,0,-9,e);for(let T=-14;T<=14;T+=2.5)re(.15,3.4,.25,Y.world2,T,0,-8.9,e);re(.3,3.4,22,Y.world,-15,0,0,e),re(.3,3.4,22,Y.world,15,0,0,e),re(30,3.4,.3,Y.world,0,0,11,e);for(let T=-12;T<=12;T+=4)for(let v=-6;v<=8;v+=4)re(1.6,.05,.3,Y.light,T,3.35,v,e);let t=(T,v,S,b)=>{let A=new lt;if(A.position.set(T,0,v),A.rotation.y=S,e.add(A),re(1.6,.05,.8,Y.world,0,.74,0,A),re(.05,.74,.7,Y.grey,-.75,0,0,A),re(.05,.74,.7,Y.grey,.75,0,0,A),re(.6,.36,.03,Y.inkProp,0,.9,-.2,A),re(.4,.02,.14,Y.grey,0,.79,.12,A),pt(.25,.25,.08,8,Y.grey,0,.42,.62,A),b){let _=i.standing(A,b,0,.62,Math.PI,{sit:!0,arms:"desk"});return _.position.y=.05,_.rotation.y=Math.PI,_}return A},n=[];for(let T=-9;T<=9;T+=6)for(let v=-4;v<=6;v+=5)if(!(T===3&&v===1))for(let[S,b,A]of[[-.85,-.45,0],[.85,-.45,0],[-.85,.45,Math.PI],[.85,.45,Math.PI]]){let _=t(T+S,v+b,A,cn()<.8?"grey":null);_&&_.userData&&_.userData.mat&&n.push(_)}let s=[3,1.5],r=new lt;r.position.set(s[0],0,s[1]),e.add(r),re(1.8,.05,.9,Y.world,0,.74,0,r),re(.05,.74,.8,Y.grey,-.85,0,0,r),re(.05,.74,.8,Y.grey,.85,0,0,r),re(.5,.02,.16,Y.grey,0,.79,.15,r);let a=re(.3,.01,.2,new tn({color:7645290}),.45,.8,.2,r);sn("DESK 14",.5,.14,-.6,.86,.44,r,{size:150}).rotation.x=-.5;let o=document.createElement("canvas");o.width=1024,o.height=576;let l=o.getContext("2d"),c=new ls(o);c.colorSpace=Bt;let d=(T=0)=>{l.fillStyle="#16161a",l.fillRect(0,0,1024,576),l.fillStyle="#f4f2ee",l.fillRect(24,24,640,380),l.fillStyle="#0b0b0d",l.font="800 44px Archivo, Arial",l.fillText("Budget update",56,90),l.fillStyle="#bdb9b3";for(let S=0;S<6;S++)l.fillRect(70+S*90,360-(40+S*37%150),50,40+S*37%150);[["GARY \u2014 FINANCE",!0],["PRIYA",!1],["TOM",!1],["BEN",!1]].forEach(([S,b],A)=>{let E=24+A*134;l.fillStyle="#26262c",l.fillRect(690,E,310,120),b?(l.strokeStyle=T>.5?"#ffffff":"#44444c",l.lineWidth=T>.5?6:2,l.strokeRect(693,E+3,304,114),l.fillStyle="#0b0b0d",l.beginPath(),l.moveTo(845,E+22),l.lineTo(875,E+52),l.lineTo(845,E+78),l.lineTo(815,E+52),l.fill(),l.fillRect(800,E+82,90,38)):(l.fillStyle="#5a5a62",l.beginPath(),l.arc(845,E+55,28,0,7),l.fill()),l.fillStyle="#f4f2ee",l.font="600 20px Archivo, Arial",l.fillText(S,702,E+110)}),l.fillStyle="#e3241c",l.fillRect(24,430,12,12),l.fillStyle="#9a9aa2",l.font="500 22px Archivo, Arial",l.fillText("Recording \xB7 Q3 budget review \xB7 48 participants",48,442),c.needsUpdate=!0};d(0);let u=re(1.25,.72,.04,Y.inkProp.clone(),0,.84,-.2,r),h=new Je(new Bn(1.18,.66),new Rt({map:c,toneMapped:!1}));h.position.set(0,1.2,-.175),r.add(h),u.userData={mat:u.material,kind:"ink",phase:0,talk:0},i.addActor("monitor",u);let f=0;i.updaters.push(()=>{let T=u.userData.talking?1:0;T!==f&&(f=T,d(T))}),i.addActor("manager",i.standing(e,"ink",s[0]-1.3,s[1]-1.5,.6)),i.addActor("ben",i.standing(e,"red",s[0]+2.3,s[1]-.6,-1.2));let p=t(s[0]+2.4,s[1]+.2,0,"red");i.addActor("tash",p),p.userData.fixedArms=!0,p.userData.armR.rotation.z=-2.4,p.userData.armR.rotation.x=-.4,re(1.2,1.1,.8,Y.world2,13.8,0,-2,e),re(.9,.08,.5,Y.grey,13.8,1.1,-2,e),re(.7,1.3,.6,Y.inkProp,-14.2,.9,2,e),re(.7,1.3,.6,Y.inkProp,-14.2,.9,3.4,e),re(1.2,.9,3,Y.world2,-14.2,0,2.7,e);for(let[T,v]of[["ROOM 2",-10],["ROOM 3",-4]])re(5,3.2,.1,Y.glass,v,0,9,e),re(.1,3.2,3.5,Y.glass,v-2.5,0,10.2,e),sn(T,1.2,.3,v+1.4,2.6,8.9,e,{size:150,ry:Math.PI});for(let[T,v]of[["STAIRWELL A",7],["STAIRWELL B",-5]])re(.12,2.3,1.2,Y.inkProp,-14.8,0,v,e),sn(T,1.4,.3,-14.75,2.6,v,e,{size:130,ry:Math.PI/2});let y=i.standing(e,"ink",-11.5,-4.2,1);i.addActor("warden",y),re(.55,.5,.35,Y.redProp,0,1.35,0,y),y.visible=!1;let m=new ds(16726832,0,40);m.position.set(-6,3,0),e.add(m);let g=re(.4,.2,.4,Y.redProp,-6,3.2,0,e),w=!1;return i.updaters.push((T,v)=>{m.intensity=w&&Math.sin(v*9)>.3?60:0,g.material.emissive.setRGB(w&&Math.sin(v*9)>.3?1:.23,0,0)}),i.walkers.length=0,i.crowd(e,5,[-12,12,-7,9],{redShare:0}),{shots:{intro:{p:[10,3,10],l:[0,1,-3]},listen:{p:[s[0]+.2,1.24,s[1]+.9],l:[s[0]-1.3,1.62,s[1]-1.5]},follow:{p:[s[0]+.3,1.24,s[1]+.8],l:[s[0]-.4,1.4,s[1]-1.6]},twist:{p:[s[0],1.68,s[1]+1.2],l:[-11.5,1.6,-4.2]},stay:{p:[s[0],1.22,s[1]+.82],l:[s[0],1.16,s[1]-.25]},wrap:{p:[10,3,10],l:[0,1,-3]}},onShot(T){w=T==="twist",y.visible=T==="twist",n.forEach((v,S)=>{v.position.y=w?.45:.05})}}}},kv=Object.keys(Hu);var ko=class{constructor(){this.ctx=null,this.bufs={},this.speed=1,this.layers={},this.evTimers=[],this.live=new Set,this.base="./",this.vol=.8}gainFor(e){return .95*Math.pow(Math.max(0,Math.min(1,e)),1.6)}setVolume(e){this.vol=e,this.master&&this.master.gain.setTargetAtTime(this.gainFor(e),this.ctx.currentTime,.04)}unlock(){if(!this.ctx){let e=window.AudioContext||window.webkitAudioContext;this.ctx=new e({latencyHint:"interactive"});let t=this.ctx;this.master=t.createGain(),this.master.gain.value=this.gainFor(this.vol);let n=t.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=3,n.attack.value=.01,n.release.value=.2,this.master.connect(n).connect(t.destination),this.voice=t.createGain(),this.voice.connect(this.master),this.duckNode=t.createGain(),this.duckNode.connect(this.master),this.amb=t.createGain(),this.amb.gain.value=1,this.amb.connect(this.duckNode),this.ui=t.createGain(),this.ui.gain.value=.5,this.ui.connect(this.master);let s=t.sampleRate*4;this.noise=t.createBuffer(2,s,t.sampleRate);for(let r=0;r<2;r++){let a=this.noise.getChannelData(r);for(let o=0;o<s;o++)a[o]=Math.random()*2-1}this.pink=t.createBuffer(2,s,t.sampleRate);for(let r=0;r<2;r++){let a=this.pink.getChannelData(r),o=0,l=0,c=0;for(let d=0;d<s;d++){let u=Math.random()*2-1;o=.997*o+u*.029,l=.985*l+u*.032,c=.95*c+u*.048,a[d]=(o+l+c)*2.2}}}this.ctx.state!=="running"&&this.ctx.resume()}get now(){return this.ctx?this.ctx.currentTime:0}async load(e,t){if(this.bufs[e])return this.bufs[e];let n=await fetch(this.base+"audio/"+e);if(!n.ok)throw new Error("Could not load "+e);let s=+n.headers.get("content-length")||0,r;if(n.body&&s&&t){let o=n.body.getReader(),l=[],c=0;for(;;){let{done:u,value:h}=await o.read();if(u)break;l.push(h),c+=h.length,t(c/s)}r=new Uint8Array(c);let d=0;for(let u of l)r.set(u,d),d+=u.length;r=r.buffer}else r=await n.arrayBuffer();let a=await new Promise((o,l)=>this.ctx.decodeAudioData(r,o,l));return this.bufs[e]=a,a}play(e,t,{when:n=0,pan:s=0,gain:r=1,bus:a="voice",lp:o=0}={}){let l=this.ctx,c=this.bufs[e];if(!c)return null;let d=l.createBufferSource();d.buffer=c,d.playbackRate.value=this.speed;let u=d;if(o){let y=l.createBiquadFilter();y.type="lowpass",y.frequency.value=o,u.connect(y),u=y}let h=l.createGain();if(h.gain.value=r,u.connect(h),u=h,s&&l.createStereoPanner){let y=l.createStereoPanner();y.pan.value=s,u.connect(y),u=y}u.connect(a==="amb"?this.amb:a==="ui"?this.ui:this.voice);let f=Math.max(n||l.currentTime,l.currentTime),p=Math.max(0,t[0]-.02);return d.start(f,p,t[1]+.06),this.live.add(d),d.onended=()=>this.live.delete(d),d}stopVoices(){for(let e of this.live)try{e.stop()}catch{}this.live.clear()}layer(e){if(this.layers[e])return this.layers[e];let t=this.ctx,n=t.createGain();n.gain.value=0,n.connect(this.amb);let s={out:n,name:e,stop:[]},r=(l,c=1)=>{let d=t.createBufferSource();return d.buffer=l,d.loop=!0,d.playbackRate.value=c,d.start(t.currentTime,Math.random()*l.duration),s.stop.push(d),d},a=(l,c,d=.7)=>{let u=t.createBiquadFilter();return u.type=l,u.frequency.value=c,u.Q.value=d,u},o={crowd:"crowd.mp3",kids:"kids.mp3",music:"music.mp3",chant:"chant.mp3"};if(o[e]){let l=this.bufs[o[e]];if(l){let c=r(l);if(e==="crowd"||e==="kids"){let d=r(l,.97),u=t.createStereoPanner();u.pan.value=.6,d.connect(u).connect(n);let h=t.createStereoPanner();h.pan.value=-.5,c.connect(h).connect(n)}else c.connect(n)}}else if(e==="fountain")r(this.noise).connect(a("bandpass",1400,.35)).connect(a("highpass",380)).connect(n);else if(e==="wind"){let l=r(this.pink),c=a("lowpass",520),d=t.createGain();d.gain.value=.6,l.connect(c).connect(d).connect(n);let u=t.createOscillator();u.frequency.value=.09;let h=t.createGain();h.gain.value=.45,u.connect(h).connect(d.gain),u.start(),s.stop.push(u);let f=t.createOscillator();f.frequency.value=.13;let p=t.createGain();p.gain.value=260,f.connect(p).connect(c.frequency),f.start(),s.stop.push(f)}else if(e==="rain"){r(this.noise).connect(a("highpass",900)).connect(a("lowpass",8500)).connect(n);let l=r(this.pink),c=t.createGain();c.gain.value=.5,l.connect(a("lowpass",400)).connect(c).connect(n)}else if(e==="rumble"){let l=r(this.pink),c=a("lowpass",140),d=t.createGain();d.gain.value=.5,l.connect(c).connect(d).connect(n);let u=t.createOscillator();u.frequency.value=.07;let h=t.createGain();h.gain.value=.5,u.connect(h).connect(d.gain),u.start(),s.stop.push(u)}else if(e==="hiss")r(this.noise).connect(a("bandpass",3800,.6)).connect(n);else if(e==="hvac"){r(this.pink).connect(a("lowpass",240)).connect(n);let l=t.createOscillator();l.frequency.value=118;let c=t.createGain();c.gain.value=.05,l.connect(c).connect(n),l.start(),s.stop.push(l)}else if(e==="sizzle"){let l=r(this.noise),c=t.createGain();c.gain.value=.5,l.connect(a("highpass",3800)).connect(c).connect(n);let d=t.createOscillator();d.type="square",d.frequency.value=23;let u=t.createGain();u.gain.value=.35,d.connect(u).connect(c.gain),d.start(),s.stop.push(d)}else if(e==="shower")r(this.noise).connect(a("bandpass",2600,.45)).connect(a("lowpass",7e3)).connect(n);else if(e==="alarm"){let l=t.createOscillator();l.type="square";let c=a("lowpass",2400),d=t.createGain();d.gain.value=.25,l.connect(c).connect(d).connect(n),l.start(),s.stop.push(l);let u=t.currentTime;for(let h=0;h<400;h++)l.frequency.setValueAtTime(h%2?660:880,u+h*.45),d.gain.setValueAtTime(h%2?.2:.26,u+h*.45)}else if(e==="keys"||e==="bubble"){let l=()=>{if(!s.dead){if(n.gain.value>.005)if(e==="keys")for(let c=0;c<3;c++)this.click(n,t.currentTime+Math.random()*.25,2200+Math.random()*1600,.012,.5);else for(let c=0;c<3;c++)this.blip(n,t.currentTime+Math.random()*.25,300+Math.random()*500,.05);s.timer=setTimeout(l,180+Math.random()*120)}};l()}return this.layers[e]=s,s}setLayer(e,t,n=1.2){let s=this.layer(e),r=s.out.gain,a=this.ctx.currentTime;r.cancelScheduledValues(a),r.setValueAtTime(r.value,a),r.linearRampToValueAtTime(Math.max(0,t),a+n)}rampLayer(e,t,n,s){this.layer(e).out.gain.linearRampToValueAtTime(Math.max(0,t),Math.max(s,this.ctx.currentTime+.05))}silenceLayers(e=[],t=1.5){for(let n in this.layers)e.includes(n)||this.setLayer(n,0,t)}killLayers(){for(let e in this.layers){let t=this.layers[e];t.dead=!0,clearTimeout(t.timer);for(let n of t.stop)try{n.stop()}catch{}t.out.disconnect()}this.layers={},this.stopEvents()}duck(e,t=.6){let n=this.duckNode.gain,s=this.ctx.currentTime;n.cancelScheduledValues(s),n.setValueAtTime(n.value,s),n.linearRampToValueAtTime(e?.42:1,s+t)}swell(e){let t=this.amb.gain,n=this.ctx.currentTime;t.cancelScheduledValues(n),t.setTargetAtTime(1+e*.9,n,.06)}startEvents(e={},t){this.stopEvents();for(let[n,[s,r]]of Object.entries(e)){let a=()=>{this.fx(n),t&&t(n);let l=setTimeout(a,(s+Math.random()*(r-s))*1e3);this.evTimers.push(l)},o=setTimeout(a,(s*.5+Math.random()*s)*1e3);this.evTimers.push(o)}}stopEvents(){this.evTimers.forEach(clearTimeout),this.evTimers=[]}env(e,t,n,s,r){e.gain.setValueAtTime(0,t),e.gain.linearRampToValueAtTime(s,t+n),e.gain.exponentialRampToValueAtTime(1e-4,t+n+r)}noiseHit(e,t,{type:n="bandpass",f:s=1e3,q:r=.7,a=.005,d:o=.2,peak:l=.5,pan:c=0,sweep:d=0,buf:u}={}){let h=this.ctx,f=h.createBufferSource();f.buffer=u||this.noise;let p=h.createBiquadFilter();p.type=n,p.frequency.value=s,p.Q.value=r,d&&p.frequency.exponentialRampToValueAtTime(d,t+a+o);let y=h.createGain();this.env(y,t,a,l,o);let m=h.createStereoPanner();m.pan.value=c,f.connect(p).connect(y).connect(m).connect(e),f.start(t,Math.random()*3,a+o+.05)}tone(e,t,n,s,{type:r="sine",peak:a=.2,a:o=.004,pan:l=0,to:c}={}){let d=this.ctx,u=d.createOscillator();u.type=r,u.frequency.setValueAtTime(n,t),c&&u.frequency.exponentialRampToValueAtTime(c,t+s);let h=d.createGain();this.env(h,t,o,a,s);let f=d.createStereoPanner();f.pan.value=l,u.connect(h).connect(f).connect(e),u.start(t),u.stop(t+o+s+.05)}click(e,t,n,s,r){this.noiseHit(e,t,{f:n,q:2,d:s,peak:r})}blip(e,t,n,s){this.tone(e,t,n,s,{peak:.25,to:n*1.9})}sprite(e,t=0,n=.6){let s=this.sfxMan&&this.sfxMan[e];if(!s)return;let r=Object.keys(s.clips),a=r[Math.floor(Math.random()*r.length)];this.play(s.file,s.clips[a],{pan:t,gain:n,bus:"amb"})}fx(e){let t=this.ctx;if(!t)return;let n=t.currentTime+.02,s=this.amb,r=()=>Math.random()*2-1;switch(e){case"scream":this.sprite("screams",r()*.8,.55),this.noiseHit(s,n,{type:"lowpass",f:180,a:.8,d:2.2,peak:.5,pan:r()*.5,buf:this.pink});break;case"cheer":this.sprite("cheers",r()*.7,.5),this.noiseHit(s,n,{f:1800,q:.3,a:.3,d:1.4,peak:.07});break;case"whistle":{let a=t.createOscillator();a.frequency.value=2950;let o=t.createOscillator();o.frequency.value=28;let l=t.createGain();l.gain.value=140,o.connect(l).connect(a.frequency);let c=t.createGain();this.env(c,n,.01,.12,.7);let d=t.createStereoPanner();d.pan.value=r()*.6,a.connect(c).connect(d).connect(s),a.start(n),o.start(n),a.stop(n+.8),o.stop(n+.8);break}case"kick":this.tone(s,n,90,.14,{peak:.35,to:45,pan:r()*.6}),this.noiseHit(s,n,{f:1500,d:.03,peak:.2});break;case"thunder":this.noiseHit(s,n,{type:"lowpass",f:900,a:.02,d:.25,peak:.6,sweep:200}),this.noiseHit(s,n+.1,{type:"lowpass",f:160,a:.25,d:3.2,peak:.9,buf:this.pink});break;case"phone":for(let a=0;a<2;a++){let o=r()*.8;for(let l of[440,480])this.tone(s,n+a*.55,l,.38,{peak:.05,pan:o})}break;case"printer":for(let a=0;a<10;a++)this.noiseHit(s,n+a*.28,{f:1300,q:1.2,a:.03,d:.2,peak:.12,pan:.7});break;case"grinder":this.noiseHit(s,n,{f:900,q:.8,a:.2,d:2.6,peak:.22,pan:-.8}),this.tone(s,n,95,2.8,{type:"sawtooth",peak:.04,pan:-.8});break;case"ping":this.tone(s,n,1318,.25,{peak:.12,pan:.3}),this.tone(s,n+.09,1760,.35,{peak:.1,pan:.3});break;case"scrape":this.noiseHit(s,n,{f:900,q:3,a:.02,d:.45,peak:.25,sweep:320,pan:r()*.8});break;case"clink":this.tone(s,n,2640,.4,{peak:.06,pan:r()*.6}),this.tone(s,n,3960,.3,{peak:.04,pan:r()*.6});break;case"locker":this.noiseHit(s,n,{type:"lowpass",f:300,a:.003,d:.25,peak:.5,pan:r()*.7}),this.tone(s,n,180,.6,{type:"triangle",peak:.08});break;default:break}}whoosh(e=1.1){if(!this.ctx)return;let t=this.ctx.currentTime;this.noiseHit(this.ui,t,{f:300,q:.8,a:e*.6,d:e*.5,peak:.5,sweep:3200,buf:this.pink})}tick(){this.ctx&&this.tone(this.ui,this.ctx.currentTime,1560,.05,{peak:.08})}ok(){if(!this.ctx)return;let e=this.ctx.currentTime;this.tone(this.ui,e,880,.12,{peak:.1}),this.tone(this.ui,e+.08,1320,.16,{peak:.08})}tap(){this.ctx&&this.tone(this.ui,this.ctx.currentTime,660,.06,{peak:.12,type:"triangle"})}holdTone(e){if(!this.ctx)return;if(!this.hold){let n=this.ctx,s=n.createOscillator();s.type="sine";let r=n.createGain();r.gain.value=0,s.connect(r).connect(this.ui),s.start(),this.hold={o:s,g:r}}let t=this.ctx.currentTime;this.hold.o.frequency.setTargetAtTime(110+e*220,t,.05),this.hold.g.gain.setTargetAtTime(e>0?.05+e*.08:0,t,.05)}};var gr=[{id:"mall",num:1,place:"Busy mall",title:"Saturday Errands",ages:"7+",minAge:7,blurb:"A lost child, a shopping list and a flash mob. Find your voice in the crowd.",speakers:{pa:{role:"target",name:"Mall PA",actor:"pa"},mum:{role:"target",name:"Mum",actor:"phone"},seller:{role:"distract",name:"Kiosk seller",actor:"seller",pan:.62,gain:.5},ana:{role:"target",name:"Ana",actor:"phone"},cashier:{role:"target",name:"Cashier",actor:"cashier"},gw:{role:"distract",name:"Woman behind you",actor:"coupleW",pan:-.7,gain:.38},gm:{role:"distract",name:"Man behind you",actor:"coupleM",pan:-.55,gain:.38}},side:{who:"the cat",line:"You know more about the cat\u2019s property empire than about Leo."},parts:[{type:"intro"},{type:"listen",title:"Listen",scores:["noise"],card:"The mall PA is making announcements. Questions appear in the pauses.",amb:{layers:{crowd:[.16,.34],music:[.08,.16],fountain:[.045,.055]},ev:{cheer:[14,24]}},chunks:[{lines:[{s:"pa",t:"Attention, shoppers!",gap:.3,clip:[.2,1.5328]},{s:"pa",t:"We have a little one looking for his family. His name is Leo. He\u2019s five years old.",gap:.35,clip:[2.0328,5.3434]},{s:"pa",t:"Leo is wearing a yellow raincoat and bright green gumboots.",gap:.4,clip:[7.6762,3.8455]},{s:"pa",t:"He\u2019s waiting with our friendly staff at the information desk, next to the fountain on the ground floor.",gap:.3,clip:[11.8218,5.8187]},{s:"pa",t:"Leo\u2019s family, please come and collect him!",gap:.2,clip:[17.9405,2.8851]}],side:{at:4.5,lines:[{s:"gw",t:"I\u2019m telling you, Marco. The cat raised the rent.",gap:.5,clip:[21.1255,2.2818]},{s:"gm",t:"The cat doesn\u2019t pay rent. We pay rent.",gap:.4,clip:[23.7073,2.0353]},{s:"gw",t:"Exactly! He owns the house now. He left a letter on the fridge. In paw prints!",gap:.2,clip:[26.0426,3.6059]}]},questions:[{q:"What is Leo wearing?",a:"A yellow raincoat and green gumboots",o:["A yellow raincoat and green gumboots","A green raincoat and yellow gumboots","A yellow jumper and green sneakers","A red raincoat and green gumboots"]},{q:"Where is Leo waiting?",a:"At the information desk by the fountain",o:["At the information desk by the fountain","At the food court on level two","At the toy shop by the escalators","At the car park entrance"]}]},{lines:[{s:"pa",t:"And a reminder, shoppers!",gap:.3,clip:[29.9485,1.7689]},{s:"pa",t:"Today only, Sportsworld on level one has forty percent off all running shoes.",gap:.35,clip:[32.0174,4.9605]},{s:"pa",t:"The first fifty customers also get a free water bottle.",gap:.35,clip:[37.2778,3.5562]},{s:"pa",t:"That\u2019s forty percent off, until six o\u2019clock tonight!",gap:.2,clip:[41.134,3.2507]}],questions:[{q:"Which shop has the sale?",a:"Sportsworld",o:["Sportsworld","Shoe Barn","Run Club","Kicks & Co"]},{q:"When does the sale end?",a:"6 pm tonight",o:["6 pm tonight","4 pm today","8 pm tonight","Midnight"]}]}]},{type:"task",title:"Follow",scores:["instruction"],card:"Mum is calling with a shopping list. Remember the stops, in order.",amb:{layers:{crowd:[.22,.3],music:[.12,.14],fountain:[.035,.035]}},lines:[{s:"mum",t:"Hi, love! Okay, I need you to grab a few things for me.",gap:.3,clip:[44.6847,3.1755]},{s:"mum",t:"First, go to the pharmacy and get some sunscreen.",gap:-.25,clip:[48.1602,2.7282]},{s:"seller",t:"Excuse me! Excuse me! Can I ask you a quick question? Do you moisturise?",gap:.2,clip:[51.1884,3.9887]},{s:"mum",t:"Then get bread from the bakery.",gap:.35,clip:[55.4771,1.4815]},{s:"mum",t:"Actually, no, skip the bread. Dad already bought some. Get a birthday card from the card shop instead.",gap:-.2,clip:[57.2585,5.8154]},{s:"seller",t:"This cream is made from real volcano mud! It\u2019s very exclusive! Just try it!",gap:.25,clip:[63.3739,4.2689]},{s:"mum",t:"And last, pick up my glasses from the optometrist. Thanks, love! Bye!",gap:.2,clip:[67.9428,4.2595]}],task:{kind:"sequence",prompt:"Tap the shops in the order Mum asked for.",tiles:["Pharmacy","Card shop","Optometrist","Bakery","Sportsworld","Toy shop"],answer:["Pharmacy","Card shop","Optometrist"],style:"map"}},{type:"task",title:"Twist",scores:["noise","instruction"],card:"A flash mob just started in the atrium. Your friend Ana is calling. Where are you meeting?",amb:{layers:{crowd:[.3,.36],music:[.34,.4],fountain:[0,0]},ev:{cheer:[5,9]}},lines:[{s:"ana",t:"Hey! Where are you? I can barely hear you!",gap:.4,clip:[72.5023,1.875]},{s:"ana",t:"Okay, listen. Don\u2019t come to the food court, it\u2019s packed.",gap:.4,clip:[74.6773,2.7161]},{s:"ana",t:"Meet me upstairs on level two, outside the cinema.",gap:.3,clip:[77.6934,2.6417]},{s:"ana",t:"No, wait, the cinema\u2019s closed. Meet me outside the bookshop. The one next to the escalators.",gap:.35,clip:[80.635,5.3353]},{s:"ana",t:"See you in ten minutes!",gap:.2,clip:[86.2703,1.1183]}],task:{kind:"fields",prompt:"Where and when are you meeting Ana?",fields:[{label:"Floor",o:["Level 2","Ground floor","Level 1","Level 3"]},{label:"Place",o:["Outside the bookshop","Outside the cinema","In the food court","By the fountain"]},{label:"Next to",o:["The escalators","The lifts","The fountain","The toilets"]},{label:"When",o:["In 10 minutes","In 5 minutes","In 15 minutes","In 20 minutes"]}]}},{type:"respond",title:"Stay",scores:["focus"],pad:"tap",padLabel:"Order 47",card:"Food court queue. You\u2019re order number 47. Tap only when 47 is called.",amb:{layers:{crowd:[.2,.26],music:[.1,.1],sizzle:[.055,.065]},ev:{cheer:[20,30]}},lines:[{s:"cashier",t:"Number twelve, please!",gap:2.6,clip:[87.6887,1.4444]},{s:"cashier",t:"Order forty-six, your food\u2019s ready!",gap:2.8,cue:"tap",lure:!0,key:"forty-six",clip:[89.433,2.2003,.227]},{s:"cashier",t:"Order forty-seven!",gap:3,cue:"tap",key:"forty-seven",clip:[91.9334,1.3093,.254]},{s:"cashier",t:"Thirty-one! Number thirty-one!",gap:3,clip:[93.5427,1.7712]},{s:"cashier",t:"Seventy-four, please!",gap:3.2,cue:"tap",lure:!0,key:"Seventy-four",clip:[95.6139,1.5001,0]},{s:"cashier",t:"Number nineteen!",gap:3.3,clip:[97.414,1.1111]},{s:"cashier",t:"One hundred and forty-seven!",gap:3.4,cue:"tap",lure:!0,key:"forty-seven",clip:[98.8251,1.8907,.884]},{s:"cashier",t:"Order forty-seven, your food\u2019s ready!",gap:3.5,cue:"tap",key:"forty-seven",clip:[101.0158,2.376,.246]},{s:"cashier",t:"Number forty, please!",gap:3.6,clip:[103.6918,1.4877]},{s:"cashier",t:"Twenty-seven!",gap:3.8,clip:[105.4795,.9869]},{s:"cashier",t:"Fifty-seven, your order\u2019s up!",gap:3.9,cue:"tap",lure:!0,key:"Fifty-seven",clip:[106.7665,1.8328,0]},{s:"cashier",t:"Number sixty-four!",gap:4,clip:[108.8993,1.3557]},{s:"cashier",t:"Forty-seven! Order forty-seven!",gap:4.2,cue:"tap",key:"Forty-seven",clip:[110.5549,2.2565,0]},{s:"cashier",t:"Seventeen, please!",gap:4.3,cue:"tap",lure:!0,key:"Seventeen",clip:[113.1114,1.3074,0]},{s:"cashier",t:"Order forty-six!",gap:4.5,cue:"tap",lure:!0,key:"forty-six",clip:[114.7188,1.2272,.248]},{s:"cashier",t:"Seventy-one!",gap:4.6,clip:[116.246,.9981]},{s:"cashier",t:"Can I get order forty-seven?",gap:4.8,cue:"tap",key:"forty-seven",clip:[117.5442,1.6889,.777]},{s:"cashier",t:"Number thirty-eight, please!",gap:1.5,clip:[119.5331,1.7003]}],side:{at:16,lines:[{s:"gw",t:"He\u2019s evicted the dog, Marco. The dog is living in the shed.",gap:1.2,clip:[121.5333,2.8712]},{s:"gm",t:"How does a cat evict a dog?",gap:.8,clip:[124.7046,1.7216]},{s:"gw",t:"He changed the locks! With his little paws!",gap:1.5,clip:[126.7262,2.1535]},{s:"gm",t:"We don\u2019t even have locks on the shed.",gap:.9,clip:[129.1797,1.763]},{s:"gw",t:"Well, now we do. And he wants a pool.",gap:.2,clip:[131.2427,1.9309]}]}},{type:"wrap",title:"Wrap-up",scores:["noise"],questions:[{q:"What was the lost boy\u2019s name?",a:"Leo",o:["Leo","Theo","Leon","Levi"]}],sideQ:{q:"According to the couple, what did the cat do to the dog?",a:"Evicted it",o:["Evicted it","Adopted it","Sold it","Married it"]}}]},{id:"park",num:2,place:"Theme park",title:"Queue for the Big One",ages:"8+",minAge:8,blurb:"Safety rules over screaming riders, a stalled coaster and the longest queue video ever made.",speakers:{jess:{role:"target",name:"Jess, ride operator",actor:"operator"},jesspa:{role:"target",name:"Jess (PA)",actor:"pa"},kai:{role:"target",name:"Kai",actor:"phone"},max:{role:"distract",name:"Max, your little brother",actor:"brother",pan:.5,gain:.55},parade:{role:"distract",name:"Park PA",actor:"parkpa",pan:-.7,gain:.45},host:{role:"target",name:"Queue video host",actor:"tv"},rider1:{role:"distract",name:"Rider",actor:"rider1",pan:.55,gain:.5},rider2:{role:"distract",name:"Rider",actor:"rider2",pan:-.5,gain:.5},t1:{role:"distract",name:"Teen behind you",actor:"teen1",pan:.68,gain:.4},t2:{role:"distract",name:"Teen behind you",actor:"teen2",pan:.5,gain:.4}},side:{who:"the squirrel duel",line:"You know more about the squirrel duel than the ride you were queuing for."},parts:[{type:"intro"},{type:"listen",title:"Listen",scores:["noise"],card:"Jess is running the safety briefing. Questions appear in the pauses.",amb:{layers:{crowd:[.12,.26],rumble:[.1,.22],wind:[.05,.08]},ev:{scream:[7,12]}},chunks:[{lines:[{s:"jess",t:"Alright, adventurers! Welcome to the Thunderbolt!",gap:.3,clip:[.2,2.7196]},{s:"jess",t:"Before you ride, a few quick rules.",gap:.35,clip:[3.2196,1.9198]},{s:"jess",t:"You must be at least one hundred and thirty centimetres tall.",gap:.4,clip:[5.4394,2.714]},{s:"jess",t:"Loose items, like phones, hats and sunglasses, go in the blue bins by the exit gate. Not in your pockets!",gap:.2,clip:[8.4534,6.3427]}],side:{at:5,lines:[{s:"t1",t:"Did you hear about my uncle? He challenged the mascot to a duel.",gap:.4,clip:[15.0961,3.1047]},{s:"t2",t:"The giant squirrel?",gap:.4,clip:[18.5008,.9128]},{s:"t1",t:"Yeah! Right in front of the carousel. With a foam sword.",gap:.2,clip:[19.7137,2.4083]}]},questions:[{q:"How tall do you need to be to ride?",a:"At least 130 cm",o:["At least 130 cm","At least 113 cm","At least 140 cm","At least 120 cm"]},{q:"Where do loose items go?",a:"In the blue bins by the exit gate",o:["In the blue bins by the exit gate","In the red bins by the entrance","In your pockets","In the lockers by the gift shop"]}]},{lines:[{s:"jess",t:"Once you\u2019re seated, pull the safety bar down until you hear two clicks.",gap:.4,clip:[22.422,3.6365]},{s:"jess",t:"Keep your hands inside the car at all times.",gap:.35,clip:[26.3585,2.2649]},{s:"jess",t:"And if the ride ever stops, stay seated and wait for a staff member.",gap:.35,clip:[28.9234,3.595]},{s:"jess",t:"Have fun, and scream as loud as you like!",gap:.2,clip:[32.8183,2.083]}],questions:[{q:"How do you know the safety bar is down properly?",a:"You hear two clicks",o:["You hear two clicks","You hear one click","A green light flashes","Jess gives a thumbs up"]},{q:"If the ride stops, what should you do?",a:"Stay seated and wait for staff",o:["Stay seated and wait for staff","Undo your safety bar","Climb out and walk down","Wave at the camera"]}]}]},{type:"task",title:"Follow",scores:["instruction"],card:"Your friend Kai is calling with the plan for later. Your little brother has other plans.",amb:{layers:{crowd:[.2,.28],rumble:[.12,.14],wind:[.05,.05]},ev:{scream:[8,14]}},lines:[{s:"kai",t:"Hey! So after this ride, let\u2019s meet at the carousel at three o\u2019clock.",gap:.3,clip:[35.2013,3.1215]},{s:"kai",t:"Actually, no, the carousel\u2019s shut for repairs. Meet at the dodgems instead. Still at three.",gap:-.3,clip:[38.6228,4.7149]},{s:"max",t:"Can I get candy floss? Please? Please please please?",gap:.2,clip:[43.6377,2.8759]},{s:"parade",t:"The Grand Parade is starting on Main Street in five minutes!",gap:-.6,clip:[46.8136,3.5899]},{s:"kai",t:"Oh, and the tickets for the water ride are in locker four seven one nine.",gap:.2,clip:[50.7035,3.603]},{s:"kai",t:"Four, seven, one, nine. Bring them with you!",gap:-.2,clip:[54.6065,2.0171]},{s:"max",t:"I want the blue candy floss! The blue one!",gap:.2,clip:[56.9236,2.1749]}],task:{kind:"fields",prompt:"What\u2019s the plan?",fields:[{label:"Meet at",o:["The dodgems","The carousel","The water ride","Main Street"]},{label:"Time",o:["3:00","2:00","3:30","5:00"]},{label:"Locker",o:["4719","4791","7419","4179"]},{label:"Bring",o:["The water ride tickets","Candy floss","Your little brother","Sunglasses"]}]}},{type:"task",title:"Twist",scores:["noise","instruction"],card:"The Thunderbolt just stopped. At the very top. Jess is on the speakers.",amb:{layers:{crowd:[.05,.05],rumble:[0,0],wind:[.22,.3]},ev:{scream:[4,7]}},lines:[{s:"rider1",t:"Are we stuck? We\u2019re stuck!",gap:.2,clip:[59.3985,1.0205]},{s:"jesspa",t:"Attention, riders. This is Jess. The Thunderbolt has stopped, but everyone is safe.",gap:.3,clip:[60.719,5.472]},{s:"rider2",t:"This is the best day of my life!",gap:-.4,clip:[66.491,1.5237]},{s:"jesspa",t:"Please keep your safety bar down. First, wait for a staff member to reach your car.",gap:.4,clip:[68.3147,5.6467]},{s:"jesspa",t:"When they tell you, lift the bar.",gap:.3,clip:[74.2614,2.3829]},{s:"rider1",t:"I can see my house from here!",gap:-.5,clip:[76.9443,1.2168]},{s:"jesspa",t:"Take the walkway on your left, not the right, and hold the handrail all the way down.",gap:.4,clip:[78.4612,4.9685]},{s:"jesspa",t:"Leave your bags in the car. We\u2019ll bring them to the exit.",gap:.2,clip:[83.7296,3.5714]}],task:{kind:"sequence",prompt:"Put Jess\u2019s steps in order.",tiles:["Wait for a staff member","Lift the safety bar","Take the left walkway","Hold the handrail","Take the right walkway","Grab your bags","Climb out straight away"],answer:["Wait for a staff member","Lift the safety bar","Take the left walkway","Hold the handrail"]}},{type:"respond",title:"Stay",scores:["focus"],pad:"tap",padLabel:"Golden key",card:"Back in the queue. Tap every time the video host says \u201Cgolden key\u201D. Not gold anything else. Not any other key.",amb:{layers:{crowd:[.16,.24],rumble:[.08,.12],wind:[.04,.04]},ev:{scream:[9,15]}},lines:[{s:"host",t:"Welcome to the legend of the Thunderbolt.",gap:1.2,clip:[87.601,2.7149]},{s:"host",t:"Long ago, before this ride was built, this valley belonged to Captain Bolt.",gap:1.2,clip:[90.6159,4.4902]},{s:"host",t:"Captain Bolt was an inventor. He invented the umbrella hat, and the self-stirring teacup.",gap:1.3,clip:[95.4061,5.1559]},{s:"host",t:"One stormy night, lightning struck his workshop. And in the ashes, he found a golden key.",gap:1.6,cue:"tap",key:"golden key",clip:[100.862,5.0963,4.279]},{s:"host",t:"Nobody knew what the key opened. Not even the captain.",gap:1.3,clip:[106.2582,3.2203]},{s:"host",t:"He tried it on his front door. He tried it on his shed. He even tried it on a golden kiwi statue.",gap:1.5,cue:"tap",lure:!0,key:"golden kiwi",clip:[109.7785,5.7961,4.438]},{s:"host",t:"Nothing.",gap:1.4,clip:[115.8746,.8916]},{s:"host",t:"For forty years, he carried the golden key everywhere he went.",gap:1.6,cue:"tap",key:"golden key",clip:[117.0662,3.6383,1.646]},{s:"host",t:"Then, one morning, a golden goose landed on his roof.",gap:1.5,cue:"tap",lure:!0,key:"golden goose",clip:[121.0045,3.2997,1.2]},{s:"host",t:"The goose was holding an old key in its beak.",gap:1.5,cue:"tap",lure:!0,key:"old key",clip:[124.6042,2.6986,1.202]},{s:"host",t:"The captain ignored the goose. The goose was offended.",gap:1.4,clip:[127.6028,3.336]},{s:"host",t:"At last, under an old oak tree, he found a tiny door. And the golden key fit perfectly.",gap:1.7,cue:"tap",key:"golden key",clip:[131.2388,5.3214,3.584]},{s:"host",t:"Behind the door was a rollercoaster. This rollercoaster.",gap:1.4,clip:[136.8602,3.3477]},{s:"host",t:"That is why every rider gets a wooden key from the gift shop.",gap:1.6,cue:"tap",lure:!0,key:"wooden key",clip:[140.5079,3.4494,1.713]},{s:"host",t:"Legend says, if you hold the golden key at the top of the drop, you will not scream.",gap:1.4,cue:"tap",key:"golden key",clip:[144.2573,4.6599,1.433]},{s:"host",t:"You will scream.",gap:1,clip:[149.2172,1.3111]}],side:{at:14,lines:[{s:"t1",t:"So my uncle lost the duel.",gap:.8,clip:[150.8283,1.4748]},{s:"t2",t:"To the squirrel?",gap:.8,clip:[152.603,.7161]},{s:"t1",t:"The squirrel did a backflip. A backflip! In that costume!",gap:1.6,clip:[153.6192,2.7707]},{s:"t2",t:"No way.",gap:.8,clip:[156.6899,.6038]},{s:"t1",t:"Now my uncle\u2019s training in the mountains. For a rematch. He only eats acorns.",gap:.2,clip:[157.5937,4.0062]}]}},{type:"wrap",title:"Wrap-up",scores:["noise"],questions:[{q:"What is the ride called?",a:"The Thunderbolt",o:["The Thunderbolt","The Thunderstorm","The Lightning Bolt","Rolling Thunder"]}],sideQ:{q:"Who did the uncle challenge to a duel?",a:"The squirrel mascot",o:["The squirrel mascot","The ride operator","A golden goose","Captain Bolt"]}}]},{id:"football",num:3,place:"Football field",title:"Coach\u2019s Call",ages:"8+",minAge:8,blurb:"Wind, rain, a crowd and two coaches shouting. Only one of them is yours.",speakers:{coach:{role:"target",name:"Coach Tui",actor:"coach"},coachL:{role:"target",name:"Coach Tui",actor:"coach",pan:-.55},opp:{role:"distract",name:"Other coach",actor:"oppcoach",pan:.6,gain:.62},tired:{role:"target",name:"Coach Tui",actor:"coach2"},tm1:{role:"distract",name:"Teammate",actor:"tm1",pan:.45,gain:.55},tm2:{role:"distract",name:"Teammate",actor:"tm2",pan:.2,gain:.55},tm3:{role:"distract",name:"Teammate",actor:"tm3",pan:.7,gain:.55},p1:{role:"distract",name:"Parent on the sideline",actor:"parent1",pan:-.7,gain:.38},p2:{role:"distract",name:"Parent on the sideline",actor:"parent2",pan:-.6,gain:.38},b1:{role:"distract",name:"Teammate on the bench",actor:"bench1",pan:.65,gain:.4},b2:{role:"distract",name:"Teammate on the bench",actor:"bench2",pan:.5,gain:.4}},side:{who:"Dave and the referee",line:"You know more about Dave\u2019s long-lost twin than the team\u2019s game plan."},parts:[{type:"intro"},{type:"listen",title:"Listen",scores:["noise"],card:"Pre-match huddle. Coach Tui is explaining the plan. Questions appear in the pauses.",amb:{layers:{crowd:[.08,.18],chant:[.06,.22],wind:[.1,.18]},ev:{whistle:[12,20]}},chunks:[{lines:[{s:"coach",t:"Right, team, bring it in! Big game today.",gap:.3,clip:[.2,2.119]},{s:"coach",t:"They\u2019re fast, but we\u2019re smarter.",gap:.35,clip:[2.619,1.3401]},{s:"coach",t:"Our play today is called Lightning.",gap:.3,clip:[4.2591,1.642]},{s:"coach",t:"When I shout Lightning, everybody moves the ball out to the left side. Fast!",gap:.2,clip:[6.2011,4.2933]}],side:{at:3.5,lines:[{s:"p1",t:"See the referee? Dave thinks he\u2019s his long-lost twin.",gap:.5,clip:[10.7944,2.843]},{s:"p2",t:"They look nothing alike.",gap:.4,clip:[13.9374,1.5945]},{s:"p1",t:"Dave says that\u2019s exactly what a twin would say.",gap:.2,clip:[15.8318,2.6313]}]},questions:[{q:"What is today\u2019s play called?",a:"Lightning",o:["Lightning","Thunder","Storm","Flash"]},{q:"When the coach calls it, where does the ball go?",a:"Out to the left side",o:["Out to the left side","Out to the right side","Down the middle","Back to the keeper"]}]},{lines:[{s:"coach",t:"Their best player is number nine. She\u2019s tall, and she\u2019s quick.",gap:.35,clip:[18.7631,3.0553]},{s:"coach",t:"Number eleven, that\u2019s you, you\u2019re marking her on corners.",gap:.35,clip:[22.1184,2.6801]},{s:"coach",t:"And at halftime, drink water. Not fizzy drink! Let\u2019s go!",gap:.2,clip:[25.0985,2.974]}],questions:[{q:"Who is their best player?",a:"Number 9",o:["Number 9","Number 6","Number 11","Number 19"]},{q:"What should you drink at halftime?",a:"Water",o:["Water","Fizzy drink","A sports drink","Orange juice"]}]}]},{type:"respond",title:"Follow",scores:["instruction"],pad:"arrows",card:"Kick-off. Only follow Coach Tui, on the left sideline. Move where he says with the arrows. Ignore your teammates.",amb:{layers:{crowd:[.16,.22],chant:[.14,.2],wind:[.12,.14]},ev:{whistle:[14,22],kick:[3,6]}},lines:[{s:"coachL",t:"Eleven! Push up!",gap:2.2,cue:"up",key:"Push up",clip:[28.3725,.9225,.29]},{s:"tm1",t:"Go right! Go right!",gap:1.8,cue:"right",lure:!0,key:"Go right",clip:[29.595,.8844,0]},{s:"coachL",t:"Drop back!",gap:2.5,cue:"down",key:"Drop back",clip:[30.7795,.6845,0]},{s:"coachL",t:"Go left, eleven!",gap:2.2,cue:"left",key:"Go left",clip:[31.7639,.9173,0]},{s:"tm2",t:"Push up! Push up!",gap:1.7,cue:"up",lure:!0,key:"Push up",clip:[32.9813,1.1751,0]},{s:"tm3",t:"Pass! Pass it!",gap:1.6,clip:[34.4564,1.0503]},{s:"coachL",t:"Go right!",gap:2.4,cue:"right",key:"Go right",clip:[35.8067,.6434,0]},{s:"tm1",t:"Drop back!",gap:1.8,cue:"down",lure:!0,key:"Drop back",clip:[36.7501,.6985,0]},{s:"coachL",t:"Push up, eleven!",gap:2.2,cue:"up",key:"Push up",clip:[37.7486,.8724,0]},{s:"coachL",t:"Drop back! Now!",gap:2.1,cue:"down",key:"Drop back",clip:[38.921,.8837,0]},{s:"tm2",t:"Go left!",gap:1.7,cue:"left",lure:!0,key:"Go left",clip:[40.1047,.8307,0]},{s:"coachL",t:"Go left!",gap:2.2,cue:"left",key:"Go left",clip:[41.2355,.6455,0]},{s:"tm3",t:"Man on! Man on!",gap:1.6,clip:[42.181,1.2497]},{s:"coachL",t:"Go right! Go right!",gap:1.5,cue:"right",key:"Go right",clip:[43.7307,.9486,0]}]},{type:"respond",title:"Twist",scores:["noise","instruction"],pad:"arrows",card:"Second half. It\u2019s pouring, and their coach is yelling too. Only follow Coach Tui \u2014 he\u2019s on your left.",amb:{layers:{crowd:[.1,.12],chant:[.06,.08],rain:[.3,.42],wind:[.16,.22]},ev:{thunder:[11,18]}},lines:[{s:"coachL",t:"Drop back, eleven!",gap:2.1,cue:"down",key:"Drop back",clip:[44.9793,.9709,0]},{s:"opp",t:"Push up! Push up!",gap:1.8,cue:"up",lure:!0,key:"Push up",clip:[46.2502,1.008,0]},{s:"coachL",t:"Go left!",gap:2.2,cue:"left",key:"Go left",clip:[41.2355,.6455,0]},{s:"opp",t:"Go right!",gap:1.6,cue:"right",lure:!0,key:"Go right",clip:[47.5582,.6655,0]},{s:"coachL",t:"Push up!",gap:2.2,cue:"up",key:"Push up",clip:[48.5237,.5701,0]},{s:"tm3",t:"Keeper\u2019s ball!",gap:1.5,clip:[49.3939,.9831]},{s:"coachL",t:"Go right, eleven! Go right!",gap:2,cue:"right",key:"Go right",clip:[50.677,1.253,0]},{s:"opp",t:"Drop back!",gap:1.6,cue:"down",lure:!0,key:"Drop back",clip:[52.23,.7419,0]},{s:"coachL",t:"Drop back!",gap:2.2,cue:"down",key:"Drop back",clip:[30.7795,.6845,0]},{s:"opp",t:"Go left! Left!",gap:1.6,cue:"left",lure:!0,key:"Go left",clip:[53.2719,1.0158,0]},{s:"coachL",t:"Push up! Now!",gap:2,cue:"up",key:"Push up",clip:[54.5877,.7803,0]},{s:"opp",t:"Push up!",gap:1.8,cue:"up",lure:!0,key:"Push up",clip:[55.668,.6138,0]},{s:"coachL",t:"Go left!",gap:1.5,cue:"left",key:"Go left",clip:[41.2355,.6455,0]}]},{type:"respond",title:"Stay",scores:["focus"],pad:"tap",padLabel:"Left wing",card:"Full time. The changing room. You play left wing. Tap every time the coach says \u201Cleft wing\u201D.",amb:{layers:{shower:[.08,.1],crowd:[0,0]},ev:{locker:[6,12]}},lines:[{s:"tired",t:"Okay. Sit down, everyone. Well played. Mostly.",gap:1.4,clip:[56.5817,3.0718]},{s:"tired",t:"Let\u2019s go through it. First half, our defence was solid. Centre backs, good job.",gap:1.5,clip:[59.9536,5.2175]},{s:"tired",t:"Our left wing made some great runs early on.",gap:1.6,cue:"tap",key:"left wing",clip:[65.4711,2.6782,.094]},{s:"tired",t:"Right wing, you need to track back more. I kept shouting.",gap:1.5,cue:"tap",lure:!0,key:"Right wing",clip:[68.4493,4.4405,0]},{s:"tired",t:"The left back did really well against number nine.",gap:1.5,cue:"tap",lure:!0,key:"left back",clip:[73.1898,2.9258,0]},{s:"tired",t:"Midfield. We\u2019ll talk about midfield on Tuesday.",gap:1.5,clip:[76.4155,3.0401]},{s:"tired",t:"Second half, when the rain came, we lost our shape.",gap:1.4,clip:[79.7556,2.9256]},{s:"tired",t:"The left wing kept drifting into the middle. Stay wide.",gap:1.6,cue:"tap",key:"left wing",clip:[82.9813,3.3944,0]},{s:"tired",t:"Keeper, great save in the eightieth minute. Great save.",gap:1.5,clip:[86.6756,3.415]},{s:"tired",t:"The right wing\u2019s cross was lovely. Just lovely.",gap:1.5,cue:"tap",lure:!0,key:"right wing",clip:[90.3906,3.0065,.008]},{s:"tired",t:"Training is on Wednesday this week, not Thursday.",gap:1.5,clip:[93.697,2.9271]},{s:"tired",t:"I want the left wing and the striker practising the Lightning play.",gap:1.6,cue:"tap",key:"left wing",clip:[96.9242,5.2147,.724]},{s:"tired",t:"Also, somebody left a boot in the showers. Size nine. A left boot.",gap:1.6,cue:"tap",lure:!0,key:"left boot",clip:[102.4389,4.8747,4.02]},{s:"tired",t:"Left wing, you\u2019re on orange duty next week.",gap:1.5,cue:"tap",key:"Left wing",clip:[107.6135,2.5772,0]},{s:"tired",t:"Alright. Go home. Drink water.",gap:1,clip:[110.4907,2.0217]}],side:{at:12,lines:[{s:"b1",t:"Did you see Dave at the end? He showed the ref baby photos.",gap:.9,clip:[112.8124,3.775]},{s:"b2",t:"No way.",gap:.8,clip:[116.8874,.8479]},{s:"b1",t:"Then the ref\u2019s mum showed up. She said she\u2019s never seen Dave in her life.",gap:1.4,clip:[118.0353,3.5395]},{s:"b2",t:"Poor Dave.",gap:.8,clip:[121.8747,.9223]},{s:"b1",t:"Dave cried. The ref gave him a yellow card.",gap:.2,clip:[123.097,2.2621]}]}},{type:"wrap",title:"Wrap-up",scores:["noise"],questions:[{q:"Which number were you marking on corners?",a:"Number 9",o:["Number 9","Number 11","Number 6","Number 19"]}],sideQ:{q:"Who does Dave think the referee is?",a:"His long-lost twin",o:["His long-lost twin","His cousin","His old coach","His neighbour"]}}]},{id:"lab",num:4,place:"High school classroom",title:"Science Lab",ages:"13\u201318",minAge:13,blurb:"Hissing burners, chatty lab partners and a test tube that will not stop foaming.",speakers:{patel:{role:"target",name:"Ms Patel",actor:"teacher"},recap:{role:"target",name:"Ms Patel",actor:"teacher"},jayden:{role:"distract",name:"Jayden",actor:"jayden",pan:.55,gain:.55},s1:{role:"distract",name:"Student",actor:"student1",pan:.45,gain:.55},s2:{role:"distract",name:"Student",actor:"student2",pan:-.4,gain:.55},g1:{role:"distract",name:"Whispering student",actor:"gossip1",pan:-.72,gain:.42},g2:{role:"distract",name:"Whispering student",actor:"gossip2",pan:-.6,gain:.42}},side:{who:"Mr Feathers",line:"You know more about Mr Feathers than about acids and bases."},parts:[{type:"intro"},{type:"listen",title:"Listen",scores:["noise"],card:"Ms Patel is starting the lesson. Questions appear in the pauses.",amb:{layers:{kids:[.42,.3],hiss:[.05,.1]},ev:{scrape:[6,11]}},chunks:[{lines:[{s:"patel",t:"Okay, Year Eleven! Eyes up here!",gap:1.3,clip:[.2,2.0957]},{s:"patel",t:"Eyes up here, please!",gap:.6,act:{layer:"kids",to:.03,ramp:1.4},clip:[2.5957,1.363]},{s:"patel",t:"Thank you. And listen carefully, because there\u2019s a quiz at the end of this lesson.",gap:.5,clip:[4.2586,3.7473]},{s:"patel",t:"Today we\u2019re testing whether a liquid is an acid or a base.",gap:.35,clip:[8.306,3.1555]},{s:"patel",t:"We\u2019re using red cabbage juice as our indicator.",gap:.3,clip:[11.7615,2.6339]},{s:"patel",t:"In an acid, it turns pink. In a base, it turns green.",gap:.2,clip:[14.6954,3.2469]}],side:{at:9.5,lines:[{s:"g1",t:"Have you seen the relief teacher? Mr Feathers?",gap:.4,clip:[18.2423,2.5819]},{s:"g2",t:"What about him?",gap:.4,clip:[21.1242,.9895]},{s:"g1",t:"He\u2019s a pigeon. A really tall pigeon. In a cardigan.",gap:.4,clip:[22.4138,2.876]},{s:"g2",t:"He is not.",gap:.3,clip:[25.5898,.9416]},{s:"g1",t:"He pecked at his sandwich. In the staffroom. I saw it.",gap:.2,clip:[26.8314,2.8988]}]},questions:[{q:"What is the class using as an indicator?",a:"Red cabbage juice",o:["Red cabbage juice","Beetroot juice","Blue litmus paper","Lemon juice"]},{q:"What colour does the indicator turn in an acid?",a:"Pink",o:["Pink","Green","Blue","Yellow"]}]},{lines:[{s:"patel",t:"Safety first. Goggles on the whole time, and tie long hair back.",gap:.35,clip:[30.0302,3.5202]},{s:"patel",t:"If anything spills, tell me straight away. Do not wipe it with your sleeve.",gap:.35,clip:[33.8505,3.9186]},{s:"patel",t:"Our first sample is vinegar. The second is baking soda water.",gap:.2,clip:[38.069,3.7775]}],questions:[{q:"If something spills, what should you do?",a:"Tell Ms Patel straight away",o:["Tell Ms Patel straight away","Wipe it with your sleeve","Pour water on it","Keep working"]},{q:"What is the first sample?",a:"Vinegar",o:["Vinegar","Baking soda water","Lemon juice","Salt water"]}]}]},{type:"task",title:"Follow",scores:["instruction"],card:"First practical. Ms Patel talks you through it. Jayden is being Jayden.",amb:{layers:{kids:[.14,.22],hiss:[.1,.12]},ev:{scrape:[7,12],clink:[5,9]}},lines:[{s:"patel",t:"Right. First practical. Take test tube A, and add ten millilitres of vinegar.",gap:.4,clip:[42.1465,4.2622]},{s:"patel",t:"Jayden! Goggles on, please. On your face, not on your head.",gap:.2,clip:[46.7088,3.0564]},{s:"jayden",t:"They\u2019re on, Miss! Sort of.",gap:.3,clip:[50.0651,1.0254]},{s:"patel",t:"Next, add two drops of indicator. Use the purple bottle, not the blue one. Two drops.",gap:.4,clip:[51.3905,4.9693]},{s:"patel",t:"Jayden, that is a Bunsen burner. It is not a microphone.",gap:.2,clip:[56.6598,3.4428]},{s:"jayden",t:"Testing, testing!",gap:.3,clip:[60.4026,.9328]},{s:"patel",t:"Then swirl it gently five times, and write down the colour.",gap:.2,clip:[61.6354,3.1598]}],task:{kind:"sequence",prompt:"Put the practical steps in order.",tiles:["Add 10 ml of vinegar","Add 2 drops from the purple bottle","Swirl it 5 times","Write down the colour","Add 2 drops from the blue bottle","Heat it for 30 seconds","Swirl it 10 times"],answer:["Add 10 ml of vinegar","Add 2 drops from the purple bottle","Swirl it 5 times","Write down the colour"]}},{type:"task",title:"Twist",scores:["noise","instruction"],card:"Uh oh. A test tube on bench three is foaming over. That\u2019s your bench.",amb:{layers:{kids:[.36,.42],hiss:[.12,.12],bubble:[.2,.26]},ev:{scrape:[3,6]}},lines:[{s:"s2",t:"Miss! Miss! It\u2019s foaming!",gap:-.3,clip:[65.0953,1.2698]},{s:"s1",t:"Ew! It\u2019s everywhere!",gap:.2,clip:[66.665,.8845]},{s:"patel",t:"Okay, everyone, stay calm! Bench three, listen to me.",gap:.4,clip:[67.8495,2.9999]},{s:"patel",t:"First, turn off your Bunsen burner.",gap:.3,clip:[71.1494,1.9463]},{s:"s1",t:"It\u2019s touching my shoe!",gap:-.3,clip:[73.3957,1.098]},{s:"patel",t:"Then put on gloves from the red box, not the green box.",gap:.4,clip:[74.7937,3.0367]},{s:"patel",t:"Wipe it up with paper towels, and put the towels in the yellow bin. Not the recycling!",gap:.2,clip:[78.1304,4.591]}],task:{kind:"sequence",prompt:"Put Ms Patel\u2019s clean-up steps in order.",tiles:["Turn off the Bunsen burner","Put on gloves from the red box","Wipe it up with paper towels","Put the towels in the yellow bin","Put on gloves from the green box","Put the towels in the recycling","Wipe it with your sleeve"],answer:["Turn off the Bunsen burner","Put on gloves from the red box","Wipe it up with paper towels","Put the towels in the yellow bin"]}},{type:"notes",title:"Stay",scores:["focus"],writeTime:28,card:"The recap. Take notes on the key points. You\u2019re marked on ideas, not spelling or length.",amb:{layers:{kids:[.1,.26],hiss:[.06,.06]},ev:{scrape:[8,14],clink:[7,12]}},lines:[{s:"recap",t:"Okay. Let\u2019s recap what we found today.",gap:1,clip:[83.0214,2.3422]},{s:"recap",t:"An indicator is a substance that changes colour depending on whether something is an acid or a base.",gap:1.4,clip:[85.6636,5.9135]},{s:"recap",t:"Our red cabbage indicator turned pink in acids, and green in bases.",gap:1.4,clip:[91.8772,4.1928]},{s:"recap",t:"The vinegar turned pink, so vinegar is an acid.",gap:1.3,clip:[96.37,2.8355]},{s:"recap",t:"The baking soda water turned green, so baking soda is a base.",gap:1.4,clip:[99.5055,3.9085]},{s:"recap",t:"Scientists measure this with the pH scale, which goes from zero to fourteen.",gap:1.3,clip:[103.714,4.657]},{s:"recap",t:"Seven is neutral, like pure water. Below seven is acidic, and above seven is basic.",gap:1.2,clip:[108.671,5.4052]},{s:"recap",t:"Right. Write that down, and pack away your equipment. Carefully, Jayden.",gap:.2,clip:[114.3762,3.9217]}],side:{at:10,lines:[{s:"g1",t:"Mr Feathers got promoted.",gap:.9,clip:[118.5979,1.7172]},{s:"g2",t:"To what?",gap:.8,clip:[120.615,.774]},{s:"g1",t:"Principal. He gave a speech at assembly. It was mostly cooing.",gap:1.4,clip:[121.689,3.239]},{s:"g2",t:"And?",gap:.8,clip:[125.228,.6285]},{s:"g1",t:"Everyone clapped. It was very moving.",gap:.2,clip:[126.1565,1.9992]}]},keyPoints:[{p:"An indicator changes colour depending on whether something is an acid or a base",kw:[["indicator"],["colour","color","change"]]},{p:"Red cabbage indicator turns pink in acids and green in bases",kw:[["pink"],["green"]]},{p:"Vinegar turned pink, so vinegar is an acid",kw:[["vinegar"],["acid","acidic"]]},{p:"Baking soda turned green, so baking soda is a base",kw:[["baking soda","soda","bicarb"],["base","basic","alkali"]]},{p:"The pH scale goes from 0 to 14",kw:[["ph"],["14","fourteen"]]},{p:"7 is neutral; below 7 is acidic, above 7 is basic",kw:[["7","seven"],["neutral"]]}]},{type:"wrap",title:"Wrap-up",scores:["noise"],questions:[{q:"How much vinegar did you add to test tube A?",a:"10 ml",o:["10 ml","20 ml","2 ml","5 ml"]}],sideQ:{q:"According to the whispers, what is Mr Feathers?",a:"A very tall pigeon",o:["A very tall pigeon","A robot in a wig","A retired pirate","A goose in a suit"]}}]},{id:"office",num:5,place:"Office",title:"First Day",ages:"16+",minAge:16,blurb:"Phones, printers, a fire drill and the most boring budget meeting in history.",speakers:{rachel:{role:"target",name:"Rachel, your manager",actor:"manager"},ben:{role:"distract",name:"Ben",actor:"ben",pan:.6,gain:.55},warden:{role:"target",name:"Fire warden",actor:"warden"},gary:{role:"target",name:"Gary from Finance",actor:"monitor"},tash:{role:"distract",name:"Tash, next desk",actor:"tash",pan:.7,gain:.42}},side:{who:"the goose lawsuit",line:"You know more about the goose lawsuit than the budget."},parts:[{type:"intro"},{type:"listen",title:"Listen",scores:["noise"],card:"Your first morning. Rachel is showing you around. Questions appear in the pauses.",amb:{layers:{crowd:[.08,.2],hvac:[.08,.08],keys:[.06,.1]},ev:{phone:[9,15],printer:[14,22],grinder:[16,24]}},chunks:[{lines:[{s:"rachel",t:"Welcome aboard! I\u2019m Rachel, and I\u2019ll be your manager.",gap:.35,clip:[.2,2.9569]},{s:"rachel",t:"You\u2019re sitting at desk fourteen, by the window.",gap:.35,clip:[3.4569,2.2104]},{s:"rachel",t:"Your login details are in the green envelope on your keyboard.",gap:.35,clip:[5.9673,3.2842]},{s:"rachel",t:"Oh, and the kitchen is down the hall, second door on the right.",gap:.2,clip:[9.5515,3.4391]}],side:{at:4,lines:[{s:"tash",t:"No, Mum, listen. The goose is suing me.",gap:1.2,clip:[13.2906,2.2713]},{s:"tash",t:"Because I looked at it! Apparently that\u2019s emotional damage.",gap:1,clip:[15.8619,3.2607]},{s:"tash",t:"A goose, Mum. From the park.",gap:.2,clip:[19.4226,1.7303]}]},questions:[{q:"Which desk is yours?",a:"Desk 14",o:["Desk 14","Desk 40","Desk 4","Desk 41"]},{q:"Where are your login details?",a:"In the green envelope on your keyboard",o:["In the green envelope on your keyboard","In the blue folder in your drawer","In an email from IT","On a sticky note on your screen"]}]},{lines:[{s:"rachel",t:"Our team meeting is every Monday at nine thirty.",gap:.4,clip:[21.4529,2.7323]},{s:"rachel",t:"And whatever you do, don\u2019t use the coffee machine on the left.",gap:.3,clip:[24.4852,3.0526]},{s:"rachel",t:"It\u2019s haunted. Well, it\u2019s broken. Use the one on the right.",gap:.2,clip:[27.8378,3.1697]}],questions:[{q:"When is the team meeting?",a:"Monday at 9:30",o:["Monday at 9:30","Monday at 9:00","Tuesday at 9:30","Friday at 3:30"]},{q:"Which coffee machine should you use?",a:"The one on the right",o:["The one on the right","The one on the left","The one in the lobby","Neither, both are broken"]}]}]},{type:"task",title:"Follow",scores:["instruction"],card:"Rachel has three jobs for you this morning. Ben has one question about lunch.",amb:{layers:{crowd:[.16,.22],hvac:[.08,.08],keys:[.1,.12]},ev:{phone:[8,13],ping:[4,8],printer:[15,22]}},lines:[{s:"rachel",t:"Okay, a few jobs for this morning. First, email the Henderson file to Priya.",gap:.3,clip:[31.3075,4.514]},{s:"rachel",t:"Actually, no, send it to Tom. Priya\u2019s on leave this week.",gap:-.3,clip:[36.1214,3.3041]},{s:"ben",t:"Hey Rachel, is anyone ordering sushi for lunch?",gap:.2,clip:[39.7255,2.7978]},{s:"rachel",t:"Not now, Ben! Second, book meeting room three for two o\u2019clock. Not room two, the projector\u2019s broken.",gap:-.2,clip:[42.8233,5.7066]},{s:"ben",t:"I\u2019m just saying, the sushi place closes at one.",gap:.3,clip:[48.83,2.4977]},{s:"rachel",t:"And third, print twenty copies of the budget report. Double-sided, please!",gap:.2,clip:[51.6277,4.2035]}],task:{kind:"fields",prompt:"Set up your three jobs.",fields:[{label:"Send the Henderson file to",o:["Tom","Priya","Ben","Rachel"]},{label:"Book",o:["Room 3","Room 2","Room 13","Room 4"]},{label:"At",o:["2:00","1:00","12:00","3:00"]},{label:"Print",o:["20 copies, double-sided","20 copies, single-sided","12 copies, double-sided","2 copies, double-sided"]}]}},{type:"task",title:"Twist",scores:["noise","instruction"],card:"Wait. Is that the fire alarm?",amb:{layers:{crowd:[.3,.34],alarm:[.2,.22],hvac:[.08,.08]}},lines:[{s:"warden",t:"Attention, everyone! This is a fire drill. Leave your things where they are.",gap:.4,clip:[56.1312,4.8414]},{s:"warden",t:"Use stairwell B. Not the lifts. Stairwell B!",gap:.2,clip:[61.2726,3.3408]},{s:"ben",t:"Can I grab my coffee first?",gap:.1,clip:[64.9135,1.8612]},{s:"warden",t:"No, Ben! When you get outside, meet by the red sign in the car park.",gap:.3,clip:[67.0746,4.5936]},{s:"warden",t:"Not the front entrance. The red sign, in the car park.",gap:.2,clip:[71.9682,3.629]}],task:{kind:"fields",prompt:"What does the warden want you to do?",fields:[{label:"Exit using",o:["Stairwell B","Stairwell A","The lifts","The fire escape"]},{label:"Meet",o:["By the red sign in the car park","At the front entrance","By the blue sign in the car park","At the caf\xE9 across the road"]},{label:"Take with you",o:["Nothing","Your laptop","Your coffee","Your bag"]}]}},{type:"notes",title:"Stay",scores:["focus"],writeTime:28,notify:!0,card:"Rachel missed the budget meeting. Take notes for her. You\u2019re marked on the key points, not spelling or length.",amb:{layers:{crowd:[.08,.14],hvac:[.1,.1],keys:[.08,.1]},ev:{ping:[6,11],phone:[15,24]}},lines:[{s:"gary",t:"Okay. Hi, everyone. Can you see my screen? I\u2019ll assume yes.",gap:1.2,clip:[75.8972,4.7007]},{s:"gary",t:"So. This year\u2019s total budget is two point four million dollars.",gap:1.4,clip:[80.8978,4.5585]},{s:"gary",t:"Travel spending is down fifteen percent. So, fewer conferences. Sorry.",gap:1.4,clip:[85.7563,5.2592]},{s:"gary",t:"Marketing gets an extra fifty thousand dollars.",gap:1.3,clip:[91.3156,3.4213]},{s:"gary",t:"The new office chairs arrive in March. Please stop asking about the chairs.",gap:1.4,clip:[95.0369,5.1351]},{s:"gary",t:"Every team needs to send their spending report by the thirtieth of June.",gap:1.4,clip:[100.472,4.5521]},{s:"gary",t:"And, uh, the staff party budget has been cut. So this year, it\u2019s a potluck.",gap:1.2,clip:[105.3241,5.4368]},{s:"gary",t:"Right. That\u2019s everything. Any questions? No? Good.",gap:.2,clip:[111.0609,3.6864]}],side:{at:11,lines:[{s:"tash",t:"Mum, it\u2019s worse. The goose got a lawyer.",gap:1.4,clip:[115.0473,2.3603]},{s:"tash",t:"Another goose. In a tiny suit.",gap:1.6,clip:[117.7076,1.9726]},{s:"tash",t:"We lost, Mum. I owe the goose bread. Every Sunday. For a year.",gap:.2,clip:[119.9802,3.4868]}]},keyPoints:[{p:"Total budget this year is $2.4 million",kw:[["2.4","2,4","two point four","2 point 4"],["million","m"]]},{p:"Travel spending is down 15%",kw:[["travel"],["15","fifteen"]]},{p:"Marketing gets an extra $50,000",kw:[["marketing"],["50","fifty"]]},{p:"New office chairs arrive in March",kw:[["chair"],["march"]]},{p:"Spending reports are due by 30 June",kw:[["report"],["june","30","thirtieth"]]},{p:"Staff party budget cut, so it\u2019s a potluck",kw:[["party","potluck"],["cut","potluck"]]}]},{type:"wrap",title:"Wrap-up",scores:["noise"],questions:[{q:"Who did you send the Henderson file to?",a:"Tom",o:["Tom","Priya","Ben","Rachel"]}],sideQ:{q:"What does Tash owe the goose?",a:"Bread every Sunday for a year",o:["Bread every Sunday for a year","A written apology","Fifty dollars","A new pond"]}}]}],yr={shared:{file:"shared.mp3",clips:{hp_left:[.2,1.1636],hp_right:[1.6636,1.3352]}},sfx:{screams:{file:"screams.mp3",clips:{screams0:[.2,1.303],screams1:[1.803,1.0189],screams2:[3.1219,1.1453],screams3:[4.5672,1.1865],screams4:[6.0537,1.2265],screams5:[7.5802,1.215]}},cheers:{file:"cheers.mp3",clips:{cheers0:[.2,1.4333],cheers1:[1.9333,1.2358],cheers2:[3.4692,1.1182],cheers3:[4.8874,1.2149]}}},drills:{file:"drills.mp3",clips:{"code|One.":[.2,.7203],"code|Two.":[1.2203,.6791],"code|Three.":[2.1995,.7412],"code|Four.":[3.2407,.61],"code|Five.":[4.1507,.5759],"code|Six.":[5.0266,.5546],"code|Eight.":[5.8812,.7163],"code|Nine.":[6.8975,.9824],"codeA|One.":[8.1799,.5012],"codeA|Two.":[8.9811,.4943],"codeA|Three.":[9.7754,.5753],"codeA|Four.":[10.6507,.5715],"codeA|Five.":[11.5222,.6285],"codeA|Six.":[12.4507,.5913],"codeA|Eight.":[13.342,.5076],"codeA|Nine.":[14.1496,.5634],"codeB|One.":[15.013,.5871],"codeB|Two.":[15.9001,.5228],"codeB|Three.":[16.7228,.6298],"codeB|Four.":[17.6526,.6658],"codeB|Five.":[18.6185,.7244],"codeB|Six.":[19.6428,.5268],"codeB|Eight.":[20.4696,.5598],"codeB|Nine.":[21.3294,.6459],"code|The code is.":[22.2753,.959],"teach|Listen carefully.":[23.5343,1.1344],"teach|First, tap the red circle.":[24.9687,1.7317],"teach|Then the red circle.":[27.0005,1.3116],"teach|And last, the red circle.":[28.612,1.6374],"teach|No, wait. Make that the red circle.":[30.5495,2.0328],"teach|First, tap the blue square.":[32.8823,1.5978],"teach|Then the blue square.":[34.7801,1.2301],"teach|And last, the blue square.":[36.3102,1.4903],"teach|No, wait. Make that the blue square.":[38.1005,1.9766],"teach|First, tap the green triangle.":[40.3771,1.8925],"teach|Then the green triangle.":[42.5696,1.4819],"teach|And last, the green triangle.":[44.3515,1.8248],"teach|No, wait. Make that the green triangle.":[46.4763,2.213],"teach|First, tap the yellow star.":[48.9892,1.7369],"teach|Then the yellow star.":[51.0262,1.3105],"teach|And last, the yellow star.":[52.6366,1.6165],"teach|No, wait. Make that the yellow star.":[54.5532,2.0697],"teach|First, tap the blue circle.":[56.9229,1.6889],"teach|Then the blue circle.":[58.9118,1.2782],"teach|And last, the blue circle.":[60.49,1.588],"teach|No, wait. Make that the blue circle.":[62.378,2.0396],"teach|First, tap the red star.":[64.7176,1.6155],"teach|Then the red star.":[66.6331,1.2538],"teach|And last, the red star.":[68.1869,1.5037],"teach|No, wait. Make that the red star.":[69.9906,1.9589],"teach|First, tap the green square.":[72.2495,1.7389],"teach|Then the green square.":[74.2884,1.2922],"teach|And last, the green square.":[75.8806,1.5776],"teach|No, wait. Make that the green square.":[77.7582,2.0273],"teach|First, tap the yellow triangle.":[80.0856,1.9476],"teach|Then the yellow triangle.":[82.3332,1.5533],"teach|And last, the yellow triangle.":[84.1865,1.7956],"teach|No, wait. Make that the yellow triangle.":[86.2821,2.2793],"kid1|Miss, can I borrow a pen?":[88.8615,1.1582],"kid2|What page are we on?":[90.3196,1.2439],"kid1|He took my rubber!":[91.8635,.8765],"kid2|Is it lunch yet?":[93.04,1.1405],"kid1|Can I go to the toilet?":[94.4805,1.0493],"drone|Dog.":[95.8298,.7877],"drone|Cat.":[96.9176,.7467],"drone|Horse.":[97.9643,.8013],"drone|Rabbit.":[99.0655,.8833],"drone|Lion.":[100.2488,.8441],"drone|Sheep.":[101.393,.6199],"drone|Goat.":[102.3128,.6679],"drone|Tiger.":[103.2807,.8849],"drone|Mouse.":[104.4657,.788],"drone|Whale.":[105.5537,.7913],"drone|Duck.":[106.6449,.7255],"drone|Frog.":[107.6704,.8304],"drone|Snake.":[108.8007,.8],"drone|Zebra.":[109.9008,.8488],"drone|Monkey.":[111.0495,.91],"drone|Owl.":[112.2595,.8062],"drone|Spoon.":[113.3657,.84],"drone|Chair.":[114.5057,.8118],"drone|Lamp.":[115.6175,.7769],"drone|Sock.":[116.6944,.702],"drone|Cloud.":[117.6965,.8778],"drone|Pencil.":[118.8742,.9243],"drone|Window.":[120.0985,.8559],"drone|Bucket.":[121.2544,.7864],"drone|Ladder.":[122.3408,.7636],"drone|Candle.":[123.4044,.8547],"drone|Button.":[124.559,.8605],"drone|Pillow.":[125.7195,.7406],"drone|Bottle.":[126.7601,.838],"drone|Carpet.":[127.8981,.8626],"drone|Teapot.":[129.0607,.8863],"drone|Basket.":[130.2471,.9797],"drone|Hammer.":[131.5267,.7425],"drone|Mirror.":[132.5692,.7578],"drone|Blanket.":[133.627,.9357],"drone|Wallet.":[134.8627,.777],"drone|Kettle.":[135.9397,.8761],"drone|Jacket.":[137.1158,.9403],"drone|Table.":[138.3561,.8223],"drone|Piano.":[139.4784,.8611],"drone|Ticket.":[140.6395,.8123],"drone|Garden.":[141.7517,.8507],"drone|Feather.":[142.9025,.7369],"drone|Kennel.":[143.9393,.785],"drone|Saddle.":[145.0243,.8288],"drone|Leash.":[146.1531,.755],"drone|Nest.":[147.2081,.8083],"drone|Paw.":[148.3163,.6875],"drone|Hoof.":[149.3038,.7125],"drone|Collar.":[150.3164,.8087],"drone|Fishbowl.":[151.4251,.9859],"drone|Birdcage.":[152.711,1.0925]}}},St={list:[{id:"noise",num:1,skill:"Noise filter",title:"Catch the Code",scene:"mall",mins:"5 levels",blurb:"A voice reads three numbers. Type her code while the crowd, and later a second voice, try to drown her out.",card:"Listen for her voice. She says \u201CThe code is\u201D, then three numbers. Type them in.",tip:"Lock onto her first words, \u201CThe code is\u201D. Once you have found her voice, it is easier to keep hold of it.",levels:[{name:"Quiet corner",codes:6,snr:9,rival:!1,need:5,goal:"Get 5 of 6 codes. The crowd is soft."},{name:"Busy caf\xE9",codes:6,snr:4,rival:!1,need:5,goal:"Get 5 of 6 codes. The crowd is louder now."},{name:"Second voice",codes:6,snr:4,rival:!0,need:5,goal:"Get 5 of 6 codes. A man reads other numbers at the same time. Ignore him."},{name:"Rush hour",codes:8,snr:0,rival:!0,need:6,goal:"Get 6 of 8 codes. The crowd is as loud as her voice."},{name:"Full volume",codes:8,snr:-4,rival:!0,need:6,goal:"Get 6 of 8 codes. The noise is louder than her voice."}]},{id:"steps",num:2,skill:"Instruction tracking",title:"Step by Step",scene:"lab",mins:"5 levels",blurb:"Tap the shapes in the order you hear them. Each level adds steps, then corrections and interruptions.",card:"Ms Patel lists shapes to tap, in order. Sometimes she changes one. Tap them in the order she wants.",tip:"Say the list quietly to yourself as you hear it. When she says \u201CNo, wait\u201D, swap just that one step.",levels:[{name:"Two steps",rounds:4,span:2,fix:!1,interrupt:!1,chatter:.04,need:3,goal:"Get 3 of 4 rounds. Two shapes each time."},{name:"Three steps",rounds:4,span:3,fix:!1,interrupt:!1,chatter:.08,need:3,goal:"Get 3 of 4 rounds. Three shapes each time."},{name:"Four steps",rounds:4,span:4,fix:!1,interrupt:!0,chatter:.12,need:3,goal:"Get 3 of 4 rounds. Four shapes, and the class is getting chatty."},{name:"Change of plan",rounds:4,span:4,fix:!0,interrupt:!0,chatter:.15,need:3,goal:"Get 3 of 4 rounds. Ms Patel changes one shape every time. Swap it."},{name:"Chaos class",rounds:4,span:5,fix:!0,interrupt:!0,chatter:.22,need:3,goal:"Get 3 of 4 rounds. Five shapes, a correction and interruptions."}]},{id:"stamina",num:3,skill:"Focus stamina",title:"Stay Tuned",scene:"office",mins:"5 levels",blurb:"A slow, steady list of words. Tap every time you hear an animal. Each level runs longer, with more to pull you away.",card:"Tap every time you hear an animal. Not things that go with animals (a leash is not an animal). Just animals.",tip:"When you notice your mind wandering, that is the moment to come back. Noticing is the skill.",levels:[{name:"Warm-up",secs:45,gap:[1.8,2.4],lures:!1,notify:!1,chatter:[0,0],p:.25,needPct:80,maxWrong:2,goal:"Catch 80% of the animals, with no more than 2 wrong taps."},{name:"Tricky words",secs:60,gap:[1.8,2.4],lures:!0,notify:!1,chatter:[0,.03],p:.23,needPct:80,maxWrong:2,goal:"Same again, but now some words go with animals without being animals."},{name:"Pings",secs:75,gap:[1.5,2.1],lures:!0,notify:!0,chatter:[.02,.07],p:.22,needPct:80,maxWrong:3,goal:"Catch 80% of the animals while messages pop up. No more than 3 wrong taps."},{name:"Picking up",secs:90,gap:[1.3,1.9],lures:!0,notify:!0,chatter:[.03,.13],p:.2,needPct:80,maxWrong:3,goal:"Faster words, more chatter. Catch 80%, with no more than 3 wrong taps."},{name:"The long haul",secs:120,gap:[1.3,1.9],lures:!0,notify:!0,chatter:[.04,.18],p:.16,needPct:80,maxWrong:3,goal:"Two minutes, fewer animals, lots going on. Catch 80%, no more than 3 wrong taps."}]}],digits:{1:"One.",2:"Two.",3:"Three.",4:"Four.",5:"Five.",6:"Six.",8:"Eight.",9:"Nine."},codeIntro:"The code is.",items:[["red","circle"],["blue","square"],["green","triangle"],["yellow","star"],["blue","circle"],["red","star"],["green","square"],["yellow","triangle"]],step:{first:"First, tap the {c} {s}.",then:"Then the {c} {s}.",last:"And last, the {c} {s}.",fix:"No, wait. Make that the {c} {s}."},stepIntro:"Listen carefully.",interrupt:[["kid1","Miss, can I borrow a pen?"],["kid2","What page are we on?"],["kid1","He took my rubber!"],["kid2","Is it lunch yet?"],["kid1","Can I go to the toilet?"]],animals:["Dog.","Cat.","Horse.","Rabbit.","Lion.","Sheep.","Goat.","Tiger.","Mouse.","Whale.","Duck.","Frog.","Snake.","Zebra.","Monkey.","Owl."],objects:["Spoon.","Chair.","Lamp.","Sock.","Cloud.","Pencil.","Window.","Bucket.","Ladder.","Candle.","Button.","Pillow.","Bottle.","Carpet.","Teapot.","Basket.","Hammer.","Mirror.","Blanket.","Wallet.","Kettle.","Jacket.","Table.","Piano.","Ticket.","Garden."],lures:["Feather.","Kennel.","Saddle.","Leash.","Nest.","Paw.","Hoof.","Collar.","Fishbowl.","Birdcage."]};var _r=Object.assign({markingEndpoint:"",holdMs:900},typeof window!="undefined"&&window.ATTUNE_CONFIG||{});var Oo=[{id:"noise",name:"Noise filter",blurb:"Picking one voice out of the din"},{id:"instruction",name:"Instruction tracking",blurb:"Holding steps and catching changes"},{id:"focus",name:"Focus stamina",blurb:"Staying with it when it gets long and dull"}];function Pc(i,e){let t=0;return e.forEach((n,s)=>{i[s]===n&&t++}),t/e.length}function Ic(i,e){let t=0;return e.forEach((n,s)=>{i[s]===n.o[0]&&t++}),t/e.length}function Lc(i,e,t=2.2){let n=i.map(d=>({...d,hit:!1,rt:null,fa:!1})),s=0;for(let d of e){let u=n.filter(p=>d.t>=p.keyT-.25&&d.t<=p.end+t),h=u.filter(p=>p.target&&!p.hit&&p.btn===d.btn).sort((p,y)=>y.keyT-p.keyT)[0];if(h){h.hit=!0,h.rt=Math.max(0,d.t-h.keyT);continue}let f=u.filter(p=>!p.target&&p.btn===d.btn&&!p.fa).sort((p,y)=>y.keyT-p.keyT)[0];if(f){f.fa=!0;continue}s++}let r=n.filter(d=>d.target),a=n.filter(d=>!d.target&&d.btn),o=r.filter(d=>d.hit).length,l=a.filter(d=>d.fa).length;return{score:Math.max(0,Math.min(1,o/r.length-.5*(l/Math.max(1,a.length))-.05*Math.min(s,6))),hits:o,targets:r.length,fas:l,lures:a.length,extra:s,cues:n}}function $g(i,e){let t=" "+i.toLowerCase().replace(/[^a-z0-9.%$, ]+/g," ")+" ",n=e.kw.map(r=>r.some(a=>{let o=a.toLowerCase();return o.length<=2?new RegExp("(^|[^a-z0-9])"+o.replace(".","\\.")+"([^a-z0-9]|$)").test(t):t.includes(o)})),s=n.filter(Boolean).length;return s===n.length?"full":s>0?"partial":"missed"}var Vu={full:1,partial:.5,missed:0},Rc=null;function Dc(){return Rc||(Rc=window.claude&&window.claude.use?window.claude.use("sample").catch(()=>null):Promise.resolve(null)),Rc}async function Gu(i,e,t){let n=e.keyPoints,s=(i||"").trim();if(!s)return{score:0,method:"empty",points:n.map(o=>({p:o.p,mark:"missed"}))};let r=`You are marking a listening game. A player listened to a short spoken talk and typed notes while distractions played.
Mark the notes against each key point. Rules: ignore spelling, grammar, abbreviations and style; do not reward length; give "full" if the idea is clearly there in any wording, "partial" if it is incomplete or partly wrong, "missed" if absent or wrong.

Talk transcript:
${t}

Key points:
${n.map((o,l)=>`${l+1}. ${o.p}`).join(`
`)}

Player's notes:
"""${s.slice(0,4e3)}"""

Reply with only JSON: {"marks": ["full"|"partial"|"missed", ...one per key point in order], "tip": "one short encouraging sentence about what to listen for next time"}`;try{let o=await Dc();if(o&&o.json){let l=await o.json(r,{modelTier:"quick"});if(l&&Array.isArray(l.marks)&&l.marks.length===n.length)return a(l.marks,"ai",l.tip)}}catch{}if(_r.markingEndpoint)try{let o=await fetch(_r.markingEndpoint,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({transcript:t,keyPoints:n.map(l=>l.p),notes:s.slice(0,4e3)})});if(o.ok){let l=await o.json();if(Array.isArray(l.marks)&&l.marks.length===n.length)return a(l.marks,"ai",l.tip)}}catch{}return a(n.map(o=>$g(s,o)),"keywords");function a(o,l,c){let d=o.map(h=>Vu[h]!==void 0?h:"missed");return{score:d.reduce((h,f)=>h+Vu[f],0)/n.length,method:l,tip:c,points:n.map((h,f)=>({p:h.p,mark:d[f]}))}}}function Wu(i,e){let t={};Oo.forEach(c=>t[c.id]=[]);for(let c of e)if(c.cats)for(let d of c.cats)t[d].push(c.score);let n={};Oo.forEach(c=>{let d=t[c.id];n[c.id]=d.length?Math.round(d.reduce((u,h)=>u+h,0)/d.length*100):null});let s=Object.values(n).filter(c=>c!==null),r=Math.round(s.reduce((c,d)=>c+d,0)/s.length),a=r>=85?"Locked in":r>=70?"Tuned in":r>=50?"In and out":"Lots of static",o=[];e.forEach(c=>c.cues&&c.cues.forEach(d=>d.target&&o.push({part:c.title,t:d.keyT-c.t0,rt:d.hit?d.rt:null})));let l=null;if(o.length){let c=o.filter(h=>h.rt!==null).map(h=>h.rt).sort((h,f)=>h-f),d=c.length?c[Math.floor(c.length/2)]:0,u=o.filter(h=>h.rt===null||h.rt>Math.max(1.6,d*1.8));if(!u.length)l={ok:!0,text:"No drift spotted \u2014 your reactions stayed steady the whole way."};else{let h=u[0],f=Math.floor(h.t/60),p=Math.round(h.t%60);l={ok:!1,text:`Your attention first slipped ${h.t<4?`right at the start of \u201C${h.part}\u201D`:`${f?f+" min ":""}${p} s into \u201C${h.part}\u201D`}${h.rt===null?" \u2014 you missed a call there":" \u2014 your reaction slowed right down"}.${u.length>1?` It slipped ${u.length} times in all.`:""}`,count:u.length}}}return{sub:n,overall:r,band:a,drift:l}}var xi=new URLSearchParams(location.search),Le=Math.max(1,+xi.get("speed")||1),Rn=xi.has("auto"),ct=(i,e=document)=>e.querySelector(i),hn=(i,e,t)=>{let n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.innerHTML=t),n},Pe=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),br=i=>new Promise(e=>setTimeout(e,i/Le)),ws=i=>{let e=i.slice();for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e},Cn={get(i){try{return JSON.parse(localStorage.getItem("attune."+i))}catch{return null}},set(i,e){try{localStorage.setItem("attune."+i,JSON.stringify(e))}catch{}}},ne=new ko;ne.speed=Le;var ke={hud:ct("#hud"),dock:ct("#dock"),big:ct("#big"),screens:ct("#screens"),phone:ct("#phone"),toasts:ct("#toasts"),tip:ct("#tip"),loader:ct("#loader")},Ie={level:null,results:[],talk:[],acts:[],t0:0,running:!1,runId:0},Pt=new Set,An={age:null,asked:!1};function Ho(){Ie.runId++,Ie.running=!1;for(let i of[...Pt])try{i()}catch{}Pt.clear(),Ie.talk=[],Ie.acts=[]}window.__attune=Ie;window.__attuneAudioGain=()=>ne.master?Math.round(ne.master.gain.value*1e3)/1e3:null;try{localStorage.removeItem("attune.age")}catch{}Dc();var Yu,Ut={v:(Yu=Cn.get("vol"))!=null?Yu:.8,muted:!!Cn.get("muted")};function Bo(){ne.setVolume(Ut.muted?0:Ut.v);let i=ct("#vol");i.classList.toggle("muted",Ut.muted||Ut.v===0),i.classList.toggle("low",Ut.v<.4),ct("#vol-range").value=Math.round(Ut.v*100),ct("#vol-val").textContent=Ut.muted?"Off":Math.round(Ut.v*100),ct("#vol-mute").textContent=Ut.muted?"Unmute":"Mute",ct("#vol-btn").setAttribute("aria-label",Ut.muted?"Volume (muted)":`Volume ${Math.round(Ut.v*100)}%`),Cn.set("vol",Ut.v),Cn.set("muted",Ut.muted)}(function(){let e=ct("#vol-pop"),t=ct("#vol-btn"),n=s=>{e.hidden=!s,t.setAttribute("aria-expanded",s?"true":"false")};t.addEventListener("click",s=>{s.stopPropagation(),n(e.hidden)}),ct("#vol-range").addEventListener("input",s=>{Ut.v=+s.target.value/100,Ut.muted=!1,Bo()}),ct("#vol-mute").addEventListener("click",()=>{Ut.muted=!Ut.muted,Bo()}),document.addEventListener("pointerdown",s=>{!e.hidden&&!ct("#vol").contains(s.target)&&n(!1)}),document.addEventListener("keydown",s=>{let r=document.activeElement&&document.activeElement.tagName,a=r==="TEXTAREA"||r==="INPUT"&&document.activeElement.type!=="range";(s.key==="m"||s.key==="M")&&!a&&(Ut.muted=!Ut.muted,Bo()),s.key==="Escape"&&n(!1)}),Bo()})();function Xo(i,{accent:e=-1,sub:t="",cls:n=""}={}){let s=i.split(" ");ke.big.className="big "+n,ke.big.innerHTML=`<div class="big-words">${s.map((r,a)=>`<span class="w${a===e?" accent":""}" style="--i:${a}">${Pe(r)}</span>`).join(" ")}</div>${t?`<div class="big-sub" style="--i:${s.length}">${Pe(t)}</div>`:""}`,ke.big.hidden=!1,ne.whoosh(.9)}function ki(){ke.big.hidden=!0,ke.big.innerHTML=""}function Sr(i="Hold to tune in",{onProgress:e}={}){let t=hn("button","hold",`<svg viewBox="0 0 44 44" aria-hidden="true"><circle cx="22" cy="22" r="19" class="track"/><circle cx="22" cy="22" r="19" class="fill" pathLength="100"/></svg><span>${Pe(i)}</span><kbd>hold space</kbd>`);t.type="button";let n=()=>{},s=new Promise(r=>{let a=0,o=0,l=!1,c=()=>{let p=Math.min(1,(performance.now()-a)/_r.holdMs);if(t.style.setProperty("--k",p),e&&e(p),ne.swell(p),ne.holdTone(p),bt.setPush(p*.5),p>=1){l=!0,u(!0),r();return}o=requestAnimationFrame(c)},d=p=>{l||a||(p&&p.preventDefault(),ne.unlock(),a=performance.now(),t.classList.add("holding"),c())},u=p=>{cancelAnimationFrame(o),a=0,t.classList.remove("holding"),p||t.style.setProperty("--k",0),ne.holdTone(0),ne.swell(0),bt.setPush(0),p&&(ne.whoosh(1.2),document.removeEventListener("keydown",h),document.removeEventListener("keyup",f))},h=p=>{var y,m;document.querySelector(".modal")||(p.code==="Space"||p.code==="Enter")&&!p.repeat&&((y=document.activeElement)==null?void 0:y.tagName)!=="TEXTAREA"&&((m=document.activeElement)==null?void 0:m.tagName)!=="INPUT"&&d(p)},f=p=>{(p.code==="Space"||p.code==="Enter")&&!l&&u(!1)};t.addEventListener("pointerdown",d),t.addEventListener("pointerup",()=>!l&&u(!1)),t.addEventListener("pointerleave",()=>!l&&a&&u(!1)),t.addEventListener("contextmenu",p=>p.preventDefault()),document.addEventListener("keydown",h),document.addEventListener("keyup",f),n=()=>{l=!0,cancelAnimationFrame(o),document.removeEventListener("keydown",h),document.removeEventListener("keyup",f),ne.holdTone(0),bt.setPush(0)},Pt.add(n),Rn&&setTimeout(()=>{l||(l=!0,ne.unlock(),u(!0),r())},60)});return s.then(()=>Pt.delete(n)),{el:t,done:s,dispose:()=>{n(),Pt.delete(n)}}}function Gn(i,e=""){ke.screens.innerHTML="";let t=hn("section","screen "+e,i);return ke.screens.appendChild(t),t}function Ts(){ke.screens.innerHTML=""}function wt(i,e=""){ke.dock.innerHTML="",ke.dock.className="dock "+e,i?(ke.dock.appendChild(i),ke.dock.hidden=!1):ke.dock.hidden=!0}var Vo=()=>document.fullscreenElement||document.webkitFullscreenElement;function Uc(i){let e=document.documentElement;if(Vo())return;let t=e.requestFullscreen||e.webkitRequestFullscreen,n=()=>{i&&Go("Full screen is blocked in this window. Open the game in its own browser tab to use it.")};if(!t)return n();try{let s=t.call(e);s&&s.catch&&s.catch(n)}catch{n()}}function Zg(){let i=document.exitFullscreen||document.webkitExitFullscreen;if(Vo()&&i){let e=i.call(document);e&&e.catch&&e.catch(()=>{})}}(function(){let e=ct("#fs-btn");if(!e)return;let t=document.documentElement;if(!(t.requestFullscreen||t.webkitRequestFullscreen)){e.hidden=!0;return}let n=()=>{let s=!!Vo();e.classList.toggle("on",s),e.setAttribute("aria-label",s?"Exit full screen":"Full screen"),e.title=s?"Exit full screen":"Full screen"};e.addEventListener("click",()=>Vo()?Zg():Uc(!0)),document.addEventListener("fullscreenchange",n),document.addEventListener("webkitfullscreenchange",n),n()})();var bt=new Fo(ct("#gl"));bt.onCut=()=>{let i=ct("#fade");i.classList.remove("on"),i.offsetWidth,i.classList.add("on")};function Go(i){ke.tip.textContent=i,ke.tip.hidden=!1,ke.tip.classList.remove("show"),ke.tip.offsetWidth,ke.tip.classList.add("show"),clearTimeout(Go.t),Go.t=setTimeout(()=>{ke.tip.hidden=!0},4200)}var Jg=["Listen","Follow","Twist","Stay","Wrap-up"];function $o(i,e){if(!i){ke.hud.hidden=!0;return}ke.hud.hidden=!1,ke.hud.innerHTML=`
    <div class="hud-l"><span class="mono">0${i.num}</span><span>${Pe(i.title)}</span></div>
    <ol class="hud-parts">${Jg.map((t,n)=>`<li class="${n<e?"done":n===e?"now":""}"><i></i><span>${t}</span></li>`).join("")}</ol>
    <div class="hud-r"><span class="mono" id="clock">${e>=5?"":"0:00"}</span>
      <button class="icon" id="quit" type="button" aria-label="Back to all levels" title="Back to all levels"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>`,ct("#quit").onclick=()=>Mi(null,{mode:"levels"})}setInterval(()=>{let i=ct("#clock");if(i&&Ie.running){let e=Math.floor((performance.now()-Ie.t0)/1e3*Le);i.textContent=`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}},500);function Zu(){if(ne.ctx){let i=ne.now,e={},t=null;for(let n of Ie.talk)if(i>=n.at&&i<n.end){let s=n.spk.actor;e[s]=!0,s==="phone"&&(t=n.spk.name)}for(let n of Object.keys(bt.actors))bt.setTalking(n,!!e[n]);t?(ke.phone.hidden=!1,ke.phone.querySelector("b").textContent=t):ke.phone.hidden=!0,Ie.talk=Ie.talk.filter(n=>n.end>i-1);for(let n of Ie.acts)!n.done&&i>=n.at&&(n.done=!0,ne.setLayer(n.act.layer,n.act.to,n.act.ramp/Le),n.then&&ne.rampLayer(n.act.layer,n.then.v,0,n.then.t))}requestAnimationFrame(Zu)}Zu();function vi(i,e,t){let n=t,s=[];for(let r of i){let a=r.clip,o=a[1]/Le,l=e.speakers[r.s];s.push({ln:r,spk:l,at:n,end:n+o,keyT:n+(a[2]||0)/Le}),n=n+o+r.gap/Le}return{items:s,end:s.length?s[s.length-1].end:t}}function bi(i,e){for(let t of i){let n=t.spk.gain!==void 0?t.spk.gain:t.spk.role==="target"?1:.45;ne.play(e.id+".mp3",t.ln.clip,{when:t.at,pan:t.spk.pan||0,gain:n}),Ie.talk.push(t)}}async function Oi(i){let e=Ie.runId;for(;ne.now<i;)if(await new Promise(t=>setTimeout(t,60)),e!==Ie.runId)throw new Error("abort")}function Ju(i){let e=i.amb&&i.amb.layers||{};for(let t in ne.layers)t in e||ne.setLayer(t,0,1.5);for(let[t,[n]]of Object.entries(e))ne.setLayer(t,n,1.8)}function Fc(i,e,t,n,s,r){let a=i.amb&&i.amb.layers||{};for(let[o,[l,c]]of Object.entries(a)){if(r&&r[o])continue;let d=ne.layer(o).out.gain,u=l+(c-l)*n,h=l+(c-l)*s;d.cancelScheduledValues(e),d.setValueAtTime(u,e),d.linearRampToValueAtTime(h,Math.max(t,e+.1))}}function Yo(i){ne.startEvents(i.amb&&i.amb.ev||{},e=>{e==="thunder"&&setTimeout(()=>bt.flash(1),60)})}function Nc(i,{n:e,total:t,label:n="Question"}={}){return new Promise(s=>{let r=ws(i.o),a=hn("div","qbox");a.innerHTML=`<div class="q-top"><span class="mono">${n} ${e} / ${t}</span><span class="q-hint">Press 1\u20134</span></div>
      <p class="q-text">${Pe(i.q)}</p>
      <div class="q-opts">${r.map((u,h)=>`<button type="button" class="q-opt" data-i="${h}"><kbd>${h+1}</kbd><span>${Pe(u)}</span></button>`).join("")}</div>`,wt(a,"is-q");let o=!1,l=u=>{o||!r[u]||(o=!0,ne.tick(),a.querySelectorAll(".q-opt")[u].classList.add("picked"),d(),Pt.delete(d),setTimeout(()=>s({q:i.q,pick:r[u],right:r[u]===i.a,a:i.a}),380/Math.min(Le,3)))},c=u=>{let h=+u.key;h>=1&&h<=4&&l(h-1)};document.addEventListener("keydown",c);let d=()=>document.removeEventListener("keydown",c);Pt.add(d),a.querySelectorAll(".q-opt").forEach(u=>u.onclick=()=>l(+u.dataset.i)),Rn&&setTimeout(()=>l(Math.random()<.8?r.indexOf(i.a):0),120)})}function Kg(i){return new Promise(e=>{let t=ws(i.tiles),n=i.answer.length,s=[],r=hn("div","task "+(i.style==="map"?"is-map":"")),a=()=>{r.innerHTML=`<div class="q-top"><span class="mono">${Pe(i.prompt)}</span><span class="q-hint">${n} steps \xB7 tap to add, tap a step to remove</span></div>
        <ol class="slots">${Array.from({length:n},(o,l)=>`<li class="${s[l]?"full":""}" data-i="${l}"><b class="mono">${l+1}</b><span>${s[l]?Pe(s[l]):""}</span></li>`).join("")}</ol>
        <div class="tiles">${t.map((o,l)=>`<button type="button" class="tile${s.includes(o)?" used":""}" data-i="${l}" ${s.includes(o)?"disabled":""}>${Pe(o)}</button>`).join("")}</div>
        <div class="task-foot"><button type="button" class="ghost" data-act="clear">Clear</button><button type="button" class="go" data-act="ok" ${s.length===n?"":"disabled"}>Lock it in</button></div>`,r.querySelectorAll(".tile").forEach(o=>o.onclick=()=>{s.length<n&&(s.push(t[+o.dataset.i]),ne.tap(),a())}),r.querySelectorAll(".slots li.full").forEach(o=>o.onclick=()=>{s.splice(+o.dataset.i,1),a()}),r.querySelector("[data-act=clear]").onclick=()=>{s.length=0,a()},r.querySelector("[data-act=ok]").onclick=()=>{ne.ok(),e({picked:s.slice(),score:Pc(s,i.answer)})}};a(),wt(r,"is-task"),Rn&&setTimeout(()=>{let o=Math.random()<.75?i.answer.slice():ws(i.answer);e({picked:o,score:Pc(o,i.answer)})},150)})}function jg(i){return new Promise(e=>{let t=i.fields.map(a=>({f:a,o:ws(a.o)})),n=i.fields.map(()=>null),s=hn("div","task"),r=()=>{s.innerHTML=`<div class="q-top"><span class="mono">${Pe(i.prompt)}</span><span class="q-hint">One per row</span></div>
        <div class="fields">${t.map((a,o)=>`<div class="field"><span class="f-label">${Pe(a.f.label)}</span><div class="f-opts">${a.o.map(l=>`<button type="button" class="chip${n[o]===l?" on":""}" data-r="${o}" data-v="${Pe(l)}">${Pe(l)}</button>`).join("")}</div></div>`).join("")}</div>
        <div class="task-foot"><span></span><button type="button" class="go" data-act="ok" ${n.every(Boolean)?"":"disabled"}>Lock it in</button></div>`,s.querySelectorAll(".chip").forEach(a=>a.onclick=()=>{n[+a.dataset.r]=a.dataset.v,ne.tap(),r()}),s.querySelector("[data-act=ok]").onclick=()=>{ne.ok(),e({picks:n.slice(),score:Ic(n,i.fields)})}};r(),wt(s,"is-task"),Rn&&setTimeout(()=>{let a=i.fields.map(o=>Math.random()<.8?o.o[0]:o.o[1]);e({picks:a,score:Ic(a,i.fields)})},150)})}var Qg={Listen:"listen",Follow:"follow",Twist:"twist",Stay:"stay","Wrap-up":"wrap"};async function ey(i,e,t){$o(i,t),wt(null),bt.setShot(Qg[e.title],2.6),Ju(e),Xo(`${e.title}.`,{accent:0,sub:""});let n=Gn(`<div class="card"><p class="eyebrow mono">Part ${t+1} of 5 \xB7 ${Pe(e.title)}</p><p class="card-text">${Pe(e.card||"Last few questions. Think back.")}</p></div>`,"is-part"),s=Sr("Hold to tune in");n.querySelector(".card").appendChild(s.el),await s.done,Ts(),ki()}async function ty(i,e){let t=e.amb&&e.amb.layers||{},n=e.chunks.reduce((d,u)=>d+u.lines.reduce((h,f)=>h+(f.clip[1]+f.gap)/Le,0),0),s={},r=(d,u)=>{let[h,f]=t[d],p=s[d];return p?p.to+(f-p.to)*Math.min(1,Math.max(0,(u-p.p)/(1-p.p))):h+(f-h)*u},a=0,o=[];Yo(e);let l=e.chunks.reduce((d,u)=>d+u.questions.length,0),c=0;for(let d of e.chunks){let u=ne.now+.5/Le,h=vi(d.lines,i,u),f=d.side?vi(d.side.lines,i,u+d.side.at/Le):null,p=h.end-u,y=a/n,m=Math.min(1,(a+p)/n),g={};for(let w of h.items)if(w.ln.act){let T=w.ln.act;g[T.layer]=t[T.layer][0]+(t[T.layer][1]-t[T.layer][0])*y,s[T.layer]={to:T.to,p:(a+(w.at-u))/n},Ie.acts.push({at:w.at,act:T,then:{v:r(T.layer,m),t:h.end}})}for(let w in t){let T=ne.layer(w).out.gain;if(T.cancelScheduledValues(u),w in g){T.setValueAtTime(g[w],u);continue}T.setValueAtTime(r(w,y),u),T.linearRampToValueAtTime(r(w,m),h.end)}bi(h.items,i),f&&bi(f.items,i),await Oi(Math.max(h.end,f?f.end:0)+.5/Le),a+=p,ne.duck(!0);for(let w of d.questions)o.push(await Nc(w,{n:++c,total:l}));ne.duck(!1),wt(null)}return ne.stopEvents(),{title:e.title,cats:e.scores,score:o.filter(d=>d.right).length/o.length,answers:o}}async function ny(i,e){Yo(e);let t=ne.now+.5/Le,n=vi(e.lines,i,t),s=e.side?vi(e.side.lines,i,t+e.side.at/Le):null;Fc(e,t,n.end,0,1),bi(n.items,i),s&&bi(s.items,i),await Oi(Math.max(n.end,s?s.end:0)+.6/Le),ne.duck(!0);let r=e.task.kind==="sequence"?await Kg(e.task):await jg(e.task);return ne.duck(!1),ne.stopEvents(),wt(null),{title:e.title,cats:e.scores,score:r.score,task:e.task,pick:r}}var qu={mall:["Missed one. Try saying \u201C47\u201D in your head just before each call.","Hear the number, not the sentence. The number comes first or last."],park:["Missed one. Listen for the word after \u201Cgolden\u201D \u2014 only \u201Ckey\u201D counts.","Let the story wash past. You are only fishing for two words."],football:["Missed one. Keep one ear on your left \u2014 that\u2019s where Coach Tui is.","Voice first, then words. Is it the coach? Then move."],_:["Drifted? That\u2019s normal. Take a breath and tune back in."]};async function iy(i,e){let t=hn("div","pad "+(e.pad==="arrows"?"is-arrows":"is-tap")),n=[],s=m=>{n.push({t:ne.now,btn:m}),ne.tap();let g=Ie.cues&&Ie.cues.find(T=>T.target&&T.btn===m&&ne.now>=T.keyT-.25&&ne.now<=T.end+2.2&&!T._seen),w=t.querySelector(`[data-b=${m}]`);w&&(w.classList.remove("flash-ok","flash-no"),w.offsetWidth,w.classList.add(g?"flash-ok":"flash-no")),g&&(g._seen=!0)};e.pad==="arrows"?t.innerHTML=`<p class="pad-rule">${Pe("Only Coach Tui. Arrow keys or tap.")}</p>
      <div class="cross">${[["up","Push up","\u2191"],["left","Go left","\u2190"],["right","Go right","\u2192"],["down","Drop back","\u2193"]].map(([m,g,w])=>`<button type="button" class="dir d-${m}" data-b="${m}"><i>${w}</i><span>${g}</span></button>`).join("")}<div class="pitch" aria-hidden="true"></div></div>`:t.innerHTML=`<p class="pad-rule">Tap only on <b>${Pe(e.padLabel)}</b></p><button type="button" class="tapbtn" data-b="tap"><span>Tap</span><kbd>space</kbd></button>`,t.querySelectorAll("[data-b]").forEach(m=>m.addEventListener("pointerdown",g=>{g.preventDefault(),s(m.dataset.b)}));let r={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",Space:"tap"},a=m=>{let g=r[m.code];!g||m.repeat||e.pad==="tap"==(g==="tap")&&(m.preventDefault(),s(g))};document.addEventListener("keydown",a);let o=()=>document.removeEventListener("keydown",a);Pt.add(o),wt(t,"is-pad"),Yo(e);let l=ne.now+.8/Le,c=vi(e.lines,i,l),d=e.side?vi(e.side.lines,i,l+e.side.at/Le):null;Fc(e,l,c.end,0,1),bi(c.items,i),d&&bi(d.items,i);let u=c.items.filter(m=>m.ln.cue).map(m=>({keyT:m.keyT,end:m.end,target:!m.ln.lure,btn:m.ln.cue,text:m.ln.t}));Ie.cues=u;let h=0,f=qu[i.id]||qu._,p=u.filter(m=>m.target).map(m=>setTimeout(()=>{!m._seen&&h<2&&Ie.running&&Go(f[h++%f.length])},(m.end+2.3-ne.now)*1e3));Rn&&u.forEach(m=>{let g=m.target?.85:.15;Math.random()<g&&setTimeout(()=>s(m.btn),(m.keyT+.45/Le-ne.now)*1e3)}),await Oi(Math.max(c.end,d?d.end:0)+2.4/Le),p.forEach(clearTimeout),o(),Pt.delete(o),ne.stopEvents(),wt(null);let y=Lc(u,n,2.2/Le);return{title:e.title,cats:e.scores,score:y.score,cues:y.cues,t0:l,stats:y}}var zo=["Ben: sushi?? \u{1F363}","IT Helpdesk: Your password expires in 3 days","Tash: are geese allowed in court","Calendar: Team meeting moved to 9:45","Ben: they have mochi now","Priya (away): Out of office until Monday","Tash: the goose has a LinkedIn"];async function sy(i,e){let t=hn("div","notes");t.innerHTML=`<div class="q-top"><span class="mono">Your notes</span><span class="q-hint">Marked on ideas, not spelling</span></div>
    <textarea id="notes-${i.id}" rows="5" placeholder="Type the key points as you hear them\u2026" spellcheck="false"></textarea>
    <div class="task-foot"><span class="mono count" id="notes-count">Listening\u2026</span><button type="button" class="go" data-act="ok" disabled>Hand in notes</button></div>`,wt(t,"is-notes");let n=t.querySelector("textarea");setTimeout(()=>n.focus(),50),Yo(e);let s=ne.now+.8/Le,r=vi(e.lines,i,s),a=e.side?vi(e.side.lines,i,s+e.side.at/Le):null;Fc(e,s,r.end,0,1),bi(r.items,i),a&&bi(a.items,i);let o=null;if(e.notify){let p=0,y=()=>{if(!Ie.running)return;let m=hn("div","toast",`<b>${Pe(zo[p%zo.length].split(":")[0])}</b><span>${Pe(zo[p%zo.length].split(":").slice(1).join(":"))}</span>`);p++,ke.toasts.appendChild(m),ne.fx("ping"),setTimeout(()=>m.remove(),4600),o=setTimeout(y,(6e3+Math.random()*5e3)/Le)};o=setTimeout(y,5e3/Le)}Rn&&(n.value=e.keyPoints.slice(0,4).map(p=>p.p.split(" ").slice(0,6).join(" ")).join(`
`)),await Oi(r.end+.3/Le),clearTimeout(o);let l=t.querySelector("[data-act=ok]");l.disabled=!1;let c=t.querySelector("#notes-count"),d=Math.round(e.writeTime||25);await new Promise(p=>{l.onclick=p;let y=()=>{c.textContent=`${d}s to finish`,d--<=0?p():y.t=setTimeout(y,1e3/Le)};y(),Rn&&setTimeout(p,200);let m=()=>clearTimeout(y.t);Pt.add(m)}),ne.stopEvents(),ne.ok();let u=n.value;wt(null);let h=e.lines.map(p=>p.t).join(" "),f=Gu(u,e,h);return{title:e.title,cats:e.scores,score:0,notes:u,marking:f}}async function ry(i,e){ne.duck(!0);let t=[];for(let[s,r]of e.questions.entries())t.push(await Nc(r,{n:s+1,total:e.questions.length+1,label:"Think back"}));let n=await Nc(e.sideQ,{n:e.questions.length+1,total:e.questions.length+1,label:"Think back"});return ne.duck(!1),wt(null),{title:e.title,cats:e.scores,score:t.filter(s=>s.right).length/t.length,answers:t,side:n}}async function ay(i){ne.unlock();let e=new Set([i.id+".mp3","shared.mp3"]);for(let o of i.parts){for(let l of Object.keys(o.amb&&o.amb.layers||{}))["crowd","kids","music","chant"].includes(l)&&e.add(l+".mp3");for(let l of Object.keys(o.amb&&o.amb.ev||{}))l==="scream"&&e.add("screams.mp3"),l==="cheer"&&e.add("cheers.mp3")}ne.sfxMan=yr.sfx,ke.loader.hidden=!1;let t=ke.loader.querySelector("i"),n=ke.loader.querySelector("span"),s=[...e],r={},a=()=>{let o=s.reduce((l,c)=>l+(r[c]||0),0)/s.length;t.style.width=Math.round(o*100)+"%",n.textContent=`Tuning in\u2026 ${Math.round(o*100)}%`};await Promise.all(s.map(o=>ne.load(o,l=>{r[o]=l,a()}).then(()=>{r[o]=1,a()}))),ke.loader.hidden=!0}async function Wo(i){Ho(),ne.ctx&&(ne.stopVoices(),ne.killLayers()),ke.toasts.innerHTML="";let e=Ie.runId;Ie.level=i,Ie.results=[],Ie.mode="levels",Ts(),ki(),wt(null),bt.levelId!==i.id&&bt.load(i.id);try{await ay(i),$o(i,-1),bt.setShot("intro",2.4);let t=i.parts[1];Ju(t),Xo(i.title,{accent:i.title.split(" ").length-1,sub:`${i.place} \xB7 ages ${i.ages}`});let n=Gn(`<div class="card"><p class="eyebrow mono">Level 0${i.num} \xB7 headphones on</p>
      <p class="card-text">${Pe(i.blurb)}</p>
      <div class="hp"><button type="button" class="chip" data-hp="L">Left ear</button><button type="button" class="chip" data-hp="R">Right ear</button><span class="q-hint">Voices come from different sides. Check both. Move your mouse, or drag, to look around.</span></div></div>`,"is-part"),s=l=>ne.play("shared.mp3",yr.shared.clips[l==="L"?"hp_left":"hp_right"],{pan:l==="L"?-1:1,gain:.9});n.querySelectorAll("[data-hp]").forEach(l=>l.onclick=()=>s(l.dataset.hp)),setTimeout(()=>{ke.screens.contains(n)&&(s("L"),setTimeout(()=>ke.screens.contains(n)&&s("R"),1700/Le))},900/Le);let r=Sr("Hold to tune in");if(n.querySelector(".card").appendChild(r.el),await r.done,e!==Ie.runId)return;Ts(),ki(),Ie.running=!0,Ie.t0=performance.now(),Ie.levelT0=ne.now;let a={listen:ty,task:ny,respond:iy,notes:sy,wrap:ry},o=0;for(let l of i.parts){if(l.type==="intro")continue;if(await ey(i,l,o),e!==Ie.runId)return;let c=await a[l.type](i,l);if(e!==Ie.runId)return;c.type=l.type,Ie.results.push(c),o++}Ie.running=!1,await oy(i,e)}catch(t){if(e!==Ie.runId)return;Ie.running=!1,t.message!=="abort"&&(console.error(t),Gn(`<div class="card"><p class="eyebrow mono">Something went wrong</p><p class="card-text">${Pe(t.message||t)}. Check your connection and try again.</p><button class="go" type="button" id="back">All levels</button></div>`,"is-part"),ct("#back").onclick=()=>Mi())}}async function oy(i,e){$o(i,5),bt.setShot("wrap",3),ne.silenceLayers([],3),wt(null),ke.toasts.innerHTML="";let t=Ie.results.find(h=>h.marking);if(t){let h=Gn('<div class="card"><p class="eyebrow mono">Marking your notes\u2026</p><p class="card-text">If Claude asks, allow it to mark your notes. Otherwise they\u2019re marked by keyword matching.</p></div>',"is-part"),f=await t.marking;if(e!==Ie.runId)return;t.score=f.score,t.mark=f,h.remove()}let n=Wu(i,Ie.results),s=Ie.results.find(h=>h.type==="wrap"),r=s&&s.answers.every(h=>h.right),a=s&&s.side.right,o=a&&!r?i.side.line:a?`You caught ${i.side.who} and the details that mattered. Big ears.`:`You didn\u2019t take in ${i.side.who} at all. That\u2019s filtering.`,l=Cn.get("best."+i.id);(l===null||n.overall>l)&&Cn.set("best."+i.id,n.overall);let c=[];Ie.results.forEach(h=>{(h.answers||[]).forEach(f=>!f.right&&c.push(`${f.q} \u2014 <b>${Pe(f.a)}</b>`)),h.task&&h.score<1&&c.push(`${Pe(h.task.prompt)} \u2014 <b>${Pe(h.task.kind==="sequence"?h.task.answer.join(" \u2192 "):h.task.fields.map(f=>f.o[0]).join(" \xB7 "))}</b>`)});let d=gr[gr.indexOf(i)+1],u=Gn(`
    <div class="results">
      <p class="eyebrow mono">Level 0${i.num} \xB7 ${Pe(i.place)}</p>
      <div class="score-row"><span class="score">${n.overall}</span><span class="band">${Pe(n.band)}</span></div>
      <ul class="bars">${Oo.map(h=>{var f;return`<li><div class="bar-top"><span>${h.name}</span><span class="mono">${(f=n.sub[h.id])!=null?f:"\u2013"}</span></div><div class="bar"><i style="--v:${(n.sub[h.id]||0)/100}"></i></div><small>${h.blurb}</small></li>`}).join("")}</ul>
      <p class="side-line">${Pe(o)}</p>
      ${n.drift?`<p class="drift ${n.drift.ok?"ok":""}">${Pe(n.drift.text)}</p>`:""}
      ${t&&t.mark?`<div class="kps"><p class="eyebrow mono">Your notes \xB7 ${t.mark.method==="ai"?"marked by Claude":t.mark.method==="empty"?"no notes handed in":"marked by keyword matching"}</p><ul>${t.mark.points.map(h=>`<li class="${h.mark}"><i>${h.mark==="full"?"Got it":h.mark==="partial"?"Partly":"Missed"}</i>${Pe(h.p)}</li>`).join("")}</ul>${t.mark.tip?`<p class="q-hint">${Pe(t.mark.tip)}</p>`:""}</div>`:""}
      ${c.length?`<details class="missed"><summary>What you missed (${c.length})</summary><ul>${c.map(h=>`<li>${h}</li>`).join("")}</ul></details>`:""}
      <div class="res-actions"><button type="button" class="go" id="again">Play again</button>${d?`<button type="button" class="ghost" id="next">Next: ${Pe(d.place)}</button>`:""}<button type="button" class="ghost" id="all">All levels</button></div>
      <p class="fine">A listening game, not a medical test. If focus is a daily struggle, a GP is a good first stop, and ADHD New Zealand has practical support.</p>
    </div>`,"is-results");u.querySelector("#again").onclick=()=>Wo(i),d&&(u.querySelector("#next").onclick=()=>Wo(d)),u.querySelector("#all").onclick=()=>Mi(null,{mode:"levels"}),requestAnimationFrame(()=>u.classList.add("in")),window.__attune.summary=n}var Kn=i=>i[Math.floor(Math.random()*i.length)];var Ss=(i,e)=>yr.drills.clips[i+"|"+e],Xu=(i,e)=>St.step[i].replace("{c}",e[0]).replace("{s}",e[1]),xr=i=>`${i[0]} ${i[1]}`,ly={red:"#E3241C",blue:"#2F6FDC",green:"#2E9D58",yellow:"#F2C230"},cy={circle:'<circle cx="20" cy="20" r="14"/>',square:'<rect x="7" y="7" width="26" height="26"/>',triangle:'<path d="M20 5 35 33H5z"/>',star:'<path d="M20 4l4.7 10.1 11 1.2-8.2 7.5 2.3 10.9L20 28.2l-9.8 5.5 2.3-10.9-8.2-7.5 11-1.2z"/>'},qo=i=>`<svg viewBox="0 0 40 40" aria-hidden="true" style="fill:${ly[i[0]]}">${cy[i[1]]}</svg>`,$u=["Mum: dinner is ready!","Sam: you coming online?","Battery: 5% left","Group chat: 12 new messages","Game: your team is waiting","Weather: rain at 4pm"];async function hy(i){ne.unlock(),ne.sfxMan=yr.sfx,ke.loader.hidden=!1;let e=ke.loader.querySelector("i"),t=ke.loader.querySelector("span"),n={},s=()=>{let r=i.reduce((a,o)=>a+(n[o]||0),0)/i.length;e.style.width=Math.round(r*100)+"%",t.textContent=`Tuning in\u2026 ${Math.round(r*100)}%`};await Promise.all(i.map(r=>ne.load(r,a=>{n[r]=a,s()}).then(()=>{n[r]=1,s()}))),ke.loader.hidden=!0}function Ku(i,e=""){ke.hud.hidden=!1,ke.hud.innerHTML=`<div class="hud-l"><span class="mono">Skill</span><span>${Pe(i.title)}</span></div>
    <div class="hud-prog mono" id="dprog">${Pe(e)}</div>
    <div class="hud-r"><button class="icon" id="quit" type="button" aria-label="Back to all skills" title="Back to all skills"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>`,ct("#quit").onclick=()=>Mi(null,{mode:"drills"})}var kc=i=>{let e=ct("#dprog");e&&(e.textContent=i)},Mr=i=>{let e=Cn.get("dpass."+i);return Array.isArray(e)?e:[]},uy=(i,e)=>{let t=Mr(i);t.includes(e)||(t.push(e),Cn.set("dpass."+i,t))},Zo=i=>{let e=Mr(i.id),t=i.levels.findIndex((n,s)=>!e.includes(s));return t<0?i.levels.length-1:t};async function dy(i,e){let t=(An.age||12)<10,n=e.codes,s=e.snr+(t?3:0),r=Object.keys(St.digits).map(Number),a=S=>Math.min(3,.85*Math.pow(10,-S/20));ne.setLayer("crowd",a(s),1.2);let o=hn("div","keypad-wrap");o.innerHTML=`<div class="q-top"><span class="mono" id="kp-status">Listen\u2026</span><span class="q-hint">Her three numbers. Keys 1\u20139 work too.</span></div>
    <div class="kp-slots"><b></b><b></b><b></b></div>
    <div class="kp">${r.map(S=>`<button type="button" class="kp-k" data-n="${S}">${S}</button>`).join("")}<button type="button" class="kp-k kp-del" data-n="del" aria-label="Delete">\u232B</button></div>`,wt(o,"is-keypad");let l=[...o.querySelectorAll(".kp-slots b")],c=o.querySelector("#kp-status"),d=[],u=!1,h=null,f=()=>l.forEach((S,b)=>{var A;S.textContent=(A=d[b])!=null?A:""}),p=S=>{if(u){if(S==="del"){d.pop(),f();return}d.length<3&&(d.push(+S),ne.tap(),f(),d.length===3&&(u=!1,setTimeout(()=>h(d.slice()),260/Math.min(Le,3))))}};o.querySelectorAll(".kp-k").forEach(S=>S.addEventListener("pointerdown",b=>{b.preventDefault(),p(S.dataset.n)}));let y=S=>{/^[1-9]$/.test(S.key)&&S.key!=="7"?p(S.key):S.key==="Backspace"&&p("del")};document.addEventListener("keydown",y);let m=()=>document.removeEventListener("keydown",y);Pt.add(m);let g=0,w=0;for(let S=0;S<n;S++){kc(`Code ${S+1} of ${n} \xB7 ${g} right \xB7 need ${e.need}`);let b=[Kn(r),Kn(r),Kn(r)],A=b.map(B=>Kn(r.filter(G=>G!==B)));d=[],f(),o.classList.remove("ok","no"),c.textContent="Listen\u2026",await br(900);let _=Ss("code",St.codeIntro),E=ne.now+.15;ne.play("drills.mp3",_,{when:E});let R=E+(_[1]+.18)/Le,U=Math.random()<.5?"codeA":"codeB",k=Math.random()<.5?-.6:.6,V=E+_[1]*.55/Le;for(let B=0;B<3;B++){let G=Ss("code",St.digits[b[B]]);if(ne.play("drills.mp3",G,{when:R}),R+=(G[1]+.28)/Le,e.rival){let ee=Ss(U,St.digits[A[B]]);ne.play("drills.mp3",ee,{when:V,gain:Math.min(1.6,a(s)*.9),pan:k}),V+=(ee[1]+.26)/Le}}await Oi(R),c.textContent="Type the code",u=!0;let D=await new Promise(B=>{if(h=B,Rn){let G=1/(1+Math.exp(-(s+5)/2.5));setTimeout(()=>B(Math.random()<G?b:A),120)}});u=!1;let I=D.every((B,G)=>B===b[G]);I?g++:e.rival&&D.some((B,G)=>B===A[G])&&w++,o.classList.add(I?"ok":"no"),c.textContent=I?"Got it.":`It was ${b.join(" ")}.`,I?ne.ok():ne.tick(),await br(1200)}m(),Pt.delete(m),wt(null),ne.setLayer("crowd",0,1.5);let T=g>=e.need,v=[`You needed ${e.need} of ${n}.`];return w&&v.push(`The other voice caught you out ${w} time${w===1?"":"s"}.`),{passed:T,headline:`${g} of ${n} codes right`,details:v,line:T?g===n?"Every single code. Clean.":"You found her voice and held onto it.":"Close. Listen for her first words, then keep hold of her voice."}}function fy(i,e,t){return new Promise(n=>{let s=[],r=()=>{i.innerHTML=`<div class="q-top"><span class="mono">Tap them in order</span><span class="q-hint">${t} \xB7 tap a step to undo</span></div>
        <ol class="slots shape-slots">${Array.from({length:e},(a,o)=>`<li class="${s[o]?"full":""}" data-i="${o}"><b class="mono">${o+1}</b>${s[o]?qo(s[o]):""}</li>`).join("")}</ol>
        <div class="shape-grid">${St.items.map((a,o)=>`<button type="button" class="shape" data-i="${o}" aria-label="${xr(a)}">${qo(a)}</button>`).join("")}</div>
        <div class="task-foot"><button type="button" class="ghost" data-act="clear">Clear</button><button type="button" class="go" data-act="ok" ${s.length===e?"":"disabled"}>Lock it in</button></div>`,i.querySelectorAll(".shape").forEach(a=>a.onclick=()=>{s.length<e&&(s.push(St.items[+a.dataset.i]),ne.tap(),r())}),i.querySelectorAll(".slots li.full").forEach(a=>a.onclick=()=>{s.splice(+a.dataset.i,1),r()}),i.querySelector("[data-act=clear]").onclick=()=>{s.length=0,r()},i.querySelector("[data-act=ok]").onclick=()=>{ne.ok(),n(s.map(xr))}};r()})}async function py(i,e){let n=(An.age||12)<10&&e.span>2?e.span-1:e.span,s=e.rounds,r=0,a=0,o=0;ne.setLayer("kids",e.chatter,1.2);let l=hn("div","task drill-steps");wt(l,"is-task");for(let u=0;u<s;u++){kc(`Round ${u+1} of ${s} \xB7 ${r} right \xB7 need ${e.need}`);let h=ws(St.items).slice(0,n),f=-1,p=null;e.fix&&(f=Math.floor(Math.random()*n),p=Kn(St.items.filter(S=>!h.includes(S))),o++);let y=h.slice();f>=0&&(y[f]=p);let m=e.interrupt&&Math.random()<.65?Math.max(0,Math.floor(n/2)-1):-1;l.innerHTML=`<div class="q-top"><span class="mono">Listen\u2026</span><span class="q-hint">${n} shapes coming</span></div><div class="shape-grid is-wait">${St.items.map(S=>`<span class="shape">${qo(S)}</span>`).join("")}</div>`,await br(800);let g=ne.now+.2,w=(S,b,A={})=>{let _=Ss(S,b);return ne.play("drills.mp3",_,{when:g,...A}),Ie.talk.push({at:g,end:g+_[1]/Le,spk:{actor:S==="teach"?"teacher":"none",name:""}}),g+=_[1]/Le,_};w("teach",St.stepIntro),g+=.35/Le,h.forEach((S,b)=>{if(w("teach",Xu(b===0?"first":b===n-1?"last":"then",S)),g+=.45/Le,b===f&&(w("teach",Xu("fix",p)),g+=.45/Le),b===m){let[A,_]=Kn(St.interrupt);g-=.3/Le;let E=w(A,_,{gain:.55,pan:Math.random()<.5?-.55:.55});g-=E[1]*.25/Le}}),await Oi(g+.2/Le);let v=(Rn?await new Promise(S=>setTimeout(()=>S(Math.random()<(n<5?.85:.6)?y.map(xr):ws(y.map(xr))),150)):await fy(l,y.length,`${n} steps`)).every((S,b)=>S===xr(y[b]));v&&(r++,f>=0&&a++),l.innerHTML=`<div class="q-top"><span class="mono">${v?"Spot on":"Not quite"}</span><span class="q-hint">${v?"":"Here\u2019s what she wanted"}</span></div>
      ${v?"":`<ol class="slots shape-slots is-answer">${y.map((S,b)=>`<li class="full"><b class="mono">${b+1}</b>${qo(S)}</li>`).join("")}</ol>`}`,v?ne.ok():ne.tick(),await br(v?1e3:2200)}wt(null),ne.setLayer("kids",0,1.5);let c=r>=e.need,d=[`You needed ${e.need} of ${s}.`];return o&&d.push(`Corrections caught: ${a} of ${o}.`),{passed:c,headline:`${r} of ${s} rounds right`,details:d,line:c?`You held ${n} steps in order${e.fix?", and swapped the one she changed":""}.`:e.fix?"When she says \u201CNo, wait\u201D, swap just that one step and keep the rest.":"Say the list to yourself as she reads it."}}async function my(i,e){let t=(An.age||12)<10,n=e.secs,s=e.gap.map(I=>I+(t?.3:0)),r=[],a=0,o="";for(;a<n;){let I=Math.random(),B=I<e.p?"animal":e.lures&&I<e.p+.16?"lure":"object",G=B==="animal"?St.animals:B==="lure"?St.lures:St.objects,ee=Kn(G);ee===o&&(ee=Kn(G)),o=ee;let X=Ss("drone",ee);r.push({w:ee,type:B,t:a,c:X}),a+=X[1]+s[0]+Math.random()*(s[1]-s[0])}if(!r.some(I=>I.type==="animal")){let I=r[Math.floor(r.length/2)];I.type="animal",I.w=Kn(St.animals),I.c=Ss("drone",I.w)}let l=hn("div","pad is-tap");l.innerHTML='<p class="pad-rule">Tap only on <b>animals</b></p><button type="button" class="tapbtn" data-b="tap"><span>Tap</span><kbd>space</kbd></button>';let c=[],d=[],u=()=>{c.push({t:ne.now,btn:"tap"}),ne.tap();let I=d.find(G=>G.target&&ne.now>=G.keyT-.25&&ne.now<=G.end+1.8&&!G._seen),B=l.querySelector("[data-b=tap]");B.classList.remove("flash-ok","flash-no"),B.offsetWidth,B.classList.add(I?"flash-ok":"flash-no"),I&&(I._seen=!0)};l.querySelector("[data-b=tap]").addEventListener("pointerdown",I=>{I.preventDefault(),u()});let h=I=>{I.code==="Space"&&!I.repeat&&(I.preventDefault(),u())};document.addEventListener("keydown",h);let f=()=>document.removeEventListener("keydown",h);Pt.add(f),wt(l,"is-pad");let p=ne.now+.8/Le,y=p+a/Le;d=r.map(I=>{let B=p+I.t/Le;return ne.play("drills.mp3",I.c,{when:B}),Ie.talk.push({at:B,end:B+I.c[1]/Le,spk:{actor:"monitor",name:""}}),{keyT:B,end:B+I.c[1]/Le,target:I.type==="animal",btn:"tap",word:I.w,type:I.type}}),ne.setLayer("crowd",e.chatter[0],1),e.chatter[1]>e.chatter[0]&&ne.layer("crowd").out.gain.linearRampToValueAtTime(e.chatter[1],y);let m=null,g=0,w=()=>{if(!Ie.running)return;let I=Math.min(1,(ne.now-p)/(y-p)),[B,G]=$u[g++%$u.length].split(": "),ee=hn("div","toast",`<b>${Pe(B)}</b><span>${Pe(G)}</span>`);ke.toasts.appendChild(ee),ne.fx("ping"),setTimeout(()=>ee.remove(),4600),m=setTimeout(w,((8-3.5*I)*1e3+Math.random()*2e3)/Le)};e.notify&&(m=setTimeout(w,7e3/Le),Pt.add(()=>clearTimeout(m))),Rn&&d.forEach(I=>{let B=(I.keyT-p)/(y-p),G=I.target?.95-.15*B:.04;Math.random()<G&&setTimeout(u,(I.keyT+(.5+B*.4)/Le-ne.now)*1e3)});let T=setInterval(()=>{let I=Math.max(0,Math.round((y-ne.now)*Le));kc(`${Math.floor(I/60)}:${String(I%60).padStart(2,"0")} left`)},500);Pt.add(()=>clearInterval(T)),await Oi(y+2/Le),clearInterval(T),clearTimeout(m),f(),Pt.delete(f),wt(null),ne.setLayer("crowd",0,1.5),ke.toasts.innerHTML="";let v=Lc(d,c,1.8/Le),S=v.targets?Math.round(v.hits/v.targets*100):100,b=v.fas+v.extra,A=S>=e.needPct&&b<=e.maxWrong,_=[`You needed ${e.needPct}% with no more than ${e.maxWrong} wrong taps.`,`${b} wrong tap${b===1?"":"s"}.`],E=v.cues.filter(I=>I.fa&&I.type==="lure").map(I=>I.word.replace(".","").toLowerCase());E.length&&_.push(`Tricked by: ${[...new Set(E)].slice(0,3).join(", ")}.`);let R=null;if(n>=75){let B=(y-p)/5;R=[];for(let G=0;G<5;G++){let ee=v.cues.filter(K=>K.keyT>=p+G*B&&K.keyT<p+(G+1)*B),X=ee.filter(K=>K.target);R.push({from:Math.round(G*B*Le),to:Math.round((G+1)*B*Le),pct:X.length?Math.round(X.filter(K=>K.hit).length/X.length*100):null,fa:ee.filter(K=>!K.target&&K.fa).length})}}let U=I=>`${Math.floor(I/60)}:${String(I%60).padStart(2,"0")}`,k=R&&R.filter(I=>I.pct!==null).sort((I,B)=>I.pct-I.fa*15-(B.pct-B.fa*15))[0],V=k&&(k.pct<70||k.fa>1)?` Your focus dipped around ${U(k.from)}\u2013${U(k.to)}.`:"",D=A?S===100&&b===0?"Every animal, no slips. Rock steady.":V?`Passed.${V} That is the moment to practise coming back.`:"You stayed with it to the end.":S<e.needPct?"Some animals slipped past. When you notice you have drifted, come straight back.":"Too many quick taps. Wait until you hear the whole word.";return{passed:A,headline:`${S}% of animals caught`,details:_,line:D,segs:R}}var gy={noise:dy,steps:py,stamina:my},yy={noise:"listen",steps:"listen",stamina:"stay"};async function vr(i,e=Zo(i)){Ho(),ne.ctx&&(ne.stopVoices(),ne.killLayers()),ke.toasts.innerHTML="";let t=Ie.runId;Ie.level=null,Ie.mode="drills";let n=i.levels[e];Ts(),ki(),wt(null),bt.levelId!==i.scene&&bt.load(i.scene);try{if(await hy(["drills.mp3","crowd.mp3","kids.mp3"]),t!==Ie.runId)return;Ku(i,`Level ${e+1} of 5`),bt.setShot("intro",2.4),Xo(n.name,{accent:n.name.split(" ").length-1,sub:`${i.title} \xB7 level ${e+1} of 5`});let s=Gn(`<div class="card"><p class="eyebrow mono">${Pe(i.skill)} \xB7 level ${e+1} \xB7 headphones on</p><p class="card-text"><b>${Pe(n.goal)}</b></p><p class="card-text sub">${Pe(i.card)}</p></div>`,"is-part"),r=Sr("Hold to tune in");if(s.querySelector(".card").appendChild(r.el),await r.done,t!==Ie.runId)return;Ts(),ki(),bt.setShot(yy[i.id],2.6),Ie.running=!0,Ie.t0=performance.now(),await br(900);let a=await gy[i.id](i,n);if(t!==Ie.runId)return;Ie.running=!1,_y(i,e,a)}catch(s){if(t!==Ie.runId)return;Ie.running=!1,s.message!=="abort"&&(console.error(s),Gn(`<div class="card"><p class="eyebrow mono">Something went wrong</p><p class="card-text">${Pe(s.message||s)}. Check your connection and try again.</p><button class="go" type="button" id="back">All skills</button></div>`,"is-part"),ct("#back").onclick=()=>Mi(null,{mode:"drills"}))}}function _y(i,e,t){Ku(i,`Level ${e+1} of 5`),wt(null),bt.setShot("intro",3),ne.silenceLayers([],2.5),ke.toasts.innerHTML="",t.passed&&uy(i.id,e);let n=Mr(i.id),s=i.levels[e],r=n.length===i.levels.length,a=St.list[(St.list.indexOf(i)+1)%St.list.length],o=u=>`${Math.floor(u/60)}:${String(u%60).padStart(2,"0")}`,l=t.passed?e<4?`<button type="button" class="go" id="next">Next: level ${e+2}</button>`:`<button type="button" class="go" id="nextskill">Next skill: ${Pe(a.title)}</button>`:'<button type="button" class="go" id="again">Try again</button>',c=Gn(`
    <div class="results">
      <p class="eyebrow mono">${Pe(i.title)} \xB7 level ${e+1} of 5 \xB7 ${Pe(s.name)}</p>
      <div class="verdict ${t.passed?"pass":"fail"}">${t.passed?"Passed":"Not yet"}</div>
      <p class="headline">${Pe(t.headline)}</p>
      <ol class="lvl-track" aria-label="Your progress in ${Pe(i.title)}">${i.levels.map((u,h)=>`<li class="${n.includes(h)?"done":""} ${h===e?"cur":""}"><b class="mono">${h+1}</b><span>${Pe(u.name)}</span></li>`).join("")}</ol>
      <p class="side-line">${Pe(r&&t.passed&&e===4?`All five levels of ${i.title} done. ${t.line}`:t.line)}</p>
      <ul class="drill-facts">${t.details.map(u=>`<li>${Pe(u)}</li>`).join("")}</ul>
      ${t.segs?`<div class="segs" aria-label="Animals caught in each part of the level">${t.segs.map(u=>`<span class="${u.pct!==null&&(u.pct<70||u.fa>1)?"dip":""}">${o(u.from)}\u2013${o(u.to)} \xB7 ${u.pct===null?"\u2013":u.pct+"%"}</span>`).join("")}</div>`:""}
      <p class="drift ok">${Pe(i.tip)}</p>
      <div class="res-actions">${l}${t.passed?'<button type="button" class="ghost" id="again">Play again</button>':""}<button type="button" class="ghost" id="all">All skills</button></div>
      <p class="fine">A listening game, not a medical test.</p>
    </div>`,"is-results"),d=(u,h)=>{let f=c.querySelector("#"+u);f&&(f.onclick=h)};d("again",()=>vr(i,e)),d("next",()=>vr(i,e+1)),d("nextskill",()=>vr(a,Zo(a))),d("all",()=>Mi(i.id,{mode:"drills"})),window.__attune.drill={...t,idx:e,id:i.id}}function xy(i){return i?i<10?"mall":i<12?"park":i<13?"football":i<18?"lab":"office":null}function vy(i,e){let t=An.age,n=hn("div","modal",`<div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="age-h">
      <p class="eyebrow mono">Before you pick a place</p><h3 id="age-h">How old are you?</h3>
      <div class="stepper"><button type="button" class="step" data-d="-1" aria-label="Younger">\u2212</button><input id="age-pop" type="number" inputmode="numeric" min="5" max="99" value="${t||""}" placeholder="\u2013" aria-label="Your age"><button type="button" class="step" data-d="1" aria-label="Older">+</button></div>
      <p class="q-hint">We\u2019ll highlight the best level to start with. Your age stays on this device.</p>
      <div class="modal-foot"><button type="button" class="ghost" data-act="skip">Skip</button><button type="button" class="go" data-act="ok">Show my level</button></div></div>`);i.appendChild(n);let s=n.querySelector("#age-pop"),r=n.querySelector("[data-act=ok]"),a=()=>{let u=Math.round(+s.value);return u>=5&&u<=99?u:null},o=()=>{r.disabled=!a()},l=u=>{document.removeEventListener("keydown",c,!0),Pt.delete(d),n.remove(),e(u)},c=u=>{u.key==="Escape"?(u.stopImmediatePropagation(),u.preventDefault(),l(null)):u.key==="Enter"&&a()&&(u.stopImmediatePropagation(),u.preventDefault(),ne.ok(),l(a()))},d=()=>document.removeEventListener("keydown",c,!0);document.addEventListener("keydown",c,!0),Pt.add(d),n.querySelectorAll(".step").forEach(u=>u.onclick=()=>{s.value=Math.max(5,Math.min(99,(a()||11)+ +u.dataset.d)),ne.tick(),o()}),s.addEventListener("input",o),r.onclick=()=>{a()&&(ne.ok(),l(a()))},n.querySelector("[data-act=skip]").onclick=()=>l(null),n.addEventListener("pointerdown",u=>{u.target===n&&l(null)}),o(),setTimeout(()=>s.focus(),60)}function Mi(i,{askAge:e=!1,mode:t}={}){Ho(),$o(null),wt(null),ki(),ke.toasts.innerHTML="",ke.phone.hidden=!0,ne.ctx&&(ne.stopVoices(),ne.killLayers());let n=t||Ie.mode||"levels";Ie.mode=n;let s=n==="drills",r=s?St.list:gr,a=typeof i=="string"&&i||Cn.get(s?"lastDrill":"last")||r[0].id;r.some(y=>y.id===a)||(a=r[0].id);let o=Gn(`
    <div class="levels">
      <div class="lv-head"><button type="button" class="back" id="back-title"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>Back</button><p class="eyebrow mono">ATTune \xB7 ${s?"skill drills":"listening levels"}</p><h2>${s?"Train one skill":"Pick a place"}</h2>
        <div class="tabs" role="tablist" aria-label="Mode"><button type="button" role="tab" data-mode="levels" aria-selected="${!s}">Places</button><button type="button" role="tab" data-mode="drills" aria-selected="${s}">Skills</button></div>
        <div class="age-row"><span class="mono">Your age</span><div class="age-step"><button type="button" class="age-arrow" data-d="-1" aria-label="Younger"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></button><b class="mono" id="age-show" aria-live="polite">\u2013</b><button type="button" class="age-arrow" data-d="1" aria-label="Older"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></button></div>${s?'<span class="q-hint age-note">Drills start easier for younger players.</span>':""}</div></div>
      <ol class="lv-list">${r.map(y=>{let m=s?null:Cn.get("best."+y.id),g=s?Mr(y.id).length:0;return`
        <li data-id="${y.id}"><button type="button" class="lv">
          <span class="lv-n mono">0${y.num}</span>
          <span class="lv-main"><span class="lv-place mono">${s?`${Pe(y.skill)} \xB7 ${Pe(y.mins)}`:`${Pe(y.place)} \xB7 ${Pe(y.ages)}`}</span><span class="lv-title">${Pe(y.title)}</span><span class="lv-blurb">${Pe(y.blurb)}</span></span>
          <span class="lv-side">${m!==null?`<span class="mono best">Best ${m}</span>`:""}${s?`<span class="mono best">${g} / 5 done</span>`:""}<span class="rec">Recommended for you</span></span>
        </button><div class="lv-go"></div></li>`}).join("")}</ol>
    </div>`,"is-levels"),l=()=>{let y=An.age,m=s?null:xy(y);return o.querySelector("#age-show").textContent=y||"\u2013",o.querySelectorAll(".lv-list li").forEach(g=>g.classList.toggle("is-rec",g.dataset.id===m)),m},c=()=>{Ho(),Ts(),ju()};o.querySelector("#back-title").onclick=c,o.querySelectorAll(".tabs [data-mode]").forEach(y=>y.onclick=()=>{y.dataset.mode!==n&&(ne.tick(),Mi(null,{mode:y.dataset.mode}))});let d=y=>{y.key==="Escape"&&!document.querySelector(".modal")&&c()};document.addEventListener("keydown",d),Pt.add(()=>document.removeEventListener("keydown",d));let u=null,h=y=>{a=y,Cn.set(s?"lastDrill":"last",y),u&&u.dispose(),o.querySelectorAll(".lv-list li").forEach(v=>{v.classList.toggle("sel",v.dataset.id===y),v.querySelector(".lv-go").innerHTML=""});let m=o.querySelector(`li[data-id="${y}"]`),g=r.find(v=>v.id===y),w=s?Zo(g):0;if(s){let v=Mr(g.id),S=m.querySelector(".lv-go");S.innerHTML=`<div class="lvl-pick" role="radiogroup" aria-label="Training level">${g.levels.map((A,_)=>`<button type="button" role="radio" class="lvl-b${v.includes(_)?" done":""}" data-i="${_}" aria-checked="${_===w}" aria-label="Level ${_+1}, ${A.name}${v.includes(_)?", passed":""}"><b>${_+1}</b>${v.includes(_)?'<i aria-hidden="true">\u2713</i>':""}</button>`).join("")}</div><p class="lvl-goal"></p>`;let b=()=>{let A=g.levels[w];S.querySelector(".lvl-goal").innerHTML=`<b>Level ${w+1} \xB7 ${Pe(A.name)}</b> ${Pe(A.goal)}`,S.querySelectorAll(".lvl-b").forEach(_=>_.setAttribute("aria-checked",String(+_.dataset.i===w)))};S.querySelectorAll(".lvl-b").forEach(A=>A.onclick=()=>{w=+A.dataset.i,ne.tick(),b()}),b()}u=Sr("Hold to tune in"),m.querySelector(".lv-go").appendChild(u.el),u.done.then(()=>{Uc(),s?vr(g,w):Wo(g)});let T=s?g.scene:y;return bt.levelId!==T&&(bt.load(T),bt.setShot("intro",0)),m},f=()=>vy(o,y=>{y&&(An.age=y);let m=l();if(y&&m){let g=h(m);g.scrollIntoView({block:"nearest",behavior:"smooth"}),g.querySelector(".lv").focus({preventScroll:!0})}}),p=0;o.querySelectorAll(".age-arrow").forEach(y=>y.onclick=()=>{let m=+y.dataset.d;An.age=Math.max(5,Math.min(99,An.age?An.age+m:12)),ne.tick();let g=l();clearTimeout(p),p=setTimeout(()=>{g&&g!==a&&h(g).scrollIntoView({block:"nearest",behavior:"smooth"})},550)}),Pt.add(()=>clearTimeout(p)),o.querySelectorAll(".lv").forEach(y=>y.onclick=()=>{ne.unlock(),h(y.parentElement.dataset.id)}),l(),h(a),!An.asked&&!Rn&&(An.asked=!0,setTimeout(f,350))}function ju(){bt.levelId!=="mall"&&bt.load("mall"),bt.setShot("intro",0),Xo("AT TUNE",{accent:1,sub:"Five places. One voice to follow.",cls:"title"});let i=Gn('<div class="title-foot"><p class="card-text">A listening game. Headphones on, sound up. Pick out the voice that matters while everything else competes for your attention.</p><div class="title-actions"></div><p class="look-hint">Move your mouse (or drag) to look around.</p></div>',"is-title"),e=(window.ATTUNE_CONFIG||{}).homeUrl;e&&i.querySelector(".title-foot").insertAdjacentHTML("afterbegin",`<a class="home-link" href="${e}">\u2190 attune</a>`);let t=Sr("Hold to tune in");i.querySelector(".title-actions").appendChild(t.el),t.done.then(()=>{Uc(),ki(),Mi(null,{askAge:!0})})}function by(){let i=xi.get("level")&&gr.find(t=>t.id===xi.get("level")),e=xi.get("drill")&&St.list.find(t=>t.id===xi.get("drill"));i?(bt.load(i.id),Wo(i)):e?vr(e,xi.has("lv")?Math.max(0,Math.min(4,+xi.get("lv")-1)):Zo(e)):ju()}var My=document.fonts&&document.fonts.ready?Promise.race([document.fonts.ready,new Promise(i=>setTimeout(i,1800))]):Promise.resolve();My.then(by);})();
