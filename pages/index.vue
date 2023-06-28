<script setup lang="ts">
definePageMeta({
  pageName: 'Home',
});

const heroVideo = ref<HTMLVideoElement>();
const lowPowerMode = ref(false);
onMounted(() => {
  if (!heroVideo.value) return;
  heroVideo.value.addEventListener('suspend', () => {
    lowPowerMode.value = true;
  });
});
</script>

<template>
  <img
    v-if="lowPowerMode"
    :src="usePublic('assets/images/lambertville-drone.png')"
    class="absolute w-full h-full object-cover"
  />
  <video
    v-else
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
      <h1>Lambertville XR</h1>
      <p>
        Welcome to the Lambertville XR site! <br />
        Please use the navigation below to view each site.
      </p>
    </div>
  </div>
</template>
