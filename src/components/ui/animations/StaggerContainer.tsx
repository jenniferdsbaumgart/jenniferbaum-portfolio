"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { getReducedMotionVariants, staggerVariants, viewportOptions } from "@/lib/animations";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface StaggerContainerProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
}

export const StaggerContainer = ({ 
  children, 
  staggerDelay = 0.1,
  delayChildren = 0.2,
  className,
  ...props 
}: StaggerContainerProps) => {
  const prefersReducedMotion = useReducedMotion();
  
  const variants = prefersReducedMotion 
    ? getReducedMotionVariants(staggerVariants)
    : {
        ...staggerVariants,
        visible: {
          ...staggerVariants.visible,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      variants={variants}
      viewport={viewportOptions}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};