var x=Object.defineProperty;var k=(h,e,s)=>e in h?x(h,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):h[e]=s;var a=(h,e,s)=>(k(h,typeof e!="symbol"?e+"":e,s),s);import{d as l}from"./AFrameScene.vue.d8c68b94.js";import{B as C,c as M}from"./component.decorator.a66a1cbe.js";import"./aframe-master.5ce7d00f.js";import"./test-helpers.473cda21.js";import"./entry.cd59512f.js";var S=Object.defineProperty,D=Object.getOwnPropertyDescriptor,F=(h,e,s,i)=>{for(var t=i>1?void 0:i?D(e,s):e,n=h.length-1,r;n>=0;n--)(r=h[n])&&(t=(i?r(e,s,t):r(t))||t);return i&&t&&S(e,s,t),t};const m=AFRAME.THREE,j="Double-click outside player to hide or show it.",O="Look+click on play or bar. Space bar and arrows also work.";var f;let T=(f=class extends C{constructor(){super(...arguments);a(this,"last_time",0);a(this,"current_step",0);a(this,"bar_steps",0);a(this,"video_el");a(this,"play_image_src","");a(this,"pause_image_src","");a(this,"play_image");a(this,"bar_canvas");a(this,"context");a(this,"texture");a(this,"bar");a(this,"endedListener");a(this,"pauseListener");a(this,"playingListener")}position_time_from_steps(){if(this.video_el){var e=this.current_step/this.bar_steps;this.video_el.readyState>0&&(this.video_el.currentTime=e*this.video_el.duration)}}position_control_from_camera(){if(this.el.sceneEl){var e=this.el.sceneEl.camera;if(e){var s=e.el.getAttribute("rotation"),i=s.y;this.el.components.position.data.x=1,this.el.components.position.data.y=-this.data.distance*Math.sin(i*Math.PI/180),this.el.components.position.data.z=-this.data.distance*Math.cos(i*Math.PI/180),this.el.setAttribute("position",[this.el.components.position.data.x,this.el.components.position.data.y,this.el.components.position.data.z].join(" "));let t=new m.Vector3;e.getWorldPosition(t),this.el.object3D.lookAt(t)}}}init(){var s;this.bar_steps=10,this.current_step=0,this.el.setAttribute("visible",!0),this.play_image_src=l.getElementById("video-play-image")?"#video-play-image":"https://res.cloudinary.com/dxbh0pppv/image/upload/c_scale,h_512,q_10/v1471016296/play_wvmogo.png",this.pause_image_src=l.getElementById("video-pause-image")?"#video-pause-image":"https://res.cloudinary.com/dxbh0pppv/image/upload/c_scale,h_512,q_25/v1471016296/pause_ndega5.png",this.play_image=l.createElement("a-image"),this.play_image.classList.add("clickable"),this.bar_canvas=l.createElement("canvas"),this.bar_canvas.setAttribute("id","video_player_canvas"),this.bar_canvas.width=1024,this.bar_canvas.height=256,this.bar_canvas.style.display="none";let e=this.bar_canvas.getContext("2d");if(!e)throw new Error("Expected canvas context to not be null");this.context=e,this.texture=new m.Texture(this.bar_canvas),this.play_image.addEventListener("click",i=>{!this.video_el||!this.play_image||(this.video_el.paused?(this.play_image.setAttribute("src",this.pause_image_src),this.video_el.play()):(this.play_image.setAttribute("src",this.play_image_src),this.video_el.pause()),i.stopPropagation(),i.preventDefault())}),window.addEventListener("keyup",i=>{var t;switch(i.key){case" ":(t=this.play_image)==null||t.dispatchEvent(new Event("click"));break;case"ArrowLeft":this.current_step=0,this.position_time_from_steps();break;case"ArrowRight":this.current_step=this.bar_steps,this.position_time_from_steps();break;case"ArrowUp":this.current_step=this.current_step<this.bar_steps?this.current_step+1:this.current_step,this.position_time_from_steps();break;case"ArrowDown":this.current_step=this.current_step>0?this.current_step-1:this.current_step,this.position_time_from_steps();break}},!1),this.bar=l.createElement("a-plane"),this.bar.addEventListener("click",i=>{if(!(!this.bar||!this.video_el)){var t=l.querySelector("a-cursor").components.raycaster.raycaster.intersectObject(this.bar.object3D,!0)[0].point,n=this.bar.object3D.worldToLocal(t).x,r=n/this.data.size+.5;this.current_step=Math.round(r*this.bar_steps),this.video_el.readyState>0&&(this.video_el.currentTime=r*this.video_el.duration),i.stopPropagation(),i.preventDefault()}}),this.el.appendChild(this.bar_canvas),this.el.appendChild(this.play_image),this.el.appendChild(this.bar),(s=this.el.sceneEl)==null||s.addEventListener("loaded",()=>{var i;this.position_control_from_camera(),(i=this.el.sceneEl)==null||i.addEventListener("dblclick",()=>{var t=l.querySelector("a-cursor").components.raycaster.raycaster;t.intersectObject(this.el.object3D,!0).length==0&&(this.el.getAttribute("visible")?this.el.setAttribute("visible",!1):(this.el.setAttribute("visible",!0),this.position_control_from_camera()))})})}update(){var s,i,t,n,r,d,_,c;const e=this.data.src;this.video_el=l.querySelector(e),this.video_el.paused?(s=this.play_image)==null||s.setAttribute("src",this.play_image_src):(i=this.play_image)==null||i.setAttribute("src",this.pause_image_src),this.video_el&&this.endedListener&&this.video_el.removeEventListener("ended",this.endedListener),this.endedListener=()=>{var o;(o=this.video_el)==null||o.setAttribute("src",this.play_image_src)},this.video_el.addEventListener("ended",this.endedListener),this.video_el&&this.pauseListener&&this.video_el.removeEventListener("pause",this.pauseListener),this.pauseListener=()=>{var o;(o=this.play_image)==null||o.setAttribute("src",this.play_image_src)},this.video_el.addEventListener("pause",this.pauseListener),this.video_el&&this.playingListener&&this.video_el.removeEventListener("playing",this.playingListener),this.playingListener=()=>{var o;(o=this.play_image)==null||o.setAttribute("src",this.pause_image_src)},this.video_el.addEventListener("playing",this.playingListener),this.position_control_from_camera(),this.el.setAttribute("visible",!0),(t=this.bar)==null||t.setAttribute("height",this.data.size/4),(n=this.bar)==null||n.setAttribute("width",this.data.size),(r=this.bar)==null||r.setAttribute("position","0.0 0.0 0"),(d=this.play_image)==null||d.setAttribute("height",this.data.size/4),(_=this.play_image)==null||_.setAttribute("width",this.data.size/4),(c=this.play_image)==null||c.setAttribute("position",-this.data.size/2*1.4+" 0 0")}tick(e){if(!(!this.video_el||!this.bar_canvas)&&(typeof this.last_time>"u"||e-this.last_time>250)){if(this.video_el.readyState>0){const o=Math.floor(this.video_el.currentTime/60),p=Math.floor(this.video_el.currentTime%60),A=o<10?"0"+o:o,w=p<10?"0"+p:p,u=Math.floor(this.video_el.duration/60),v=Math.floor(this.video_el.duration%60),E=u<10?"0"+u:u,L=v<10?"0"+v:v;var s=A+":"+w+" / "+E+":"+L,i=this.bar_canvas.width/this.video_el.duration;if(this.video_el.buffered.length>0){this.current_step=Math.round(this.video_el.currentTime/this.video_el.duration*this.bar_steps);var t=this.context;if(!t)return;if(t.fillStyle=this.data.backgroundColor,t.fillRect(0,0,this.bar_canvas.width,this.bar_canvas.height),t.font=this.data.timeTextFont,t.fillStyle="white",t.textAlign="center",t.fillText(s,this.bar_canvas.width/2,this.bar_canvas.height*.65),this.video_el.seeking)t.font=this.data.statusTextFont,t.fillStyle=this.data.textColor,t.textAlign="end",t.fillText("Seeking",this.bar_canvas.width*.95,this.bar_canvas.height*.6);else{var n=this.video_el.buffered.end(this.video_el.buffered.length-1)/this.video_el.duration*100;t.font=this.data.statusTextFont,t.fillStyle=this.data.textColor,t.textAlign="end",t.fillText(n.toFixed(0)+"% loaded",this.bar_canvas.width*.95,this.bar_canvas.height*.6)}t.fillStyle=this.data.textColor,t.font=this.data.infoTextFont,t.textAlign="center",t.fillText(this.data.infoTextTop,this.bar_canvas.width/2,this.bar_canvas.height*.8),t.fillText(this.data.infoTextBottom,this.bar_canvas.width/2,this.bar_canvas.height*.95);for(var r=0;r<this.video_el.buffered.length;r++){var d=this.video_el.buffered.start(r)*i,_=this.video_el.buffered.end(r)*i,c=_-d;t.fillStyle="grey",t.fillRect(d,0,c,this.bar_canvas.height/3)}t.fillStyle=this.data.barColor,t.fillRect(0,0,this.video_el.currentTime/this.video_el.duration*this.bar_canvas.width,this.bar_canvas.height/3)}if(this.bar&&this.bar.object3D.children.length>0){const g=this.bar.object3D.children[0],b=g.material;if((b==null?void 0:b.map)==null){const y=new m.MeshBasicMaterial;y.map=this.texture??null,g.material=y}this.texture&&(this.texture.needsUpdate=!0)}}this.last_time=e}}},a(f,"schema",{src:{type:"string"},size:{type:"number",default:1},distance:{type:"number",default:2},backgroundColor:{default:"black"},barColor:{default:"red"},textColor:{default:"yellow"},infoTextBottom:{default:j},infoTextTop:{default:O},infoTextFont:{default:"35px Helvetica Neue"},statusTextFont:{default:"30px Helvetica Neue"},timeTextFont:{default:"70px Helvetica Neue"}}),f);T=F([M("video-controls")],T);export{T as VideoControlsComponent};
