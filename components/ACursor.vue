<template>
  <a-cursor
    id="cursor"
    color="white"
    rayOrigin="mouse"
    raycaster="objects: .clickable"
    fuseTimeout="500"
    animation__click="property: scale; startEvents: click; easing: easeInCubic; dur: 150; from: 0.1 0.1 0.1; to: 1 1 1"
    animation__fusing="property: scale; startEvents: fusing; easing: easeInCubic; dur: 1500; from: 1 1 1; to: 0.1 0.1 0.1"
    animation__mouseleave="property: scale; startEvents: mouseleave; easing: easeInCubic; dur: 500; to: 1 1 1"
  ></a-cursor>
</template>
