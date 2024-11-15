/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        starship: "url('/images/starship.webp')",
      },
      animation: {
        fadeInUp: "fadeInUp 1s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      height: {
        lvh: "100lvh",
      },
      gridTemplateColumns: {
        "data-card": "repeat(auto-fill, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
};
