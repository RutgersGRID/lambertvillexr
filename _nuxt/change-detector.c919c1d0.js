var l=Object.defineProperty;var c=(a,e,t)=>e in a?l(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var n=(a,e,t)=>(c(a,typeof e!="symbol"?e+"":e,t),t);import{c as f,B as m}from"./component.decorator.a66a1cbe.js";import"./aframe-master.5ce7d00f.js";import"./test-helpers.473cda21.js";var v=Object.defineProperty,u=Object.getOwnPropertyDescriptor,g=(a,e,t,s)=>{for(var i=s>1?void 0:s?u(e,t):e,d=a.length-1,h;d>=0;d--)(h=a[d])&&(i=(s?h(e,t,i):h(i))||i);return s&&i&&v(e,t,i),i},r;let o=(r=class extends m{constructor(){super(...arguments);n(this,"isArMode",!1);n(this,"mutationObserver")}init(){var e,t;this.data.enterVr&&((e=this.el.sceneEl)==null||e.addEventListener("enter-vr",()=>{var s;(s=this.el.sceneEl)!=null&&s.is("ar-mode")&&(this.isArMode=!0,this.emitChanged())})),this.data.exitVr&&((t=this.el.sceneEl)==null||t.addEventListener("exit-vr",()=>{this.isArMode=!1,this.emitChanged()})),this.mutationObserver=new MutationObserver((s,i)=>{s.forEach(d=>{d.type=="childList"&&(this.tryTrackEntity(d.target),this.data.elemTreeChanged&&this.emitChanged())})}),this.tryTrackEntity(this.el),this.mutationObserver.observe(this.el,{childList:!0,subtree:this.data.recursive}),this.el.addEventListener("child-detached",()=>{this.emitChanged()})}tryTrackEntity(e){e.hasAttribute("change-detector-tracked")||(e.setAttribute("change-detector-tracked",!0),e.hasLoaded||e.addEventListener("loaded",()=>this.emitChanged()),this.data.object3DSet&&e.addEventListener("object3dset",()=>{this.emitChanged()}),this.data.play&&e.addEventListener("play",()=>this.emitChanged()),this.data.pause&&e.addEventListener("pause",()=>this.emitChanged()),this.data.componentChanged&&e.addEventListener("componentchanged",()=>this.emitChanged()),this.data.componentInitialized&&e.addEventListener("componentinitialized",()=>this.emitChanged()),this.data.componentRemoved&&e.addEventListener("componentremoved",()=>this.emitChanged()),this.data.schemaChanged&&e.addEventListener("schemachanged",()=>this.emitChanged()),this.data.stateAdded&&e.addEventListener("stateadded",()=>this.emitChanged()),this.data.stateRemoved&&e.addEventListener("stateremoved",()=>this.emitChanged()))}emitChanged(){this.el.emit(`detectorchanged__${this.id}`)}remove(){var e;(e=this.mutationObserver)==null||e.disconnect()}},n(r,"schema",{recursive:{default:!1},enterVr:{default:!1},exitVr:{default:!1},elemTreeChanged:{default:!1},componentChanged:{default:!1},componentInitialized:{default:!1},componentRemoved:{default:!1},object3DSet:{default:!1},pause:{default:!1},play:{default:!1},stateAdded:{default:!1},stateRemoved:{default:!1},schemaChanged:{default:!1}}),n(r,"multiple",!0),r);o=g([f("change-detector")],o);
