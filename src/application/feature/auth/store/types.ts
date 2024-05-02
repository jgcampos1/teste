import { cacheStorage } from "~/main/cache";
import { AUTH_STORAGE_TOKENS } from "../domain/entities/auth-tokens";
import { TokenModel } from "../domain/models/toke-model";

export const authSliceName = "authSlice" as const;
export const SET_TOKEN = "setToken";

export const AUTH_REDUCER_ACTIONS = {
  AUTH_STATE_CLEARED: `@auth/authStateCleared`,
  USER_AUTHENTICATED: `@auth/userAuthenticated`,
  SET_TOKEN: `@auth/setToken`,
} as const;

export const AUTH_REDUCER_INITIAL_STATE: TokenModel = {};

export const AUTH_SLICE_ACTIONS = {
  SET_TOKEN: `${authSliceName}/${SET_TOKEN}`,
} as const;

export type AuthSliceState = TokenModel;

const cacheLocalStorage = cacheStorage;
const tokenKey = AUTH_STORAGE_TOKENS.AUTH;
const tokenStorage = cacheLocalStorage.get<string>(tokenKey);
export const SET_TOKEN_INITIAL_STATE: TokenModel = {
  accessToken: tokenStorage,
};
