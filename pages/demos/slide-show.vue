<script setup lang="ts">
async function loadSystems() {
  //@ts-ignore
  await import('aframe-sun-sky');
  await import('@/aframe/components/button');
  await import('@/aframe/components/slide-show');
}
</script>

<template>
  <AFrameScene :load-systems="loadSystems">
    <a-sun-sky material="sunPosition: -0.2 4 -5"></a-sun-sky>
    <a-assets>
      <img
        class="slide-show other-slide-show"
        :src="usePublic('assets/images/image1.jpg')"
      />
      <img
        class="slide-show"
        :src="usePublic('assets/images/image2.jpg')"
        description="Some description. Some description. Some description. Some description. Some description. "
      />
      <img
        class="slide-show other-slide-show"
        :src="usePublic('assets/images/image3.jpg')"
        title="Hello"
        description="Some description. Some description. Some description. Some description. Some description. Some description. Some description. Some description. Some description. Some description. Some description. Some description. Some description. Some description. Some description. Some description. Some description. Some description. Some description. Some description. Some description. Some description. Some description. Some description. Some description. Some description. Some description. Some description. Some description. Some description. Some description. Some description. "
      />
    </a-assets>

    <a-slide-show
      position="5 1.6 -5"
      rotation="0 -30 0"
      image-query=".other-slide-show"
      description-height="3"
    ></a-slide-show>
    <a-slide-show
      position="-5 1.6 -5"
      rotation="0 30 0"
      image-query=".slide-show"
      autoplay="true"
      description-height="3"
    ></a-slide-show>
    <a-entity
      camera
      look-controls="pointerLockEnabled: true"
      wasd-controls
      position="0 1.6 0"
      >/
      <a-animated-cursor></a-animated-cursor>
    </a-entity>
  </AFrameScene>
</template>
