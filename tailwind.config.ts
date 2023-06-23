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

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    screens,
    extend: {
      colors: {
        white: '#ffffff',
        black: `#000000`,
        customPrimary: {
          50: '#F8F4EB',
          100: '#F3EBDB',
          200: '#E9DABD',
          300: '#DFC99E',
          400: '#D1B274',
          500: '#C39A4A',
          600: '#A07C35',
          700: '#765B27',
          800: '#4C3A19',
          900: '#211A0B',
          950: '#0C0A04',
        },
        customGray: {
          50: '#FFFFFF',
          100: '#F5F7F9',
          200: '#DCE2E9',
          300: '#C3CED9',
          400: '#AABAC9',
          500: '#91A6B9',
          600: '#7891A9',
          700: '#617D98',
          800: '#51697F',
          900: '#415466',
          950: '#364655',
        },
      },
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
