import { IUser } from "@/interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "user_api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6172cfe5110a740017222e2b.mockapi.io",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], void>({
      query: () => "/elements",
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
