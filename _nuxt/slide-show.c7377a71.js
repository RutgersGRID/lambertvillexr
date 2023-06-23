var m=Object.defineProperty;var v=(n,t,e)=>t in n?m(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var a=(n,t,e)=>(v(n,typeof t!="symbol"?t+"":t,e),e);import{u as h}from"./AFrameScene.vue.63d8e600.js";import{B,c as w}from"./component.decorator.a66a1cbe.js";import"./aframe-master.5ce7d00f.js";import"./test-helpers.473cda21.js";import{d as o}from"./aframe-troika-text.b725a61f.js";import{c as u,l as T}from"./three.0000d059.js";import"./button.395ccde1.js";import"./entry.9affac2e.js";var f=Object.defineProperty,D=Object.getOwnPropertyDescriptor,S=(n,t,e,s)=>{for(var i=s>1?void 0:s?D(t,e):t,r=n.length-1,l;r>=0;r--)(l=n[r])&&(i=(s?l(t,e,i):l(i))||i);return s&&i&&f(t,e,i),i};const c=AFRAME.THREE,y=.2,P=y*1.2,d=.2,E=.2,A=.2,p=.2,C=.2,b=.075,O=.4,I=.2,j="#FFF",k=1,R="#b0b0b0",_=.8;var g;let x=(g=class extends B{constructor(){super(...arguments);a(this,"animDuration",200);a(this,"animEasing","easeOutCubic");a(this,"backgroundPlane");a(this,"displayPlane");a(this,"prevButtonBg");a(this,"prevButton");a(this,"nextButton");a(this,"nextButtonBg");a(this,"titleText");a(this,"descriptionText");a(this,"slides",[]);a(this,"autoplayInterval");a(this,"slideDots",[]);a(this,"restartAutoplayTimeout")}init(){this.displayPlane=o.createEntity("a-image"),this.displayPlane.setAttribute("side","double"),this.displayPlane.setAttribute("transparent",!0),this.displayPlane.object3D.renderOrder=0,this.displayPlane.object3D.relativeRenderOrder=0,this.backgroundPlane=o.createEntity("a-plane"),u(this.backgroundPlane),this.backgroundPlane.object3D.renderOrder=-10,this.backgroundPlane.object3D.relativeRenderOrder=-10,this.prevButtonBg=o.createEntity("a-circle"),u(this.prevButtonBg,-.075),this.prevButtonBg.object3D.renderOrder=-10,this.prevButtonBg.object3D.relativeRenderOrder=-10,this.prevButton=o.createEntity("a-button"),this.prevButton.setAttribute("src",h("assets/images/play.png")),this.prevButton.addEventListener("click",()=>{this.onClickInterruptAutoplay(),this.gotoPrevImage()}),this.prevButton.setAttribute("scale","-1 1 1"),this.prevButton.appendChild(this.prevButtonBg),this.prevButton.object3D.renderOrder=5,this.prevButton.object3D.relativeRenderOrder=5,this.nextButtonBg=o.createEntity("a-circle"),u(this.nextButtonBg,-.075),this.nextButtonBg.object3D.renderOrder=-10,this.nextButtonBg.object3D.relativeRenderOrder=-10,this.nextButton=o.createEntity("a-button"),this.nextButton.setAttribute("src",h("assets/images/play.png")),this.nextButton.addEventListener("click",()=>{this.onClickInterruptAutoplay(),this.gotoNextImage()}),this.nextButton.appendChild(this.nextButtonBg),this.nextButton.object3D.renderOrder=5,this.nextButton.object3D.relativeRenderOrder=5,this.titleText=o.createEntity("a-troika-text"),this.titleText.setAttribute("fontSize",y),this.titleText.setAttribute("font",h("assets/fonts/Raleway/Raleway-Bold.ttf")),this.titleText.setAttribute("color","white"),this.titleText.setAttribute("baseline","top"),this.descriptionText=o.createEntity("a-troika-text"),this.descriptionText.setAttribute("fontSize",y),this.descriptionText.setAttribute("font",h("assets/fonts/Raleway/Raleway-Regular.ttf")),this.descriptionText.setAttribute("color","white"),this.descriptionText.setAttribute("baseline","top"),this.descriptionText.addEventListener("loaded",()=>{var e;((e=this.descriptionText)==null?void 0:e.getObject3D("mesh")).addEventListener("synccomplete",()=>{this.updateTitleDescriptionSizing()})}),this.el.appendChild(this.backgroundPlane),this.el.appendChild(this.displayPlane),this.el.appendChild(this.prevButton),this.el.appendChild(this.nextButton),this.el.appendChild(this.descriptionText),this.el.appendChild(this.titleText),this.displayPlane.addEventListener("loaded",()=>{setTimeout(()=>{this.update()},0)})}currentSlide(){return this.slides[this.data.currentSlide]}updateTitleDescriptionSizing(){if(!this.descriptionText||!this.titleText||!this.backgroundPlane)return;const t=this.descriptionText.getObject3D("mesh"),e=this.currentSlide().description?Math.abs(t.textRenderInfo.visibleBounds[1])+p:0,s=this.currentSlide().title?E+A:0,i=e+s,r=i>this.data.descriptionHeight;r?this.descriptionText.setAttribute("clip-rect",`${-this.data.width/2} ${-this.data.descriptionHeight+(p+s)} ${this.data.width/2} 0`):this.descriptionText.removeAttribute("clip-rect"),this.descriptionText.setAttribute("position",{x:0,y:-p-this.data.height/2-s,z:0});const l=r?this.data.descriptionHeight:i;this.backgroundPlane.setAttribute("height",this.data.height+(this.data.showDescription?l:0)+2*d),this.backgroundPlane.setAttribute("position",{x:0,y:this.data.showDescription?-l/2:0,z:-.05})}updateSlide(){var i;if(!this.displayPlane||!this.descriptionText||!this.titleText)return;const t=this.currentSlide();for(let r=0;r<this.slideDots.length;r++)this.slideDots[r].setAttribute("color",r==this.data.currentSlide?j:R),this.slideDots[r].setAttribute("opacity",r==this.data.currentSlide?k:_);this.titleText.setAttribute("value",t.title),this.descriptionText.setAttribute("value",t.description);const s=this.displayPlane.getObject3D("mesh").material;(i=s.map)==null||i.dispose(),s.map=t.texture}gotoNextImage(){this.data.currentSlide++,this.data.currentSlide>=this.slides.length&&(this.data.currentSlide=0),this.updateSlide()}gotoPrevImage(){this.data.currentSlide--,this.data.currentSlide<0&&(this.data.currentSlide=this.slides.length-1),this.updateSlide()}updateSlidesArray(){this.slides=[];const t=o.querySelectorAll(this.data.imageQuery,this.el.sceneEl);for(const e of t){const s=new c.TextureLoader().load(e.src,T(this.data.width,this.data.height));s.wrapS=c.ClampToEdgeWrapping,s.wrapT=c.RepeatWrapping,this.slides.push({texture:s,title:e.getAttribute("title")??"",description:e.getAttribute("description")??""})}}update(){if(!this.displayPlane||!this.nextButton||!this.prevButton||!this.backgroundPlane||!this.prevButtonBg||!this.nextButtonBg||!this.descriptionText||!this.titleText)return;const t=this.data.width<this.data.height?this.data.width:this.data.height;this.displayPlane.setAttribute("width",this.data.width),this.displayPlane.setAttribute("height",this.data.height);const e=t*C;this.nextButtonBg.setAttribute("radius",e/2+d),this.nextButton.setAttribute("width",e),this.nextButton.setAttribute("height",e),this.prevButtonBg.setAttribute("radius",e/2+d),this.prevButton.setAttribute("width",e),this.prevButton.setAttribute("height",e),this.nextButtonBg.setAttribute("visible",this.data.showControls),this.nextButton.setAttribute("visible",this.data.showControls),this.prevButtonBg.setAttribute("visible",this.data.showControls),this.prevButton.setAttribute("visible",this.data.showControls),this.titleText.setAttribute("visible",this.data.showDescription),this.titleText.setAttribute("width",this.data.width),this.titleText.setAttribute("max-width",this.data.width),this.titleText.setAttribute("position",{x:0,y:-A-this.data.height/2,z:0}),this.titleText.setAttribute("clip-rect",`${-this.data.width/2} ${-P} ${this.data.width/2} 0`),this.descriptionText.setAttribute("visible",this.data.showDescription),this.descriptionText.setAttribute("width",this.data.width),this.descriptionText.setAttribute("max-width",this.data.width),this.backgroundPlane.setAttribute("width",this.data.width+2*d),this.prevButton.setAttribute("position",{x:-this.data.width/2,y:0,z:.05}),this.nextButton.setAttribute("position",{x:this.data.width/2,y:0,z:.05}),this.updateSlidesArray();for(const s of this.slideDots)this.el.removeChild(s);this.slideDots=[];for(let s=0;s<this.slides.length;s++){const i=o.createEntity("a-circle");i.setAttribute("radius",b),i.setAttribute("position",{x:(s-this.slides.length/2)*O,y:-this.data.height/2+b+I,z:.1}),i.setAttribute("material",{transparent:!0}),i.object3D.renderOrder=15,i.object3D.relativeRenderOrder=15;const r=o.createEntity("a-circle");r.setAttribute("radius",b*1.75),r.setAttribute("material",{color:"black",opacity:.75,transparent:!0}),r.setAttribute("position",{z:-.025}),r.object3D.renderOrder=14,r.object3D.relativeRenderOrder=14,i.append(r),this.el.appendChild(i),this.slideDots.push(i)}(this.data.currentSlide<0||this.data.currentSlide>=this.slides.length)&&(this.data.currentSlide=0),this.displayPlane.getObject3D("mesh")&&(this.updateSlide(),this.restartAutoplayTimeout&&clearTimeout(this.restartAutoplayTimeout),this.stopAutoplayInterval(),this.startAutoplayInterval())}onClickInterruptAutoplay(){this.data.autoplay&&(this.restartAutoplayTimeout&&clearTimeout(this.restartAutoplayTimeout),this.stopAutoplayInterval(),this.restartAutoplayTimeout=setTimeout(()=>{this.startAutoplayInterval()},this.data.restartAutoplayDelay))}stopAutoplayInterval(){this.autoplayInterval&&(clearInterval(this.autoplayInterval),this.autoplayInterval=void 0)}startAutoplayInterval(){this.data.autoplay&&(this.autoplayInterval=setInterval(()=>this.gotoNextImage(),this.data.autoplayDuration))}updateClickable(){const t=this.el.getAttribute("visible");this.el.classList.contains("clickable")?t||this.el.classList.remove("clickable"):t&&this.el.classList.add("clickable")}updateAnimations(t=this.animDuration,e=this.animEasing){this.el.setAttribute("animation__mouseenter_color",{property:"material.color",to:"#b0b0b0",startEvents:"mouseenter",dur:t,easing:e}),this.el.setAttribute("animation__mouseleave_color",{property:"material.color",to:"#FFFFFF",startEvents:"mouseleave",dur:t,easing:e}),this.el.setAttribute("animation__mouseclick_color",{property:"material.color",from:"#828282",to:"#b0b0b0",startEvents:"click",dur:t,easing:e})}},a(g,"schema",{imageQuery:{default:""},loop:{default:!0},autoplay:{default:!1},autoplayDuration:{default:3e3},width:{default:8},height:{default:4.5},showControls:{default:!0},showDescription:{default:!0},descriptionHeight:{default:1},restartAutoplayDelay:{default:5e3},currentSlide:{default:0}}),g);x=S([w("slide-show")],x);AFRAME.registerPrimitive("a-slide-show",{defaultComponents:{"slide-show":{}},mappings:{"image-query":"slide-show.imageQuery",loop:"slide-show.loop",autoplay:"slide-show.autoplay","autoplay-duration":"slide-show.autoplayDuration",width:"slide-show.width",height:"slide-show.height","show-controls":"slide-show.showControls","current-slide":"slide-show.currentSlide","description-height":"slide-show.descriptionHeight","show-description":"slide-show.showDescription"}});export{x as SlideShowComponent};
