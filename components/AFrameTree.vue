<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

const props = withDefaults(
  defineProps<{
    src?: 'bush' | 'tree-3' | 'tree-2' | 'tree-1';
    showPivot?: boolean;
  }>(),
  {
    src: 'bush',
    showPivot: false,
  }
);
</script>

<template>
  <!-- Bush -->
  <a-entity position="0 0 0" class="tree">
    <a-sphere v-if="showPivot" opacity="0.8" transparent="true"></a-sphere>
    <a-gltf-model v-if="src == 'bush'" src="#bush"></a-gltf-model>
    <a-gltf-model
      v-if="src == 'tree-3'"
      src="#tree-3"
      scale="15 15 15"
      position="-1 4 -1.9"
    ></a-gltf-model>
    <a-gltf-model
      v-if="src == 'tree-2'"
      src="#tree-2"
      scale="0.01 0.01 0.01"
    ></a-gltf-model>
    <a-gltf-model
      v-if="src == 'tree-1'"
      src="#tree-1"
      scale="40 40 40"
      position="7 3 -10.2"
    ></a-gltf-model>
  </a-entity>
</template>
