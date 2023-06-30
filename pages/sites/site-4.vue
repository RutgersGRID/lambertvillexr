<script setup lang="ts">
const title = 'Hibernia Firehouse';
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
    :start-title="title"
    start-description="If you're at the site, please press the start button while facing the site marker. Otherwise, just press the start button."
  >
    <a-assets>
      <img id="pano" :src="usePublic('assets/sites/site4/pano.jpg')" />
      <audio
        id="interview"
        :src="usePublic('assets/sites/site4/interview4.mp3')"
        preload="auto"
        title="Recovery Stories"
        description="Listen to this audio clip to hear stories about the recovery and resilience of the Lambertville following Hurricane Ida. "
      ></audio>
      <!-- Community Slide Show -->
      <img
        class="community-slide-show"
        :src="usePublic('assets/sites/site4/community/slide1.jpg')"
        description="Volunteers getting together to discuss a recovery plan."
      />
      <img
        class="community-slide-show"
        :src="usePublic('assets/sites/site4/community/slide4.jpg')"
        description="Volunteers moblilizing to clean up debris."
      />
      <img
        class="community-slide-show"
        :src="usePublic('assets/sites/site4/community/slide6.jpg')"
        description="Free Public library of Lambertville distributing food twice a week on wagons."
      />
      <img
        class="community-slide-show"
        :src="usePublic('assets/sites/site4/community/slide7.jpg')"
        description="Lambertville has a very tight knit community."
      />
      <img
        class="community-slide-show"
        :src="usePublic('assets/sites/site4/community/slide8.jpg')"
        description="Flooding in Lmabertville."
      />
      <img
        class="community-slide-show"
        :src="usePublic('assets/sites/site4/community/slide10.jpg')"
        description="Swan creek flooding."
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

    <a-sky
      src="#pano"
      three-layer="desktopLayers: 1"
      rotation="11.7 90 0"
    ></a-sky>
    <a-music-radio></a-music-radio>

    <!-- Content -->
    <a-entity rotation="0 0 0" position="0 1 0" three-layer="layers: 1">
      <!-- Storymap Slideshow -->
      <a-entity rotation="0 60 0">
        <a-slide-show
          position="0 0 -6"
          height="6"
          width="8.95960311837"
          image-query=".storymap-slide-show"
          autoplay="true"
          autoplay-duration="5000"
          show-controls="false"
        ></a-slide-show>
      </a-entity>
      <a-entity rotation="0 130 0">
        <!-- Textbox -->
        <a-text-box
          width="5"
          height="4.5"
          position="0 1 -6"
          title="Community Recovery"
          description="When Ida hit, floodwaters streamed over the bridge, filling the basement with four feet of water and destroying a large stock of food. The City’s fire department, police department, and local rescue squad answered nonstop emergency and evacuation calls during Hurricane Ida, and not a single life was lost due to their heroic efforts. On April 1, 2022, eighty community volunteers removed three tons of Ida-related debris from Swan Creek, including the remnants of an upright piano, the origin of which remains unknown."
        ></a-text-box>
        <!-- Interview Audio -->
        <a-audio-player
          src="#interview"
          position="0 -2.5 -6"
          title="Interview"
        ></a-audio-player>
      </a-entity>
      <!-- Community Slideshow -->
      <a-entity rotation="0 200 0">
        <a-slide-show
          position="0 0 -6"
          image-query=".community-slide-show"
          autoplay="true"
          autoplay-duration="5000"
        ></a-slide-show>
      </a-entity>
      <!-- Text box -->
      <a-entity rotation="0 0 0">
        <a-text-box
          width="3"
          height="3"
          position="0 0 -6"
          :title="title"
          description="Interact with the slides and audio to learn about the history of the Hibernia Firehouse."
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
