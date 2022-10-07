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
        "primaryLight": "#B03136",
        "secondary": "#173C81",
        "gradient-from":'rgba(0,0,0,0.80)',
      },
      backgroundImage: theme => ({
        'feature-bg': "url('/assets/images/featureBg.png')",
        'feature-bg-blue': "url('/assets/images/featureBgBlue.svg')",
        'feature-bg-red': "url('/assets/images/featureBgRed.svg')",
      }),
    },
  },
  plugins: [],
}
