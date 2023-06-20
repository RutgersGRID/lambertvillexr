import {
  BaseComponent,
  component,
} from '@/manual_modules/aframe-class-components';
import { Sky } from '@/manual_modules/aframe-three-addons/objects/Sky';
import { Schema } from 'aframe';

const THREE = AFRAME.THREE;

export type ThreeSkyComponentData = {
  sunPosition: THREE.Vector3;
};

function getDefaultSunPosition(): THREE.Vector3 {
  const sun = new THREE.Vector3();
  const theta = Math.PI * (0.49 - 0.5);
  const phi = 2 * Math.PI * (0.205 - 0.5);
  sun.x = Math.cos(phi);
  sun.y = Math.sin(phi) * Math.sin(theta);
  sun.z = Math.sin(phi) * Math.cos(theta);
  return sun;
}

@component('three-sky')
export class ThreeSkyComponent extends BaseComponent<ThreeSkyComponentData> {
  static schema: Schema<ThreeSkyComponentData> = {
    sunPosition: { default: getDefaultSunPosition() },
  };

  sky?: Sky;

  init() {
    this.el.sceneEl?.addEventListener('loaded', () => {
      this.buildSky();
      this.buildSun();
    });
  }

  buildSky() {
    const threeScene = this.el.sceneEl?.object3D;
    if (!threeScene) return;

    this.sky = new Sky();
    this.sky.scale.setScalar(10000);
    this.el.setObject3D('sky', this.sky);
  }

  buildSun() {
    const sceneEl = this.el.sceneEl;
    if (!sceneEl || !this.sky) return;

    const pmremGenerator = new THREE.PMREMGenerator(sceneEl.renderer);

    (this.sky.material as THREE.ShaderMaterial).uniforms['sunPosition'].value =
      this.data.sunPosition;
    sceneEl.object3D.environment = pmremGenerator.fromScene(
      <any>this.sky
    ).texture;

    console.log(
      'sky build sun, ',
      sceneEl,
      ' ',
      sceneEl.renderer,
      ' sun pos ',
      this.data.sunPosition,
      'sky mat',
      this.sky.material
    );
    console.log('env, ', sceneEl.object3D.environment);
  }
}

AFRAME.registerPrimitive('a-three-sky', {
  defaultComponents: {
    'three-sky': {},
  },
  mappings: {
    'sun-position': 'three-sky.sunPosition',
  },
});
