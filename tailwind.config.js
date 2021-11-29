module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
