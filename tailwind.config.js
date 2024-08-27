/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", './index.html'],
  theme: {
    extend: {
      backgroundImage: {
        "mainLinear": "linear-gradient(180deg, #0b204ae7 56.19%, #0b204a 100%) !important",
        "secondLinear": "linear-gradient(180deg, #0B204A 56.19%, #0B204A 100%) !important"
      },
      colors: {
        "mainColor": "#152A54",
        "secondColor": "#3D5579",
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
}

