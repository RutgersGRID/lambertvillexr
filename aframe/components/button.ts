import {
  component,
  BaseComponent,
  AnyData,
} from '@/manual_modules/aframe-class-components';
import { utils, primitives, Schema, Entity } from 'aframe';
import './group-opacity';
import './group-color';
import '@/manual_modules/aframe-troika-text';
import document from '@/utils/document';

export type ButtonComponentData = {
  text: string;
  textColor: string;
};

@component('button')
export class ButtonComponent extends BaseComponent<ButtonComponentData> {
  static schema: Schema<ButtonComponentData> = {
    text: { default: '' },
    textColor: { type: 'color' },
  };
  static dependencies = ['geometry', 'material'];

  animDuration: number = 200;
  animEasing: string = 'easeOutCubic';
  textElem?: Entity;

  init() {
    this.el.addEventListener('componentchanged', (e) => {
      if (e.detail.name === 'visible') this.updateClickable();
    });
    this.updateClickable();
    this.updateAnimations();

    if (this.data.text != '') {
      this.textElem = document.createEntity('a-troika-text');
      this.textElem.setAttribute('value', this.data.text);
      this.textElem.setAttribute('color', this.data.textColor);
      this.textElem.setAttribute('position', {
        x: 0,
        y: 0,
        z: 0.001,
      });
      this.el.append(this.textElem);
    }
  }

  updateClickable() {
    const isVisible = this.el.getAttribute('visible');
    if (this.el.classList.contains('clickable')) {
      if (!isVisible) this.el.classList.remove('clickable');
    } else {
      if (isVisible) this.el.classList.add('clickable');
    }
  }

  updateAnimations(
    animDuration: number = this.animDuration,
    animEasing: string = this.animEasing
  ) {
    this.el.setAttribute('animation__mouseenter_color', {
      property: 'material.color',
      to: '#b0b0b0',
      startEvents: 'mouseenter',
      dur: animDuration,
      easing: animEasing,
    });
    this.el.setAttribute('animation__mouseleave_color', {
      property: 'material.color',
      to: '#FFFFFF',
      startEvents: 'mouseleave',
      dur: animDuration,
      easing: animEasing,
    });
    this.el.setAttribute('animation__mouseclick_color', {
      property: 'material.color',
      from: '#828282',
      to: '#b0b0b0',
      startEvents: 'click',
      dur: animDuration,
      easing: animEasing,
    });
    if (this.textElem) {
      this.textElem.setAttribute('animation__mouseenter_textopacity', {
        property: 'troika-text.fillOpacity',
        to: 0.8,
        startEvents: 'mouseenter',
        dur: animDuration,
        easing: animEasing,
      });
      this.textElem.setAttribute('animation__mouseleave_textopacity', {
        property: 'troika-text.fillOpacity',
        to: 1,
        startEvents: 'mouseleave',
        dur: animDuration,
        easing: animEasing,
      });
      this.textElem.setAttribute('animation__mouseclick_textopacity', {
        property: 'troika-text.fillOpacity',
        from: 0.5,
        to: 0.8,
        startEvents: 'click',
        dur: animDuration,
        easing: animEasing,
      });
    }
  }
}

function buttonMixin() {
  return utils.extendDeep({}, primitives.getMeshMixin(), {
    defaultComponents: {
      geometry: {
        primitive: 'plane',
      },
      material: {
        color: '#FFF',
        shader: 'flat',
        side: 'double',
        transparent: true,
        alphaTest: 0.0000001,
      },
      button: {},
    },
    mappings: {
      height: 'geometry.height',
      width: 'geometry.width',
    },
  });
}

AFRAME.registerPrimitive('a-button', buttonMixin());

AFRAME.registerPrimitive(
  'a-text-button',
  utils.extendDeep(
    {},
    {
      mappings: {
        label: 'button.text',
        'label-color': 'button.textColor',
      },
    },
    buttonMixin()
  )
);
