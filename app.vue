<script setup lang="ts"></script>

<template>
  <div class="bg-white dark:bg-gray-900 flex flex-col h-screen w-screen">
    <div class="flex-auto relative flex flex-row overflow-auto">
      <SideNavMenu
        class="hidden lg:flex flex-grow-0 w-screen max-w-xs p-8 self-stretch"
      ></SideNavMenu>
      <div class="flex-grow relative">
        <NuxtPage />
      </div>
    </div>
    <BottomNavBar class="lg:hidden" />
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

.a-enter-vr-button,
.a-enter-ar-button {
  z-index: auto !important;
}
</style>
