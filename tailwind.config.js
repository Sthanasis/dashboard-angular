const appPreset = require('./src/theme/tw.preset')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [appPreset],
}
