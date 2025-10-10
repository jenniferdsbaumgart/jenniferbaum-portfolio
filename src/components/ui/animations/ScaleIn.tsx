"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { getReducedMotionVariants, scaleVariants, viewportOptions } from "@/lib/animations";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ScaleInProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const ScaleIn = ({ 
  children, 
  delay = 0, 
  duration,
  className,
  ...props 
}: ScaleInProps) => {
  const prefersReducedMotion = useReducedMotion();
  
  const variants = prefersReducedMotion 
    ? getReducedMotionVariants(scaleVariants)
    : scaleVariants;

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