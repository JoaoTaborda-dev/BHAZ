/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        background: '#D6F9FB',
        content:'#1C2833'
      },
      blur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
