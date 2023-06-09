<script>
export default {
  data() {
    return {
      images: ["#image1", "#image2", "#image3"],
      currentImageIndex: 0,
      currentImage: "#image1",
    };
  },
  mounted() {
    setInterval(this.showNextImage, 2000);
  },
  methods: {
    showNextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentImageIndex];
    },
  },
};
</script>

<template>
  <div>
    <a-scene>
      <a-assets>
        <img id="image1" src="@/assets/images/image1.jpg" />
        <img id="image2" src="@/assets/images/image2.jpg" />
        <img id="image3" src="@/assets/images/image3.jpg" />
      </a-assets>

      <a-image
        id="slideshow"
        :src="currentImage"
        scale="2 2 2"
        position="0 0 -3"
      ></a-image>
      <a-entity camera look-controls wasd-controls></a-entity>
    </a-scene>
  </div>
</template>
