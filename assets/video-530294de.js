if(typeof AFRAME>"u")throw new Error("Component attempted to register before AFRAME was available.");AFRAME.registerComponent("video",{schema:{src:{type:"string"},width:{default:16},height:{default:9},curved:{default:!1},radius:{default:2},thetaStart:{default:0}},init:function(){this.playImageSrc="https://res.cloudinary.com/dxbh0pppv/image/upload/c_scale,h_512,q_10/v1471016296/play_wvmogo.png",this.pauseImageSrc="https://res.cloudinary.com/dxbh0pppv/image/upload/c_scale,h_512,q_25/v1471016296/pause_ndega5.png",this.animDuration=200,this.animEasing="easeOutCubic",this.data.curved?(this.playPlane=document.createElement("a-curvedimage"),this.videoPlane=document.createElement("a-curvedimage")):(this.playPlane=document.createElement("a-image"),this.videoPlane=document.createElement("a-image")),this.playPlane.setAttribute("transparent",!0),this.playPlane.setAttribute("alpha-test",.5),this.el.appendChild(this.videoPlane),this.videoPlane.classList.add("clickable"),this.videoPlane.appendChild(this.playPlane),this.update(),this.updateAnimations(this.animDuration),this.videoPlane.addEventListener("mouseenter",()=>{this.isHovering=!0,this.showControls()}),this.videoPlane.addEventListener("mouseleave",()=>{this.isHovering=!1,this.hideControls(),clearTimeout(this.fadeControlsTimer)}),this.videoPlane.addEventListener("click",()=>{this.controlsVisible&&(clearTimeout(this.fadeControlsTimer),this.isPlayable()&&(this.isVideoPlaying?(this.isVideoPlaying=!1,this.videoElem.pause()):(this.isVideoPlaying=!0,this.videoElem.play(),this.fadeControlsTimer=setTimeout(()=>this.hideControls(500),1e3)),this.updatePlaybackUI()))}),this.videoElem.addEventListener("ended",()=>{this.updatePlaybackUI()})},update:function(){const e=this.data.width<this.data.height?this.data.width:this.data.height;if(this.data.curved){const i=2*Math.PI*this.data.radius;this.data.width>i&&(this.data.width=i);const a=function(l,h){return l/h*(180/Math.PI)},s=a(this.data.width,this.data.radius);this.videoPlane.setAttribute("theta-length",s),this.videoPlane.setAttribute("theta-start",this.data.thetaStart),this.videoPlane.setAttribute("radius",this.data.radius);const o=this.data.radius-.1,r=a(e,o)*.3,n=this.data.thetaStart;this.playPlane.setAttribute("theta-start",n+s/2-r/2),this.playPlane.setAttribute("radius",o),this.playPlane.setAttribute("theta-length",r)}else this.videoPlane.setAttribute("width",this.data.width),this.playPlane.setAttribute("width",e*.3),this.playPlane.object3D.position.copy(new THREE.Vector3(0,0,.1));this.playPlane.setAttribute("height",e*.3),this.videoPlane.setAttribute("height",this.data.height),this.videoPlane.setAttribute("src",this.data.src),this.videoElem=document.querySelector(this.data.src),this.isVideoPlaying=this.videoElem.currentTime>0&&!this.videoElem.paused&&!this.videoElem.ended&&this.videoElem.readyState>2,this.updatePlaybackUI()},showControls:function(t=this.animDuration){this.controlsVisible||(this.controlsVisible=!0,this.updateAnimations(t),this.videoPlane.emit("showcontrols"),this.playPlane.emit("showcontrols"))},hideControls:function(t=this.animDuration){this.controlsVisible&&(this.controlsVisible=!1,this.updateAnimations(t),this.videoPlane.emit("hidecontrols"),this.playPlane.emit("hidecontrols"))},isPlayable:function(){return this.videoElem.readyState>2},updatePlaybackUI:function(){this.playPlane.setAttribute("material","src",this.isVideoPlaying?this.pauseImageSrc:this.playImageSrc)},updateAnimations:function(t=this.animDuration,e=this.animEasing){this.playPlane.setAttribute("material","transparent",!0),this.playPlane.setAttribute("material","opacity",0),this.playPlane.setAttribute("animation__showcontrols_color",{property:"material.opacity",to:1,startEvents:"showcontrols",dur:t,easing:e}),this.playPlane.setAttribute("animation__hidecontrols_color",{property:"material.opacity",to:0,startEvents:"hidecontrols",dur:t,easing:e}),this.videoPlane.setAttribute("animation__mouseenter_color",{property:"material.color",to:"#686868",startEvents:"showcontrols",dur:t,easing:e}),this.videoPlane.setAttribute("animation__showcontrols_scale",{property:"scale",to:{x:1.025,y:1.025,z:1.025},startEvents:"showcontrols",dur:t,easing:e}),this.videoPlane.setAttribute("animation__hidecontrols_color",{property:"material.color",to:"#FFFFFF",startEvents:"hidecontrols",dur:t,easing:e}),this.videoPlane.setAttribute("animation__hidecontrols_scale",{property:"scale",to:{x:1,y:1,z:1},startEvents:"hidecontrols",dur:t,easing:e})}});AFRAME.registerPrimitive("a-playback-video",{defaultComponents:{video:{}},mappings:{src:"video.src",width:"video.width",height:"video.height",curved:"video.curved","theta-start":"video.thetaStart",radius:"video.radius"}});
