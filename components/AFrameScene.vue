<script setup lang="ts">
import { Entity, Scene } from 'aframe';
import AFrameTutorial from './AFrameTutorial.vue';
import document from '@/utils/document';

const route = useRoute();

const aframeLoaded = ref(false);
const sceneLoaded = ref(false);

const props = withDefaults(
  defineProps<{
    loadSystems?: () => Promise<void>;
    attributes?: { [key: string]: any };
    startButtonText?: string;
    startTitle?: string;
    startDescription?: string;
    hideTutorial?: boolean;
    alwaysShowOverlay?: boolean;
    arMode?: boolean;
  }>(),
  {
    arMode: undefined,
  }
);
const emit = defineEmits(['sceneEntered']);

const showTutorial = ref(!props.hideTutorial);
const webcamVideo = ref<HTMLVideoElement>();

const scene = ref<Scene>();
let cameraHasLookControls = false;
let cameraHasWASDControls = false;

watch(scene, (newScene, oldScene) => {
  if (newScene != undefined) {
    newScene.addEventListener('loaded', () => {
      if (!scene.value) return;
      const camera = scene.value.querySelector<Entity>('[camera]');
      if (!camera) return;
      if (camera.getAttribute('look-controls').enabled) {
        cameraHasLookControls = true;
        camera.setAttribute('look-controls', 'enabled', false);
      }
      if (camera.getAttribute('wasd-controls').enabled) {
        cameraHasWASDControls = true;
        camera.setAttribute('wasd-controls', 'enabled', false);
      }

      newScene.pause();

      let arMode = props.arMode;
      if (arMode === undefined) {
        console.log('ar: ', route.query['ar']);
        arMode = route.query['ar'] == 'true';
      }
      if (arMode) {
        if (navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices
            .getUserMedia({
              video: {
                facingMode: {
                  exact: 'environment',
                },
              },
            })
            .then((stream) => {
              console.log('then ', webcamVideo.value, ' scene ', scene.value);
              if (!webcamVideo.value || !scene.value) return;
              webcamVideo.value.srcObject = stream;

              console.log('has loaded', scene.value.hasLoaded);
              scene.value.setAttribute('manual-ar-mode', true);
              scene.value.emit('enter-manual-vr');
            })
            .catch((error) => {
              console.log('Something went wrong!');
            });
        }
      }

      sceneLoaded.value = true;
    });
  }
});

onMounted(async () => {
  await import('aframe');

  async function loadDefaultSystems() {
    await import('@/aframe/primitives/animated-cursor');
    await import('@/aframe/components/video');
    await import('@/aframe/components/button');
    await import('@/aframe/components/audio-player');
    await import('@/aframe/components/slide-show');
  }
  await loadDefaultSystems();

  if (props.loadSystems) await props.loadSystems();
  aframeLoaded.value = true;
});

function onSceneEntered(userClicked: boolean) {
  if (!scene.value) return;
  const camera = scene.value.querySelector<Entity>('[camera]');
  if (!camera) return;
  if (cameraHasLookControls)
    camera.setAttribute('look-controls', 'enabled', true);
  if (cameraHasWASDControls)
    camera.setAttribute('wasd-controls', 'enabled', true);
  const videos = scene.value.querySelectorAll<HTMLMediaElement>('video');
  if (userClicked) {
    for (let video of videos) {
      video.play();
      video.pause();
    }
  }
  emit('sceneEntered');
}

function onTutorialFinished() {
  showTutorial.value = false;
}
</script>

<template>
  <ClientOnly>
    <template v-if="!showTutorial">
      <div
        class="absolute h-full w-full z-20 transition ease-in-out duration-1000 bg-gray-200 dark:bg-gray-900 pointer-events-none"
        :class="{ 'opacity-0': sceneLoaded }"
      >
        <USkeleton class="absolute h-full w-full"></USkeleton>
        <div
          class="absolute h-full w-full flex justify-center items-center text-gray-400 dark:text-gray-500"
        >
          <UIcon name="i-heroicons-arrow-path" class="animate-spin text-4xl" />
          <div class="ml-4 text-4xl font-bold">LOADING...</div>
        </div>
      </div>
      <div class="absolute h-full w-full">
        <video
          autoplay="true"
          ref="webcamVideo"
          class="h-full w-full object-cover"
        ></video>
      </div>
      <EnterASceneOverlay
        v-if="sceneLoaded"
        :start-button-text="startButtonText"
        :start-title="startTitle"
        :start-description="startDescription"
        :always-show-overlay="alwaysShowOverlay"
        @scene-entered="onSceneEntered"
      ></EnterASceneOverlay>
      <a-scene
        device-orientation-permission-ui="enabled: false"
        ref="scene"
        v-if="aframeLoaded"
        v-bind="attributes"
        embedded
        renderer="logarithmicBuffer: true; sortObjects: true;"
        class="absolute w-full h-full"
        loading-screen="enabled: false"
        vr-mode-ui="enabled: false"
      >
        <slot></slot>
      </a-scene>
    </template>
    <AFrameTutorial
      v-if="showTutorial"
      class="absolute"
      @finished="onTutorialFinished"
    ></AFrameTutorial>
  </ClientOnly>
</template>
