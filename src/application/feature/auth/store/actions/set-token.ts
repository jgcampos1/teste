import { createAction } from "@reduxjs/toolkit";

import { AuthSliceState, AUTH_SLICE_ACTIONS } from "../types";
import {
  ActionMap,
  ReducerMap,
} from "~/main/core/store/adapters/action-reducer-map";
import { TokenModel } from "../../domain/models/toke-model";

export const setToken: ActionMap<TokenModel> = createAction(
  AUTH_SLICE_ACTIONS.SET_TOKEN
);

export const setTokenReducer: ReducerMap<AuthSliceState, TokenModel> = (
  state,
  { payload }
) => {
  state = payload;
  return state;
};
