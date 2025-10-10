"use client";
import { useCallback, useEffect, useRef } from "react";

interface UseFocusManagementOptions {
  autoFocus?: boolean;
  restoreFocus?: boolean;
  trapFocus?: boolean;
}

export const useFocusManagement = (options: UseFocusManagementOptions = {}) => {
  const {
    autoFocus = false,
    restoreFocus = false,
    trapFocus = false,
  } = options;
  const containerRef = useRef<HTMLElement | null>(null);
  const previousActiveElement = useRef<Element | null>(null);

  // Store the previously focused element
  useEffect(() => {
    if (restoreFocus) {
      previousActiveElement.current = document.activeElement;
    }
  }, [restoreFocus]);

  // Auto focus the first focusable element
  useEffect(() => {
    if (autoFocus && containerRef.current) {
      const firstFocusable = getFocusableElements(containerRef.current)[0];
      if (firstFocusable) {
        firstFocusable.focus();
      }
    }
  }, [autoFocus]);

  // Focus trap implementation
  useEffect(() => {
    if (!trapFocus || !containerRef.current) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || !containerRef.current) {
        return;
      }

      const focusableElements = getFocusableElements(containerRef.current);
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [trapFocus]);

  // Restore focus when component unmounts
  useEffect(() => {
    return () => {
      if (restoreFocus && previousActiveElement.current) {
        (previousActiveElement.current as HTMLElement).focus?.();
      }
    };
  }, [restoreFocus]);

  const getFocusableElements = useCallback(
    (container: HTMLElement): HTMLElement[] => {
      const focusableSelectors = [
        "button:not([disabled])",
        "input:not([disabled])",
        "textarea:not([disabled])",
        "select:not([disabled])",
        "a[href]",
        '[tabindex]:not([tabindex="-1"])',
        '[contenteditable="true"]',
      ].join(", ");

      return Array.from(
        container.querySelectorAll(focusableSelectors)
      ) as HTMLElement[];
    },
    []
  );

  const focusFirst = useCallback(() => {
    if (containerRef.current) {
      const firstFocusable = getFocusableElements(containerRef.current)[0];
      firstFocusable?.focus();
    }
  }, [getFocusableElements]);

  const focusLast = useCallback(() => {
    if (containerRef.current) {
      const focusableElements = getFocusableElements(containerRef.current);
      const lastFocusable = focusableElements[focusableElements.length - 1];
      lastFocusable?.focus();
    }
  }, [getFocusableElements]);

  return {
    containerRef,
    focusFirst,
    focusLast,
    getFocusableElements: () =>
      containerRef.current ? getFocusableElements(containerRef.current) : [],
  };
};

export default useFocusManagement;
