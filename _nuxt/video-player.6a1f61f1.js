import{a as n,o as r,c as d,w as c,_ as l,b as o,u as i}from"./entry.578c79a9.js";import{_ as u,u as e}from"./AFrameScene.vue.b791f70d.js";const p=o("a-sun-sky",{material:"sunPosition: -0.2 4 -5"},null,-1),_=["src"],h=["src"],v=["src"],m=o("a-playback-video",{src:"#avocado-video",position:"0 0 -20",rotation:"0 0 0"},null,-1),y=o("a-playback-video",{src:"#avocado-video2",position:"20 3 -20",rotation:"0 -35 0",width:"32"},null,-1),b=o("a-playback-video",{src:"#trash-video",position:"0 1.6 -5",rotation:"0 180 0"},null,-1),P=o("a-entity",{camera:"","look-controls":"","wasd-controls":"",position:"0 1.6 0"},[o("a-animated-cursor")],-1),g=n({__name:"video-player",setup(T){async function a(){await l(()=>import("./aframe-sun-sky.fcbe487e.js"),[],import.meta.url)}return(s,f)=>{const t=u;return r(),d(t,{"load-systems":a},{default:c(()=>[p,o("a-assets",null,[o("video",{id:"avocado-video",preload:"auto",width:"160",height:"90",loop:"true",src:("usePublic"in s?s.usePublic:i(e))("assets/videos/avocado.mp4"),crossorigin:"anonymous",title:"This is a Title"},null,8,_),o("video",{id:"avocado-video2",preload:"auto",width:"160",height:"90",loop:"true",src:("usePublic"in s?s.usePublic:i(e))("assets/videos/avocado.mp4"),crossorigin:"anonymous",title:"This is a Title",description:"This is a description. This is a description. This is a description. This is a description. This is a description."},null,8,h),o("video",{id:"trash-video",preload:"auto",width:"160",height:"90",loop:"true",src:("usePublic"in s?s.usePublic:i(e))("assets/videos/trash-video.mp4"),crossorigin:"anonymous"},null,8,v)]),m,y,b,P]),_:1})}}});export{g as default};
