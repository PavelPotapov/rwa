import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { ru, en, ar, hi } from "@config";

i18next.use(initReactI18next).init({
  debug: true,
  fallbackLng: "ru",
  resources: {
    ru,
    en,
    ar,
    hi,
  },
});
