import { httpAuthorizedClient } from "~/main/core/infra/http";
import { GetConfigByContract } from "./get-contract-config";
import { ServiceCommand } from "~/main/core/domain/command/service-command";
import { CONFIG_API_ROUTES } from "../../api/routes";

export const getConfigByContractService: ServiceCommand<GetConfigByContract.Response> =
  new GetConfigByContract(
    httpAuthorizedClient,
    CONFIG_API_ROUTES.GET_CONFIG_BY_CONTRACT
  );

export type { GetConfigByContract };
