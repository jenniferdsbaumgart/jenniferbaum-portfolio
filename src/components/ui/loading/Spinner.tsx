"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { loadingVariants } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  color?: "primary" | "secondary" | "white" | "current";
  label?: string;
}

export const Spinner = ({
  size = "md",
  className,
  color = "primary",
  label = "Loading...",
}: SpinnerProps) => {
  const prefersReducedMotion = useReducedMotion();

  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  };

  const colorClasses = {
    primary: "text-violet-500",
    secondary: "text-gray-500",
    white: "text-white",
    current: "text-current",
  };

  const spinnerClasses = cn(
    "inline-block border-2 border-current border-t-transparent rounded-full",
    sizeClasses[size],
    colorClasses[color],
    className
  );

  if (prefersReducedMotion) {
    return (
      <div 
        className={cn(spinnerClasses, "opacity-60")}
        role="status"
        aria-label={label}
      >
        <span className="sr-only">{label}</span>
      </div>
    );
  }

  return (
    <motion.div
      className={spinnerClasses}
      variants={loadingVariants}
      animate="spin"
      role="status"
      aria-label={label}
    >
      <span className="sr-only">{label}</span>
    </motion.div>
  );
};