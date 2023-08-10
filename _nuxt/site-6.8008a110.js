import{a as l,c as u,w as d,_ as o,o as c,e as s,u as i}from"./entry.5096a9c3.js";import{_ as h}from"./AFrameScene.vue.da3794e4.js";import{u as t}from"./usePublic.8745ebfa.js";const p=["src"],m=["src"],_=["src"],P=["src"],b=["src"],g=["src"],y=["src"],w=["src"],f=["src"],v=["src"],L=["src"],E=["src"],I=["src"],k=["src"],C=["src"],A=["src"],R=["src"],T=["src"],V=s("a-sky",{src:"#pano","three-layer":"desktopLayers: 1",rotation:"11.7 90 0"},null,-1),O=s("a-music-radio",null,null,-1),j=s("a-entity",{rotation:"0 -50 0"},[s("a-entity",{"material-override":"color: black","three-layer":"layers: 1",position:"-50 0 -20"},[s("a-gltf-model",{src:"#Person1",position:"20 -12 0"}),s("a-gltf-model",{src:"#Person2",position:"14 -6 -55"}),s("a-gltf-model",{src:"#Person3",position:"34 -9 -25"}),s("a-gltf-model",{src:"#Person4",position:"-4 -8 -35"}),s("a-gltf-model",{src:"#Person5",position:"12 -5 -45"}),s("a-gltf-model",{src:"#Person6",position:"3 -7 -65"})])],-1),D=s("a-entity",{rotation:"0 -100 0"},[s("a-audio-player",{src:"#interview",position:"0 0 -6",title:"Interview","description-width":"2.2"})],-1),S=s("a-entity",{rotation:"0 40 0"},[s("a-text-box",{position:"-1 -1 -6",width:"5",height:"3",title:"Swan Creek Flooding",description:"Although not located in a designated flood zone, the homes at 2 Curley Lane and 4 Curley Lane were destroyed by the flooding of Swan Creek during Hurricane Ida and have since been removed.\\n\\nSpecific plans for this site have not yet been made, though one idea includes a naturalized park where visitors can enjoy the creek and sylvan views."}),s("a-entity",{rotation:"0 80 0"},[s("a-slide-show",{position:"0 4 -6",rotation:"10 0 0","image-query":".photo-slide-show",autoplay:"true","autoplay-duration":"5000","description-height":"3"}),s("a-slide-show",{rotation:"-10 0 0",position:"0 -2 -6","image-query":".render-slide-show",autoplay:"true","autoplay-duration":"5000","description-height":"3"})])],-1),B=s("a-entity",{camera:"","look-controls":"pointerLockEnabled: true","wasd-controls":"enabled:false",position:"0 1.6 0","three-layer":"layers: 1"},[s("a-animated-cursor")],-1),$=l({__name:"site-6",setup(F){const a="Curley Lane";async function n(){await o(()=>import("./button.a11d4a9e.js"),["./button.a11d4a9e.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./aframe-troika-text.c3ccaebd.js","./AFrameScene.vue.da3794e4.js","./entry.5096a9c3.js","./entry.9bcd8cd2.css","./usePublic.8745ebfa.js"],import.meta.url),await o(()=>import("./audio-player.499bc4c8.js"),["./audio-player.499bc4c8.js","./usePublic.8745ebfa.js","./entry.5096a9c3.js","./entry.9bcd8cd2.css","./three.978d9ee7.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./AFrameScene.vue.da3794e4.js","./button.a11d4a9e.js","./aframe-troika-text.c3ccaebd.js"],import.meta.url),await o(()=>import("./slide-show.39447885.js"),["./slide-show.39447885.js","./usePublic.8745ebfa.js","./entry.5096a9c3.js","./entry.9bcd8cd2.css","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./AFrameScene.vue.da3794e4.js","./three.978d9ee7.js","./button.a11d4a9e.js","./aframe-troika-text.c3ccaebd.js"],import.meta.url),await o(()=>import("./text-box.4bbcb8dd.js"),["./text-box.4bbcb8dd.js","./three.978d9ee7.js","./usePublic.8745ebfa.js","./entry.5096a9c3.js","./entry.9bcd8cd2.css","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./AFrameScene.vue.da3794e4.js","./aframe-troika-text.c3ccaebd.js"],import.meta.url),await o(()=>import("./material-override.b17ead7a.js"),["./material-override.b17ead7a.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js"],import.meta.url),await o(()=>import("./music-radio.414fc4b0.js"),["./music-radio.414fc4b0.js","./AFrameScene.vue.da3794e4.js","./entry.5096a9c3.js","./entry.9bcd8cd2.css","./usePublic.8745ebfa.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js"],import.meta.url),await o(()=>import("./three-layer.d1b7907f.js"),["./three-layer.d1b7907f.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./change-detector.15c8fb51.js"],import.meta.url)}return(e,H)=>{const r=h;return c(),u(r,{"load-systems":n,"start-title":a,"start-description":"If you're at the site, please press the start button while facing the site marker. Otherwise, just press the start button."},{default:d(()=>[s("a-assets",null,[s("img",{id:"pano",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site6/pano.jpg")},null,8,p),s("audio",{id:"interview",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site6/interview6.mp3"),preload:"auto",title:"Rosso Family Interview",description:"Listen to the audio clip to hear an interview with the Rosso Family."},null,8,m),s("a-asset-item",{id:"Person1",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site6/Person1.glb")},null,8,_),s("a-asset-item",{id:"Person2",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site6/Person2.glb")},null,8,P),s("a-asset-item",{id:"Person3",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site6/Person3.glb")},null,8,b),s("a-asset-item",{id:"Person4",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site6/Person4.glb")},null,8,g),s("a-asset-item",{id:"Person5",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site6/Person5.glb")},null,8,y),s("a-asset-item",{id:"Person6",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site6/Person6.glb")},null,8,w),s("img",{class:"render-slide-show",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site6/renders/slide1.png"),description:"Curley Lane site after the two houses were destroyed by flooding."},null,8,f),s("img",{class:"render-slide-show",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site6/renders/slide2.png"),description:"Curley Lane site reimagined as a naturalized park."},null,8,v),s("img",{class:"render-slide-show",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site6/renders/slide3.png"),description:"Curley Lane site reimagined with native plantings."},null,8,L),s("img",{class:"photo-slide-show",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site6/photos/slide4.jpg"),description:"A high-tide flood caused by Hurricane Ida."},null,8,E),s("img",{class:"photo-slide-show",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site6/photos/slide5.jpg"),description:"Viewing an ongoing flood from inside."},null,8,I),s("img",{class:"photo-slide-show",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site6/photos/slide7.jpg"),description:"The Rosso family bought the home in 1920 and held it for 103 years until Hurricane Ida tore it down."},null,8,k),s("img",{class:"photo-slide-show",src:("usePublic"in e?e.usePublic:i(t))("assets/sites/site6/photos/slide8.jpg"),description:"Two houses at Curley Lane collapsed after flooding caused by Hurricane Ida."},null,8,C),s("audio",{class:"music",src:("usePublic"in e?e.usePublic:i(t))("assets/music/end-poem-smooth.wav")},null,8,A),s("audio",{class:"music",src:("usePublic"in e?e.usePublic:i(t))("assets/music/iron-golem-vibe.wav")},null,8,R),s("audio",{class:"music",src:("usePublic"in e?e.usePublic:i(t))("assets/music/new-me.wav")},null,8,T)]),V,O,s("a-entity",{rotation:"0 10 0",position:"0 1 0","three-layer":"layers: 1"},[j,D,s("a-entity",{rotation:"0 40 0"},[s("a-text-box",{width:"3",height:"3",position:"0 1.5 -6",title:a,description:"Interact with the slides and audio to learn about the devastation caused by flooding at Curley Lane Blue Acres."})]),S]),B]),_:1})}}});export{$ as default};