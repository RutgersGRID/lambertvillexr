import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import tailwindTypography from '@tailwindcss/typography';

export const screens = {
  xs: '320px',
  xsm: '400px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};
export type ScreenType = keyof typeof screens | 'all';

const colors = {
  white: '#ffffff',
  'gray-light': `#B6B6B6`,
  'gray-dark': `#494949`,
  black: `#000000`,
};

export default <Partial<Config>>{
  theme: {
    screens,
    extend: {
      colors,
      height: {
        '128': '32rem',
        '192': '48rem',
      },
      letterSpacing: {
        wide: '0.1em',
        wider: '0.25em',
        widest: '0.5em',
      },
      fontSize: {
        '9xl': '9rem',
        '10xl': '10rem',
      },
    },
  },
  plugins: [tailwindTypography],
};
