<script setup lang="ts">
const experienceStarted = ref(false);
const showUI = ref(true);

const props = defineProps<{
  startButtonText?: string;
  startTitle?: string;
  startDescription?: string;
  alwaysShowOverlay?: boolean;
}>();
const emit = defineEmits(['sceneEntered']);

const startButtonText = ref(props.startButtonText ?? 'Start Experience');

function startExperience(transition: boolean = true) {
  emit('sceneEntered');
  experienceStarted.value = true;
  if (transition)
    setTimeout(() => {
      showUI.value = false;
    }, 300);
  else showUI.value = false;
}

function needsPermissions() {
  return (
    typeof DeviceOrientationEvent !== 'undefined' &&
    (DeviceOrientationEvent as any).requestPermission
  );
}

function tryStartExperience() {
  // Browser doesn't support or doesn't require permission to DeviceOrientationEvent API.
  if (!needsPermissions()) {
    startExperience();
    return;
  }

  // Request permission
  (DeviceOrientationEvent as any)
    .requestPermission()
    .then(function (response: string) {
      if (response === 'granted') {
        startExperience();
      }
    });
}

if (!props.alwaysShowOverlay && !needsPermissions()) {
  startExperience(false);
}
</script>

<template>
  <div
    v-if="showUI"
    class="absolute h-full w-full flex justify-center items-center bg-opacity-75 bg-black z-10 transition-opacity duration-200"
    :class="{ 'opacity-0': experienceStarted }"
  >
    <div class="flex flex-col items-center gap-4">
      <div v-if="startTitle" class="font-bold text-white">{{ startTitle }}</div>
      <div
        v-if="startDescription"
        class="px-4 w-full max-w-sm text-justify text-white"
      >
        {{ startDescription }}
      </div>
      <UButton icon="i-heroicons-play" size="xl" @click="tryStartExperience">{{
        startButtonText
      }}</UButton>
    </div>
  </div>
</template>
