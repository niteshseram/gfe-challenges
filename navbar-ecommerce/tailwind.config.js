/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'navbar-menu': 'navbar-menu 0.4s ease-out',
      },
      keyframes: {
        'navbar-menu': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0%)' },
        },
      },
      zIndex: {
        sticky: 1020,
        fixed: 1030,
      },
    },
  },
  plugins: [],
};
