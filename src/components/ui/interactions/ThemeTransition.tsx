"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { DURATIONS } from "@/lib/animations";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ThemeTransitionProps {
  children: React.ReactNode;
  themeKey: string; // Use theme as key to trigger transitions
}

export const ThemeTransition = ({ children, themeKey }: ThemeTransitionProps) => {
  const prefersReducedMotion = useReducedMotion();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, prefersReducedMotion ? 0 : DURATIONS.normal * 1000);

    return () => clearTimeout(timer);
  }, [themeKey, prefersReducedMotion]);

  const variants = {
    initial: { opacity: prefersReducedMotion ? 1 : 0.8 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: prefersReducedMotion ? 0 : DURATIONS.normal,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: prefersReducedMotion ? 1 : 0.8,
      transition: { 
        duration: prefersReducedMotion ? 0 : DURATIONS.fast 
      }
    },
  };

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={themeKey}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={isTransitioning ? "pointer-events-none" : ""}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};