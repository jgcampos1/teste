import { makeApiUrl } from "~/application/shared/hooks/make-api-url";

export const CONTRACT_API_ROUTES = {
  GET_CONTRACT: makeApiUrl("contracts/:id"),
  GET_CONTRACTS_BY_USER: makeApiUrl("contracts/actives"),
};
