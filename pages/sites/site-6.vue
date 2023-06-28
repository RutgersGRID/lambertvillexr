<script setup lang="ts">
const title = 'Curley Lane Blue Acres';
definePageMeta({
  pageName: 'Curley Lane Blue Acres',
});

async function loadSystems() {
  //@ts-ignore
  await import('aframe-sun-sky');
  await import('@/aframe/components/button');
  await import('@/aframe/components/audio-player');
  await import('@/aframe/components/slide-show');
  await import('@/aframe/components/text-box');
  await import('@/aframe/components/material-override');
  await import('@/aframe/components/music-radio');
}
</script>

<template>
  <AFrameScene
    :load-systems="loadSystems"
    :start-title="title"
    start-description="Please press the start button below while facing this site's QR code."
  >
    <a-sun-sky material="sunPosition: -0.2 4 -5"></a-sun-sky>
    <a-assets>
      <!-- <audio id="interview" :src="usePublic('assets/site6/interview6.mp3')"></audio> -->
      <audio
        id="interview"
        :src="usePublic('assets/sites/site6/interview6.mp3')"
        preload="auto"
        title="Rosso Family Interview"
        description="Listen to the audio clip to hear an interview with the Rosso Family."
      ></audio>
      <a-asset-item
        id="Person1"
        :src="usePublic('assets/sites/site6/Person1.glb')"
      ></a-asset-item>
      <a-asset-item
        id="Person2"
        :src="usePublic('assets/sites/site6/Person2.glb')"
      ></a-asset-item>
      <a-asset-item
        id="Person3"
        :src="usePublic('assets/sites/site6/Person3.glb')"
      ></a-asset-item>
      <a-asset-item
        id="Person4"
        :src="usePublic('assets/sites/site6/Person4.glb')"
      ></a-asset-item>
      <a-asset-item
        id="Person5"
        :src="usePublic('assets/sites/site6/Person5.glb')"
      ></a-asset-item>
      <a-asset-item
        id="Person6"
        :src="usePublic('assets/sites/site6/Person6.glb')"
      ></a-asset-item>
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site6/slide4.jpg')"
        description="High flood Hurricane Ida tide."
      />
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site6/slide5.jpg')"
        description="Peeking at the flood levels outside."
      />
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site6/slide7.jpg')"
        description="A family bought the home in 1920 and held it for 103 years until the Ida's flooding tore it down."
      />
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site6/slide8.jpg')"
        description="Damage past flood"
      />
      <audio
        class="music"
        :src="usePublic('assets/music/end-poem-smooth.wav')"
      ></audio>
      <audio
        class="music"
        :src="usePublic('assets/music/iron-golem-vibe.wav')"
      ></audio>
      <audio class="music" :src="usePublic('assets/music/new-me.wav')"></audio>
    </a-assets>

    <a-music-radio></a-music-radio>

    <!-- People -->
    <a-entity material-override="color: black">
      <a-gltf-model src="#Person1" position="10 -1 -15"></a-gltf-model>
      <a-gltf-model src="#Person2" position="14 -6 -55"></a-gltf-model>
      <a-gltf-model src="#Person3" position="3 -3 -25"></a-gltf-model>
      <a-gltf-model src="#Person4" position="4 -4 -35"></a-gltf-model>
      <a-gltf-model src="#Person5" position="5 -5 -45"></a-gltf-model>
      <a-gltf-model src="#Person6" position="7 -7 -65"></a-gltf-model>
    </a-entity>

    <!-- Content -->
    <a-entity rotation="0 -90 0">
      <!-- Interview Audio -->
      <a-entity rotation="0 200 0">
        <a-audio-player
          src="#interview"
          position="0 1.6 -8"
          title="Interview"
        ></a-audio-player>
      </a-entity>
      <!-- Slideshow -->
      <a-entity rotation="0 140 0">
        <a-slide-show
          position="0 1.6 -8"
          image-query=".slide-show"
          autoplay="true"
          description-height="3"
        ></a-slide-show>
      </a-entity>
    </a-entity>
    <a-entity rotation="0 -60 0">
      <a-text-box
        width="3"
        height="3"
        position="0 1.6 -8"
        :title="title"
        description="Interact with the slides and audio to learn about the breaking down of houses at the Curley Lane Blue Acres."
      ></a-text-box>
    </a-entity>
    <a-entity
      camera
      look-controls="pointerLockEnabled: true"
      wasd-controls="enabled:true"
      position="0 1.6 0"
    >
      <a-animated-cursor></a-animated-cursor>
    </a-entity>
  </AFrameScene>
</template>
