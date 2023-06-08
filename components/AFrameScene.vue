<script setup lang="ts">
const aframeLoaded = ref(false);

const props = defineProps<{
  loadSystems?: () => Promise<void>;
  attributes?: { [key: string]: any };
}>();

async function loadDefaultSystems() {
  await import('@/aframe/systems/my-system');
}

if (process.client) {
  await import('aframe');

  await loadDefaultSystems();
  if (props.loadSystems) await props.loadSystems();
  aframeLoaded.value = true;
}
</script>

<template>
  <ClientOnly>
    <USkeleton class="absolute h-full w-full"></USkeleton>
    <a-scene
      v-if="aframeLoaded"
      v-bind="attributes"
      embedded
      class="w-full h-full"
    >
      <slot></slot>
    </a-scene>
  </ClientOnly>
</template>
