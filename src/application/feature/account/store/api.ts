import { apiSlice } from "~/main/core/store/api-slice";
import { GetAccount, getAccountService } from "../service/get-account";

export const accountApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAccount: builder.mutation<GetAccount.Response, GetAccount.Params>({
      query: (params) => ({
        service: getAccountService,
        params,
      }),
    }),
  }),
  overrideExisting: false,
});
