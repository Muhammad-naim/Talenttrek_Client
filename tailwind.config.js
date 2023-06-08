/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ttOrange : '#F75640',
      },
      fontFamily: {
        'poppins': ['Poppins'],
        'tl-font': ['Rubik']
      }
    },
  },
  plugins: [
    require("daisyui"), 
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
  }
  ],
  daisyui: {
    themes:  false
  },
}

