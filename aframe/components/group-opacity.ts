import { Entity, Schema } from 'aframe';
import {
  BaseComponent,
  component,
} from '@/manual_modules/aframe-class-components';

export type GroupOpacityComponentData = {
  opacity: number;
  inherit: boolean;
};

@component('group-opacity')
export class GroupOpacityComponent extends BaseComponent<GroupOpacityComponentData> {
  static schema: Schema<GroupOpacityComponentData> = {
    opacity: { default: 1.0 },
    inherit: { default: true },
  };

  init() {
    this.update();
  }

  update() {
    if (this.el.hasAttribute('material'))
      this.el.setAttribute('material', 'opacity', this.data.opacity);

    const recursiveSetElem = (elem: Entity) => {
      const children = Array.from(elem.children);
      children.forEach((child) => {
        if (
          child != this.el &&
          child.hasAttribute &&
          child.hasAttribute('group-opacity') &&
          child.getAttribute('group-opacity').inherit
        ) {
          child.setAttribute('group-opacity', 'opacity', this.data.opacity);
          return;
        }

        if (child.hasAttribute && child.hasAttribute('material'))
          child.setAttribute('material', 'opacity', this.data.opacity);
        recursiveSetElem(<Entity>child);
      });
    };

    recursiveSetElem(this.el);
  }
}
