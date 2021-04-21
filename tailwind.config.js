module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'header': "url('/public/u75.png')",
      }),
      textColor:{
        purple: '#07367D'
      },
      backgroundColor:{
        gray: '#ECEDEF'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
