/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryText: '#4a4a4a', // Example color definition
        secondaryText: '#FFFFFF',
        // Add your custom colors here
      },
    },
  },
  plugins: [],
}