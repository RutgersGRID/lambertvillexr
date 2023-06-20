<script setup lang="ts">
async function loadSystems() {
  //@ts-ignore
  await import('aframe-sun-sky');
  await import('@/aframe/components/three-sky');
  await import('@/aframe/components/three-water');
  await import('@/aframe/systems/three-water-controller');
  await import('@/aframe/components/three-layer');
}
</script>

<template>
  <AFrameScene :load-systems="loadSystems">
    <!-- <a-three-sky></a-three-sky> -->
    <a-sun-sky
      material="sunPosition: 0 1 0"
      three-layer="layers: 31; desktopLayers: 1;"
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
