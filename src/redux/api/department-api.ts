import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CreateDepartmtnBody, UpdateDepartmentBody } from "../../types";
import { API_ENDPOINTS } from "../../utils/api-endpoints";
import { RootState } from "../store";

// Define a service using a base URL and expected endpoints
export const departmentApi = createApi({
  reducerPath: "departmentApi",
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
  tagTypes: ["Department"],

  endpoints: (builder) => ({
    getAllDepartment: builder.query({
      query: () => API_ENDPOINTS.DEPARTMENTS,
      providesTags: ["Department"],
    }),

    getSingleDepartment: builder.query({
      query: (id) => `${API_ENDPOINTS.DEPARTMENTS}/${id}`,
      providesTags: ["Department"],
    }),

    createNewDepartment: builder.mutation({
      query: (body: CreateDepartmtnBody) => {
        return {
          url: API_ENDPOINTS.DEPARTMENTS,
          method: "post",
          body,
        };
      },
      invalidatesTags: ["Department"],
    }),

    updateDepartment: builder.mutation({
      query: (param: UpdateDepartmentBody) => {
        return {
          url: `${API_ENDPOINTS.DEPARTMENTS}/${param.id}`,
          method: "put",
          body: param.body,
        };
      },
      invalidatesTags: ["Department"],
    }),

    deleteDepartment: builder.mutation({
      query: (id) => ({
        url: `${API_ENDPOINTS.DEPARTMENTS}/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Department"],
    }),
  }),
});

export const {
  useCreateNewDepartmentMutation,
  useGetAllDepartmentQuery,
  useDeleteDepartmentMutation,
  useUpdateDepartmentMutation,
  useGetSingleDepartmentQuery,
} = departmentApi;
