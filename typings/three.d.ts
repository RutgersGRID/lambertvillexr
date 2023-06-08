import * as Three from 'three';
import { Entity } from 'aframe';
declare module 'three' {
  interface Object3D {
    el: Entity;
  }
}
