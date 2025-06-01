import { createContext, useState } from "react";
import pt from "./../../public/locales/pt/translation.json";
import en from "./../../public/locales/en/translation.json";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLanguage = prev === "en" ? "pt" : "en";
      return newLanguage;
    });
  };

  const translations = language === "en" ? en : pt;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}