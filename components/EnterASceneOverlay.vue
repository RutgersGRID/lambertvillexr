<script setup lang="ts">
import { Scene } from 'aframe';

const experienceStarted = ref(false);
const showUI = ref(true);

const props = defineProps<{
  scene?: Scene;
}>();

const emit = defineEmits(['sceneEntered']);

watch(props, () => {
  props.scene?.addEventListener('loaded', () => {
    const camera = document.querySelector('[camera]');
    camera.setAttribute('look-controls', false);
    camera.setAttribute('wasd-controls', false);
  });
});

function startExperience() {
  experienceStarted.value = true;
  emit('sceneEntered');
  setTimeout(() => {
    showUI.value = false;
  }, 300);
}
</script>

<template>
  <div
    v-if="showUI"
    class="absolute h-full w-full flex justify-center items-center bg-opacity-75 bg-black z-10 transition-all duration-200"
    :class="{ 'opacity-0': experienceStarted }"
  >
    <UButton icon="i-heroicons-play" size="xl" @click="startExperience"
      >Start Experience</UButton
    >
  </div>
</template>
