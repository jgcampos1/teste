import { TFunction } from "i18next";

export interface Translation {
  translate: TFunction<string | string[], undefined>;
  language: string;
  updateLanguage: (language: AvailableLanguages) => void;
}

export type AvailableLanguages = "en-US" | "pt-BR";
