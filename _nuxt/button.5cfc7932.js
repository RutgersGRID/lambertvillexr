import{a as r,r as u,c as l,w as c,_ as s,o as _,b as e,u as m}from"./entry.081dbd2b.js";import{_ as d}from"./AFrameScene.vue.434c0dbe.js";import{u as p}from"./usePublic.ec954924.js";const f=e("a-sun-sky",{material:"sunPosition: -0.2 4 -5"},null,-1),b=["src"],v=e("a-entity",{camera:"","look-controls":"pointerLockEnabled: true","wasd-controls":"",position:"0 1.6 0"},[e("a-animated-cursor")],-1),g=r({__name:"button",setup(y){async function n(){await s(()=>import("./aframe-sun-sky.fcbe487e.js"),[],import.meta.url),await s(()=>import("./button.082afb96.js"),["./button.082afb96.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./aframe-troika-text.ee81c748.js","./document.6adaffbf.js"],import.meta.url)}const t=u();function a(){t.value&&(t.value.addEventListener("click",()=>{console.log("Button clicked!")}),setInterval(()=>{t.value&&t.value.setAttribute("visible",!t.value.getAttribute("visible"))},2e3))}return(o,k)=>{const i=d;return _(),l(i,{"load-systems":n,onSceneEntered:a},{default:c(()=>[f,e("a-assets",null,[e("img",{id:"my-button",src:("usePublic"in o?o.usePublic:m(p))("assets/images/play.png")},null,8,b)]),e("a-button",{ref_key:"myButton",ref:t,src:"#my-button",position:"0 1.6 -10"},null,512),v]),_:1})}}});export{g as default};
