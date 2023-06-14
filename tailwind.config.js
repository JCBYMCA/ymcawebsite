
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
        'feature-bg-blue': "url('/assets/images/blue_card.svg')",
        'feature-bg-red': "url('/assets/images/red_card.svg')",
        'feature-bg-cards': "url('/assets/images/cards.svg')",
        'notice-bg': "url('/assets/images/noticeBg.png')",
        'computer-department-bg-1': "url('/assets/images/department/1.png')",
        'computer-department-bg-2': "url('/assets/images/department/2.png')",
        'computer-department-bg-3': "url('/assets/images/department/3.png')",
        'computer-department-bg-4': "url('/assets/images/department/4.png')",
        'computer-department-bg-5': "url('/assets/images/department/5.png')",
        'computer-department-bg-6': "url('/assets/images/department/6.png')",
        'library-bg':"url('/assets/images/library/library.png')",
        'logo':"url('/assets/images/logo.png')",
      }),
    },
  },
  plugins: [],
}
