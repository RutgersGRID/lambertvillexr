import { filename } from 'pathe/utils';
export function useAssets(path: string) {
  let assets;
  if (/(\.svg)$/i.exec(path))
    assets = import.meta.glob('~/assets/img/**/*.svg', { eager: true });
  else if (/(\.png)$/i.exec(path))
    assets = import.meta.glob('~/assets/img/**/*.png', { eager: true });
  else assets = import.meta.glob('~/assets/img/**/*.jpg', { eager: true });
  const fileName = filename(path);
  const images = Object.fromEntries(
    Object.entries(assets).map(([key, value]) => [
      filename(key),
      (value as Record<string, any>).default,
    ])
  );
  return images[fileName];
}
