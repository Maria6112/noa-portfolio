import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locals/en/translation.json";
import he from "./locals/he/translation.json";

const savedLang = localStorage.getItem("lang") || "he";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    he: { translation: he },
  },
  lng: savedLang,
  fallbackLng: "he",
  interpolation: { escapeValue: false },
});

export default i18n;
