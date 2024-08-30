/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        Black: '#615e5e',
        primaryBG: '#1e28320d',
      },
      screens: {
        '4xl': '1900px',
      },
    },
  },
  plugins: [],
};
