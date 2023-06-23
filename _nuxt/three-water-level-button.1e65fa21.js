var b=Object.defineProperty;var p=(i,t,e)=>t in i?b(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var l=(i,t,e)=>(p(i,typeof t!="symbol"?t+"":t,e),e);import{u}from"./AFrameScene.vue.b791f70d.js";import{B as v,c}from"./component.decorator.a66a1cbe.js";import"./aframe-master.5ce7d00f.js";import"./test-helpers.473cda21.js";import{d as h}from"./aframe-troika-text.b725a61f.js";import"./button.395ccde1.js";import"./entry.578c79a9.js";var w=Object.defineProperty,f=Object.getOwnPropertyDescriptor,d=(i,t,e,s)=>{for(var r=s>1?void 0:s?f(t,e):t,n=i.length-1,a;n>=0;n--)(a=i[n])&&(r=(s?a(t,e,r):a(r))||r);return s&&r&&w(t,e,r),r};AFRAME.THREE;var o;let m=(o=class extends v{constructor(){super(...arguments);l(this,"textButton");l(this,"titleElem")}init(){this.textButton=h.createEntity("a-text-button"),this.textButton.setAttribute("label",this.data.waterLevel.toFixed(2)+" "+this.getUnitAbbreviation()),this.textButton.setAttribute("text","color","white"),this.textButton.setAttribute("text","wrapCount",10),this.textButton.setAttribute("src",u("assets/images/button.png")),this.textButton.setAttribute("width",1),this.textButton.setAttribute("height",1),this.textButton.addEventListener("click",()=>{var e;(e=this.el.sceneEl)==null||e.setAttribute("three-water-controller",{waterLevel:this.getWaterLevelUnitAmount()})}),this.titleElem=h.createEntity("a-troika-text"),this.titleElem.setAttribute("font",u("assets/fonts/Raleway/Raleway-Bold.ttf")),this.titleElem.setAttribute("width",1),this.titleElem.setAttribute("fontSize",.2),this.titleElem.setAttribute("align","center"),this.titleElem.setAttribute("position",{x:0,y:1/2+.2,z:0}),this.el.appendChild(this.textButton),this.el.appendChild(this.titleElem)}update(){this.titleElem&&this.titleElem.setAttribute("value",this.data.title)}feetToMeters(t){return t*.3048}getWaterLevelUnitAmount(){switch(this.data.unit){case"feet":return this.feetToMeters(this.data.waterLevel);case"meter":return this.data.waterLevel}return 0}getUnitAbbreviation(){switch(this.data.unit){case"feet":return"ft";case"meter":return"m"}return""}},l(o,"schema",{waterLevel:{default:0},unit:{default:"feet"},title:{default:"title"}}),o);m=d([c("three-water-level-button")],m);AFRAME.registerPrimitive("a-three-water-level-button",{defaultComponents:{"three-water-level-button":{}},mappings:{"water-level":"three-water-level-button.waterLevel",unit:"three-water-level-button.unit",title:"three-water-level-button.title"}});export{m as ThreeWaterLevelButtonComponent};
