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
import './button';
import '@/manual_modules/aframe-troika-text';
import { configureBackgroundEntity } from '~/utils/three';

const THREE = AFRAME.THREE;

export interface AudioPlayerData {
  src: string;
  size: number;
  showDescription: boolean;
  descriptionWidth: number;
}

const fontSize = 0.2;
const lineHeight = fontSize * 1.2;
const outlineWidth = 0.2;
const descriptionLeftMargin = 0.2;
const descriptionTopMargin = 0.2;
const titleLineHeight = 0.2;

@component('audio-player')
export default class AudioPlayerComponent extends BaseComponent<AudioPlayerData> {
  static schema: Schema<AudioPlayerData> = {
    src: { type: 'string' },
    size: { default: 2 },
    showDescription: { default: true },
    descriptionWidth: { default: 2 },
  };

  backgroundCircle?: Entity;
  backgroundPlane?: Entity;
  audioElem?: HTMLAudioElement;
  playButton?: Entity;
  radialFillMat?: RadialFillShaderMaterial;
  titleText?: Entity;
  descriptionText?: Entity;

  playImageSrc = usePublic('assets/images/play.png');
  pauseImageSrc = usePublic('assets/images/pause.png');

  init() {
    this.backgroundPlane = document.createEntity('a-plane');
    configureBackgroundEntity(this.backgroundPlane);
    setRenderOrder(this.backgroundPlane.object3D, -20);

    this.backgroundCircle = document.createEntity('a-circle');
    configureBackgroundEntity(this.backgroundCircle);
    setRenderOrder(this.backgroundCircle.object3D, -20);

    this.playButton = document.createEntity('a-button');
    this.playButton.addEventListener('click', () => {
      if (this.isAudioPlaying()) {
        this.audioElem?.pause();
      } else {
        this.audioElem?.play();
      }
      this.updatePlayButton();
    });

    this.titleText = document.createEntity('a-troika-text');
    this.titleText.setAttribute('font-size', fontSize);
    this.titleText.setAttribute('align', 'center');
    this.titleText.setAttribute('baseline', 'top');
    this.titleText.setAttribute(
      'font',
      usePublic('assets/fonts/Raleway/Raleway-Bold.ttf')
    );

    this.descriptionText = document.createEntity('a-troika-text');
    this.descriptionText.setAttribute('font-size', fontSize);
    this.descriptionText.setAttribute('align', 'center');
    this.descriptionText.setAttribute('baseline', 'top');
    this.descriptionText.setAttribute(
      'font',
      usePublic('assets/fonts/Raleway/Raleway-Regular.ttf')
    );

    this.radialFillMat = newRadialFill();
    this.radialFillMat.uniforms.offset.value = 90;
    this.radialFillMat.uniforms.fill.value = 0.5;
    this.radialFillMat.uniforms.backgroundColor.value = new THREE.Color(
      '#bdbdbd'
    );
    this.radialFillMat.side = 2;

    this.el.appendChild(this.backgroundCircle);
    this.el.appendChild(this.backgroundPlane);
    this.el.appendChild(this.playButton);
    this.el.appendChild(this.titleText);
    this.el.appendChild(this.descriptionText);
  }

  update() {
    if (
      !this.titleText ||
      !this.descriptionText ||
      !this.backgroundPlane ||
      !this.playButton ||
      !this.backgroundCircle
    )
      return;

    this.audioElem = document.querySelector(this.data.src);
    this.audioElem.addEventListener('ended', () => {
      this.updatePlayButton();
    });

    const title = this.audioElem.getAttribute('title') ?? '';
    const description = this.audioElem.getAttribute('description') ?? '';

    const showDescription =
      this.data.showDescription && (title != '' || description != '');
    const isOnlyTitle = title != '' && description == '';
    const trueDescriptionWidth = showDescription
      ? descriptionLeftMargin + this.data.descriptionWidth
      : 0;
    const titleAndDescTopMarginHeight =
      title != '' ? titleLineHeight + descriptionTopMargin : 0;
    const descriptionHeight = this.data.size - titleAndDescTopMarginHeight;

    this.playButton.setAttribute('height', this.data.size * 0.8);
    this.playButton.setAttribute('width', this.data.size * 0.8);
    this.playButton.setAttribute('position', {
      x: -trueDescriptionWidth / 2,
      z: 0.1,
    });

    const existingMesh = this.el.getObject3D('CircleMesh') as THREE.Mesh;
    if (existingMesh) {
      existingMesh.geometry.dispose();
    }
    const geometry = new THREE.CircleGeometry(
      this.data.size / 2,
      16 * this.data.size
    );
    const circleMesh = new THREE.Mesh(geometry, this.radialFillMat);
    this.el.setObject3D('CircleMesh', circleMesh);
    circleMesh.position.set(-trueDescriptionWidth / 2, 0, 0);

    this.backgroundCircle.setAttribute(
      'radius',
      this.data.size / 2 + outlineWidth
    );
    this.backgroundCircle.setAttribute('position', {
      x: -trueDescriptionWidth / 2,
    });
    this.backgroundCircle.setAttribute('theta-start', showDescription ? 90 : 0);
    this.backgroundCircle.setAttribute(
      'theta-length',
      showDescription ? 180 : 360
    );

    this.backgroundPlane.setAttribute(
      'width',
      this.data.size / 2 + outlineWidth + trueDescriptionWidth
    );
    this.backgroundPlane.setAttribute(
      'height',
      this.data.size + 2 * outlineWidth
    );
    this.backgroundPlane.setAttribute('position', {
      x: (this.data.size / 2 + outlineWidth) / 2,
    });
    this.backgroundPlane.setAttribute('visible', showDescription);

    this.descriptionText.setAttribute('position', {
      x: trueDescriptionWidth / 2,
      y: this.data.size / 2 - titleAndDescTopMarginHeight,
    });
    this.descriptionText.setAttribute(
      'clip-rect',
      `${-this.data.descriptionWidth} ${-descriptionHeight} ${
        this.data.descriptionWidth
      } 0`
    );

    this.titleText.setAttribute('value', title);
    this.titleText.setAttribute('visible', this.data.showDescription);
    this.titleText.setAttribute('position', {
      x: trueDescriptionWidth / 2,
      y: isOnlyTitle ? 0 : this.data.size / 2,
    });
    this.titleText.setAttribute('baseline', isOnlyTitle ? 'center' : 'top');
    this.titleText.setAttribute(
      'clip-rect',
      isOnlyTitle
        ? `${-this.data.descriptionWidth / 2} ${-lineHeight / 2} ${
            this.data.descriptionWidth / 2
          } ${lineHeight / 2}`
        : `${-this.data.descriptionWidth / 2} ${-lineHeight} ${
            this.data.descriptionWidth / 2
          } 0`
    );

    this.descriptionText.setAttribute('value', description);
    this.descriptionText.setAttribute('visible', this.data.showDescription);
    this.descriptionText.setAttribute('max-width', this.data.descriptionWidth);

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
    'show-description': 'audio-player.showDescription',
    'description-width': 'audio-player.descriptionWidth',
  },
});
