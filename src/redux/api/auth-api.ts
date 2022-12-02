import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CreateUserBody, UserSignInBody } from "../../types";
import { API_ENDPOINTS } from "../../utils/api-endpoints";
import { RootState } from "../store";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers, { getState, endpoint }) => {
      const user = (getState() as RootState).auth.token;
      if (user && endpoint !== "refresh") {
        headers.set("Authorization", `Bearer ${user}`);
      }
      return headers;
    },
    credentials: "include",
  }),

  endpoints: (builder) => ({
    signinUser: builder.mutation({
      query: (body: UserSignInBody) => {
        return {
          url: API_ENDPOINTS.LOGIN,
          method: "post",
          body,
        };
      },
    }),

    createUser: builder.mutation({
      query: (body: CreateUserBody) => {
        return {
          url: API_ENDPOINTS.REGISTRATION,
          method: "post",
          body,
        };
      },
    }),
  }),
});

export const { useSigninUserMutation, useCreateUserMutation } = authApi;
