import { BaseSystem, system } from '~/manual_modules/aframe-class-components';
import * as document from '@/utils/document';
import { VideoControlsComponent } from '../components/video-controls';
import { Entity } from 'aframe';

@system('style-video-controls')
export class StyleVideoControlsSystem extends BaseSystem {
  init() {
    this.el.addEventListener('loaded', (event) => {
      const videoControlsElem = document.querySelector<
        Entity<{
          'video-controls': VideoControlsComponent;
        }>
      >('[video-controls]');
      if (!videoControlsElem) return;
      const videoControls = videoControlsElem.components['video-controls'];
      const elemStyles = getComputedStyle(videoControlsElem);
      const themeBlue = elemStyles.getPropertyValue('--theme-blue');
      const themeTan = elemStyles.getPropertyValue('--theme-tan');
      const themeWhite = elemStyles.getPropertyValue('--theme-white');
      const themeBlack = elemStyles.getPropertyValue('--theme-black');
      videoControls.data.infoTextTop = 'Look + click on play or bar ';
      videoControls.data.infoTextBottom = '';
      videoControls.data.backgroundColor = themeBlue;
      videoControls.data.barColor = themeTan;
      videoControls.data.textColor = themeWhite;
      videoControls.data.infoTextFont = '500 2em Raleway';
      videoControls.data.statusTextFont = '800 2em Raleway';
      videoControls.data.timeTextFont = '800 3em Raleway';
    });
  }
}
