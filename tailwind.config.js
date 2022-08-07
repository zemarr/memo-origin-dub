const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors
    },
    extend: {
      colors: {
        faintGrey: 'rgba(244, 245, 245, 1)',
        greyText: 'rgba(130, 130, 130, 1)',
        disabledGrayText: 'rgba(205, 205, 205, 1)',
        lineGray: 'rgba(229, 230, 230, 1)',
        blueLink: 'rgba(24, 124, 180, 1)',
        originsGreen: 'rgba(64, 181, 64, 1)',
        lightGreen: 'rgba(241, 249, 241, 1)',
        originsYellow: 'rgba(181, 181, 64, 1)',
        lightYellow: 'rgba(248, 248, 232, 1)',
        originsRed: 'rgba(244, 82, 82, 1)',
        lightRed: 'rgba(248, 236, 236, 1)',
        borderBlack: 'rgba(0, 0, 0, 0.62)',
        originsOverlay: 'rgba(0, 0, 0, 0.7)'
      },
      fontFamily: {
        Rubik: ['Rubik', 'sans-serif'],
        Playfair: ['Playfair Display', 'serif']
      }
    },
    plugins: []
  }
}
