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

const THREE = AFRAME.THREE;

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
  }

  update() {
    this.updateAllElem();
  }

  updateAllElem() {
    // let canPrint = false;

    const setObject3D = (obj: THREE.Object3D) => {
      if ((obj as any).relativeRenderOrder)
        obj.renderOrder = this.data.order + (obj as any).relativeRenderOrder;
      else obj.renderOrder = this.data.order;
      if (obj instanceof THREE.Mesh) {
        if (obj.material instanceof THREE.Material)
          obj.material.depthTest = this.data.depthTest;
        else {
          for (const material of obj.material) {
            material.depthTest = this.data.depthTest;
          }
        }
      }
    };

    const recursiveSetElem = (elem: Entity) => {
      if (elem.object3D) {
        for (const key in elem.object3DMap) {
          const object = elem.object3DMap[key];
          setObject3D(object);
        }
      }
      if (elem.getAttribute && elem.getAttribute('material'))
        elem.setAttribute('material', 'depthTest', this.data.depthTest);
      Array.from(elem.childNodes).forEach((x) => {
        const child = x as Entity;
        if (
          child != this.el &&
          //@ts-ignore
          child.getAttribute &&
          child.hasAttribute('render-order')
        )
          return;
        recursiveSetElem(child);
      });
    };

    recursiveSetElem(this.el);
  }
}
