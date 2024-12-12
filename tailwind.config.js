/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(17,24,39)",
        secondary: "rgb(31,41,55)"
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
