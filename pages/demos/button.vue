<script setup lang="ts">
import { Entity } from 'aframe';

async function loadSystems() {
  //@ts-ignore
  await import('aframe-sun-sky');
  await import('@/aframe/components/button');
}

const myButton = ref<Entity>();

function onSceneEntered() {
  console.log('mounted my butotn, ', myButton.value);
  if (!myButton.value) return;
  myButton.value.addEventListener('click', () => {
    console.log('Button clicked!');
  });

  setInterval(() => {
    if (!myButton.value) return;
    myButton.value.setAttribute(
      'visible',
      !myButton.value.getAttribute('visible')
    );
  }, 2000);
}
</script>

<template>
  <AFrameScene :load-systems="loadSystems" @scene-entered="onSceneEntered">
    <a-sun-sky material="sunPosition: -0.2 4 -5"></a-sun-sky>
    <a-assets>
      <img id="my-button" :src="usePublic('assets/images/play.png')" />
    </a-assets>

    <a-button ref="myButton" src="#my-button" position="0 1.6 -10"></a-button>
    <a-entity camera look-controls wasd-controls position="0 1.6 0">
      <a-animated-cursor></a-animated-cursor>
    </a-entity>
  </AFrameScene>
</template>
