"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { DURATIONS, hoverVariants } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export const AnimatedButton = ({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  icon,
  iconPosition = "left",
  className,
  disabled,
  ...props
}: AnimatedButtonProps) => {
  const prefersReducedMotion = useReducedMotion();

  const baseClasses = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variantClasses = {
    primary: "bg-violet-500 text-white hover:bg-violet-600 shadow-md",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600",
    ghost: "hover:bg-gray-100 dark:hover:bg-gray-800",
    link: "text-violet-500 underline-offset-4 hover:underline",
  };

  const sizeClasses = {
    sm: "h-8 px-3 text-sm rounded-md",
    md: "h-10 px-4 py-2 rounded-md",
    lg: "h-12 px-6 text-lg rounded-lg",
  };

  const buttonClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const iconClasses = cn(
    "flex-shrink-0",
    size === "sm" ? "w-4 h-4" : size === "lg" ? "w-6 h-6" : "w-5 h-5",
    children && (iconPosition === "left" ? "mr-2" : "ml-2")
  );

  const motionProps = prefersReducedMotion
    ? {}
    : {
        ...hoverVariants.scale,
        whileFocus: {
          scale: 1.02,
          transition: { duration: DURATIONS.fast },
        },
      };

  return (
    <motion.button
      className={buttonClasses}
      disabled={disabled || loading}
      {...motionProps}
      {...props}
    >
      {loading && (
        <motion.div
          className={cn(iconClasses, "animate-spin")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: DURATIONS.fast }}
        >
          <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="32"
              strokeDashoffset="32"
            />
          </svg>
        </motion.div>
      )}
      
      {!loading && icon && iconPosition === "left" && (
        <span className={iconClasses}>{icon}</span>
      )}
      
      {children}
      
      {!loading && icon && iconPosition === "right" && (
        <span className={iconClasses}>{icon}</span>
      )}
    </motion.button>
  );
};