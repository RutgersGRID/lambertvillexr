import{i as B,a as T,j,k as q,l as F,m as z,o as c,e as f,p as S,r as l,u as i,b as t,t as E,q as k,s as L,w as O,f as N,v as U,h as P,F as $,x as Y,_ as w,y as H,c as D,z as W,A as G,B as M,C as J}from"./entry.6b64dd14.js";const K=T({props:{ui:{type:Object,default:()=>j.ui.skeleton}},setup(o){const v=q();return{ui:F(()=>z({},o.ui,v.ui.skeleton))}}});function Q(o,v,d,b,_,p){return c(),f("div",{class:S([o.ui.base,o.ui.background,o.ui.rounded])},null,2)}const X=B(K,[["render",Q]]),Z={class:"flex flex-col items-center gap-4"},ee={key:0,class:"font-bold text-white"},te={key:1,class:"px-4 w-full max-w-sm text-justify text-white"},oe=T({__name:"EnterASceneOverlay",props:{startButtonText:null,startTitle:null,startDescription:null,alwaysShowOverlay:{type:Boolean}},emits:["sceneEntered"],setup(o,{emit:v}){const d=o,b=l(!1),_=l(!0),p=l(d.startButtonText??"Start Experience");function u(h=!0){v("sceneEntered"),b.value=!0,h?setTimeout(()=>{_.value=!1},300):_.value=!1}function y(){return typeof DeviceOrientationEvent<"u"&&DeviceOrientationEvent.requestPermission}function g(){if(!y()){u();return}DeviceOrientationEvent.requestPermission().then(function(h){h==="granted"&&u()})}return!d.alwaysShowOverlay&&!y()&&u(!1),(h,x)=>{const n=U;return i(_)?(c(),f("div",{key:0,class:S(["absolute h-full w-full flex justify-center items-center bg-opacity-75 bg-black z-10 transition-opacity duration-200",{"opacity-0":i(b)}])},[t("div",Z,[o.startTitle?(c(),f("div",ee,E(o.startTitle),1)):k("",!0),o.startDescription?(c(),f("div",te,E(o.startDescription),1)):k("",!0),L(n,{icon:"i-heroicons-play",size:"xl",onClick:g},{default:O(()=>[N(E(i(p)),1)]),_:1})])],2)):k("",!0)}}}),ne={},se={id:"cursor",color:"white",rayOrigin:"mouse",raycaster:"objects: .clickable",fuseTimeout:"500",animation__click:"property: scale; startEvents: click; easing: easeInCubic; dur: 150; from: 0.1 0.1 0.1; to: 1 1 1",animation__fusing:"property: scale; startEvents: fusing; easing: easeInCubic; dur: 1500; from: 1 1 1; to: 0.1 0.1 0.1",animation__mouseleave:"property: scale; startEvents: mouseleave; easing: easeInCubic; dur: 500; to: 1 1 1"};function ae(o,v){return c(),f("a-cursor",se)}const ie=B(ne,[["render",ae]]),re=""+new URL("avocado.5b14996f.mp4",import.meta.url).href,le={class:"h-full w-full"},ue={class:"relative w-full xs:max-w-xs text-white"},ce=t("div",{class:"absolute h-full w-full bg-black opacity-75 xs:rounded-br-lg"},null,-1),de={class:"relative p-4"},me={class:"font-bold"},_e={class:"font-regular mt-2"},fe={key:0,class:"font-regular mt-2"},ve={class:"relative h-1 mt-4 flex flex-row justify-between items-center gap-2"},pe={class:"h-full flex-1 rounded-full bg-gray-400 overflow-hidden"},he=t("a-assets",null,[t("video",{id:"avocado-video",preload:"auto",width:"160",height:"90",loop:"true",src:re,crossorigin:"anonymous"})],-1),be=t("a-sun-sky",{material:"sunPosition: -0.2 4 -5"},null,-1),ye={id:"looking-around",position:"0 1.6 0"},ge={id:"clicking"},we={id:"finish"},ke={position:"0 1.6 0","look-controls":"","wasd-controls":"enabled:false"},Ee=T({__name:"AFrameTutorial",emits:["finished"],setup(o,{emit:v}){const d=localStorage.getItem("tutorialFinished")==="true";P(()=>{console.log("is cookie finished?  ",d," ",d),d&&v("finished")});async function b(){await w(()=>import("./aframe-sun-sky.fcbe487e.js"),[],import.meta.url),await w(()=>import("./tutorial.b80b4bec.js"),["./tutorial.b80b4bec.js","./aframe-master.5ce7d00f.js","./BaseSystem.4117d069.js","./test-helpers.473cda21.js"],import.meta.url)}const _=l(),p=l(),u=l(),y=l(),g=l(),h=l(),x=[{name:"Looking Around",description:'The circle at the center of your screen is your "cursor", which points to you are looking. You can look around by rotating your device around.',desktopDescription:'The circle at the center of your screen is your "cursor", which points to where you are looking. You can look around by clicking and dragging the screen.',subSegments:[{instruction:"Look at the ball above you",init:r=>{const e=_.value;if(!e)return;e.setAttribute("visible",!0);const a=()=>{e.removeEventListener("mouseenter",a),r()};e.addEventListener("mouseenter",a)}},{instruction:"Look at the ball to the left of you",init:r=>{const e=y.value;if(!e)return;e.setAttribute("visible",!0);const a=()=>{e.removeEventListener("mouseenter",a),r()};e.addEventListener("mouseenter",a)}},{instruction:"Look at the ball to the right of you",init:r=>{const e=u.value;if(!e)return;e.setAttribute("visible",!0);const a=()=>{e.removeEventListener("mouseenter",a),r()};e.addEventListener("mouseenter",a)}},{instruction:"Look at the ball below you",init:r=>{const e=p.value;if(!e)return;e.setAttribute("visible",!0);const a=()=>{e.removeEventListener("mouseenter",a),r()};e.addEventListener("mouseenter",a)}}]},{name:"Clicking",description:'To "click" on an object, move your cursor over to object, and then continue looking at the object until the cursor shrinks.',subSegments:[{instruction:'Look at the video and "click" on the play button to start playing the video',init:r=>{const e=g.value;if(!e)return;e.setAttribute("visible",!0);let a=setInterval(()=>{e.components.video.isVideoPlaying&&(r(),clearInterval(a))},1e3)}},{instruction:'Then look away and then back at the video and "click" on the pause button to pause the video.',init:r=>{const e=g.value;if(!e)return;let a=setInterval(()=>{e.components.video.isVideoPlaying||(r(),clearInterval(a),e==null||e.setAttribute("visible",!1))},1e3)}}]},{name:"Finish",description:"You're now done with the tutorial!",subSegments:[{instruction:'Please look at and "click" on the play button to exit.',init:r=>{const e=h.value;e&&(e.setAttribute("visible",!0),e.classList.add("clickable"),e.addEventListener("click",()=>{r()}))}}]}],n=l(0),m=F(()=>x[n.value]),s=l(0),A=l(!1);async function I(){for(n.value=0;n.value<x.length;){for(s.value=0;s.value<m.value.subSegments.length;){const r=m.value.subSegments[s.value];await new Promise(e=>{r.init(()=>e(void 0))}),s.value++}n.value++}localStorage.setItem("tutorialFinished","true"),console.log("setting tutorial finished to true ",d),v("finished")}function C(){A.value=!0,I()}return(r,e)=>{const a=ie,V=Le;return c(),f("div",le,[t("div",{class:S(["absolute h-full w-full z-10 opacity-0 transition-all duration-200 bg-transparent pointer-events-none",{"opacity-100":i(A)}])},[t("div",ue,[ce,t("div",de,[t("div",me,E(i(m).name),1),t("div",_e,E(i(m).description),1),i(m).subSegments[i(s)]?(c(),f("div",fe,E(i(m).subSegments[i(s)].instruction),1)):k("",!0),t("div",ve,[(c(!0),f($,null,Y(i(m).subSegments.length,R=>(c(),f("div",pe,[t("div",{class:S(["h-full w-0 bg-white transition-all duration-200",{"w-full":R<=i(s)}])},null,2)]))),256))])])])],2),L(V,{"load-systems":b,"hide-tutorial":!0,"start-button-text":"Start Tutorial","start-title":"Welcome","start-description":"This is a tutorial on how to interact with an AR experience. These experiences are audio and visual so make sure to have your volume on!","always-show-overlay":!0,onSceneEntered:C},{default:O(()=>[he,be,t("a-entity",ye,[t("a-sphere",{ref_key:"ballAbove",ref:_,position:"0 10 -5",visible:"false",class:"clickable",animation__mouseenter:"property: scale; startEvents: mouseenter; easing: easeInCubic; dur: 150; to: 0 0 0"},null,512),t("a-sphere",{ref_key:"ballLeft",ref:y,position:"10 0 -5",visible:"false",class:"clickable",animation__mouseenter:"property: scale; startEvents: mouseenter; easing: easeInCubic; dur: 150; to: 0 0 0"},null,512),t("a-sphere",{ref_key:"ballRight",ref:u,position:"-10 0 -5",visible:"false",class:"clickable",animation__mouseenter:"property: scale; startEvents: mouseenter; easing: easeInCubic; dur: 150; to: 0 0 0"},null,512),t("a-sphere",{ref_key:"ballBelow",ref:p,position:"0 -10 -5",visible:"false",class:"clickable",animation__mouseenter:"property: scale; startEvents: mouseenter; easing: easeInCubic; dur: 150; to: 0 0 0"},null,512)]),t("a-entity",ge,[t("a-playback-video",{ref_key:"video",ref:g,src:"#avocado-video",position:"0 0 -10",rotation:"0 0 0",visible:"false"},null,512)]),t("a-entity",we,[t("a-image",{ref_key:"playButton",ref:h,src:"https://res.cloudinary.com/dxbh0pppv/image/upload/c_scale,h_512,q_10/v1471016296/play_wvmogo.png",animation__mouseenter_scale:"property: scale; startEvents: mouseenter; easing: easeInCubic; dur: 200; to: 1.1 1.1 1.1",animation__mouseenter_color:"property: material.color; startEvents: mouseenter; easing: easeInCubic; dur: 200; to: #C2C2C2",animation__mouseleave_scale:"property: scale; startEvents: mouseleave; easing: easeInCubic; dur: 200; to: 1 1 1",animation__mouseleave_color:"property: material.color; startEvents: mouseleave; easing: easeInCubic; dur: 200; to: #FFFFFF",position:"0 1.6 -5",visible:"false"},null,512)]),t("a-camera",ke,[L(a)])]),_:1})])}}}),xe={class:"absolute h-full w-full flex justify-center items-center text-gray-400 dark:text-gray-500"},Se=t("div",{class:"ml-4 text-4xl font-bold"},"LOADING...",-1),Le=T({__name:"AFrameScene",props:{loadSystems:{type:Function},attributes:null,startButtonText:null,startTitle:null,startDescription:null,hideTutorial:{type:Boolean},alwaysShowOverlay:{type:Boolean}},emits:["sceneEntered"],setup(o,{emit:v}){const d=o,b=l(!1),_=l(!1),p=l(!d.hideTutorial),u=l();let y=!1,g=!1;H(u,(n,m)=>{n!=null&&n.addEventListener("loaded",()=>{if(!u.value)return;const s=u.value.querySelector("[camera]");s&&(s.getAttribute("look-controls").enabled&&(y=!0,s.setAttribute("look-controls","enabled",!1)),s.getAttribute("wasd-controls").enabled&&(g=!0,s.setAttribute("wasd-controls","enabled",!1)),n.pause(),_.value=!0)})}),P(async()=>{await w(()=>import("./aframe-master.5ce7d00f.js").then(m=>m.a),[],import.meta.url);async function n(){await w(()=>import("./video.e1b22bce.js"),["./video.e1b22bce.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./document.da769240.js"],import.meta.url),await w(()=>import("./video-controls.297de5ec.js"),["./video-controls.297de5ec.js","./document.da769240.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js"],import.meta.url),await w(()=>import("./style-video-controls.aafe2660.js"),["./style-video-controls.aafe2660.js","./aframe-master.5ce7d00f.js","./BaseSystem.4117d069.js","./system.decorator.5740a5ca.js","./test-helpers.473cda21.js","./document.da769240.js"],import.meta.url),await w(()=>import("./ball-scene.5d577ec5.js"),["./ball-scene.5d577ec5.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./BaseSystem.4117d069.js","./system.decorator.5740a5ca.js","./test-helpers.473cda21.js","./document.da769240.js"],import.meta.url),await w(()=>import("./animated-cursor.848fcc7d.js"),[],import.meta.url)}await n(),d.loadSystems&&await d.loadSystems(),b.value=!0});function h(){if(!u.value)return;const n=u.value.querySelector("[camera]");if(!n)return;y&&n.setAttribute("look-controls","enabled",!0),g&&n.setAttribute("wasd-controls","enabled",!0);const m=u.value.querySelectorAll("video");for(let s of m)s.play(),s.pause();v("sceneEntered")}function x(){console.log("Tutorial finished"),p.value=!1}return(n,m)=>{const s=X,A=M,I=oe,C=J;return c(),D(C,null,{default:O(()=>[i(p)?k("",!0):(c(),f($,{key:0},[t("div",{class:S(["absolute h-full w-full z-20 transition ease-in-out duration-1000 bg-gray-200 dark:bg-gray-900 pointer-events-none",{"opacity-0":i(_)}])},[L(s,{class:"absolute h-full w-full"}),t("div",xe,[L(A,{name:"i-heroicons-arrow-path",class:"animate-spin text-4xl"}),Se])],2),i(_)?(c(),D(I,{key:0,"start-button-text":o.startButtonText,"start-title":o.startTitle,"start-description":o.startDescription,"always-show-overlay":o.alwaysShowOverlay,onSceneEntered:h},null,8,["start-button-text","start-title","start-description","always-show-overlay"])):k("",!0),i(b)?(c(),f("a-scene",W({key:1,"device-orientation-permission-ui":"enabled: false",ref_key:"scene",ref:u},o.attributes,{embedded:"",class:"absolute w-full h-full","loading-screen":"enabled: false"}),[G(n.$slots,"default")],16)):k("",!0)],64)),i(p)?(c(),D(Ee,{key:1,class:"absolute",onFinished:x})):k("",!0)]),_:3})}}});export{Le as _,re as a,Ee as b};
