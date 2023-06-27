import {
  component,
  BaseComponent,
  AnyData,
} from '@/manual_modules/aframe-class-components';
import { Entity, Schema } from 'aframe';

const THREE = AFRAME.THREE;
const ANIME = AFRAME.ANIME;

export type ClickMoveComponentData = {
  toEntity: string;
  interactRadius: number;
  duration: number;
  spinOnToEntity: boolean;
  spinDuration: number;
};

const rad2Deg = 180 / Math.PI;

@component('click-move')
export class ClickMoveComponent extends BaseComponent<ClickMoveComponentData> {
  static schema: Schema<ClickMoveComponentData> = {
    toEntity: { default: '' },
    interactRadius: { default: 3 },
    duration: { default: 1000 },
    spinOnToEntity: { default: false },
    spinDuration: { default: 10000 },
  };

  toEntity?: Entity;
  isAtToEntity: boolean = false;
  currPositionAnimation?: anime.AnimeInstance;
  currRotationAnimation?: anime.AnimeInstance;

  initialPosition: THREE.Vector3 = new THREE.Vector3();
  initialRotation: THREE.Euler = new THREE.Euler();

  currPosition: THREE.Vector3 = new THREE.Vector3();
  currRotation: THREE.Euler = new THREE.Euler();

  // sizeToDistanceRatio: number = 1;

  init() {
    this.initialPosition.copy(this.el.object3D.position);
    this.initialRotation.copy(this.el.object3D.rotation);
    this.currPosition.copy(this.initialPosition);
    this.currRotation.copy(this.initialRotation);
    this.el.setAttribute('geometry', {
      primitive: 'sphere',
      radius: this.data.interactRadius,
    });
    this.el.setAttribute('material', {
      transparent: true,
      opacity: 0,
    });
    this.el.setAttribute('animation__mouseenter', {
      property: 'scale',
      startEvents: 'mouseenter',
      easing: 'easeInCubic',
      dur: 150,
      to: '1.1 1.1 1.1',
    });
    this.el.setAttribute('animation__mouseleave', {
      property: 'scale',
      startEvents: 'mouseleave',
      easing: 'easeInCubic',
      dur: 150,
      to: '1 1 1',
    });
    this.el.setAttribute('animation__click', {
      property: 'scale',
      startEvents: 'click',
      easing: 'easeInCubic',
      dur: 150,
      to: '1 1 1',
    });
    this.el.classList.add('clickable');
    this.el.addEventListener('click', () => {
      if (!this.toEntity) return;
      if (
        (this.currPositionAnimation != undefined &&
          !this.currPositionAnimation.completed) ||
        (this.currRotationAnimation != undefined &&
          !this.currRotationAnimation.completed)
      ) {
        ANIME.remove(this.currPosition);
        ANIME.remove(this.currRotation);
      }
      this.el.removeAttribute('animation__spin-on-toentity');
      const targetPosition = this.isAtToEntity
        ? this.initialPosition
        : this.toEntity.object3D.position;
      const targetRotation = this.isAtToEntity
        ? this.initialRotation
        : this.toEntity.object3D.rotation;
      this.isAtToEntity = !this.isAtToEntity;
      this.currPositionAnimation = AFRAME.ANIME({
        targets: this.currPosition,
        x: targetPosition?.x,
        y: targetPosition?.y,
        z: targetPosition?.z,
        easing: 'easeInOutQuad',
        duration: this.data.duration,
      });
      this.currRotationAnimation = AFRAME.ANIME({
        targets: this.currRotation,
        x: targetRotation.x,
        y: targetRotation.y,
        z: targetRotation.z,
        easing: 'easeInOutQuad',
        duration: this.data.duration,
        complete: () => {
          if (!this.toEntity) return;
          if (this.isAtToEntity) {
            this.currRotationAnimation = AFRAME.ANIME({
              targets: this.currRotation,
              y: this.currRotation.y + 2 * Math.PI,
              easing: 'linear',
              duration: this.data.spinDuration,
              loop: true,
            });
          }
        },
      });
    });
  }

  tick() {
    this.el.setAttribute('position', this.currPosition);
    this.el.setAttribute('rotation', {
      x: this.currRotation.x * rad2Deg,
      y: this.currRotation.y * rad2Deg,
      z: this.currRotation.z * rad2Deg,
    });
  }

  update() {
    this.toEntity = document.querySelector(this.data.toEntity);
  }
}
