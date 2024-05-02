import { LocalStorageCacheStorage } from "../../cache";
import { FetchHttpClientAdapter } from "../fetch-http-client-adapter";
import {
  HttpClient,
  HttpMethod,
  HttpRequest,
  HttpResponse,
} from "~/main/core/application/protocols/http-client";
import { ServiceCommand } from "~/main/core/domain/command/service-command";
import { RequestResponse } from "~/main/core/application/http-response/http-response";
import { error, success } from "~/main/core/domain/either/either";
import { ROUTES } from "~/main/types/routes-enum";
import { AUTH_STORAGE_TOKENS } from "~/application/feature/auth/domain/entities/auth-tokens";

export class AuthorizedHttpClient implements HttpClient {
  private readonly whiteListUrl = [
    "/account/login",
    "/account/reset-password",
    "/account/confirm-account",
    "/account/send-email-confirmation",
    "/account/request-reset-password",
    "/account/verify-security-token",
    "/account/refresh-token",
    "/account/logout",
  ];

  constructor(
    private readonly url: string = "account/refresh-token",
    private readonly refreshTokenKey: string = AUTH_STORAGE_TOKENS.REFRESH_TOKEN,
    private readonly httpClient: HttpClient = new FetchHttpClientAdapter(),
    private readonly cacheStorage: LocalStorageCacheStorage = new LocalStorageCacheStorage(),
    private readonly tokenKey: string = AUTH_STORAGE_TOKENS.AUTH
  ) {
    this.url = url;
    this.refreshTokenKey = refreshTokenKey;
    this.httpClient = httpClient;
    this.cacheStorage = cacheStorage;
    this.tokenKey = tokenKey;
  }

  async request(data: HttpRequest): Promise<HttpResponse> {
    const token = this.cacheStorage.get<string>(this.tokenKey);

    try {
      if (token) {
        Object.assign(data, {
          headers: Object.assign(data.headers ?? {}, {
            Authorization: `Bearer ${token}`,
          }),
        });
      }
    } catch (_) {
      this.cacheStorage.set(this.refreshTokenKey, null);
      this.cacheStorage.set(this.tokenKey, null);
      window.location.href = ROUTES.LOGIN;
    }

    const httpResponse = await this.httpClient.request(data);

    if (
      [403].includes(httpResponse?.statusCode) &&
      !this.whiteListUrl?.find((url) => data?.url?.includes(url))
    ) {
      const refreshToken = this.cacheStorage.get<string>(this.refreshTokenKey);

      const tokenOrError = await this.getRefreshToken({
        refreshToken,
      });

      if (tokenOrError.isError()) {
        this.cacheStorage.set(this.refreshTokenKey, null);
        this.cacheStorage.set(this.tokenKey, null);
        window.location.href = ROUTES.LOGIN;
        return httpResponse;
      }

      this.cacheStorage.set(this.tokenKey, tokenOrError.value.token);
      return this.request(
        this.addNewTokenToHeaders(tokenOrError.value.token, data)
      );
    }
    return httpResponse;
  }

  async getRefreshToken(
    params: RefreshUserToken.Params
  ): Promise<ServiceCommand.Response<RefreshUserToken.Model>> {
    const httpResponse = await this.httpClient.request({
      method: HttpMethod.POST,
      url: `${this.url}`,
      body: {
        refreshToken: params.refreshToken,
      },
    });
    const responseOrError = RequestResponse.handle<{ accessToken: string }>(
      httpResponse
    );

    if (responseOrError.isError()) {
      return error(responseOrError.value);
    }

    return success({
      token: responseOrError.value.response.accessToken,
      updated: true,
    });
  }

  private addNewTokenToHeaders(
    newAccessToken: string,
    request: HttpRequest
  ): HttpRequest {
    return Object.assign(request, {
      headers: Object.assign(request.headers ?? {}, {
        Authorization: `Bearer ${newAccessToken}`,
      }),
    });
  }
}

export namespace RefreshUserToken {
  export type Model = {
    updated: boolean;
    token: string;
  };

  export type Params = {
    refreshToken?: string;
  };
}
