import { Entity } from 'aframe';

export function loadTextureToAspect(planeWidth: number, planeHeight: number) {
  return function (texture: THREE.Texture) {
    const planeAspect = planeWidth / planeHeight;
    const imageAspect = texture.image.width / texture.image.height;
    const aspect = imageAspect / planeAspect;

    texture.offset.x = aspect > 1 ? (1 - 1 / aspect) / 2 : 0;
    texture.repeat.x = aspect > 1 ? 1 / aspect : 1;

    texture.offset.y = aspect > 1 ? 0 : (1 - aspect) / 2;
    texture.repeat.y = aspect > 1 ? 1 : aspect;
  };
}

export function fixTextureToAspect(
  texture: THREE.Texture,
  planeWidth: number,
  planeHeight: number
) {
  const planeAspect = planeWidth / planeHeight;
  const imageAspect = texture.image.width / texture.image.height;
  const aspect = imageAspect / planeAspect;

  texture.offset.x = aspect > 1 ? (1 - 1 / aspect) / 2 : 0;
  texture.repeat.x = aspect > 1 ? 1 / aspect : 1;

  texture.offset.y = aspect > 1 ? 0 : (1 - aspect) / 2;
  texture.repeat.y = aspect > 1 ? 1 : aspect;
}

export function getBackgroundMaterial() {
  return {
    side: 'double',
    opacity: 0.75,
    shader: 'flat',
    color: 'black',
    transparent: true,
  };
}

export function configureBackgroundEntity(
  entity: Entity,
  zOffset: number = -0.05
) {
  entity.setAttribute('material', getBackgroundMaterial());
  entity.setAttribute('position', {
    z: zOffset,
  });
}
