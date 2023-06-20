import { BaseSystem, system } from '@/manual_modules/aframe-class-components';
import { WaterComponent } from '../components/three-water';
import { Entity, Schema } from 'aframe';

export type ThreeWaterControllerSystemData = {
  waterLevel: number;
};

@system('three-water-controller')
export class ThreeWaterControllerSystem extends BaseSystem<ThreeWaterControllerSystemData> {
  static schema: Schema<ThreeWaterControllerSystemData> = {
    waterLevel: { default: 0 },
  };

  water?: Entity<{
    water: WaterComponent;
  }>;
  camera?: Entity;

  init() {
    const sceneEl = this.el;
    this.water = sceneEl.querySelector('a-three-water') ?? undefined;
    this.camera = sceneEl.querySelector('[camera]') ?? undefined;
  }

  tick(time: number, deltaTime: number) {
    if (!this.camera) return;
    this.data.waterLevel = (time / 2000) % 3;
    this.water?.setAttribute('position', {
      x: 0,
      y: this.data.waterLevel,
      z: 0,
    });
    if (this.data.waterLevel > this.camera.getAttribute('position').y) {
      console.log('greater');
    }
  }
}
