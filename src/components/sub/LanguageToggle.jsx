import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";

export default function LanguageToggle({ children }) {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div>
      <button
        role="switch"
        aria-checked={language === "en"}
        onClick={toggleLanguage}
        className={`
          fixed right-20 s:right-10 top-10 z-50
          inline-flex items-center h-8 w-16
          rounded-full shadow-lg border-2 border-violet-200
          transition-colors duration-300
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500
          ${language === "en" ? "bg-violet-600" : "bg-gray-300"}
        `}
        style={{ minWidth: 74 }}
      >
        {/* Círculo deslizante */}
        <span
          className={`
            absolute top-0 left-1
            w-7 h-7
            bg-white rounded-full shadow-md
            transition-transform duration-300
            flex items-center justify-center z-10
            ${language === "en" ? "translate-x-10" : "translate-x-0"}
          `}
        >
          {language === "en" ? (
            <span role="img" aria-label="English" className="text-xs">🇬🇧</span>
          ) : (
            <span role="img" aria-label="Português" className="text-xs">🇧🇷</span>
          )}
        </span>
        {/* Labels */}
        <span className={`absolute left-2 text-xs font-bold pointer-events-none ${language === "en" ? "text-white" : "text-gray-700"}`}>EN</span>
        <span className={`absolute right-2 text-xs font-bold pointer-events-none ${language === "en" ? "text-gray-200" : "text-violet-700"}`}>PT</span>
      </button>
      <div>{children}</div>
    </div>
  );
}