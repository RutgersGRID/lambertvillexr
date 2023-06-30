<script setup lang="ts">
const title = 'Quarry Street Landslide';
definePageMeta({
  pageName: 'Quarry Street Landslide',
});

async function loadSystems() {
  //@ts-ignore
  await import('aframe-sun-sky');
  await import('@/aframe/components/button');
  await import('@/aframe/components/slide-show');
  await import('@/aframe/components/text-box');
  await import('@/aframe/components/forest-grower');
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
      <img id="pano" :src="usePublic('assets/sites/site5/pano.jpg')" />
      <video
        id="tree"
        preload="auto"
        loop
        width="160"
        height="90"
        :src="usePublic('assets/sites/site5/tree.mp4')"
        playsinline
        muted
        description="Rendering of future vegetation growth on the side of the landslide."
      ></video>
      <!-- Landslide Slide Show -->
      <img
        class="landslide-slide-show"
        :src="usePublic('assets/sites/site5/landslide/slide1.jpg')"
        description="The landslide caused major damage to the area."
      />
      <img
        class="landslide-slide-show"
        :src="usePublic('assets/sites/site5/landslide/slide3.jpg')"
        description="The landslide caused major damage to the area."
      />
      <img
        class="landslide-slide-show"
        :src="usePublic('assets/sites/site5/landslide/slide4.jpg')"
        description="Trees, shrubs and grasses were grown to restore the landscape and prevent future landslides."
      />
      <!-- Storymap Slide Show -->
      <img
        class="storymap-slide-show"
        :src="usePublic('assets/sites/site5/storymap/slide1.jpg')"
      />
      <img
        class="storymap-slide-show"
        :src="usePublic('assets/sites/site5/storymap/slide2.jpg')"
      />
      <img
        class="storymap-slide-show"
        :src="usePublic('assets/sites/site5/storymap/slide3.jpg')"
      />
      <img
        class="storymap-slide-show"
        :src="usePublic('assets/sites/site5/storymap/slide4.jpg')"
      />
      <a-asset-item
        id="bush"
        :src="usePublic('assets/sites/site5/bush.glb')"
      ></a-asset-item>
      <a-asset-item
        id="tree-1"
        :src="usePublic('assets/sites/site5/tree_1.glb')"
      ></a-asset-item>
      <a-asset-item
        id="tree-2"
        :src="usePublic('assets/sites/site5/tree_2.glb')"
      ></a-asset-item>
      <a-asset-item
        id="tree-3"
        :src="usePublic('assets/sites/site5/tree_3.glb')"
      ></a-asset-item>
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
      <a-entity rotation="0 0 0">
        <!-- Trees -->
        <a-entity rotation="0 90 0">
          <a-entity
            position="-4 5 -23"
            rotation="0 0 4"
            forest-grower="forestScale: 1"
          >
            <AFrameTreeGroup
              position="14 0 -5"
              rotation="0 -30 0"
            ></AFrameTreeGroup>
            <AFrameTreeGroup
              position="7 0 0"
              rotation="0 70 0"
            ></AFrameTreeGroup>
            <AFrameTreeGroup
              position="-7 0 0"
              rotation="0 -30 0"
            ></AFrameTreeGroup>
            <AFrameTreeGroup position="0 0 0"></AFrameTreeGroup>
            <AFrameTreeGroup
              position="-14 0 -5"
              rotation="0 -30 0"
            ></AFrameTreeGroup>
          </a-entity>
        </a-entity>
        <!-- Tree TextBox -->
        <a-text-box
          width="5.5"
          height="3"
          position="0 -1.5 -6"
          title="Green Infrastructure"
          description="During Hurricane Ida in 2021, a significant landslide occurred at this steep slope, bringing down large trees, crushing vehicles and narrowly missing homes. \n\nAfter clearing the debris, the City and community replanted numerous native trees, and shrubs to restore the landscape and prevent future landslides. \n\nThe virtual recreation on the left visualizes the future of the landslide zone as the newly planted vegetation takes root."
        ></a-text-box>
        <!-- Textbox -->
        <a-text-box
          width="3"
          height="3"
          position="1 1.5 -6"
          :title="title"
          description="Interact with the slides and view the tree growth visualization to learn about the past and future of Quarry Street Lane."
        ></a-text-box>
      </a-entity>
      <a-entity rotation="0 -80 0">
        <!-- Landslide Slideshow -->
        <a-slide-show
          position="0 3 -6"
          rotation="10 0 0"
          image-query=".landslide-slide-show"
          autoplay="true"
          autoplay-duration="5000"
          description-height="3"
        ></a-slide-show>
        <!-- Storymap Slideshow -->
        <a-slide-show
          position="0 -3 -6"
          rotation="-10 0 0"
          image-query=".storymap-slide-show"
          show-controls="false"
          autoplay="true"
          autoplay-duration="5000"
          description-height="3"
        ></a-slide-show>
        <!-- Video -->
        <a-entity rotation="0 -80 0">
          <a-playback-video src="#tree" position="0 0 -6"></a-playback-video>
        </a-entity>
      </a-entity>
    </a-entity>
    <a-entity
      camera
      look-controls="pointerLockEnabled: true"
      wasd-controls="enabled:false"
      position="0 1.6 0"
      three-layer="layers: 1"
    >
      <a-animated-cursor></a-animated-cursor>
    </a-entity>
  </AFrameScene>
</template>
