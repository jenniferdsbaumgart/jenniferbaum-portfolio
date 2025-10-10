"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface LoadingDotsProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  color?: "primary" | "secondary" | "white" | "current";
  label?: string;
}

export const LoadingDots = ({
  size = "md",
  className,
  color = "primary",
  label = "Loading...",
}: LoadingDotsProps) => {
  const prefersReducedMotion = useReducedMotion();

  const sizeClasses = {
    sm: "w-1 h-1",
    md: "w-2 h-2",
    lg: "w-3 h-3",
  };

  const colorClasses = {
    primary: "bg-violet-500",
    secondary: "bg-gray-500",
    white: "bg-white",
    current: "bg-current",
  };

  const dotClasses = cn(
    "rounded-full",
    sizeClasses[size],
    colorClasses[color]
  );

  const containerClasses = cn("flex items-center space-x-1", className);

  const bounceVariants = {
    animate: {
      y: [0, -8, 0],
    },
  };

  const bounceTransition = {
    duration: 0.6,
    repeat: Infinity,
    ease: "easeInOut",
  };

  if (prefersReducedMotion) {
    return (
      <div 
        className={containerClasses}
        role="status"
        aria-label={label}
      >
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className={cn(dotClasses, "opacity-60")} />
        ))}
        <span className="sr-only">{label}</span>
      </div>
    );
  }

  return (
    <div 
      className={containerClasses}
      role="status"
      aria-label={label}
    >
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className={dotClasses}
          variants={bounceVariants}
          animate="animate"
          transition={{
            ...bounceTransition,
            delay: i * 0.1,
          }}
        />
      ))}
      <span className="sr-only">{label}</span>
    </div>
  );
};