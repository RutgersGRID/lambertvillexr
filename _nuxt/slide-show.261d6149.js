var m=Object.defineProperty;var c=(o,t,e)=>t in o?m(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var a=(o,t,e)=>(c(o,typeof t!="symbol"?t+"":t,e),e);import{u as d}from"./AFrameScene.vue.ec005fdc.js";import{B as g,c as y}from"./component.decorator.a66a1cbe.js";import"./aframe-master.5ce7d00f.js";import"./test-helpers.473cda21.js";import{d as r}from"./document.6000800d.js";import{l as I}from"./three.de5e62c0.js";import"./entry.15d4731e.js";var v=Object.defineProperty,b=Object.getOwnPropertyDescriptor,x=(o,t,e,i)=>{for(var s=i>1?void 0:i?b(t,e):t,h=o.length-1,l;h>=0;h--)(l=o[h])&&(s=(i?l(t,e,s):l(s))||s);return i&&s&&v(t,e,s),s};const n=AFRAME.THREE;var u;let p=(u=class extends g{constructor(){super(...arguments);a(this,"animDuration",200);a(this,"animEasing","easeOutCubic");a(this,"displayPlane");a(this,"prevButton");a(this,"nextButton");a(this,"images",[]);a(this,"currImageIndex",0);a(this,"autoplayInterval")}init(){console.log("init slide show with data ",this.data),this.displayPlane=r.createEntity("a-image"),this.prevButton=r.createEntity("a-button"),this.prevButton.setAttribute("src",d("assets/images/play.png")),this.prevButton.addEventListener("click",()=>this.gotoPrevImage()),this.prevButton.setAttribute("position",{x:this.data.width/2,y:0,z:.05}),this.nextButton=r.createEntity("a-button"),this.nextButton.setAttribute("src",d("assets/images/play.png")),this.nextButton.addEventListener("click",()=>this.gotoNextImage()),this.nextButton.setAttribute("position",{x:-this.data.width/2,y:0,z:.05}),this.nextButton.setAttribute("scale","-1 1 1"),this.el.appendChild(this.displayPlane),this.el.appendChild(this.prevButton),this.el.appendChild(this.nextButton),this.displayPlane.addEventListener("loaded",()=>{this.update()})}updateImage(t){var s;if(!this.displayPlane)return;const i=this.displayPlane.getObject3D("mesh").material;(s=i.map)==null||s.dispose(),i.map=t}gotoNextImage(){this.currImageIndex++,this.currImageIndex>=this.images.length&&(this.currImageIndex=0),this.updateImage(this.images[this.currImageIndex])}gotoPrevImage(){this.currImageIndex--,this.currImageIndex<0&&(this.currImageIndex=this.images.length-1),this.updateImage(this.images[this.currImageIndex])}updateImageTextures(){const t=r.querySelectorAll(this.data.imageQuery,this.el.sceneEl).map(e=>e.src);this.images=[],t.forEach(e=>{const i=new n.TextureLoader().load(e,I(this.data.width,this.data.height));i.wrapS=n.ClampToEdgeWrapping,i.wrapT=n.RepeatWrapping,this.images.push(i)})}update(){if(!this.displayPlane||!this.nextButton||!this.prevButton)return;const t=.2,e=this.data.width<this.data.height?this.data.width:this.data.height;this.displayPlane.setAttribute("width",this.data.width),this.displayPlane.setAttribute("height",this.data.height),this.nextButton.setAttribute("width",e*t),this.nextButton.setAttribute("height",e*t),this.prevButton.setAttribute("width",e*t),this.prevButton.setAttribute("height",e*t),this.updateImageTextures(),this.displayPlane.getObject3D("mesh")&&(this.updateImage(this.images[0]),this.currImageIndex=0,this.autoplayInterval&&(clearInterval(this.autoplayInterval),this.autoplayInterval=void 0),this.data.autoplay&&(this.autoplayInterval=setInterval(()=>this.gotoNextImage(),this.data.autoplayDuration)))}updateClickable(){const t=this.el.getAttribute("visible");this.el.classList.contains("clickable")?t||this.el.classList.remove("clickable"):t&&this.el.classList.add("clickable")}updateAnimations(t=this.animDuration,e=this.animEasing){this.el.setAttribute("animation__mouseenter_color",{property:"material.color",to:"#b0b0b0",startEvents:"mouseenter",dur:t,easing:e}),this.el.setAttribute("animation__mouseleave_color",{property:"material.color",to:"#FFFFFF",startEvents:"mouseleave",dur:t,easing:e}),this.el.setAttribute("animation__mouseclick_color",{property:"material.color",from:"#828282",to:"#b0b0b0",startEvents:"click",dur:t,easing:e})}},a(u,"schema",{imageQuery:{default:""},loop:{default:!0},autoplay:{default:!1},autoplayDuration:{default:3e3},width:{default:16},height:{default:9}}),u);p=x([y("slide-show")],p);AFRAME.registerPrimitive("a-slide-show",{defaultComponents:{"slide-show":{}},mappings:{"image-query":"slide-show.imageQuery",loop:"slide-show.loop",autoplay:"slide-show.autoplay","autoplay-duration":"slide-show.autoplayDuration",width:"slide-show.width",height:"slide-show.height"}});export{p as SlideShowComponent};
