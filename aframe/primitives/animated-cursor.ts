import {
  BaseComponent,
  component,
} from '@/manual_modules/aframe-class-components';
import '../components/render-order';
import { setRenderOrder } from '@/utils/three';

@component('cursor-render-order')
export class CursorRenderOrderComponent extends BaseComponent {
  init() {
    setRenderOrder(this.el.object3D, 200);
  }
}

AFRAME.registerPrimitive('a-animated-cursor', {
  defaultComponents: {
    cursor: {
      fuseTimeout: '500',
    },
    raycaster: {
      objects: '.clickable',
    },
    geometry: {
      primitive: 'ring',
      radiusOuter: 0.016,
      radiusInner: 0.01,
      segmentsTheta: 32,
    },
    material: {
      color: 'white',
      shader: 'flat',
      transparent: true,
    },
    position: { x: 0, y: 0, z: -1 },
    scale: { x: 1, y: 1, z: 1 },
    animation__fusing: {
      property: 'scale',
      startEvents: 'fusing',
      easing: 'easeInCubic',
      dur: 500,
      from: '1 1 1',
      to: '0.1 0.1 0.1',
    },
    animation__click: {
      property: 'scale',
      startEvents: 'click',
      easing: 'easeInCubic',
      dur: 150,
      to: '1 1 1',
      from: '0.1 0.1 0.1',
    },
    animation__mouseleave: {
      property: 'scale',
      startEvents: 'mouseleave',
      easing: 'easeInCubic',
      dur: 500,
      to: '1 1 1',
    },
    'render-order': {
      order: 200,
      depthTest: false,
    },
    'cursor-render-order': {},
  },
});

export default {};
