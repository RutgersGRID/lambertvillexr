import{a as n,c as r,w as d,_ as l,o as c,e as o,u as i}from"./entry.1725ce2a.js";import{_ as u}from"./AFrameScene.vue.5e15e913.js";import{u as e}from"./usePublic.acb7e390.js";const p=o("a-sun-sky",{material:"sunPosition: -0.2 4 -5"},null,-1),_=["src"],h=["src"],m=["src"],v=o("a-playback-video",{src:"#drone-video",position:"0 0 -20",rotation:"0 0 0"},null,-1),b=o("a-playback-video",{src:"#drone-video2",position:"20 3 -20",rotation:"0 -35 0",width:"32"},null,-1),y=o("a-playback-video",{src:"#trash-video",position:"0 1.6 -5",rotation:"0 180 0"},null,-1),f=o("a-entity",{camera:"","look-controls":"pointerLockEnabled: true","wasd-controls":"",position:"0 1.6 0"},[o("a-animated-cursor")],-1),B=n({__name:"video-player",setup(P){async function t(){await l(()=>import("./aframe-sun-sky.fcbe487e.js"),[],import.meta.url)}return(s,T)=>{const a=u;return c(),r(a,{"load-systems":t},{default:d(()=>[p,o("a-assets",null,[o("video",{id:"drone-video",preload:"auto",loop:"true",width:"160",height:"90",src:("usePublic"in s?s.usePublic:i(e))("assets/videos/lambertville-drone.mp4"),crossorigin:"anonymous",title:"This is a Title"},null,8,_),o("video",{id:"drone-video2",preload:"auto",loop:"true",width:"160",height:"90",src:("usePublic"in s?s.usePublic:i(e))("assets/videos/lambertville-drone.mp4"),crossorigin:"anonymous",title:"This is a Title",description:"This is a description. This is a description. This is a description. This is a description. This is a description."},null,8,h),o("video",{id:"trash-video",preload:"auto",loop:"true",width:"160",height:"90",src:("usePublic"in s?s.usePublic:i(e))("assets/videos/trash-video.mp4"),crossorigin:"anonymous"},null,8,m)]),v,b,y,f]),_:1})}}});export{B as default};
