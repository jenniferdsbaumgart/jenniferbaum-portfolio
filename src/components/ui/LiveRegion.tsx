"use client";
import React, { useEffect, useRef } from "react";

interface LiveRegionProps {
  message: string;
  level?: "polite" | "assertive";
  clearAfter?: number;
}

const LiveRegion = ({
  message,
  level = "polite",
  clearAfter = 3000,
}: LiveRegionProps): React.ReactElement => {
  const regionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (message && regionRef.current) {
      regionRef.current.textContent = message;

      if (clearAfter > 0) {
        const timer = setTimeout(() => {
          if (regionRef.current) {
            regionRef.current.textContent = "";
          }
        }, clearAfter);

        return () => clearTimeout(timer);
      }
    }
  }, [message, clearAfter]);

  return (
    <div
      ref={regionRef}
      aria-live={level}
      aria-atomic="true"
      className="sr-only"
      role="status"
    />
  );
};

export default LiveRegion;
