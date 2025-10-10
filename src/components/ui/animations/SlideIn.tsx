"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { getReducedMotionVariants, slideVariants, viewportOptions } from "@/lib/animations";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SlideInProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
}

export const SlideIn = ({ 
  children, 
  direction = "up",
  delay = 0, 
  duration,
  className,
  ...props 
}: SlideInProps) => {
  const prefersReducedMotion = useReducedMotion();
  
  const variants = prefersReducedMotion 
    ? getReducedMotionVariants(slideVariants[direction])
    : slideVariants[direction];

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