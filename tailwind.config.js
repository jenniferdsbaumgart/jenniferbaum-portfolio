/** @type {import('tailwindcss').Config} */
import textStroke from "tailwindcss-text-stroke";
import { designTokens } from "./src/design-system/tokens";

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Override default theme with design tokens
    colors: designTokens.colors,
    fontFamily: designTokens.typography.fontFamily,
    fontSize: designTokens.typography.fontSize,
    fontWeight: designTokens.typography.fontWeight,
    lineHeight: designTokens.typography.lineHeight,
    letterSpacing: designTokens.typography.letterSpacing,
    spacing: designTokens.spacing,
    borderRadius: designTokens.borderRadius,
    boxShadow: designTokens.boxShadow,
    zIndex: designTokens.zIndex,
    
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      
      // Animation tokens
      transitionDuration: designTokens.animation.duration,
      transitionTimingFunction: designTokens.animation.easing,
      
      // Custom utilities
      backdropBlur: {
        xs: 'blur(2px)',
      },
    },
    
    screens: {
      xs: { max: designTokens.breakpoints.xs },
      sm: { max: designTokens.breakpoints.sm },
      md: { max: designTokens.breakpoints.md },
      lg: { max: designTokens.breakpoints.lg },
      xl: { max: designTokens.breakpoints.xl },
      '2xl': { max: designTokens.breakpoints['2xl'] },
    },
  },
  plugins: [textStroke],
  darkMode: "class",
};
