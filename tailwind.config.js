/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    colors: {
    'primary': '#28242c',
    'secondary': '#f5f5f5',
   
    },
    extend: {},
  },
  plugins: [],
}