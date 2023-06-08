<script setup lang="ts">
import { useRouterCategories, RouteCategory } from '@/utils/page';

const { routeCategories } = useRouterCategories();

function getCategoryNavLinks(category: RouteCategory) {
  return category.routes.map((x) => {
    return {
      label: getRouteName(x),
      to: x.path,
    };
  });
}
</script>

<template>
  <div class="flex flex-col gap-8 overflow-auto">
    <h1 class="text-2xl font-bold">Lambertville XR</h1>
    <div v-for="category in routeCategories">
      <h2 class="font-bold pb-2">{{ category.name }}</h2>
      <UVerticalNavigation
        :links="getCategoryNavLinks(category)"
        :ui="{
          wrapper: 'border-l border-gray-200 dark:border-gray-800 space-y-2',
          base: 'group block border-l -ml-px lg:leading-6',
          padding: 'pl-4 py-1',
          rounded: '',
          font: '',
          ring: '',
          active:
            'text-primary-500 dark:text-primary-400 border-current font-semibold',
          inactive:
            'border-transparent hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300',
        }"
      ></UVerticalNavigation>
    </div>
  </div>
</template>
