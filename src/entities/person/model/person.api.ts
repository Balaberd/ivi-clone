import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPerson } from "./person.types";

export const personApi = createApi({
  reducerPath: "api/person",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/person",
  }),
  endpoints: (build) => ({
    getPerson: build.query<IPerson[], number>({
      query: (id: number) => `/${id}`,
    }),
  }),
});

export const { useGetPersonQuery } = personApi;
