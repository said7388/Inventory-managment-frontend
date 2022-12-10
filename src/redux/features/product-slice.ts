import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductInput } from "../../types/product";

const initialState: {
  productInput: ProductInput;
} = {
  productInput: {
    brand: "",
    category: "",
    department: "",
    details: "",
    name: "",
    product_code: "",
    user: "",
    vendor: "",
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState,

  reducers: {
    setProductInput: (state, action: PayloadAction<ProductInput>) => {
      state.productInput = action.payload;
    },

    defaultProductState: (state) => {
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProductInput, defaultProductState } = productSlice.actions;

export const selectProductInput = (state: { product: { productInput: any } }) =>
  state.product.productInput;

export default productSlice.reducer;
