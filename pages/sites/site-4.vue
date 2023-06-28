<script setup lang="ts">
definePageMeta({
  pageName: 'Hibernia Firehouse',
});

async function loadSystems() {
  //@ts-ignore
  await import('aframe-sun-sky');
  await import('@/aframe/components/button');
  await import('@/aframe/components/audio-player');
  await import('@/aframe/components/slide-show');
  await import('@/aframe/components/text-box');
  await import('@/aframe/components/music-radio');
  await import('@/aframe/components/three-layer');
}
</script>

<template>
  <AFrameScene
    :load-systems="loadSystems"
    start-title="Hibernia Firehouse"
    start-description="Please press the start button below while facing this site's QR code."
  >
    <a-sun-sky material="sunPosition: -0.2 4 -5" three-layer="desktopLayers: 1"></a-sun-sky>
    <a-assets>
      <audio
        id="interview"
        :src="usePublic('assets/sites/site4/interview4.mp3')"
        preload="auto"
        title="Recovery Stories"
        description="Listen to this audio clip to hear stories about the recover and resilience of the Lambertville following Hurricane Ida. "
      ></audio>
      <!-- Community Slide Show -->
      <img
        class="community-slide-show"
        :src="usePublic('assets/sites/site4/community/slide1.jpg')"
        description="Volunteers getting together to discuss recovery plan."
      />
      <img
        class="community-slide-show"
        :src="usePublic('assets/sites/site4/community/slide4.jpg')"
        description="Volunteers trying their best efforts to moblilize."
      />
      <img
        class="community-slide-show"
        :src="usePublic('assets/sites/site4/community/slide6.jpg')"
        description="Lambertville Free Public library distributing food twice a week on wagons "
      />
      <img
        class="community-slide-show"
        :src="usePublic('assets/sites/site4/community/slide7.jpg')"
        description="Lambertville has a very tight knit community."
      />
      <img
        class="community-slide-show"
        :src="usePublic('assets/sites/site4/community/slide8.jpg')"
        description="Flooding"
      />
      <img
        class="community-slide-show"
        :src="usePublic('assets/sites/site4/community/slide10.jpg')"
        description="After-effect"
      />
      <!-- Storymap Slide Show -->
      <img
        class="storymap-slide-show"
        :src="usePublic('assets/sites/site4/storymap/slide1.jpg')"
      />
      <img
        class="storymap-slide-show"
        :src="usePublic('assets/sites/site4/storymap/slide2.jpg')"
      />
      <img
        class="storymap-slide-show"
        :src="usePublic('assets/sites/site4/storymap/slide3.jpg')"
      />
      <img
        class="storymap-slide-show"
        :src="usePublic('assets/sites/site4/storymap/slide4.jpg')"
      />
      <img
        class="storymap-slide-show"
        :src="usePublic('assets/sites/site4/storymap/slide5.jpg')"
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
    
    <!-- Content -->
    <a-entity rotation="0 0 0" position="0 1 0" three-layer="layers: 1">
      <!-- Storymap Slideshow -->
      <a-entity rotation="0 60 0">
        <a-slide-show
          position="0 0 -8"
          height="6"
          width="8.95960311837"
          image-query=".storymap-slide-show"
          autoplay="true"
          autoplay-duration="5000"
          show-controls="false"
        ></a-slide-show>
      </a-entity>
      <!-- Interview Audio -->
      <a-entity rotation="0 120 0">
        <a-audio-player
          src="#interview"
          position="0 0 -8"
          title="Interview"
        ></a-audio-player>
      </a-entity>
      <!-- Community Slideshow -->
      <a-entity rotation="0 180 0">
        <a-slide-show
          position="0 0 -8"
          image-query=".community-slide-show"
          autoplay-duration="3000"
          autoplay="true"
        ></a-slide-show>
      </a-entity>
      <!-- Text box -->
      <a-entity rotation="0 0 0">
        <a-text-box
          width="3"
          height="3"
          position="0 0 -8"
          title="Site 4"
          description="Interact with the slides and audio to learn about the history of Hibernia Firehouse."
        ></a-text-box>
      </a-entity>
    </a-entity>
    <a-entity
      camera
      look-controls="pointerLockEnabled: true"
      wasd-controls
      position="0 1.6 0"
      three-layer="layers: 1"
    >
      <a-animated-cursor></a-animated-cursor>
    </a-entity>
  </AFrameScene>
</template>
