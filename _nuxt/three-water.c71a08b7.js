var K=Object.defineProperty;var Q=(l,t,e)=>t in l?K(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e;var S=(l,t,e)=>(Q(l,typeof t!="symbol"?t+"":t,e),e);import{u as Y}from"./AFrameScene.vue.4d8885b7.js";import{B as Z,c as ee}from"./component.decorator.a66a1cbe.js";import"./aframe-master.5ce7d00f.js";import"./test-helpers.473cda21.js";import"./entry.a4de1626.js";const E=THREE.Color,te=THREE.FrontSide,D=THREE.Matrix4,re=THREE.Mesh,oe=THREE.PerspectiveCamera,ae=THREE.Plane,ie=THREE.ShaderMaterial,L=THREE.UniformsLib,z=THREE.UniformsUtils,c=THREE.Vector3,N=THREE.Vector4,ne=THREE.WebGLRenderTarget;class le extends re{constructor(t,e={}){super(t),this.isWater=!0;const r=this,i=e.textureWidth!==void 0?e.textureWidth:512,p=e.textureHeight!==void 0?e.textureHeight:512,h=e.clipBias!==void 0?e.clipBias:0,U=e.alpha!==void 0?e.alpha:1,A=e.time!==void 0?e.time:0,F=e.waterNormals!==void 0?e.waterNormals:null,V=e.sunDirection!==void 0?e.sunDirection:new c(.70707,.70707,0),B=new E(e.sunColor!==void 0?e.sunColor:16777215),O=new E(e.waterColor!==void 0?e.waterColor:8355711),R=e.eye!==void 0?e.eye:new c(0,0,0),G=e.distortionScale!==void 0?e.distortionScale:20,I=e.side!==void 0?e.side:te,k=e.fog!==void 0?e.fog:!1,d=new ae,m=new c,f=new c,_=new c,w=new D,y=new c(0,0,-1),u=new N,x=new c,C=new c,g=new N,M=new D,o=new oe;this.mirrorCamera=o;const W=new ne(i,p),b={uniforms:z.merge([L.fog,L.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new D},sunColor:{value:new E(8355711)},sunDirection:{value:new c(.70707,.70707,0)},eye:{value:new c},waterColor:{value:new E(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <encodings_fragment>
					#include <fog_fragment>
				}`},n=new ie({fragmentShader:b.fragmentShader,vertexShader:b.vertexShader,uniforms:z.clone(b.uniforms),lights:!0,side:I,fog:k});n.uniforms.mirrorSampler.value=W.texture,n.uniforms.textureMatrix.value=M,n.uniforms.alpha.value=U,n.uniforms.time.value=A,n.uniforms.normalSampler.value=F,n.uniforms.sunColor.value=B,n.uniforms.waterColor.value=O,n.uniforms.sunDirection.value=V,n.uniforms.distortionScale.value=G,n.uniforms.eye.value=R,r.material=n,r.onBeforeRender=function(a,q,v){if(f.setFromMatrixPosition(r.matrixWorld),_.setFromMatrixPosition(v.matrixWorld),w.extractRotation(r.matrixWorld),m.set(0,0,1),m.applyMatrix4(w),x.subVectors(f,_),x.dot(m)>0)return;x.reflect(m).negate(),x.add(f),w.extractRotation(v.matrixWorld),y.set(0,0,-1),y.applyMatrix4(w),y.add(_),C.subVectors(f,y),C.reflect(m).negate(),C.add(f),o.position.copy(x),o.up.set(0,1,0),o.up.applyMatrix4(w),o.up.reflect(m),o.lookAt(C),o.far=v.far,o.updateMatrixWorld(),o.projectionMatrix.copy(v.projectionMatrix),M.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),M.multiply(o.projectionMatrix),M.multiply(o.matrixWorldInverse),d.setFromNormalAndCoplanarPoint(m,f),d.applyMatrix4(o.matrixWorldInverse),u.set(d.normal.x,d.normal.y,d.normal.z,d.constant);const s=o.projectionMatrix;g.x=(Math.sign(u.x)+s.elements[8])/s.elements[0],g.y=(Math.sign(u.y)+s.elements[9])/s.elements[5],g.z=-1,g.w=(1+s.elements[10])/s.elements[14],u.multiplyScalar(2/u.dot(g)),s.elements[2]=u.x,s.elements[6]=u.y,s.elements[10]=u.z+1-h,s.elements[14]=u.w,R.setFromMatrixPosition(v.matrixWorld);const X=a.getRenderTarget(),$=a.xr.enabled,J=a.shadowMap.autoUpdate;r.visible=!1,a.xr.enabled=!1,a.shadowMap.autoUpdate=!1,a.setRenderTarget(W),a.state.buffers.depth.setMask(!0),a.autoClear===!1&&a.clear(),a.render(q,o),r.visible=!0,a.xr.enabled=$,a.shadowMap.autoUpdate=J,a.setRenderTarget(X);const H=v.viewport;H!==void 0&&a.state.viewport(H)}}}var se=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,ue=(l,t,e,r)=>{for(var i=r>1?void 0:r?ce(t,e):t,p=l.length-1,h;p>=0;p--)(h=l[p])&&(i=(r?h(t,e,i):h(i))||i);return r&&i&&se(t,e,i),i};const P=AFRAME.THREE;var T;let j=(T=class extends Z{constructor(){super(...arguments);S(this,"water");S(this,"waterShaderMaterial")}init(){var r;const t=new P.CircleGeometry(500),e=(r=this.el.sceneEl)==null?void 0:r.object3D;this.water=new le(t,{textureWidth:512,textureHeight:512,waterNormals:new P.TextureLoader().load(Y("assets/images/waternormals.jpg"),function(i){i.wrapS=i.wrapT=P.RepeatWrapping}),alpha:1,sunDirection:this.data.sunDirection,sunColor:16777215,waterColor:7695,distortionScale:3.7,fog:(e==null?void 0:e.fog)!==void 0}),this.water.mirrorCamera.layers.disableAll(),this.water.mirrorCamera.layers.enable(this.data.reflectionLayer),this.waterShaderMaterial=this.water.material,this.waterShaderMaterial.side=2,this.water.rotation.x=-Math.PI/2,this.el.setObject3D("water",this.water)}tick(t,e){this.waterShaderMaterial&&(this.waterShaderMaterial.uniforms.time.value=t/1e3/2)}},S(T,"schema",{sunDirection:{type:"vec3"},reflectionLayer:{default:31}}),T);j=ue([ee("three-water")],j);AFRAME.registerPrimitive("a-three-water",{defaultComponents:{"three-water":{}},mappings:{"sun-direction":"three-water.sunDirection","reflection-layer":"three-water.reflectionLayer"}});export{j as WaterComponent};
