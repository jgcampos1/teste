import { ServiceCommand } from "../../domain/command/service-command";
import { error, success } from "../../domain/either/either";
import { UnexpectedError } from "../../domain/exceptions/unexpected-error";
import {
  HttpError,
  HttpResponse,
  HttpStatusCode,
} from "../protocols/http-client";

export class RequestResponse<R> {
  private constructor(private readonly _response: R) {
    Object.freeze(this);
  }

  public static handle<R>(
    httpResponse: HttpResponse
  ): ServiceCommand.Response<RequestResponse<R>> {
    const { statusCode } = httpResponse;
    if (this.isSuccess(statusCode)) {
      const responseBody = httpResponse.body as R;
      return success(new RequestResponse(responseBody));
    }

    return error(new UnexpectedError(httpResponse as HttpError));
  }

  private static isSuccess(statusCode: HttpStatusCode): boolean {
    return statusCode >= 200 && statusCode <= 299;
  }

  get response(): R {
    return this._response;
  }
}
