import { makeApiUrl } from "~/application/shared/hooks/make-api-url";

export const CONFIG_API_ROUTES = {
  GET_CONFIG_BY_CONTRACT: makeApiUrl("configs/contracts/:id"),
};
