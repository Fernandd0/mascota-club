/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js", "./css/**/*.css"],
  theme: {
    extend: {
      colors: {
        beige: "#FDE3C4",
        orange: "#FF773B",
        purple: "#505DD6",
        sky: "#62C6F9",
        skyazull: "#005885",
      },
      fontFamily: {
        "bree-regular": ["fuente-bree-regular", "sans-serif"],
        "bree-bold": ["fuente-bree-bold", "sans-serif"],
        gulya: ["fuente-gulya", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
