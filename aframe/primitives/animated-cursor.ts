AFRAME.registerPrimitive('a-animated-cursor', {
  defaultComponents: {
    raycaster: {
      objects: '.clickable',
    },
    cursor: {
      rayOrigin: 'mouse',
      fuseTimeout: '500',
    },
    geometry: {
      primitive: 'ring',
      radiusOuter: 0.016,
      radiusInner: 0.01,
      segmentsTheta: 32,
    },
    material: {
      color: 'white',
      shader: 'flat',
      opacity: 0.8,
    },
    position: {
      x: 0,
      y: 0,
      z: -1,
    },
    animation__click: {
      property: 'scale',
      startEvents: 'click',
      easing: 'easeInCubic',
      dur: 150,
      from: {
        x: 0.1,
        y: 0.1,
        z: 0.1,
      },
      to: {
        x: 1,
        y: 1,
        z: 1,
      },
    },
    animation__fusing: {
      property: 'scale',
      startEvents: 'fusing',
      easing: 'easeInCubic',
      dur: 1500,
      from: {
        x: 1,
        y: 1,
        z: 1,
      },
      to: {
        x: 0.1,
        y: 0.1,
        z: 0.1,
      },
    },
    animation__mouseleave: {
      property: 'scale',
      startEvents: 'mouseleave',
      easing: 'easeInCubic',
      dur: 500,
      to: {
        x: 1,
        y: 1,
        z: 1,
      },
    },
  },
});

export default {};
