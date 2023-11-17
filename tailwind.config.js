/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      General: ["General Sans", "sans-serif"],
    },
    colors: {
      ...colors,
      transparent: "transparent",
      Mblack: "#171717",
      Myellow: "#FEC51C",
      MsoftYellow: "#FFF0DC",
      Mgray: "#525252",
      Mbg: "#151D38",
    },
    extend: {},
  },
  plugins: [],
};
