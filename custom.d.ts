declare module '*.svg' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent;
  export default component;
}

declare module '*.png' {
  const str: string;
  export default str;
}

declare module '*?url' {
  const str: string;
  export default str;
}
