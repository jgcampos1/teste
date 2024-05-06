import { apiSlice } from "~/main/core/store/api-slice";
import {
  getContractByUserService,
  GetContractByUser,
} from "../service/get-contract-by-user";
import { GetContract, getContractService } from "../service/get-contract";

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
    getContract: builder.query<GetContract.Response, GetContract.Params>({
      query: (params) => ({
        service: getContractService,
        params,
      }),
    }),
  }),
  overrideExisting: false,
});
