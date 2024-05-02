import { apiSlice } from "~/main/core/store/api-slice";
import { EmailLogin, emailLoginService } from "../service/email-login";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    emailLogin: builder.mutation<EmailLogin.Response, EmailLogin.Params>({
      query: (params) => ({
        service: emailLoginService,
        params,
      }),
    }),
  }),
  overrideExisting: false,
});
