"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";
import React, { Suspense } from "react";

interface IntersectionLazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
  id?: string;
  threshold?: number;
  rootMargin?: string;
}

const DefaultFallback = () => (
  <div className="flex min-h-[400px] w-full items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary-500" />
  </div>
);

export const IntersectionLazySection: React.FC<
  IntersectionLazySectionProps
> = ({
  children,
  fallback = <DefaultFallback />,
  className,
  id,
  threshold = 0.1,
  rootMargin = "100px",
}) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  return (
    <section ref={elementRef} id={id} className={cn("w-full", className)}>
      {isIntersecting ? (
        <Suspense fallback={fallback}>{children}</Suspense>
      ) : (
        fallback
      )}
    </section>
  );
};
