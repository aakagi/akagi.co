module.exports = {
  content: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.md', './src/**/*.mdx'],
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
