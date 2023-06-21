<script setup lang="ts">
definePageMeta({
  pageName: 'Union Street Bridge',
});

async function loadSystems() {
  //@ts-ignore
  await import('aframe-sun-sky');
  await import('@/aframe/components/button');
  await import('@/aframe/components/audio-player');
  await import('@/aframe/components/slide-show');
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
    <img class="slide-show" :src="usePublic('assets/sites/site3/slide1.jpg')" />
    <img class="slide-show" :src="usePublic('assets/sites/site3/slide2.jpg')" />
    <img class="slide-show" :src="usePublic('assets/sites/site3/slide3.jpg')" />
    <img class="slide-show" :src="usePublic('assets/sites/site3/slide4.jpg')" />
    <img class="slide-show" :src="usePublic('assets/sites/site3/slide5.jpg')" />
    <img class="slide-show" :src="usePublic('assets/sites/site3/slide6.jpg')" />
    <img class="slide-show" :src="usePublic('assets/sites/site3/slide7.jpg')" />
    <img class="slide-show" :src="usePublic('assets/sites/site3/slide8.jpg')" />
    <img class="slide-show" :src="usePublic('assets/sites/site3/slide9.jpg')" />
    <img class="slide-show" :src="usePublic('assets/sites/site3/slide10.jpg')" />
    <img class="slide-show" :src="usePublic('assets/sites/site3/slide11.jpg')" />
    <img class="slide-show" :src="usePublic('assets/sites/site3/slide12.jpg')" />
    <img class="slide-show" :src="usePublic('assets/sites/site3/slide13.jpg')" />
    <img class="slide-show" :src="usePublic('assets/sites/site3/slide14.jpg')" />
    </a-assets>
    <a-entity rotation="0 0 0">
      <a-playback-video
      src="#trash-video"
      position="0 0 -10"
    ></a-playback-video>
    <a-slide-show
      position="10 5 -10"
      rotation="0 30 0"
      image-query=".slide-show"
      autoplay="true"
    ></a-slide-show>
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
