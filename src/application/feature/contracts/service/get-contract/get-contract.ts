import { RequestResponse } from "~/main/core/application/http-response/http-response";
import {
  HttpClient,
  HttpMethod,
} from "~/main/core/application/protocols/http-client";
import { ServiceCommand } from "~/main/core/domain/command/service-command";
import { error, success } from "~/main/core/domain/either/either";
import { ContractModel } from "../../domain/model/contract.model";

export class GetContract
  implements ServiceCommand<GetContract.Response, GetContract.Params>
{
  constructor(
    private readonly httpClient: HttpClient,
    private readonly url: string
  ) {}

  async execute({
    id,
  }: GetContract.Params): Promise<
    ServiceCommand.Response<GetContract.Response>
  > {
    const url = this.url.replace(":id", id.toString());
    const httpResponse = await this.httpClient.request({
      method: HttpMethod.GET,
      url: url,
    });
    const responseOrError =
      RequestResponse.handle<GetContract.Response>(httpResponse);

    if (responseOrError.isError()) {
      return error(responseOrError.value);
    }

    const response = responseOrError.value.response;

    return success(response);
  }
}

export namespace GetContract {
  export type Params = { id: number };
  export type Response = ContractModel;
}
