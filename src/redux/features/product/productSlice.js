import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [
      {
        id: 1,
        image: '/burger.webp',
        name: 'Burger',
        price: 300
      },
      {
        id: 2,
        image: '/fried-chicken.webp',
        name: 'Fried Chicken',
        price: 250
      },
      {
        id: 3,
        image: '/fries.png',
        name: 'Fries',
        price: 60
      },
      {
        id: 4,
        image: '/turon.jpg',
        name: 'Turon',
        price: 15
      }
    ]
  },
  reducers: {}
});

export default productSlice;