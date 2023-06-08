<script setup lang="ts">
async function loadSystems() {
  await import('@/aframe/systems/my-other-system');
}
</script>

<template>
  <AFrameScene :load-systems="loadSystems">
    <a-box position="0 0.5 -3"></a-box>
    <a-camera></a-camera>
    <a-sky color="pink"></a-sky>
  </AFrameScene>
</template>
