import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './messages/en.json';
import hi from './messages/hi.json';

// Translation resources
const resources = {
  en: { translation: en },
  hi: { translation: hi },
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next) // pass the i18n instance to react-i18next.
    .init({
        resources,
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n;
