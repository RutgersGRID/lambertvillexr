<script setup lang="ts">
import { RouteRecordRaw, useRoute, useRouter } from 'vue-router';
import { getRouteName, useRouterCategories } from '@/utils/page';

const isSideBarOpen = ref(false);

const router = useRouter();
const currRoute = useRoute();
const { routeCategories } = useRouterCategories();

router.beforeEach(() => {
  isSideBarOpen.value = false;
});

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
  <div class="p-4 lg:px-16 flex flex-row justify-center gap-4">
    <ClientOnly>
      <UButton
        icon="i-heroicons-arrow-left"
        color="gray"
        class="opacity-100 disabled:opacity-30"
        :disabled="getPrevRoute == null"
        :to="getPrevRoute?.path"
      ></UButton>
      <div
        class="my-auto flex-1 sm:flex-none sm:w-64 sm:flex-grow-0 text-center font-bold overflow-hidden"
      >
        <div class="overflow-ellipsis whitespace-nowrap overflow-hidden">
          {{ getRouteName(currRoute) }}
        </div>
      </div>
      <UButton
        icon="i-heroicons-arrow-right"
        color="gray"
        class="opacity-100 disabled:opacity-30"
        :disabled="getNextRoute == null"
        :to="getNextRoute?.path"
      ></UButton>
      <UButton
        icon="i-heroicons-bars-4"
        class="sm:absolute sm:right-4"
        @click="isSideBarOpen = true"
      ></UButton>
    </ClientOnly>
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
