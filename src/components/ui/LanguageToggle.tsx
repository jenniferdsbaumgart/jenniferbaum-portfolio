import type { ReactNode } from "react";
import React, { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import type { LanguageContextValue } from "@/types";

interface LanguageToggleProps {
  children: ReactNode;
}

export default function LanguageToggle({
  children,
}: LanguageToggleProps): React.ReactElement {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("LanguageToggle must be used within a LanguageProvider");
  }

  const { language, toggleLanguage }: LanguageContextValue = context;

  return (
    <div>
      <button
        role="switch"
        aria-checked={language === "en"}
        onClick={toggleLanguage}
        className={`s:right-10 fixed right-20 top-10 z-40 inline-flex h-8 w-8 items-center rounded-full border-2 border-violet-400 shadow-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 ${language === "en" ? "bg-violet-800" : "bg-gray-400"} `}
        style={{ minWidth: 74 }}
      >
        {/* Sliding circle */}
        <span
          className={`absolute left-1 top-0 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-gray-300 shadow-md transition-transform duration-300 ${language === "en" ? "translate-x-10" : "-translate-x-1"} `}
        >
          {language === "en" ? (
            <span role="img" aria-label="English" className="text-md">
              🇬🇧
            </span>
          ) : (
            <span role="img" aria-label="Portuguese" className="text-md">
              🇧🇷
            </span>
          )}
        </span>
        {/* Labels */}
        <span
          className={`pointer-events-none absolute left-2 text-xs font-bold ${language === "en" ? "text-gray-200" : "text-gray-700"}`}
        >
          EN
        </span>
        <span
          className={`pointer-events-none absolute right-2 text-xs font-bold ${language === "en" ? "text-gray-200" : "text-violet-700"}`}
        >
          PT
        </span>
      </button>
      <div>{children}</div>
    </div>
  );
}
