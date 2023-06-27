var T=Object.defineProperty;var f=(s,t,e)=>t in s?T(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var h=(s,t,e)=>(f(s,typeof t!="symbol"?t+"":t,e),e);import{c as A,s as m}from"./three.978d9ee7.js";import{u as p}from"./AFrameScene.vue.08fd6316.js";import{B as w,c as P}from"./component.decorator.a66a1cbe.js";import"./aframe-master.5ce7d00f.js";import"./test-helpers.473cda21.js";import{d}from"./document.6adaffbf.js";import"./aframe-troika-text.ee81c748.js";import"./entry.2170349a.js";var y=Object.defineProperty,v=Object.getOwnPropertyDescriptor,D=(s,t,e,n)=>{for(var i=n>1?void 0:n?v(t,e):t,o=s.length-1,a;o>=0;o--)(a=s[o])&&(i=(n?a(t,e,i):a(i))||i);return n&&i&&y(t,e,i),i};const u=.2,c=.2,x=.2,b=.2;var l;let g=(l=class extends w{constructor(){super(...arguments);h(this,"backgroundPlane");h(this,"titleText");h(this,"descriptionText")}init(){this.backgroundPlane=d.createEntity("a-plane"),A(this.backgroundPlane),m(this.backgroundPlane.object3D,-20),this.titleText=d.createEntity("a-troika-text"),this.titleText.setAttribute("font-size",u),this.titleText.setAttribute("align","center"),this.titleText.setAttribute("baseline","top"),this.titleText.setAttribute("font",p("assets/fonts/Raleway/Raleway-Bold.ttf")),this.descriptionText=d.createEntity("a-troika-text"),this.descriptionText.setAttribute("font-size",u),this.descriptionText.setAttribute("align","center"),this.descriptionText.setAttribute("baseline","top"),this.descriptionText.setAttribute("font",p("assets/fonts/Raleway/Raleway-Regular.ttf")),this.descriptionText.addEventListener("loaded",()=>{var e;((e=this.descriptionText)==null?void 0:e.getObject3D("mesh")).addEventListener("synccomplete",()=>{this.data.autofitHeight&&this.updateTitleDescriptionSizing()})}),this.el.appendChild(this.backgroundPlane),this.el.appendChild(this.titleText),this.el.appendChild(this.descriptionText)}update(){if(!this.titleText||!this.descriptionText||!this.backgroundPlane)return;const t=this.data.title,e=this.data.description,n=t!=""&&e=="",i=t!=""?b+x:0,o=this.data.height-i;this.backgroundPlane.setAttribute("width",this.data.width+2*c),this.backgroundPlane.setAttribute("height",this.data.height+2*c),this.descriptionText.setAttribute("position",{y:this.data.height/2-i}),this.descriptionText.setAttribute("clip-rect",`${-this.data.width} ${-o} ${this.data.width} 0`),this.descriptionText.setAttribute("value",e),this.descriptionText.setAttribute("max-width",this.data.width),this.titleText.setAttribute("value",t),this.titleText.setAttribute("position",{y:n?0:this.data.height/2}),this.titleText.setAttribute("baseline",n?"center":"top")}updateTitleDescriptionSizing(){if(!this.descriptionText||!this.titleText||!this.backgroundPlane)return;const t=this.descriptionText.getObject3D("mesh"),e=this.data.description?Math.abs(t.textRenderInfo.visibleBounds[1]):0,n=this.data.title!=""&&this.data.description=="",i=this.data.title!=""?b+x:0,o=e+i,a=o>this.data.height;a?this.descriptionText.setAttribute("clip-rect",`${-this.data.width/2} ${(this.data.title!=""?i:0)-this.data.height} ${this.data.width/2} 0`):this.descriptionText.removeAttribute("clip-rect");const r=a?this.data.height:o;this.backgroundPlane.setAttribute("height",r+2*c),this.titleText.setAttribute("position",{y:n?0:r/2}),this.descriptionText.setAttribute("position",{y:r/2-i})}},h(l,"schema",{title:{default:""},description:{default:""},width:{default:1},height:{default:1},autofitHeight:{default:!0}}),l);g=D([P("text-box")],g);AFRAME.registerPrimitive("a-text-box",{defaultComponents:{"text-box":{}},mappings:{title:"text-box.title",description:"text-box.description",width:"text-box.width",height:"text-box.height","autofit-height":"text-box.autofitHeight"}});export{g as TextBoxComponent};
