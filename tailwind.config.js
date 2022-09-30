/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#640100",
        "secondary": "#173C81",
        "gradient-from":'rgba(0,0,0,0.80)',
      }
    },
  },
  plugins: [],
}
