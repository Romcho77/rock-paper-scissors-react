/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'triangle': "url('/img/icon-triangle.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }


    },
  },
  plugins: [],
}