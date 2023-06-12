export function kebabToTitleCase(str: string) {
  if (str == '') return '';
  return str
    .split('-')
    .map((x) => x[0].toUpperCase() + x.substring(1))
    .join(' ');
}
