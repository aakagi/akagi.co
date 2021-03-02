module.exports = {
  purge: ['./**/*.js'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        display: ['gotham', 'sans-serif'],
        body: ['gotham', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['hover'],
      borderWidth: ['hover'],
    },
  },
  plugins: [],
}
