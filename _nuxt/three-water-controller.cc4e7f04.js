var d=Object.defineProperty;var f=(r,e,t)=>e in r?d(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var n=(r,e,t)=>(f(r,typeof e!="symbol"?e+"":e,t),t);import{b as w}from"./aframe-master.5ce7d00f.js";import"./test-helpers.473cda21.js";var p;const v=(p=class{},n(p,"schema",{}),p);function y(r){const e=r.prototype,t={schema:r.schema},i=Object.getOwnPropertyNames(e);i.forEach(s=>{s!=="constructor"&&(t[s]=e[s])});const a=e.init;return t.init=function(){const s=new r;Object.getOwnPropertyNames(s).forEach(o=>{this[o]=s[o]}),i.forEach(o=>{const h=this[o];h._bindToAframe&&typeof h=="function"&&(this[o]=h.bind(this))}),a&&a.call(this)},t}function L(r){return function(e){w.registerSystem(r,y(e))}}var A=Object.defineProperty,E=Object.getOwnPropertyDescriptor,b=(r,e,t,i)=>{for(var a=i>1?void 0:i?E(e,t):e,s=r.length-1,c;s>=0;s--)(c=r[s])&&(a=(i?c(e,t,a):c(a))||a);return i&&a&&A(e,t,a),a};const l=AFRAME.THREE;var u;let m=(u=class extends v{constructor(){super(...arguments);n(this,"water");n(this,"camera");n(this,"plane");n(this,"underwater",!1);n(this,"currentWaterLevel",0);n(this,"waterLevelAnimation")}init(){var t;const e=this.el;this.water=e.querySelector("a-three-water")??void 0,this.camera=e.querySelector("[camera]")??void 0,this.plane=new l.Mesh(new l.PlaneGeometry(10,10),new l.MeshBasicMaterial({color:2573673,opacity:.5,transparent:!0,depthTest:!1})),this.plane.renderOrder=200,(t=this.camera)==null||t.setObject3D("tint",this.plane),this.plane.position.set(0,0,-.1),this.updateUnderwaterFX()}tick(e,t){var a;if(!this.camera)return;(a=this.water)==null||a.setAttribute("position",{x:0,y:this.currentWaterLevel,z:0});const i=this.currentWaterLevel>this.camera.getAttribute("position").y;i!=this.underwater&&(this.underwater=i,this.updateUnderwaterFX())}update(e){e.waterLevel!=this.data.waterLevel&&(this.waterLevelAnimation!=null&&this.waterLevelAnimation.completed&&w.ANIME.remove(this),this.waterLevelAnimation=AFRAME.ANIME({targets:this,currentWaterLevel:this.data.waterLevel,easing:"easeInOutQuad",duration:1e3}))}changeWaterLevel(e){}updateUnderwaterFX(){this.plane&&(this.plane.visible=this.underwater)}},n(u,"schema",{waterLevel:{default:-1}}),u);m=b([L("three-water-controller")],m);export{m as ThreeWaterControllerSystem};