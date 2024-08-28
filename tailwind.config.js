/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", './index.html'],
  theme: {
    extend: {
      backgroundImage: {
        "mainLinear": "linear-gradient(180deg, #0b204ae7 56.19%, #091b40 100%) !important",
        "secondLinear": "linear-gradient(180deg, #0B204A 56.19%, #0B204A 100%) !important",
        "darkBodyBg": "linear-gradient(180deg, #091B40 56.19%, #152A54 100%) !important",
        "darkBodyBg2": "linear-gradient(180deg, #152A54 100%, #152A54 100%) !important",
      },
      colors: {
        "mainColor": "#152A54",
        "secondColor": "#3D5579",
        "darkSecondColor": "#CBDAF1",
        "footerColor": "#F9FCFE"
      },
      borderColor: {
        "mainBorder": "#E8E8E8",
        "secondBorder": "#152A54",
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
}

