<script setup lang="ts">
definePageMeta({
  pageName: 'Delaware Canal Entrance',
});

async function loadSystems() {
  //@ts-ignore
  await import('aframe-sun-sky');
  await import('@/aframe/components/button');
  await import('@/aframe/components/slide-show');
}
</script>

<template>
  <AFrameScene :load-systems="loadSystems">
    <a-assets>
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site1/slide1.jpg')"
        title="Delaware River"
        description="The river has helped Lambertville's rich history."
      />
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site1/slide2.jpg')"
        title="Lambertville Station"
        description="The Lambertville station being reconstructed into an hotel and inn. "
      />
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site1/slide3.jpg')"
        title="ACME Building"
        description="The Lambertville ACME screening room being reconstructed into Justice Center."
      />
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site1/slide4.jpg')"
        title="Hibernia Firehouse"
        description="The Hibernia Firehouse has become a major site of history. Now rumored its being sold."
      />
      <img
        class="slide-show"
        :src="usePublic('assets/sites/site1/slide5.jpg')"
        title="41 Quarry St"
        description="Before and after of 41 Quarry St."
      />
      <img id="pano" :src="usePublic('assets/sites/site1/pano.jpg')" />
    </a-assets>

    <a-sky src="#pano" rotation="11.7 0 0"></a-sky>

    <a-entity rotation="0 10 0">
      <a-slide-show
        position="0 1.6 -8"
        height="6"
        width="8.95960311837"
        image-query=".slide-show"
        autoplay="true"
      ></a-slide-show>
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
