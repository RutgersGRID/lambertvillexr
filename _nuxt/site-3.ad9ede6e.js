import{a as l,c as r,w as u,_ as o,o as c,e as s,u as e}from"./entry.0fad3111.js";import{_ as d}from"./AFrameScene.vue.d27b6459.js";import{u as t}from"./usePublic.1d3889ec.js";const m=["src"],p=["src"],h=["src"],b=["src"],_=["src"],P=["src"],g=["src"],w=["src"],f=["src"],v=["src"],y=["src"],I=["src"],D=["src"],E=["src"],j=["src"],k=["src"],L=["src"],A=["src"],R=s("a-sky",{src:"#pano",rotation:"11.7 0 0"},null,-1),T=s("a-music-radio",null,null,-1),V=s("a-entity",{id:"close-boat-pos",position:"-3 -2 -6",rotation:"0 180 0"},null,-1),O=s("a-entity",{rotation:"0 20 0",position:"-23 -2 -15","click-move":"toEntity: #close-boat-pos; spinOnToEntity: true"},[s("a-entity",{position:"0 0.2 0",rotation:"-5 -30 -20",scale:"0.5 0.5 0.5"},[s("a-gltf-model",{src:"#boat",position:"5.422 -1.64306 8.59925"})]),s("a-gltf-model",{src:"#debris",position:"0 -3 3",scale:"1.3 1.3 1.3"}),s("a-gltf-model",{src:"#debris",position:"0 -3 -3",scale:"1.3 1.3 1.3"}),s("a-gltf-model",{src:"#slab",scale:"0.5 0.5 0.5",position:"2.5 -1 1.5",rotation:"0 50 0"})],-1),S=s("a-entity",{rotation:"0 -90 0",position:"0 0 0"},[s("a-entity",{rotation:"0 0 0"},[s("a-text-box",{width:"3",height:"3",position:"0 0 -8",title:"Site 3",description:"Interact with the videos and slides to learn about the impact of flooding on the South Union Street Bridge."})]),s("a-entity",{rotation:"0 -60 0"},[s("a-playback-video",{src:"#trash-video",position:"0 0 -8"})]),s("a-entity",{rotation:"0 -125 0"},[s("a-slide-show",{position:"0 0 -8","image-query":".slide-show",autoplay:"true"})]),s("a-entity",{rotation:"0 -180 0"},[s("a-text-box",{width:"4",height:"3",position:"0 0 -8",title:"Rising Tides",description:"During Hurricane Irene in 2011, the upstream balustrade was destroyed when, due to the rising waters in the creek, a boat crashed over the top of the bridge and landed in the street.\\n\\nA virtual recreation of the boat has been made at the crash site.\\nClick on the virtual boat to view it up close."})]),s("a-entity",{rotation:"0 -320 0"},[s("a-audio-player",{src:"#interview",position:"0 0 -8"})])],-1),B=s("a-entity",{camera:"","look-controls":"pointerLockEnabled: true","wasd-controls":"enabled:false",position:"0 1.6 0"},[s("a-animated-cursor")],-1),N=l({__name:"site-3",setup(H){async function a(){await o(()=>import("./button.082afb96.js"),["./button.082afb96.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./aframe-troika-text.ee81c748.js","./document.6adaffbf.js"],import.meta.url),await o(()=>import("./audio-player.874e7aaf.js"),["./audio-player.874e7aaf.js","./usePublic.1d3889ec.js","./entry.0fad3111.js","./entry.a58fde36.css","./three.978d9ee7.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./document.6adaffbf.js","./button.082afb96.js","./aframe-troika-text.ee81c748.js"],import.meta.url),await o(()=>import("./slide-show.7c61a1c6.js"),["./slide-show.7c61a1c6.js","./usePublic.1d3889ec.js","./entry.0fad3111.js","./entry.a58fde36.css","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./document.6adaffbf.js","./three.978d9ee7.js","./button.082afb96.js","./aframe-troika-text.ee81c748.js"],import.meta.url),await o(()=>import("./click-move.dd83d037.js"),["./click-move.dd83d037.js","./document.6adaffbf.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js"],import.meta.url),await o(()=>import("./text-box.ed3d4700.js"),["./text-box.ed3d4700.js","./three.978d9ee7.js","./usePublic.1d3889ec.js","./entry.0fad3111.js","./entry.a58fde36.css","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./document.6adaffbf.js","./aframe-troika-text.ee81c748.js"],import.meta.url),await o(()=>import("./music-radio.f4a26a5a.js"),["./music-radio.f4a26a5a.js","./document.6adaffbf.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js"],import.meta.url)}return(i,C)=>{const n=d;return c(),r(n,{"load-systems":a,"start-title":"Union Street Bridge","start-description":"Please press the start button below while facing this site's QR code."},{default:u(()=>[s("a-assets",null,[s("video",{id:"trash-video",preload:"auto",width:"160",height:"90",loop:"true",src:("usePublic"in i?i.usePublic:e(t))("assets/sites/site3/trash-video.mp4"),crossorigin:"anonymous",description:"View the cleanup efforts after Hurricane Ida"},null,8,m),s("audio",{id:"interview",src:("usePublic"in i?i.usePublic:e(t))("assets/sites/site3/interview3.mp3"),title:"Hurricane Ida",description:"Listen to this audio clip to hear stories from members of the Lambertville community about the impact of Hurricane Ida."},null,8,p),s("img",{class:"pano",src:("usePublic"in i?i.usePublic:e(t))("assets/sites/site3/pano.jpg")},null,8,h),s("a-asset-item",{id:"boat",src:("usePublic"in i?i.usePublic:e(t))("assets/sites/site3/boat.glb")},null,8,b),s("a-asset-item",{id:"debris",src:("usePublic"in i?i.usePublic:e(t))("assets/sites/site3/debris-concrete-junk.glb")},null,8,_),s("a-asset-item",{id:"slab",src:("usePublic"in i?i.usePublic:e(t))("assets/sites/site4/wall.glb")},null,8,P),s("img",{class:"slide-show",src:("usePublic"in i?i.usePublic:e(t))("assets/sites/site3/slide3.jpg"),description:"Post-Ida Damage"},null,8,g),s("img",{class:"slide-show",src:("usePublic"in i?i.usePublic:e(t))("assets/sites/site3/slide5.jpg"),description:"Post-Ida Damage"},null,8,w),s("img",{class:"slide-show",src:("usePublic"in i?i.usePublic:e(t))("assets/sites/site3/slide7.jpg"),description:"Post-Ida Damage"},null,8,f),s("img",{class:"slide-show",src:("usePublic"in i?i.usePublic:e(t))("assets/sites/site3/slide8.jpg"),description:"Post-Ida Damage"},null,8,v),s("img",{class:"slide-show",src:("usePublic"in i?i.usePublic:e(t))("assets/sites/site3/slide9.jpg"),description:"Post-Ida Damage"},null,8,y),s("img",{class:"slide-show",src:("usePublic"in i?i.usePublic:e(t))("assets/sites/site3/slide10.jpg"),description:"Post-Ida Damage"},null,8,I),s("img",{class:"slide-show",src:("usePublic"in i?i.usePublic:e(t))("assets/sites/site3/slide11.jpg"),description:"Post-Ida Damage"},null,8,D),s("img",{class:"slide-show",src:("usePublic"in i?i.usePublic:e(t))("assets/sites/site3/slide14.jpg"),description:"Post-Ida Damage"},null,8,E),s("img",{id:"pano",src:("usePublic"in i?i.usePublic:e(t))("assets/sites/site3/pano.jpg")},null,8,j),s("audio",{class:"music",src:("usePublic"in i?i.usePublic:e(t))("assets/music/end-poem-smooth.wav")},null,8,k),s("audio",{class:"music",src:("usePublic"in i?i.usePublic:e(t))("assets/music/iron-golem-vibe.wav")},null,8,L),s("audio",{class:"music",src:("usePublic"in i?i.usePublic:e(t))("assets/music/new-me.wav")},null,8,A)]),R,T,V,O,S,B]),_:1})}}});export{N as default};
