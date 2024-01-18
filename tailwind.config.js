/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white': 'hsl(0, 0%, 100%)',
      'bright-red': 'hsl(12, 88%, 59%)',
      'bright-red-light': 'hsl(12, 88%, 69%)',
      'bright-red-suplight': 'hsl(12, 88%, 95%)',
      'dark-blue': 'hsl(228, 39%, 23%)',
      'dark-grayish-blue': 'hsl(227, 12%, 61%)',
      'very-dark-blue': 'hsl(233, 12%, 13%)',
      'very-pale-red': 'hsl(13, 100%, 96%)',
      'very-light-gray': 'hsl(0, 0%, 98%)',
    },
    fontFamily: {
      'sans-serif': 'Be Vietnam Pro',
    }
  },
  plugins: [],
}

