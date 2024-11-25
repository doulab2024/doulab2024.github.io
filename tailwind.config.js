/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'main': '#ac0002',
        'sub': '#072ead',
        'green' : '#2c6907'
      },

      // backgroundColor: {
      //   'main': '#010032', // 自定义背景颜色为橙色
      // },
    },
  },
  plugins: [],
}

