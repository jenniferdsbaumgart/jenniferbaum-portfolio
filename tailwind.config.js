/** @type {import('tailwindcss').Config} */
import textStroke from "tailwindcss-text-stroke";

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        abril: ['var(--font-abril-fatface)'],
        oswald: ['var(--font-oswald)', 'sans-serif'],
        bebas: ['var(--font-bebas)'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
    screens: {
      xl: { max: "1400px" },
      lg: { max: "1150px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "393px" },
    },
  },
  plugins: [textStroke],
  darkMode: "class",
};
