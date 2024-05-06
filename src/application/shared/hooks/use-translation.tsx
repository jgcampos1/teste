import { useTranslation as i18NextUseTranslation } from "react-i18next";

import { AvailableLanguages, Translation } from "../types/translation";
import { useCallback, useEffect } from "react";
import { cacheStorage } from "~/main/cache";
import { STORAGE_TOKENS } from "~/main/core/domain/entities/storage-tokens";

export const useTranslation = (namespace?: string | string[]): Translation => {
  const {
    t,
    i18n: { language, changeLanguage },
  } = i18NextUseTranslation(namespace);

  const updateLanguage = useCallback(
    (newLanguage: AvailableLanguages): void => {
      changeLanguage(newLanguage);
      cacheStorage.set(STORAGE_TOKENS.LANGUAGE, newLanguage);
    },
    [changeLanguage]
  );

  useEffect(() => {
    const storedValue = cacheStorage.get(STORAGE_TOKENS.LANGUAGE);
    if (storedValue) {
      updateLanguage(storedValue as AvailableLanguages);
    }
  }, [updateLanguage]);

  return {
    translate: t,
    language,
    updateLanguage,
  };
};
