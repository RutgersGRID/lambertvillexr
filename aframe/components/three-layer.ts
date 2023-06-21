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

export const aframeCameraLayer = 21;

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
  changeDetector?: ChangeDetectorComponent;

  init() {
    this.el.setAttribute('change-detector__three-layer', <
      ChangeDetectorComponentData
    >{
      recursive: true,
      object3DSet: true,
    });
    this.changeDetector = this.el.getAttribute('change-detector__three-layer');

    if (!this.changeDetector) return;

    this.el.addEventListener('detectorchanged__three-layer', () => {
      this.updateAllElemLayers();
    });

    this.el.sceneEl?.addEventListener('enter-vr', () => {
      if (this.el.sceneEl?.is('ar-mode')) {
        this.isArMode = true;
        this.updateAllElemLayers();
      }
    });
    this.el.sceneEl?.addEventListener('exit-vr', () => {
      this.isArMode = false;
      this.updateAllElemLayers();
    });

    this.updateAllElemLayers();
  }

  updateLayers(layers: THREE.Layers) {
    layers.disableAll();
    layers.enable(aframeCameraLayer);
    this.data.layers.forEach((x) => layers.enable(x));
    if (this.isArMode) this.data.arLayers.forEach((x) => layers.enable(x));
    else this.data.desktopLayers.forEach((x) => layers.enable(x));
  }

  updateAllElemLayers() {
    const recursiveSetObject3DLayers = (obj: THREE.Object3D) => {
      this.updateLayers(obj.layers);
      obj.children.forEach((child) => {
        recursiveSetObject3DLayers(child);
      });
    };

    const recursiveSetElemLayers = (elem: Entity) => {
      if (elem.object3D) recursiveSetObject3DLayers(elem.object3D);
      if (elem.hasAttribute('raycaster')) {
        const raycaster: THREE.Raycaster = (<any>elem.components['raycaster'])
          .raycaster;
        this.updateLayers(raycaster.layers);
      }
      Array.from(elem.childNodes).forEach((x) => {
        const child = x as Entity;
        if (child.getAttribute('three-layer')) return;
        recursiveSetElemLayers(child);
      });
    };

    recursiveSetElemLayers(this.el);
  }
}
