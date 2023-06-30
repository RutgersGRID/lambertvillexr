import{a as l,c as u,w as c,_ as o,o as d,e,u as t}from"./entry.2aab744f.js";import{_ as h}from"./AFrameScene.vue.fd93ed6e.js";import{u as i}from"./usePublic.cb1c4363.js";const m=["src"],p=["src"],_=["src"],b=["src"],w=["src"],y=["src"],g=["src"],P=["src"],v=["src"],f=["src"],E=e("a-sky",{src:"#pano",rotation:"11.7 0 0","three-layer":"desktopLayers: 1"},null,-1),L=e("a-music-radio",null,null,-1),k=e("a-entity",{rotation:"0 60 0"},[e("a-playback-video",{src:"#drone-video",position:"0 3.4 -6",rotation:"10 0 0"}),e("a-slide-show",{position:"0 -3 -6",rotation:"-10 0 0",height:"5.35738016136",width:"8","image-query":".slide-show",autoplay:"true","autoplay-duration":"5000"})],-1),D=e("a-entity",{rotation:"0 -10 0"},[e("a-text-box",{width:"5",height:"4.5",position:"0 1.5 -6",title:"Humble Beginnings",description:"Looking toward the river, try to imagine a small, flat-bottomed ferry carrying horses, people and goods from the eastern bank of the Delaware to the other side. From about 1732, this was Coryell’s Ferry. There was no canal — only a narrow creek tumbling to the river, a few humble dwellings and one or two commercial establishments."})],-1),T=e("a-entity",{rotation:"0 -10 0"},[e("a-text-box",{width:"5",height:"4.5",position:"0 -1.5 -6",title:"Urbanization",description:"Now, skip forward to the 1834 opening of the Delaware and Raritan Feeder Canal and see barges laden with Pennsylvania coal being pulled by mules, the cargo bound for Trenton, New York City, and beyond. The Belvedere-Delaware railroad came in 1851 and with it more people and significant opportunity. By 1872, Lambertville’s population had swelled to its peak of 4,637—600 more than present day. "})],-1),C=e("a-entity",{camera:"","look-controls":"pointerLockEnabled: true","wasd-controls":"",position:"0 1.6 0","three-layer":"layers: 1"},[e("a-animated-cursor")],-1),j=l({__name:"site-1",setup(R){const a="Delaware Canal Entrance";async function r(){await o(()=>import("./aframe-sun-sky.fcbe487e.js"),[],import.meta.url),await o(()=>import("./button.5da7f45f.js"),["./button.5da7f45f.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./aframe-troika-text.b99603ab.js","./AFrameScene.vue.fd93ed6e.js","./entry.2aab744f.js","./entry.9bcd8cd2.css","./usePublic.cb1c4363.js"],import.meta.url),await o(()=>import("./slide-show.a163883e.js"),["./slide-show.a163883e.js","./usePublic.cb1c4363.js","./entry.2aab744f.js","./entry.9bcd8cd2.css","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./AFrameScene.vue.fd93ed6e.js","./three.978d9ee7.js","./button.5da7f45f.js","./aframe-troika-text.b99603ab.js"],import.meta.url),await o(()=>import("./text-box.7f909315.js"),["./text-box.7f909315.js","./three.978d9ee7.js","./usePublic.cb1c4363.js","./entry.2aab744f.js","./entry.9bcd8cd2.css","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./AFrameScene.vue.fd93ed6e.js","./aframe-troika-text.b99603ab.js"],import.meta.url),await o(()=>import("./music-radio.fd847e5e.js"),["./music-radio.fd847e5e.js","./AFrameScene.vue.fd93ed6e.js","./entry.2aab744f.js","./entry.9bcd8cd2.css","./usePublic.cb1c4363.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js"],import.meta.url),await o(()=>import("./three-layer.d1b7907f.js"),["./three-layer.d1b7907f.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./change-detector.15c8fb51.js"],import.meta.url)}return(s,A)=>{const n=h;return d(),u(n,{"load-systems":r,"start-title":a,"start-description":"Please press the start button below while facing this site's QR code."},{default:c(()=>[e("a-assets",null,[e("img",{class:"slide-show",src:("usePublic"in s?s.usePublic:t(i))("assets/sites/site1/slide1.jpg"),title:"Delaware River",description:"The river has shaped Lambertville's history."},null,8,m),e("img",{class:"slide-show",src:("usePublic"in s?s.usePublic:t(i))("assets/sites/site1/slide2.jpg"),title:"Lambertville Station",description:"The Lambertville station was reconstructed into an hotel and inn. "},null,8,p),e("img",{class:"slide-show",src:("usePublic"in s?s.usePublic:t(i))("assets/sites/site1/slide3.jpg"),title:"ACME Building",description:"The Lambertville ACME screening room was reconstructed into the Justice Center."},null,8,_),e("img",{class:"slide-show",src:("usePublic"in s?s.usePublic:t(i))("assets/sites/site1/slide4.jpg"),title:"Hibernia Firehouse",description:"The Hibernia Firehouse has become an important historical stie at Lambertville."},null,8,b),e("img",{class:"slide-show",src:("usePublic"in s?s.usePublic:t(i))("assets/sites/site1/slide5.jpg"),title:"41 Quarry St",description:"Before and after of 41 Quarry St."},null,8,w),e("img",{id:"pano",src:("usePublic"in s?s.usePublic:t(i))("assets/sites/site1/pano.jpg")},null,8,y),e("video",{id:"drone-video",preload:"auto",loop:"true",width:"160",height:"90",src:("usePublic"in s?s.usePublic:t(i))("assets/sites/site1/drone-river.mp4"),crossorigin:"anonymous",title:"Delaware River Canal",description:"View a drone shot of the entire canal."},null,8,g),e("audio",{class:"music",src:("usePublic"in s?s.usePublic:t(i))("assets/music/end-poem-smooth.wav")},null,8,P),e("audio",{class:"music",src:("usePublic"in s?s.usePublic:t(i))("assets/music/iron-golem-vibe.wav")},null,8,v),e("audio",{class:"music",src:("usePublic"in s?s.usePublic:t(i))("assets/music/new-me.wav")},null,8,f)]),E,L,e("a-entity",{position:"0 1 0","three-layer":"layers: 1"},[k,e("a-entity",{rotation:"0 -55 0"},[e("a-text-box",{width:"3",height:"3",position:"0 0.4 -6",title:a,description:"Interact with the slides to learn about the Delaware Canal Enterence."})]),D,T]),C]),_:1})}}});export{j as default};
