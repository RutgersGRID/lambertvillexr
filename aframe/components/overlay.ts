import {
  BaseComponent,
  component,
} from '@/manual_modules/aframe-class-components';

@component('overlay')
export class OverlayComponent extends BaseComponent {
  static dependencies = ['material'];
  init() {
    if (!this.el.sceneEl) return;
    this.el.sceneEl.renderer.sortObjects = true;
    this.el.object3D.renderOrder = 100;
    (<any>this.el.components.material).material.depthTest = false;
  }
}
