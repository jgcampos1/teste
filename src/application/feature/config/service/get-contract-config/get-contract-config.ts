import { RequestResponse } from "~/main/core/application/http-response/http-response";
import {
  HttpClient,
  HttpMethod,
} from "~/main/core/application/protocols/http-client";
import { ServiceCommand } from "~/main/core/domain/command/service-command";
import { error, success } from "~/main/core/domain/either/either";
import { ConfigModel } from "../../domain/model/config-model";

export class GetConfigByContract
  implements
    ServiceCommand<GetConfigByContract.Response, GetConfigByContract.Params>
{
  constructor(
    private readonly httpClient: HttpClient,
    private readonly url: string
  ) {}

  async execute({
    id,
  }: GetConfigByContract.Params): Promise<
    ServiceCommand.Response<GetConfigByContract.Response>
  > {
    const url = this.url.replace(":id", id.toString());
    const httpResponse = await this.httpClient.request({
      method: HttpMethod.GET,
      url: url,
    });
    const responseOrError =
      RequestResponse.handle<GetConfigByContract.Response>(httpResponse);

    if (responseOrError.isError()) {
      return error(responseOrError.value);
    }

    const response = responseOrError.value.response;

    return success(response);
  }
}

export namespace GetConfigByContract {
  export type Params = { id: number };
  export type Response = ConfigModel;
}
