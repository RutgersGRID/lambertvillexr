var l=Object.defineProperty;var h=(r,e,t)=>e in r?l(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var i=(r,e,t)=>(h(r,typeof e!="symbol"?e+"":e,t),t);import{B as m,c as p}from"./component.decorator.a66a1cbe.js";import"./aframe-master.5ce7d00f.js";import"./test-helpers.473cda21.js";var u=Object.defineProperty,A=Object.getOwnPropertyDescriptor,d=(r,e,t,o)=>{for(var s=o>1?void 0:o?A(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(s=(o?c(e,t,s):c(s))||s);return o&&s&&u(e,t,s),s},n;let f=(n=class extends m{constructor(){super(...arguments);i(this,"currAnimation");i(this,"forestScale",0)}init(){}update(){this.currAnimation&&!this.currAnimation.completed&&AFRAME.ANIME.remove(this),this.currAnimation=AFRAME.ANIME({targets:this,forestScale:this.data.forestScale,easing:"easeInOutQuad",duration:1e3})}tick(){for(const e of this.el.children){const t=e;t.object3D&&t.object3D.scale.set(this.forestScale,this.forestScale,this.forestScale)}}},i(n,"schema",{forestScale:{default:0}}),n);f=d([p("forest-grower")],f);export{f as ForestGrowerComponent};
