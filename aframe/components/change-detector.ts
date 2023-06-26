import {
  BaseComponent,
  component,
} from '@/manual_modules/aframe-class-components';
import { Entity, Schema } from 'aframe';

export type ChangeDetectorComponentData = {
  recursive: boolean;
  enterVr: boolean;
  exitVr: boolean;
  elemTreeChanged: boolean;
  componentChanged: boolean;
  componentInitialized: boolean;
  componentRemoved: boolean;
  object3DSet: boolean;
  pause: boolean;
  play: boolean;
  stateAdded: boolean;
  stateRemoved: boolean;
  schemaChanged: boolean;
};

@component('change-detector')
export class ChangeDetectorComponent extends BaseComponent<ChangeDetectorComponentData> {
  static schema: Schema<ChangeDetectorComponentData> = {
    recursive: { default: false },
    enterVr: { default: false },
    exitVr: { default: false },
    elemTreeChanged: { default: false },
    componentChanged: { default: false },
    componentInitialized: { default: false },
    componentRemoved: { default: false },
    object3DSet: { default: false },
    pause: { default: false },
    play: { default: false },
    stateAdded: { default: false },
    stateRemoved: { default: false },
    schemaChanged: { default: false },
  };
  static multiple: boolean = true;

  isArMode: boolean = false;
  mutationObserver?: MutationObserver;
  bufferTimeout?: NodeJS.Timeout;
  bufferTimeoutEntities: Entity[] = [];

  init() {
    if (this.data.enterVr)
      this.el.sceneEl?.addEventListener('enter-vr', () => {
        if (this.el.sceneEl?.is('ar-mode')) {
          this.isArMode = true;
          this.emitChanged();
        }
      });
    if (this.data.exitVr)
      this.el.sceneEl?.addEventListener('exit-vr', () => {
        this.isArMode = false;
        this.emitChanged();
      });

    this.mutationObserver = new MutationObserver((mutationlist, observer) => {
      mutationlist.forEach((mutation) => {
        if (mutation.type == 'childList') {
          if (!this.bufferTimeout) {
            this.bufferTimeout = setTimeout(() => {
              for (const entity of this.bufferTimeoutEntities) {
                this.tryTrackEntity(entity);
              }
              if (this.data.elemTreeChanged) this.emitChanged();
              this.bufferTimeout = undefined;
              this.bufferTimeoutEntities = [];
            }, 0);
          }

          for (const entity of this.bufferTimeoutEntities) {
            if (entity == mutation.target) return;
          }
          this.bufferTimeoutEntities.push(mutation.target as Entity);
        }
      });
    });
    this.tryTrackEntity(this.el);

    this.mutationObserver.observe(this.el, {
      childList: true,
      subtree: this.data.recursive,
    });
  }

  tryTrackEntity(entity: Entity) {
    if (entity.hasAttribute('change-detector-tracked')) return;
    entity.setAttribute('change-detector-tracked', true);
    if (!entity.hasLoaded)
      entity.addEventListener('loaded', () => this.emitChanged());
    if (this.data.object3DSet) {
      entity.addEventListener('object3dset', () => {
        this.emitChanged();
      });
    }
    if (this.data.play)
      entity.addEventListener('play', () => this.emitChanged());
    if (this.data.pause)
      entity.addEventListener('pause', () => this.emitChanged());
    if (this.data.componentChanged)
      entity.addEventListener('componentchanged', () => this.emitChanged());
    if (this.data.componentInitialized)
      entity.addEventListener('componentinitialized', () => this.emitChanged());
    if (this.data.componentRemoved)
      entity.addEventListener('componentremoved', () => this.emitChanged());
    if (this.data.schemaChanged)
      entity.addEventListener('schemachanged', () => this.emitChanged());
    if (this.data.stateAdded)
      entity.addEventListener('stateadded', () => this.emitChanged());
    if (this.data.stateRemoved)
      entity.addEventListener('stateremoved', () => this.emitChanged());
  }

  emitChanged() {
    this.el.emit(`detectorchanged__${this.id}`);
  }

  remove() {
    this.mutationObserver?.disconnect();
  }
}
