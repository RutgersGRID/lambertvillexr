import { Entity, Schema } from 'aframe';
import {
  BaseComponent,
  component,
} from '@/manual_modules/aframe-class-components';

export type GroupColorComponentData = {
  color: string;
  inherit: boolean;
};

@component('group-color')
export class GroupColorComponent extends BaseComponent<GroupColorComponentData> {
  static schema: Schema<GroupColorComponentData> = {
    color: { type: 'color' },
    inherit: { default: true },
  };

  init() {
    this.update();
  }

  update() {
    if (this.el.hasAttribute('material'))
      this.el.setAttribute('material', 'color', this.data.color);

    const recursiveSetElem = (elem: Entity) => {
      if (elem.hasAttribute('material'))
        elem.setAttribute('material', 'color', this.data.color);
      Array.from(elem.children).forEach((child) => {
        if (
          child != this.el &&
          child.hasAttribute &&
          child.hasAttribute('group-color') &&
          child.getAttribute('group-color').inherit
        ) {
          child.setAttribute('group-color', 'color', this.data.color);
          return;
        }
        recursiveSetElem(<Entity>child);
      });
    };

    recursiveSetElem(this.el);
  }
}
