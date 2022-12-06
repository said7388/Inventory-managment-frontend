import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CreateProductBody } from "../../types";
import { API_ENDPOINTS } from "../../utils/api-endpoints";
import { RootState } from "../store";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
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
  tagTypes: ["Products"],

  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: () => `${API_ENDPOINTS.PRODUCTS}?populate=%2A`,
      providesTags: ["Products"],
    }),

    createNewProduct: builder.mutation({
      query: (body: CreateProductBody) => {
        return {
          url: API_ENDPOINTS.PRODUCTS,
          method: "post",
          body,
        };
      },
      invalidatesTags: ["Products"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `${API_ENDPOINTS.PRODUCTS}/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useDeleteProductMutation,
  useCreateNewProductMutation,
} = productApi;
