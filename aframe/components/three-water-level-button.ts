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
  title: string;
};

@component('three-water-level-button')
export class ThreeWaterLevelButtonComponent extends BaseComponent<ThreeWaterLevelButtonData> {
  static schema: Schema<ThreeWaterLevelButtonData> = {
    waterLevel: { default: 0 },
    unit: { default: 'feet' },
    title: { default: 'title' },
  };

  textButton?: Entity;
  titleElem?: Entity;

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
      console.log('setting water level of contr ', this.data.waterLevel);
      this.el.sceneEl?.setAttribute('three-water-controller', {
        waterLevel: this.getWaterLevelUnitAmount(),
      });
    });

    this.titleElem = document.createEntity('a-troika-text');
    this.titleElem.setAttribute(
      'font',
      usePublic('assets/fonts/Raleway/Raleway-Black.json')
    );
    this.titleElem.setAttribute('width', size);
    this.titleElem.setAttribute('size', size * 0.5);
    this.titleElem.setAttribute('align', 'center');
    this.titleElem.setAttribute('position', {
      x: 0,
      y: size / 2 + 0.2,
      z: 0,
    });

    this.el.appendChild(this.textButton);
    this.el.appendChild(this.titleElem);
  }

  update() {
    if (!this.titleElem) return;
    console.log('button update', this.data);
    this.titleElem.setAttribute('value', this.data.title);
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
