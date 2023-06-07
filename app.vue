<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div
    class="bg-white dark:bg-gray-900 flex flex-col prose dark:prose-invert min-h-full min-w-full"
  >
    <div class="flex-auto relative">
      <div class="absolute w-full h-full">
        <NuxtPage />
      </div>
    </div>
    <BottomBar />
  </div>
</template>

<style lang="scss">
$xs: '320px';
$sm: '640px';
$md: '768px';
$lg: '1024px';
$xl: '1280px';
$_2xl: '1536px';

* {
  font-family: 'Raleway';
}

html,
body,
#__nuxt {
  height: 100%;
  min-height: 100%;
}
</style>
