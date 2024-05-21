import { HttpClient } from "../../application/protocols/http-client";
import { AuthorizedHttpClient } from "./authorized-http.client-adapter/authorized-http-client";
import { FetchHttpClientAdapter } from "./fetch-http-client-adapter";

export const httpAuthorizedClient: HttpClient = new AuthorizedHttpClient();

export const fetchHttpClientAdapter: HttpClient = new FetchHttpClientAdapter();
