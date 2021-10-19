// eslint-disable-next-line no-unused-vars
const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
    },
    height: {
      '12rem': '12rem',
      '220px': '220px',
      '16rem': '16rem',
    },
    width: {
      '12rem': '12rem',
      '16rem': '16rem',
      '2/3': '66.666667%',
      '1/3': '33.333333%',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), // import tailwind forms
  ],
}
