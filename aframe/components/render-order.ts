import {
  BaseComponent,
  component,
} from '@/manual_modules/aframe-class-components';
import { Entity, Schema } from 'aframe';
import {
  ChangeDetectorComponent,
  ChangeDetectorComponentData,
} from './change-detector';
import './change-detector';
import { Material, Mesh } from 'three';

export type RenderOrderData = {
  order: number;
  depthTest: boolean;
};

@component('render-order')
export class RenderOrderComopnent extends BaseComponent<RenderOrderData> {
  static schema: Schema<RenderOrderData> = {
    order: { default: 0 },
    depthTest: { default: true },
  };

  changeDetector?: ChangeDetectorComponent;

  init() {
    this.el.setAttribute('change-detector__render-order', <
      ChangeDetectorComponentData
    >{
      recursive: true,
      object3DSet: true,
    });
    if (!this.el.sceneEl) return;
    this.el.sceneEl.renderer.sortObjects = true;

    this.changeDetector = this.el.getAttribute('change-detector__render-order');
    if (!this.changeDetector) return;

    this.el.addEventListener('detectorchanged__render-order', () => {
      this.updateAllElem();
    });

    setTimeout(() => {
      this.updateAllElem();
    }, 2000);
  }

  updateAllElem() {
    const setObject3D = (obj: THREE.Object3D) => {
      obj.renderOrder = this.data.order;
      if (obj instanceof Mesh && obj.material instanceof Material) {
        obj.material.depthTest = this.data.depthTest;
      }
    };

    const recursiveSetElem = (elem: Entity) => {
      if (elem.object3D) setObject3D(elem.object3D);
      Array.from(elem.childNodes).forEach((x) => {
        const child = x as Entity;
        if (child != this.el && child.getAttribute('render-order')) return;
        recursiveSetElem(child);
      });
    };

    recursiveSetElem(this.el);
  }
}
