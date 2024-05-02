export interface HttpClient<R = unknown, T = unknown> {
  request: (params: HttpRequest<T>) => Promise<HttpResponse<R>>;
}

export type HttpRequest<T = unknown> = {
  body?: T;
  headers?: Record<string, string>;
  queryParams?: Record<string, string>;
  method: HttpMethod;
  url: string;
};

export type HttpResponse<T = unknown> = HttpSuccess<T> | HttpError;

export type HttpSuccess<T = unknown> = {
  body: T;
  error?: never;
  message?: never;
  statusCode: HttpStatusCode;
};

export type HttpError = {
  body?: never | HttpErrorBody;
  statusCode: number;
  message: string;
  error: string;
};
export type HttpErrorBody = {
  error: string;
  message: string;
  statusCode: number;
};

export enum HttpMethod {
  DELETE = "DELETE",
  GET = "GET",
  PATCH = "PATCH",
  POST = "POST",
  PUT = "PUT",
}

export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  UNPROCESSABLE_ENTITY = 422,
  SERVER_ERROR = 500,
}
