import { useTranslation as i18NextUseTranslation } from "react-i18next";

import { AvailableLanguages, Translation } from "../types/translation";

export const useTranslation = (namespace?: string | string[]): Translation => {
  const {
    t,
    i18n: { language, changeLanguage },
  } = i18NextUseTranslation(namespace);

  const updateLanguage = (newLanguage: AvailableLanguages): void => {
    changeLanguage(newLanguage);
  };

  return {
    translate: t,
    language,
    updateLanguage,
  };
};
