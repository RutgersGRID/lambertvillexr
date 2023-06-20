import { Entity, Scene } from 'aframe';

export function querySelector<T>(
  query: string,
  elem: HTMLElement | Document = document
) {
  if (elem instanceof Document) return elem.querySelector(query) as T;
  return elem.querySelector(query) as T;
}

export function querySelectorAll<T>(
  query: string,
  elem: HTMLElement | Document = document
) {
  return Array.from(elem.querySelectorAll(query)) as T[];
}

export function createElement<T>(element: string) {
  return document.createElement(element) as T;
}

export function createEntity<T>(element: `a-${string}`) {
  return document.createElement(element) as Entity<T>;
}

export function isScriptLoaded(src: string) {
  var scripts = document.getElementsByTagName('script');
  for (var i = scripts.length; i--; ) {
    if (scripts[i].src == src) return true;
  }
  return false;
}

export function addScript(src: string) {
  if (isScriptLoaded(src)) return false;

  const script: HTMLScriptElement = <any>document.createElement('script');
  script.src = src;
  script.type = 'text/javascript';
  document.head.appendChild(script);

  return true;
}

export function getSystem<T>(name: string) {
  const scene = document.querySelector('a-scene') as Scene;
  if (!scene) return;
  return <T>scene.systems[name];
}

export default {
  querySelector,
  querySelectorAll,
  createElement,
  createEntity,
  isScriptLoaded,
  addScript,
  getSystem,
};
