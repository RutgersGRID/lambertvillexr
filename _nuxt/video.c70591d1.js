var v=Object.defineProperty;var P=(o,t,e)=>t in o?v(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var i=(o,t,e)=>(P(o,typeof t!="symbol"?t+"":t,e),e);import{u as r}from"./AFrameScene.vue.9d061d4f.js";import{B as y,c as f}from"./component.decorator.a66a1cbe.js";import"./aframe-master.5ce7d00f.js";import"./test-helpers.473cda21.js";import{c as l,q as T}from"./document.6adaffbf.js";import{c as x,s as A,f as w}from"./three.978d9ee7.js";import"./aframe-troika-text.ee81c748.js";import"./entry.aeac3f25.js";var E=Object.defineProperty,C=Object.getOwnPropertyDescriptor,k=(o,t,e,s)=>{for(var a=s>1?void 0:s?C(t,e):t,n=o.length-1,h;n>=0;n--)(h=o[n])&&(a=(s?h(t,e,a):h(a))||a);return s&&a&&E(t,e,a),a};const D=AFRAME.THREE,u=.2,_=u*1.2,d=.2,H=.2,m=.2,c=.2,b=.3;var p;let g=(p=class extends y{constructor(){super(...arguments);i(this,"playImageSrc",r("assets/images/play.png"));i(this,"pauseImageSrc",r("assets/images/pause.png"));i(this,"animDuration",200);i(this,"animEasing","easeOutCubic");i(this,"playPlane");i(this,"videoPlane");i(this,"backgroundPlane");i(this,"titleText");i(this,"descriptionText");i(this,"fadeControlsTimer");i(this,"videoElem");i(this,"title","");i(this,"description","");i(this,"isHovering",!1);i(this,"isVideoPlaying",!1);i(this,"controlsVisible",!1)}init(){var t;this.playPlane=l("a-image"),this.videoPlane=l("a-image"),this.backgroundPlane=l("a-plane"),x(this.backgroundPlane),A(this.backgroundPlane.object3D,-20),this.el.appendChild(this.backgroundPlane),this.playPlane.setAttribute("transparent",!0),this.playPlane.setAttribute("alpha-test",.5),this.el.appendChild(this.videoPlane),this.videoPlane.appendChild(this.playPlane),this.titleText=l("a-troika-text"),this.titleText.setAttribute("fontSize",u),this.titleText.setAttribute("font",r("assets/fonts/Raleway/Raleway-Bold.ttf")),this.titleText.setAttribute("color","white"),this.titleText.setAttribute("baseline","top"),this.descriptionText=l("a-troika-text"),this.descriptionText.setAttribute("fontSize",u),this.descriptionText.setAttribute("font",r("assets/fonts/Raleway/Raleway-Regular.ttf")),this.descriptionText.setAttribute("color","white"),this.descriptionText.setAttribute("baseline","top"),this.descriptionText.addEventListener("loaded",()=>{var s;((s=this.descriptionText)==null?void 0:s.getObject3D("mesh")).addEventListener("synccomplete",()=>{this.updateTitleDescriptionSizing()})}),this.el.appendChild(this.titleText),this.el.appendChild(this.descriptionText),this.videoPlane.addEventListener("loaded",()=>{this.update()}),this.updateAnimations(this.animDuration),this.videoPlane.addEventListener("mouseenter",()=>{this.isHovering=!0,this.showControls()}),this.videoPlane.addEventListener("mouseleave",()=>{this.isHovering=!1,this.hideControls(),clearTimeout(this.fadeControlsTimer)}),this.videoPlane.addEventListener("click",()=>{!this.controlsVisible||!this.videoElem||(clearTimeout(this.fadeControlsTimer),this.isPlayable()&&(this.isVideoPlaying?(this.isVideoPlaying=!1,this.videoElem.pause()):(this.isVideoPlaying=!0,this.videoElem.play(),this.fadeControlsTimer=setTimeout(()=>this.hideControls(500),1e3)),this.updatePlaybackUI()))}),(t=this.videoElem)==null||t.addEventListener("ended",()=>{this.updatePlaybackUI()}),this.el.addEventListener("componentchanged",e=>{e.detail.name==="visible"&&this.updateClickable()}),this.updateClickable()}updateClickable(){if(!this.videoPlane)return;const t=this.el.getAttribute("visible");this.videoPlane.classList.contains("clickable")?t||this.videoPlane.classList.remove("clickable"):t&&this.videoPlane.classList.add("clickable")}update(){if(!this.videoPlane||!this.playPlane||!this.backgroundPlane||!this.titleText||!this.descriptionText)return;const t=this.data.width<this.data.height?this.data.width:this.data.height;if(this.titleText.setAttribute("visible",this.data.showDescription),this.titleText.setAttribute("width",this.data.width),this.titleText.setAttribute("max-width",this.data.width),this.titleText.setAttribute("position",{x:0,y:-m-this.data.height/2,z:0}),this.titleText.setAttribute("clip-rect",`${-this.data.width/2} ${-_} ${this.data.width/2} 0`),this.videoPlane.setAttribute("width",this.data.width),this.playPlane.setAttribute("width",t*b),this.playPlane.object3D.position.copy(new D.Vector3(0,0,.1)),this.backgroundPlane.setAttribute("width",this.data.width+2*d),this.playPlane.setAttribute("height",t*b),this.videoPlane.setAttribute("height",this.data.height),this.backgroundPlane.setAttribute("height",this.data.height+2*d),this.videoElem=T(this.data.src),this.title=this.videoElem.getAttribute("title")??"",this.description=this.videoElem.getAttribute("description")??"",this.titleText.setAttribute("value",this.title),this.descriptionText.setAttribute("value",this.description),this.videoPlane.setAttribute("src",this.data.src),this.videoPlane.getObject3D("mesh")){const s=this.videoPlane.getObject3D("mesh").material;s.map&&w(s.map,this.data.width,this.data.height)}this.isVideoPlaying=this.videoElem.currentTime>0&&!this.videoElem.paused&&!this.videoElem.ended&&this.videoElem.readyState>2,this.updatePlaybackUI()}updateTitleDescriptionSizing(){if(!this.descriptionText||!this.titleText||!this.backgroundPlane)return;const t=this.descriptionText.getObject3D("mesh"),e=this.description?Math.abs(t.textRenderInfo.visibleBounds[1])+c:0,s=this.title?H+m:0,a=e+s,n=a>this.data.descriptionHeight;n?this.descriptionText.setAttribute("clip-rect",`${-this.data.width/2} ${-this.data.descriptionHeight+(c+s)} ${this.data.width/2} 0`):this.descriptionText.removeAttribute("clip-rect"),this.descriptionText.setAttribute("position",{x:0,y:-c-this.data.height/2-s,z:0});const h=n?this.data.descriptionHeight:a;this.backgroundPlane.setAttribute("height",this.data.height+(this.data.showDescription?h:0)+2*d),this.backgroundPlane.setAttribute("position",{x:0,y:this.data.showDescription?-h/2:0,z:-.05})}showControls(t=this.animDuration){this.controlsVisible||!this.videoPlane||!this.playPlane||(this.controlsVisible=!0,this.updateAnimations(t),this.videoPlane.emit("showcontrols"),this.playPlane.emit("showcontrols"))}hideControls(t=this.animDuration){!this.controlsVisible||!this.videoPlane||!this.playPlane||(this.controlsVisible=!1,this.updateAnimations(t),this.videoPlane.emit("hidecontrols"),this.playPlane.emit("hidecontrols"))}isPlayable(){return this.videoElem&&this.videoElem.readyState>2}updatePlaybackUI(){var t;(t=this.playPlane)==null||t.setAttribute("material","src",this.isVideoPlaying?this.pauseImageSrc:this.playImageSrc)}updateAnimations(t=this.animDuration,e=this.animEasing){!this.videoPlane||!this.playPlane||(this.playPlane.setAttribute("material","transparent",!0),this.playPlane.setAttribute("material","opacity",0),this.playPlane.setAttribute("animation__showcontrols_opacity",{property:"material.opacity",to:1,startEvents:"showcontrols",dur:t,easing:e}),this.playPlane.setAttribute("animation__hidecontrols_color",{property:"material.opacity",to:0,startEvents:"hidecontrols",dur:t,easing:e}),this.videoPlane.setAttribute("animation__showcontrols_color",{property:"material.color",to:"#686868",startEvents:"showcontrols",dur:t,easing:e}),this.videoPlane.setAttribute("animation__hidecontrols_color",{property:"material.color",to:"#FFFFFF",startEvents:"hidecontrols",dur:t,easing:e}))}},i(p,"schema",{src:{type:"string"},width:{default:8},height:{default:4.5},showDescription:{default:!0},descriptionHeight:{default:1}}),p);g=k([f("video")],g);AFRAME.registerPrimitive("a-playback-video",{defaultComponents:{video:{}},mappings:{src:"video.src",width:"video.width",height:"video.height"}});export{g as default};
