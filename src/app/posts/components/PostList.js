'use client';

import { useState, useEffect } from "react"; 
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import PostForm from "./PostForm";
import PostTable from "./PostTable";

import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "@/redux/features/posts/postSlice";

const formSchema = z.object({
  user_id: z.number().min(1, "This field is required"),
  title: z.string().min(1, "This field is required"),
  body: z.string().min(1, "This field is required"),
});
const defaultValues = {
  user_id: undefined,
  title: "",
  body: ""
};
const PostList = () => {

  const posts = useSelector(state => state.post);

  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues
  });


  useEffect(() => {
    dispatch(fetchPosts());
  }, []);


  useEffect(() => {
    console.log("posts: ", posts);
  }, [posts]);


  const handleFormSubmit = (data) => {

  };

  const handleToggleForm = () => {
    setShowForm((prev) => !prev);
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
      <PostTable posts={posts}/>
    </>
  );
};

export default PostList;