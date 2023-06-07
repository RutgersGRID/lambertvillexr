<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const routes = ['index', 'demo-1', 'demo-2', 'demo-3'];

function kebabToTitleCase(str: string) {
  return str
    .split('-')
    .map((x) => x[0].toUpperCase() + x.substring(1))
    .join(' ');
}

const getCurrRouteRealName = computed(() => {
  if (typeof route.name != 'string') return route.name;
  if (route.name == 'index') return 'Home';
  return kebabToTitleCase(route.name);
});

const getPrevRoutePath = computed(() => {
  if (!route.name || typeof route.name == 'symbol') return null;
  const index = routes.indexOf(route.name);
  if (index == 0) return null;
  const routeName = routes[index - 1];
  if (routeName == 'index') return '/';
  return routeName;
});

const getNextRoutePath = computed(() => {
  if (!route.name || typeof route.name == 'symbol') return null;
  const index = routes.indexOf(route.name);
  if (index == routes.length - 1) return null;
  const routeName = routes[index + 1];
  if (routeName == 'index') return '/';
  return routeName;
});

const getLeftButtonStyle = computed(() => {
  return { invisible: route.name == routes[0] };
});

const getRightButtonStyle = computed(() => {
  return { invisible: route.name == routes[routes.length - 1] };
});
</script>

<template>
  <div
    id="header"
    class="p-4 lg:px-16 flex flex-row justify-between lg:justify-center gap-4"
  >
    <UButton
      icon="i-heroicons-arrow-left"
      :class="getLeftButtonStyle"
      :to="getPrevRoutePath"
    ></UButton>
    <div class="my-auto lg:w-48 text-center">{{ getCurrRouteRealName }}</div>
    <UButton
      icon="i-heroicons-arrow-right"
      :class="getRightButtonStyle"
      :to="getNextRoutePath"
    ></UButton>
  </div>
</template>
