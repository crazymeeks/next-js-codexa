import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk('posts', async () => {

  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  return response;
});

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
    // fulfilled
    builder.addCase(fetchPosts.fulfilled, (state, action) =>{
      console.log("action: ", action);
    })
  },
});

export default postSlice;