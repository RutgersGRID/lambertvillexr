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
      <a-asset-item id="Person1" :src="usePublic('assets/sites/site6/Person1.glb')"></a-asset-item>
      <a-asset-item id="Person2" :src="usePublic('assets/sites/site6/Person2.glb')"></a-asset-item>
      <a-asset-item id="Person3" :src="usePublic('assets/sites/site6/Person3.glb')"></a-asset-item>
      <a-asset-item id="Person4" :src="usePublic('assets/sites/site6/Person4.glb')"></a-asset-item>
      <a-asset-item id="Person5" :src="usePublic('assets/sites/site6/Person5.glb')"></a-asset-item>
      <a-asset-item id="Person6" :src="usePublic('assets/sites/site6/Person6.glb')"></a-asset-item>
    </a-assets>
    <a-gltf-model src=#Person1 position="1 1 1"></a-gltf-model>
    <a-gltf-model src=#Person2 position="6 6 6"></a-gltf-model>
    <a-gltf-model src=#Person3 position="3 3 3"></a-gltf-model>
    <a-gltf-model src=#Person4 position="4 4 4"></a-gltf-model>
    <a-gltf-model src=#Person5 position="5 5 5"></a-gltf-model>
    <a-gltf-model src=#Person6 position="7 7 7"></a-gltf-model>
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