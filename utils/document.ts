import { Entity } from 'aframe';

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

export default {
  querySelector,
  querySelectorAll,
  createElement,
  createEntity,
};
