import {
  BaseComponent,
  BaseSystem,
  component,
  system,
} from '@/manual_modules/aframe-class-components';
import * as document from '@/utils/document';
import { Entity, Schema } from 'aframe';

@system('ball-scene-manager')
export class BallSceneManagerSystem extends BaseSystem {
  ballScenes?: Entity[];
  currScene?: Entity;

  init() {
    this.ballScenes = document.querySelectorAll<Entity>('[ball-scene]');
    this.currScene = undefined;
    console.log('ball-scene-manager inited');
  }
}

export interface BallSceneComponentData {
  src: string;
}

@component('ball-scene')
export class BallSceneComponent extends BaseComponent {
  static schema: Schema<BallSceneComponentData> = {
    src: { default: '' },
  };

  init() {
    this.el.setAttribute('geometry', { primitive: 'sphere' });
    this.el.setAttribute('material', { src: this.data.src });
    this.el.addEventListener('mouseenter', () => {});
    this.el.addEventListener('mousexit', () => {});
  }
}

AFRAME.registerPrimitive('a-ball-scene', {
  defaultComponents: {
    geometry: { primitive: 'sphere' },
    'ball-scene': {},
  },
});
