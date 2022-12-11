import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CreateCategoryBody, UpdateCategoryBody } from "../../types";
import { API_ENDPOINTS } from "../../utils/api-endpoints";
import { RootState } from "../store";

// Define a service using a base URL and expected endpoints
export const categoryApi = createApi({
  reducerPath: "categoryApi",
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
  tagTypes: ["Category"],
  endpoints: (builder) => ({
    getAllCategory: builder.query({
      query: () => API_ENDPOINTS.CATEGORY,
      providesTags: ["Category"],
    }),

    getSingleCategory: builder.query({
      query: (id) => `${API_ENDPOINTS.CATEGORY}/${id}`,
      providesTags: ["Category"],
    }),

    createNewCategory: builder.mutation({
      query: (body: CreateCategoryBody) => {
        return {
          url: API_ENDPOINTS.CATEGORY,
          method: "post",
          body,
        };
      },
      invalidatesTags: ["Category"],
    }),

    updateCategory: builder.mutation({
      query: (param: UpdateCategoryBody) => {
        return {
          url: `${API_ENDPOINTS.CATEGORY}/${param.id}`,
          method: "put",
          body: param.body,
        };
      },
      invalidatesTags: ["Category"],
    }),

    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `${API_ENDPOINTS.CATEGORY}/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useGetAllCategoryQuery,
  useCreateNewCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
  useGetSingleCategoryQuery,
} = categoryApi;
