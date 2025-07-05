import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
  name: 'cart',

  initialState: {
    items: [
      // {
      //   id: null,
      //   image: null,
      //   name: null,
      //   quantity: 0,
      //   price: 0
      // }
    ],

    grand_total: 0,
    overall_quantity: 0
  },

  reducers: {
    addToCart: (state) => {
      
    }
  }
});