import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";

import { type AppDispatch as AppDispatchTypes, type RootState } from "./types";
import { apiSlice } from "./api-slice";
import { authReducer } from "~/application/feature/auth/store/reducer";

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<(typeof store)["getState"]>;
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      apiSlice.middleware
    ),
});

setupListeners(store.dispatch);

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatchTypes>();
