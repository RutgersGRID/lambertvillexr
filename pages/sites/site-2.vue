<script setup lang="ts">
definePageMeta({
  pageName: 'Pittore Justice Center',
});

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
  {
    date: 'October 1903',
    crest: 31.08,
  },
  {
    date: 'March 1936',
    crest: 17.89,
  },
  {
    date: 'August 1955',
    crest: 24.16,
  },
  {
    date: 'September 2004',
    crest: 16.5,
  },
  {
    date: 'April 2005',
    crest: 20,
  },
  {
    date: 'June 2006',
    crest: 19.08,
  },
];
</script>

<template>
  <AFrameScene :load-systems="loadSystems">
    <a-assets>
      <a-asset-item
        id="person1"
        :src="usePublic('assets/sites/site6/Person1.glb')"
      ></a-asset-item>
      <a-asset-item
        id="car-obj"
        :src="usePublic('assets/models/car/car.obj')"
      ></a-asset-item>
      <a-asset-item
        id="car-mtl"
        :src="usePublic('assets/models/car/car.mtl')"
      ></a-asset-item>
    </a-assets>

    <a-sun-sky
      material="sunPosition: 0 1 0"
      three-layer="layers: 31; desktopLayers: 1;"
    ></a-sun-sky>

    <a-three-water
      sun-direction="0 -1 0"
      reflection-layer="31"
      three-layer="layers: 1"
    ></a-three-water>
    <a-plane
      height="1000"
      width="1000"
      rotation="-91 0 0"
      color="#333"
    ></a-plane>

    <a-entity position="0 0 -10">
      <a-gltf-model
        src="#person1"
        position="-5 0 0"
        scale="0.2 0.2 0.2"
        three-layer="layers: 1, 31"
      ></a-gltf-model>
      <a-obj-model
        src="#car-obj"
        mtl="#car-mtl"
        three-layer="layers: 1"
        scale="0.6 0.6 0.6"
        position="-7 0.8 0"
        rotation="0 20 0"
      ></a-obj-model>
      <a-entity position="0 0.5 0" rotation="-20 0 0">
        <a-three-water-level-button
          :water-level="-1"
          unit="feet"
          title="Clear"
          :position="`-3 0 0 0`"
          three-layer="layers: 1"
          overlay
        ></a-three-water-level-button>
        <a-three-water-level-button
          v-for="(waterLevel, index) in waterLevels"
          :water-level="getWaterLevelFromCrest(waterLevel.crest)"
          unit="feet"
          :title="waterLevel.date"
          :position="`${index * 1.5} 0 0 0`"
          three-layer="layers: 1"
          render-order="order: 100; depthTest: false"
        ></a-three-water-level-button>
      </a-entity>
    </a-entity>

    <a-entity
      camera
      look-controls
      wasd-controls
      position="0 1.6 0"
      three-layer="layers: 1"
    >
      <a-animated-cursor></a-animated-cursor>
    </a-entity>
  </AFrameScene>
</template>
