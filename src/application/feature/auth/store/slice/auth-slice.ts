import { SliceCaseReducers } from "@reduxjs/toolkit";

import { setTokenReducer } from "../actions/set-token";
import {
  authSliceName,
  AuthSliceState,
  SET_TOKEN_INITIAL_STATE,
  SET_TOKEN,
} from "../types";
import { createHydratedSlice } from "~/main/core/store/adapters/create-hydrated-slice";

export const authSlice = createHydratedSlice<
  AuthSliceState,
  SliceCaseReducers<AuthSliceState>,
  typeof authSliceName
>({
  name: authSliceName,
  initialState: { ...SET_TOKEN_INITIAL_STATE },
  reducers: {
    [SET_TOKEN]: setTokenReducer,
  },
});
