/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'black-t-50': 'rgba(0,0,0,0.5)',
      }
    },
  },
  plugins: [],
}

