module.exports = {
  content: ["index.html"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1024px",
      xl: "1240px",
    },

    fontFamily: {
      monst: ["Montserrat", "sans-serif"],
    },

    extend: {
      backgroundImage: {
        "background-top": "url('../images/bg-top.svg')",
      },
      colors: {
        "blue-primary": "hsl(236, 72%, 79%)",
        "violet-primary": "hsl(237, 63%, 64%)",
        "white-ghost": "hsl(240, 78%, 98%)",
      },
    },
  },
  plugins: [],
};
