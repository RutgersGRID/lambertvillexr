import {
  BaseComponent,
  component,
} from '@/manual_modules/aframe-class-components';
import { Entity, Schema } from 'aframe';
import document from '@/utils/document';
import { loadTextureToAspect } from '@/utils/three';
import './button';

const THREE = AFRAME.THREE;

export interface SlideShowComponentData {
  imageQuery: string;
  loop: boolean;
  autoplay: boolean;
  autoplayDuration: number;
  width: number;
  height: number;
}

@component('slide-show')
export class SlideShowComponent extends BaseComponent<SlideShowComponentData> {
  static schema: Schema<SlideShowComponentData> = {
    imageQuery: { default: '' },
    loop: { default: true },
    autoplay: { default: false },
    autoplayDuration: { default: 3000 },
    width: { default: 16 },
    height: { default: 9 },
  };

  animDuration: number = 200;
  animEasing: string = 'easeOutCubic';
  displayPlane?: Entity;
  prevButton?: Entity;
  nextButton?: Entity;
  images: THREE.Texture[] = [];
  currImageIndex = 0;
  autoplayInterval?: NodeJS.Timer;

  init() {
    this.displayPlane = document.createEntity('a-image');

    this.prevButton = document.createEntity('a-button');
    this.prevButton.setAttribute('src', usePublic('assets/images/play.png'));
    this.prevButton.addEventListener('click', () => this.gotoPrevImage());
    this.prevButton.setAttribute('position', {
      x: this.data.width / 2,
      y: 0,
      z: 0.05,
    });

    this.nextButton = document.createEntity('a-button');
    this.nextButton.setAttribute('src', usePublic('assets/images/play.png'));
    this.nextButton.addEventListener('click', () => this.gotoNextImage());
    this.nextButton.setAttribute('position', {
      x: -this.data.width / 2,
      y: 0,
      z: 0.05,
    });
    this.nextButton.setAttribute('scale', '-1 1 1');

    this.el.appendChild(this.displayPlane);
    this.el.appendChild(this.prevButton);
    this.el.appendChild(this.nextButton);

    this.displayPlane.addEventListener('loaded', () => {
      this.update();
    });
  }

  updateImage(newImage: THREE.Texture) {
    if (!this.displayPlane) return;

    const mesh = this.displayPlane.getObject3D('mesh') as THREE.Mesh;
    const meshMaterial = mesh.material as THREE.MeshBasicMaterial;
    meshMaterial.map?.dispose();
    meshMaterial.map = newImage;
  }

  gotoNextImage() {
    this.currImageIndex++;
    if (this.currImageIndex >= this.images.length) this.currImageIndex = 0;

    this.updateImage(this.images[this.currImageIndex]);
  }

  gotoPrevImage() {
    this.currImageIndex--;
    if (this.currImageIndex < 0) this.currImageIndex = this.images.length - 1;

    this.updateImage(this.images[this.currImageIndex]);
  }

  updateImageTextures() {
    const imageSrcs = document
      .querySelectorAll<HTMLImageElement>(this.data.imageQuery, this.el.sceneEl)
      .map((x) => x.src);

    this.images = [];

    imageSrcs.forEach((src) => {
      const texture = new THREE.TextureLoader().load(
        src,
        loadTextureToAspect(this.data.width, this.data.height)
      );
      texture.wrapS = THREE.ClampToEdgeWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      this.images.push(texture);
    });
  }

  update() {
    if (!this.displayPlane || !this.nextButton || !this.prevButton) return;

    const percentageOfVideoPlane = 0.2;
    const smallestDim =
      this.data.width < this.data.height ? this.data.width : this.data.height;

    this.displayPlane.setAttribute('width', this.data.width);
    this.displayPlane.setAttribute('height', this.data.height);
    this.nextButton.setAttribute('width', smallestDim * percentageOfVideoPlane);
    this.nextButton.setAttribute(
      'height',
      smallestDim * percentageOfVideoPlane
    );
    this.prevButton.setAttribute('width', smallestDim * percentageOfVideoPlane);
    this.prevButton.setAttribute(
      'height',
      smallestDim * percentageOfVideoPlane
    );

    this.updateImageTextures();
    if (this.displayPlane.getObject3D('mesh')) {
      this.updateImage(this.images[0]);

      this.currImageIndex = 0;
      if (this.autoplayInterval) {
        clearInterval(this.autoplayInterval);
        this.autoplayInterval = undefined;
      }

      if (this.data.autoplay) {
        this.autoplayInterval = setInterval(
          () => this.gotoNextImage(),
          this.data.autoplayDuration
        );
      }
    }
  }

  updateClickable() {
    const isVisible = this.el.getAttribute('visible');
    if (this.el.classList.contains('clickable')) {
      if (!isVisible) this.el.classList.remove('clickable');
    } else {
      if (isVisible) this.el.classList.add('clickable');
    }
  }

  updateAnimations(
    animDuration: number = this.animDuration,
    animEasing: string = this.animEasing
  ) {
    this.el.setAttribute('animation__mouseenter_color', {
      property: 'material.color',
      to: '#b0b0b0',
      startEvents: 'mouseenter',
      dur: animDuration,
      easing: animEasing,
    });
    this.el.setAttribute('animation__mouseleave_color', {
      property: 'material.color',
      to: '#FFFFFF',
      startEvents: 'mouseleave',
      dur: animDuration,
      easing: animEasing,
    });
    this.el.setAttribute('animation__mouseclick_color', {
      property: 'material.color',
      from: '#828282',
      to: '#b0b0b0',
      startEvents: 'click',
      dur: animDuration,
      easing: animEasing,
    });
  }
}

AFRAME.registerPrimitive('a-slide-show', {
  defaultComponents: {
    'slide-show': {},
  },
  mappings: {
    'image-query': 'slide-show.imageQuery',
    loop: 'slide-show.loop',
    autoplay: 'slide-show.autoplay',
    'autoplay-duration': 'slide-show.autoplayDuration',
    width: 'slide-show.width',
    height: 'slide-show.height',
  },
});
