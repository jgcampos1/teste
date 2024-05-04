import { makeApiUrl } from "~/application/shared/hooks/make-api-url";

export const CONTRACT_API_ROUTES = {
  GET_CONTRACTS_BY_USER: makeApiUrl("account"),
};
