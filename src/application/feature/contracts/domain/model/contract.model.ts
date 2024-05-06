export interface CompanyModel {
  id?: number;
  uuid?: string;
  name?: string;
  updatedAt?: string;
  createdAt?: string;
  contracts?: ContractModel[] | null;
  paymentEnabled?: boolean;
}

export type ContractModel = {
  id: number;
  uuid?: string;
  name?: string;
  status?: string | null;
  createdAt?: string;
  lastModifiedBy?: string;
  updatedAt?: string;
  clientToken?: string | null;
  secretToken?: string | null;
  company?: CompanyModel | null;
};
