import{b as f}from"./aframe-master.5ce7d00f.js";function p(o){const n=o.prototype,r={schema:o.schema},c=Object.getOwnPropertyNames(n);c.forEach(t=>{t!=="constructor"&&(r[t]=n[t])});const i=n.init;return r.init=function(){const t=new o;Object.getOwnPropertyNames(t).forEach(e=>{this[e]=t[e]}),c.forEach(e=>{const s=this[e];s._bindToAframe&&typeof s=="function"&&(this[e]=s.bind(this))}),i&&i.call(this)},r}function m(o){return function(n){f.registerSystem(o,p(n))}}export{m as s};
