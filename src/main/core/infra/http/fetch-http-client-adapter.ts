import {
  HttpRequest,
  HttpClient,
  HttpError,
  HttpResponse,
} from "../../application/protocols/http-client";

export class FetchHttpClientAdapter implements HttpClient {
  async request({
    method,
    url,
    body,
    headers,
    queryParams,
  }: HttpRequest): Promise<HttpResponse> {
    try {
      const requestHeaders: HeadersInit = new Headers({
        ...(headers ?? {}),
        "Content-Type": "application/json", // Assuming JSON data
      });

      const fetchOptions: RequestInit = {
        method,
        headers: requestHeaders,
        body: JSON.stringify(body), // Convert body to JSON string
      };

      const queryString = new URLSearchParams(queryParams).toString();
      const apiUrl = `${url}${queryString ? `?${queryString}` : ""}`;

      const fetchResponse = await fetch(apiUrl, fetchOptions);

      const responseBody = await fetchResponse.json();

      return {
        statusCode: fetchResponse.status,
        body: responseBody,
      };
    } catch (error) {
      return error as HttpError;
    }
  }
}
