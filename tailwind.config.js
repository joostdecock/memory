// TailwindCSS expects CJS
const themes = require('./themes/index.js')

module.exports = {
  content: [
    './tailwind-force.html',
    './pages/*.mjs',
    './pages/**/*.mjs',
    './components/*.mjs',
    './components/**/*.mjs',
  ],
  plugins: [require('daisyui'), require('tailwindcss/nesting')],
  daisyui: {
    styled: true,
    themes: [themes],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
  theme: {
    extend: {
      aspectRatio: {
        '9/16': '9 / 16',
      },
    },
  },
}

