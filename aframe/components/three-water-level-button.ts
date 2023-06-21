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
  waterController?: ThreeWaterControllerSystem;

  init() {
    this.waterController = document.getSystem('three-water-controller');
    this.textButton = document.createEntity('a-text-button');
    this.textButton.setAttribute(
      'label',
      this.getWaterLevelUnitAmount() + ' ' + this.getUnitAbbreviation()
    );
    this.textButton.setAttribute('text', 'color', 'white');
    this.textButton.setAttribute('text', 'wrapCount', 10);
    this.textButton.setAttribute('src', usePublic('assets/images/button.png'));
    this.textButton.addEventListener('click', () => {
      if (!this.waterController) return;
      this.waterController.data.waterLevel = this.data.waterLevel;
    });
    this.el.appendChild(this.textButton);
    console.log(
      'water controller: ',
      this.waterController,
      ' text button ',
      this.textButton,
      ' obj3D',
      this.textButton.object3D
    );
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
  },
});
