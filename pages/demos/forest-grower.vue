<script setup lang="ts">
import { Entity } from 'aframe';

async function loadSystems() {
  //@ts-ignore
  await import('aframe-sun-sky');
  await import('@/aframe/components/forest-grower');
}
</script>

<template>
  <AFrameScene :load-systems="loadSystems">
    <a-sun-sky material="sunPosition: -0.2 4 -5"></a-sun-sky>

    <a-entity forest-grower="forestScale: 1" position="0 0 -5">
      <a-box position="1 0 1"></a-box>
      <a-box position="-1 0 -1"></a-box>
      <a-box position="-1 0 -3"></a-box>
    </a-entity>

    <a-entity
      camera
      look-controls="pointerLockEnabled: true"
      wasd-controls
      position="0 1.6 0"
    >
      <a-animated-cursor></a-animated-cursor>
    </a-entity>
  </AFrameScene>
</template>
