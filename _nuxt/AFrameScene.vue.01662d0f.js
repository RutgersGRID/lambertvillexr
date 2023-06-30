import{q as X,a as z,t as Z,v as ee,x as Y,y as te,o as m,b as y,l as P,r as s,u as l,e as o,z as C,p as E,h as B,w as M,f as G,A as H,k as W,F as J,m as oe,_ as T,B as ae,C as ne,c as F,D as se,E as ie,j as re,G as le}from"./entry.719f1272.js";import{u as U}from"./usePublic.cd24e56e.js";const ue=z({props:{ui:{type:Object,default:()=>Z.ui.skeleton}},setup(t){const a=ee();return{ui:Y(()=>te({},t.ui,a.ui.skeleton))}}});function ce(t,a,c,k,A,S){return m(),y("div",{class:P([t.ui.base,t.ui.background,t.ui.rounded])},null,2)}const de=X(ue,[["render",ce]]),me={class:"flex flex-col items-center gap-4"},ve={key:0,class:"font-bold text-white"},fe={key:1,class:"px-4 w-full max-w-sm text-justify text-white"},pe=z({__name:"EnterASceneOverlay",props:{startButtonText:null,startTitle:null,startDescription:null,alwaysShowOverlay:{type:Boolean}},emits:["sceneEntered"],setup(t,{emit:a}){const c=t,k=s(!1),A=s(!0),S=s(c.startButtonText??"Start Experience");function _(b=!0){a("sceneEntered",b),k.value=!0,b?setTimeout(()=>{A.value=!1},300):A.value=!1}function d(){return typeof DeviceOrientationEvent<"u"&&DeviceOrientationEvent.requestPermission}function u(){if(!d()){_();return}DeviceOrientationEvent.requestPermission().then(function(b){b==="granted"&&_()})}return!c.alwaysShowOverlay&&!d()&&_(!1),(b,D)=>{const p=H;return l(A)?(m(),y("div",{key:0,class:P(["absolute h-full w-full flex justify-center items-center bg-opacity-75 bg-black transition-opacity duration-200",{"opacity-0":l(k)}])},[o("div",me,[t.startTitle?(m(),y("div",ve,C(t.startTitle),1)):E("",!0),t.startDescription?(m(),y("div",fe,C(t.startDescription),1)):E("",!0),B(p,{icon:"i-heroicons-play",size:"xl",onClick:u},{default:M(()=>[G(C(l(S)),1)]),_:1})])],2)):E("",!0)}}});function be(){var t=function(){let a=!1;return function(c){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(c)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(c.substr(0,4)))&&(a=!0)}(navigator.userAgent||navigator.vendor||window.opera),a};return{isMobile:t()}}const he={class:"h-full w-full"},ye=["src"],_e=["src"],ge=o("a-sun-sky",{material:"sunPosition: -0.2 4 -5"},null,-1),we={id:"looking-around",position:"0 1.6 0"},ke={position:"0 0.2 -8"},Ae={id:"clicking"},xe={id:"finish"},Ee=o("a-camera",{position:"0 1.6 0","look-controls":"pointerLockEnabled: true","wasd-controls":"enabled:false"},[o("a-animated-cursor")],-1),Se={class:"relative w-full xs:max-w-xs text-white"},Le=o("div",{class:"absolute h-full w-full bg-black opacity-75 xs:rounded-br-lg"},null,-1),Te={class:"relative p-4"},Ce={class:"font-bold"},De={class:"font-regular mt-2"},Ie={key:0,class:"font-regular mt-2"},Oe={class:"relative h-1 mt-4 flex flex-row justify-between items-center gap-2"},je={class:"h-full flex-1 rounded-full bg-gray-400 overflow-hidden"},Be=z({__name:"AFrameTutorial",props:{forceTutorial:{type:Boolean}},emits:["finished"],setup(t,{emit:a}){const c=t;let k=!1;c.forceTutorial?k=!1:k=localStorage.getItem("tutorialFinished")==="true";const{isMobile:A}=be();W(()=>{k&&a("finished")});async function S(){await T(()=>import("./aframe-sun-sky.fcbe487e.js"),[],import.meta.url)}const _=s(),d=s(),u=s(),b=s(),D=s(),p=s(),L=s(),g=s(),I=s(),q=s(),$=[{name:"Looking Around",description:'The circle at the center of your screen is your "cursor", which points to where you are looking. You can look around by rotating your device around.',desktopDescription:'The circle at the center of your screen is your "cursor", which points to where you are looking. You can look around by moving your your mouse.',subSegments:[{instruction:"Look at the ball above you",init:n=>{const e=_.value,r=L.value;if(!e||!r)return;e.setAttribute("visible",!0),e.classList.add("clickable"),r.setAttribute("visible",!0);const f=()=>{e.removeEventListener("mouseenter",f),r.setAttribute("visible",!1),n()};e.addEventListener("mouseenter",f)}},{instruction:"Look at the ball to the left of you",init:n=>{const e=b.value,r=p.value;if(!e||!r)return;e.setAttribute("visible",!0),e.classList.add("clickable"),r.setAttribute("visible",!0);const f=()=>{e.removeEventListener("mouseenter",f),r.setAttribute("visible",!1),n()};e.addEventListener("mouseenter",f)}},{instruction:"Look at the ball to the right of you",init:n=>{const e=u.value,r=D.value;if(!e||!r)return;e.setAttribute("visible",!0),e.classList.add("clickable"),r.setAttribute("visible",!0);const f=()=>{e.removeEventListener("mouseenter",f),r.setAttribute("visible",!1),n()};e.addEventListener("mouseenter",f)}},{instruction:"Look at the ball below you",init:n=>{const e=d.value,r=g.value;if(!e||!r)return;e.setAttribute("visible",!0),e.classList.add("clickable"),r.setAttribute("visible",!0);const f=()=>{e.removeEventListener("mouseenter",f),r.setAttribute("visible",!1),n()};e.addEventListener("mouseenter",f)}}]},{name:"Clicking",description:'To "click" on an object, move your cursor over to object, and then continue looking at the object until the cursor shrinks.',desktopDescription:'To "click" on an object, move your cursor over to object, and then left click your mouse.',subSegments:[{instruction:'Look at the video and "click" on the play button to start playing the video',init:n=>{const e=I.value;if(!e)return;e.setAttribute("visible",!0);let r=setInterval(()=>{e.components.video.isVideoPlaying&&(n(),clearInterval(r))},1e3)}},{instruction:'Then look away and then back at the video and "click" on the pause button to pause the video.',init:n=>{const e=I.value;if(!e)return;let r=setInterval(()=>{e.components.video.isVideoPlaying||(n(),clearInterval(r),e==null||e.setAttribute("visible",!1))},1e3)}}]},{name:"Finish",description:"You're now done with the tutorial!",subSegments:[{instruction:'Please look at and "click" on the play button to exit.',init:n=>{const e=q.value;e&&(e.setAttribute("visible",!0),e.classList.add("clickable"),e.addEventListener("click",()=>{n()}))}}]}],O=s(0),x=Y(()=>$[O.value]),i=s(0),v=s(!1);async function h(){for(O.value=0;O.value<$.length;){for(i.value=0;i.value<x.value.subSegments.length;){const n=x.value.subSegments[i.value];await new Promise(e=>{n.init(()=>e(void 0))}),i.value++}O.value++}localStorage.setItem("tutorialFinished","true"),a("finished")}function j(){v.value=!0,h()}function w(n){return n?n.desktopDescription&&!A?n.desktopDescription:n.description:""}return(n,e)=>{var f,V,R,N;const r=Ge;return m(),y("div",he,[B(r,{"load-systems":S,"hide-tutorial":!0,"start-button-text":"Start Tutorial","start-title":"Welcome","start-description":"This is a tutorial on how to interact with an AR experience. These experiences are audio and visual so make sure to have your volume on!","always-show-overlay":!0,"disable-ar-mode":!0,onSceneEntered:j},{default:M(()=>[o("a-assets",null,[o("video",{id:"avocado-video",preload:"auto",width:"160",height:"90",loop:"true",src:("usePublic"in n?n.usePublic:l(U))("assets/videos/lambertville-drone.mp4"),crossorigin:"anonymous"},null,8,ye),o("a-asset-item",{id:"arrow",src:("usePublic"in n?n.usePublic:l(U))("assets/models/arrow.glb")},null,8,_e)]),ge,o("a-entity",we,[o("a-entity",ke,[o("a-gltf-model",{ref_key:"leftArrow",ref:p,src:"#arrow",position:"-2 0 0",rotation:"0 90 90",visible:"false"},null,512),o("a-gltf-model",{ref_key:"rightArrow",ref:D,src:"#arrow",position:"2 0 0",rotation:"0 -90 90",visible:"false"},null,512),o("a-gltf-model",{ref_key:"upArrow",ref:L,src:"#arrow",position:"0 2 0",rotation:"90 90 90",visible:"false"},null,512),o("a-gltf-model",{ref_key:"downArrow",ref:g,src:"#arrow",position:"0 -2 0",rotation:"-90 90 90",visible:"false"},null,512)]),o("a-entity",null,[o("a-sphere",{ref_key:"ballAbove",ref:_,radius:"2",position:"0 10 -5",visible:"false",animation__mouseenter:"property: scale; startEvents: mouseenter; easing: easeInCubic; dur: 150; to: 0 0 0"},null,512),o("a-sphere",{ref_key:"ballLeft",ref:b,radius:"2",position:"-10 0 -5",visible:"false",animation__mouseenter:"property: scale; startEvents: mouseenter; easing: easeInCubic; dur: 150; to: 0 0 0"},null,512),o("a-sphere",{ref_key:"ballRight",ref:u,radius:"2",position:"10 0 -5",visible:"false",animation__mouseenter:"property: scale; startEvents: mouseenter; easing: easeInCubic; dur: 150; to: 0 0 0"},null,512),o("a-sphere",{ref_key:"ballBelow",ref:d,radius:"2",position:"0 -10 -5",visible:"false",animation__mouseenter:"property: scale; startEvents: mouseenter; easing: easeInCubic; dur: 150; to: 0 0 0"},null,512)])]),o("a-entity",Ae,[o("a-playback-video",{ref_key:"video",ref:I,src:"#avocado-video",position:"0 0 -8",rotation:"0 0 0",visible:"false"},null,512)]),o("a-entity",xe,[o("a-image",{ref_key:"playButton",ref:q,src:"https://res.cloudinary.com/dxbh0pppv/image/upload/c_scale,h_512,q_10/v1471016296/play_wvmogo.png",animation__mouseenter_scale:"property: scale; startEvents: mouseenter; easing: easeInCubic; dur: 200; to: 1.1 1.1 1.1",animation__mouseenter_color:"property: material.color; startEvents: mouseenter; easing: easeInCubic; dur: 200; to: #C2C2C2",animation__mouseleave_scale:"property: scale; startEvents: mouseleave; easing: easeInCubic; dur: 200; to: 1 1 1",animation__mouseleave_color:"property: material.color; startEvents: mouseleave; easing: easeInCubic; dur: 200; to: #FFFFFF",position:"0 1.6 -5",visible:"false"},null,512)]),Ee]),_:1}),o("div",{class:P(["absolute h-full w-full opacity-0 transition-all duration-200 bg-transparent pointer-events-none",{"opacity-100":l(v)}])},[o("div",Se,[Le,o("div",Te,[o("div",Ce,C((f=l(x))==null?void 0:f.name),1),o("div",De,C(w(l(x))),1),(V=l(x))!=null&&V.subSegments[l(i)]?(m(),y("div",Ie,C((R=l(x))==null?void 0:R.subSegments[l(i)].instruction),1)):E("",!0),o("div",Oe,[(m(!0),y(J,null,oe((N=l(x))==null?void 0:N.subSegments.length,Q=>(m(),y("div",je,[o("div",{class:P(["h-full w-0 bg-white transition-all duration-200",{"w-full":Q<=l(i)}])},null,2)]))),256))])])])],2)])}}});function Pe(t,a=document){return a instanceof Document,a.querySelector(t)}function qe(t,a=document){return Array.from(a.querySelectorAll(t))}function $e(t){return document.createElement(t)}function Fe(t){return document.createElement(t)}function K(t){for(var a=document.getElementsByTagName("script"),c=a.length;c--;)if(a[c].src==t)return!0;return!1}function Me(t){if(K(t))return!1;const a=document.createElement("script");return a.src=t,a.type="text/javascript",document.head.appendChild(a),!0}function ze(t){const a=document.querySelector("a-scene");if(a)return a.systems[t]}const Ve={querySelector:Pe,querySelectorAll:qe,createElement:$e,createEntity:Fe,isScriptLoaded:K,addScript:Me,getSystem:ze},Re={class:"absolute h-full w-full flex justify-center items-center text-gray-400 dark:text-gray-500"},Ne=o("div",{class:"ml-4 text-4xl font-bold"},"LOADING...",-1),Ue={class:"absolute h-full w-full"},Ye={key:1,class:"absolute bottom-4 right-4 lg:bottom-8 lg:right-8 flex flex-row gap-4"},Ge=z({__name:"AFrameScene",props:{loadSystems:null,attributes:null,startButtonText:null,startTitle:null,startDescription:null,hideTutorial:{type:Boolean},alwaysShowOverlay:{type:Boolean,default:!0},disableArMode:{type:Boolean,default:!1},arMode:{type:Boolean,default:void 0}},emits:["sceneEntered"],setup(t,{emit:a}){const c=t,k=ae(),A=s(!1),S=s(!1),_=s(!c.hideTutorial),d=s(),u=s();let b=!1,D=!1;const p=s(c.arMode);p.value===void 0&&(c.disableArMode?p.value=!1:p.value=k.query.ar=="true");const L=s(),g=s();function I(){if(!(!d.value||!u.value)){if(p.value)navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"}}}).then(i=>{!d.value||!u.value||(d.value.srcObject=i,u.value.setAttribute("manual-ar-mode",!0),u.value.emit("enter-manual-vr"))}).catch(i=>{console.log("Could not enter AR mode: ",i)});else if(d.value.srcObject instanceof MediaStream){for(const i of d.value.srcObject.getTracks())i.stop();u.value.removeAttribute("manual-ar-mode"),u.value.emit("exit-manual-vr"),d.value.srcObject=null}}}ne(u,(i,v)=>{i!=null&&i.addEventListener("loaded",()=>{if(!u.value)return;const h=u.value.querySelector("[camera]");h&&(h.getAttribute("look-controls").enabled&&(b=!0,h.setAttribute("look-controls","enabled",!1)),h.getAttribute("wasd-controls").enabled&&(D=!0,h.setAttribute("wasd-controls","enabled",!1)),i.pause(),I(),S.value=!0)})}),W(async()=>{await T(()=>import("./aframe-master.5ce7d00f.js").then(v=>v.a),[],import.meta.url);async function i(){await T(()=>import("./animated-cursor.aaba85a4.js"),["./animated-cursor.aaba85a4.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./render-order.62841688.js","./change-detector.15c8fb51.js","./three.978d9ee7.js"],import.meta.url),await T(()=>import("./video.c85f897a.js"),["./video.c85f897a.js","./usePublic.cd24e56e.js","./entry.719f1272.js","./entry.9bcd8cd2.css","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./three.978d9ee7.js","./aframe-troika-text.6d8bee95.js"],import.meta.url),await T(()=>import("./button.e0a63425.js"),["./button.e0a63425.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./aframe-troika-text.6d8bee95.js","./entry.719f1272.js","./entry.9bcd8cd2.css","./usePublic.cd24e56e.js"],import.meta.url),await T(()=>import("./audio-player.25f35e31.js"),["./audio-player.25f35e31.js","./usePublic.cd24e56e.js","./entry.719f1272.js","./entry.9bcd8cd2.css","./three.978d9ee7.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./button.e0a63425.js","./aframe-troika-text.6d8bee95.js"],import.meta.url),await T(()=>import("./slide-show.14ffca26.js"),["./slide-show.14ffca26.js","./usePublic.cd24e56e.js","./entry.719f1272.js","./entry.9bcd8cd2.css","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./three.978d9ee7.js","./button.e0a63425.js","./aframe-troika-text.6d8bee95.js"],import.meta.url)}await i(),c.loadSystems&&await c.loadSystems(),A.value=!0,g.value=localStorage.getItem("music-enabled")=="true"});function q(i){if(!u.value||!d.value)return;const v=u.value.querySelector("[camera]");if(!v)return;b&&v.setAttribute("look-controls","enabled",!0),D&&v.setAttribute("wasd-controls","enabled",!0);const h=u.value.querySelectorAll("video"),j=u.value.querySelectorAll("audio");if(i){for(const w of h)w.play(),w.pause();for(const w of j)w.play(),w.pause();d.value.play()}L.value=Ve.querySelector("[music-radio],a-music-radio"),L.value&&L.value.setAttribute("music-radio","enabled",g.value),a("sceneEntered"),u.value.setAttribute("scene-entered",!0),u.value.emit("scene-entered")}function $(){_.value=!1}function O(){p.value=!p.value,I()}function x(){L.value&&(g.value=!g.value,L.value.setAttribute("music-radio","enabled",g.value),localStorage.setItem("music-enabled",g.value?"true":"false"))}return(i,v)=>{const h=de,j=re,w=H,n=pe,e=le;return m(),F(e,null,{default:M(()=>[l(_)?E("",!0):(m(),y(J,{key:0},[o("div",{class:P(["absolute h-full w-full z-20 transition ease-in-out duration-1000 bg-gray-200 dark:bg-gray-900 pointer-events-none",{"opacity-0":l(S)}])},[B(h,{class:"absolute h-full w-full"}),o("div",Re,[B(j,{name:"i-heroicons-arrow-path",class:"animate-spin text-4xl"}),Ne])],2),o("div",Ue,[o("video",{autoplay:"true",playsinline:"",ref_key:"webcamVideo",ref:d,class:"h-full w-full object-cover",muted:""},null,512)]),l(A)?(m(),y("a-scene",se({key:0,"device-orientation-permission-ui":"enabled: false",ref_key:"scene",ref:u},t.attributes,{embedded:"",renderer:"sortObjects: true;",class:"absolute w-full h-full","loading-screen":"enabled: false","vr-mode-ui":"enabled: false"}),[ie(i.$slots,"default")],16)):E("",!0),t.disableArMode?E("",!0):(m(),y("div",Ye,[(m(),F(w,{key:0,icon:l(g)?"i-heroicons-musical-note":"i-heroicons-speaker-x-mark",size:"xl",onClick:v[0]||(v[0]=r=>x())},null,8,["icon"])),B(w,{icon:l(p)?"i-heroicons-arrow-left-on-rectangle":"i-heroicons-play",size:"xl",onClick:v[1]||(v[1]=r=>O())},{default:M(()=>[G(C(l(p)?"Exit AR":"Enter AR"),1)]),_:1},8,["icon"])])),l(S)?(m(),F(n,{key:2,"start-button-text":t.startButtonText,"start-title":t.startTitle,"start-description":t.startDescription,"always-show-overlay":t.alwaysShowOverlay,onSceneEntered:q},null,8,["start-button-text","start-title","start-description","always-show-overlay"])):E("",!0)],64)),l(_)?(m(),F(Be,{key:1,class:"absolute",onFinished:$})):E("",!0)]),_:3})}}});export{Ge as _,Be as a,Fe as c,Ve as d,Pe as q};
