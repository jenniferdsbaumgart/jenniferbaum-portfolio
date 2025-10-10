"use client";
import React from "react";

interface FocusIndicatorProps {
  children: React.ReactNode;
  className?: string;
  focusClassName?: string;
}

const FocusIndicator = ({
  children,
  className = "",
  focusClassName = "focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2",
}: FocusIndicatorProps): React.ReactElement => {
  return <div className={`${className} ${focusClassName}`}>{children}</div>;
};

export default FocusIndicator;
