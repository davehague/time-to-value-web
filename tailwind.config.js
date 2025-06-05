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
          blue: '#2d6cdf',
          green: '#a6e3c6', 
          coral: '#ff6b5d',
          dark: '#3d3d4e',
          cream: '#f5e8d3',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/hero-background.jpg')",
      }
    },
  },
  plugins: [],
}
