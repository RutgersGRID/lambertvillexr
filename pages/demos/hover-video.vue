<script setup lang="ts">
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
        id="avocado-video"
        preload="auto"
        width="160"
        height="90"
        loop="true"
        src="@/assets/videos/avocado.mp4"
        crossorigin="anonymous"
      ></video>
      <video
        id="avocado-video2"
        preload="auto"
        width="160"
        height="90"
        loop="true"
        src="@/assets/videos/avocado.mp4"
        crossorigin="anonymous"
      ></video>
      <video
        id="trash-video"
        preload="auto"
        width="160"
        height="90"
        loop="true"
        src="@/assets/videos/trash-video.mp4"
        crossorigin="anonymous"
      ></video>
    </a-assets>

    <a-playback-video
      src="#avocado-video"
      position="0 0 -20"
      rotation="0 0 0"
    ></a-playback-video>
    <a-playback-video
      src="#avocado-video2"
      position="20 3 -20"
      rotation="0 -35 0"
    ></a-playback-video>
    <a-playback-video
      src="#trash-video"
      position="0 1.6 0"
      curved="true"
      radius="8"
      theta-start="210"
    ></a-playback-video>
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
