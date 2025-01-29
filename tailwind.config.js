/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/presentation/app/**/*.{js,jsx,ts,tsx}", "./src/presentation/components/**/*.{js,jsx,ts,tsx}", "./src/presentation/pages/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}