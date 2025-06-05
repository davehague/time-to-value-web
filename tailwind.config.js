/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary Colors (use most)
          blue: '#2d6cdf',
          dark: '#3d3d4e',

          // Accent Colors (use sparingly)
          coral: '#ff6b5d',

          // Background Colors (very subtle)
          cream: '#f5e8d3',

          // Legacy colors (minimize usage)
          green: '#a6e3c6',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/hero-background.png')",
      }
    },
  },
  plugins: [],
}
