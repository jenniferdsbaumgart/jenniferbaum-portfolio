"use client";

import { useEffect, useRef, useState } from "react";

interface UseScrollTriggerOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Hook to trigger animations when element enters viewport
 */
export const useScrollTrigger = (options: UseScrollTriggerOptions = {}) => {
  const {
    threshold = 0.3,
    rootMargin = "0px 0px -100px 0px",
    triggerOnce = true,
  } = options;

  const [isInView, setIsInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // If already triggered and triggerOnce is true, don't observe
    if (hasTriggered && triggerOnce) return;

    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        if (!entry) return;

        const inView = entry.isIntersecting;
        setIsInView(inView);

        if (inView && !hasTriggered) {
          setHasTriggered(true);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  return {
    ref: elementRef,
    isInView: triggerOnce ? hasTriggered : isInView,
    hasTriggered,
  };
};
