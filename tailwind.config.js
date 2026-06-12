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
          900: '#0A0B0F',
          800: '#0F1218',
          700: '#14181F',
          600: '#1A2030',
          500: '#1E2235',
          400: '#2A3050',
        },
        text: {
          primary: '#F0F2F8',
          secondary: '#8A90A8',
          muted: '#5A6080',
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
