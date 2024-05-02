import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryAdapter } from "./adapters/base-query-adapter";
import { TagTypes } from "./tag-types";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: baseQueryAdapter,
  endpoints: () => ({}),
  tagTypes: Object.values(TagTypes) as string[],
});
