/** @type {import('tailwindcss').Config} */
import {light} from './src/presentation/styles/colors/light'

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/presentation/app/**/*.{js,jsx,ts,tsx}", "./src/presentation/components/**/*.{js,jsx,ts,tsx}", "./src/presentation/pages/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: light
    },
  },
  plugins: [],
}