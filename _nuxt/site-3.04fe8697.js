import{a as r,o as l,c,w as u,_ as o,b as s,u as i}from"./entry.1d6c1ac7.js";import{_ as d,u as t}from"./AFrameScene.vue.2ab90e39.js";const p=["src"],h=["src"],m=["src"],b=["src"],f=["src"],_=["src"],g=["src"],P=["src"],w=["src"],y=["src"],v=["src"],A=["src"],T=["src"],B=["src"],j=["src"],E=["src"],k=["src"],I=["src"],D=["src"],L=["src"],O=["src"],R=s("a-sky",{src:"#pano",rotation:"11.7 0 0"},null,-1),V=s("a-entity",{id:"close-boat-pos",position:"-3 -2 -6",rotation:"0 180 0"},null,-1),S=s("a-entity",{rotation:"0 20 0",position:"-23 -2 -15","click-move":"toEntity: #close-boat-pos; spinOnToEntity: true"},[s("a-entity",{position:"0 0.2 0",rotation:"-5 -30 -20",scale:"0.5 0.5 0.5"},[s("a-gltf-model",{src:"#boat",position:"5.422 -1.64306 8.59925"})]),s("a-gltf-model",{src:"#debris",position:"0 -3 3",scale:"1.3 1.3 1.3"}),s("a-gltf-model",{src:"#debris",position:"0 -3 -3",scale:"1.3 1.3 1.3"}),s("a-gltf-model",{src:"#slab",scale:"0.5 0.5 0.5",position:"2.5 -1 1.5",rotation:"0 50 0"})],-1),C=s("a-entity",{rotation:"0 -90 0"},[s("a-entity",{rotation:"0 0 0"},[s("a-text-box",{width:"3",height:"3",position:"0 0 -8",title:"Site 1",description:"Interact with the videos and slides to learn about the impact of flooding on the South Union Street Bridge."})]),s("a-entity",{rotation:"0 -60 0"},[s("a-playback-video",{src:"#trash-video",position:"0 0 -8"})]),s("a-entity",{rotation:"0 -125 0"},[s("a-slide-show",{position:"0 0 -8","image-query":".slide-show",autoplay:"true"})]),s("a-entity",{rotation:"0 -180 0"},[s("a-text-box",{width:"4",height:"3",position:"0 0 -8",title:"Rising Tides",description:"During Hurricane Irene in 2011, the upstream balustrade was destroyed when, due to the rising waters in the creek, a boat crashed over the top of the bridge and landed in the street.\\n\\nA virtual recreation of the boat has been made at the crash site.\\nClick on the virtual boat to view it up close."})]),s("a-entity",{rotation:"0 -320 0"},[s("a-audio-player",{src:"#interview",position:"0 0 -8"})])],-1),q=s("a-entity",{camera:"","look-controls":"pointerLockEnabled: true","wasd-controls":"enabled:false",position:"0 1.6 0"},[s("a-animated-cursor")],-1),$=r({__name:"site-3",setup(F){async function n(){await o(()=>import("./button.082afb96.js"),["./button.082afb96.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./aframe-troika-text.ee81c748.js","./document.6adaffbf.js"],import.meta.url),await o(()=>import("./audio-player.42ed6ca0.js"),["./audio-player.42ed6ca0.js","./AFrameScene.vue.2ab90e39.js","./entry.1d6c1ac7.js","./entry.01b2065d.css","./three.978d9ee7.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./document.6adaffbf.js","./button.082afb96.js","./aframe-troika-text.ee81c748.js"],import.meta.url),await o(()=>import("./slide-show.a86e5d01.js"),["./slide-show.a86e5d01.js","./AFrameScene.vue.2ab90e39.js","./entry.1d6c1ac7.js","./entry.01b2065d.css","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./document.6adaffbf.js","./three.978d9ee7.js","./button.082afb96.js","./aframe-troika-text.ee81c748.js"],import.meta.url),await o(()=>import("./click-move.dd83d037.js"),["./click-move.dd83d037.js","./document.6adaffbf.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js"],import.meta.url),await o(()=>import("./text-box.9aedeb5f.js"),["./text-box.9aedeb5f.js","./three.978d9ee7.js","./AFrameScene.vue.2ab90e39.js","./entry.1d6c1ac7.js","./entry.01b2065d.css","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./document.6adaffbf.js","./aframe-troika-text.ee81c748.js"],import.meta.url)}return(e,H)=>{const a=d;return l(),c(a,{"load-systems":n},{default:u(()=>[s("a-assets",null,[s("video",{id:"trash-video",preload:"auto",width:"160",height:"90",loop:"true",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/trash-video.mp4"),crossorigin:"anonymous"},null,8,p),s("audio",{id:"interview",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/interview3.mp3"),title:"Interview",description:"Click here to listen to an interview with the mayor"},null,8,h),s("img",{class:"pano",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/pano.jpg")},null,8,m),s("a-asset-item",{id:"boat",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/boat.glb")},null,8,b),s("a-asset-item",{id:"debris",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/debris_concrete_junk.glb")},null,8,f),s("a-asset-item",{id:"slab",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site4/wall.glb")},null,8,_),s("img",{class:"slide-show",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/slide1.jpg"),title:"Transformation",description:"Before and After"},null,8,g),s("img",{class:"slide-show",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/slide2.jpg"),title:"Transformation",description:"Before and After"},null,8,P),s("img",{class:"slide-show",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/slide3.jpg"),title:"Transformation",description:"Before and After"},null,8,w),s("img",{class:"slide-show",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/slide4.jpg"),title:"Transformation",description:"Before and After"},null,8,y),s("img",{class:"slide-show",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/slide5.jpg"),title:"Transformation",description:"Before and After"},null,8,v),s("img",{class:"slide-show",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/slide6.jpg"),title:"Transformation",description:"Before and After"},null,8,A),s("img",{class:"slide-show",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/slide7.jpg"),title:"Transformation",description:"Before and After"},null,8,T),s("img",{class:"slide-show",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/slide8.jpg"),title:"Transformation",description:"Before and After"},null,8,B),s("img",{class:"slide-show",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/slide9.jpg"),title:"Transformation",description:"Before and After"},null,8,j),s("img",{class:"slide-show",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/slide10.jpg"),title:"Transformation",description:"Before and After"},null,8,E),s("img",{class:"slide-show",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/slide11.jpg"),title:"Transformation",description:"Before and After"},null,8,k),s("img",{class:"slide-show",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/slide12.jpg"),title:"Transformation",description:"Before and After"},null,8,I),s("img",{class:"slide-show",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/slide13.jpg"),title:"Transformation",description:"Before and After"},null,8,D),s("img",{class:"slide-show",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/slide14.jpg"),title:"Transformation",description:"Before and After"},null,8,L),s("img",{id:"pano",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/pano.jpg")},null,8,O)]),R,V,S,C,q]),_:1})}}});export{$ as default};
