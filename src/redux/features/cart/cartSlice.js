import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
  name: 'cart',

  initialState: {
    counter: 1
  },

  reducers: {
    
    handleIncrease: (state) => {},

    handleDecrease: (state) => {},
  }
});