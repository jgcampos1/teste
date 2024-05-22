import { apiSlice } from "~/main/core/store/api-slice";
import {
  GetConfigByContract,
  getConfigByContractService,
} from "../service/get-contract-config";

export const configApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConfigByContract: builder.query<
      GetConfigByContract.Response,
      GetConfigByContract.Params
    >({
      query: (params) => ({
        service: getConfigByContractService,
        params,
      }),
    }),
  }),
  overrideExisting: false,
});
