const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: false,
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: colors.blue,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.yellow,
      green: colors.green
    },
    screens: {
      sm: "900px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      borderStyle: ["hover", "focus"],
      fontFamily: {
        "roboto-condensed": ['"Roboto Condensed"', "sans-serif"],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        blinkTextCursor: {
          "0%": { borderRightColor: "rgba(0,0,0,1)" },
          "100%": { borderRightColor: "rgba(0,0,0,.5)" },
        },
        fadein: {
          "0%": { opacity: 0 },
          "66%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeinDelay: {
          "0%": { opacity: 0 },
          "66%": { opacity: 0.5 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "10%": { bottom: "-90px" },
          "0%": { bottom: "90px" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        blinkTextCursor: "blinkTextCursor 500ms infinite normal",
        fadein: "6s ease 0s normal forwards 1 fadein",
        fadeinNoDelay: "500ms  ease 0s normal forwards  1 fadeinDelay",
        slideUp: "slideUp .3s ease-out",
      }
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer"), require('tailwind-hamburgers')],
};
