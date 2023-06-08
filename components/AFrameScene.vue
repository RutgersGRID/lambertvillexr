<script setup lang="ts">
const aframeLoaded = ref(false);

const props = defineProps<{
  loadSystems?: () => Promise<void>;
  attributes?: { [key: string]: any };
}>();

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
});
</script>

<template>
  <ClientOnly>
    <USkeleton class="absolute h-full w-full"></USkeleton>
    <div
      class="absolute h-full w-full flex justify-center items-center text-gray-400 dark:text-gray-500"
    >
      <UIcon name="i-heroicons-arrow-path" class="animate-spin text-4xl" />
      <div class="ml-4 text-4xl font-bold">LOADING...</div>
    </div>
    <a-scene
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
