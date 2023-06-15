<script setup lang="ts">
definePageMeta({
  pageName: 'Union Street Bridge',
});

async function loadSystems() {
  //@ts-ignore
  await import('aframe-sun-sky');
}
</script>

<template>
  <AFrameScene :load-systems="loadSystems">
    <a-sun-sky material="sunPosition: -0.2 4 -5"></a-sun-sky>
    <a-assets>
      <!-- <video
        id="trash-video"
        preload="auto"
        width="160"
        height="90"
        loop="true"
        :src="usePublic('assets/sites/site3/trash-video.mp4')"
        crossorigin="anonymous"
      ></video> -->
      <audio
        id="interview"
        :src="usePublic('assets/sites/site3/Site 3 Final Audio.mp3')"
      ></audio>
    </a-assets>
    <!-- <a-playback-video
      src="#trash-video"
      position="0 0 -20"
      rotation="0 0 0"
    ></a-playback-video> -->
    <a-entity
      sound="src: #interview; autoplay: true; loop: true; rolloffFactor: 8;"
      position="0 0 0"
      :gltf-model="usePublic('assets/sites/site3/boat.glb')"
    ></a-entity>
    <a-entity camera look-controls wasd-controls position="0 1.6 0">
      <a-animated-cursor></a-animated-cursor>
    </a-entity>
  </AFrameScene>
</template>
