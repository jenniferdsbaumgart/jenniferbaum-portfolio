import React, { createContext, useState, ReactNode } from "react";
import { LanguageContextValue, Language, Translation } from "@/types";
import pt from "./../../public/locales/pt/translation.json";
import en from "./../../public/locales/en/translation.json";

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps): React.ReactElement {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = (): void => {
    setLanguage((prev: Language) => {
      const newLanguage: Language = prev === "en" ? "pt" : "en";
      return newLanguage;
    });
  };

  const translations: Translation = language === "en" ? en as Translation : pt as Translation;

  const contextValue: LanguageContextValue = {
    language,
    toggleLanguage,
    translations,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}