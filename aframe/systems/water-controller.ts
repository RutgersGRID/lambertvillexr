import { BaseSystem, system } from '@/manual_modules/aframe-class-components';
import { WaterComponent } from '../components/water';
import { Entity, Schema } from 'aframe';

export type WaterControllerSystemData = {
  waterLevel: number;
};

@system('water-controller')
export class WaterControllerSystem extends BaseSystem<WaterControllerSystemData> {
  static schema: Schema<WaterControllerSystemData> = {
    waterLevel: { default: 0 },
  };

  water?: Entity<{
    water: WaterComponent;
  }>;
  camera?: Entity;

  init() {
    const sceneEl = this.el;
    this.water = sceneEl.querySelector('a-water') ?? undefined;
    this.camera = sceneEl.querySelector('[camera]') ?? undefined;
  }

  tick(time: number, deltaTime: number) {
    this.data.waterLevel = (time / 2000) % 2;
    this.water?.setAttribute('position', {
      x: 0,
      y: this.data.waterLevel,
      z: 0,
    });
  }
}
