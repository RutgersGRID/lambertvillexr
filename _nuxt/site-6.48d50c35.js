import{a as o,o as a,c as n,w as i,_ as r,b as e}from"./entry.154207d6.js";import{_ as c}from"./AFrameScene.vue.590b422f.js";const _=e("a-sun-sky",{material:"sunPosition: -0.2 4 -5"},null,-1),l=e("a-entity",{position:"0 0 0","gltf-model":"/assets/models/site6/Person1.glb"},null,-1),m=e("a-entity",{camera:"","look-controls":"","wasd-controls":"",position:"0 1.6 0"},[e("a-cursor",{id:"cursor",color:"white",rayOrigin:"mouse",raycaster:"objects: .clickable",fuseTimeout:"500",animation__click:"property: scale; startEvents: click; easing: easeInCubic; dur: 150; from: 0.1 0.1 0.1; to: 1 1 1",animation__fusing:"property: scale; startEvents: fusing; easing: easeInCubic; dur: 1500; from: 1 1 1; to: 0.1 0.1 0.1",animation__mouseleave:"property: scale; startEvents: mouseleave; easing: easeInCubic; dur: 500; to: 1 1 1"})],-1),g=o({__name:"site-6",setup(u){async function s(){await r(()=>import("./aframe-sun-sky.fcbe487e.js"),[],import.meta.url)}return(p,d)=>{const t=c;return a(),n(t,{"load-systems":s},{default:i(()=>[_,l,m]),_:1})}}});export{g as default};
