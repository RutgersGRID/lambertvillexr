<script setup lang="ts">
definePageMeta({
  pageName: 'Hibernia Firehouse',
});

async function loadSystems() {
  //@ts-ignore
  await import('aframe-sun-sky');
}
</script>

<template>
  <AFrameScene :load-systems="loadSystems">
    <a-sun-sky material="sunPosition: -0.2 4 -5"></a-sun-sky>
    <a-box position="0 0.5 -3"></a-box>
    <a-camera></a-camera>
  </AFrameScene>
</template>
