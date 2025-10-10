"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { DURATIONS } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface FloatingActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  tooltip?: string;
  variant?: "primary" | "secondary";
}

export const FloatingAction = ({
  children,
  size = "md",
  position = "bottom-right",
  tooltip,
  variant = "primary",
  className,
  ...props
}: FloatingActionProps) => {
  const prefersReducedMotion = useReducedMotion();

  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-14 h-14",
    lg: "w-16 h-16",
  };

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-6 right-6",
    "top-left": "top-6 left-6",
  };

  const variantClasses = {
    primary: "bg-violet-500 text-white shadow-lg hover:bg-violet-600",
    secondary: "bg-white text-gray-700 shadow-lg hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",
  };

  const buttonClasses = cn(
    "fixed z-50 rounded-full flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2",
    sizeClasses[size],
    positionClasses[position],
    variantClasses[variant],
    className
  );

  const motionProps = prefersReducedMotion
    ? {}
    : {
        whileHover: {
          scale: 1.1,
          y: -2,
          transition: { duration: DURATIONS.fast },
        },
        whileTap: {
          scale: 0.95,
          transition: { duration: DURATIONS.fast },
        },
        initial: {
          scale: 0,
          opacity: 0,
        },
        animate: {
          scale: 1,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 25,
          },
        },
      };

  return (
    <motion.button
      className={buttonClasses}
      title={tooltip}
      aria-label={tooltip}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  );
};