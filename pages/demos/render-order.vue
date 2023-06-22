<script setup lang="ts">
async function loadSystems() {
  //@ts-ignore
  await import('aframe-sun-sky');
  await import('@/aframe/components/three-sky');
  await import('@/aframe/components/three-water');
  await import('@/aframe/systems/three-water-controller');
  await import('@/aframe/components/three-water-level-button');
  await import('@/aframe/components/three-layer');
  await import('@/aframe/components/render-order');
  await import('@/aframe/components/overlay');
}

function getWaterLevelFromCrest(crest: number) {
  return crest - 12;
}

const waterLevels: { date: string; crest: number }[] = [
  {
    date: 'January 1841',
    crest: 17.9,
  },
];

const buttonVisible = true;
</script>

<template>
  <AFrameScene :load-systems="loadSystems">
    <a-sun-sky material="sunPosition: 0 1 0"></a-sun-sky>

    <a-three-water
      sun-direction="0 -1 0"
      reflection-layer="0"
      position="0 -1 0"
      visible="true"
    ></a-three-water>
    <a-plane
      height="1000"
      width="1000"
      rotation="-90 0 0"
      color="#333"
      opacity="0.5"
      transparent="true"
      visible="true"
    ></a-plane>
    <a-box position="-0.5 0.5 -2" color="red"></a-box>
    <a-entity position="0 0 0">
      <a-entity id="water_controls" render-order="order: 100; depthTest: false">
        <a-entity position="0 0.5 0" rotation="0 20 0">
          <a-box
            position="0 0 -2"
            color="brown"
            overlay
            :visible="!buttonVisible"
          ></a-box>
          <a-box
            position="0 0 -5"
            render-order="order: 200; depthTest: false"
            color="blue"
            :visible="!buttonVisible"
          ></a-box>
          <a-three-water-level-button
            :water-level="-1"
            unit="feet"
            title="Clear"
            position="0 0 -5"
            rotation="-20 0 0"
            :visible="buttonVisible"
          ></a-three-water-level-button>
        </a-entity>
        <a-cylinder
          color="black"
          position="0 0.5 0"
          height="0.25"
          radius="5.2"
          theta-start="60"
          :theta-length="20 * (waterLevels.length - 1)"
          open-ended="true"
          side="double"
          :visible="buttonVisible"
        ></a-cylinder>
        <a-entity
          v-for="(waterLevel, index) in waterLevels"
          position="0 0.5 0"
          :rotation="`0 ${index * -20} 0`"
          :visible="buttonVisible"
        >
          <a-three-water-level-button
            :water-level="getWaterLevelFromCrest(waterLevel.crest)"
            unit="feet"
            :title="waterLevel.date"
            position="0 0 -5"
            rotation="-20 0 0 "
          ></a-three-water-level-button>
        </a-entity>
      </a-entity>
    </a-entity>

    <a-entity
      camera
      look-controls
      wasd-controls="enabled:false"
      position="0 1.6 0"
    >
      <a-animated-cursor></a-animated-cursor>
    </a-entity>
  </AFrameScene>
</template>
