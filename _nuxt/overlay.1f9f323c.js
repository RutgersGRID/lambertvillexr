var c=Object.defineProperty;var m=(t,e,r)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var i=(t,e,r)=>(m(t,typeof e!="symbol"?e+"":e,r),r);import{B as f,c as v}from"./component.decorator.a66a1cbe.js";import"./aframe-master.5ce7d00f.js";import"./test-helpers.473cda21.js";var O=Object.defineProperty,h=Object.getOwnPropertyDescriptor,_=(t,e,r,n)=>{for(var s=n>1?void 0:n?h(e,r):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(s=(n?l(e,r,s):l(s))||s);return n&&s&&O(e,r,s),s},a;let p=(a=class extends f{init(){this.el.sceneEl&&(this.el.sceneEl.renderer.sortObjects=!0,this.el.object3D.renderOrder=100,this.el.components.material.material.depthTest=!1)}},i(a,"dependencies",["material"]),a);p=_([v("overlay")],p);export{p as OverlayComponent};
