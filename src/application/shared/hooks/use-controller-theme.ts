import { useEffect, useMemo } from "react";
import { useLazyGetConfigByContractQuery } from "~/application/feature/config/store/hooks";
import { cacheStorage } from "~/main/cache";
import { settingsAdapter } from "../ultils/helpers/setting-adpter";
import { useThemeStore } from "~/application/feature/general/store/theme.store";
import { Layout } from "~/application/feature/config/domain/model/config-model";
import { usePalette } from "./use-pallete";

export const useControllerTheme = () => {
  const [getConfig, { data }] = useLazyGetConfigByContractQuery();
  const { setTheme, theme } = useThemeStore();
  const contractId = cacheStorage.get("@contractId");

  const config = useMemo(() => {
    if (!data) return null;
    console.log({ data });
    return settingsAdapter(data as Record<string, string>);
  }, [data]);

  useEffect(() => setTheme(config?.layout as Layout), [config, setTheme]);

  useEffect(() => {
    if (contractId) {
      getConfig({ id: Number(contractId) });
    }
  }, [contractId, getConfig]);

  usePalette({
    primaryColor: theme?.primary_color as string,
    secondaryColor: theme?.secondary_color as string,
  });
};
