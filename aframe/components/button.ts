import {
  component,
  BaseComponent,
} from '@/manual_modules/aframe-class-components';
import { utils, primitives } from 'aframe';
import './group-opacity';
import './group-color';

@component('button')
export class ButtonComponent extends BaseComponent {
  static dependencies = ['geometry', 'material'];

  animDuration: number = 200;
  animEasing: string = 'easeOutCubic';

  init() {
    this.el.addEventListener('componentchanged', (e) => {
      if (e.detail.name === 'visible') this.updateClickable();
    });
    this.updateClickable();
    this.updateAnimations();
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
    if (this.el.hasAttribute('text')) {
      this.el.setAttribute('animation__mouseenter_textopacity', {
        property: 'text.opacity',
        to: 0.8,
        startEvents: 'mouseenter',
        dur: animDuration,
        easing: animEasing,
      });
      this.el.setAttribute('animation__mouseleave_textopacity', {
        property: 'text.opacity',
        to: 1,
        startEvents: 'mouseleave',
        dur: animDuration,
        easing: animEasing,
      });
      this.el.setAttribute('animation__mouseclick_textopacity', {
        property: 'text.opacity',
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
      },
      button: {},
      'group-opacity': {},
      'group-color': {
        color: '#FFF',
      },
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
      defaultComponents: {
        text: {
          align: 'center',
          shader: 'msdf',
          font: usePublic('assets/fonts/Raleway/Raleway-Bold.json'),
          baseline: 'top',
          wrapCount: 10,
        },
      },
      mappings: {
        label: 'text.value',
        'label-color': 'text.color',
      },
    },
    buttonMixin()
  )
);
