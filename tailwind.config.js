/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        flexus: {
          black: '#0B0B0C',
          dark: '#141416',
          card: '#1A1A1D',
          border: '#2A2A2E',
          orange: '#FF6B00',
          orangeHover: '#E55A00',
        },
      },
    },
  },
  plugins: [],
}