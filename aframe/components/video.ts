import {
  component,
  BaseComponent,
} from '@/manual_modules/aframe-class-components';
import { Schema, Entity } from 'aframe';
import * as document from '@/utils/document';
import { fixTextureToAspect } from '@/utils/three';
import { configureBackgroundEntity } from '@/utils/three';

const THREE = AFRAME.THREE;

export interface VideoComponentData {
  src: string;
  width: number;
  height: number;
}

@component('video')
export default class VideoComponent extends BaseComponent<VideoComponentData> {
  static schema: Schema<VideoComponentData> = {
    src: { type: 'string' },
    width: { default: 8 },
    height: { default: 4.5 },
  };

  playImageSrc: string = usePublic('assets/images/play.png');
  pauseImageSrc: string = usePublic('assets/images/pause.png');

  animDuration: number = 200;
  animEasing: string = 'easeOutCubic';
  playPlane?: Entity;
  videoPlane?: Entity;
  backgroundPlane?: Entity;
  fadeControlsTimer?: NodeJS.Timeout;
  videoElem?: HTMLVideoElement;

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
    if (!this.videoPlane || !this.playPlane || !this.backgroundPlane) return;

    const outlineWidth = 0.2;
    const percentageOfVideoPlane = 0.3;
    const smallestDim =
      this.data.width < this.data.height ? this.data.width : this.data.height;

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
