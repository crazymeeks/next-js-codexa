import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk('posts', async () => {

  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  return response.data;
});


export const createPost = createAsyncThunk('/posts/create', async(data) => {
  const response = await axios.post(`https://jsonplaceholder.typicode.com/posts`, data);
  return response.data;
});

export const updatePost = createAsyncThunk('/posts/update', async(id, data) => {
  const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, data);
  return response.data;
});

