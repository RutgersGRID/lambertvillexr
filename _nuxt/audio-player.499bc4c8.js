var C=Object.defineProperty;var E=(e,t,i)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var a=(e,t,i)=>(E(e,typeof t!="symbol"?t+"":t,i),i);import{u as d}from"./usePublic.8745ebfa.js";import{c as v,s as y}from"./three.978d9ee7.js";import{B as P,c as w}from"./component.decorator.a66a1cbe.js";import"./aframe-master.5ce7d00f.js";import"./test-helpers.473cda21.js";import{d as l}from"./AFrameScene.vue.da3794e4.js";import"./button.a11d4a9e.js";import"./aframe-troika-text.c3ccaebd.js";import"./entry.5096a9c3.js";const u=AFRAME.THREE;function k(){const e=new u.ShaderMaterial({uniforms:{backgroundColor:{value:new u.Color(0)},color:{value:new u.Color(16777215)},fill:{value:0},offset:{value:0},clockwise:{value:!0}},vertexShader:`
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, position.y, position.z, 1.0);
  }
  `,fragmentShader:`
  #define PI 3.1415926535897932384626433832795

  uniform vec3 color;
  uniform vec3 backgroundColor;
  uniform float fill;
  uniform float offset;
  uniform bool clockwise;

  varying vec2 vUv;

  void main() {
    vec2 vUvCentered = vUv - vec2(0.5);
    float angle = atan(vUvCentered.y, vUvCentered.x);
    if (angle < 0.0)
      angle = PI * 2.0 + angle;
    if (clockwise)
      angle = angle * -1.0;
    float radOffset = offset * PI / 180.0;
    float anglePct = mod((angle + radOffset) / (PI * 2.0), 1.0);
    gl_FragColor = mix(vec4(backgroundColor, 1.0), vec4(color, 1.0), 1.0 - step(fill, anglePct));
  }`});return e.needsUpdate=!0,e}var M=Object.defineProperty,z=Object.getOwnPropertyDescriptor,B=(e,t,i,r)=>{for(var s=r>1?void 0:r?z(t,i):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(s=(r?n(t,i,s):n(s))||s);return r&&s&&M(t,i,s),s};const h=AFRAME.THREE,g=.2,p=g*1.2,c=.2,F=.2,R=.2,D=.2;var b;let A=(b=class extends P{constructor(){super(...arguments);a(this,"backgroundCircle");a(this,"backgroundPlane");a(this,"audioElem");a(this,"playButton");a(this,"radialFillMat");a(this,"titleText");a(this,"descriptionText");a(this,"playImageSrc",d("assets/images/play.png"));a(this,"pauseImageSrc",d("assets/images/pause.png"))}init(){this.backgroundPlane=l.createEntity("a-plane"),v(this.backgroundPlane),y(this.backgroundPlane.object3D,-20),this.backgroundCircle=l.createEntity("a-circle"),v(this.backgroundCircle),y(this.backgroundCircle.object3D,-20),this.playButton=l.createEntity("a-button"),this.playButton.addEventListener("click",()=>{var t,i;this.isAudioPlaying()?(t=this.audioElem)==null||t.pause():(i=this.audioElem)==null||i.play(),this.updatePlayButton()}),this.titleText=l.createEntity("a-troika-text"),this.titleText.setAttribute("font-size",g),this.titleText.setAttribute("align","center"),this.titleText.setAttribute("baseline","top"),this.titleText.setAttribute("font",d("assets/fonts/Raleway/Raleway-Bold.ttf")),this.descriptionText=l.createEntity("a-troika-text"),this.descriptionText.setAttribute("font-size",g),this.descriptionText.setAttribute("align","center"),this.descriptionText.setAttribute("baseline","top"),this.descriptionText.setAttribute("font",d("assets/fonts/Raleway/Raleway-Regular.ttf")),this.radialFillMat=k(),this.radialFillMat.uniforms.offset.value=90,this.radialFillMat.uniforms.fill.value=.5,this.radialFillMat.uniforms.backgroundColor.value=new h.Color("#bdbdbd"),this.radialFillMat.side=2,this.el.appendChild(this.backgroundCircle),this.el.appendChild(this.backgroundPlane),this.el.appendChild(this.playButton),this.el.appendChild(this.titleText),this.el.appendChild(this.descriptionText)}update(){if(!this.titleText||!this.descriptionText||!this.backgroundPlane||!this.playButton||!this.backgroundCircle)return;this.audioElem=l.querySelector(this.data.src),this.audioElem.addEventListener("ended",()=>{this.updatePlayButton()});const t=this.audioElem.getAttribute("title")??"",i=this.audioElem.getAttribute("description")??"",r=this.data.showDescription&&(t!=""||i!=""),s=t!=""&&i=="",o=r?F+this.data.descriptionWidth:0,n=t!=""?D+R:0,x=this.data.size-n;this.playButton.setAttribute("height",this.data.size*.8),this.playButton.setAttribute("width",this.data.size*.8),this.playButton.setAttribute("position",{x:-o/2,z:.1});const f=this.el.getObject3D("CircleMesh");f&&f.geometry.dispose();const T=new h.CircleGeometry(this.data.size/2,16*this.data.size),m=new h.Mesh(T,this.radialFillMat);this.el.setObject3D("CircleMesh",m),m.position.set(-o/2,0,0),this.backgroundCircle.setAttribute("radius",this.data.size/2+c),this.backgroundCircle.setAttribute("position",{x:-o/2}),this.backgroundCircle.setAttribute("theta-start",r?90:0),this.backgroundCircle.setAttribute("theta-length",r?180:360),this.backgroundPlane.setAttribute("width",this.data.size/2+2*c+o),this.backgroundPlane.setAttribute("height",this.data.size+2*c),this.backgroundPlane.setAttribute("position",{x:(this.data.size/2+2*c)/2}),this.backgroundPlane.setAttribute("visible",r),this.descriptionText.setAttribute("position",{x:o/2,y:this.data.size/2-n}),this.descriptionText.setAttribute("clip-rect",`${-this.data.descriptionWidth} ${-x} ${this.data.descriptionWidth} 0`),this.titleText.setAttribute("value",t),this.titleText.setAttribute("visible",this.data.showDescription),this.titleText.setAttribute("position",{x:o/2,y:s?0:this.data.size/2}),this.titleText.setAttribute("baseline",s?"center":"top"),this.titleText.setAttribute("clip-rect",s?`${-this.data.descriptionWidth/2} ${-p/2} ${this.data.descriptionWidth/2} ${p/2}`:`${-this.data.descriptionWidth/2} ${-p} ${this.data.descriptionWidth/2} 0`),this.descriptionText.setAttribute("value",i),this.descriptionText.setAttribute("visible",this.data.showDescription),this.descriptionText.setAttribute("max-width",this.data.descriptionWidth),this.updatePlayButton(),this.updateRadialFill()}tick(){this.updateRadialFill()}updateRadialFill(){!this.radialFillMat||!this.audioElem||(this.radialFillMat.uniforms.fill.value=this.audioElem.currentTime/this.audioElem.duration)}updatePlayButton(){!this.playButton||!this.audioElem||(this.isAudioPlaying()?this.playButton.setAttribute("src",this.pauseImageSrc):this.playButton.setAttribute("src",this.playImageSrc))}isAudioPlaying(){var t;return!((t=this.audioElem)!=null&&t.paused)}},a(b,"schema",{src:{type:"string"},size:{default:2},showDescription:{default:!0},descriptionWidth:{default:2}}),b);A=B([w("audio-player")],A);AFRAME.registerPrimitive("a-audio-player",{defaultComponents:{"audio-player":{}},mappings:{src:"audio-player.src",size:"audio-player.size","show-description":"audio-player.showDescription","description-width":"audio-player.descriptionWidth"}});export{A as default};