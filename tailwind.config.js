// eslint-disable-next-line
const defaultTheme = require("tailwindcss/defaultTheme");

/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: "1.2rem",
      tiny: "1.3rem",
      sm: "1.4rem",
      base: "1.5rem",
      md: "1.7rem",
      lg: "1.9rem",
      xl: "2.2rem",
      "2xl": "2.4rem",
      "3xl": "2.6rem",
      "4xl": "2.8rem",
      "5xl": "3rem",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        source: ["Fira Code", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
