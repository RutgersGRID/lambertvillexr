import { Schema } from 'aframe';
import {
  BaseComponent,
  component,
} from '~/manual_modules/aframe-class-components';

const THREE = AFRAME.THREE;

export type MaterialOverrideComponentData = {
  color: string;
  flat: boolean;
  recursive: boolean;
};

@component('material-override')
export class MaterialOverrideComponent extends BaseComponent<MaterialOverrideComponentData> {
  static schema: Schema<MaterialOverrideComponentData> = {
    color: { default: 'black' },
    flat: { default: true },
    recursive: { default: true },
  };

  init() {
    this.el.addEventListener('object3dset', () => {
      this.update();
    });
  }

  update() {
    const tryUpdateObject3D = (obj: THREE.Object3D) => {
      if (obj instanceof THREE.Mesh) {
        if (obj.material instanceof THREE.Material) {
          obj.material.dispose();
        } else {
          for (const material of obj.material) material.dispose();
        }
        if (this.data.flat) {
          obj.material = new THREE.MeshBasicMaterial({
            color: new THREE.Color(this.data.color),
          });
        } else {
          obj.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color(this.data.color),
          });
        }
      }
    };

    const recursiveUpdate = (obj: THREE.Object3D) => {
      tryUpdateObject3D(obj);
      for (const child of obj.children) {
        recursiveUpdate(child);
      }
    };

    if (this.data.recursive) {
      recursiveUpdate(this.el.object3D);
    } else {
      for (const key in this.el.object3DMap) {
        const obj = this.el.object3DMap[key];
        tryUpdateObject3D(obj);
      }
    }
  }
}
