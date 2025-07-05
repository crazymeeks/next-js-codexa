import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./features/cart/cartSlice";
import productSlice from "./features/product/productSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    product: productSlice.reducer
  }
});