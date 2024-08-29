/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#000",
      hoverLink: "#333333",
      secondary: "#BBBBBB",
      evenColor: "#EEF1C4",
      border: "rgb(221 221 221)",
      banner: "#D7F1FD",
      accent: "#BCEDEA",
      white: "#FFFFFF",
      black: "#000000",
    },
    fontFamily: {
      sans: ["DM-sans", "sans-serif"],
      serif: ["Cormorant", "serif"],
    },
    screens: {
      sm: "640px",
      tablet: "768px",
      laptop: "1101px",
      desktop: "1601px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
