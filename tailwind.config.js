/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],  // Primary font (Poppins)
        secondary: ['"Plus Jakarta Sans"', 'Helvetica', 'Arial', 'sans-serif'],  // Secondary font (Plus Jakarta Sans)
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-out forwards',
      },
      boxShadow: {
        'custom-arrow': '-5px -3px 30px -10px #96BEE7',
        'custom-add-image': '0px 10px 20px rgba(0, 0, 0, 0.4), 0 0 15px 5px rgba(255, 255, 255, 0.2)',
      },
    },
  },
  plugins: [],
}
