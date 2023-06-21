<script setup lang="ts">
definePageMeta({
  pageName: 'Quarry Street Landslide',
});

async function loadSystems() {
  //@ts-ignore
  await import('aframe-sun-sky');
  await import('@/aframe/components/button');
  await import('@/aframe/components/slide-show');
}
</script>

<template>
  <AFrameScene :load-systems="loadSystems">
    <a-sun-sky material="sunPosition: -0.2 4 -5"></a-sun-sky>
    <a-assets>
      <video
        id="tree"
        preload="auto"
        width="160"
        height="90"
        loop="true"
        :src="usePublic('assets/sites/site5/tree.mp4')"
        crossorigin="anonymous"
      ></video>
      <img class="slide-show" :src="usePublic('assets/images/image1.jpg')" />
      <img class="slide-show" :src="usePublic('assets/images/image2.jpg')" />
      <img class="slide-show" :src="usePublic('assets/images/image3.jpg')" />
    </a-assets>
    <a-playback-video
      src="#tree"
      position="-20 0 -5"
      rotation="0 90 0"
    ></a-playback-video>
    <a-slide-show
      position="10 1.6 -10"
      rotation="0 30 0"
      image-query=".slide-show"
      autoplay="true"
    ></a-slide-show>
    <a-entity camera look-controls wasd-controls position="0 1.6 0">
      <a-animated-cursor></a-animated-cursor>
    </a-entity>
  </AFrameScene>
</template>
