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
    disableArMode?: boolean;
    arMode?: boolean;
  }>(),
  {
    alwaysShowOverlay: true,
    arMode: undefined,
    disableArMode: false,
  }
);
const emit = defineEmits(['sceneEntered']);

const showTutorial = ref(!props.hideTutorial);
const webcamVideo = ref<HTMLVideoElement>();

const scene = ref<Scene>();
let cameraHasLookControls = false;
let cameraHasWASDControls = false;

const arMode = ref(props.arMode);
if (arMode.value === undefined) {
  if (props.disableArMode) arMode.value = false;
  else arMode.value = route.query['ar'] == 'true';
}

const musicRadio = ref<Entity>();
const musicEnabled = ref<boolean>();

function updateArMode() {
  if (!webcamVideo.value || !scene.value) return;

  if (arMode.value) {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({
          video: {
            facingMode: {
              ideal: 'environment',
            },
          },
        })
        .then((stream) => {
          if (!webcamVideo.value || !scene.value) return;
          webcamVideo.value.srcObject = stream;

          scene.value.setAttribute('manual-ar-mode', true);
          scene.value.emit('enter-manual-vr');
        })
        .catch((error) => {
          console.log('Could not enter AR mode: ', error);
        });
    }
  } else {
    if (webcamVideo.value.srcObject instanceof MediaStream) {
      for (const track of webcamVideo.value.srcObject.getTracks()) {
        track.stop();
      }
      scene.value.removeAttribute('manual-ar-mode');
      scene.value.emit('exit-manual-vr');
      webcamVideo.value.srcObject = null;
    }
  }
}

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

      updateArMode();

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

  musicEnabled.value = localStorage.getItem('music-enabled') == 'true';
});

function onSceneEntered(userClicked: boolean) {
  if (!scene.value || !webcamVideo.value) return;
  const camera = scene.value.querySelector<Entity>('[camera]');
  if (!camera) return;
  if (cameraHasLookControls)
    camera.setAttribute('look-controls', 'enabled', true);
  if (cameraHasWASDControls)
    camera.setAttribute('wasd-controls', 'enabled', true);
  const videos = scene.value.querySelectorAll<HTMLVideoElement>('video');
  const audios = scene.value.querySelectorAll<HTMLAudioElement>('audio');
  if (userClicked) {
    for (const video of videos) {
      video.play();
      video.pause();
    }

    for (const audio of audios) {
      audio.play();
      audio.pause();
    }

    webcamVideo.value.play();
  }
  musicRadio.value = document.querySelector('[music-radio],a-music-radio');
  if (musicRadio.value)
    musicRadio.value.setAttribute('music-radio', 'enabled', musicEnabled.value);
  emit('sceneEntered');
  scene.value.setAttribute('scene-entered', true);
  scene.value.emit('scene-entered');
}

function onTutorialFinished() {
  showTutorial.value = false;
}

function toggleArMode() {
  arMode.value = !arMode.value;
  updateArMode();
}

function toggleMusic() {
  if (!musicRadio.value) return;

  musicEnabled.value = !musicEnabled.value;
  musicRadio.value.setAttribute('music-radio', 'enabled', musicEnabled.value);
  localStorage.setItem('music-enabled', musicEnabled.value ? 'true' : 'false');
}
</script>

<template>
  <ClientOnly>
    <template v-if="!showTutorial">
      <!-- Loading BG -->
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
      <!-- AR Webcam Video -->
      <div class="absolute h-full w-full">
        <video
          autoplay="true"
          playsinline
          ref="webcamVideo"
          class="h-full w-full object-cover"
          muted
        ></video>
      </div>
      <!-- Scene -->
      <a-scene
        device-orientation-permission-ui="enabled: false"
        ref="scene"
        v-if="aframeLoaded"
        v-bind="attributes"
        embedded
        renderer="sortObjects: true;"
        class="absolute w-full h-full"
        loading-screen="enabled: false"
        vr-mode-ui="enabled: false"
      >
        <slot></slot>
      </a-scene>
      <!-- AR Button -->
      <div
        class="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 flex flex-row gap-4"
        v-if="!disableArMode"
      >
        <UButton
          v-if="true"
          :icon="
            musicEnabled
              ? 'i-heroicons-musical-note'
              : 'i-heroicons-speaker-x-mark'
          "
          size="xl"
          @click="toggleMusic()"
        >
        </UButton>

        <UButton
          :icon="
            arMode ? 'i-heroicons-arrow-left-on-rectangle' : 'i-heroicons-play'
          "
          size="xl"
          @click="toggleArMode()"
        >
          {{ arMode ? 'Exit AR' : 'Enter AR' }}
        </UButton>
      </div>
      <!-- Enter Scene Overlay -->
      <EnterASceneOverlay
        v-if="sceneLoaded"
        :start-button-text="startButtonText"
        :start-title="startTitle"
        :start-description="startDescription"
        :always-show-overlay="alwaysShowOverlay"
        @scene-entered="onSceneEntered"
      ></EnterASceneOverlay>
    </template>
    <AFrameTutorial
      v-if="showTutorial"
      class="absolute"
      @finished="onTutorialFinished"
    ></AFrameTutorial>
  </ClientOnly>
</template>
