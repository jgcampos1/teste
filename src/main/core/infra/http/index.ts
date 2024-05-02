import { HttpClient } from "../../application/protocols/http-client";
import { AuthorizedHttpClient } from "./authorized-http.client-adapter/authorized-http-client";

export const httpAuthorizedClient: HttpClient = new AuthorizedHttpClient();
