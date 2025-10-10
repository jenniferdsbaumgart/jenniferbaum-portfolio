"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { loadingVariants } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SkeletonProps {
  className?: string;
  variant?: "pulse" | "wave" | "static";
  width?: string | number;
  height?: string | number;
  rounded?: "none" | "sm" | "md" | "lg" | "full";
}

export const Skeleton = ({
  className,
  variant = "pulse",
  width,
  height,
  rounded = "md",
}: SkeletonProps) => {
  const prefersReducedMotion = useReducedMotion();

  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  const baseClasses = cn(
    "bg-gray-200 dark:bg-gray-700",
    roundedClasses[rounded],
    className
  );

  const style = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  };

  if (prefersReducedMotion || variant === "static") {
    return <div className={baseClasses} style={style} />;
  }

  if (variant === "wave") {
    return (
      <div className={cn(baseClasses, "relative overflow-hidden")} style={style}>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    );
  }

  return (
    <motion.div
      className={baseClasses}
      style={style}
      variants={loadingVariants}
      animate="pulse"
    />
  );
};