import {
  BaseComponent,
  component,
} from '@/manual_modules/aframe-class-components';
import { Entity, Schema } from 'aframe';
import document from '@/utils/document';
import { loadTextureToAspect } from '@/utils/three';
import './button';
import { configureBackgroundEntity, setRenderOrder } from '@/utils/three';

const THREE = AFRAME.THREE;

export interface SlideShowComponentData {
  imageQuery: string;
  loop: boolean;
  autoplay: boolean;
  autoplayDuration: number;
  width: number;
  height: number;
  showControls: boolean;
  showDescription: boolean;
  descriptionHeight: number;
  restartAutoplayDelay: number;
  currentSlide: number;
}

type Slide = {
  texture: THREE.Texture;
  title: string;
  description: string;
};

const fontSize = 0.2;
const lineHeight = fontSize * 1.2;
const outlineWidth = 0.2;
const titleHeight = 0.2;
const titleMargin = 0.2;
const descriptionMargin = 0.2;
const percentageOfVideoPlane = 0.2;

const slideDotRadius = 0.075;
const slideDotSpacing = 0.4;
const slideDotBottomMargin = 0.2;
const slideDotActiveColor = '#FFF';
const slideDotActiveOpacity = 1;
const slideDotInactiveColor = '#b0b0b0';
const slideDotInactiveOpacity = 0.8;

@component('slide-show')
export class SlideShowComponent extends BaseComponent<SlideShowComponentData> {
  static schema: Schema<SlideShowComponentData> = {
    imageQuery: { default: '' },
    loop: { default: true },
    autoplay: { default: false },
    autoplayDuration: { default: 3000 },
    width: { default: 8 },
    height: { default: 4.5 },
    showControls: { default: true },
    showDescription: { default: true },
    descriptionHeight: { default: 1 },
    restartAutoplayDelay: { default: 5000 },
    currentSlide: { default: 0 },
  };

  animDuration: number = 200;
  animEasing: string = 'easeOutCubic';
  backgroundPlane?: Entity;
  displayPlane?: Entity;
  prevButtonBg?: Entity;
  prevButton?: Entity;
  nextButton?: Entity;
  nextButtonBg?: Entity;
  titleText?: Entity;
  descriptionText?: Entity;
  slides: Slide[] = [];
  autoplayInterval?: NodeJS.Timer;
  slideDots: Entity[] = [];
  restartAutoplayTimeout?: NodeJS.Timeout;

  init() {
    this.displayPlane = document.createEntity('a-image');
    this.displayPlane.setAttribute('side', 'double');
    this.displayPlane.setAttribute('transparent', true);
    setRenderOrder(this.displayPlane.object3D, 5);

    this.backgroundPlane = document.createEntity('a-plane');
    configureBackgroundEntity(this.backgroundPlane);
    setRenderOrder(this.backgroundPlane.object3D, 0);

    this.prevButtonBg = document.createEntity('a-circle');
    configureBackgroundEntity(this.prevButtonBg, -0.075);
    setRenderOrder(this.prevButtonBg.object3D, 0);

    this.prevButton = document.createEntity('a-button');
    this.prevButton.setAttribute('src', usePublic('assets/images/play.png'));
    this.prevButton.addEventListener('click', () => {
      this.onClickInterruptAutoplay();
      this.gotoPrevImage();
    });
    this.prevButton.setAttribute('scale', '-1 1 1');
    this.prevButton.appendChild(this.prevButtonBg);
    setRenderOrder(this.prevButton.object3D, 10);

    this.nextButtonBg = document.createEntity('a-circle');
    configureBackgroundEntity(this.nextButtonBg, -0.075);
    setRenderOrder(this.nextButtonBg.object3D, 0);

    this.nextButton = document.createEntity('a-button');
    this.nextButton.setAttribute('src', usePublic('assets/images/play.png'));
    this.nextButton.addEventListener('click', () => {
      this.onClickInterruptAutoplay();
      this.gotoNextImage();
    });
    this.nextButton.appendChild(this.nextButtonBg);
    setRenderOrder(this.nextButton.object3D, 10);

    this.titleText = document.createEntity('a-troika-text');
    this.titleText.setAttribute('fontSize', fontSize);
    this.titleText.setAttribute(
      'font',
      usePublic('assets/fonts/Raleway/Raleway-Bold.ttf')
    );
    this.titleText.setAttribute('color', 'white');
    this.titleText.setAttribute('baseline', 'top');
    setRenderOrder(this.titleText.object3D, 5);

    this.descriptionText = document.createEntity('a-troika-text');
    this.descriptionText.setAttribute('fontSize', fontSize);
    this.descriptionText.setAttribute(
      'font',
      usePublic('assets/fonts/Raleway/Raleway-Regular.ttf')
    );
    this.descriptionText.setAttribute('color', 'white');
    this.descriptionText.setAttribute('baseline', 'top');
    setRenderOrder(this.descriptionText.object3D, 5);

    this.descriptionText.addEventListener('loaded', () => {
      const textMesh = this.descriptionText?.getObject3D('mesh') as any;
      textMesh.addEventListener('synccomplete', () => {
        this.updateTitleDescriptionSizing();
      });
    });

    this.el.appendChild(this.backgroundPlane);
    this.el.appendChild(this.displayPlane);
    this.el.appendChild(this.prevButton);
    this.el.appendChild(this.nextButton);
    this.el.appendChild(this.descriptionText);
    this.el.appendChild(this.titleText);

    this.displayPlane.addEventListener('loaded', () => {
      setTimeout(() => {
        this.update();
      }, 0);
    });

    // console.log('init slide show');
    // console.log('\tprevButton', this.prevButton.object3D);
    // console.log('\tnextButton', this.nextButton.object3D);
    // console.log('\tdisplay', this.displayPlane.object3D);
    // console.log('\tbg', this.backgroundPlane.object3D);
  }

  currentSlide() {
    return this.slides[this.data.currentSlide];
  }

  updateTitleDescriptionSizing() {
    if (!this.descriptionText || !this.titleText || !this.backgroundPlane)
      return;

    const descriptionTextMesh = this.descriptionText.getObject3D('mesh') as any;
    const descriptionTextHeight = this.currentSlide().description
      ? Math.abs(descriptionTextMesh.textRenderInfo.visibleBounds[1]) +
        descriptionMargin
      : 0;

    const trueTitleHeight = this.currentSlide().title
      ? titleHeight + titleMargin
      : 0;

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

  updateSlide() {
    if (!this.displayPlane || !this.descriptionText || !this.titleText) return;

    const slide = this.currentSlide();

    for (let i = 0; i < this.slideDots.length; i++) {
      this.slideDots[i].setAttribute(
        'color',
        i == this.data.currentSlide
          ? slideDotActiveColor
          : slideDotInactiveColor
      );
      this.slideDots[i].setAttribute(
        'opacity',
        i == this.data.currentSlide
          ? slideDotActiveOpacity
          : slideDotInactiveOpacity
      );
    }

    this.titleText.setAttribute('value', slide.title);
    this.descriptionText.setAttribute('value', slide.description);

    const mesh = this.displayPlane.getObject3D('mesh') as THREE.Mesh;
    const meshMaterial = mesh.material as THREE.MeshBasicMaterial;
    meshMaterial.map?.dispose();
    meshMaterial.map = slide.texture;
  }

  gotoNextImage() {
    this.data.currentSlide++;
    if (this.data.currentSlide >= this.slides.length)
      this.data.currentSlide = 0;

    this.updateSlide();
  }

  gotoPrevImage() {
    this.data.currentSlide--;
    if (this.data.currentSlide < 0)
      this.data.currentSlide = this.slides.length - 1;

    this.updateSlide();
  }

  updateSlidesArray() {
    this.slides = [];

    const imageElements = document.querySelectorAll<HTMLImageElement>(
      this.data.imageQuery,
      this.el.sceneEl
    );

    for (const imageElem of imageElements) {
      const texture = new THREE.TextureLoader().load(
        imageElem.src,
        loadTextureToAspect(this.data.width, this.data.height)
      );
      texture.wrapS = THREE.ClampToEdgeWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      this.slides.push({
        texture,
        title: imageElem.getAttribute('title') ?? '',
        description: imageElem.getAttribute('description') ?? '',
      });
    }
  }

  update() {
    if (
      !this.displayPlane ||
      !this.nextButton ||
      !this.prevButton ||
      !this.backgroundPlane ||
      !this.prevButtonBg ||
      !this.nextButtonBg ||
      !this.descriptionText ||
      !this.titleText
    )
      return;

    const smallestDim =
      this.data.width < this.data.height ? this.data.width : this.data.height;

    this.displayPlane.setAttribute('width', this.data.width);
    this.displayPlane.setAttribute('height', this.data.height);

    const buttonSize = smallestDim * percentageOfVideoPlane;

    this.nextButtonBg.setAttribute('radius', buttonSize / 2 + outlineWidth);
    this.nextButton.setAttribute('width', buttonSize);
    this.nextButton.setAttribute('height', buttonSize);

    this.prevButtonBg.setAttribute('radius', buttonSize / 2 + outlineWidth);
    this.prevButton.setAttribute('width', buttonSize);
    this.prevButton.setAttribute('height', buttonSize);

    this.nextButtonBg.setAttribute('visible', this.data.showControls);
    this.nextButton.setAttribute('visible', this.data.showControls);
    this.prevButtonBg.setAttribute('visible', this.data.showControls);
    this.prevButton.setAttribute('visible', this.data.showControls);

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

    this.descriptionText.setAttribute('visible', this.data.showDescription);
    this.descriptionText.setAttribute('width', this.data.width);
    this.descriptionText.setAttribute('max-width', this.data.width);

    this.backgroundPlane.setAttribute(
      'width',
      this.data.width + 2 * outlineWidth
    );

    this.prevButton.setAttribute('position', {
      x: -this.data.width / 2,
      y: 0,
      z: 0.05,
    });
    this.nextButton.setAttribute('position', {
      x: this.data.width / 2,
      y: 0,
      z: 0.05,
    });

    this.updateSlidesArray();

    for (const dot of this.slideDots) this.el.removeChild(dot);
    this.slideDots = [];
    for (let i = 0; i < this.slides.length; i++) {
      const slideDot = document.createEntity<any>('a-circle');
      slideDot.setAttribute('radius', slideDotRadius);
      slideDot.setAttribute('position', {
        x: (i - this.slides.length / 2) * slideDotSpacing,
        y: -this.data.height / 2 + slideDotRadius + slideDotBottomMargin,
        z: 0.1,
      });
      slideDot.setAttribute('material', {
        transparent: true,
      });
      setRenderOrder(slideDot.object3D, 15);
      const slideDotBg = document.createEntity('a-circle');
      slideDotBg.setAttribute('radius', slideDotRadius * 1.75);
      slideDotBg.setAttribute('material', {
        color: 'black',
        opacity: 0.75,
        transparent: true,
      });
      slideDotBg.setAttribute('position', {
        z: -0.025,
      });
      setRenderOrder(slideDotBg.object3D, 14);
      slideDot.append(slideDotBg);

      this.el.appendChild(slideDot);
      this.slideDots.push(slideDot);
    }

    if (
      this.data.currentSlide < 0 ||
      this.data.currentSlide >= this.slides.length
    )
      this.data.currentSlide = 0;

    if (this.displayPlane.getObject3D('mesh')) {
      this.updateSlide();

      if (this.restartAutoplayTimeout)
        clearTimeout(this.restartAutoplayTimeout);

      this.stopAutoplayInterval();
      this.startAutoplayInterval();
    }
  }

  onClickInterruptAutoplay() {
    if (!this.data.autoplay) return;

    if (this.restartAutoplayTimeout) clearTimeout(this.restartAutoplayTimeout);

    this.stopAutoplayInterval();
    this.restartAutoplayTimeout = setTimeout(() => {
      this.startAutoplayInterval();
    }, this.data.restartAutoplayDelay);
  }

  stopAutoplayInterval() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = undefined;
    }
  }

  startAutoplayInterval() {
    if (this.data.autoplay) {
      this.autoplayInterval = setInterval(
        () => this.gotoNextImage(),
        this.data.autoplayDuration
      );
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
    'show-controls': 'slide-show.showControls',
    'current-slide': 'slide-show.currentSlide',
    'description-height': 'slide-show.descriptionHeight',
    'show-description': 'slide-show.showDescription',
  },
});
