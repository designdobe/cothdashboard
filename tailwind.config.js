/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00CA56',
        'primary-accent': '#DAE854',
        'gray-900': '#111111',
        'gray-800': '#1C1C1C',
        'gray-700': '#333333',
        'gray-600': '#4D4D4D',
        'gray-500': '#808080',
        'gray-400': '#B3B3B3',
        'gray-300': '#CCCCCC',
        'gray-200': '#E5E7EB',
        'gray-100': '#F9FAFB',
        'gray-50': '#FFFFFF',
      },
      fontFamily: {
        sans: ['SUIT', 'sans-serif'],
      },
    },
  },
  plugins: [],
}