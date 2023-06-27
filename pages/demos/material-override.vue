<script setup lang="ts">
async function loadSystems() {
  //@ts-ignore
  await import('aframe-sun-sky');
  await import('@/aframe/components/material-override');
}
</script>

<template>
  <AFrameScene :load-systems="loadSystems">
    <a-sun-sky material="sunPosition: 0 1 0"></a-sun-sky>

    <a-assets>
      <a-asset-item
        id="person"
        :src="usePublic('assets/sites/site6/Person1.glb')"
      ></a-asset-item>
    </a-assets>

    <a-gltf-model
      src="#person"
      position="-2 0 -5"
      scale="0.3 0.3 0.3"
    ></a-gltf-model>
    <a-gltf-model
      src="#person"
      position="2 0 -5"
      material-override="color: black"
      scale="0.3 0.3 0.3"
    ></a-gltf-model>

    <a-entity
      camera
      look-controls="pointerLockEnabled: true"
      wasd-controls="enabled:false"
      position="0 1.6 0"
    >
      <a-animated-cursor></a-animated-cursor>
    </a-entity>
  </AFrameScene>
</template>
