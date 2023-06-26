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
export const aframeLightingLayer = 0;

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
  changeDetector?: ChangeDetectorComponent;

  init() {
    console.log('three layer init');
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

    this.el.sceneEl?.addEventListener('enter-manual-vr', () => {
      console.log('enter manual ar mode');
      if (this.el.sceneEl?.hasAttribute('manual-ar-mode')) {
        this.isArMode = true;
        this.updateAllElemLayers();
      }
    });
    this.el.sceneEl?.addEventListener('exit-manual-vr', () => {
      this.isArMode = false;
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
  updateLayers(layers: THREE.Layers, isCamera: boolean = false) {
    layers.disableAll();
    if (isCamera) {
      layers.enable(aframeLightingLayer);
      layers.enable(aframeCameraLayer);
    }
    this.data.layers.forEach((x) => layers.enable(x));
    if (this.isArMode) this.data.arLayers.forEach((x) => layers.enable(x));
    else this.data.desktopLayers.forEach((x) => layers.enable(x));
  }

  updateAllElemLayers() {
    const setObject3D = (obj: THREE.Object3D, isCamera: boolean) => {
      this.updateLayers(obj.layers, isCamera);
    };

    const recursiveSetElem = (elem: Entity) => {
      if (elem.object3D) {
        Object.entries(elem.object3DMap).forEach(([key, object]) =>
          setObject3D(object, elem.hasAttribute('camera'))
        );
      }
      if (elem.hasAttribute && elem.hasAttribute('raycaster')) {
        const raycaster: THREE.Raycaster = (<any>elem.components['raycaster'])
          .raycaster;
        this.updateLayers(raycaster.layers);
      }
      Array.from(elem.childNodes).forEach((x) => {
        const child = x as Entity;
        if (child.getAttribute && child.getAttribute('three-layer')) return;
        recursiveSetElem(child);
      });
    };

    recursiveSetElem(this.el);
  }
}
