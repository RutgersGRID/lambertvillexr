<script setup lang="ts">
const title = 'Pittore Justice Center';
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
  await import('@/aframe/components/text-box');
  await import('@/aframe/components/material-override');
  await import('@/aframe/components/music-radio');
}

function getWaterLevelFromCrest(crest: number) {
  return crest - 12;
}

const waterLevels: { level: number }[] = [
  {
    level: 1,
  },
  {
    level: 2,
  },
  {
    level: 3,
  },
  {
    level: 5,
  },
  {
    level: 7,
  },
];

const currentSlide = ref(0);
</script>

<template>
  <AFrameScene
    :load-systems="loadSystems"
    :start-title="title"
    start-description="If you're at the site, please press the start button while facing the site marker. Otherwise, just press the start button."
  >
    <a-assets>
      <a-asset-item
        id="person1"
        :src="usePublic('assets/sites/site6/Person1.glb')"
      ></a-asset-item>
      <a-asset-item
        id="car-obj"
        :src="usePublic('assets/sites/site2/car/car.obj')"
      ></a-asset-item>
      <a-asset-item
        id="car-mtl"
        :src="usePublic('assets/sites/site2/car/car.mtl')"
      ></a-asset-item>
      <a-asset-item
        id="bike"
        :src="usePublic('assets/sites/site2/bike.glb')"
      ></a-asset-item>
      <img
        id="Jan1841"
        class="timeline-photo"
        :src="usePublic('assets/sites/site2/flood-images/Jan1841.jpg')"
        title="Janurary 1841"
        description="In the first major flood recorded, half of the wooden Lambertville-New Hope Bridge was swept away."
      />
      <img
        id="Oct1903"
        class="timeline-photo"
        :src="usePublic('assets/sites/site2/flood-images/Oct1903.jpg')"
        title="October 1903"
        description="The rebuilt Lambertville-New Hope bridge was destroyed again by a new flood."
      />
      <img
        id="Mar1936"
        class="timeline-photo"
        :src="usePublic('assets/sites/site2/flood-images/Mar1936.jpg')"
        title="March 1936"
        description="Two successive rainstorms combined with snowmelt resulted in floods throughout New Jersey."
      />
      <img
        id="Aug1955"
        class="timeline-photo"
        :src="usePublic('assets/sites/site2/flood-images/Aug1955.jpg')"
        title="August 2005"
        description="Hurricances Diane and Connie brought excess rainfall and winds. The Point Pleasant bridge was destroyed and never rebuilt again."
      />
      <img
        id="Sept2004"
        class="timeline-photo"
        :src="usePublic('assets/sites/site2/flood-images/Sept2004.jpg')"
        title="September 2004"
        description="The remnants of Hurricane Ivan, combined with a cold front, produced excess rainfall across New Jersey."
      />
      <img
        id="Apr2005"
        class="timeline-photo"
        :src="usePublic('assets/sites/site2/flood-images/Apr2005.jpg')"
        title="April 2005"
        description="The Delaware River flooded due to snow melt and unusually high precipitation."
      />
      <img
        id="Jun2006"
        class="timeline-photo"
        :src="usePublic('assets/sites/site2/flood-images/Jun2006.jpg')"
        title="June 2006"
        description="A month of above-average rainfall combined with a slow-moving storm created the perfect flood conditions."
      />
      <img id="pano" :src="usePublic('assets/sites/site3/pano.jpg')" />
      <a-asset-item
        id="stop-sign"
        :src="usePublic('assets/sites/site2/stop_sign.glb')"
      ></a-asset-item>
      <audio
        class="music"
        :src="usePublic('assets/music/end-poem-smooth.wav')"
      ></audio>
      <audio
        class="music"
        :src="usePublic('assets/music/iron-golem-vibe.wav')"
      ></audio>
      <audio class="music" :src="usePublic('assets/music/new-me.wav')"></audio>
    </a-assets>

    <a-entity rotation="0 0 0">
      <a-sky
        src="#pano"
        three-layer="layers: 31; desktopLayers: 1;"
        rotation="11.7 0 0"
      ></a-sky>
    </a-entity>
    <a-three-water
      sun-direction="0 -1 0"
      reflection-layer="31"
      three-layer="layers: 1"
      transparent="true"
      position="0 -1 0"
    ></a-three-water>
    <a-music-radio></a-music-radio>

    <a-entity position="0 0 0" rotation="0 70 0" three-layer="layers: 1, 31">
      <!-- Models -->
      <a-entity position="0 0 0" rotation="0 -190 0">
        <a-entity
          position="0 0 -6.5"
          rotation="0 -50 0"
          animation__rotation="property: rotation; from: 0 0 0; to: 0 360 0; loop: true; dur: 30000; easing: linear"
        >
          <a-cylinder
            height="0.25"
            color="#27292b"
            transparent="true"
            position="0 -0.125 0"
            radius="3"
          >
            <a-entity rotation="0 40 0">
              <a-box
                width="5.9"
                depth="0.2"
                height="0.3"
                color="#f0ad1b"
                position="0 0 0.2"
              ></a-box>
              <a-box
                width="5.9"
                depth="0.2"
                height="0.3"
                color="#f0ad1b"
                position="0 0 -0.2"
              ></a-box>
            </a-entity>
            <a-cylinder
              height="0.25"
              color="#7e8185"
              transparent="true"
              position="0 -0.125 0"
              radius="3.2"
            ></a-cylinder>
          </a-cylinder>
          <a-entity position="0.75 0 0.1">
            <a-gltf-model
              src="#stop-sign"
              scale="0.01 0.01 0.01"
              rotation="0 90 0"
              position="-2.4 0 0"
            ></a-gltf-model>
            <a-gltf-model
              src="#person1"
              position="1 0 0"
              scale="0.2 0.2 0.2"
              material-override="color: black"
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
                  material-override="color: black"
                ></a-gltf-model>
              </a-entity>
            </a-entity>
          </a-entity>
        </a-entity>
      </a-entity>

      <!-- UI -->
      <a-entity
        render-order="order: 100; depthTest: false"
        position="0 -0.5 0"
        rotation="0 -20 0"
      >
        <!-- Site Marker -->
        <a-entity rotation="0 -10 0">
          <a-text-box
            width="3"
            height="3"
            position="0 2.5 -6"
            :title="title"
            description="Click on the buttons below to view various hypothetical water levels during a flood. A virtual model of a street is displayed on the right for reference."
          ></a-text-box>
        </a-entity>

        <!-- Slide Show -->
        <a-entity rotation="0 -70 0">
          <a-slide-show
            position="0 5 -6"
            image-query=".timeline-photo"
            show-controls="true"
            description-height="2"
            current-slide="0"
            autoplay="true"
            autoplay-duration="5000"
          ></a-slide-show>
        </a-entity>

        <!-- Water Buttons -->
        <a-entity rotation="0 20 0">
          <a-three-water-level-clear-button
            position="0 0 -5"
            rotation="-20 0 0"
          ></a-three-water-level-clear-button>
        </a-entity>
        <a-cylinder
          color="black"
          position="0 -0.1 0"
          height="1.8"
          radius="5.2"
          transparent="true"
          opacity="0.75"
          :theta-start="waterLevels.length * 20 - 10"
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
          :theta-start="waterLevels.length * 20"
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
            :water-level="waterLevel.level"
            unit="feet"
            position="0 0 -5"
            rotation="-20 0 0 "
          ></a-three-water-level-button>
        </a-entity>
      </a-entity>
    </a-entity>

    <a-entity
      camera
      look-controls="pointerLockEnabled: true"
      wasd-controls="enabled:false"
      position="0 1.6 0"
      three-layer="layers: 1"
    >
      <a-animated-cursor></a-animated-cursor>
    </a-entity>
  </AFrameScene>
</template>
