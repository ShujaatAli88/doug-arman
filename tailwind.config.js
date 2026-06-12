/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1B4FD8',
          'blue-dark': '#1340B0',
          'blue-deeper': '#0D2E8A',
          'blue-light': '#4B73E8',
          'blue-glow': 'rgba(27,79,216,0.3)',
        },
        dark: {
          900: '#09111E',
          800: '#0D1929',
          700: '#122038',
          600: '#1A2D4A',
          500: '#203356',
          400: '#2A4268',
        },
        text: {
          primary: '#EFF3FF',
          secondary: '#8E9ABE',
          muted: '#5C6890',
        },
        gold: '#C9A84C',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
