<script setup lang="ts">
async function loadSystems() {
  //@ts-ignore
  await import('aframe-sun-sky');
  await import('@/aframe/components/text-box');
}
</script>

<template>
  <AFrameScene :load-systems="loadSystems">
    <a-sun-sky material="sunPosition: -0.2 4 -5"></a-sun-sky>

    <a-entity position="0 -1.5 -1">
      <!-- First Row -->
      <a-text-box
        width="2"
        height="2"
        title="Only Title"
        position="-3 0 -5"
      ></a-text-box>
      <a-text-box
        width="2"
        height="2"
        description="This is some text, this is some text, this is some text, this is some text, this is some text, this is some text, this is some text, this is some text, this is some text, this is some text, this is some text, this is some text,"
        position="0 0 -5"
      ></a-text-box>
      <a-text-box
        width="2"
        height="2"
        title="Some Title"
        description="This is some text, this is some text, this is some text, this is some text, this is some text, this is some text, this is some text, this is some text, this is some text, this is some text, this is some text, this is some text,"
        position="3 0 -5"
      ></a-text-box>

      <!-- Second Row -->
      <a-text-box
        width="2"
        height="2"
        title="Only Title"
        autofit-height="false"
        position="-3 3 -5"
      ></a-text-box>
      <a-text-box
        width="2"
        height="2"
        description="This is some text, this is some text"
        position="0 3 -5"
      ></a-text-box>
      <a-text-box
        width="2"
        height="2"
        title="Some Title"
        description="This is some text, this is some text "
        position="3 3 -5"
      ></a-text-box>

      <!-- Third Row -->
      <a-text-box
        width="2"
        height="2"
        title="Some Title"
        description="This is some text, this is some text This is some text, this is some text This is some text, this is some text This is some text, this is some text "
        autofit-height="false"
        position="-3 6 -5"
      ></a-text-box>
      <a-text-box
        width="2"
        height="2"
        title="Some Title"
        description="This is some text, this is some text "
        autofit-height="false"
        position="0 6 -5"
      ></a-text-box>
      <a-text-box
        width="2"
        height="2"
        description="This is some text, this is some text "
        autofit-height="false"
        position="3 6 -5"
      ></a-text-box>
    </a-entity>

    <a-entity
      camera
      look-controls="pointerLockEnabled: true"
      wasd-controls
      position="0 1.6 0"
    >
      <a-animated-cursor></a-animated-cursor>
    </a-entity>
  </AFrameScene>
</template>
