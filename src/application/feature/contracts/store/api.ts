import { apiSlice } from "~/main/core/store/api-slice";
import {
  getContractByUserService,
  GetContractByUser,
} from "../service/get-contract-by-user";

export const contractApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getContractByUser: builder.mutation<
      GetContractByUser.Response,
      GetContractByUser.Params
    >({
      query: (params) => ({
        service: getContractByUserService,
        params,
      }),
    }),
  }),
  overrideExisting: false,
});
