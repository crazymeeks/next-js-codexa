import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
  name: 'cart',

  initialState: {
    counter: 0
  },

  reducers: {
    
    handleIncrease: (state) => {
      state.counter++;
    },

    handleDecrease: (state) => {},
  }
});