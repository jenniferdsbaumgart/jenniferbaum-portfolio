import { LanguageContext } from "@/contexts/LanguageContext";
import type { LanguageContextValue } from "@/types";
import type { ReactNode } from "react";
import React, { useContext } from "react";

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
        aria-label={`Switch to ${language === "en" ? "Portuguese" : "English"} language`}
        aria-describedby="language-toggle-description"
        onClick={toggleLanguage}
        className={`s:right-10 border-violet-400 focus:ring-violet-500 fixed right-20 top-10 z-40 inline-flex h-8 w-8 items-center rounded-full border-2 shadow-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${language === "en" ? "bg-violet-800" : "bg-gray-400"} `}
        style={{ minWidth: 74 }}
      >
        {/* Sliding circle */}
        <span
          className={`bg-gray-300 absolute left-1 top-0 z-10 flex h-7 w-7 items-center justify-center rounded-full shadow-md transition-transform duration-300 ${language === "en" ? "translate-x-10" : "-translate-x-1"} `}
          aria-hidden="true"
        >
          {language === "en" ? (
            <span role="img" aria-label="English flag" className="text-md">
              🇬🇧
            </span>
          ) : (
            <span role="img" aria-label="Portuguese flag" className="text-md">
              🇧🇷
            </span>
          )}
        </span>
        {/* Labels */}
        <span
          className={`pointer-events-none absolute left-2 text-xs font-bold ${language === "en" ? "text-gray-200" : "text-gray-700"}`}
          aria-hidden="true"
        >
          EN
        </span>
        <span
          className={`pointer-events-none absolute right-2 text-xs font-bold ${language === "en" ? "text-gray-200" : "text-violet-700"}`}
          aria-hidden="true"
        >
          PT
        </span>
        <span id="language-toggle-description" className="sr-only">
          Currently displaying content in{" "}
          {language === "en" ? "English" : "Portuguese"}. Click to switch
          languages.
        </span>
      </button>
      <div>{children}</div>
    </div>
  );
}
