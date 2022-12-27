/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "herro-img": "url('/src/assets/herro.jpg')",
      }),
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
