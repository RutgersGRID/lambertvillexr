import { BaseSystem, system } from '@/manual_modules/aframe-class-components';
import { WaterComponent } from '../components/three-water';
import { ANIME, Entity, Schema } from 'aframe';
import { setRenderOrder } from '@/utils/three';

const THREE = AFRAME.THREE;

export type ThreeWaterControllerSystemData = {
  waterLevel: number;
};

@system('three-water-controller')
export class ThreeWaterControllerSystem extends BaseSystem<ThreeWaterControllerSystemData> {
  static schema: Schema<ThreeWaterControllerSystemData> = {
    waterLevel: { default: -1 },
  };

  water?: Entity<{
    water: WaterComponent;
  }>;
  camera?: Entity;
  plane?: THREE.Mesh;
  underwater: boolean = false;
  currentWaterLevel: number = 0;
  waterLevelAnimation?: anime.AnimeInstance;

  init() {
    const sceneEl = this.el;
    this.water = sceneEl.querySelector('a-three-water') ?? undefined;
    this.camera = sceneEl.querySelector('[camera]') ?? undefined;
    this.plane = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 10),
      new THREE.MeshBasicMaterial({
        color: 0x274569,
        opacity: 0.5,
        transparent: true,
        depthTest: false,
      })
    );
    setRenderOrder(this.plane, 50);
    this.camera?.setObject3D('tint', this.plane);
    this.plane.position.set(0, 0, -0.1);
    this.updateUnderwaterFX();
  }

  tick(time: number, deltaTime: number) {
    if (!this.camera) return;
    this.water?.setAttribute('position', {
      x: 0,
      y: this.currentWaterLevel,
      z: 0,
    });
    const isUnderwater =
      this.currentWaterLevel > this.camera.getAttribute('position').y;
    if (isUnderwater != this.underwater) {
      this.underwater = isUnderwater;
      this.updateUnderwaterFX();
    }
  }

  update(oldData: ThreeWaterControllerSystemData) {
    if (oldData.waterLevel != this.data.waterLevel) {
      if (
        this.waterLevelAnimation != undefined &&
        this.waterLevelAnimation.completed
      ) {
        ANIME.remove(this);
      }
      this.waterLevelAnimation = AFRAME.ANIME({
        targets: this,
        currentWaterLevel: this.data.waterLevel,
        easing: 'easeInOutQuad',
        duration: 1000,
      });
    }
  }

  changeWaterLevel(newWaterLevel: number) {}

  updateUnderwaterFX() {
    if (!this.plane) return;
    this.plane.visible = this.underwater;
  }
}
