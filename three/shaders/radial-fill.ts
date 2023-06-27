const THREE = AFRAME.THREE;

export type RadialFillShaderMaterial = THREE.ShaderMaterial & {
  uniforms: {
    backgroundColor: THREE.IUniform<THREE.Color>;
    color: THREE.IUniform<THREE.Color>;
    fill: THREE.IUniform<number>;
    offset: THREE.IUniform<number>;
    mirror: THREE.IUniform<boolean>;
  };
};

export function newRadialFill(): RadialFillShaderMaterial {
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      backgroundColor: { value: new THREE.Color(0x000000) },
      color: { value: new THREE.Color(0xffffff) },
      fill: { value: 0.0 },
      offset: { value: 0.0 },
      clockwise: { value: true },
    },
    vertexShader: `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, position.y, position.z, 1.0);
  }
  `,
    fragmentShader: `
  #define PI 3.1415926535897932384626433832795

  uniform vec3 color;
  uniform vec3 backgroundColor;
  uniform float fill;
  uniform float offset;
  uniform bool clockwise;

  varying vec2 vUv;

  void main() {
    vec2 vUvCentered = vUv - vec2(0.5);
    float angle = atan(vUvCentered.y, vUvCentered.x);
    if (angle < 0.0)
      angle = PI * 2.0 + angle;
    if (clockwise)
      angle = angle * -1.0;
    float radOffset = offset * PI / 180.0;
    float anglePct = mod((angle + radOffset) / (PI * 2.0), 1.0);
    gl_FragColor = mix(vec4(backgroundColor, 1.0), vec4(color, 1.0), 1.0 - step(fill, anglePct));
  }`,
  }) as RadialFillShaderMaterial;
  mat.needsUpdate = true;
  return mat;
}

export type AlphaRadialFillShaderMaterial = THREE.ShaderMaterial & {
  uniforms: {
    color: THREE.IUniform<THREE.Color>;
    fill: THREE.IUniform<number>;
    offset: THREE.IUniform<number>;
    clockwise: THREE.IUniform<boolean>;
  };
};

export function newAlphaRadialFill(): AlphaRadialFillShaderMaterial {
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      color: { value: new THREE.Color(0xffffff) },
      fill: { value: 0.9 },
      offset: { value: 0 },
      clockwise: { value: true },
    },
    vertexShader: `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, position.y, position.z, 1.0);
  }
  `,
    fragmentShader: `
  #define PI 3.1415926535897932384626433832795

  uniform vec3 color;
  uniform vec3 backgroundColor;
  uniform float fill;
  uniform float offset;
  uniform bool clockwise;

  varying vec2 vUv;

  void main() {
    vec2 vUvCentered = vUv - vec2(0.5);
    float angle = atan(vUvCentered.y, vUvCentered.x);
    if (angle < 0.0)
      angle = PI * 2.0 + angle;
    if (clockwise)
      angle = angle * -1.0;
    float radOffset = offset * PI / 180.0;
    float anglePct = mod((angle + radOffset) / (PI * 2.0), 1.0);
    gl_FragColor = vec4(color, 1.0 - step(fill, anglePct));
  }`,
  }) as AlphaRadialFillShaderMaterial;
  mat.transparent = true;
  mat.needsUpdate = true;
  return mat;
}
