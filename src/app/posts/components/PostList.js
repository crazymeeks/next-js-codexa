'use client';

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2, PencilIcon } from "lucide-react"; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { Form, FormField, FormControl, FormLabel, FormItem } from "@/components/ui/form";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues
  });


  useEffect(() => {
    dispatch(fetchPosts());
  }, []);


  const handleFormSubmit = (data) => {

  };

  const handleToggleForm = () => {
    setShowForm((prev) => !prev);
  };

  // fetching api - 1minute

  // other code

  return (
    <>
      <div className="w-[50%] mx-auto mt-4">
        <div className="flex justify-center">
          <Button
            className="hover:cursor-pointer"
            onClick={handleToggleForm}
          >{!showForm ? 'Create new Post?' : 'Hide Form'}</Button>
        </div>
        {showForm && <Form {...form}>
          <form onSubmit={form.handleSubmit(handleFormSubmit)}>
              <div className="space-y-2 mb-2">
                  <FormField
                    control={form.control}
                    name="user_id"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>User ID: <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                            <Input {...field} value={field.value ?? ""}/>
                        </FormControl>
                      </FormItem>
                    )}
                  />
              </div>
              <div className="space-y-2 mb-2">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title: <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                            <Input {...field} value={field.value ?? ""}/>
                        </FormControl>
                      </FormItem>
                    )}
                  />
              </div>
              <div className="space-y-2 mb-2">
                  <FormField
                    control={form.control}
                    name="body"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Body: <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                            <Input {...field} value={field.value ?? ""}/>
                        </FormControl>
                      </FormItem>
                    )}
                  />
              </div>
              <div className="space-y-2 mb-2 flex justify-end gap-3">
                  <Button variant="destructive" 
                    className="hover:cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      handleToggleForm();
                    }}
                  >Cancel</Button>
                  <Button className="hover:cursor-pointer">Create POST</Button>
              </div>
          </form>
        </Form>}
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>User ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>1</TableCell>
            <TableCell>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</TableCell>
            <TableCell className="flex gap-2">
                <span className="hover:cursor-pointer">View</span>
                <span className="hover:cursor-pointer">
                  <PencilIcon className="h-4 w-4 text-blue-400"/>
                </span>
                <span className="hover:cursor-pointer">
                  <Trash2 className="h-4 w-4 text-red-400"/>
                </span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>1</TableCell>
            <TableCell>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</TableCell>
            <TableCell className="flex gap-2">
                <span className="hover:cursor-pointer">View</span>
                <span className="hover:cursor-pointer">
                  <PencilIcon className="h-4 w-4 text-blue-400"/>
                </span>
                <span className="hover:cursor-pointer">
                  <Trash2 className="h-4 w-4 text-red-400"/>
                </span>
            </TableCell>
          </TableRow>
          
        </TableBody>
      </Table>
    </>
  );
};

export default PostList;