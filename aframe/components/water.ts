import {
  BaseComponent,
  component,
} from '@/manual_modules/aframe-class-components';
import { Water } from '@/manual_modules/three-water';
import { Schema } from 'aframe';

const THREE = AFRAME.THREE;

export type WaterComponentData = {
  sunDirection: THREE.Vector3;
};

@component('water')
export class WaterComponent extends BaseComponent<WaterComponentData> {
  static schema: Schema<WaterComponentData> = {
    sunDirection: { type: 'vec3' },
  };

  water?: Water;
  waterShaderMaterial?: THREE.ShaderMaterial;

  init() {
    const waterGeometry = new THREE.PlaneGeometry(10000, 10000);
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
      sunDirection: this.data.sunDirection,
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 20, //3.7,
      fog: threeScene?.fog !== undefined,
    });
    this.waterShaderMaterial = this.water.material as THREE.ShaderMaterial;

    this.water.rotation.x = -Math.PI / 2;
    this.el.setObject3D('water', this.water);
  }

  tick(time: number, deltaTime: number) {
    if (!this.waterShaderMaterial) return;
    this.waterShaderMaterial.uniforms['time'].value = time / 1000 / 2;
  }
}

AFRAME.registerPrimitive('a-water', {
  defaultComponents: {
    water: {},
  },
  mappings: {
    'sun-direction': 'water.sunDirection',
  },
});
