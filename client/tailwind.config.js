/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--mainColor) / 1)',
        },
        theme: {
          DEFAULT: 'rgb(var(--mainTheme) / 1)',
        },
        text: {
          DEFAULT: 'rgb(var(--mainText) / 1)',
        },
      },
    },
  },
  plugins: [],
};

