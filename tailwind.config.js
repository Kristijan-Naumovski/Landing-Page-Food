/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html.js)"],
  theme: {
    fontFamily: {
      primary: ['Lora', 'sans-serif'],
      secondary: ['Karla', 'serif'],
    },
    extend: {
      textTransform: ['sentence-case'],
    },
  },
  plugins: [],
}

