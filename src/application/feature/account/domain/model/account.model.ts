import { ContractModel } from "~/application/feature/contracts/domain/model/contract.model";

export type AccountModel = {
  id: number;
  name: string;
  email?: string | null;
  documentType?: string | null;
  registration?: string | null;
  admissionDate?: string | null;
  createdAt?: string;
  updatedAt?: string;
  passwordDigest?: string | null;
  active?: boolean | null;
  cellPhone?: string | null;
  rpushFeedbackId?: number | null;
  hint?: string | null;
  execCommands?: boolean | null;
  blocked?: boolean | null;
  employer?: string | null;
  pushConfiguration?: number | null;
  distanceTraveled?: number;
  displayLanguage?: string | null;
  featureFlags?: string | null;
  blockedReason?: string | null;
  blockedBy?: number | null;
  blockedAt?: string | null;
  deletedReason?: string | null;
  deletedAt?: string | null;
  deletedBy?: number | null;
  profileImage?: string;
  addressZipCode?: string;
  addressStreet?: string;
  addressNumber?: string;
  addressCity?: string;
  addressState?: string;
  addressComplement?: string;
  addressPublicPlace?: string;
  cnhExpirationDate?: string;
  cnhSituation?: string;
  registerSituation?: string;
  contracts?: ContractModel[];
};
