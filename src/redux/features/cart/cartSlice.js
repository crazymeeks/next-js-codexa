import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [
      // {
      //   id: null,
      //   product_id: null,
      //   image: null,
      //   name: null,
      //   quantity: 0,
      //   price: 0
      // },
    ],
    grand_total: 0,
    overall_quantity: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      console.log("action: ", action);
      state.items.push({
        ...action.payload,
        product_id: action.payload.id,
        quantity: 1,
        id: Math.random(),
      });

      state.overall_quantity += 1;
    },

    deleteCartItem: (state, action) => {},
  }
});