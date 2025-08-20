export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./artifice/public/Background.jpeg')",
        designer: "url('./artifice/public/Designer.jpeg')",
        ui: "url('./artifice/public/ui.jpeg')",
        app: "url('./artifice/public/App-main.jpg')",
      },
      animation: {
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },

      keyframes: {
        orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      syne: ["Syne", "sans-serif"],
    },
    // screens: {
    //   xxs: "430px", // min-width
    // },
  },
  plugins: [],
};
