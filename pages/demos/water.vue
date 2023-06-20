<script setup lang="ts">
async function loadSystems() {
  //@ts-ignore
  await import('aframe-sun-sky');
  await import('@/aframe/components/three-sky');
  await import('@/aframe/components/three-water');
  await import('@/aframe/systems/three-water-controller');
  await import('@/aframe/components/three-layer');
}

// const THREE = AFRAME.THREE;
// const sun = new THREE.Vector3();

// // Defining the x, y and z value for our 3D Vector
// const theta = Math.PI * (0.49 - 0.5);
// const phi = 2 * Math.PI * (0.205 - 0.5);
// sun.x = Math.cos(phi);
// sun.y = Math.sin(phi) * Math.sin(theta);
// sun.z = Math.sin(phi) * Math.cos(theta);
</script>

<template>
  <AFrameScene
    :load-systems="loadSystems"
    :attributes="{
      renderer: 'antialias: false; logarithmicDepthBuffer: true',
    }"
  >
    <!-- <a-three-sky></a-three-sky> -->
    <a-sun-sky
      material="sunPosition: 0 1 0"
      three-layer="layers: 31;"
    ></a-sun-sky>
    <a-three-water
      sun-direction="0 -1 0"
      reflection-layer="31"
      three-layer="layers: 1"
    ></a-three-water>

    <a-box
      position="0 1.6 -5"
      material="shader: flat; color: white; opacity: 0.5"
      three-layer="layers: 1"
    ></a-box>

    <a-entity
      camera
      look-controls
      wasd-controls
      position="0 1.6 0"
      three-layer="layers: 1"
    >
      <a-animated-cursor></a-animated-cursor>
    </a-entity>
  </AFrameScene>
</template>
