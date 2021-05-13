const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    enabled: true,
    content: ['./public/**/*.html'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'th-dark-bg': '#161625',
        'th-dark-font':'#e1e1ff',
        'th-dark-fuchsia':'#f795ac'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
