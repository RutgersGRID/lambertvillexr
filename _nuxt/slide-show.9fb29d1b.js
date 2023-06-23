var w=Object.defineProperty;var B=(r,t,e)=>t in r?w(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var s=(r,t,e)=>(B(r,typeof t!="symbol"?t+"":t,e),e);import{u as l}from"./AFrameScene.vue.b89ebf1b.js";import{B as v,c as y}from"./component.decorator.a66a1cbe.js";import"./aframe-master.5ce7d00f.js";import"./test-helpers.473cda21.js";import{d as n}from"./document.6adaffbf.js";import{c as u,l as A}from"./three.0000d059.js";import"./button.a8e44829.js";import"./entry.b7a43762.js";var T=Object.defineProperty,f=Object.getOwnPropertyDescriptor,P=(r,t,e,i)=>{for(var a=i>1?void 0:i?f(t,e):t,o=r.length-1,h;o>=0;o--)(h=r[o])&&(a=(i?h(t,e,a):h(a))||a);return i&&a&&T(t,e,a),a};const p=AFRAME.THREE,b=.2,S=b*1.2,d=.2,E=.2,x=.2,c=.2,D=.2;var g;let m=(g=class extends v{constructor(){super(...arguments);s(this,"animDuration",200);s(this,"animEasing","easeOutCubic");s(this,"backgroundPlane");s(this,"displayPlane");s(this,"prevButtonBg");s(this,"prevButton");s(this,"nextButton");s(this,"nextButtonBg");s(this,"titleText");s(this,"descriptionText");s(this,"slides",[]);s(this,"autoplayInterval")}init(){this.displayPlane=n.createEntity("a-image"),this.displayPlane.setAttribute("side","double"),this.displayPlane.setAttribute("transparent",!0),this.displayPlane.object3D.renderOrder=-10,this.backgroundPlane=n.createEntity("a-plane"),u(this.backgroundPlane),this.backgroundPlane.object3D.renderOrder=-20,this.prevButtonBg=n.createEntity("a-circle"),u(this.prevButtonBg,-.075),this.prevButtonBg.object3D.renderOrder=-20,this.prevButton=n.createEntity("a-button"),this.prevButton.setAttribute("src",l("assets/images/play.png")),this.prevButton.addEventListener("click",()=>this.gotoPrevImage()),this.prevButton.appendChild(this.prevButtonBg),this.nextButtonBg=n.createEntity("a-circle"),u(this.nextButtonBg,-.075),this.nextButtonBg.object3D.renderOrder=-20,this.nextButton=n.createEntity("a-button"),this.nextButton.setAttribute("src",l("assets/images/play.png")),this.nextButton.addEventListener("click",()=>this.gotoNextImage()),this.nextButton.setAttribute("scale","-1 1 1"),this.nextButton.appendChild(this.nextButtonBg),this.titleText=n.createEntity("a-troika-text"),this.titleText.setAttribute("fontSize",b),this.titleText.setAttribute("font",l("assets/fonts/Raleway/Raleway-Bold.ttf")),this.titleText.setAttribute("color","white"),this.titleText.setAttribute("baseline","top"),this.titleText.setAttribute("clip-rect",`${-this.data.width/2} ${-S} ${this.data.width/2} 0`),this.descriptionText=n.createEntity("a-troika-text"),this.descriptionText.setAttribute("fontSize",b),this.descriptionText.setAttribute("font",l("assets/fonts/Raleway/Raleway-Regular.ttf")),this.descriptionText.setAttribute("color","white"),this.descriptionText.setAttribute("baseline","top"),this.descriptionText.addEventListener("loaded",()=>{var e;((e=this.descriptionText)==null?void 0:e.getObject3D("mesh")).addEventListener("synccomplete",()=>{console.log("sync complete"),this.updateTitleDescriptionSizing()})}),this.el.appendChild(this.backgroundPlane),this.el.appendChild(this.displayPlane),this.el.appendChild(this.prevButton),this.el.appendChild(this.nextButton),this.el.appendChild(this.descriptionText),this.el.appendChild(this.titleText),this.displayPlane.addEventListener("loaded",()=>{setTimeout(()=>{this.update()},0)})}currentSlide(){return this.slides[this.data.currentSlide]}updateTitleDescriptionSizing(){if(!this.descriptionText||!this.titleText||!this.backgroundPlane)return;const t=this.descriptionText.getObject3D("mesh"),e=this.currentSlide().description?Math.abs(t.textRenderInfo.visibleBounds[1])+c:0,i=this.currentSlide().title?E+x:0,a=e+i,o=a>this.data.descriptionHeight;o?this.descriptionText.setAttribute("clip-rect",`${-this.data.width/2} ${-this.data.descriptionHeight+(c+i)} ${this.data.width/2} 0`):this.descriptionText.removeAttribute("clip-rect"),this.descriptionText.setAttribute("position",{x:0,y:-c-this.data.height/2-i,z:0});const h=o?this.data.descriptionHeight:a;this.backgroundPlane.setAttribute("height",this.data.height+(this.data.showDescription?h:0)+2*d),this.backgroundPlane.setAttribute("position",{x:0,y:this.data.showDescription?-h/2:0,z:-.05})}updateSlide(){var a;if(!this.displayPlane||!this.descriptionText||!this.titleText)return;const t=this.currentSlide();this.titleText.setAttribute("value",t.title),this.descriptionText.setAttribute("value",t.description);const i=this.displayPlane.getObject3D("mesh").material;(a=i.map)==null||a.dispose(),i.map=t.texture}gotoNextImage(){this.data.currentSlide++,this.data.currentSlide>=this.slides.length&&(this.data.currentSlide=0),this.updateSlide()}gotoPrevImage(){this.data.currentSlide--,this.data.currentSlide<0&&(this.data.currentSlide=this.slides.length-1),this.updateSlide()}updateImageTextures(){this.slides=[];const t=n.querySelectorAll(this.data.imageQuery,this.el.sceneEl);for(const e of t){const i=new p.TextureLoader().load(e.src,A(this.data.width,this.data.height));i.wrapS=p.ClampToEdgeWrapping,i.wrapT=p.RepeatWrapping,this.slides.push({texture:i,title:e.getAttribute("title")??"",description:e.getAttribute("description")??""})}}update(){if(!this.displayPlane||!this.nextButton||!this.prevButton||!this.backgroundPlane||!this.prevButtonBg||!this.nextButtonBg||!this.descriptionText||!this.titleText)return;const t=this.data.width<this.data.height?this.data.width:this.data.height;this.displayPlane.setAttribute("width",this.data.width),this.displayPlane.setAttribute("height",this.data.height);const e=t*D;this.nextButtonBg.setAttribute("radius",e/2+d),this.nextButton.setAttribute("width",e),this.nextButton.setAttribute("height",e),this.prevButtonBg.setAttribute("radius",e/2+d),this.prevButton.setAttribute("width",e),this.prevButton.setAttribute("height",e),this.nextButtonBg.setAttribute("visible",this.data.showControls),this.nextButton.setAttribute("visible",this.data.showControls),this.prevButtonBg.setAttribute("visible",this.data.showControls),this.prevButton.setAttribute("visible",this.data.showControls),this.titleText.setAttribute("visible",this.data.showDescription),this.titleText.setAttribute("width",this.data.width),this.titleText.setAttribute("max-width",this.data.width),this.titleText.setAttribute("position",{x:0,y:-x-this.data.height/2,z:0}),this.descriptionText.setAttribute("visible",this.data.showDescription),this.descriptionText.setAttribute("width",this.data.width),this.descriptionText.setAttribute("max-width",this.data.width),this.backgroundPlane.setAttribute("width",this.data.width+2*d),this.prevButton.setAttribute("position",{x:this.data.width/2,y:0,z:.05}),this.nextButton.setAttribute("position",{x:-this.data.width/2,y:0,z:.05}),this.updateImageTextures(),(this.data.currentSlide<0||this.data.currentSlide>=this.slides.length)&&(this.data.currentSlide=0),this.displayPlane.getObject3D("mesh")&&(this.updateSlide(),this.autoplayInterval&&(clearInterval(this.autoplayInterval),this.autoplayInterval=void 0),this.data.autoplay&&(this.autoplayInterval=setInterval(()=>this.gotoNextImage(),this.data.autoplayDuration)))}updateClickable(){const t=this.el.getAttribute("visible");this.el.classList.contains("clickable")?t||this.el.classList.remove("clickable"):t&&this.el.classList.add("clickable")}updateAnimations(t=this.animDuration,e=this.animEasing){this.el.setAttribute("animation__mouseenter_color",{property:"material.color",to:"#b0b0b0",startEvents:"mouseenter",dur:t,easing:e}),this.el.setAttribute("animation__mouseleave_color",{property:"material.color",to:"#FFFFFF",startEvents:"mouseleave",dur:t,easing:e}),this.el.setAttribute("animation__mouseclick_color",{property:"material.color",from:"#828282",to:"#b0b0b0",startEvents:"click",dur:t,easing:e})}},s(g,"schema",{imageQuery:{default:""},loop:{default:!0},autoplay:{default:!1},autoplayDuration:{default:3e3},width:{default:8},height:{default:4.5},showControls:{default:!0},showDescription:{default:!0},descriptionHeight:{default:1},currentSlide:{default:0}}),g);m=P([y("slide-show")],m);AFRAME.registerPrimitive("a-slide-show",{defaultComponents:{"slide-show":{}},mappings:{"image-query":"slide-show.imageQuery",loop:"slide-show.loop",autoplay:"slide-show.autoplay","autoplay-duration":"slide-show.autoplayDuration",width:"slide-show.width",height:"slide-show.height","show-controls":"slide-show.showControls","current-slide":"slide-show.currentSlide","description-height":"slide-show.descriptionHeight","show-description":"slide-show.showDescription"}});export{m as SlideShowComponent};
