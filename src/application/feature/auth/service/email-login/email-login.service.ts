import { RequestResponse } from "~/main/core/application/http-response/http-response";
import {
  HttpClient,
  HttpMethod,
} from "~/main/core/application/protocols/http-client";
import { ServiceCommand } from "~/main/core/domain/command/service-command";
import { error, success } from "~/main/core/domain/either/either";
import { CacheStorage } from "~/main/core/application/protocols/cache-storage";
import { LoginForm } from "../../domain/models/login-models";
import { TokenModel } from "../../domain/models/toke-model";

export class EmailLogin
  implements ServiceCommand<EmailLogin.Response, EmailLogin.Params>
{
  constructor(
    private readonly httpClient: HttpClient,
    private readonly cacheStorage: CacheStorage,
    private readonly tokenKey: string,
    // private readonly refreshTokenKey: string,
    private readonly url: string
  ) {}

  async execute(
    params: EmailLogin.Params
  ): Promise<ServiceCommand.Response<EmailLogin.Response>> {
    const httpResponse = await this.httpClient.request({
      method: HttpMethod.POST,
      url: this.url,
      body: { ...params },
    });
    const responseOrError = RequestResponse.handle<{
      id_token: string;
    }>(httpResponse);

    if (responseOrError.isError()) {
      return error(responseOrError.value);
    }

    const response = responseOrError.value.response;

    const { id_token } = response;

    this.cacheStorage.set(this.tokenKey, id_token);

    return success(response);
  }
}

export namespace EmailLogin {
  export type Params = LoginForm;
  export type Response = TokenModel;
}
