module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderColor: (theme) => ({
        ...theme("colors"),
        nevigation: "#EF9771",
      }),
      backgroundImage: theme => ({
        'header': "url('/u75.png')",
        banner: "url('/banner.png')",

      }),
      textColor:{
        purple: '#07367D',
        nevigation: "#EA5433",
      },
      backgroundColor:{
        gray: '#ECEDEF',
        nevigation: "#F6ECD4",
        greenSelf: "#A8F2D0"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
