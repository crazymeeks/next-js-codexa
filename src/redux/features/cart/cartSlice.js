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
      // Find existing item in the cart
      const existingItem = state.items.find(item => item.product_id === action.payload.id);

      // check if may existing item
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
            ...action.payload,
            product_id: action.payload.id,
            quantity: 1,
            id: Math.random(),
          });
      }

      state.overall_quantity += 1;
    },

    deleteCartItem: (state, action) => {
      // Find index of item in the cart to be deleted
      const index = state.items.findIndex(item => item.product_id === action.payload.product_id);
      // index of found item or -1
      // remove the item based on index
      // using .splice()
      if (index !== -1) {
        const toRemoveItem = state.items[index];
        console.log("toRemoveItem: ", JSON.stringify(toRemoveItem));
        state.overall_quantity -= toRemoveItem.quantity;

        // remove the item from the cart
        state.items.splice(index, 1);
      }

    },
  }
});