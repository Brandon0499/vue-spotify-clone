const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        spotifyBG: "#1D1D1D",
        grayText: "#A7A7A7",
        cardBG: "#181818",
        cardHover: "#282828",
        spotifyGreen: "#1DB954",
      },
    },
    // screens: {
    //   medium: "855px",
    //   // => @media (min-width: 640px) { ... }

    //   large: "1090px",
    //   // => @media (min-width: 1024px) { ... }

    //   extralarge: "1296px",
    //   // => @media (min-width: 1280px) { ... }
    // },
  },
  plugins: [],
};
