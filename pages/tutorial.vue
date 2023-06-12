<script setup lang="ts">
function onFinished() {
  navigateTo('/');
}
</script>

<template>
  <AFrameTutorial
    @finished="onFinished"
    :force-tutorial="true"
  ></AFrameTutorial>
</template>
