import { httpAuthorizedClient } from "~/main/core/infra/http";
import { GetContract } from "./get-contract";
import { ServiceCommand } from "~/main/core/domain/command/service-command";
import { CONTRACT_API_ROUTES } from "../../api/routes";

export const getContractService: ServiceCommand<GetContract.Response> =
  new GetContract(httpAuthorizedClient, CONTRACT_API_ROUTES.GET_CONTRACT);

export type { GetContract };
