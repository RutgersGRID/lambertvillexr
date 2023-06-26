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
  await import('@/aframe/components/three-water-level-clear-button');
  await import('@/aframe/components/three-layer');
  await import('@/aframe/components/render-order');
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

const currentSlide = ref(0);
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
      <a-asset-item
        id="bike"
        :src="usePublic('assets/models/bike.glb')"
      ></a-asset-item>
      <img
        id="Jan1841"
        class="timeline-photo"
        :src="usePublic('assets/sites/site2/flood-images/Jan1841.jpg')"
        title="Janurary 1841"
        description="The first major flood recorded. Half of the wooden Lambertville - New Hope Bridge was swept away."
      />
      <img
        id="Oct1903"
        class="timeline-photo"
        :src="usePublic('assets/sites/site2/flood-images/Oct1903.jpg')"
        title="October 1903"
        description="The rebuilt Lambertville - New Hope bridge was destroyed again by a new flood."
      />
      <img
        id="Mar1936"
        class="timeline-photo"
        :src="usePublic('assets/sites/site2/flood-images/Mar1936.jpg')"
        title="March 1936"
        description="Two successive rainstorms combined with snowmelt resulted in floods through New Jersey."
      />
      <img
        id="Aug1955"
        class="timeline-photo"
        :src="usePublic('assets/sites/site2/flood-images/Aug1955.jpg')"
        title="August 2005"
        description="Hurricances Diane and Connie brought excess rainfall and winds. The Point Pleasant bridge was destroyed and was never rebuilt again."
      />
      <img
        id="Sept2004"
        class="timeline-photo"
        :src="usePublic('assets/sites/site2/flood-images/Sept2004.jpg')"
        title="September 2004"
        description="The remnants of Hurricane Ivan combined with a cold front produced excess rainfall across New Jersey."
      />
      <img
        id="Apr2005"
        class="timeline-photo"
        :src="usePublic('assets/sites/site2/flood-images/Apr2005.jpg')"
        title="April 2005"
        description="The Delaware River flodded due to snow melt and unusually high precipitation."
      />
      <img
        id="Jun2006"
        class="timeline-photo"
        :src="usePublic('assets/sites/site2/flood-images/Jun2006.jpg')"
        title="June 2006"
        description="FLood conditions resulted from a month of above-avaerage rainfall combined with a slow moving storm."
      />
    </a-assets>

    <a-sun-sky
      material="sunPosition: 0 1 0"
      three-layer="layers: 31; arLayers: 1;"
    ></a-sun-sky>
    <a-three-water
      sun-direction="0 -1 0"
      reflection-layer="31"
      three-layer="layers: 1"
      transparent="true"
      position="0 -1 0"
    ></a-three-water>
    <a-plane
      height="1000"
      width="1000"
      position="0 -0.2 0"
      rotation="-90 0 0"
      color="#333"
      opacity="0.5"
      transparent="true"
      three-layer="layers: 1"
    ></a-plane>

    <a-entity position="0 0 0" three-layer="layers: 1, 31">
      <a-entity position="0 0 0" rotation="0 70 0">
        <a-entity position="0 0 -6" rotation="0 -50 0">
          <!-- animation__rotation="property: rotation; from: 0 0 0; to: 0 360 0; loop: true; dur: 60000; easing: linear"
        > -->
          <a-cylinder
            height="0.25"
            color="#888"
            transparent="true"
            position="0 -0.125 0"
            radius="3"
          >
            <a-cylinder
              height="0.25"
              color="#555"
              transparent="true"
              position="0 -0.125 0"
              radius="3.2"
            ></a-cylinder>
          </a-cylinder>
          <a-entity position="1 0 0.2">
            <a-gltf-model
              src="#person1"
              position="1 0 0"
              scale="0.2 0.2 0.2"
            ></a-gltf-model>
            <a-obj-model
              src="#car-obj"
              mtl="#car-mtl"
              scale="0.6 0.6 0.6"
              position="-1 0.8 0"
              rotation="0 20 0"
            ></a-obj-model>
            <a-entity position="1.3 0 0.5" rotation="0 -20 0">
              <a-entity rotation="0 0 10">
                <a-gltf-model
                  src="#bike"
                  position="-9.25 0.6 2.8"
                  scale="0.015 0.015 0.015"
                ></a-gltf-model>
              </a-entity>
            </a-entity>
          </a-entity>
        </a-entity>
      </a-entity>

      <a-entity
        id="water_controls"
        render-order="order: 100; depthTest: false"
        position="0 0.1 0"
        rotation="0 -20 0"
      >
        <a-entity rotation="0 -80 0">
          <a-slide-show
            position="0 5 -7"
            image-query=".timeline-photo"
            show-controls="true"
            description-height="2"
            :current-slide="currentSlide"
          ></a-slide-show>
        </a-entity>

        <a-entity rotation="0 20 0">
          <a-three-water-level-clear-button
            position="0 0 -5"
            rotation="-20 0 0"
          ></a-three-water-level-clear-button>
        </a-entity>
        <a-cylinder
          color="black"
          height="2"
          radius="5.2"
          transparent="true"
          opacity="0.75"
          theta-start="50"
          :theta-length="20 * (waterLevels.length - 1 + 2)"
          open-ended="true"
          side="double"
          render-order="order: 80; depthTest: false"
        ></a-cylinder>
        <a-cylinder
          color="white"
          height="0.05"
          radius="5.2"
          transparent="true"
          theta-start="60"
          :theta-length="20 * (waterLevels.length - 1)"
          open-ended="true"
          side="double"
          render-order="order: 90; depthTest: false"
        ></a-cylinder>
        <a-entity
          v-for="(waterLevel, index) in waterLevels"
          :rotation="`0 ${index * -20} 0`"
        >
          <a-three-water-level-button
            :water-level="getWaterLevelFromCrest(waterLevel.crest)"
            unit="feet"
            :title="waterLevel.date"
            position="0 0 -5"
            rotation="-20 0 0 "
            @click="currentSlide = index"
          ></a-three-water-level-button>
        </a-entity>
      </a-entity>
    </a-entity>

    <a-entity
      camera
      look-controls
      wasd-controls="enabled:false"
      position="0 1.6 0"
      three-layer="layers: 1"
    >
      <a-animated-cursor></a-animated-cursor>
    </a-entity>
  </AFrameScene>
</template>
