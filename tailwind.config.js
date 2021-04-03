module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        custom:
          "rgb(67 90 111 / 30%) 0px 0px 1px, rgb(67 90 111 / 47%) 0px 16px 24px -8px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
