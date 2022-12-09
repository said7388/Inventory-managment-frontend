import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { authApi } from "../api/auth-api";
import { categoryApi } from "../api/category-api";
import { departmentApi } from "../api/department-api";
import { productApi } from "../api/product-api";
import authReducer from "../features/auth-slice";
import productReducer from "../features/product-slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    [authApi.reducerPath]: authApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [departmentApi.reducerPath]: departmentApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      categoryApi.middleware,
      departmentApi.middleware,
      productApi.middleware,
    ]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
