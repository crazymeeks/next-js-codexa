'use client';

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
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod"; // defining our schema/form structure
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Trash2 } from "lucide-react";

const formSchema = z.object({
  firstname: z.string().min(1, "Firstname is required."),
  lastmame: z.string().min(1, "Lastname is required."),
});

const CheckoutForm = () => {

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      testing: [
        {
          name: ""
        }
      ]
    }
  });

  const { fields: testingFields, append, remove } = useFieldArray({
    control: form.control,
    name: "testing",
  });


  const { fields: variantFields, append: variantAppend, remove: variantRemove } = useFieldArray({
    control: form.control,
    name: "variants",
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

        <div className="grid grid-cols-1">
          {testingFields.map((field, index) => (
            <div className="grid grid-cols-2" key={field.id}>
              <FormField
                control={form.control}
                name={`testing.${index}.name`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Testing</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value || ""}/>
                    </FormControl>
                  </FormItem>
                )}
              />
              <span
                className="hover:cursor-pointer"
                onClick={() => remove(index)}
                >
                <Trash2 className="h-4 w-4 text-red-500"/>
              </span>
            </div>
          ))}
          <span
            className="bg-blue-500 p-2"
            onClick={() => append({name: ""})}
            >
            <Plus className="h-4 w-4"/>
          </span>
          
        </div>
        <div className="grid grid-cols-1 mt-2">
            <Button className="hover:cursor-pointer">Place Order</Button>
        </div>
      </form>
    </Form>
  );
};

export default CheckoutForm;