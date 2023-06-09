<script setup lang="ts">
import { Entity, Scene } from 'aframe';

const aframeLoaded = ref(false);
const sceneLoaded = ref(false);

const props = defineProps<{
  loadSystems?: () => Promise<void>;
  attributes?: { [key: string]: any };
}>();

const scene = ref<Scene>();

onMounted(async () => {
  await import('aframe');

  async function loadDefaultSystems() {
    await import('@/aframe/components/video');
    await import('@/aframe/components/video-controls');
    await import('@/aframe/systems/style-video-controls');
    await import('@/aframe/systems/ball-scene');
  }
  await loadDefaultSystems();
  if (props.loadSystems) await props.loadSystems();
  aframeLoaded.value = true;

  nextTick(() => {
    scene.value?.addEventListener('loaded', () => {
      if (!scene.value) return;
      const camera = scene.value.querySelector<Entity>('[camera]');
      if (!camera) return;
      camera.setAttribute('look-controls', 'enabled', false);
      camera.setAttribute('wasd-controls', 'enabled', false);

      scene.value?.pause();
      sceneLoaded.value = true;
    });
  });
});

function onSceneEntered() {
  if (!scene.value) return;
  const camera = scene.value.querySelector<Entity>('[camera]');
  if (!camera) return;
  camera.setAttribute('look-controls', 'enabled', true);
  camera.setAttribute('wasd-controls', 'enabled', true);
  const videos = scene.value.querySelectorAll<HTMLMediaElement>('video');
  for (let video of videos) {
    video.play();
    video.pause();
  }
}
</script>

<template>
  <ClientOnly>
    <div
      class="absolute h-full w-full z-20 transition ease-in-out duration-1000 bg-gray-200 dark:bg-gray-900 pointer-events-none"
      :class="{ 'opacity-0': sceneLoaded }"
    >
      <USkeleton class="absolute h-full w-full"></USkeleton>
      <div
        class="absolute h-full w-full flex justify-center items-center text-gray-400 dark:text-gray-500"
      >
        <UIcon name="i-heroicons-arrow-path" class="animate-spin text-4xl" />
        <div class="ml-4 text-4xl font-bold">LOADING...</div>
      </div>
    </div>
    <EnterASceneOverlay
      v-if="sceneLoaded"
      @scene-entered="onSceneEntered"
    ></EnterASceneOverlay>
    <a-scene
      device-orientation-permission-ui="enabled: false"
      ref="scene"
      v-if="aframeLoaded"
      v-bind="attributes"
      embedded
      class="w-full h-full"
      loading-screen="enabled: false"
    >
      <slot></slot>
    </a-scene>
  </ClientOnly>
</template>
