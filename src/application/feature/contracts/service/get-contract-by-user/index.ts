import { httpAuthorizedClient } from "~/main/core/infra/http";
import { GetContractByUser } from "./get-contract-by-user";
import { ServiceCommand } from "~/main/core/domain/command/service-command";
import { CONTRACT_API_ROUTES } from "../../api/routes";

export const getContractByUserService: ServiceCommand<GetContractByUser.Response> =
  new GetContractByUser(
    httpAuthorizedClient,
    CONTRACT_API_ROUTES.GET_CONTRACTS_BY_USER
  );

export type { GetContractByUser };
