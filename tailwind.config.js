/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Mona Sans"', 'sans-serif'],
      },
      colors: {
        'white': {
          50: '#d9ecff',
        },
        'black': {
          50: '#1c1c21',
          100: '#0e0e10',
          200: '#282732',
        },
        'blue': {
          50: '#839cb5',
          100: '#2d2d38',
        }
      },
      screens: {
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        'dvw': '100dvw',
        'dvh': '100dvh',
      }
    },
  },
  plugins: [],
}