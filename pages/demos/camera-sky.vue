<script setup lang="ts">
async function loadSystems() {
  //@ts-ignore
  await import('aframe-sun-sky');
  await import('@/aframe/components/three-sky');
  await import('@/aframe/components/three-water');
  await import('@/aframe/systems/three-water-controller');
  await import('@/aframe/components/three-layer');
  await import('@/aframe/components/camera-sky');
}
</script>

<template>
  <AFrameScene :load-systems="loadSystems">
    <!-- <a-camera-sky></a-camera-sky> -->
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
