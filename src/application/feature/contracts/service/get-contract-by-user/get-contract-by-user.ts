import { RequestResponse } from "~/main/core/application/http-response/http-response";
import {
  HttpClient,
  HttpMethod,
} from "~/main/core/application/protocols/http-client";
import { ServiceCommand } from "~/main/core/domain/command/service-command";
import { error, success } from "~/main/core/domain/either/either";
import { AccountModel } from "../../domain/model/account.model";

export class GetContractByUser
  implements
    ServiceCommand<GetContractByUser.Response, GetContractByUser.Params>
{
  constructor(
    private readonly httpClient: HttpClient,
    private readonly url: string
  ) {}

  async execute(): Promise<
    ServiceCommand.Response<GetContractByUser.Response>
  > {
    const httpResponse = await this.httpClient.request({
      method: HttpMethod.GET,
      url: this.url,
    });
    const responseOrError = RequestResponse.handle<AccountModel>(httpResponse);

    if (responseOrError.isError()) {
      return error(responseOrError.value);
    }

    const response = responseOrError.value.response;

    return success(response);
  }
}

export namespace GetContractByUser {
  export type Params = void;
  export type Response = AccountModel;
}
