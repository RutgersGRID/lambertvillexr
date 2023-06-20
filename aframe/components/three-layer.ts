import {
  BaseComponent,
  component,
} from '@/manual_modules/aframe-class-components';
import { Entity, Schema } from 'aframe';

export type ThreeLayerData = {
  layers: number[];
  arLayers: number[];
  desktopLayers: number[];
};

@component('three-layer')
export class ThreeLayerComopnent extends BaseComponent<ThreeLayerData> {
  static schema: Schema<ThreeLayerData> = {
    layers: { type: 'array' },
    arLayers: { type: 'array' },
    desktopLayers: { type: 'array' },
  };

  isArMode: boolean = false;
  mutationObserver?: MutationObserver;

  init() {
    this.el.sceneEl?.addEventListener('enter-vr', () => {
      if (this.el.sceneEl?.is('ar-mode')) {
        this.isArMode = true;
        this.updateLayers();
      }
    });
    this.el.sceneEl?.addEventListener('exit-vr', () => {
      this.isArMode = false;
      this.updateLayers();
    });

    this.mutationObserver = new MutationObserver((mutationlist, observer) => {
      mutationlist.forEach((mutation) => {
        if (mutation.type == 'childList') {
          console.log('mutation occur for ', mutation.target);
          this.updateLayers();
        }
      });
    });
    this.mutationObserver.observe(this.el, { childList: true });

    this.el.addEventListener('child-detached', () => {
      this.updateLayers();
    });

    this.updateLayers();
  }

  remove() {
    this.mutationObserver?.disconnect();
  }

  updateLayers() {
    const recursiveSetObject3DLayers = (obj: THREE.Object3D) => {
      obj.layers.disableAll();
      this.data.layers.forEach((x) => obj.layers.enable(x));
      if (this.isArMode)
        this.data.arLayers.forEach((x) => obj.layers.enable(x));
      else this.data.desktopLayers.forEach((x) => obj.layers.enable(x));
      obj.children.forEach((child) => recursiveSetObject3DLayers(child));
    };

    const recursiveSetElemLayers = (elem: Entity) => {
      console.log('set elem ', elem.tagName, ' with layers ', this.data.layers);
      if (elem.object3D) {
        console.log('\telement has object3D, proccessing');
        recursiveSetObject3DLayers(elem.object3D);
      } else {
        console.log('\tadd loaded listener');
        elem.addEventListener('loaded', () => {
          console.log('loaded procced');
          recursiveSetElemLayers(elem);
        });
        return;
      }
      Array.from(elem.childNodes).forEach((x) => {
        const child = x as Entity;
        console.log('\tprocess child ', child.tagName);
        if (!child.getAttribute('three-layer')) {
          console.log("\t\t child doesn't have three layer so recursing");
          recursiveSetElemLayers(child);
        }
      });
    };

    recursiveSetElemLayers(this.el);
  }
}
