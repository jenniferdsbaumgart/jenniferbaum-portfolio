"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { fadeVariants, getReducedMotionVariants, viewportOptions } from "@/lib/animations";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const FadeIn = ({ 
  children, 
  delay = 0, 
  duration,
  className,
  ...props 
}: FadeInProps) => {
  const prefersReducedMotion = useReducedMotion();
  
  const variants = prefersReducedMotion 
    ? getReducedMotionVariants(fadeVariants)
    : fadeVariants;

  const customTransition = duration ? { duration, delay } : { delay };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      variants={variants}
      viewport={viewportOptions}
      transition={customTransition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};