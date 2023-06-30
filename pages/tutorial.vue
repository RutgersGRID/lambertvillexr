<script setup lang="ts">
definePageMeta({
  pageOrder: 2,
});

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
