import { create } from "zustand";
import { ContractModel } from "../domain/model/contract.model";

interface ContractStore {
  contract: ContractModel | null;
  setContract: (contract?: ContractModel) => void;
}

export const useContractStore = create<ContractStore>((set) => ({
  contract: null,
  setContract: (contract) => set({ contract }),
}));
