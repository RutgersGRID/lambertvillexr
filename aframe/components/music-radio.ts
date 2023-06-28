import { Schema } from 'aframe';
import {
  BaseComponent,
  component,
} from '~/manual_modules/aframe-class-components';

export type MusicRadioComponentData = {
  musicQuery: string;
  shuffle: boolean;
  volume: number;
  enabled: boolean;
};

@component('music-radio')
export class MusicRadioComponent extends BaseComponent<MusicRadioComponentData> {
  static schema: Schema<MusicRadioComponentData> = {
    musicQuery: { default: '.music' },
    shuffle: { default: true },
    volume: { default: 0.5 },
    enabled: { default: true },
  };

  audioElems: HTMLAudioElement[] = [];
  currAudioElemIndex: number = 0;
  currPlayingMediaElemCount: number = 0;

  canPlay() {
    return this.currPlayingMediaElemCount == 0;
  }

  getCurrAudioElem() {
    return this.audioElems[this.currAudioElemIndex];
  }

  init() {
    if (!this.el.sceneEl) return;

    this.audioElems = Array.from(
      document.querySelectorAll(this.data.musicQuery)
    ) as HTMLAudioElement[];

    for (const audioElem of this.audioElems) {
      audioElem.volume =
        Number(audioElem.getAttribute('volume') ?? 1) * this.data.volume;
      audioElem.addEventListener('ended', () => {
        if (audioElem != this.getCurrAudioElem()) return;
        this.currAudioElemIndex =
          (this.currAudioElemIndex + 1) % this.audioElems.length;
        this.startSong();
      });
    }

    this.currAudioElemIndex = this.data.shuffle
      ? Math.floor(Math.random() * this.audioElems.length)
      : 0;

    if (this.el.sceneEl.getAttribute('scene-entered')) this.onSceneEntered();
    else {
      this.el.sceneEl.addEventListener('scene-entered', () => {
        setTimeout(() => {
          this.onSceneEntered();
        }, 0);
      });
    }
  }

  update() {
    if (this.canPlay()) {
      if (!this.data.enabled) {
        this.getCurrAudioElem().pause();
      } else {
        this.getCurrAudioElem().play();
      }
    }
  }

  onSceneEntered() {
    this.setupMediaElemListeners();
    this.startSong();
  }

  setupMediaElemListeners() {
    const onMediaPlayed = () => {
      if (this.data.enabled && this.canPlay()) {
        this.getCurrAudioElem().pause();
      }
      this.currPlayingMediaElemCount++;
    };
    const onMediaStopped = () => {
      this.currPlayingMediaElemCount--;
      if (this.data.enabled && this.canPlay()) {
        this.getCurrAudioElem().play();
      }
    };

    const mediaElems = [
      ...(document.querySelectorAll('audio') as NodeListOf<HTMLMediaElement>),
      ...(document.querySelectorAll('video') as NodeListOf<HTMLMediaElement>),
    ];

    for (const mediaElem of mediaElems) {
      if (
        this.audioElems.includes(mediaElem) ||
        mediaElem.getAttribute('muted')
      )
        continue;
      mediaElem.addEventListener('play', () => onMediaPlayed());
      mediaElem.addEventListener('pause', () => onMediaStopped());
      mediaElem.addEventListener('ended', () => onMediaStopped());
    }
  }

  startSong() {
    this.getCurrAudioElem().currentTime = 0;
    this.getCurrAudioElem().play();
  }
}

AFRAME.registerPrimitive('a-music-radio', {
  defaultComponents: {
    'music-radio': {},
  },
  mappings: {
    'music-query': 'music-radio.musicQuery',
    shuffle: 'music-radio.shuffle',
  },
});
