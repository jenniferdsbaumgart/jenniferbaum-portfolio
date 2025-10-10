/**
 * Animation system for consistent motion design
 * Provides reusable animation variants, transitions, and utilities
 */

import type { Variants } from "framer-motion";

// Animation duration constants
export const DURATIONS = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8,
} as const;

// Easing functions
export const EASINGS = {
  easeOut: [0.0, 0.0, 0.2, 1],
  easeIn: [0.4, 0.0, 1, 1],
  easeInOut: [0.4, 0.0, 0.2, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
  spring: { type: "spring", damping: 25, stiffness: 300 },
} as const;

// Base transition configurations
export const transitions = {
  default: {
    duration: DURATIONS.normal,
    ease: EASINGS.easeOut,
  },
  spring: {
    type: "spring" as const,
    damping: 25,
    stiffness: 300,
  },
  bounce: {
    duration: DURATIONS.slow,
    ease: EASINGS.bounce,
  },
} as const;

// Fade animations
export const fadeVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: transitions.default,
  },
  exit: {
    opacity: 0,
    transition: { duration: DURATIONS.fast },
  },
};

// Slide animations
export const slideVariants = {
  up: {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitions.spring,
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: { duration: DURATIONS.fast },
    },
  },
  down: {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitions.spring,
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: { duration: DURATIONS.fast },
    },
  },
  left: {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: transitions.spring,
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: { duration: DURATIONS.fast },
    },
  },
  right: {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: transitions.spring,
    },
    exit: {
      opacity: 0,
      x: 50,
      transition: { duration: DURATIONS.fast },
    },
  },
} as const;

// Scale animations
export const scaleVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.spring,
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: DURATIONS.fast },
  },
};

// Stagger animations for lists
export const staggerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.spring,
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: DURATIONS.fast },
  },
};

// Hover and tap animations
export const hoverVariants = {
  scale: {
    whileHover: {
      scale: 1.05,
      transition: { duration: DURATIONS.fast },
    },
    whileTap: {
      scale: 0.95,
      transition: { duration: DURATIONS.fast },
    },
  },
  lift: {
    whileHover: {
      y: -5,
      transition: transitions.spring,
    },
    whileTap: {
      y: 0,
      transition: { duration: DURATIONS.fast },
    },
  },
  glow: {
    whileHover: {
      boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)",
      transition: { duration: DURATIONS.fast },
    },
  },
} as const;

// Loading animations
export const loadingVariants: Variants = {
  spin: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear",
    },
  },
  pulse: {
    scale: [1, 1.1, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  bounce: {
    y: [0, -10, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Utility function to create custom variants
export const createSlideVariant = (
  direction: "up" | "down" | "left" | "right",
  distance: number = 50
): Variants => {
  const axis = direction === "up" || direction === "down" ? "y" : "x";
  const value =
    direction === "up" || direction === "left" ? distance : -distance;

  return {
    hidden: {
      opacity: 0,
      [axis]: value,
    } as any,
    visible: {
      opacity: 1,
      [axis]: 0,
      transition: transitions.spring,
    } as any,
    exit: {
      opacity: 0,
      [axis]: -value,
      transition: { duration: DURATIONS.fast },
    } as any,
  };
};

// Utility function for reduced motion
export const getReducedMotionVariants = (variants: Variants): Variants => {
  const reducedVariants: Variants = {};

  Object.keys(variants).forEach(key => {
    const variant = variants[key];
    if (typeof variant === "object" && variant !== null) {
      reducedVariants[key] = {
        ...variant,
        transition: { duration: 0 },
      };
    }
  });

  return reducedVariants;
};

// Viewport animation options
export const viewportOptions = {
  once: true,
  margin: "-100px 0px",
  amount: 0.3,
} as const;
