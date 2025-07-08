// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF76CE',
        secondary: '#59D5E0',
        third: '#F5EA5A',
        fontcolor: '#FF52A2',
        theme1: '#6366F1',
        theme2: '#334155',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
      perspective: {
        DEFAULT: '1000px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      averia: ['Averia Serif Libre', 'serif'],
    },
  },
  plugins: [],
}
