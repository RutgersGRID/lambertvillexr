import { RouteRecordRaw, RouteLocationNormalized, useRouter } from 'vue-router';

export type RouteCategory = {
  name: string;
  routes: RouteRecordRaw[];
};

export function routeRemoveExtraBackslash(path: string) {
  if (path.length > 0 && path.endsWith('/'))
    path = path.substring(0, path.length - 1);
  return path;
}

export function routePathEquals(path: string, otherPath: string) {
  return (
    routeRemoveExtraBackslash(path) == routeRemoveExtraBackslash(otherPath)
  );
}

export function getRouteName(route: RouteLocationNormalized | RouteRecordRaw) {
  if (route.meta) {
    const pageName = route.meta['pageName'] as string;
    if (pageName) return kebabToTitleCase(pageName);
  }
  const processedPath = routeRemoveExtraBackslash(route.path);
  const routeKebabName = processedPath.substring(
    processedPath.lastIndexOf('/') + 1
  );
  return kebabToTitleCase(routeKebabName);
}

export function useRouterCategories() {
  const router = useRouter();

  const routeCategories: RouteCategory[] = [
    {
      name: 'General',
      routes: [],
    },
  ];

  const filePathToRouteCategoryDict: {
    [key: string]: RouteCategory;
  } = {};

  router.getRoutes().forEach((routeOption) => {
    const splitPath = routeOption.path.split('/');
    splitPath.shift();
    if (splitPath.length <= 1) routeCategories[0].routes.push(routeOption);
    else {
      const categoryName = kebabToTitleCase(splitPath[0]);
      let existingCategory = routeCategories.find(
        (x) => x.name == categoryName
      );
      if (!existingCategory) {
        existingCategory = {
          name: categoryName,
          routes: [],
        };
        routeCategories.push(existingCategory);
      }
      existingCategory.routes.push(routeOption);
    }
  });
  routeCategories.forEach((category) => {
    category.routes.forEach((route) => {
      filePathToRouteCategoryDict[route.path] = category;
    });
  });

  return {
    routeCategories,
    filePathToRouteCategoryDict,
  };
}
