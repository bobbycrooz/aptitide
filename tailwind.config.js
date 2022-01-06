module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      joe: ["Josefin Sans", "sans-serif"],
      pac: ["Pacifico", "cursive"],
      lato: ["Lato", "sans-serif"],
      src: ["Source Sans Pro", "sans-serif"],
      pop: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        pri: {
          1: "#fa3d3d",
          2: "#faebeb",
        },
        sec: {
          1: "#FF4100",
          2: "",
        },
        txt: {
          1: "#171717",
          2: "#C4C4C4",
          3: "#646464",
          4: "#121212",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
