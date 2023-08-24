/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#054C73',
        'secondary-blue': '#DFE9F4',
        'primary-bluish': '#F2F5FF',
      },
    },
  },
  plugins: [],
};
