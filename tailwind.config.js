module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './data/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      'pink': 'rgba(242, 201, 209, 0.4)'
    }),
    boxShadow: theme => ({
      'redShadow': '0px 0px 10px 0px #e2026b',
      'pinkShadow': '0px 0px 10px 0px #ff5294',
      'greenShadow': '0px 0px 10px 0px #5cef72',
      'blueShadow': '0px 0px 10px 0px #45d4de',
      'purpleShadow': '0px 0px 10px 0px #a37aff',
      'md': '0px 0px 5px 0px rgba(0, 0, 0, 0.2)',
      'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
