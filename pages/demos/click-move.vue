<script setup lang="ts">
import { Entity } from 'aframe';

async function loadSystems() {
  //@ts-ignore
  await import('aframe-sun-sky');
  await import('@/aframe/components/click-move');
}
</script>

<template>
  <AFrameScene :load-systems="loadSystems">
    <a-sun-sky material="sunPosition: -0.2 4 -5"></a-sun-sky>
    <a-box
      id="to-entity"
      color="white"
      width="1.5"
      height="1"
      depth="1"
      position="2 0 -3"
      rotation="0 30 0"
    ></a-box>
    <a-entity
      click-move="toEntity: #to-entity; spinOnToEntity: false; interactRadius: 1;"
      position="-2 0 -5"
    >
      <a-box color="red" width="2" height="0.75" depth="0.75"></a-box>
    </a-entity>
    <a-entity
      click-move="toEntity: #to-entity; spinOnToEntity: true; interactRadius: 1;"
      position="-2 3 -5"
    >
      <a-box color="blue" width="2" height="0.75" depth="0.75"></a-box>
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
