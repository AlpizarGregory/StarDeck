/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: { rocket: "spin 5s linear infinite" },
    },
  },
  plugins: [],
};
