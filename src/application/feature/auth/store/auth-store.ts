import { create } from "zustand";
import { AccountModel } from "../../account/domain/model/account.model";

type AuthStore = {
  authUser: AccountModel | null;
  setAuth: (user: AccountModel) => void;
  clear: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  authUser: null,
  setAuth: (user) => set({ authUser: user }),
  clear: () => set({ authUser: null }),
}));
