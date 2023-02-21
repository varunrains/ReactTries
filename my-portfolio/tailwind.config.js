/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '150px',
      }
    },
    fontFamily:{
      signature: ["Great Vibes"]
    }
  },
  plugins: [],
}
