<script setup lang="ts">
import { Entity, Scene } from 'aframe';
import AFrameTutorial from './AFrameTutorial.vue';
import document from '@/utils/document';

const aframeLoaded = ref(false);
const sceneLoaded = ref(false);

const props = defineProps<{
  loadSystems?: () => Promise<void>;
  attributes?: { [key: string]: any };
  startButtonText?: string;
  startTitle?: string;
  startDescription?: string;
  hideTutorial?: boolean;
  alwaysShowOverlay?: boolean;
}>();
const emit = defineEmits(['sceneEntered']);

const showTutorial = ref(!props.hideTutorial);

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
        class="absolute w-full h-full"
        renderer="antialias: true; logarithmicDepthBuffer: true; colorManagement: true; sortObjects: true"
        loading-screen="enabled: false"
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
