import { create } from "zustand";
import { Layout } from "../../config/domain/model/config-model";

interface ThemeStore {
  theme: Layout | null;
  setTheme: (theme?: Layout) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: null,
  setTheme: (theme) => set({ theme }),
}));
