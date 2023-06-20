<script setup lang="ts">
definePageMeta({
  pageName: 'Union Street Bridge',
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
    <video
        id="trash-video"
        preload="auto"
        width="160"
        height="90"
        loop="true"
        :src="usePublic('assets/sites/site3/trash-video.mp4')"
        crossorigin="anonymous"
    ></video>
      <audio
        id="interview"
        :src="usePublic('assets/sites/site3/interview3.mp3')"
      ></audio>
    <a-asset-item id="boat" :src="usePublic('assets/sites/site3/boat.glb')"></a-asset-item>
    </a-assets>
    <a-entity rotation="0 0 0">
      <a-playback-video
      src="#trash-video"
      position="0 0 -10"
    ></a-playback-video>
    </a-entity>
    <a-entity rotation="0 90 0">
      <a-entity position="0 0 -10" rotation="0 90 0">
        <a-gltf-model src="#boat" rotation="0 0 20" position="5.293 -0.03623 6.46695"></a-gltf-model>
      </a-entity>
    </a-entity>
    <a-entity rotation="0 -90 0">
      <a-audio-player
      src="#interview"
      position="0 1 -10"
      title="Interview"
    ></a-audio-player>
    </a-entity>
    <a-entity camera look-controls wasd-controls="enabled:false" position="0 1.6 0">
      <a-animated-cursor></a-animated-cursor>
    </a-entity>
  </AFrameScene>
</template>
