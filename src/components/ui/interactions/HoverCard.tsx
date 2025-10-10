"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { hoverVariants } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface HoverCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  variant?: "scale" | "lift" | "glow";
  className?: string;
  disabled?: boolean;
}

export const HoverCard = ({
  children,
  variant = "scale",
  className,
  disabled = false,
  ...props
}: HoverCardProps) => {
  const prefersReducedMotion = useReducedMotion();

  if (disabled || prefersReducedMotion) {
    const filteredProps = Object.fromEntries(
      Object.entries(props).filter(([_, value]) => value !== undefined)
    );
    return (
      <div className={className} {...filteredProps}>
        {children}
      </div>
    );
  }

  const filteredProps = Object.fromEntries(
    Object.entries(props).filter(([_, value]) => value !== undefined)
  );

  return (
    <motion.div
      className={cn("cursor-pointer", className)}
      {...hoverVariants[variant]}
      {...filteredProps}
    >
      {children}
    </motion.div>
  );
};
