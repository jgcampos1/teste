import { makeApiUrl } from "~/application/shared/hooks/make-api-url";

export const AUTH_API_ROUTES = {
  LOGIN: makeApiUrl("authenticate"),
};
