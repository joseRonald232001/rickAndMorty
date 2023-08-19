/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs':"390px",
      'custom':'412px',
      'sm': '540px',
      'md': '768px',
      'lg': '900px', 
      'xl': '1024px',
      '2xl': '1280px',
    },
    fontFamily:{
      roboto:['Roboto', 'sans-serif'],
      rubik:['Rubik Wet Paint', 'cursive']
    },
  },
  plugins: [],
}

