var h=Object.defineProperty;var m=(t,e,n)=>e in t?h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var a=(t,e,n)=>(m(t,typeof e!="symbol"?e+"":e,n),n);import{b as d}from"./aframe-master.5ce7d00f.js";var c;const v=(c=class{},a(c,"schema",{}),c);function u(t){const e=t.prototype,n={schema:t.schema,multiple:t.multiple,dependencies:t.dependencies},r=Object.getOwnPropertyNames(e);r.forEach(i=>{i!=="constructor"&&(n[i]=e[i])});const f=e.init;return n.init=function(i){const p=new t;if(Object.getOwnPropertyNames(p).forEach(o=>{this[o]=p[o]}),r.forEach(o=>{const s=this[o];s._bindToAframe&&typeof s=="function"&&(this[o]=s.bind(this))}),f&&f.call(this,i),t.bindEvents!==!1)for(const o in this.events)this.events[o]=this.events[o].bind(this)},n}function O(t){return function(e){d.registerComponent(t,u(e))}}AFRAME.THREE.Object3D;export{v as B,O as c};