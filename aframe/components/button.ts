import {
  component,
  BaseComponent,
} from '~/manual_modules/aframe-class-components';
import { utils, primitives } from 'aframe';

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
      to: '#686868',
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
      to: '#4f4f4f',
      startEvents: 'click',
      dur: animDuration,
      easing: animEasing,
    });
  }
}

AFRAME.registerPrimitive(
  'a-button',
  utils.extendDeep({}, primitives.getMeshMixin(), {
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
    },
    mappings: {
      height: 'geometry.height',
      width: 'geometry.width',
    },
  })
);
