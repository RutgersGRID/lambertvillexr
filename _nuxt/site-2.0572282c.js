import{a as h,r as _,c as b,w as g,_ as o,o as u,e,u as s,b as w,m as f,F as P}from"./entry.719f1272.js";import{_ as y}from"./AFrameScene.vue.01662d0f.js";import{u as i}from"./usePublic.cd24e56e.js";const v=["src"],E=["src"],A=["src"],T=["src"],L=["src"],k=["src"],O=["src"],j=["src"],D=["src"],R=["src"],I=["src"],J=["src"],V=["src"],C=["src"],S=["src"],B=["src"],H=e("a-entity",{rotation:"0 0 0"},[e("a-sky",{src:"#pano","three-layer":"layers: 31; desktopLayers: 1;",rotation:"11.7 0 0"})],-1),N=e("a-three-water",{"sun-direction":"0 -1 0","reflection-layer":"31","three-layer":"layers: 1",transparent:"true",position:"0 -1 0"},null,-1),F=e("a-music-radio",null,null,-1),M={position:"0 0 0",rotation:"0 70 0","three-layer":"layers: 1, 31"},$=e("a-entity",{position:"0 0 0",rotation:"0 -190 0"},[e("a-entity",{position:"0 0 -6.5",rotation:"0 -50 0",animation__rotation:"property: rotation; from: 0 0 0; to: 0 360 0; loop: true; dur: 30000; easing: linear"},[e("a-cylinder",{height:"0.25",color:"#27292b",transparent:"true",position:"0 -0.125 0",radius:"3"},[e("a-entity",{rotation:"0 40 0"},[e("a-box",{width:"5.9",depth:"0.2",height:"0.3",color:"#f0ad1b",position:"0 0 0.2"}),e("a-box",{width:"5.9",depth:"0.2",height:"0.3",color:"#f0ad1b",position:"0 0 -0.2"})]),e("a-cylinder",{height:"0.25",color:"#7e8185",transparent:"true",position:"0 -0.125 0",radius:"3.2"})]),e("a-entity",{position:"0.75 0 0.1"},[e("a-gltf-model",{src:"#stop-sign",scale:"0.01 0.01 0.01",rotation:"0 90 0",position:"-2.4 0 0"}),e("a-gltf-model",{src:"#person1",position:"1 0 0",scale:"0.2 0.2 0.2","material-override":"color: black"}),e("a-obj-model",{src:"#car-obj",mtl:"#car-mtl",scale:"0.6 0.6 0.6",position:"-1 0.8 0",rotation:"0 20 0"}),e("a-entity",{position:"1.3 0 0.5",rotation:"0 -20 0"},[e("a-entity",{rotation:"0 0 10"},[e("a-gltf-model",{src:"#bike",position:"-9.25 0.6 2.8",scale:"0.015 0.015 0.015","material-override":"color: black"})])])])])],-1),q={"render-order":"order: 100; depthTest: false",position:"0 -0.5 0",rotation:"0 -20 0"},Q={rotation:"0 -70 0"},W=["current-slide"],z=e("a-entity",{rotation:"0 20 0"},[e("a-three-water-level-clear-button",{position:"0 0 -5",rotation:"-20 0 0"})],-1),G=["theta-length"],K=["theta-length"],U=["rotation"],X=["water-level","title","onClick"],Y=e("a-entity",{camera:"","look-controls":"pointerLockEnabled: true","wasd-controls":"enabled:false",position:"0 1.6 0","three-layer":"layers: 1"},[e("a-animated-cursor")],-1),oe=h({__name:"site-2",setup(Z){const a="Pittore Justice Center";async function d(){await o(()=>import("./aframe-sun-sky.fcbe487e.js"),[],import.meta.url),await o(()=>import("./three-sky.e265c716.js"),["./three-sky.e265c716.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js"],import.meta.url),await o(()=>import("./three-water.4e3d6f49.js"),["./three-water.4e3d6f49.js","./usePublic.cd24e56e.js","./entry.719f1272.js","./entry.9bcd8cd2.css","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js"],import.meta.url),await o(()=>import("./three-water-controller.4f582c9b.js"),["./three-water-controller.4f582c9b.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./three.978d9ee7.js"],import.meta.url),await o(()=>import("./three-water-level-button.c9975fc9.js"),["./three-water-level-button.c9975fc9.js","./usePublic.cd24e56e.js","./entry.719f1272.js","./entry.9bcd8cd2.css","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./AFrameScene.vue.01662d0f.js","./button.e0a63425.js","./aframe-troika-text.6d8bee95.js"],import.meta.url),await o(()=>import("./three-water-level-clear-button.ca924a3f.js"),["./three-water-level-clear-button.ca924a3f.js","./usePublic.cd24e56e.js","./entry.719f1272.js","./entry.9bcd8cd2.css","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./AFrameScene.vue.01662d0f.js","./button.e0a63425.js","./aframe-troika-text.6d8bee95.js"],import.meta.url),await o(()=>import("./three-layer.d1b7907f.js"),["./three-layer.d1b7907f.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./change-detector.15c8fb51.js"],import.meta.url),await o(()=>import("./render-order.62841688.js"),["./render-order.62841688.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./change-detector.15c8fb51.js"],import.meta.url),await o(()=>import("./text-box.c6440d3b.js"),["./text-box.c6440d3b.js","./three.978d9ee7.js","./usePublic.cd24e56e.js","./entry.719f1272.js","./entry.9bcd8cd2.css","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./AFrameScene.vue.01662d0f.js","./aframe-troika-text.6d8bee95.js"],import.meta.url),await o(()=>import("./material-override.b17ead7a.js"),["./material-override.b17ead7a.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js"],import.meta.url),await o(()=>import("./music-radio.098f812d.js"),["./music-radio.098f812d.js","./AFrameScene.vue.01662d0f.js","./entry.719f1272.js","./entry.9bcd8cd2.css","./usePublic.cd24e56e.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js"],import.meta.url)}function p(t){return t-12}const r=[{date:"January 1841",crest:17.9},{date:"October 1903",crest:31.08},{date:"March 1936",crest:17.89},{date:"August 1955",crest:24.16},{date:"September 2004",crest:16.5},{date:"April 2005",crest:20},{date:"June 2006",crest:19.08}],n=_(0);return(t,x)=>{const m=y;return u(),b(m,{"load-systems":d,"start-title":a,"start-description":"Please press the start button below while facing this site's QR code."},{default:g(()=>[e("a-assets",null,[e("a-asset-item",{id:"person1",src:("usePublic"in t?t.usePublic:s(i))("assets/sites/site6/Person1.glb")},null,8,v),e("a-asset-item",{id:"car-obj",src:("usePublic"in t?t.usePublic:s(i))("assets/sites/site2/car/car.obj")},null,8,E),e("a-asset-item",{id:"car-mtl",src:("usePublic"in t?t.usePublic:s(i))("assets/sites/site2/car/car.mtl")},null,8,A),e("a-asset-item",{id:"bike",src:("usePublic"in t?t.usePublic:s(i))("assets/sites/site2/bike.glb")},null,8,T),e("img",{id:"Jan1841",class:"timeline-photo",src:("usePublic"in t?t.usePublic:s(i))("assets/sites/site2/flood-images/Jan1841.jpg"),title:"Janurary 1841",description:"The first major flood recorded. Half of the wooden Lambertville - New Hope Bridge was swept away."},null,8,L),e("img",{id:"Oct1903",class:"timeline-photo",src:("usePublic"in t?t.usePublic:s(i))("assets/sites/site2/flood-images/Oct1903.jpg"),title:"October 1903",description:"The rebuilt Lambertville - New Hope bridge was destroyed again by a new flood."},null,8,k),e("img",{id:"Mar1936",class:"timeline-photo",src:("usePublic"in t?t.usePublic:s(i))("assets/sites/site2/flood-images/Mar1936.jpg"),title:"March 1936",description:"Two successive rainstorms combined with snowmelt resulted in floods throughout New Jersey."},null,8,O),e("img",{id:"Aug1955",class:"timeline-photo",src:("usePublic"in t?t.usePublic:s(i))("assets/sites/site2/flood-images/Aug1955.jpg"),title:"August 2005",description:"Hurricances Diane and Connie brought excess rainfall and winds. The Point Pleasant bridge was destroyed and was never rebuilt again."},null,8,j),e("img",{id:"Sept2004",class:"timeline-photo",src:("usePublic"in t?t.usePublic:s(i))("assets/sites/site2/flood-images/Sept2004.jpg"),title:"September 2004",description:"The remnants of Hurricane Ivan combined with a cold front produced excess rainfall across New Jersey."},null,8,D),e("img",{id:"Apr2005",class:"timeline-photo",src:("usePublic"in t?t.usePublic:s(i))("assets/sites/site2/flood-images/Apr2005.jpg"),title:"April 2005",description:"The Delaware River flooded due to snow melt and unusually high precipitation."},null,8,R),e("img",{id:"Jun2006",class:"timeline-photo",src:("usePublic"in t?t.usePublic:s(i))("assets/sites/site2/flood-images/Jun2006.jpg"),title:"June 2006",description:"A month of above-avaerage rainfall combined with a slow moving storm created the perfect flood conditions."},null,8,I),e("img",{id:"pano",src:("usePublic"in t?t.usePublic:s(i))("assets/sites/site3/pano.jpg")},null,8,J),e("a-asset-item",{id:"stop-sign",src:("usePublic"in t?t.usePublic:s(i))("assets/sites/site2/stop_sign.glb")},null,8,V),e("audio",{class:"music",src:("usePublic"in t?t.usePublic:s(i))("assets/music/end-poem-smooth.wav")},null,8,C),e("audio",{class:"music",src:("usePublic"in t?t.usePublic:s(i))("assets/music/iron-golem-vibe.wav")},null,8,S),e("audio",{class:"music",src:("usePublic"in t?t.usePublic:s(i))("assets/music/new-me.wav")},null,8,B)]),H,N,F,e("a-entity",M,[$,e("a-entity",q,[e("a-entity",{rotation:"0 -10 0"},[e("a-text-box",{width:"3",height:"3",position:"0 2.5 -6",title:a,description:"Click on the buttons below to view water levels at the Pittore Justice center during various flooding events. A virtual model of a street is displayed on the right for reference."})]),e("a-entity",Q,[e("a-slide-show",{position:"0 5 -6","image-query":".timeline-photo","show-controls":"false","description-height":"2","current-slide":s(n)},null,8,W)]),z,e("a-cylinder",{color:"black",height:"2",radius:"5.2",transparent:"true",opacity:"0.75","theta-start":"50","theta-length":20*(r.length-1+2),"open-ended":"true",side:"double","render-order":"order: 80; depthTest: false"},null,8,G),e("a-cylinder",{color:"white",height:"0.05",radius:"5.2",transparent:"true","theta-start":"60","theta-length":20*(r.length-1),"open-ended":"true",side:"double","render-order":"order: 90; depthTest: false"},null,8,K),(u(),w(P,null,f(r,(l,c)=>e("a-entity",{rotation:`0 ${c*-20} 0`},[e("a-three-water-level-button",{"water-level":p(l.crest),unit:"feet",title:l.date,position:"0 0 -5",rotation:"-20 0 0 ",onClick:ee=>n.value=c},null,8,X)],8,U)),64))])]),Y]),_:1})}}});export{oe as default};