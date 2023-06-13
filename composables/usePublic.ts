export function usePublic(path: string) {
  const config = useRuntimeConfig();
  return config.app.baseURL + path;
}
