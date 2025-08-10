'use client';

import { useState, useEffect, useRef } from "react"; 
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import PostForm from "./PostForm";
import PostTable from "./PostTable";
import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";
// import { fetchPosts, createPost, updatePost} from "@/redux/features/posts/thunk";

const formSchema = z.object({
  // userId: z.number().min(1, "This field is required"),
  // title: z.string().min(1, "This field is required"),
  // body: z.string().min(1, "This field is required"),
});
const defaultValues = {
  userId: undefined,
  title: "",
  body: ""
};
const PostList = () => {

  const [showForm, setShowForm] = useState(false);
  const [hasChange, setHasChange] = useState(false);
  const toEditPostRef = useRef(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues
  });


  const fetchPosts = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  };

  // fetch data from backend api using useQuery
  const { data: posts, isLoading, isError } = useQuery({
    queryKey: ["posts"], // caching
    queryFn: fetchPosts
  });


  const createPost = async (data) => {
      const response = await axios.post(`https://jsonplaceholder.typicode.com/posts`, data);
      return response.data;
  };

  const { mutateAsync: addPost, isSuccess } = useMutation({
    mutationFn: createPost
  });


  if (isLoading) {
    return <p>Fetching posts... Please wait.</p>
  }

  

  const handleFormSubmit = async(data) => {

    console.log("formData: ", data);
    if (toEditPostRef.current) {
      const response = await dispatch(updatePost(toEditPostRef.current, data));
      console.log("response: ", response);
    } else {
      await addPost(data);
    }

    setHasChange(prev => !prev);

    
  };

  const handleToggleForm = () => {
    setShowForm((prev) => !prev);
  };

  const handleEdit = (post) => {
    form.reset({...post, userId: Number(post.userId)});
    setShowForm(true);
    toEditPostRef.current = post.id;
  };

  return (
    <>
      <div className="w-[50%] mx-auto mt-4">
        <div className="flex justify-center">
          <Button
            className="hover:cursor-pointer"
            onClick={handleToggleForm}
          >{!showForm ? 'Create new Post?' : 'Hide Form'}</Button>
        </div>

        {showForm && <PostForm form={form} handleFormSubmit={handleFormSubmit}/>}

      </div>
      <PostTable posts={posts} handleEdit={handleEdit}/>
    </>
  );
};

export default PostList;