"use client";
import React, { useEffect, useRef } from "react";

interface ScreenReaderAnnouncementProps {
  message: string;
  priority?: "polite" | "assertive";
  clearAfter?: number;
}

const ScreenReaderAnnouncement = ({
  message,
  priority = "polite",
  clearAfter = 5000,
}: ScreenReaderAnnouncementProps): React.ReactElement => {
  const announcementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (message && announcementRef.current) {
      // Clear any existing content first
      announcementRef.current.textContent = "";

      // Use a small delay to ensure screen readers pick up the change
      const timer = setTimeout(() => {
        if (announcementRef.current) {
          announcementRef.current.textContent = message;
        }
      }, 100);

      // Clear the message after specified time
      const clearTimer = setTimeout(() => {
        if (announcementRef.current) {
          announcementRef.current.textContent = "";
        }
      }, clearAfter);

      return () => {
        clearTimeout(timer);
        clearTimeout(clearTimer);
      };
    }
  }, [message, clearAfter]);

  return (
    <div
      ref={announcementRef}
      aria-live={priority}
      aria-atomic="true"
      className="sr-only"
      role="status"
    />
  );
};

export default ScreenReaderAnnouncement;
