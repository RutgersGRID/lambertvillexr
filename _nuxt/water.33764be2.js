var k=Object.defineProperty;var q=(s,r,e)=>r in s?k(s,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[r]=e;var S=(s,r,e)=>(q(s,typeof r!="symbol"?r+"":r,e),e);import{u as X}from"./AFrameScene.vue.32251a98.js";import{B as $,c as J}from"./component.decorator.a66a1cbe.js";import"./aframe-master.5ce7d00f.js";import"./test-helpers.473cda21.js";import"./entry.483a48ac.js";const t=AFRAME.THREE;class K extends t.Mesh{constructor(r,e={}){super(r),this.isWater=!0;const o=this,n=e.textureWidth!==void 0?e.textureWidth:512,p=e.textureHeight!==void 0?e.textureHeight:512,x=e.clipBias!==void 0?e.clipBias:0,V=e.alpha!==void 0?e.alpha:1,z=e.time!==void 0?e.time:0,L=e.waterNormals!==void 0?e.waterNormals:null,N=e.sunDirection!==void 0?e.sunDirection:new t.Vector3(.70707,.70707,0),j=new t.Color(e.sunColor!==void 0?e.sunColor:16777215),F=new t.Color(e.waterColor!==void 0?e.waterColor:8355711),W=e.eye!==void 0?e.eye:new t.Vector3(0,0,0),A=e.distortionScale!==void 0?e.distortionScale:20,U=e.side!==void 0?e.side:t.FrontSide,H=e.fog!==void 0?e.fog:!1,d=new t.Plane,m=new t.Vector3,f=new t.Vector3,_=new t.Vector3,w=new t.Matrix4,C=new t.Vector3(0,0,-1),u=new t.Vector4,g=new t.Vector3,y=new t.Vector3,h=new t.Vector4,M=new t.Matrix4,a=new t.PerspectiveCamera,T=new t.WebGLRenderTarget(n,p),D={uniforms:t.UniformsUtils.merge([t.UniformsLib.fog,t.UniformsLib.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new t.Matrix4},sunColor:{value:new t.Color(8355711)},sunDirection:{value:new t.Vector3(.70707,.70707,0)},eye:{value:new t.Vector3},waterColor:{value:new t.Color(5592405)}}]),vertexShader:`
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
          gl_FragColor = linearToOutputTexel( gl_FragColor );
					#include <fog_fragment>
				}`},l=new t.ShaderMaterial({fragmentShader:D.fragmentShader,vertexShader:D.vertexShader,uniforms:t.UniformsUtils.clone(D.uniforms),lights:!0,side:U,fog:H});l.uniforms.mirrorSampler.value=T.texture,l.uniforms.textureMatrix.value=M,l.uniforms.alpha.value=V,l.uniforms.time.value=z,l.uniforms.normalSampler.value=L,l.uniforms.sunColor.value=j,l.uniforms.waterColor.value=F,l.uniforms.sunDirection.value=N,l.uniforms.distortionScale.value=A,l.uniforms.eye.value=W,o.material=l,o.onBeforeRender=function(i,B,v){if(f.setFromMatrixPosition(o.matrixWorld),_.setFromMatrixPosition(v.matrixWorld),w.extractRotation(o.matrixWorld),m.set(0,0,1),m.applyMatrix4(w),g.subVectors(f,_),g.dot(m)>0)return;g.reflect(m).negate(),g.add(f),w.extractRotation(v.matrixWorld),C.set(0,0,-1),C.applyMatrix4(w),C.add(_),y.subVectors(f,C),y.reflect(m).negate(),y.add(f),a.position.copy(g),a.up.set(0,1,0),a.up.applyMatrix4(w),a.up.reflect(m),a.lookAt(y),a.far=v.far,a.updateMatrixWorld(),a.projectionMatrix.copy(v.projectionMatrix),M.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),M.multiply(a.projectionMatrix),M.multiply(a.matrixWorldInverse),d.setFromNormalAndCoplanarPoint(m,f),d.applyMatrix4(a.matrixWorldInverse),u.set(d.normal.x,d.normal.y,d.normal.z,d.constant);const c=a.projectionMatrix;h.x=(Math.sign(u.x)+c.elements[8])/c.elements[0],h.y=(Math.sign(u.y)+c.elements[9])/c.elements[5],h.z=-1,h.w=(1+c.elements[10])/c.elements[14],u.multiplyScalar(2/u.dot(h)),c.elements[2]=u.x,c.elements[6]=u.y,c.elements[10]=u.z+1-x,c.elements[14]=u.w,W.setFromMatrixPosition(v.matrixWorld);const O=i.getRenderTarget(),G=i.xr.enabled,I=i.shadowMap.autoUpdate;o.visible=!1,i.xr.enabled=!1,i.shadowMap.autoUpdate=!1,i.setRenderTarget(T),i.state.buffers.depth.setMask(!0),i.autoClear===!1&&i.clear(),i.render(B,a),o.visible=!0,i.xr.enabled=G,i.shadowMap.autoUpdate=I,i.setRenderTarget(O);const E=v.viewport;E!==void 0&&i.state.viewport(E)}}}var Q=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,Z=(s,r,e,o)=>{for(var n=o>1?void 0:o?Y(r,e):r,p=s.length-1,x;p>=0;p--)(x=s[p])&&(n=(o?x(r,e,n):x(n))||n);return o&&n&&Q(r,e,n),n};const P=AFRAME.THREE;var b;let R=(b=class extends ${constructor(){super(...arguments);S(this,"water");S(this,"waterShaderMaterial")}init(){var o;const r=new P.PlaneGeometry(1e4,1e4),e=(o=this.el.sceneEl)==null?void 0:o.object3D;this.water=new K(r,{textureWidth:512,textureHeight:512,waterNormals:new P.TextureLoader().load(X("assets/images/waternormals.jpg"),function(n){n.wrapS=n.wrapT=P.RepeatWrapping}),sunDirection:this.data.sunDirection,sunColor:16777215,waterColor:7695,distortionScale:20,fog:(e==null?void 0:e.fog)!==void 0}),this.waterShaderMaterial=this.water.material,this.water.rotation.x=-Math.PI/2,this.el.setObject3D("water",this.water)}tick(r,e){this.waterShaderMaterial&&(this.waterShaderMaterial.uniforms.time.value=r/1e3/2)}},S(b,"schema",{sunDirection:{type:"vec3"}}),b);R=Z([J("water")],R);AFRAME.registerPrimitive("a-water",{defaultComponents:{water:{}},mappings:{"sun-direction":"water.sunDirection"}});export{R as WaterComponent};
