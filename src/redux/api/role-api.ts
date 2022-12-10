import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ENDPOINTS } from "../../utils/api-endpoints";
import { RootState } from "../store";

// Define a service using a base URL and expected endpoints
export const roleApi = createApi({
  reducerPath: "roleApi",
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
  tagTypes: ["Role"],
  endpoints: (builder) => ({
    getAllRole: builder.query({
      query: () => API_ENDPOINTS.ROLE,
      providesTags: ["Role"],
    }),

    // getSingleCategory: builder.query({
    //   query: (id) =>
    //     `${API_ENDPOINTS.CATEGORY}/${id}?populate[products][populate]=%2A`,
    //   providesTags: ["Role"],
    // }),

    // createNewCategory: builder.mutation({
    //   query: (body: CreateCategoryBody) => {
    //     return {
    //       url: API_ENDPOINTS.CATEGORY,
    //       method: "post",
    //       body,
    //     };
    //   },
    //   invalidatesTags: ["Role"],
    // }),

    // updateCategory: builder.mutation({
    //   query: (param: UpdateCategoryBody) => {
    //     return {
    //       url: `${API_ENDPOINTS.CATEGORY}/${param.id}`,
    //       method: "put",
    //       body: param.body,
    //     };
    //   },
    //   invalidatesTags: ["Role"],
    // }),

    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `${API_ENDPOINTS.CATEGORY}/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Role"],
    }),
  }),
});

export const { useDeleteCategoryMutation, useGetAllRoleQuery } = roleApi;
