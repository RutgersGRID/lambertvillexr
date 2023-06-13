<script setup lang="ts">
async function loadSystems() {
  //@ts-ignore
  await import('aframe-sun-sky');
  await import('@/aframe/components/button');
}
</script>

<template>
  <AFrameScene :load-systems="loadSystems">
    <a-sun-sky material="sunPosition: -0.2 4 -5"></a-sun-sky>
    <a-assets>
      <img id="my-button" :src="usePublic('assets/images/play.png')" />
    </a-assets>

    <a-button src="#my-button" position="0 1.6 -10"></a-button>
    <a-entity camera look-controls wasd-controls position="0 1.6 0">
      <a-animated-cursor></a-animated-cursor>
    </a-entity>
  </AFrameScene>
</template>
