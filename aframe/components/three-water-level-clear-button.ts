import {
  BaseComponent,
  component,
} from '@/manual_modules/aframe-class-components';
import { Entity, Schema } from 'aframe';
import { ThreeWaterControllerSystem } from '../systems/three-water-controller';
import document from '@/utils/document';
import './button';

const THREE = AFRAME.THREE;

@component('three-water-level-clear-button')
export class ThreeWaterLevelClearButtonComponent extends BaseComponent {
  textButton?: Entity;

  init() {
    const size = 1;

    this.textButton = document.createEntity('a-text-button');
    this.textButton.setAttribute('label', 'Clear');
    this.textButton.setAttribute('text', 'color', 'white');
    this.textButton.setAttribute('text', 'wrapCount', 10);
    this.textButton.setAttribute('src', usePublic('assets/images/button.png'));
    this.textButton.setAttribute('width', size);
    this.textButton.setAttribute('height', size);
    this.textButton.addEventListener('click', () => {
      this.el.sceneEl?.setAttribute('three-water-controller', {
        waterLevel: -1,
      });
    });

    this.el.appendChild(this.textButton);
  }
}

AFRAME.registerPrimitive('a-three-water-level-clear-button', {
  defaultComponents: {
    'three-water-level-clear-button': {},
  },
  mappings: {},
});
