'use client';

import { Form, FormField, FormControl, FormLabel, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const PostForm = ({form, handleFormSubmit}) => {

  return <Form {...form}>
          <form onSubmit={form.handleSubmit(handleFormSubmit)}>
              <div className="space-y-2 mb-2">
                  <FormField
                    control={form.control}
                    name="userId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>User ID: <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                            <Input {...field} value={field.value ?? ""}/>
                        </FormControl>
                        <FormMessage/>
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
                        <FormMessage/>
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
                        <FormMessage/>
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
                  <Button className="hover:cursor-pointer">{form.getValues('userId') ? 'Update POST' : 'Create POST'}</Button>
              </div>
          </form>
        </Form>

};

export default PostForm;