<script setup lang="ts">
async function loadSystems() {
  await import('@/aframe/systems/my-other-system');
}
</script>

<template>
  <AFrameScene :load-systems="loadSystems">
    <a-sphere position="0 0.5 -3"></a-sphere>
    <a-camera></a-camera>
    <a-sky color="black"></a-sky>
  </AFrameScene>
</template>
