AFRAME.registerPrimitive('a-animated-cursor', {
  defaultComponents: {
    cursor: {
      fuseTimeout: '500',
    },
    raycaster: {
      objects: '.clickable',
    },
    geometry: {
      primitive: 'ring',
      radiusOuter: 0.016,
      radiusInner: 0.01,
      segmentsTheta: 32,
    },
    material: {
      color: '#FFF',
      shader: 'flat',
    },
    position: { x: 0, y: 0, z: -1 },
    animation__fusing: {
      property: 'scale',
      startEvents: 'fusing',
      easing: 'easeInCubic',
      dur: 500,
      from: '1 1 1',
      to: '0.1 0.1 0.1',
    },
    animation__click: {
      property: 'scale',
      startEvents: 'click',
      easing: 'easeInCubic',
      dur: 150,
      to: '1 1 1',
      from: '0.1 0.1 0.1',
    },
    animation__mouseleave: {
      property: 'scale',
      startEvents: 'mouseleave',
      easing: 'easeInCubic',
      dur: 500,
      to: '1 1 1',
    },
  },
});

export default {};
