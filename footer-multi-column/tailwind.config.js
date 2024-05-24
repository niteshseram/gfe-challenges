/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      zIndex: {
        toast: 1090,
      },
      boxShadow: {
        input:
          '0px 0px 0px 1px #444ce7, 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px rgba(68, 76, 231, 0.12)',
        'input-error':
          '0px 0px 0px 1px #d92d20, 0px 0px 0px 4px rgba(217, 45, 32, 0.12)',
      },
    },
  },
  plugins: [],
};
