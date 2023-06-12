<script setup lang="ts">
import { Entity } from 'aframe';
import VideoComponent from '~/aframe/components/video';

const emit = defineEmits(['finished']);
const props = defineProps<{
  forceTutorial: boolean;
}>();

let tutorialFinished = false;
if (process.client) {
  if (props.forceTutorial) tutorialFinished = false;
  else tutorialFinished = localStorage.getItem('tutorialFinished') === 'true';
}

onMounted(() => {
  if (tutorialFinished) emit('finished');
});

async function loadSystems() {
  //@ts-ignore
  await import('aframe-sun-sky');
}

type TutorialSegment = {
  name: string;
  description: string;
  desktopDescription?: string;
  subSegments: {
    instruction: string;
    init: (resolve: () => void) => void;
  }[];
};

const ballAbove = ref<Entity>();
const ballBelow = ref<Entity>();
const ballRight = ref<Entity>();
const ballLeft = ref<Entity>();
const video = ref<
  Entity<{
    video: VideoComponent;
  }>
>();
const playButton = ref<Entity>();

const segments: TutorialSegment[] = [
  {
    name: 'Looking Around',
    description:
      'The circle at the center of your screen is your "cursor", which points to you are looking. You can look around by rotating your device around.',
    desktopDescription:
      'The circle at the center of your screen is your "cursor", which points to where you are looking. You can look around by clicking and dragging the screen.',
    subSegments: [
      {
        instruction: 'Look at the ball above you',
        init: (resolve) => {
          const entity = ballAbove.value;
          if (!entity) return;
          entity.setAttribute('visible', true);
          const mouseEnterListener = () => {
            entity.removeEventListener('mouseenter', mouseEnterListener);
            resolve();
          };
          entity.addEventListener('mouseenter', mouseEnterListener);
        },
      },
      {
        instruction: 'Look at the ball to the left of you',
        init: (resolve) => {
          const entity = ballLeft.value;
          if (!entity) return;
          entity.setAttribute('visible', true);
          const mouseEnterListener = () => {
            entity.removeEventListener('mouseenter', mouseEnterListener);
            resolve();
          };
          entity.addEventListener('mouseenter', mouseEnterListener);
        },
      },
      {
        instruction: 'Look at the ball to the right of you',
        init: (resolve) => {
          const entity = ballRight.value;
          if (!entity) return;
          entity.setAttribute('visible', true);
          const mouseEnterListener = () => {
            entity.removeEventListener('mouseenter', mouseEnterListener);
            resolve();
          };
          entity.addEventListener('mouseenter', mouseEnterListener);
        },
      },
      {
        instruction: 'Look at the ball below you',
        init: (resolve) => {
          const entity = ballBelow.value;
          if (!entity) return;
          entity.setAttribute('visible', true);
          const mouseEnterListener = () => {
            entity.removeEventListener('mouseenter', mouseEnterListener);
            resolve();
          };
          entity.addEventListener('mouseenter', mouseEnterListener);
        },
      },
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
        init: (resolve) => {
          const entity = video.value;
          if (!entity) return;
          entity.setAttribute('visible', true);
          let loop = setInterval(() => {
            if (entity.components.video.isVideoPlaying) {
              resolve();
              clearInterval(loop);
            }
          }, 1000);
        },
      },
      {
        instruction:
          'Then look away and then back at the video and "click" on the pause button to pause the video.',
        init: (resolve) => {
          const entity = video.value;
          if (!entity) return;

          let loop = setInterval(() => {
            if (!entity.components.video.isVideoPlaying) {
              resolve();
              clearInterval(loop);
              entity?.setAttribute('visible', false);
            }
          }, 1000);
        },
      },
    ],
  },
  {
    name: 'Finish',
    description: "You're now done with the tutorial!",
    subSegments: [
      {
        instruction: 'Please look at and "click" on the play button to exit.',
        init: (resolve) => {
          const entity = playButton.value;
          if (!entity) return;

          entity.setAttribute('visible', true);
          entity.classList.add('clickable');
          entity.addEventListener('click', () => {
            resolve();
          });
        },
      },
    ],
  },
];

const currSegmentIndex = ref(0);
const currSegment = computed(() => segments[currSegmentIndex.value]);
const currSubSegmentIndex = ref(0);
const sceneEntered = ref(false);

async function runTutorial() {
  currSegmentIndex.value = 0;
  while (currSegmentIndex.value < segments.length) {
    currSubSegmentIndex.value = 0;
    while (currSubSegmentIndex.value < currSegment.value.subSegments.length) {
      const currSubSegment =
        currSegment.value.subSegments[currSubSegmentIndex.value];
      await new Promise((resolve) => {
        currSubSegment.init(() => resolve(undefined));
      });
      currSubSegmentIndex.value++;
    }
    currSegmentIndex.value++;
  }
  localStorage.setItem('tutorialFinished', 'true');
  emit('finished');
}

function onSceneEntered() {
  sceneEntered.value = true;
  runTutorial();
}
</script>

<template>
  <div class="h-full w-full">
    <div
      class="absolute h-full w-full z-10 opacity-0 transition-all duration-200 bg-transparent pointer-events-none"
      :class="{ 'opacity-100': sceneEntered }"
    >
      <div class="relative w-full xs:max-w-xs text-white">
        <div
          class="absolute h-full w-full bg-black opacity-75 xs:rounded-br-lg"
        ></div>
        <div class="relative p-4">
          <div class="font-bold">{{ currSegment?.name }}</div>
          <div class="font-regular mt-2">{{ currSegment?.description }}</div>
          <div
            class="font-regular mt-2"
            v-if="currSegment?.subSegments[currSubSegmentIndex]"
          >
            {{ currSegment?.subSegments[currSubSegmentIndex].instruction }}
          </div>
          <div
            class="relative h-1 mt-4 flex flex-row justify-between items-center gap-2"
          >
            <div
              v-for="index in currSegment?.subSegments.length"
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
      @scene-entered="onSceneEntered"
    >
      <a-assets>
        <video
          id="avocado-video"
          preload="auto"
          width="160"
          height="90"
          loop="true"
          src="@/assets/videos/avocado.mp4"
          crossorigin="anonymous"
        ></video>
      </a-assets>
      <a-sun-sky material="sunPosition: -0.2 4 -5"></a-sun-sky>
      <a-entity id="looking-around" position="0 1.6 0">
        <a-sphere
          ref="ballAbove"
          position="0 10 -5"
          visible="false"
          class="clickable"
          animation__mouseenter="property: scale; startEvents: mouseenter; easing: easeInCubic; dur: 150; to: 0 0 0"
        ></a-sphere>
        <a-sphere
          ref="ballLeft"
          position="10 0 -5"
          visible="false"
          class="clickable"
          animation__mouseenter="property: scale; startEvents: mouseenter; easing: easeInCubic; dur: 150; to: 0 0 0"
        ></a-sphere>
        <a-sphere
          ref="ballRight"
          position="-10 0 -5"
          visible="false"
          class="clickable"
          animation__mouseenter="property: scale; startEvents: mouseenter; easing: easeInCubic; dur: 150; to: 0 0 0"
        ></a-sphere>
        <a-sphere
          ref="ballBelow"
          position="0 -10 -5"
          visible="false"
          class="clickable"
          animation__mouseenter="property: scale; startEvents: mouseenter; easing: easeInCubic; dur: 150; to: 0 0 0"
        ></a-sphere>
      </a-entity>
      <a-entity id="clicking">
        <a-playback-video
          ref="video"
          src="#avocado-video"
          position="0 0 -10"
          rotation="0 0 0"
          visible="false"
        ></a-playback-video>
      </a-entity>
      <a-entity id="finish">
        <a-image
          ref="playButton"
          src="https://res.cloudinary.com/dxbh0pppv/image/upload/c_scale,h_512,q_10/v1471016296/play_wvmogo.png"
          animation__mouseenter_scale="property: scale; startEvents: mouseenter; easing: easeInCubic; dur: 200; to: 1.1 1.1 1.1"
          animation__mouseenter_color="property: material.color; startEvents: mouseenter; easing: easeInCubic; dur: 200; to: #C2C2C2"
          animation__mouseleave_scale="property: scale; startEvents: mouseleave; easing: easeInCubic; dur: 200; to: 1 1 1"
          animation__mouseleave_color="property: material.color; startEvents: mouseleave; easing: easeInCubic; dur: 200; to: #FFFFFF"
          position="0 1.6 -5"
          visible="false"
        ></a-image>
      </a-entity>
      <a-camera position="0 1.6 0" look-controls wasd-controls="enabled:false">
        <ACursor></ACursor>
        <!-- <a-animated-cursor></a-animated-cursor> -->
      </a-camera>
    </AFrameScene>
  </div>
</template>
