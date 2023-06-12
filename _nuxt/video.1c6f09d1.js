var u=Object.defineProperty;var v=(a,t,e)=>t in a?u(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var i=(a,t,e)=>(v(a,typeof t!="symbol"?t+"":t,e),e);import{B as P,c as m}from"./component.decorator.a66a1cbe.js";import"./aframe-master.5ce7d00f.js";import{c as n,q as y}from"./test-helpers.4564543a.js";function d(a,t){return a/t*(180/Math.PI)}var g=Object.defineProperty,b=Object.getOwnPropertyDescriptor,f=(a,t,e,o)=>{for(var s=o>1?void 0:o?b(t,e):t,l=a.length-1,r;l>=0;l--)(r=a[l])&&(s=(o?r(t,e,s):r(s))||s);return o&&s&&g(t,e,s),s};const A=AFRAME.THREE;var h;let c=(h=class extends P{constructor(){super(...arguments);i(this,"playImageSrc","https://res.cloudinary.com/dxbh0pppv/image/upload/c_scale,h_512,q_10/v1471016296/play_wvmogo.png");i(this,"pauseImageSrc","https://res.cloudinary.com/dxbh0pppv/image/upload/c_scale,h_512,q_25/v1471016296/pause_ndega5.png");i(this,"animDuration",200);i(this,"animEasing","easeOutCubic");i(this,"playPlane");i(this,"videoPlane");i(this,"fadeControlsTimer");i(this,"videoElem");i(this,"isHovering",!1);i(this,"isVideoPlaying",!1);i(this,"controlsVisible",!1)}init(){var t;this.data.curved?(this.playPlane=n("a-curvedimage"),this.videoPlane=n("a-curvedimage")):(this.playPlane=n("a-image"),this.videoPlane=n("a-image")),this.playPlane.setAttribute("transparent",!0),this.playPlane.setAttribute("alpha-test",.5),this.el.appendChild(this.videoPlane),this.videoPlane.classList.add("clickable"),this.videoPlane.appendChild(this.playPlane),this.update(),this.updateAnimations(this.animDuration),this.videoPlane.addEventListener("mouseenter",()=>{this.isHovering=!0,this.showControls()}),this.videoPlane.addEventListener("mouseleave",()=>{this.isHovering=!1,this.hideControls(),clearTimeout(this.fadeControlsTimer)}),this.videoPlane.addEventListener("click",()=>{!this.controlsVisible||!this.videoElem||(clearTimeout(this.fadeControlsTimer),this.isPlayable()&&(this.isVideoPlaying?(this.isVideoPlaying=!1,this.videoElem.pause()):(this.isVideoPlaying=!0,this.videoElem.play(),this.fadeControlsTimer=setTimeout(()=>this.hideControls(500),1e3)),this.updatePlaybackUI()))}),(t=this.videoElem)==null||t.addEventListener("ended",()=>{this.updatePlaybackUI()})}update(){const e=this.data.width<this.data.height?this.data.width:this.data.height;if(!(!this.videoPlane||!this.playPlane)){if(this.data.curved){const o=2*Math.PI*this.data.radius;this.data.width>o&&(this.data.width=o);const s=d(this.data.width,this.data.radius);this.videoPlane.setAttribute("theta-length",s),this.videoPlane.setAttribute("theta-start",this.data.thetaStart),this.videoPlane.setAttribute("radius",this.data.radius);const l=this.data.radius-.1,r=d(e,l)*.3,p=this.data.thetaStart;this.playPlane.setAttribute("theta-start",p+s/2-r/2),this.playPlane.setAttribute("radius",l),this.playPlane.setAttribute("theta-length",r)}else this.videoPlane.setAttribute("width",this.data.width),this.playPlane.setAttribute("width",e*.3),this.playPlane.object3D.position.copy(new A.Vector3(0,0,.1));this.playPlane.setAttribute("height",e*.3),this.videoPlane.setAttribute("height",this.data.height),this.videoPlane.setAttribute("src",this.data.src),this.videoElem=y(this.data.src),this.isVideoPlaying=this.videoElem.currentTime>0&&!this.videoElem.paused&&!this.videoElem.ended&&this.videoElem.readyState>2,this.updatePlaybackUI()}}showControls(t=this.animDuration){this.controlsVisible||!this.videoPlane||!this.playPlane||(this.controlsVisible=!0,this.updateAnimations(t),this.videoPlane.emit("showcontrols"),this.playPlane.emit("showcontrols"))}hideControls(t=this.animDuration){!this.controlsVisible||!this.videoPlane||!this.playPlane||(this.controlsVisible=!1,this.updateAnimations(t),this.videoPlane.emit("hidecontrols"),this.playPlane.emit("hidecontrols"))}isPlayable(){return this.videoElem&&this.videoElem.readyState>2}updatePlaybackUI(){var t;(t=this.playPlane)==null||t.setAttribute("material","src",this.isVideoPlaying?this.pauseImageSrc:this.playImageSrc)}updateAnimations(t=this.animDuration,e=this.animEasing){!this.videoPlane||!this.playPlane||(this.playPlane.setAttribute("material","transparent",!0),this.playPlane.setAttribute("material","opacity",0),this.playPlane.setAttribute("animation__showcontrols_opacity",{property:"material.opacity",to:1,startEvents:"showcontrols",dur:t,easing:e}),this.playPlane.setAttribute("animation__hidecontrols_color",{property:"material.opacity",to:0,startEvents:"hidecontrols",dur:t,easing:e}),this.videoPlane.setAttribute("animation__showcontrols_color",{property:"material.color",to:"#686868",startEvents:"showcontrols",dur:t,easing:e}),this.videoPlane.setAttribute("animation__showcontrols_scale",{property:"scale",to:{x:1.025,y:1.025,z:1.025},startEvents:"showcontrols",dur:t,easing:e}),this.videoPlane.setAttribute("animation__hidecontrols_color",{property:"material.color",to:"#FFFFFF",startEvents:"hidecontrols",dur:t,easing:e}),this.videoPlane.setAttribute("animation__hidecontrols_scale",{property:"scale",to:{x:1,y:1,z:1},startEvents:"hidecontrols",dur:t,easing:e}))}},i(h,"schema",{src:{type:"string"},width:{default:16},height:{default:9},curved:{default:!1},radius:{default:2},thetaStart:{default:0}}),h);c=f([m("video")],c);AFRAME.registerPrimitive("a-playback-video",{defaultComponents:{video:{}},mappings:{src:"video.src",width:"video.width",height:"video.height",curved:"video.curved","theta-start":"video.thetaStart",radius:"video.radius"}});export{c as default};
