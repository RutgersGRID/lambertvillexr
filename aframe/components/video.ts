import {
  component,
  BaseComponent,
} from '@/manual_modules/aframe-class-components';
import { Schema, Entity } from 'aframe';
import * as document from '@/utils/document';
import { fixTextureToAspect } from '@/utils/three';
import { configureBackgroundEntity } from '@/utils/three';
import '@/manual_modules/aframe-troika-text';

const THREE = AFRAME.THREE;

export interface VideoComponentData {
  src: string;
  width: number;
  height: number;
  showDescription: boolean;
  descriptionHeight: number;
}

const fontSize = 0.2;
const lineHeight = fontSize * 1.2;
const outlineWidth = 0.2;
const titleHeight = 0.2;
const titleMargin = 0.2;
const descriptionMargin = 0.2;
const percentageOfVideoPlane = 0.3;

@component('video')
export default class VideoComponent extends BaseComponent<VideoComponentData> {
  static schema: Schema<VideoComponentData> = {
    src: { type: 'string' },
    width: { default: 8 },
    height: { default: 4.5 },
    showDescription: { default: true },
    descriptionHeight: { default: 1 },
  };

  playImageSrc: string = usePublic('assets/images/play.png');
  pauseImageSrc: string = usePublic('assets/images/pause.png');

  animDuration: number = 200;
  animEasing: string = 'easeOutCubic';
  playPlane?: Entity;
  videoPlane?: Entity;
  backgroundPlane?: Entity;
  titleText?: Entity;
  descriptionText?: Entity;
  fadeControlsTimer?: NodeJS.Timeout;
  videoElem?: HTMLVideoElement;

  title: string = '';
  description: string = '';

  isHovering: boolean = false;
  isVideoPlaying: boolean = false;
  controlsVisible: boolean = false;

  init() {
    this.playPlane = document.createEntity('a-image');
    this.videoPlane = document.createEntity('a-image');

    this.backgroundPlane = document.createEntity('a-plane');
    configureBackgroundEntity(this.backgroundPlane);
    this.backgroundPlane.object3D.renderOrder = -20;
    this.el.appendChild(this.backgroundPlane);

    this.playPlane.setAttribute('transparent', true);
    this.playPlane.setAttribute('alpha-test', 0.5);
    this.el.appendChild(this.videoPlane);
    this.videoPlane.appendChild(this.playPlane);

    this.titleText = document.createEntity('a-troika-text');
    this.titleText.setAttribute('fontSize', fontSize);
    this.titleText.setAttribute(
      'font',
      usePublic('assets/fonts/Raleway/Raleway-Bold.ttf')
    );
    this.titleText.setAttribute('color', 'white');
    this.titleText.setAttribute('baseline', 'top');

    this.descriptionText = document.createEntity('a-troika-text');
    this.descriptionText.setAttribute('fontSize', fontSize);
    this.descriptionText.setAttribute(
      'font',
      usePublic('assets/fonts/Raleway/Raleway-Regular.ttf')
    );
    this.descriptionText.setAttribute('color', 'white');
    this.descriptionText.setAttribute('baseline', 'top');

    this.descriptionText.addEventListener('loaded', () => {
      const textMesh = this.descriptionText?.getObject3D('mesh') as any;
      textMesh.addEventListener('synccomplete', () => {
        this.updateTitleDescriptionSizing();
      });
    });
    this.el.appendChild(this.titleText);
    this.el.appendChild(this.descriptionText);

    this.videoPlane.addEventListener('loaded', () => {
      this.update();
    });
    this.updateAnimations(this.animDuration);

    this.videoPlane.addEventListener('mouseenter', () => {
      this.isHovering = true;
      this.showControls();
    });
    this.videoPlane.addEventListener('mouseleave', () => {
      this.isHovering = false;
      this.hideControls();
      clearTimeout(this.fadeControlsTimer);
    });
    this.videoPlane.addEventListener('click', () => {
      if (!this.controlsVisible || !this.videoElem) return;
      clearTimeout(this.fadeControlsTimer);
      if (!this.isPlayable()) return;
      if (this.isVideoPlaying) {
        this.isVideoPlaying = false;
        this.videoElem.pause();
      } else {
        this.isVideoPlaying = true;
        this.videoElem.play();
        this.fadeControlsTimer = setTimeout(() => this.hideControls(500), 1000);
      }
      this.updatePlaybackUI();
    });

    this.videoElem?.addEventListener('ended', () => {
      this.updatePlaybackUI();
    });

    this.el.addEventListener('componentchanged', (e) => {
      if (e.detail.name === 'visible') this.updateClickable();
    });
    this.updateClickable();
  }

  updateClickable() {
    if (!this.videoPlane) return;
    const isVisible = this.el.getAttribute('visible');
    if (this.videoPlane.classList.contains('clickable')) {
      if (!isVisible) this.videoPlane.classList.remove('clickable');
    } else {
      if (isVisible) this.videoPlane.classList.add('clickable');
    }
  }

  update() {
    if (
      !this.videoPlane ||
      !this.playPlane ||
      !this.backgroundPlane ||
      !this.titleText ||
      !this.descriptionText
    )
      return;

    const smallestDim =
      this.data.width < this.data.height ? this.data.width : this.data.height;

    this.titleText.setAttribute('visible', this.data.showDescription);
    this.titleText.setAttribute('width', this.data.width);
    this.titleText.setAttribute('max-width', this.data.width);
    this.titleText.setAttribute('position', {
      x: 0,
      y: -titleMargin - this.data.height / 2,
      z: 0,
    });
    this.titleText.setAttribute(
      'clip-rect',
      `${-this.data.width / 2} ${-lineHeight} ${this.data.width / 2} 0`
    );

    this.videoPlane.setAttribute('width', this.data.width);
    this.playPlane.setAttribute('width', smallestDim * percentageOfVideoPlane);
    this.playPlane.object3D.position.copy(new THREE.Vector3(0, 0, 0.1));
    this.backgroundPlane.setAttribute(
      'width',
      this.data.width + 2 * outlineWidth
    );

    this.playPlane.setAttribute('height', smallestDim * percentageOfVideoPlane);
    this.videoPlane.setAttribute('height', this.data.height);
    this.backgroundPlane.setAttribute(
      'height',
      this.data.height + 2 * outlineWidth
    );

    this.videoElem = document.querySelector<HTMLVideoElement>(this.data.src);
    this.title = this.videoElem.getAttribute('title') ?? '';
    this.description = this.videoElem.getAttribute('description') ?? '';
    this.titleText.setAttribute('value', this.title);
    this.descriptionText.setAttribute('value', this.description);
    this.videoPlane.setAttribute('src', this.data.src);
    if (this.videoPlane.getObject3D('mesh')) {
      const mesh = this.videoPlane.getObject3D('mesh') as THREE.Mesh;
      const meshMaterial = mesh.material as THREE.MeshBasicMaterial;
      if (meshMaterial.map)
        fixTextureToAspect(meshMaterial.map, this.data.width, this.data.height);
    }

    this.isVideoPlaying = !!(
      this.videoElem.currentTime > 0 &&
      !this.videoElem.paused &&
      !this.videoElem.ended &&
      this.videoElem.readyState > 2
    );
    this.updatePlaybackUI();
  }

  updateTitleDescriptionSizing() {
    if (!this.descriptionText || !this.titleText || !this.backgroundPlane)
      return;

    const descriptionTextMesh = this.descriptionText.getObject3D('mesh') as any;
    const descriptionTextHeight = this.description
      ? Math.abs(descriptionTextMesh.textRenderInfo.visibleBounds[1]) +
        descriptionMargin
      : 0;

    const trueTitleHeight = this.title ? titleHeight + titleMargin : 0;

    const trueDescriptionTitleTextHeight =
      descriptionTextHeight + trueTitleHeight;
    const useMaxDescriptionHeight =
      trueDescriptionTitleTextHeight > this.data.descriptionHeight;

    if (useMaxDescriptionHeight) {
      this.descriptionText.setAttribute(
        'clip-rect',
        `${-this.data.width / 2} ${
          -this.data.descriptionHeight + (descriptionMargin + trueTitleHeight)
        } ${this.data.width / 2} 0`
      );
    } else {
      this.descriptionText.removeAttribute('clip-rect');
    }

    this.descriptionText.setAttribute('position', {
      x: 0,
      y: -descriptionMargin - this.data.height / 2 - trueTitleHeight,
      z: 0,
    });

    const usedDescriptionHeight = useMaxDescriptionHeight
      ? this.data.descriptionHeight
      : trueDescriptionTitleTextHeight;

    this.backgroundPlane.setAttribute(
      'height',
      this.data.height +
        (this.data.showDescription ? usedDescriptionHeight : 0) +
        2 * outlineWidth
    );
    this.backgroundPlane.setAttribute('position', {
      x: 0,
      y: this.data.showDescription ? -usedDescriptionHeight / 2 : 0,
      z: -0.05,
    });
  }

  showControls(animDuration: number = this.animDuration) {
    if (this.controlsVisible || !this.videoPlane || !this.playPlane) return;
    this.controlsVisible = true;
    this.updateAnimations(animDuration);
    this.videoPlane.emit('showcontrols');
    this.playPlane.emit('showcontrols');
  }

  hideControls(animDuration: number = this.animDuration) {
    if (!this.controlsVisible || !this.videoPlane || !this.playPlane) return;
    this.controlsVisible = false;
    this.updateAnimations(animDuration);
    this.videoPlane.emit('hidecontrols');
    this.playPlane.emit('hidecontrols');
  }

  isPlayable() {
    return this.videoElem && this.videoElem.readyState > 2;
  }

  updatePlaybackUI() {
    this.playPlane?.setAttribute(
      'material',
      'src',
      this.isVideoPlaying ? this.pauseImageSrc : this.playImageSrc
    );
  }

  updateAnimations(
    animDuration: number = this.animDuration,
    animEasing: string = this.animEasing
  ) {
    if (!this.videoPlane || !this.playPlane) return;

    this.playPlane.setAttribute('material', 'transparent', true);
    this.playPlane.setAttribute('material', 'opacity', 0);
    this.playPlane.setAttribute('animation__showcontrols_opacity', {
      property: 'material.opacity',
      to: 1,
      startEvents: 'showcontrols',
      dur: animDuration,
      easing: animEasing,
    });
    this.playPlane.setAttribute('animation__hidecontrols_color', {
      property: 'material.opacity',
      to: 0,
      startEvents: 'hidecontrols',
      dur: animDuration,
      easing: animEasing,
    });
    this.videoPlane.setAttribute('animation__showcontrols_color', {
      property: 'material.color',
      to: '#686868',
      startEvents: 'showcontrols',
      dur: animDuration,
      easing: animEasing,
    });
    this.videoPlane.setAttribute('animation__hidecontrols_color', {
      property: 'material.color',
      to: '#FFFFFF',
      startEvents: 'hidecontrols',
      dur: animDuration,
      easing: animEasing,
    });
  }
}

AFRAME.registerPrimitive('a-playback-video', {
  defaultComponents: {
    video: {},
  },
  mappings: {
    src: 'video.src',
    width: 'video.width',
    height: 'video.height',
  },
});
