(function(e){var r={};function n(t){if(r[t])return r[t].exports;var i=r[t]={exports:{},id:t,loaded:!1};return e[t].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}return n.m=e,n.c=r,n.p="",n(0)})([function(e,r,n){var t=n(1),i=n(2);AFRAME.registerShader("sunSky",{schema:{luminance:{default:1,min:0,max:2,is:"uniform"},mieCoefficient:{default:.005,min:0,max:.1,is:"uniform"},mieDirectionalG:{default:.8,min:0,max:1,is:"uniform"},reileigh:{default:1,min:0,max:4,is:"uniform"},sunPosition:{type:"vec3",default:"0 0 -1",is:"uniform"},turbidity:{default:2,min:0,max:20,is:"uniform"}},vertexShader:t,fragmentShader:i}),AFRAME.registerPrimitive("a-sun-sky",{defaultComponents:{geometry:{primitive:"sphere",radius:5e3,segmentsWidth:64,segmentsHeight:20},material:{shader:"sunSky",side:"back"},scale:"-1 1 1"},mappings:{luminance:"material.luminance",mieCoefficient:"material.mieCoefficient",mieDirectionalG:"material.mieDirectionalG",reileigh:"material.reileigh",sunPosition:"material.sunPosition",turbidity:"material.turbidity"}})},function(e,r){e.exports=`varying vec3 vWorldPosition;\r
\r
void main() {\r
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);\r
  vWorldPosition = worldPosition.xyz;\r
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}\r
`},function(e,r){e.exports=`uniform sampler2D skySampler;\r
uniform vec3 sunPosition;\r
varying vec3 vWorldPosition;\r
\r
vec3 cameraPos = vec3(0., 0., 0.);\r
\r
uniform float luminance;\r
uniform float turbidity;\r
uniform float reileigh;\r
uniform float mieCoefficient;\r
uniform float mieDirectionalG;\r
\r
// constants for atmospheric scattering\r
const float e = 2.71828182845904523536028747135266249775724709369995957;\r
const float pi = 3.141592653589793238462643383279502884197169;\r
\r
const float n = 1.0003; // refractive index of air\r
const float N = 2.545E25; // number of molecules per unit volume for air at\r
// 288.15K and 1013mb (sea level -45 celsius)\r
const float pn = 0.035;  // depolatization factor for standard air\r
\r
// wavelength of used primaries, according to preetham\r
const vec3 lambda = vec3(680E-9, 550E-9, 450E-9);\r
\r
// mie stuff\r
// K coefficient for the primaries\r
const vec3 K = vec3(0.686, 0.678, 0.666);\r
const float v = 4.0;\r
\r
// optical length at zenith for molecules\r
const float rayleighZenithLength = 8.4E3;\r
const float mieZenithLength = 1.25E3;\r
const vec3 up = vec3(0.0, 1.0, 0.0);\r
\r
const float EE = 1000.0;\r
const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;\r
// 66 arc seconds -> degrees, and the cosine of that\r
\r
// earth shadow hack\r
const float cutoffAngle = pi/1.95;\r
const float steepness = 1.5;\r
\r
vec3 totalRayleigh(vec3 lambda)\r
{\r
  return (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn));\r
}\r
\r
// see http://blenderartists.org/forum/showthread.php?321110-Shaders-and-Skybox-madness\r
// A simplied version of the total Rayleigh scattering to works on browsers that use ANGLE\r
vec3 simplifiedRayleigh()\r
{\r
  return 0.0005 / vec3(94, 40, 18);\r
}\r
\r
float rayleighPhase(float cosTheta)\r
{\r
  return (3.0 / (16.0*pi)) * (1.0 + pow(cosTheta, 2.0));\r
}\r
\r
vec3 totalMie(vec3 lambda, vec3 K, float T)\r
{\r
  float c = (0.2 * T ) * 10E-18;\r
  return 0.434 * c * pi * pow((2.0 * pi) / lambda, vec3(v - 2.0)) * K;\r
}\r
\r
float hgPhase(float cosTheta, float g)\r
{\r
  return (1.0 / (4.0*pi)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0*g*cosTheta + pow(g, 2.0), 1.5));\r
}\r
\r
float sunIntensity(float zenithAngleCos)\r
{\r
  return EE * max(0.0, 1.0 - exp(-((cutoffAngle - acos(zenithAngleCos))/steepness)));\r
}\r
\r
// Filmic ToneMapping http://filmicgames.com/archives/75\r
float A = 0.15;\r
float B = 0.50;\r
float C = 0.10;\r
float D = 0.20;\r
float E = 0.02;\r
float F = 0.30;\r
float W = 1000.0;\r
\r
vec3 Uncharted2Tonemap(vec3 x)\r
{\r
   return ((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;\r
}\r
\r
void main()\r
{\r
  float sunfade = 1.0-clamp(1.0-exp((sunPosition.y/450000.0)),0.0,1.0);\r
\r
  float reileighCoefficient = reileigh - (1.0* (1.0-sunfade));\r
\r
  vec3 sunDirection = normalize(sunPosition);\r
\r
  float sunE = sunIntensity(dot(sunDirection, up));\r
\r
  // extinction (absorbtion + out scattering)\r
  // rayleigh coefficients\r
\r
  vec3 betaR = simplifiedRayleigh() * reileighCoefficient;\r
\r
  // mie coefficients\r
  vec3 betaM = totalMie(lambda, K, turbidity) * mieCoefficient;\r
\r
  // optical length\r
  // cutoff angle at 90 to avoid singularity in next formula.\r
  float zenithAngle = acos(max(0.0, dot(up, normalize(vWorldPosition - cameraPos))));\r
  float sR = rayleighZenithLength / (cos(zenithAngle) + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / pi), -1.253));\r
  float sM = mieZenithLength / (cos(zenithAngle) + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / pi), -1.253));\r
\r
  // combined extinction factor\r
  vec3 Fex = exp(-(betaR * sR + betaM * sM));\r
\r
  // in scattering\r
  float cosTheta = dot(normalize(vWorldPosition - cameraPos), sunDirection);\r
\r
  float rPhase = rayleighPhase(cosTheta*0.5+0.5);\r
  vec3 betaRTheta = betaR * rPhase;\r
\r
  float mPhase = hgPhase(cosTheta, mieDirectionalG);\r
  vec3 betaMTheta = betaM * mPhase;\r
\r
  vec3 Lin = pow(sunE * ((betaRTheta + betaMTheta) / (betaR + betaM)) * (1.0 - Fex),vec3(1.5));\r
  Lin *= mix(vec3(1.0),pow(sunE * ((betaRTheta + betaMTheta) / (betaR + betaM)) * Fex,vec3(1.0/2.0)),clamp(pow(1.0-dot(up, sunDirection),5.0),0.0,1.0));\r
\r
  //nightsky\r
  vec3 direction = normalize(vWorldPosition - cameraPos);\r
  float theta = acos(direction.y); // elevation --> y-axis, [-pi/2, pi/2]\r
  float phi = atan(direction.z, direction.x); // azimuth --> x-axis [-pi/2, pi/2]\r
  vec2 uv = vec2(phi, theta) / vec2(2.0*pi, pi) + vec2(0.5, 0.0);\r
  // vec3 L0 = texture2D(skySampler, uv).rgb+0.1 * Fex;\r
  vec3 L0 = vec3(0.1) * Fex;\r
\r
  // composition + solar disc\r
  float sundisk = smoothstep(sunAngularDiameterCos,sunAngularDiameterCos+0.00002,cosTheta);\r
  L0 += (sunE * 19000.0 * Fex)*sundisk;\r
\r
  vec3 whiteScale = 1.0/Uncharted2Tonemap(vec3(W));\r
\r
  vec3 texColor = (Lin+L0);\r
  texColor *= 0.04 ;\r
  texColor += vec3(0.0,0.001,0.0025)*0.3;\r
\r
  float g_fMaxLuminance = 1.0;\r
  float fLumScaled = 0.1 / luminance;\r
  float fLumCompressed = (fLumScaled * (1.0 + (fLumScaled / (g_fMaxLuminance * g_fMaxLuminance)))) / (1.0 + fLumScaled);\r
\r
  float ExposureBias = fLumCompressed;\r
\r
  vec3 curr = Uncharted2Tonemap((log2(2.0/pow(luminance,4.0)))*texColor);\r
  vec3 color = curr*whiteScale;\r
\r
  vec3 retColor = pow(color,vec3(1.0/(1.2+(1.2*sunfade))));\r
\r
  gl_FragColor.rgb = retColor;\r
\r
  gl_FragColor.a = 1.0;\r
}\r
`}]);
