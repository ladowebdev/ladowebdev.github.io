/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'hero-pattern': 'heroPattern 20s linear infinite',
      },
    },
  },
  plugins: [],
};