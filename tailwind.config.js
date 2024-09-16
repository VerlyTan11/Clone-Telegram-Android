// tailwind.config.js

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "default-blue" : "#517DA2",
      "text-blue" : "#4b90b9",
      "light-grey": "#C5C9CC",
      gray: "#f0f0f0",
      green : "#4ACB54",
      white: "#fff",
    },
  },
  plugins: [],
}