const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      custom: {
        purple: '#AE4AD9',
        nav: '#EEEEEE',
        gray: '#333333',
      },
    },
    fontFamily: {
      ...defaultTheme.fontFamily,
      tahoma: 'Tahoma',
    },
    borderWidth: {
      ...defaultTheme.borderWidth,
      '1': '1px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), // import tailwind forms
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
