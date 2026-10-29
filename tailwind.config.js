/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#090d18",
        panel: "#101725",
        accent: "#7c9cff",
      },
    },
  },
  plugins: [],
};
