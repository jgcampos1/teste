import { OptionsModel } from "../../combobox";

export const LANGUAGES_ITEMS: OptionsModel[] = [
  {
    id: "pt-BR",
    label: "translations.pt",
    icon: (
      <img
        className={"h-6 w-6 rounded-full object-cover"}
        src={"/images/icons/locale/flag-pt-br.svg"}
      />
    ),
  },
  {
    label: "translations.en",
    id: "en-us",
    icon: (
      <img
        className={"h-6 w-6 rounded-full object-cover"}
        src={"/images/icons/locale/flag-en.svg"}
      />
    ),
  },
];
