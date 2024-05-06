import { useForm } from "react-hook-form";
import { LANGUAGES_ITEMS } from "./constants/languages-items";
import { useTranslation } from "../../hooks/use-translation";
import { Select } from "../select";
import { useEffect } from "react";
import { AvailableLanguages } from "../../types/translation";

export const SelectLanguage = () => {
  const {
    translate,
    updateLanguage,
    language: defaultLanguage,
  } = useTranslation("common");
  const { control, watch } = useForm({
    defaultValues: { language: defaultLanguage },
  });
  const language = watch("language");

  const translateItems = LANGUAGES_ITEMS.map((item) => ({
    ...item,
    label: translate(item.label),
  }));

  useEffect(() => {
    if (language) updateLanguage(language as AvailableLanguages);
  }, [language, updateLanguage]);
  return (
    <div className="flex items-center justify-center">
      <Select
        control={control}
        name={"language"}
        placeholder={translate("translations.selectLanguage")}
        options={translateItems}
        className="w-22"
      />
    </div>
  );
};
