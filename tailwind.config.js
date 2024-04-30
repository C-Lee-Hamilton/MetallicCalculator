/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {},
      colors: {},
      boxShadow: {
        custom: "0 4px 6px 0 rgba(0, 0, 0, 0.5)",
        standard:
          "inset 0 0 20px rgba(255, 255, 255, 0.2), 0 0 10px rgba(0, 0, 0, 0.5)",
      },
      textShadow: {
        // Define your text shadow styles here
        default: "2.5px 2.5px 3.5px rgba(146, 125, 94, 0.6)", // A simple shadow with 50% opacity
        dark: "3px 3px 4px rgba(146, 125, 94, 0.75)", // A darker shadow
      },
      screens: {
        sm: "300px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const newUtilities = {};
      Object.entries(theme("boxShadow")).forEach(([name, value]) => {
        newUtilities[`.box-shadow-${name}`] = {
          boxShadow: value,
        };
      });

      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
