var l=Object.defineProperty;var p=(i,t,r)=>t in i?l(i,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[t]=r;var n=(i,t,r)=>(p(i,typeof t!="symbol"?t+"":t,r),r);import{B as u,c as f}from"./component.decorator.a66a1cbe.js";import"./aframe-master.5ce7d00f.js";import"./test-helpers.473cda21.js";import"./change-detector.c919c1d0.js";var m=Object.defineProperty,E=Object.getOwnPropertyDescriptor,A=(i,t,r,e)=>{for(var s=e>1?void 0:e?E(t,r):t,a=i.length-1,d;a>=0;a--)(d=i[a])&&(s=(e?d(t,r,s):d(s))||s);return e&&s&&m(t,r,s),s};const o=AFRAME.THREE;var c;let h=(c=class extends u{constructor(){super(...arguments);n(this,"changeDetector")}init(){this.el.setAttribute("change-detector__render-order",{recursive:!0,object3DSet:!0}),this.el.sceneEl&&(this.el.sceneEl.renderer.sortObjects=!0,this.changeDetector=this.el.getAttribute("change-detector__render-order"),this.changeDetector&&this.el.addEventListener("detectorchanged__render-order",()=>{this.updateAllElem()}))}update(){this.updateAllElem()}updateAllElem(){const t=e=>{e.renderOrder=this.data.order,e instanceof o.Mesh&&(e.material instanceof o.Material?e.material.depthTest=this.data.depthTest:(console.log("updating obj.material: ",e.material),e.material.forEach(s=>{s.depthTest=this.data.depthTest})))},r=e=>{e.object3D&&Object.entries(e.object3DMap).forEach(([s,a])=>t(a)),e.getAttribute&&e.getAttribute("material")&&e.setAttribute("material","depthTest",this.data.depthTest),Array.from(e.childNodes).forEach(s=>{const a=s;a!=this.el&&a.getAttribute&&a.hasAttribute("render-order")||r(a)})};r(this.el)}},n(c,"schema",{order:{default:0},depthTest:{default:!0}}),c);h=A([f("render-order")],h);export{h as RenderOrderComopnent};
