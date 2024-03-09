/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-sm': '0 0px 10px rgba(0, 0, 0, 0.5)',
        // Add more custom shadow sizes as needed
      },
    },
  },
  plugins: [],
}

