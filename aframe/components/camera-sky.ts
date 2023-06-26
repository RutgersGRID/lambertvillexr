import {
  BaseComponent,
  component,
} from '@/manual_modules/aframe-class-components';
import { Entity } from 'aframe';
import document from '@/utils/document';

@component('camera-sky')
export class CameraSkyComponent extends BaseComponent {
  videoElem?: HTMLVideoElement;
  videosphere?: Entity;

  init() {
    this.videoElem = document.createElement<HTMLVideoElement>('video');
    this.videosphere = document.createEntity('a-videosphere');
    this.videosphere.id = 'camera-sky-sky';
    this.el.appendChild(this.videoElem);
    this.el.appendChild(this.videosphere);

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (!this.videoElem || !this.videosphere) return;
          console.log('stream loaded');
          this.videoElem.srcObject = stream;
          this.videosphere.setAttribute('src', '#camera-sky-sky');
        })
        .catch((error) => {
          console.log('Something went wrong!');
        });
    }
  }
}

AFRAME.registerPrimitive('a-camera-sky', {
  defaultComponents: {
    'camera-sky': {},
  },
});
