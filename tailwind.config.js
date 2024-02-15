/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        desktop: "url('../public/metal-bg.webp')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "brand-green": "#64cd85",
        "brand-light-blue": "#4fc8dc",
        "brand-dark-blue": "#3777a8",
        "brand-orange": "#df8e65",
        "brand-pink": "#ba5a87",
        "brand-purple": "#a359a0",
        "brand-red": "#FF3132",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)"],
      },
      animation: {
        "spin-slow": "spin 4s linear infinite",
      },
    },
  },
  plugins: [],
};
