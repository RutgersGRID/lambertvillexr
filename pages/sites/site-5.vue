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
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site5/slide1.jpg')"
        title="Transformation"
        description="Landslide causes major damage to the area."
      />
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site5/slide3.jpg')"
        title="Transformation"
        description="Landslide causes major damage to the area."
      />
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site5/slide4.jpg')"
        title="Transformation"
        description="Trees, shrubs and graases were grown to restore the landscape and prevent future landslides."
      />
      <a-asset-item
        id="bush"
        :src="usePublic('assets/models/bush.glb')"
      ></a-asset-item>
      <a-asset-item
        id="tree-1"
        :src="usePublic('assets/models/tree_1.glb')"
      ></a-asset-item>
      <a-asset-item
        id="tree-2"
        :src="usePublic('assets/models/tree_2.glb')"
      ></a-asset-item>
      <a-asset-item
        id="tree-3"
        :src="usePublic('assets/models/tree_3.glb')"
      ></a-asset-item>
    </a-assets>
    <a-entity rotation="0 -90 0">
      <a-entity rotation="0 250 0">
        <a-entity position="0 0 -10">
          <a-gltf-model src="#bush"></a-gltf-model>
          <a-gltf-model src="#tree-1"></a-gltf-model>
          <a-gltf-model src="#tree-2"></a-gltf-model>
          <a-gltf-model src="#tree-3"></a-gltf-model>
        </a-entity>
      </a-entity>
      <!-- Video -->
      <a-entity rotation="0 -40 0">
        <a-playback-video src="#tree" position="0 1.8 -8"></a-playback-video>
      </a-entity>
      <!-- Slideshow -->
      <a-entity rotation="0 30 0">
        <a-slide-show
          position="0 1.8 -8"
          image-query=".slide-show"
          autoplay="true"
          description-height="3"
        ></a-slide-show>
      </a-entity>
    </a-entity>
    <a-entity rotation="0 0 0">
      <a-text-box
        width="3"
        height="3"
        position="0 1.6 -8"
        title="Site 5"
        description="Interact with the slides and view the tree growth plan to learn about the past and future of Quarry Street Lane."
      ></a-text-box>
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
