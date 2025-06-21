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
        primary: {
          50: '#f0f4ff',
          100: '#e6f3ff',
          200: '#ccd9ff',
          300: '#99c3ff',
          400: '#66a3ff',
          500: '#3383ff',
          600: '#0047A0',
          700: '#003d8b',
          800: '#003476',
          900: '#002c61',
        },
        accent: {
          50: '#fef7f0',
          100: '#feead1',
          200: '#fdd5a3',
          300: '#fcb775',
          400: '#fb9947',
          500: '#fa7b19',
          600: '#e8610c',
          700: '#b64d09',
          800: '#843907',
          900: '#522404',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
