<script setup lang="ts">
import { useRouterCategories, RouteCategory } from '@/utils/page';

const { routeCategories } = useRouterCategories();

function getCategoryNavLinks(category: RouteCategory) {
  return category.routes.map((x) => {
    let linkObj = <any>{
      label: getRouteName(x),
    };
    if (x.redirect) {
      linkObj.click = () => {
        if (typeof x.redirect === 'string') window.open(x.redirect);
      };
    } else linkObj.to = x.path;
    return linkObj;
  });
}
</script>

<template>
  <div class="flex flex-col gap-8 overflow-auto">
    <h1 class="text-2xl font-bold">Flowing Together</h1>
    <div v-for="category in routeCategories">
      <h2 class="font-bold pb-2">{{ category.name }}</h2>
      <UVerticalNavigation
        :links="getCategoryNavLinks(category)"
        :ui="{
          wrapper: 'border-l border-gray-200 dark:border-gray-800 space-y-2',
          base: 'group block border-l -ml-px lg:leading-6 text-left',
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
    <DarkModeToggle></DarkModeToggle>
    <div class="text-xs text-gray-400 dark:text-gray-400">
      Made by
      <a
        href="https://www.linkedin.com/in/alantong88/"
        class="text-gray-600 dark:text-gray-200 underline"
      >
        Alan Tong
      </a>
      and
      <a
        href="https://www.linkedin.com/in/dhawal15/"
        class="text-gray-600 dark:text-gray-200 underline"
      >
        Dhawal Arora
      </a>
    </div>
  </div>
</template>
