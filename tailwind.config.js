module.exports = {
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
        custom: "5.5rem",
      },
    },
    fontFamily: {
      lake: ["TT Lake", "sans-serif"],
    },
    boxShadow: {},
    colors: {
      white: "#ffffff",
      black: {
        100: "#353535",
      },
      green: {
        100: "#0D927D",
        200: "rgb(13,146,125, 0.3)",
        300: "#152E32",
      },
      gray: {
        100: "#8F8F8F",
        200: "#ffffff",
      },
    },
    extend: {},
  },
  variants: {
    border: ["hover", "active", "disabled"],
    borderColor: ["hover", "active", "disabled"],
    textColor: ["hover", "active", "disabled"],
    backgroundColor: ["active"],
  },
  plugins: [],
};
