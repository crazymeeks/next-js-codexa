import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    addedToCart: false
  },
  reducers: {
    addToCart: (state) => {
      state.addedToCart = true;
    },
  }
});