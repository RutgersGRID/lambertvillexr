import{a as r,r as u,c as l,w as c,_ as s,o as _,e,u as m}from"./entry.d6b0e47d.js";import{_ as d}from"./AFrameScene.vue.05743ee6.js";import{u as p}from"./usePublic.e5ae9476.js";const f=e("a-sun-sky",{material:"sunPosition: -0.2 4 -5"},null,-1),b=["src"],v=e("a-entity",{camera:"","look-controls":"pointerLockEnabled: true","wasd-controls":"",position:"0 1.6 0"},[e("a-animated-cursor")],-1),g=r({__name:"button",setup(y){async function n(){await s(()=>import("./aframe-sun-sky.fcbe487e.js"),[],import.meta.url),await s(()=>import("./button.6151723b.js"),["./button.6151723b.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./aframe-troika-text.eb8bd335.js","./AFrameScene.vue.05743ee6.js","./entry.d6b0e47d.js","./entry.9bcd8cd2.css","./usePublic.e5ae9476.js"],import.meta.url)}const t=u();function a(){t.value&&(t.value.addEventListener("click",()=>{console.log("Button clicked!")}),setInterval(()=>{t.value&&t.value.setAttribute("visible",!t.value.getAttribute("visible"))},2e3))}return(o,k)=>{const i=d;return _(),l(i,{"load-systems":n,onSceneEntered:a},{default:c(()=>[f,e("a-assets",null,[e("img",{id:"my-button",src:("usePublic"in o?o.usePublic:m(p))("assets/images/play.png")},null,8,b)]),e("a-button",{ref_key:"myButton",ref:t,src:"#my-button",position:"0 1.6 -10"},null,512),v]),_:1})}}});export{g as default};
