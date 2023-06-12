export function usePublic(path: string) {
  const config = useRuntimeConfig();
  console.log('rewsulting path ', config.app.baseURL + path);
  return config.app.baseURL + path;
}
