module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ['"Great Vibes"', "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
