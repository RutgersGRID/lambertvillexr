<script setup lang="ts">
definePageMeta({
  pageName: 'Home',
});

const heroVideo = ref<HTMLVideoElement>();
const lowPowerMode = ref(true);
onMounted(() => {
  if (!heroVideo.value) return;
  heroVideo.value.play().then(() => {
    lowPowerMode.value = false;
  });
});
</script>

<template>
  <img
    :class="{
      hidden: !lowPowerMode,
    }"
    :src="usePublic('assets/images/lambertville-drone.png')"
    class="absolute w-full h-full object-cover"
  />
  <video
    :class="{
      hidden: lowPowerMode,
    }"
    ref="heroVideo"
    autoplay
    muted
    playsinline
    webkit-playsinline
    loop
    :src="usePublic('assets/videos/lambertville-drone.mp4')"
    class="absolute w-full h-full object-cover"
  ></video>
  <div
    class="absolute w-full h-full bg-gray-200 dark:bg-gray-800 opacity-90"
  ></div>
  <div
    class="absolute w-full h-full p-4 flex flex-col justify-center items-center"
  >
    <div class="prose dark:prose-invert text-center">
      <h1>Flowing Together</h1>
      <p>
        Welcome to the Lambertville Flowing Together virtual tour site! <br />
        Please use the navigation below to view each site.
      </p>
    </div>
  </div>
</template>
