/**
 * Design System Utilities
 * 
 * Utility functions for working with design tokens and creating consistent styles.
 */

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { designTokens } from './tokens';

/**
 * Utility function to merge Tailwind classes with proper precedence
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Get a color value from the design tokens
 */
export function getColor(
  color: keyof typeof designTokens.colors,
  shade?: keyof typeof designTokens.colors.primary
) {
  const colorScale = designTokens.colors[color];
  
  if (typeof colorScale === 'string') {
    return colorScale;
  }
  
  if (shade && typeof colorScale === 'object' && shade in colorScale) {
    return colorScale[shade as keyof typeof colorScale];
  }
  
  return colorScale.DEFAULT || colorScale[500];
}

/**
 * Get spacing value from design tokens
 */
export function getSpacing(size: keyof typeof designTokens.spacing) {
  return designTokens.spacing[size];
}

/**
 * Get border radius value from design tokens
 */
export function getBorderRadius(size: keyof typeof designTokens.borderRadius) {
  return designTokens.borderRadius[size];
}

/**
 * Get box shadow value from design tokens
 */
export function getBoxShadow(size: keyof typeof designTokens.boxShadow) {
  return designTokens.boxShadow[size];
}

/**
 * Get typography values from design tokens
 */
export function getTypography(size: keyof typeof designTokens.typography.fontSize) {
  return designTokens.typography.fontSize[size];
}

/**
 * Create responsive breakpoint utilities
 */
export const breakpoints = {
  xs: `(max-width: ${designTokens.breakpoints.xs})`,
  sm: `(max-width: ${designTokens.breakpoints.sm})`,
  md: `(max-width: ${designTokens.breakpoints.md})`,
  lg: `(max-width: ${designTokens.breakpoints.lg})`,
  xl: `(max-width: ${designTokens.breakpoints.xl})`,
  '2xl': `(max-width: ${designTokens.breakpoints['2xl']})`,
} as const;

/**
 * Animation utilities
 */
export const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  
  slideInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  
  slideInDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  
  slideInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  
  slideInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: { duration: 0.2, ease: 'easeInOut' },
  },
  
  bounce: {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse' as const,
      },
    },
  },
} as const;

/**
 * Focus ring utility for accessibility
 */
export const focusRing = 'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900';

/**
 * Common transition classes
 */
export const transitions = {
  default: 'transition-all duration-200 ease-in-out',
  fast: 'transition-all duration-150 ease-in-out',
  slow: 'transition-all duration-300 ease-in-out',
  colors: 'transition-colors duration-200 ease-in-out',
  transform: 'transition-transform duration-200 ease-in-out',
  opacity: 'transition-opacity duration-200 ease-in-out',
} as const;

/**
 * Common shadow utilities
 */
export const shadows = {
  card: 'shadow-md hover:shadow-lg transition-shadow duration-200',
  button: 'shadow-sm hover:shadow-md transition-shadow duration-200',
  modal: 'shadow-2xl',
  dropdown: 'shadow-lg',
} as const;

/**
 * Accessibility utilities
 */
export const a11y = {
  srOnly: 'sr-only',
  focusVisible: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
  skipLink: 'absolute left-[-10000px] top-auto w-1 h-1 overflow-hidden focus:left-6 focus:top-7 focus:w-auto focus:h-auto focus:overflow-visible',
} as const;