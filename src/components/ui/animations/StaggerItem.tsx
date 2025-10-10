"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { getReducedMotionVariants, staggerItemVariants } from "@/lib/animations";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface StaggerItemProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  className?: string;
}

export const StaggerItem = ({ 
  children, 
  className,
  ...props 
}: StaggerItemProps) => {
  const prefersReducedMotion = useReducedMotion();
  
  const variants = prefersReducedMotion 
    ? getReducedMotionVariants(staggerItemVariants)
    : staggerItemVariants;

  return (
    <motion.div
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};