/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#102212',
          dark: '#051306',
          mid: '#173A21',
          rich: '#0B4F1E',
          teal: '#214842',
        },
        sage: {
          DEFAULT: '#258F67',
          olive: '#5B7A2D',
          soft: '#9EBCA6',
        },
        gold: {
          DEFAULT: '#FFB700',
          soft: '#EFC368',
          antique: '#A88940',
        },
        cream: {
          DEFAULT: '#F8F4E8',
          light: '#FAFAF5',
        },
        slate: {
          body: '#556260',
          muted: '#959595',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        sans: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        botanical: '0 20px 50px -12px rgba(16, 34, 18, 0.16)',
        goldGlow: '0 10px 28px -6px rgba(255, 183, 0, 0.35)',
      },
    },
  },
  plugins: [],
};
