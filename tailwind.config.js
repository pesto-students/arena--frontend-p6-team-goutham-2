/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      columns: {
        '7xl': '80rem',
        '3xs': '25rem',
      },

      minHeight: {
        '500': '500px',
      }
    },
  },
  plugins: [],
};
