import{a as r,o as i,c as n,w as l,_ as o,b as e,u as c}from"./entry.0a825e90.js";import{_}from"./AFrameScene.vue.6ee3f90f.js";import{u as m}from"./usePublic.7ce8300c.js";const u=e("a-sun-sky",{material:"sunPosition: 0 1 0"},null,-1),d=["src"],p=e("a-gltf-model",{src:"#person",position:"-2 0 -5",scale:"0.3 0.3 0.3"},null,-1),f=e("a-gltf-model",{src:"#person",position:"2 0 -5","material-override":"color: black",scale:"0.3 0.3 0.3"},null,-1),b=e("a-entity",{camera:"","look-controls":"pointerLockEnabled: true","wasd-controls":"enabled:false",position:"0 1.6 0"},[e("a-animated-cursor")],-1),y=r({__name:"material-override",setup(P){async function t(){await o(()=>import("./aframe-sun-sky.fcbe487e.js"),[],import.meta.url),await o(()=>import("./material-override.c206be92.js"),["./material-override.c206be92.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js"],import.meta.url)}return(s,h)=>{const a=_;return i(),n(a,{"load-systems":t},{default:l(()=>[u,e("a-assets",null,[e("a-asset-item",{id:"person",src:("usePublic"in s?s.usePublic:c(m))("assets/sites/site6/Person1.glb")},null,8,d)]),p,f,b]),_:1})}}});export{y as default};
