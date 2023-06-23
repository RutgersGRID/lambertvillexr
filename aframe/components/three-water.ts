import {
  BaseComponent,
  component,
} from '@/manual_modules/aframe-class-components';
import { Water } from '@/manual_modules/aframe-three-addons/objects/Water';
import { Schema } from 'aframe';

const THREE = AFRAME.THREE;

export type WaterComponentData = {
  sunDirection: THREE.Vector3;
  reflectionLayer: number;
};

@component('three-water')
export class WaterComponent extends BaseComponent<WaterComponentData> {
  static schema: Schema<WaterComponentData> = {
    sunDirection: { type: 'vec3' },
    reflectionLayer: { default: 31 },
  };

  water?: Water;
  waterShaderMaterial?: THREE.ShaderMaterial;

  init() {
    const waterGeometry = new THREE.CircleGeometry(500);
    const threeScene = this.el.sceneEl?.object3D;
    this.water = new Water(waterGeometry, {
      textureWidth: 512,
      textureHeight: 512,
      waterNormals: new THREE.TextureLoader().load(
        usePublic('assets/images/waternormals.jpg'),
        function (texture) {
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        }
      ),
      alpha: 1.0,
      sunDirection: this.data.sunDirection,
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7, //3.7,
      fog: threeScene?.fog !== undefined,
    });
    this.water.mirrorCamera.layers.disableAll();
    this.water.mirrorCamera.layers.enable(this.data.reflectionLayer);
    this.waterShaderMaterial = this.water.material as THREE.ShaderMaterial;
    this.waterShaderMaterial.side = 2;

    this.water.rotation.x = -Math.PI / 2;
    this.el.setObject3D('water', this.water);
  }

  tick(time: number, deltaTime: number) {
    if (!this.waterShaderMaterial) return;
    this.waterShaderMaterial.uniforms['time'].value = time / 1000 / 2;
  }
}

AFRAME.registerPrimitive('a-three-water', {
  defaultComponents: {
    'three-water': {},
  },
  mappings: {
    'sun-direction': 'three-water.sunDirection',
    'reflection-layer': 'three-water.reflectionLayer',
  },
});
