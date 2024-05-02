import { RequestResponse } from "../application/http-response/http-response";
import { HttpClient, HttpMethod } from "../application/protocols/http-client";
import { ServiceCommand } from "../domain/command/service-command";
import { error, success } from "../domain/either/either";

export class BaseService<REQ, RES> implements ServiceCommand<RES, REQ> {
  constructor(
    private readonly url: string,
    private readonly httpMethod: HttpMethod,
    private readonly httpClient: HttpClient
  ) {}

  async execute(params: REQ): Promise<ServiceCommand.Response<RES>> {
    const httpResponse = await this.httpClient.request({
      method: this.httpMethod,
      url: this.url,
      body: params,
    });

    const responseOrError = RequestResponse.handle(httpResponse);

    if (responseOrError.isError()) {
      return error(responseOrError.value);
    }

    const response = responseOrError.value.response;

    return success(response as RES);
  }
}
