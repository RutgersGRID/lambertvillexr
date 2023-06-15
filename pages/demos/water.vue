<script setup lang="ts">
async function loadSystems() {
  //@ts-ignore
  await import('aframe-sun-sky');
  await import('@/aframe/components/water');
  await import('@/aframe/systems/water-controller');
}
</script>

<template>
  <AFrameScene :load-systems="loadSystems">
    <a-sun-sky material="sunPosition: 0 1 0"></a-sun-sky>

    <!-- <a-plane
      water
      height="5"
      width="5"
      segmentsHeight="100"
      segmentsWidth="100"
      position="0 0 0"
      rotation="-90 0 0"
    ></a-plane> -->
    <a-water sun-direction="0 -1 0"></a-water>

    <a-box position="0 1.6 -5"></a-box>

    <a-entity camera look-controls wasd-controls position="0 1.6 0">
      <a-animated-cursor></a-animated-cursor>
    </a-entity>
  </AFrameScene>
</template>
