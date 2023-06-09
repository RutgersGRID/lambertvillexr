<script setup lang="ts">
import { Scene } from 'aframe';
import document from '@/utils/document';

const experienceStarted = ref(false);
const showUI = ref(true);

const emit = defineEmits(['sceneEntered']);

function startExperience() {
  emit('sceneEntered');
  experienceStarted.value = true;
  setTimeout(() => {
    showUI.value = false;
  }, 300);
}

function tryStartExperience() {
  // Browser doesn't support or doesn't require permission to DeviceOrientationEvent API.
  if (
    typeof DeviceOrientationEvent === 'undefined' ||
    !(DeviceOrientationEvent as any).requestPermission
  ) {
    startExperience();
    return;
  }

  // Request permission
  (DeviceOrientationEvent as any)
    .requestPermission()
    .then(function (response: string) {
      if (response === 'granted') {
        startExperience();
      }
    });
}
</script>

<template>
  <div
    v-if="showUI"
    class="absolute h-full w-full flex justify-center items-center bg-opacity-75 bg-black z-10 transition-all duration-200"
    :class="{ 'opacity-0': experienceStarted }"
  >
    <UButton icon="i-heroicons-play" size="xl" @click="tryStartExperience"
      >Start Experience</UButton
    >
  </div>
</template>
