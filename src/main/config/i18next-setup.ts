import { initReactI18next } from "react-i18next";

import i18next, { InitOptions } from "i18next";
import Backend from "i18next-http-backend";

const availableLanguages = ["en-US", "pt-BR"];

const translationOptions: InitOptions = {
  lng: "en",
  load: "currentOnly",
  preload: availableLanguages,
  debug: false,
  supportedLngs: availableLanguages,
  defaultNS: ["common", "exception"],
  ns: ["common", "exception"],
  react: {
    useSuspense: true,
    bindI18n: "languageChanged",
  },
  interpolation: {
    escapeValue: false,
  },
  backend: {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
  },
};

export default i18next
  .use(Backend)
  .use(initReactI18next)
  .init(translationOptions);
