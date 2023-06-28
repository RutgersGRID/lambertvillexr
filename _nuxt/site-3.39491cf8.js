import{a as l,c as u,w as c,_ as o,o as d,e as s,u as i}from"./entry.d6b0e47d.js";import{_ as m}from"./AFrameScene.vue.05743ee6.js";import{u as t}from"./usePublic.e5ae9476.js";const p=["src"],h=["src"],b=["src"],_=["src"],P=["src"],g=["src"],w=["src"],y=["src"],v=["src"],f=["src"],I=["src"],E=["src"],D=["src"],j=["src"],k=["src"],L=["src"],A=["src"],R=["src"],T=s("a-sky",{src:"#pano",rotation:"11.7 0 0","three-layer":"desktopLayers: 1"},null,-1),V=s("a-music-radio",null,null,-1),O=s("a-entity",{"three-layer":"layers: 1"},[s("a-entity",{id:"close-boat-pos",position:"-3 -2 -6",rotation:"0 180 0"}),s("a-entity",{rotation:"0 20 0",position:"-23 -2 -15","click-move":"toEntity: #close-boat-pos; spinOnToEntity: true"},[s("a-entity",{position:"0 0.2 0",rotation:"-5 -30 -20",scale:"0.5 0.5 0.5"},[s("a-gltf-model",{src:"#boat",position:"5.422 -1.64306 8.59925"})]),s("a-gltf-model",{src:"#debris",position:"0 -3 3",scale:"1.3 1.3 1.3"}),s("a-gltf-model",{src:"#debris",position:"0 -3 -3",scale:"1.3 1.3 1.3"}),s("a-gltf-model",{src:"#slab",scale:"0.5 0.5 0.5",position:"2.5 -1 1.5",rotation:"0 50 0"})]),s("a-entity",{rotation:"0 -90 0",position:"0 0 0"},[s("a-entity",{rotation:"0 0 0"},[s("a-text-box",{width:"3",height:"3",position:"0 0 -8",title:"Site 3",description:"Interact with the videos and slides to learn about the impact of flooding on the South Union Street Bridge."})]),s("a-entity",{rotation:"0 -60 0"},[s("a-playback-video",{src:"#trash-video",position:"0 0 -8"})]),s("a-entity",{rotation:"0 -125 0"},[s("a-slide-show",{position:"0 0 -8","image-query":".slide-show",autoplay:"true"})]),s("a-entity",{rotation:"0 -180 0"},[s("a-text-box",{width:"4",height:"3",position:"0 0 -8",title:"Rising Tides",description:"During Hurricane Irene in 2011, the upstream balustrade was destroyed when, due to the rising waters in the creek, a boat crashed over the top of the bridge and landed in the street.\\n\\nA virtual recreation of the boat has been made at the crash site.\\nClick on the virtual boat to view it up close."})]),s("a-entity",{rotation:"0 -320 0"},[s("a-audio-player",{src:"#interview",position:"0 0 -8"})])]),s("a-entity",{camera:"","look-controls":"pointerLockEnabled: true","wasd-controls":"enabled:false",position:"0 1.6 0","three-layer":"layers: 1"},[s("a-animated-cursor")])],-1),q=l({__name:"site-3",setup(S){const a="Union Street Bridge";async function r(){await o(()=>import("./button.6151723b.js"),["./button.6151723b.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./aframe-troika-text.eb8bd335.js","./AFrameScene.vue.05743ee6.js","./entry.d6b0e47d.js","./entry.9bcd8cd2.css","./usePublic.e5ae9476.js"],import.meta.url),await o(()=>import("./audio-player.0afcca5c.js"),["./audio-player.0afcca5c.js","./usePublic.e5ae9476.js","./entry.d6b0e47d.js","./entry.9bcd8cd2.css","./three.978d9ee7.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./AFrameScene.vue.05743ee6.js","./button.6151723b.js","./aframe-troika-text.eb8bd335.js"],import.meta.url),await o(()=>import("./slide-show.7dbe1d8b.js"),["./slide-show.7dbe1d8b.js","./usePublic.e5ae9476.js","./entry.d6b0e47d.js","./entry.9bcd8cd2.css","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./AFrameScene.vue.05743ee6.js","./three.978d9ee7.js","./button.6151723b.js","./aframe-troika-text.eb8bd335.js"],import.meta.url),await o(()=>import("./click-move.25005be0.js"),["./click-move.25005be0.js","./AFrameScene.vue.05743ee6.js","./entry.d6b0e47d.js","./entry.9bcd8cd2.css","./usePublic.e5ae9476.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js"],import.meta.url),await o(()=>import("./text-box.190a4f96.js"),["./text-box.190a4f96.js","./three.978d9ee7.js","./usePublic.e5ae9476.js","./entry.d6b0e47d.js","./entry.9bcd8cd2.css","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./AFrameScene.vue.05743ee6.js","./aframe-troika-text.eb8bd335.js"],import.meta.url),await o(()=>import("./music-radio.dd35d257.js"),["./music-radio.dd35d257.js","./AFrameScene.vue.05743ee6.js","./entry.d6b0e47d.js","./entry.9bcd8cd2.css","./usePublic.e5ae9476.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js"],import.meta.url),await o(()=>import("./three-layer.d1b7907f.js"),["./three-layer.d1b7907f.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./change-detector.15c8fb51.js"],import.meta.url)}return(e,B)=>{const n=m;return d(),u(n,{"load-systems":r,"start-title":a,"start-description":"Please press the start button below while facing this site's QR code."},{default:c(()=>[s("a-assets",null,[s("video",{id:"trash-video",preload:"auto",width:"160",height:"90",loop:"true",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/trash-video.mp4"),crossorigin:"anonymous",description:"View the cleanup efforts after Hurricane Ida"},null,8,p),s("audio",{id:"interview",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/interview3.mp3"),title:"Hurricane Ida",description:"Listen to this audio clip to hear stories from members of the Lambertville community about the impact of Hurricane Ida."},null,8,h),s("img",{class:"pano",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/pano.jpg")},null,8,b),s("a-asset-item",{id:"boat",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/boat.glb")},null,8,_),s("a-asset-item",{id:"debris",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/debris-concrete-junk.glb")},null,8,P),s("a-asset-item",{id:"slab",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site4/wall.glb")},null,8,g),s("img",{class:"slide-show",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/slide3.jpg"),description:"Post-Ida Damage"},null,8,w),s("img",{class:"slide-show",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/slide5.jpg"),description:"Post-Ida Damage"},null,8,y),s("img",{class:"slide-show",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/slide7.jpg"),description:"Post-Ida Damage"},null,8,v),s("img",{class:"slide-show",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/slide8.jpg"),description:"Post-Ida Damage"},null,8,f),s("img",{class:"slide-show",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/slide9.jpg"),description:"Post-Ida Damage"},null,8,I),s("img",{class:"slide-show",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/slide10.jpg"),description:"Post-Ida Damage"},null,8,E),s("img",{class:"slide-show",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/slide11.jpg"),description:"Post-Ida Damage"},null,8,D),s("img",{class:"slide-show",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/slide14.jpg"),description:"Post-Ida Damage"},null,8,j),s("img",{id:"pano",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site3/pano.jpg")},null,8,k),s("audio",{class:"music",src:("usePublic"in e?e.usePublic:i(t))("assets/music/end-poem-smooth.wav")},null,8,L),s("audio",{class:"music",src:("usePublic"in e?e.usePublic:i(t))("assets/music/iron-golem-vibe.wav")},null,8,A),s("audio",{class:"music",src:("usePublic"in e?e.usePublic:i(t))("assets/music/new-me.wav")},null,8,R)]),T,V,O]),_:1})}}});export{q as default};
