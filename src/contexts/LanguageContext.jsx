import { createContext, useState } from "react";
import pt from "./../../public/locales/pt/translation.json";
import en from "./../../public/locales/en/translation.json";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLanguage = prev === "en" ? "pt" : "en";
      console.log("Mudando idioma para:", newLanguage); // Log para depuração
      return newLanguage;
    });
  };

  const translations = language === "en" ? en : pt;
  console.log("Translations carregadas:", translations); // Log para depuração

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}