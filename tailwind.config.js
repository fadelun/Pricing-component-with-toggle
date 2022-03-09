module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      monst: ["Montserrat", "sans-serif"],
    },

    extend: {
      colors: {
        "blue-primary": "hsl(236, 72%, 79%)",
        "violet-primary": "hsl(237, 63%, 64%)",
        "white-ghost": "hsl(240, 78%, 98%)",
      },
    },
  },
  plugins: [],
};
