import"./modulepreload-polyfill-3cfb730f.js";function t(){import.meta.url,import("_").catch(()=>1);async function*e(){}}if(typeof AFRAME>"u")throw new Error("Component attempted to register before AFRAME was available.");AFRAME.registerSystem("ball-scene-manager",{init:function(){this.ballScenes=document.querySelectorAll("[ball-scene]"),this.currScene=void 0,console.log("ball-scene-manager inited")}});AFRAME.registerPrimitive("a-ball-scene",{defaultComponents:{geometry:{primitive:"sphere"}}});AFRAME.registerComponent("ball-scene",{schema:{src:{default:""}},init:function(){this.el.setAttribute("geometry",{primitive:"sphere"}),this.el.setAttribute("material",{src:this.data.src}),this.el.addEventListener("mouseenter",()=>{}),this.el.addEventListener("mousexit",()=>{})}});export{t as __vite_legacy_guard};