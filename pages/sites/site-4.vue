<script setup lang="ts">
definePageMeta({
  pageName: 'Hibernia Firehouse',
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
      <audio id="interview" :src="usePublic('assets/sites/site4/interview4.mp3')" preload="auto"></audio>
      <a-asset-item id="wall1" :src="usePublic('assets/sites/site4/wall.glb')"></a-asset-item>
      <a-asset-item id="wall2" :src="usePublic('assets/sites/site4/wall.glb')"></a-asset-item>
      <a-asset-item id="rail1" :src="usePublic('assets/sites/site4/rail.glb')"></a-asset-item>
      <a-asset-item id="rail2" :src="usePublic('assets/sites/site4/rail.glb')"></a-asset-item>
      <a-asset-item id="post1" :src="usePublic('assets/sites/site4/post.glb')"></a-asset-item>
      <a-asset-item id="post2" :src="usePublic('assets/sites/site4/post.glb')"></a-asset-item>
    </a-assets>
    <a-gltf-model src=#wall1 position="-16 -1 1"></a-gltf-model>
    <a-gltf-model src=#wall2 position="-16 -6 6"></a-gltf-model>
    <a-gltf-model src=#rail1 position="-16 -3 3"></a-gltf-model>
    <a-gltf-model src=#rail2 position="-16 -4 4"></a-gltf-model>
    <a-gltf-model src=#post1 position="-16 -5 5"></a-gltf-model>
    <a-gltf-model src=#post2 position="-16 -7 7"></a-gltf-model>
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