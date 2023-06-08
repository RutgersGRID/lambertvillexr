<script setup lang="ts">
import { Scene } from 'aframe';

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
    await import('@/aframe/systems/video');
    await import('@/aframe/systems/video-controls');
    await import('@/aframe/systems/style-video-controls');
    await import('@/aframe/systems/ball-scene');
  }
  await loadDefaultSystems();
  if (props.loadSystems) await props.loadSystems();
  aframeLoaded.value = true;

  nextTick(() => {
    scene.value?.addEventListener('loaded', () => {
      const camera = document.querySelector('[camera]');
      camera.setAttribute('look-controls', 'enabled', false);
      camera.setAttribute('wasd-controls', 'enabled', false);

      scene.value?.pause();
      sceneLoaded.value = true;
    });
  });
});

function onSceneEntered() {
  const camera = document.querySelector('[camera]');
  camera.setAttribute('look-controls', 'enabled', true);
  camera.setAttribute('wasd-controls', 'enabled', true);
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
      :scene="scene"
      v-if="sceneLoaded"
      @scene-entered="onSceneEntered"
    ></EnterASceneOverlay>
    <a-scene
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
