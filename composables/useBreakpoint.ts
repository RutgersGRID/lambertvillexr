import { onMounted, reactive } from 'vue';
import { screens as tailwindScreens, ScreenType } from '~/tailwind.config';

let screens = new Map<ScreenType, number>();

if (tailwindScreens) {
  for (const [key, value] of Object.entries(tailwindScreens)) {
    screens.set(<ScreenType>key, parseInt(value));
  }
}

// Sort by smallest to largest
screens = new Map<ScreenType, number>(
  [...screens.entries()].sort((a, b) => a[1] - b[1])
);

// Use the smallest value by default
const breakpoints = reactive({
  w: 0,
  h: 0,
  is: screens.keys().next().value as ScreenType,
});

export const belowBreakpoint = (
  target: ScreenType,
  reference: ScreenType = breakpoints.is
) => {
  return !aboveBreakpoint(target, reference);
};

export const aboveBreakpoint = (
  target: ScreenType,
  reference: ScreenType = breakpoints.is
) => {
  if (target == 'all' && reference == 'all') return true;
  if (target == 'all' && reference != 'all') return false;
  if (target != 'all' && reference == 'all') return true;
  return (screens.get(target) ?? 0) < (screens.get(reference) ?? 0);
};

const getBreakpoint = (w: number) => {
  for (let [key, cutoff] of screens) {
    if (w < cutoff) {
      return key;
    }
  }
  return <ScreenType>'all';
};

const setBreakpoint = () => {
  breakpoints.w = window.innerWidth;
  breakpoints.h = window.innerHeight;
  breakpoints.is = getBreakpoint(window.innerWidth);
};

export const useBreakpoint = () => {
  onMounted(() => {
    setBreakpoint();
    window.addEventListener('resize', setBreakpoint);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', setBreakpoint);
  });

  return {
    breakpoints,
  };
};

export default useBreakpoint;
