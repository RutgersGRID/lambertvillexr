import { Entity, Schema } from 'aframe';
import {
  BaseComponent,
  component,
} from '@/manual_modules/aframe-class-components';

export type ForestGrowerComponentData = {
  forestScale: number;
  treeQuery: string;
  autoplay: boolean;
  autoplayDuration: number;
};

@component('forest-grower')
export class ForestGrowerComponent extends BaseComponent<ForestGrowerComponentData> {
  static schema: Schema<ForestGrowerComponentData> = {
    forestScale: { default: 0 },
    treeQuery: { default: '.tree' },
    autoplay: { default: true },
    autoplayDuration: { default: 15000 },
  };

  currAnimation?: anime.AnimeInstance;
  autoplayInterval?: NodeJS.Timer;
  forestScale: number = 0;

  init() {}

  update() {
    if (this.currAnimation && !this.currAnimation.completed)
      AFRAME.ANIME.remove(this);
    if (this.autoplayInterval) clearTimeout(this.autoplayInterval);
    this.currAnimation = AFRAME.ANIME({
      targets: this,
      forestScale: this.data.forestScale,
      easing: 'easeInOutQuad',
      duration: 1000,
    });
    if (this.data.autoplay)
      this.autoplayInterval = setInterval(async () => {
        this.forestScale = 0;
        this.currAnimation = AFRAME.ANIME({
          targets: this,
          forestScale: 1,
          easing: 'easeInOutQuad',
          duration: this.data.autoplayDuration * 0.8,
        });
      }, this.data.autoplayDuration);
  }

  tick() {
    const trees = document.querySelectorAll(this.data.treeQuery);
    for (const tree of trees) {
      const entity = tree as Entity;
      entity.setAttribute('scale', {
        x: this.forestScale,
        y: this.forestScale,
        z: this.forestScale,
      });
    }
  }
}
