<script setup lang="ts">
const title = 'Delaware Canal Entrance';
definePageMeta({
  pageName: 'Delaware Canal Entrance',
});

async function loadSystems() {
  //@ts-ignore
  await import('aframe-sun-sky');
  await import('@/aframe/components/button');
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
    start-description="Please press the start button below while facing this site's QR code."
  >
    <a-assets>
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site1/slide1.jpg')"
        title="Delaware River"
        description="The river has shaped Lambertville's history."
      />
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site1/slide2.jpg')"
        title="Lambertville Station"
        description="The Lambertville station was reconstructed into an hotel and inn. "
      />
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site1/slide3.jpg')"
        title="ACME Building"
        description="The Lambertville ACME screening room was reconstructed into the Justice Center."
      />
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site1/slide4.jpg')"
        title="Hibernia Firehouse"
        description="The Hibernia Firehouse has become an important historical stie at Lambertville."
      />
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site1/slide5.jpg')"
        title="41 Quarry St"
        description="Before and after of 41 Quarry St."
      />
      <img id="pano" :src="usePublic('assets/sites/site1/pano.jpg')" />
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
      rotation="11.7 0 0"
      three-layer="desktopLayers: 1"
    ></a-sky>
    <a-music-radio></a-music-radio>

    <!-- Content -->
    <a-entity position="0 1 0" three-layer="layers: 1">
      <!-- Slide show -->
      <a-entity rotation="0 50 0">
        <a-slide-show
          position="0 0 -8"
          height="6"
          width="8.95960311837"
          image-query=".slide-show"
          autoplay="true"
        ></a-slide-show>
      </a-entity>
      <!-- Text box -->
      <a-entity rotation="0 0 0">
        <a-text-box
          width="3"
          height="3"
          position="0 0 -8"
          :title="title"
          description="Interact with the slides to learn about the Delaware Canal Enterence."
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
