const { resolvePackageEntry } = require("vite");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        form: "auto, minmax(auto, 400px)",
      },
    },
  },
  plugins: [],
};
