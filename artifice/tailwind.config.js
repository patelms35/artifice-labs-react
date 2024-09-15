export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./artifice/public/Background.jpeg')",
        designer: "url('./artifice/public/Designer.jpeg')",
      },
    },
    fontFamily: {
      poppins: ["poppins", "sans-serif"],
    },
    // screens: {
    //   xxs: "430px", // min-width
    // },
  },
  plugins: [],
};
