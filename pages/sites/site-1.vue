<script setup lang="ts">
definePageMeta({
  pageName: 'Delaware Canal Entrance',
});

const images = ['#image1', '#image2', '#image3'];
const currentImageIndex = ref(0);
const currentImage = ref('#image1');

function showNextImage() {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
  currentImage.value = images[currentImageIndex.value];
}

onMounted(() => {
  setInterval(showNextImage, 2000);
});
</script>

<template>
  <AFrameScene>
    <a-assets>
      <img id="image1" :src="usePublic('assets/images/image1.jpg')" />
      <img id="image2" :src="usePublic('assets/images/image2.jpg')" />
      <img id="image3" :src="usePublic('assets/images/image3.jpg')" />
    </a-assets>

    <a-image
      id="slideshow"
      :src="currentImage"
      scale="2 2 2"
      position="0 0 -3"
    ></a-image>
    <a-entity camera look-controls wasd-controls></a-entity>
  </AFrameScene>
</template>
