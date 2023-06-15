var c=Object.defineProperty;var f=(e,t,i)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var l=(e,t,i)=>(f(e,typeof t!="symbol"?t+"":t,i),i);import{u as n}from"./AFrameScene.vue.9aaf4d6e.js";import{B as v,c as y}from"./component.decorator.a66a1cbe.js";import"./aframe-master.5ce7d00f.js";import"./test-helpers.473cda21.js";import{d as u}from"./document.6000800d.js";import"./entry.b92c2b2a.js";const d=AFRAME.THREE;function E(){const e=new d.ShaderMaterial({uniforms:{backgroundColor:{value:new d.Color(0)},color:{value:new d.Color(16777215)},fill:{value:0},offset:{value:0},clockwise:{value:!0}},vertexShader:`
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
  }`});return e.needsUpdate=!0,e}var g=Object.defineProperty,b=Object.getOwnPropertyDescriptor,P=(e,t,i,s)=>{for(var a=s>1?void 0:s?b(t,i):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(a=(s?r(t,i,a):r(a))||a);return s&&a&&g(t,i,a),a};const h=AFRAME.THREE;var m;let p=(m=class extends v{constructor(){super(...arguments);l(this,"audioElem");l(this,"playButton");l(this,"radialFillMat");l(this,"titleElem");l(this,"playImageSrc",n("assets/images/play.png"));l(this,"pauseImageSrc",n("assets/images/pause.png"))}init(){var s,a;this.playButton=u.createEntity("a-button"),this.playButton.setAttribute("height",this.data.size),this.playButton.setAttribute("width",this.data.size),this.playButton.addEventListener("click",()=>{var o,r;this.isAudioPlaying()?(o=this.audioElem)==null||o.pause():(r=this.audioElem)==null||r.play(),this.updatePlayButton()}),this.titleElem=u.createEntity("a-text"),this.titleElem.setAttribute("position",{x:0,y:-(this.data.size/2+1),z:0}),this.titleElem.setAttribute("wrap-count",16),this.titleElem.setAttribute("align","center"),this.titleElem.setAttribute("font",n("assets/fonts/Raleway/Raleway-Bold.json")),this.titleElem.setAttribute("shader","msdf");const t=new h.CircleGeometry(this.data.size/2*1.25,16*this.data.size);this.radialFillMat=E(),this.radialFillMat.uniforms.offset.value=90,this.radialFillMat.uniforms.fill.value=.5,this.radialFillMat.uniforms.backgroundColor.value=new h.Color("#bdbdbd"),this.radialFillMat.side=2;const i=new h.Mesh(t,this.radialFillMat);(s=this.audioElem)==null||s.currentTime,(a=this.audioElem)==null||a.duration,this.el.setObject3D("CircleMesh",i),i.position.set(0,0,-.1),this.el.appendChild(this.playButton),this.el.appendChild(this.titleElem)}update(){this.titleElem&&(this.titleElem.setAttribute("value",this.data.title),this.audioElem=u.querySelector(this.data.src),this.audioElem.addEventListener("ended",()=>{this.updatePlayButton()}),this.el,this.updatePlayButton(),this.updateRadialFill())}tick(){this.updateRadialFill()}updateRadialFill(){!this.radialFillMat||!this.audioElem||(this.radialFillMat.uniforms.fill.value=this.audioElem.currentTime/this.audioElem.duration)}updatePlayButton(){!this.playButton||!this.audioElem||(this.isAudioPlaying()?this.playButton.setAttribute("src",this.pauseImageSrc):this.playButton.setAttribute("src",this.playImageSrc))}isAudioPlaying(){var t;return!((t=this.audioElem)!=null&&t.paused)}},l(m,"schema",{src:{type:"string"},size:{default:2},title:{default:""}}),m);p=P([y("audio-player")],p);AFRAME.registerPrimitive("a-audio-player",{defaultComponents:{"audio-player":{}},mappings:{src:"audio-player.src",size:"audio-player.size",title:"audio-player.title"}});export{p as default};
