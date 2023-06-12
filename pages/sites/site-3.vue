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
      <video
        id="trash-video"
        preload="auto"
        width="160"
        height="90"
        loop="true"
        src="@/assets/deployment-assets/site3/trash-video.mp4"
        crossorigin="anonymous"
      ></video>
      <audio
        id="interview-audio"
        preload="auto"
        src="@/assets/deployment-assets/site3/Site 3 Final Audio.mp3"
      ></audio>
      <a-asset-item
        id="boat"
        src="@/assets/deployment-assets/site3/boat.gltf"
      ></a-asset-item>
    </a-assets>

    <a-playback-video
      src="#trash-video"
      position="0 0 -20"
      rotation="0 0 0"
    ></a-playback-video>
    <a-marker preset="hiro" smooth="true">
      <a-entity
        sound="src: #interview-audio; autoplay: true; loop: true; rolloffFactor: 8;"
        position="0 0 0"
        gltf-model="#boat"
        scale="0.2 0.2 0.2"
        rotation="-90 90 -90"
      ></a-entity>
      <a-box
        position="0 0.25 0"
        material="opacity: 0.5;"
        scale="0.5 0.5 0.5"
      ></a-box>
    </a-marker>
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
