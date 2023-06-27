import {
  BaseComponent,
  component,
} from '@/manual_modules/aframe-class-components';
import { Entity, Schema } from 'aframe';
import document from '@/utils/document';
import '@/manual_modules/aframe-troika-text';

export type TextBoxComponentData = {
  title: string;
  description: string;
  width: number;
  height: number;
  autofitHeight: boolean;
};

const fontSize = 0.2;
const outlineWidth = 0.2;
const descriptionTopMargin = 0.2;
const titleLineHeight = 0.2;

@component('text-box')
export class TextBoxComponent extends BaseComponent<TextBoxComponentData> {
  static schema: Schema<TextBoxComponentData> = {
    title: { default: '' },
    description: { default: '' },
    width: { default: 1 },
    height: { default: 1 },
    autofitHeight: { default: true },
  };

  backgroundPlane?: Entity;
  titleText?: Entity;
  descriptionText?: Entity;

  init() {
    this.backgroundPlane = document.createEntity('a-plane');
    configureBackgroundEntity(this.backgroundPlane);
    setRenderOrder(this.backgroundPlane.object3D, -20);

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
    this.descriptionText.addEventListener('loaded', () => {
      const textMesh = this.descriptionText?.getObject3D('mesh') as any;
      textMesh.addEventListener('synccomplete', () => {
        if (this.data.autofitHeight) this.updateTitleDescriptionSizing();
      });
    });

    this.el.appendChild(this.backgroundPlane);
    this.el.appendChild(this.titleText);
    this.el.appendChild(this.descriptionText);
  }

  update() {
    if (!this.titleText || !this.descriptionText || !this.backgroundPlane)
      return;

    const title = this.data.title;
    const description = this.data.description;

    const isOnlyTitle = title != '' && description == '';
    const titleAndDescTopMarginHeight =
      title != '' ? titleLineHeight + descriptionTopMargin : 0;
    const descriptionHeight = this.data.height - titleAndDescTopMarginHeight;

    this.backgroundPlane.setAttribute(
      'width',
      this.data.width + 2 * outlineWidth
    );
    this.backgroundPlane.setAttribute(
      'height',
      this.data.height + 2 * outlineWidth
    );

    this.descriptionText.setAttribute('position', {
      y: this.data.height / 2 - titleAndDescTopMarginHeight,
    });
    this.descriptionText.setAttribute(
      'clip-rect',
      `${-this.data.width} ${-descriptionHeight} ${this.data.width} 0`
    );
    this.descriptionText.setAttribute('value', description);
    this.descriptionText.setAttribute('max-width', this.data.width);

    this.titleText.setAttribute('value', title);
    this.titleText.setAttribute('position', {
      y: isOnlyTitle ? 0 : this.data.height / 2,
    });
    this.titleText.setAttribute('baseline', isOnlyTitle ? 'center' : 'top');
  }

  updateTitleDescriptionSizing() {
    if (!this.descriptionText || !this.titleText || !this.backgroundPlane)
      return;

    const descriptionTextMesh = this.descriptionText.getObject3D('mesh') as any;
    const descriptionTextHeight = this.data.description
      ? Math.abs(descriptionTextMesh.textRenderInfo.visibleBounds[1])
      : 0;

    const isOnlyTitle = this.data.title != '' && this.data.description == '';
    const titleAndDescTopMarginHeight =
      this.data.title != '' ? titleLineHeight + descriptionTopMargin : 0;
    const trueDescriptionTitleTextHeight =
      descriptionTextHeight + titleAndDescTopMarginHeight;
    const useMaxDescriptionHeight =
      trueDescriptionTitleTextHeight > this.data.height;

    if (useMaxDescriptionHeight) {
      this.descriptionText.setAttribute(
        'clip-rect',
        `${-this.data.width / 2} ${
          (this.data.title != '' ? titleAndDescTopMarginHeight : 0) -
          this.data.height
        } ${this.data.width / 2} 0`
      );
    } else {
      this.descriptionText.removeAttribute('clip-rect');
    }

    const usedDescriptionHeight = useMaxDescriptionHeight
      ? this.data.height
      : trueDescriptionTitleTextHeight;

    this.backgroundPlane.setAttribute(
      'height',
      usedDescriptionHeight + 2 * outlineWidth
    );
    this.titleText.setAttribute('position', {
      y: isOnlyTitle ? 0 : usedDescriptionHeight / 2,
    });
    this.descriptionText.setAttribute('position', {
      y: usedDescriptionHeight / 2 - titleAndDescTopMarginHeight,
    });
  }
}

AFRAME.registerPrimitive('a-text-box', {
  defaultComponents: {
    'text-box': {},
  },
  mappings: {
    title: 'text-box.title',
    description: 'text-box.description',
    width: 'text-box.width',
    height: 'text-box.height',
    'autofit-height': 'text-box.autofitHeight',
  },
});
