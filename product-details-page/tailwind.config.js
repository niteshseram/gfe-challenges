/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      zIndex: {
        sticky: 1020,
        fixed: 1030,
        dropdown: 1000,
        toast: 1090,
      },
      animation: {
        slideout: 'slideout 0.4s ease-out',
      },
      keyframes: {
        slideout: {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0%)' },
        },
      },
      boxShadow: {
        input:
          '0px 0px 0px 1px #444ce7, 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px rgba(68, 76, 231, 0.12)',
        custom:
          '0px 1px 2px 0 rgb(0 0 0 / 0.06), 0px 1px 3px 0 rgb(0 0 0 / 0.10)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
