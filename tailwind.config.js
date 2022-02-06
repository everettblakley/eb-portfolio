const typography = require('@tailwindcss/typography')

module.exports = {
  theme: {},
  variants: {},
  plugins: [typography],
  purge: {
    content: [
      `content/**/*.md`,
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
    ],
  },
}
