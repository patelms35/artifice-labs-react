export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('./src/assets/Images/Background.png')",
        "designer": "url('./src/assets/Designer.jpeg')"
      },
    },
  },
  plugins: [],
}
