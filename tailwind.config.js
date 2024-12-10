/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rust: {
          100: "#F29F58",
          200: "#AB4459",
          300: "#441752",
        },
      },
    },
  },
  plugins: [],
};
