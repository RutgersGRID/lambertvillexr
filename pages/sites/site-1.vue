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
      <video
        id="drone-video"
        preload="auto"
        loop="true"
        width="160"
        height="90"
        :src="usePublic('assets/sites/site1/drone-river.mp4')"
        crossorigin="anonymous"
        title="Deleware River Canal"
        description="View a drone shot of the entire canal."
      ></video>
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
      <a-entity rotation="0 60 0">
        <!-- Video -->
        <a-playback-video
          src="#drone-video"
          position="0 3.4 -6"
          rotation="10 0 0"
        >
        </a-playback-video>
        <!-- Slide show -->
        <a-slide-show
          position="0 -3 -6"
          rotation="-10 0 0"
          height="5.35738016136"
          width="8"
          image-query=".slide-show"
          autoplay="true"
        ></a-slide-show>
      </a-entity>
      <!-- Text box -->
      <a-entity rotation="0 -55 0">
        <a-text-box
          width="3"
          height="3"
          position="0 0.4 -6"
          :title="title"
          description="Interact with the slides to learn about the Delaware Canal Enterence."
        ></a-text-box>
      </a-entity>
      <!--Text Box-->
      <a-entity rotation="0 -10 0">
        <a-text-box
          width="5"
          height="4.5"
          position="0 1.5 -6"
          title="Humble Beginnings"
          description="Looking toward the river, try to imagine a small, flat-bottomed ferry carrying horses, people and goods from the eastern bank of the Delaware to the other side. From about 1732, this was Coryell’s Ferry. There was no canal —only a narrow creek tumbling to the river, a few humble dwellings and one or two commercial establishments."
        ></a-text-box>
      </a-entity>
      <a-entity rotation="0 -10 0">
        <a-text-box
          width="5"
          height="4.5"
          position="0 -1.5 -6"
          title="Urbanization"
          description="Now, skip forward to the 1834 opening of the Delaware and Raritan Feeder Canal and see barges laden with Pennsylvania coal being pulled by mules, the cargo bound for Trenton, New York City, and beyond. The Belvedere-Delaware railroad came in 1851 and with it more people and significant opportunity. By 1872, Lambertville’s population had swelled to its peak of 4,637—600 more than present day. "
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
