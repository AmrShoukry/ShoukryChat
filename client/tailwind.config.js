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

        purpleCustomLight: 'rgb(102, 0, 255)',
        purpleCustomDark: 'rgb(195, 156, 255)',
        redCustomLight: 'rgb(255, 48, 59)',
        redCustomDark: 'rgb(247, 91, 99)',
        yellowCustomLight: 'rgb(255, 225, 29)',
        yellowCustomDark: 'rgb(247, 232, 136)',
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(0, 0, 0)',
      },
    },
  },
  plugins: [],
};

