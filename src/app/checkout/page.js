

'use client';

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod"; // defining our schema/form structure
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  firstname: z.string().min(1, "Firstname is required."),
});

const CheckoutPage = () => {

  const form = useForm({
    resolver: zodResolver(formSchema)
  });

  const handleFormSubmit = (data) => {
    console.log("data: ", data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)} className="w-[50%] mx-auto mt-8">
        <div className="grid grid-cols-2 gap-1">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Firstname</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value || ""}/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lastname</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value || ""}/>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value || ""}/>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 mt-2">
            <Button className="hover:cursor-pointer">Place Order</Button>
        </div>
      </form>
    </Form>
  );
};

export default CheckoutPage;