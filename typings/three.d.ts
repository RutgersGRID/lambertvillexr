import * as THree from 'three';
declare module 'three' {
  import Entity from 'aframe';
  interface Object3D {
    el: Entity;
  }
}
