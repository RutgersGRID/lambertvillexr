import{a as u,o as n,c,w as m,_ as e,b as t,e as p,f as h,F as v}from"./entry.658b4d38.js";import{_ as b}from"./AFrameScene.vue.e84741e6.js";const w=t("a-sun-sky",{material:"sunPosition: 0 1 0"},null,-1),E=t("a-three-water",{"sun-direction":"0 -1 0","reflection-layer":"0",position:"0 -1 0",visible:"true"},null,-1),f=t("a-plane",{height:"1000",width:"1000",rotation:"-90 0 0",color:"#333",opacity:"0.5",transparent:"true",visible:"true"},null,-1),y=t("a-box",{position:"-0.5 0.5 -2",color:"red"},null,-1),L={position:"0 0 0"},P={id:"water_controls","render-order":"order: 100; depthTest: false"},T={position:"0 0.5 0",rotation:"0 20 0"},V=["visible"],A=["visible"],D=["theta-length"],I=["rotation"],O=["water-level","title"],R=t("a-entity",{camera:"","look-controls":"","wasd-controls":"enabled:false",position:"0 1.6 0"},[t("a-animated-cursor")],-1),C=u({__name:"render-order",setup(g){async function s(){await e(()=>import("./aframe-sun-sky.fcbe487e.js"),[],import.meta.url),await e(()=>import("./three-sky.e265c716.js"),["./three-sky.e265c716.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js"],import.meta.url),await e(()=>import("./three-water.77c41afd.js"),["./three-water.77c41afd.js","./AFrameScene.vue.e84741e6.js","./entry.658b4d38.js","./entry.1279f46f.css","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js"],import.meta.url),await e(()=>import("./three-water-controller.cc4e7f04.js"),["./three-water-controller.cc4e7f04.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js"],import.meta.url),await e(()=>import("./three-water-level-button.9ea0ce4f.js"),["./three-water-level-button.9ea0ce4f.js","./AFrameScene.vue.e84741e6.js","./entry.658b4d38.js","./entry.1279f46f.css","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./document.6adaffbf.js","./button.a8e44829.js"],import.meta.url),await e(()=>import("./three-layer.aba2614d.js"),["./three-layer.aba2614d.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./change-detector.c919c1d0.js"],import.meta.url),await e(()=>import("./render-order.40128cf1.js"),["./render-order.40128cf1.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./change-detector.c919c1d0.js"],import.meta.url),await e(()=>import("./overlay.1f9f323c.js"),["./overlay.1f9f323c.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js"],import.meta.url)}function l(r){return r-12}const i=[{date:"January 1841",crest:17.9}],o=!0;return(r,k)=>{const _=b;return n(),c(_,{"load-systems":s},{default:m(()=>[w,E,f,y,t("a-entity",L,[t("a-entity",P,[t("a-entity",T,[t("a-box",{position:"0 0 -2",color:"brown",overlay:"",visible:!o},null,8,V),t("a-box",{position:"0 0 -5","render-order":"order: 200; depthTest: false",color:"blue",visible:!o},null,8,A),t("a-three-water-level-button",{"water-level":-1,unit:"feet",title:"Clear",position:"0 0 -5",rotation:"-20 0 0",visible:o})]),t("a-cylinder",{color:"black",position:"0 0.5 0",height:"0.25",radius:"5.2","theta-start":"60","theta-length":20*(i.length-1),"open-ended":"true",side:"double",visible:o},null,8,D),(n(),p(v,null,h(i,(a,d)=>t("a-entity",{position:"0 0.5 0",rotation:`0 ${d*-20} 0`,visible:o},[t("a-three-water-level-button",{"water-level":l(a.crest),unit:"feet",title:a.date,position:"0 0 -5",rotation:"-20 0 0 "},null,8,O)],8,I)),64))])]),R]),_:1})}}});export{C as default};