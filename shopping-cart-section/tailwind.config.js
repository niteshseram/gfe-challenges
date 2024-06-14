/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        collection:
          'linear-gradient(360deg, rgba(0, 0, 0, 0.4) -9.37%, rgba(0, 0, 0, 0.132) 100%)',
        'collection-hover':
          'linear-gradient(360deg, rgba(0, 0, 0, 0.6) -9.37%, rgba(0, 0, 0, 0.198) 100%)',
      },
      zIndex: {
        sticky: 1020,
        fixed: 1030,
        dropdown: 1000,
        toast: 1090,
        modal: 1055,
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
        custom:
          '0px 1px 2px 0 rgb(0 0 0 / 0.06), 0px 1px 3px 0 rgb(0 0 0 / 0.10)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
