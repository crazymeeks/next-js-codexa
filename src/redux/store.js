import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./features/cart/cartSlice";
import productSlice from "./features/product/productSlice";
import postSlice from "./features/posts/postSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    product: productSlice.reducer,
    post: postSlice.reducer,
  }
});