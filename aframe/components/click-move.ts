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
  spinOnToEntity: boolean;
  interactRadius: number;
};

@component('click-move')
export class ClickMoveComponent extends BaseComponent<ClickMoveComponentData> {
  static schema: Schema<ClickMoveComponentData> = {
    toEntity: { default: '' },
    spinOnToEntity: { default: false },
    interactRadius: { default: 3 },
  };

  toEntity?: Entity;
  isAtToEntity: boolean = false;
  currPositionAnimation?: anime.AnimeInstance;
  currRotationAnimation?: anime.AnimeInstance;

  initialPosition: THREE.Vector3 = new THREE.Vector3();
  initialRotation: THREE.Euler = new THREE.Euler();

  currPosition: THREE.Vector3 = new THREE.Vector3();
  currRotation: THREE.Euler = new THREE.Euler();

  init() {
    console.log('click move init');
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
      const targetPosition = this.isAtToEntity
        ? this.initialPosition
        : this.toEntity.object3D.position;
      const targetRotation = this.isAtToEntity
        ? this.initialRotation
        : this.toEntity.object3D.rotation;
      console.log(
        'is at entity ',
        this.isAtToEntity,
        ' moving to ',
        targetPosition,
        ' init ',
        this.initialPosition,
        ' to entity ',
        this.toEntity.object3D.position
      );
      this.isAtToEntity = !this.isAtToEntity;
      this.currPositionAnimation = AFRAME.ANIME({
        targets: this.currPosition,
        x: targetPosition?.x,
        y: targetPosition?.y,
        z: targetPosition?.z,
        easing: 'easeInOutQuad',
        duration: 1000,
      });
      this.currRotationAnimation = AFRAME.ANIME({
        targets: this.currRotation,
        x: targetRotation.x,
        y: targetRotation.y,
        z: targetRotation.z,
        easing: 'easeInOutQuad',
        duration: 1000,
      });
    });
  }

  tick() {
    this.el.setAttribute('position', this.currPosition);
    this.el.setAttribute('rotation', this.currRotation);
  }

  update() {
    this.toEntity = document.querySelector(this.data.toEntity);
  }
}
