import {
  BaseComponent,
  component,
} from '@/manual_modules/aframe-class-components';
import { Schema } from 'aframe';

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
    this.updateLayers();
  }

  updateLayers() {
    const recursiveSetLayers = (obj: THREE.Object3D) => {
      obj.layers.disableAll();
      this.data.layers.forEach((x) => obj.layers.enable(x));
      if (this.isArMode)
        this.data.arLayers.forEach((x) => obj.layers.enable(x));
      else this.data.desktopLayers.forEach((x) => obj.layers.enable(x));
      obj.children.forEach((child) => recursiveSetLayers(child));
    };

    recursiveSetLayers(this.el.object3D);
  }
}
