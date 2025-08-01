import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./thunk";

const postSlice = createSlice({
  name: 'post',
  initialState: {
    data: [
      // {
      //   userId: null,
      //   id: null,
      //   title: null,
      //   body: null,
      // }
    ]
  },
  reducers: {},
  extraReducers: (builder) => {

    builder
    .addCase(fetchPosts.pending, (state, action) =>{
      console.log("action: ", action);
    })
    .addCase(fetchPosts.fulfilled, (state, action) =>{
      state.data = action.payload;
    })
  },
});

export default postSlice;