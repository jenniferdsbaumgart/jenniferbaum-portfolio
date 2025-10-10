"use client";

import {
    fadeVariants,
    getReducedMotionVariants,
    hoverVariants,
    scaleVariants,
    slideVariants,
    staggerItemVariants,
    staggerVariants
} from "@/lib/animations";
import type { Variants } from "framer-motion";
import { useReducedMotion } from "./useReducedMotion";
import { useScrollTrigger } from "./useScrollTrigger";

interface UseAnimationsOptions {
  type?: "fade" | "slide" | "scale" | "stagger" | "staggerItem";
  direction?: "up" | "down" | "left" | "right";
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
}

/**
 * Comprehensive hook for managing animations with accessibility support
 */
export const useAnimations = (options: UseAnimationsOptions = {}) => {
  const {
    type = "fade",
    direction = "up",
    threshold = 0.3,
    triggerOnce = true,
    delay = 0,
  } = options;

  const prefersReducedMotion = useReducedMotion();
  const { ref, isInView } = useScrollTrigger({ threshold, triggerOnce });

  // Get base variants based on type
  const getBaseVariants = (): Variants => {
    switch (type) {
      case "slide":
        return slideVariants[direction];
      case "scale":
        return scaleVariants;
      case "stagger":
        return staggerVariants;
      case "staggerItem":
        return staggerItemVariants;
      case "fade":
      default:
        return fadeVariants;
    }
  };

  const baseVariants = getBaseVariants();
  
  // Apply reduced motion if needed
  const variants = prefersReducedMotion 
    ? getReducedMotionVariants(baseVariants)
    : baseVariants;

  // Animation controls
  const controls = {
    initial: "hidden",
    animate: isInView ? "visible" : "hidden",
    variants,
    transition: delay ? { delay } : undefined,
  };

  // Hover variants for interactive elements
  const hoverControls = prefersReducedMotion 
    ? {}
    : hoverVariants.scale;

  return {
    ref,
    isInView,
    controls,
    hoverControls,
    variants,
    prefersReducedMotion,
  };
};