import{a as r,r as u,o as l,c,w as _,_ as o,b as e,u as m}from"./entry.7eae881a.js";import{_ as d,u as p}from"./AFrameScene.vue.f14936a3.js";const f=e("a-sun-sky",{material:"sunPosition: -0.2 4 -5"},null,-1),b=["src"],v=e("a-entity",{camera:"","look-controls":"","wasd-controls":"",position:"0 1.6 0"},[e("a-animated-cursor")],-1),E=r({__name:"button",setup(y){async function a(){await o(()=>import("./aframe-sun-sky.fcbe487e.js"),[],import.meta.url),await o(()=>import("./button.1840a07b.js"),["./button.1840a07b.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js"],import.meta.url)}const t=u();function n(){t.value&&(t.value.addEventListener("click",()=>{console.log("Button clicked!")}),setInterval(()=>{t.value&&t.value.setAttribute("visible",!t.value.getAttribute("visible"))},2e3))}return(s,k)=>{const i=d;return l(),c(i,{"load-systems":a,onSceneEntered:n},{default:_(()=>[f,e("a-assets",null,[e("img",{id:"my-button",src:("usePublic"in s?s.usePublic:m(p))("assets/images/play.png")},null,8,b)]),e("a-button",{ref_key:"myButton",ref:t,src:"#my-button",position:"0 1.6 -10"},null,512),v]),_:1})}}});export{E as default};
