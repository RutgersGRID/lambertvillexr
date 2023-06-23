<script setup lang="ts">
async function loadSystems() {
  //@ts-ignore
  await import('aframe-sun-sky');
  await import('@/aframe/components/button');
  await import('@/aframe/components/audio-player');
}
</script>

<template>
  <AFrameScene :load-systems="loadSystems">
    <a-sun-sky material="sunPosition: -0.2 4 -5"></a-sun-sky>
    <a-assets>
      <audio
        id="interview1"
        :src="usePublic('assets/sites/site3/interview3.mp3')"
      ></audio>
      <audio
        id="interview2"
        :src="usePublic('assets/sites/site3/interview3.mp3')"
        title="Interview 2"
      ></audio>
      <audio
        id="interview3"
        :src="usePublic('assets/sites/site3/interview3.mp3')"
        title="Interview 3"
        description="This is an interview. This is an interview. This is an interview. This is an interview. This is an interview. This is an interview. This is an interview. This is an interview. This is an interview. This is an interview. This is an interview. This is an interview. This is an interview. This is an interview. This is an interview. This is an interview."
      ></audio>
      <audio
        id="interview4"
        :src="usePublic('assets/sites/site3/interview3.mp3')"
        description="This is an interview. This is an interview. This is an interview. This is an interview. This is an interview. This is an interview. This is an interview. This is an interview. This is an interview. This is an interview. This is an interview. This is an interview. This is an interview. This is an interview. This is an interview. This is an interview."
      ></audio>
      <audio
        id="interview5"
        :src="usePublic('assets/sites/site3/interview3.mp3')"
        title="Interview 5"
        description="This is an interview. This is an interview. This is an interview. This is an interview. This is an interview. This is an interview. This is an interview. This is an interview. This is an interview. This is an interview. This is an interview. This is an interview. This is an interview. This is an interview. This is an interview. This is an interview."
      ></audio>
      <audio
        id="interview6"
        :src="usePublic('assets/sites/site3/interview3.mp3')"
        title="Interview 6"
        description="This is an interview. This is an interview. "
      ></audio>
    </a-assets>

    <a-audio-player src="#interview1" position="-6 4 -10"></a-audio-player>
    <a-audio-player src="#interview2" position="0 4 -10"></a-audio-player>
    <a-audio-player src="#interview3" position="6 4 -10"></a-audio-player>
    <a-audio-player src="#interview4" position="-6 0 -10"></a-audio-player>
    <a-audio-player src="#interview5" position="0 0 -10"></a-audio-player>
    <a-audio-player src="#interview6" position="6 0 -10"></a-audio-player>
    <a-entity camera look-controls wasd-controls position="0 1.6 0">
      <a-animated-cursor></a-animated-cursor>
    </a-entity>
  </AFrameScene>
</template>
