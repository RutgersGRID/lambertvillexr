<script setup lang="ts">
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
        description="Rendering of future vegetation growth on the side of the landslide."
      ></video>
      <!-- Landslide Slide Show -->
      <img
        class="landslide-slide-show"
        :src="usePublic('assets/sites/site5/landslide/slide1.jpg')"
        description="Landslide causes major damage to the area."
      />
      <img
        class="landslide-slide-show"
        :src="usePublic('assets/sites/site5/landslide/slide3.jpg')"
        description="Landslide causes major damage to the area."
      />
      <img
        class="landslide-slide-show"
        :src="usePublic('assets/sites/site5/landslide/slide4.jpg')"
        description="Trees, shrubs and graases were grown to restore the landscape and prevent future landslides."
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
    </a-assets>
    <a-entity rotation="0 0 0" position="0 1 0">
      <!-- Tree TextBox -->
      <a-entity rotation="0 45 0">
        <a-text-box
          width="5.5"
          height="3"
          position="0 0 -8"
          title="Green Infrastruce"
          description="During Hurricane Ida in 2021, a significant landslide occurred at this steep slope, bringing down large trees, crushing vehicles and narrowly missing homes. \n\nAfter clearing the debris, the City and community replanted numerous native trees, and shrubs to restore the landscape and prevent future landslides. \n\nThe virtual recreation on the left visualizes the future of the landslide zone as the newly planted vegetation takes root."
        ></a-text-box>
      </a-entity>
      <!-- Trees -->
      <a-entity rotation="0 90 0">
        <a-entity
          position="0 0 -15"
          rotation="0 0 0"
          forest-grower="forestScale: 1"
        >
          <AFrameTreeGroup
            position="14 0 -5"
            rotation="0 -30 0"
          ></AFrameTreeGroup>
          <AFrameTreeGroup position="7 0 0" rotation="0 70 0"></AFrameTreeGroup>
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
      <!-- TextBox -->
      <a-entity rotation="0 0 0">
        <a-text-box
          width="3"
          height="3"
          position="0 0 -8"
          title="Site 5"
          description="Interact with the slides and view the tree growth plan to learn about the past and future of Quarry Street Lane."
        ></a-text-box>
      </a-entity>
      <!-- Landslide Slideshow -->
      <a-entity rotation="0 -50 0">
        <a-slide-show
          position="0 0 -8"
          image-query=".landslide-slide-show"
          autoplay="true"
          description-height="3"
        ></a-slide-show>
      </a-entity>
      <!-- Video -->
      <a-entity rotation="0 -120 0">
        <a-playback-video src="#tree" position="0 0 -8"></a-playback-video>
      </a-entity>
      <!-- Storymap Slideshow -->
      <a-entity rotation="0 -185 0">
        <a-slide-show
          position="0 0 -8"
          image-query=".storymap-slide-show"
          show-controls="false"
          autoplay="true"
          description-height="3"
        ></a-slide-show>
      </a-entity>
    </a-entity>
    <a-entity
      camera
      look-controls="pointerLockEnabled: true"
      wasd-controls="enabled:false"
      position="0 1.6 0"
    >
      <a-animated-cursor></a-animated-cursor>
    </a-entity>
  </AFrameScene>
</template>
