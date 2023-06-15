<script setup lang="ts">
definePageMeta({
  pageName: 'Curley Lane Blue Acres',
});

async function loadSystems() {
  //@ts-ignore
  await import('aframe-sun-sky');
}
</script>

<template>
  <AFrameScene :load-systems="loadSystems">
    <a-sun-sky material="sunPosition: -0.2 4 -5"></a-sun-sky>
    <a-entity
          position="0 0 0"
          gltf-model="/assets/sites/site6/Person1.glb"
    ></a-entity>
    <a-entity
          position="6 6 6"
          gltf-model="/assets/sites/site6/Person2.glb"
    ></a-entity>
    <a-entity
          position="2 2 2"
          gltf-model="/assets/sites/site6/Person3.glb"
    ></a-entity>
    <a-entity
          position="3 3 3"
          gltf-model="/assets/sites/site6/Person4.glb"
    ></a-entity>
    <a-entity
          position="4 4 4"
          gltf-model="/assets/sites/site6/Person5.glb"
    ></a-entity>
    <a-entity
          position="5 5 5"
          gltf-model="/assets/sites/site6/Person6.glb"
    ></a-entity>
    <a-entity camera look-controls wasd-controls position="0 1.6 0">
      <a-cursor
        id="cursor"
        color="white"
        rayOrigin="mouse"
        raycaster="objects: .clickable"
        fuseTimeout="500"
        animation__click="property: scale; startEvents: click; easing: easeInCubic; dur: 150; from: 0.1 0.1 0.1; to: 1 1 1"
        animation__fusing="property: scale; startEvents: fusing; easing: easeInCubic; dur: 1500; from: 1 1 1; to: 0.1 0.1 0.1"
        animation__mouseleave="property: scale; startEvents: mouseleave; easing: easeInCubic; dur: 500; to: 1 1 1"
      ></a-cursor>
    </a-entity>
  </AFrameScene>
</template>