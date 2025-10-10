"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { DURATIONS } from "@/lib/animations";
import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";

interface LanguageTransitionProps {
  children: ReactNode;
  languageKey: string; // Use language as key to trigger transitions
  direction?: "horizontal" | "vertical";
}

export const LanguageTransition = ({ 
  children, 
  languageKey,
  direction = "horizontal" 
}: LanguageTransitionProps) => {
  const prefersReducedMotion = useReducedMotion();

  const slideDistance = 20;
  
  const variants = {
    initial: {
      opacity: prefersReducedMotion ? 1 : 0,
      x: prefersReducedMotion ? 0 : (direction === "horizontal" ? slideDistance : 0),
      y: prefersReducedMotion ? 0 : (direction === "vertical" ? slideDistance : 0),
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : DURATIONS.normal,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      opacity: prefersReducedMotion ? 1 : 0,
      x: prefersReducedMotion ? 0 : (direction === "horizontal" ? -slideDistance : 0),
      y: prefersReducedMotion ? 0 : (direction === "vertical" ? -slideDistance : 0),
      transition: {
        duration: prefersReducedMotion ? 0 : DURATIONS.fast,
        ease: "easeIn",
      },
    },
  };

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={languageKey}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};