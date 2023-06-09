<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  },
});
</script>

<template>
  <UButton
    color="gray"
    :icon="isDark ? 'i-heroicons-moon' : 'i-heroicons-sun'"
    @click="isDark = !isDark"
  >
    <ClientOnly>{{ isDark ? 'Dark' : 'Light' }}</ClientOnly>
  </UButton>
</template>
