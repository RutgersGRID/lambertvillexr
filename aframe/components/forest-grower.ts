import { Entity, Schema } from 'aframe';
import {
  AnyData,
  BaseComponent,
  component,
} from '~/manual_modules/aframe-class-components';

export type ForestGrowerComponentData = {
  forestScale: number;
};

@component('forest-grower')
export class ForestGrowerComponent extends BaseComponent<ForestGrowerComponentData> {
  static schema: Schema<ForestGrowerComponentData> = {
    forestScale: { default: 0 },
  };

  currAnimation?: anime.AnimeInstance;
  forestScale: number = 0;

  init() {}

  update() {
    if (this.currAnimation && !this.currAnimation.completed) {
      AFRAME.ANIME.remove(this);
    }
    this.currAnimation = AFRAME.ANIME({
      targets: this,
      forestScale: this.data.forestScale,
      easing: 'easeInOutQuad',
      duration: 1000,
    });
  }

  tick() {
    for (const child of this.el.children) {
      const entity = child as Entity;
      if (entity.object3D) {
        entity.object3D.scale.set(
          this.forestScale,
          this.forestScale,
          this.forestScale
        );
      }
    }
  }
}
