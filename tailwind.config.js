
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
        "primaryTransparent": "rgba(100, 1, 0, 0.5)",
        "primaryLightTransparent": "rgba(176, 49, 54, 0.7)",
        "secondary": "#173C81",
        "secondaryLight": "#2D5F9E",
        "gradient-from":'rgba(0,0,0,0.80)',
      },
      borderWidth:{
        1: '1px',
      },
      fontSize: {
        'xxs': '.425rem',
      },
      backgroundImage: theme => ({
        'feature-bg': "url('/assets/images/featureBg.png')",
        'feature-bg-blue': "url('/assets/images/featureBgBlue.svg')",
        'feature-bg-red': "url('/assets/images/featureBgRed.svg')",
        'notice-bg': "url('/assets/images/noticeBg.png')",
        'computer-department-bg': "url('/assets/images/computerDepartmentBg.png')",
      }),
    },
  },
  plugins: [],
}
