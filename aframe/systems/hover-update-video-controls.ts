import { system, BaseSystem } from '@/manual_modules/aframe-class-components';
import * as document from '@/utils/document';
import { Entity } from 'aframe';
import { VideoControlsComponent } from './video-controls';

@system('hover-update-video-controls')
export default class HoverUpdateVideoControlsSystem extends BaseSystem {
  selectedVideo?: HTMLVideoElement;

  init() {
    document
      .querySelector<Entity>('a-scene')
      .addEventListener('loaded', (event) => {
        const camera = document.querySelector('[camera]');
        const videoControlElem = document.querySelector<
          Entity<{
            'video-controls': VideoControlsComponent;
          }>
        >('[video-controls]');
        const videoControls = videoControlElem.components['video-controls'];

        const videos = document.querySelectorAll<HTMLVideoElement & Entity>(
          '[video]'
        );
        for (let i = 0; i < videos.length; i++) {
          const currVideo = videos[i];
          currVideo.addEventListener('mouseenter', () => {
            this.selectedVideo = currVideo;
            const currVideoSrc = currVideo.components['material'].data.src;
            videoControls.data.src = `#${currVideoSrc.id}`;
            videoControls.data.infoTextTop = currVideoSrc.id;
            videoControls.update();
          });

          currVideo.addEventListener('mouseleave', () => {
            if (this.selectedVideo == currVideo) this.selectedVideo = undefined;
          });
        }
      });
  }
}
