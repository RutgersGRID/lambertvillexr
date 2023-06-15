<script setup lang="ts">
definePageMeta({
  pageName: 'Curley Lane Blue Acres',
});

async function loadSystems() {
  //@ts-ignore
  await import('aframe-sun-sky');
  await import('@/aframe/components/button');
  await import('@/aframe/components/audio-player');
}
</script>

<template>
  <AFrameScene :load-systems="loadSystems">
    <a-sun-sky material="sunPosition: -0.2 4 -5"></a-sun-sky>
    <a-assets>
      <!-- <audio id="interview" :src="usePublic('assets/site6/interview6.mp3')"></audio> -->
      <audio id="interview" :src="usePublic('assets/sites/site6/interview6.mp3')" preload="auto"></audio>
    </a-assets>
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
    <a-audio-player
      src="#interview"
      position="0 1.6 -5"
      title="Interview"
    ></a-audio-player>
    <a-entity camera look-controls wasd-controls position="0 1.6 0">
      <a-animated-cursor></a-animated-cursor>
    </a-entity>
  </AFrameScene>
</template>