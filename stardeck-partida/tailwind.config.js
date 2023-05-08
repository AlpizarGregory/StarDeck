/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: { "rocket-spin": "spin 20 linear infinite" },
    },
  },
  plugins: [],
};
