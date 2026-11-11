import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        arquitecta: {
          DEFAULT: '#D6CDC8',
          bg: '#D6CDC8',
          red: '#BA2C1E',
        },
      },
      fontFamily: {
        riesling: ['Riesling', 'sans-serif'],
        neogothis: ['NeoGothis', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
