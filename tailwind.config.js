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
        "brand-green": "#C0DC80",
        "brand-light-blue": "#98DCFF",
        "brand-blue": "#1893f8",
        "brand-dark-blue": "#3777a8",
        "brand-orange": "#df8e65",
        "brand-pink": "#ba5a87",
        "brand-purple": "rgba(205, 187, 225, 1)",
        "brand-red": "#FF3132",
        "brand-brown": "#795642",
        "brand-yellow": "rgba(235, 240, 148, 1)",
        "overlay-blue": "rgb(152, 220, 255)",
        "overlay-brown": "rgb(122, 85, 66)",
        "overlay-green": "rgb(191, 220, 128)",
        "overlay-purple": "rgb(205, 187, 225)",
        "splash-yellow": "#EBF094",
        "splash-blue": "#98DCFF",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        display: ["var(--font-shrikhand)"],
      },
      animation: {
        spin: "spin 2s linear infinite",
        scale: "scale 2s linear infinite",
      },
      keyframes: {
        scale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.5)" },
        },
      },
      cursor: {
        fancy: "url(/fancy-cursor.png), pointer",
      },
    },
  },
  plugins: [],
};
