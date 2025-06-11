/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF9F6",
        beige: "#EFE8D8",
        sage: "#B8C1A6",
        blush: "#E8C9C0",
        softGreen: "#A3B18A",
        charcoal: "#333333",
        gold: "#D4AF37",
      },
      fontFamily: {
        serif: ["Fraunces", "serif"],
        sans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
