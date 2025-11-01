/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: colors.amber,
          orange: colors.orange,
          green: colors.emerald,
          red: colors.rose,
        },
      },
    },
  },
  plugins: [],
};