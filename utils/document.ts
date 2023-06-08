import { Entity } from 'aframe';

const document = window.document;

export function querySelector<T>(query: string) {
  return document.querySelector(query) as T;
}

export function querySelectorAll<T>(query: string) {
  return Array.from(document.querySelectorAll(query)) as T[];
}

export function createElement<T>(element: string) {
  return document.createElement(element) as T;
}

export function createEntity(element: `a-${string}`) {
  return document.createElement(element) as Entity;
}

export default {
  querySelector,
  querySelectorAll,
  createElement,
  createEntity,
};
