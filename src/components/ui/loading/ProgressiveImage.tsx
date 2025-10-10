"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Skeleton } from "../skeleton/Skeleton";

interface ProgressiveImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: string;
  sizes?: string;
  fill?: boolean;
}

export const ProgressiveImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  placeholder,
  sizes,
  fill = false,
}: ProgressiveImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const transition = prefersReducedMotion 
    ? { duration: 0 }
    : { duration: 0.3, ease: "easeOut" };

  if (hasError) {
    return (
      <div 
        className={cn(
          "flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-400",
          className
        )}
        style={{ width, height }}
      >
        <span className="text-sm">Failed to load image</span>
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="skeleton"
            variants={fadeVariants}
            initial="visible"
            exit="exit"
            transition={transition}
            className="absolute inset-0 z-10"
          >
            <Skeleton 
              className="w-full h-full" 
              variant="wave"
              rounded="none"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        variants={fadeVariants}
        initial="hidden"
        animate={isLoading ? "hidden" : "visible"}
        transition={transition}
      >
        <Image
          src={src}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          priority={priority}
          placeholder={placeholder ? "blur" : "empty"}
          blurDataURL={placeholder}
          sizes={sizes}
          onLoad={handleLoad}
          onError={handleError}
          className={cn("object-cover", fill && "absolute inset-0")}
        />
      </motion.div>
    </div>
  );
};