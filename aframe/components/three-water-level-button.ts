import {
  BaseComponent,
  component,
} from '@/manual_modules/aframe-class-components';
import { Entity, Schema } from 'aframe';
import { ThreeWaterControllerSystem } from '../systems/three-water-controller';
import document from '@/utils/document';
import './button';

const THREE = AFRAME.THREE;

export type ThreeWaterLevelButtonData = {
  waterLevel: number;
  unit: 'feet' | 'meter';
};

@component('three-water-level-button')
export class ThreeWaterLevelButtonComponent extends BaseComponent<ThreeWaterLevelButtonData> {
  static schema: Schema<ThreeWaterLevelButtonData> = {
    waterLevel: { default: 0 },
    unit: { default: 'feet' },
  };

  textButton?: Entity;

  init() {
    const size = 1;

    this.textButton = document.createEntity('a-text-button');
    this.textButton.setAttribute(
      'label',
      this.data.waterLevel.toFixed(2) + ' ' + this.getUnitAbbreviation()
    );
    this.textButton.setAttribute('text', 'color', 'white');
    this.textButton.setAttribute('text', 'wrapCount', 10);
    this.textButton.setAttribute('src', usePublic('assets/images/button.png'));
    this.textButton.setAttribute('width', size);
    this.textButton.setAttribute('height', size);
    this.textButton.addEventListener('click', () => {
      this.el.sceneEl?.setAttribute('three-water-controller', {
        waterLevel: this.getWaterLevelUnitAmount(),
      });
    });

    this.el.appendChild(this.textButton);
  }

  feetToMeters(feet: number) {
    return feet * 0.3048;
  }

  getWaterLevelUnitAmount() {
    switch (this.data.unit) {
      case 'feet':
        return this.feetToMeters(this.data.waterLevel);
      case 'meter':
        return this.data.waterLevel;
    }
    return 0;
  }

  getUnitAbbreviation() {
    switch (this.data.unit) {
      case 'feet':
        return 'ft';
      case 'meter':
        return 'm';
    }
    return '';
  }
}

AFRAME.registerPrimitive('a-three-water-level-button', {
  defaultComponents: {
    'three-water-level-button': {},
  },
  mappings: {
    'water-level': 'three-water-level-button.waterLevel',
    unit: 'three-water-level-button.unit',
    title: 'three-water-level-button.title',
  },
});
