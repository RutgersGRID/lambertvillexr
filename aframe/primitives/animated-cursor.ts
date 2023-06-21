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
    position: { x: 0, y: 0, z: -0.1 },
    scale: { x: 0.1, y: 0.1, z: 0.1 },
    animation__fusing: {
      property: 'scale',
      startEvents: 'fusing',
      easing: 'easeInCubic',
      dur: 500,
      from: '0.1 0.1 0.1',
      to: '0.01 0.01 0.01',
    },
    animation__click: {
      property: 'scale',
      startEvents: 'click',
      easing: 'easeInCubic',
      dur: 150,
      to: '0.1 0.1 0.1',
      from: '0.01 0.01 0.01',
    },
    animation__mouseleave: {
      property: 'scale',
      startEvents: 'mouseleave',
      easing: 'easeInCubic',
      dur: 500,
      to: '0.1 0.1 0.1',
    },
  },
});

export default {};
