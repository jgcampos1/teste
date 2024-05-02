import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "~/main/core/store/types";

const authSliceSelector = (state: RootState) => state.auth;

export const authState = createSelector(authSliceSelector, (state) => state);
