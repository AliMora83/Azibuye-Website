/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          950: '#061f18',
          900: '#0a3328',
          800: '#0D4B3E',
          700: '#115f4f',
          600: '#157362',
        },
        gold: {
          400: '#d9a843',
          500: '#C8922B',
          600: '#a87520',
        },
        cream: {
          50:  '#FAF8F3',
          100: '#F5F7F6',
        },
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
      backgroundImage: {
        'zulu-pattern': "url('/images/zulu-pattern.svg')",
      },
    },
  },
  plugins: [],
}
