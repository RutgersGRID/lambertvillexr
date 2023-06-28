import{a as m,r as h,o as d,c as _,w as b,_ as o,b as e,u as i,e as g,f,F as w}from"./entry.0a825e90.js";import{_ as y}from"./AFrameScene.vue.6ee3f90f.js";import{u as s}from"./usePublic.7ce8300c.js";const P=["src"],v=["src"],E=["src"],A=["src"],T=["src"],L=["src"],k=["src"],O=["src"],j=["src"],D=["src"],I=["src"],J=["src"],R=["src"],V=e("a-entity",{rotation:"0 0 0"},[e("a-sky",{src:"#pano","three-layer":"layers: 31; desktopLayers: 1;",rotation:"11.7 0 0",position:"0 50 0"})],-1),S=e("a-three-water",{"sun-direction":"0 -1 0","reflection-layer":"31","three-layer":"layers: 1",transparent:"true",position:"0 -1 0"},null,-1),C={position:"0 0 0","three-layer":"layers: 1, 31"},B=e("a-entity",{position:"0 0 0",rotation:"0 70 0"},[e("a-entity",{position:"0 0 -6",rotation:"0 -50 0",animation__rotation:"property: rotation; from: 0 0 0; to: 0 360 0; loop: true; dur: 30000; easing: linear"},[e("a-cylinder",{height:"0.25",color:"#27292b",transparent:"true",position:"0 -0.125 0",radius:"3"},[e("a-entity",{rotation:"0 40 0"},[e("a-box",{width:"5.9",depth:"0.2",height:"0.3",color:"#f0ad1b",position:"0 0 0.2"}),e("a-box",{width:"5.9",depth:"0.2",height:"0.3",color:"#f0ad1b",position:"0 0 -0.2"})]),e("a-cylinder",{height:"0.25",color:"#7e8185",transparent:"true",position:"0 -0.125 0",radius:"3.2"})]),e("a-entity",{position:"0.75 0 0.1"},[e("a-gltf-model",{src:"#stop-sign",scale:"0.01 0.01 0.01",rotation:"0 90 0",position:"-2.4 0 0"}),e("a-gltf-model",{src:"#person1",position:"1 0 0",scale:"0.2 0.2 0.2","material-override":"color: black"}),e("a-obj-model",{src:"#car-obj",mtl:"#car-mtl",scale:"0.6 0.6 0.6",position:"-1 0.8 0",rotation:"0 20 0"}),e("a-entity",{position:"1.3 0 0.5",rotation:"0 -20 0"},[e("a-entity",{rotation:"0 0 10"},[e("a-gltf-model",{src:"#bike",position:"-9.25 0.6 2.8",scale:"0.015 0.015 0.015","material-override":"color: black"})])])])])],-1),F={"render-order":"order: 100; depthTest: false",position:"0 0.1 0",rotation:"0 -20 0"},H=e("a-entity",{rotation:"0 -10 0"},[e("a-text-box",{width:"3",height:"3",position:"0 2.5 -6",title:"Site 2",description:"Click on the buttons below to view water levels at the Pittore Justice center during various flooding events. A virtual model of a street is displayed on the left for reference."})],-1),N={rotation:"0 -70 0"},M=["current-slide"],$=e("a-entity",{rotation:"0 20 0"},[e("a-three-water-level-clear-button",{position:"0 0 -5",rotation:"-20 0 0"})],-1),q=["theta-length"],W=["theta-length"],z=["rotation"],G=["water-level","title","onClick"],K=e("a-entity",{camera:"","look-controls":"pointerLockEnabled: true","wasd-controls":"enabled:false",position:"0 1.6 0","three-layer":"layers: 1"},[e("a-animated-cursor")],-1),ee=m({__name:"site-2",setup(Q){async function c(){await o(()=>import("./aframe-sun-sky.fcbe487e.js"),[],import.meta.url),await o(()=>import("./three-sky.e265c716.js"),["./three-sky.e265c716.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js"],import.meta.url),await o(()=>import("./three-water.794cb21d.js"),["./three-water.794cb21d.js","./usePublic.7ce8300c.js","./entry.0a825e90.js","./entry.b4e24ecb.css","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js"],import.meta.url),await o(()=>import("./three-water-controller.4f582c9b.js"),["./three-water-controller.4f582c9b.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./three.978d9ee7.js"],import.meta.url),await o(()=>import("./three-water-level-button.28c872b0.js"),["./three-water-level-button.28c872b0.js","./usePublic.7ce8300c.js","./entry.0a825e90.js","./entry.b4e24ecb.css","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./document.6adaffbf.js","./button.082afb96.js","./aframe-troika-text.ee81c748.js"],import.meta.url),await o(()=>import("./three-water-level-clear-button.4fbcaa33.js"),["./three-water-level-clear-button.4fbcaa33.js","./usePublic.7ce8300c.js","./entry.0a825e90.js","./entry.b4e24ecb.css","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./document.6adaffbf.js","./button.082afb96.js","./aframe-troika-text.ee81c748.js"],import.meta.url),await o(()=>import("./three-layer.45e34a91.js"),["./three-layer.45e34a91.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./change-detector.15c8fb51.js"],import.meta.url),await o(()=>import("./render-order.62841688.js"),["./render-order.62841688.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./change-detector.15c8fb51.js"],import.meta.url),await o(()=>import("./text-box.abf16b8e.js"),["./text-box.abf16b8e.js","./three.978d9ee7.js","./usePublic.7ce8300c.js","./entry.0a825e90.js","./entry.b4e24ecb.css","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js","./document.6adaffbf.js","./aframe-troika-text.ee81c748.js"],import.meta.url),await o(()=>import("./material-override.c206be92.js"),["./material-override.c206be92.js","./component.decorator.a66a1cbe.js","./aframe-master.5ce7d00f.js","./test-helpers.473cda21.js"],import.meta.url)}function u(t){return t-12}const r=[{date:"January 1841",crest:17.9},{date:"October 1903",crest:31.08},{date:"March 1936",crest:17.89},{date:"August 1955",crest:24.16},{date:"September 2004",crest:16.5},{date:"April 2005",crest:20},{date:"June 2006",crest:19.08}],a=h(0);return(t,U)=>{const p=y;return d(),_(p,{"load-systems":c},{default:b(()=>[e("a-assets",null,[e("a-asset-item",{id:"person1",src:("usePublic"in t?t.usePublic:i(s))("assets/sites/site6/Person1.glb")},null,8,P),e("a-asset-item",{id:"car-obj",src:("usePublic"in t?t.usePublic:i(s))("assets/models/car/car.obj")},null,8,v),e("a-asset-item",{id:"car-mtl",src:("usePublic"in t?t.usePublic:i(s))("assets/models/car/car.mtl")},null,8,E),e("a-asset-item",{id:"bike",src:("usePublic"in t?t.usePublic:i(s))("assets/models/bike.glb")},null,8,A),e("img",{id:"Jan1841",class:"timeline-photo",src:("usePublic"in t?t.usePublic:i(s))("assets/sites/site2/flood-images/Jan1841.jpg"),title:"Janurary 1841",description:"The first major flood recorded. Half of the wooden Lambertville - New Hope Bridge was swept away."},null,8,T),e("img",{id:"Oct1903",class:"timeline-photo",src:("usePublic"in t?t.usePublic:i(s))("assets/sites/site2/flood-images/Oct1903.jpg"),title:"October 1903",description:"The rebuilt Lambertville - New Hope bridge was destroyed again by a new flood."},null,8,L),e("img",{id:"Mar1936",class:"timeline-photo",src:("usePublic"in t?t.usePublic:i(s))("assets/sites/site2/flood-images/Mar1936.jpg"),title:"March 1936",description:"Two successive rainstorms combined with snowmelt resulted in floods through New Jersey."},null,8,k),e("img",{id:"Aug1955",class:"timeline-photo",src:("usePublic"in t?t.usePublic:i(s))("assets/sites/site2/flood-images/Aug1955.jpg"),title:"August 2005",description:"Hurricances Diane and Connie brought excess rainfall and winds. The Point Pleasant bridge was destroyed and was never rebuilt again."},null,8,O),e("img",{id:"Sept2004",class:"timeline-photo",src:("usePublic"in t?t.usePublic:i(s))("assets/sites/site2/flood-images/Sept2004.jpg"),title:"September 2004",description:"The remnants of Hurricane Ivan combined with a cold front produced excess rainfall across New Jersey."},null,8,j),e("img",{id:"Apr2005",class:"timeline-photo",src:("usePublic"in t?t.usePublic:i(s))("assets/sites/site2/flood-images/Apr2005.jpg"),title:"April 2005",description:"The Delaware River flodded due to snow melt and unusually high precipitation."},null,8,D),e("img",{id:"Jun2006",class:"timeline-photo",src:("usePublic"in t?t.usePublic:i(s))("assets/sites/site2/flood-images/Jun2006.jpg"),title:"June 2006",description:"FLood conditions resulted from a month of above-avaerage rainfall combined with a slow moving storm."},null,8,I),e("img",{id:"pano",src:("usePublic"in t?t.usePublic:i(s))("assets/sites/site3/pano.jpg")},null,8,J),e("a-asset-item",{id:"stop-sign",src:("usePublic"in t?t.usePublic:i(s))("assets/models/stop_sign.glb")},null,8,R)]),V,S,e("a-entity",C,[B,e("a-entity",F,[H,e("a-entity",N,[e("a-slide-show",{position:"0 5 -6","image-query":".timeline-photo","show-controls":"false","description-height":"2","current-slide":i(a)},null,8,M)]),$,e("a-cylinder",{color:"black",height:"2",radius:"5.2",transparent:"true",opacity:"0.75","theta-start":"50","theta-length":20*(r.length-1+2),"open-ended":"true",side:"double","render-order":"order: 80; depthTest: false"},null,8,q),e("a-cylinder",{color:"white",height:"0.05",radius:"5.2",transparent:"true","theta-start":"60","theta-length":20*(r.length-1),"open-ended":"true",side:"double","render-order":"order: 90; depthTest: false"},null,8,W),(d(),g(w,null,f(r,(n,l)=>e("a-entity",{rotation:`0 ${l*-20} 0`},[e("a-three-water-level-button",{"water-level":u(n.crest),unit:"feet",title:n.date,position:"0 0 -5",rotation:"-20 0 0 ",onClick:X=>a.value=l},null,8,G)],8,z)),64))])]),K]),_:1})}}});export{ee as default};
