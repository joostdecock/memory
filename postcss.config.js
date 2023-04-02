// PostCSS does not handle ESM, so CJS it is
module.exports = {
  plugins: ['tailwindcss/nesting', 'tailwindcss', 'autoprefixer', 'postcss-for'],
}
