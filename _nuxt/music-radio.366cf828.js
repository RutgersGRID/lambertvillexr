var m=Object.defineProperty;var h=(r,e,i)=>e in r?m(r,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[e]=i;var u=(r,e,i)=>(h(r,typeof e!="symbol"?e+"":e,i),i);import{d as l}from"./AFrameScene.vue.fcd6be28.js";import{B as c,c as E}from"./component.decorator.a66a1cbe.js";import"./aframe-master.5ce7d00f.js";import"./test-helpers.473cda21.js";import"./entry.8534e593.js";import"./usePublic.57ccefa1.js";var f=Object.defineProperty,p=Object.getOwnPropertyDescriptor,A=(r,e,i,s)=>{for(var t=s>1?void 0:s?p(e,i):e,a=r.length-1,d;a>=0;a--)(d=r[a])&&(t=(s?d(e,i,t):d(t))||t);return s&&t&&f(e,i,t),t},n;let o=(n=class extends c{constructor(){super(...arguments);u(this,"audioElems",[]);u(this,"currAudioElemIndex",0);u(this,"currPlayingMediaElemCount",0);u(this,"initialAudioSetup",!1)}noMediaAlreadyPlaying(){return this.currPlayingMediaElemCount==0}getCurrAudioElem(){return this.audioElems[this.currAudioElemIndex]}init(){if(this.el.sceneEl){this.audioElems=Array.from(l.querySelectorAll(this.data.musicQuery));for(const e of this.audioElems)e.volume=Number(e.getAttribute("volume")??1)*this.data.volume,e.addEventListener("ended",()=>{e==this.getCurrAudioElem()&&(this.currAudioElemIndex=(this.currAudioElemIndex+1)%this.audioElems.length,this.startSong())});this.currAudioElemIndex=this.data.shuffle?Math.floor(Math.random()*this.audioElems.length):0,this.el.sceneEl.getAttribute("scene-entered")?this.onSceneEntered():this.el.sceneEl.addEventListener("scene-entered",()=>{setTimeout(()=>{this.onSceneEntered()},0)})}}update(){this.initialAudioSetup&&this.noMediaAlreadyPlaying()&&(this.data.enabled?this.getCurrAudioElem().play():this.getCurrAudioElem().pause())}onSceneEntered(){this.setupMediaElemListeners(),this.startSong(),this.initialAudioSetup=!0}setupMediaElemListeners(){const e=()=>{this.data.enabled&&this.noMediaAlreadyPlaying()&&this.getCurrAudioElem().pause(),this.currPlayingMediaElemCount++},i=()=>{this.currPlayingMediaElemCount--,this.data.enabled&&this.noMediaAlreadyPlaying()&&this.getCurrAudioElem().play()},s=[...l.querySelectorAll("audio"),...l.querySelectorAll("video")];for(const t of s)this.audioElems.includes(t)||t.getAttribute("muted")||(t.addEventListener("play",()=>e()),t.addEventListener("pause",()=>i()),t.addEventListener("ended",()=>i()))}startSong(){this.getCurrAudioElem().currentTime=0,this.getCurrAudioElem().play()}},u(n,"schema",{musicQuery:{default:".music"},shuffle:{default:!0},volume:{default:.5},enabled:{default:!0}}),n);o=A([E("music-radio")],o);AFRAME.registerPrimitive("a-music-radio",{defaultComponents:{"music-radio":{}},mappings:{"music-query":"music-radio.musicQuery",shuffle:"music-radio.shuffle"}});export{o as MusicRadioComponent};
