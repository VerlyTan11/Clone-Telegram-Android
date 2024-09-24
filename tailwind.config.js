// tailwind.config.js

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "default-blue" : "#517DA2",
      "profile-blue" : "#2e699a",
      "text-blue" : "#4b90b9",
      "light-grey": "#C5C9CC",
      gray: "#f0f0f0",
      green : "#4ACB54",
      white: "#fff",
      "light-dark": "#242426",
      dark : "#181818",
    },
  },
  plugins: [],
}