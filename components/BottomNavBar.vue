<script setup lang="ts">
import { RouteRecordRaw, useRoute } from 'vue-router';
import { getRouteName, useRouterCategories } from '@/utils/page';

const isSideBarOpen = ref(false);

const currRoute = useRoute();
const { routeCategories } = useRouterCategories();

const flattenedRoutes: RouteRecordRaw[] = [];
routeCategories.forEach((x) => flattenedRoutes.push(...x.routes));

const getPrevRoute = computed(() => {
  if (!currRoute.name || typeof currRoute.name == 'symbol') return null;
  const index = flattenedRoutes.findIndex((x) => x.path == currRoute.fullPath);
  if (index == 0) return null;
  return flattenedRoutes[index - 1];
});

const getNextRoute = computed(() => {
  if (!currRoute.name || typeof currRoute.name == 'symbol') return null;
  const index = flattenedRoutes.findIndex((x) => x.path == currRoute.fullPath);
  if (index == flattenedRoutes.length - 1) return null;
  return flattenedRoutes[index + 1];
});
</script>

<template>
  <div
    class="p-4 lg:px-16 flex flex-row justify-between sm:justify-center gap-4"
  >
    <UButton
      icon="i-heroicons-arrow-left"
      color="gray"
      class="opacity-100 disabled:opacity-40"
      :disabled="getPrevRoute == null"
      :to="getPrevRoute?.path"
    ></UButton>
    <div class="my-auto sm:w-48 text-center font-bold">
      {{ getRouteName(currRoute) }}
    </div>
    <UButton
      icon="i-heroicons-arrow-right"
      color="gray"
      class="opacity-100 disabled:opacity-40"
      :disabled="getNextRoute == null"
      :to="getNextRoute?.path"
    ></UButton>
    <UButton
      icon="i-heroicons-bars-4"
      class="sm:absolute sm:right-4"
      @click="isSideBarOpen = true"
    ></UButton>
    <USlideover
      v-model="isSideBarOpen"
      :ui="{
        width: 'w-screen max-w-xs',
      }"
    >
      <div class="p-8 flex flex-col h-full gap-8">
        <SideNavMenu class="flex-grow"></SideNavMenu>
        <UButton
          icon="i-heroicons-arrow-left"
          block
          @click="isSideBarOpen = false"
        >
          Back
        </UButton>
      </div>
    </USlideover>
  </div>
</template>
