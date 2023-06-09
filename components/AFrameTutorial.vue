<script setup lang="ts">
const emit = defineEmits(['finished']);

async function loadSystems() {
  await import('aframe-gradient-sky');
  await import('@/aframe/systems/tutorial');
}

type TutorialSegment = {
  name: string;
  description: string;
  desktopDescription?: string;
  subSegments: {
    instruction: string;
    init: (resolve: (value: any) => void) => void;
  }[];
};

const segments: TutorialSegment[] = [
  {
    name: 'Looking Around',
    description:
      'The circle at the center of your screen is your "cursor", which points to you are looking. You can look around by rotating your device around.',
    desktopDescription:
      'The circle at the center of your screen is your "cursor", which points to where you are looking. You can look around by clicking and dragging the screen.',
    subSegments: [
      { instruction: 'Look at the ball above you', init: () => {} },
      { instruction: 'Look at the ball to the left of you', init: () => {} },
      { instruction: 'Look at the ball to the right of you', init: () => {} },
    ],
  },
  {
    name: 'Clicking',
    description:
      'To "click" on an object, move your cursor over to object, and then continue looking at the object until the cursor shrinks.',
    subSegments: [
      {
        instruction:
          'Look at the video and "click" on the play button to start playing the video',
        init: (resolve) => {},
      },
      {
        instruction:
          'Then look away and then back at the video and "click" on the pause button to pause the video.',
        init: (resolve) => {},
      },
    ],
  },
  {
    name: 'Finish',
    description: "You're now done with the tutorial!",
    subSegments: [
      {
        instruction: 'Please look at and "click" on the play button to exit.',
        init: (resolve) => {},
      },
    ],
  },
];

const currSegmentIndex = ref(0);
const currSegment = computed(() => segments[currSegmentIndex.value]);
const currSubSegmentIndex = ref(0);
const sceneEntered = ref(false);

async function runTutorial() {
  while (currSegmentIndex.value < segments.length) {
    while (currSubSegmentIndex.value < currSegment.value.subSegments.length) {
      const currSubSegment =
        currSegment.value.subSegments[currSubSegmentIndex.value];
      await new Promise((resolve) => {
        currSubSegment.init(resolve);
      });
    }
  }
  emit('finished');
}
runTutorial();

// setInterval(() => {
//   progress.value += 1;
//   if (progress.value > currSegment.value.subSegments) progress.value = 0;
// }, 1000);
</script>

<template>
  <div
    class="absolute h-full w-full z-10 opacity-0 transition-all duration-200 bg-transparent"
    :class="{ 'opacity-100': sceneEntered }"
  >
    <div class="relative w-full xs:max-w-xs text-white">
      <div
        class="absolute h-full w-full bg-black opacity-75 xs:rounded-br-lg"
      ></div>
      <div class="relative p-4">
        <div class="font-bold">{{ currSegment.name }}</div>
        <div class="font-regular mt-2">{{ currSegment.description }}</div>
        <div
          class="font-regular mt-2"
          v-if="currSegment.subSegments[currSubSegmentIndex]"
        >
          {{ currSegment.subSegments[currSubSegmentIndex].instruction }}
        </div>
        <div
          class="relative h-1 mt-4 flex flex-row justify-between items-center gap-2"
        >
          <div
            v-for="index in currSegment.subSegments.length"
            class="h-full flex-1 rounded-full bg-gray-400 overflow-hidden"
          >
            <div
              class="h-full w-0 bg-white transition-all duration-200"
              :class="{ 'w-full': index <= currSubSegmentIndex }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <AFrameScene
    :load-systems="loadSystems"
    :hide-tutorial="true"
    start-button-text="Start Tutorial"
    start-title="Welcome"
    start-description="This is a tutorial on how to interact with an AR experience. These experiences are audio and visual so make sure to have your volume on!"
    :always-show-overlay="true"
    @scene-entered="sceneEntered = true"
  >
    <a-sun-sky material="sunPosition: -0.2 4 -5"></a-sun-sky>
    <a-entity id="looking-around">
      <a-sphere id="ball-above" position="0 1.6 -20"></a-sphere>
    </a-entity>
    <a-entity id="clicking"></a-entity>
    <a-entity id="finish"></a-entity>
    <!-- <a-entity position="0 1.6 -2">
      <a-entity
        material="shader: flat; color: black; opacity: 0.75"
        geometry="primitive: plane; width: 1.2; height: 1.2"
      >
      </a-entity>
      <a-entity
        :text="`value: Tutorial; shader: msdf; font: ${robotoBlack}; color: white; wrap-count: 16`"
        position="0 0.35 0"
      ></a-entity>
      <a-entity
        :text="`baseline: top; value: Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. ; shader: msdf; font: ${robotoRegular}; color: white; wrap-count: 20`"
        position="0 0.2 0"
      ></a-entity>
    </a-entity> -->
    <a-camera position="0 1.6 0" wasd-controls="enabled:false"></a-camera>
  </AFrameScene>
</template>
