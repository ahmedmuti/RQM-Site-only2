/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", './*.html'],
  theme: {
    extend: {
      backgroundImage: {
        "mainLinear": "linear-gradient(180deg, #0b204ae7 56.19%, #091b40 100%) !important",
        "whoWeAre": "linear-gradient(180deg, #152a54d6 100%, #5BB0B9 -1%), url(../images/who_we_are.svg)",
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
      },
      container: {
        center: true,
        screens: {
          sm: '540px',
          md: '720px',
          lg: '960px',
          xl: '1140px',
          '2xl': '1320px',
        },
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
}

