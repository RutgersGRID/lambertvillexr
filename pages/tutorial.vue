<script setup lang="ts">
function onFinished() {
  navigateTo('/');
}
</script>

<template>
  <AFrameTutorial @finished="onFinished"></AFrameTutorial>
</template>
