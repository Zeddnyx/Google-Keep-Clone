/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark0:  "#282828",
        light0: "#ebdbb2",
        light1: "#d5c4a1",
        yellow: "#d79821",
        green:  "#98971a",
        blue:   "#83a598",
        aqua:   "#8ec07c",
        aqua_alt: "#689d6a",
        red: "#cc241d",
      },
    },
  },
  plugins: [],
};
