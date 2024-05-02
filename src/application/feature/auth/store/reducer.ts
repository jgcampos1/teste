import { createReducer } from "@reduxjs/toolkit";

import {
  authStateCleared,
  authStateClearedReducer,
} from "./actions/auth-state-cleared";
import { setToken, setTokenReducer } from "./actions/set-token";
import { AUTH_REDUCER_INITIAL_STATE } from "./types";

export const authReducer = createReducer(
  AUTH_REDUCER_INITIAL_STATE,
  (builder) => {
    builder.addCase(authStateCleared, authStateClearedReducer);
    builder.addCase(setToken, setTokenReducer);

    // builder.addMatcher(
    //   authApi.endpoints.tokenLogout.matchFulfilled,
    //   (state) => {
    //     state = null;
    //     return state;
    //   }
    // );
  }
);
