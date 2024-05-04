import { httpAuthorizedClient } from "~/main/core/infra/http";
import { GetAccount } from "./get-account.service";
import { ServiceCommand } from "~/main/core/domain/command/service-command";
import { ACCOUNT_API_ROUTES } from "../../api/routes";

export const getAccountService: ServiceCommand<GetAccount.Response> =
  new GetAccount(httpAuthorizedClient, ACCOUNT_API_ROUTES.GET_ACCOUNT);

export type { GetAccount };
