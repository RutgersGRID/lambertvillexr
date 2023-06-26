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
}
</script>

<template>
  <AFrameScene :load-systems="loadSystems">
    <a-sun-sky material="sunPosition: -0.2 4 -5"></a-sun-sky>
    <a-assets>
      <!-- <audio id="interview" :src="usePublic('assets/site6/interview6.mp3')"></audio> -->
      <audio
        id="interview"
        :src="usePublic('assets/sites/site4/interview4.mp3')"
        preload="auto"
      ></audio>
      <!-- <a-asset-item id="wall1" :src="usePublic('assets/sites/site4/wall.glb')"></a-asset-item>
      <a-asset-item id="wall2" :src="usePublic('assets/sites/site4/wall.glb')"></a-asset-item>
      <a-asset-item id="rail1" :src="usePublic('assets/sites/site4/rail.glb')"></a-asset-item>
      <a-asset-item id="rail2" :src="usePublic('assets/sites/site4/rail.glb')"></a-asset-item>
      <a-asset-item id="post1" :src="usePublic('assets/sites/site4/post.glb')"></a-asset-item>
      <a-asset-item id="post2" :src="usePublic('assets/sites/site4/post.glb')"></a-asset-item> -->
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site4/slide1.jpg')"
        title="Transformation"
        description="Before and After"
      />
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site4/slide2.jpg')"
        title="Transformation"
        description="Before and After"
      />
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site4/slide3.jpg')"
        title="Transformation"
        description="Before and After"
      />
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site4/slide4.jpg')"
        title="Transformation"
        description="Before and After"
      />
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site4/slide5.jpg')"
        title="Transformation"
        description="Before and After"
      />
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site4/slide6.jpg')"
        title="Transformation"
        description="Before and After"
      />
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site4/slide7.jpg')"
        title="Transformation"
        description="Before and After"
      />
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site4/slide8.jpg')"
        title="Transformation"
        description="Before and After"
      />
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site4/slide9.jpg')"
        title="Transformation"
        description="Before and After"
      />
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site4/slide10.jpg')"
        title="Transformation"
        description="Before and After"
      />
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site4/slide11.jpg')"
        title="Transformation"
        description="Before and After"
      />
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site4/slide12.jpg')"
        title="Transformation"
        description="Before and After"
      />
    </a-assets>
    <!-- <a-gltf-model src=#wall1 position="-16 -1 1"></a-gltf-model>
    <a-gltf-model src=#wall2 position="-16 -6 6"></a-gltf-model>
    <a-gltf-model src=#rail1 position="-16 -3 3"></a-gltf-model>
    <a-gltf-model src=#rail2 position="-16 -4 4"></a-gltf-model>
    <a-gltf-model src=#post1 position="-16 -5 5"></a-gltf-model>
    <a-gltf-model src=#post2 position="-16 -7 7"></a-gltf-model> -->
    <a-entity rotation="0 -10 0">
      <!-- Slideshow -->
      <a-entity rotation="0 60 0">
        <a-slide-show
          position="0 0 -8"
          image-query=".slide-show"
          autoplay="true"
        ></a-slide-show>
      </a-entity>
      <!-- Interview Audio -->
      <a-entity rotation="0 130 0">
        <a-audio-player
          src="#interview"
          position="0 0 -8"
          title="Interview"
        ></a-audio-player>
      </a-entity>
    </a-entity>
    <a-entity
      camera
      look-controls="pointerLockEnabled: true"
      wasd-controls
      position="0 1.6 0"
    >
      <a-animated-cursor></a-animated-cursor>
    </a-entity>
  </AFrameScene>
</template>
