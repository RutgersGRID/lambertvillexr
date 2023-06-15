import {
  BaseComponent,
  component,
} from '@/manual_modules/aframe-class-components';
import { Entity, Schema } from 'aframe';
import document from '@/utils/document';
import {
  newRadialFill,
  RadialFillShaderMaterial,
} from '~/three/shaders/radial-fill';
const THREE = AFRAME.THREE;

export interface AudioPlayerData {
  src: string;
  size: number;
  title: string;
}

@component('audio-player')
export default class AudioPlayerComponent extends BaseComponent<AudioPlayerData> {
  static schema: Schema<AudioPlayerData> = {
    src: { type: 'string' },
    size: { default: 2 },
    title: { default: '' },
  };

  audioElem?: HTMLAudioElement;
  playButton?: Entity;
  radialFillMat?: RadialFillShaderMaterial;
  titleElem?: Entity;

  playImageSrc = usePublic('assets/images/play.png');
  pauseImageSrc = usePublic('assets/images/pause.png');

  init() {
    this.playButton = document.createEntity('a-button');
    this.playButton.setAttribute('height', this.data.size);
    this.playButton.setAttribute('width', this.data.size);
    this.playButton.addEventListener('click', () => {
      if (this.isAudioPlaying()) {
        this.audioElem?.pause();
      } else {
        this.audioElem?.play();
      }
      this.updatePlayButton();
    });

    this.titleElem = document.createEntity('a-text');
    this.titleElem.setAttribute('position', {
      x: 0,
      y: -this.data.size / 2 + 0.5,
      z: 0,
    });
    this.titleElem.setAttribute(
      'font',
      usePublic('assets/fonts/Raleway/Raleway-Regular.json')
    );
    this.titleElem.setAttribute('shader', 'msdf');

    const geometry = new THREE.CircleGeometry(
      (this.data.size / 2) * 1.25,
      16 * this.data.size
    );
    this.radialFillMat = newRadialFill();
    this.radialFillMat.uniforms.offset.value = 90;
    this.radialFillMat.uniforms.fill.value = 0.5;
    this.radialFillMat.uniforms.backgroundColor.value = new THREE.Color(
      '#bdbdbd'
    );
    this.radialFillMat.side = 2;
    const circleMesh = new THREE.Mesh(geometry, this.radialFillMat);

    this.audioElem?.currentTime;
    this.audioElem?.duration;

    this.el.setObject3D('CircleMesh', circleMesh);
    circleMesh.position.set(0, 0, -0.1);
    this.el.appendChild(this.playButton);
    this.el.appendChild(this.titleElem);
  }

  update() {
    if (!this.titleElem) return;

    this.titleElem.setAttribute('value', this.data.title);

    this.audioElem = document.querySelector(this.data.src);
    this.audioElem.addEventListener('ended', () => {
      this.updatePlayButton();
    });
    this.el;
    this.updatePlayButton();
    this.updateRadialFill();
  }

  tick() {
    this.updateRadialFill();
  }

  updateRadialFill() {
    if (!this.radialFillMat || !this.audioElem) return;
    this.radialFillMat.uniforms.fill.value =
      this.audioElem.currentTime / this.audioElem.duration;
  }

  updatePlayButton() {
    if (!this.playButton || !this.audioElem) return;

    if (this.isAudioPlaying()) {
      this.playButton.setAttribute('src', this.pauseImageSrc);
    } else {
      this.playButton.setAttribute('src', this.playImageSrc);
    }
  }

  isAudioPlaying() {
    return !this.audioElem?.paused;
  }
}

AFRAME.registerPrimitive('a-audio-player', {
  defaultComponents: {
    'audio-player': {},
  },
  mappings: {
    src: 'audio-player.src',
    size: 'audio-player.size',
    title: 'audio-player.title',
  },
});
