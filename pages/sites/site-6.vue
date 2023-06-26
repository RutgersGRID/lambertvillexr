<script setup lang="ts">
definePageMeta({
  pageName: 'Curley Lane Blue Acres',
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
        :src="usePublic('assets/sites/site6/interview6.mp3')"
        preload="auto"
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
        :src="usePublic('assets/sites/site6/slide1.jpg')"
        title="Transformation"
        description="Before and After"
      />
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site6/slide2.jpg')"
        title="Transformation"
        description="Before and After"
      />
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site6/slide3.jpg')"
        title="Transformation"
        description="Before and After"
      />
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site6/slide4.jpg')"
        title="Transformation"
        description="Before and After"
      />
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site6/slide5.jpg')"
        title="Transformation"
        description="Before and After"
      />
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site6/slide7.jpg')"
        title="Transformation"
        description="Before and After"
      />
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site6/slide8.jpg')"
        title="Transformation"
        description="Before and After"
      />
    </a-assets>
    <a-gltf-model src="#Person1" position="10 -1 -15"></a-gltf-model>
    <a-gltf-model src="#Person2" position="14 -6 -55"></a-gltf-model>
    <a-gltf-model src="#Person3" position="3 -3 -25"></a-gltf-model>
    <a-gltf-model src="#Person4" position="4 -4 -35"></a-gltf-model>
    <a-gltf-model src="#Person5" position="5 -5 -45"></a-gltf-model>
    <a-gltf-model src="#Person6" position="7 -7 -65"></a-gltf-model>
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
        ></a-slide-show>
      </a-entity>
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
