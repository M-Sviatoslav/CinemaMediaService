/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    brightness: {
      25: ".25",
      175: "1.75",
    },
    translate: {
      192: "46rem",
    },
    boxShadow: {
      "custom-white": "0 -20px 40px rgba(255, 255, 255, 1)",
    },
  },
  plugins: [],

};

