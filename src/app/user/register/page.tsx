"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CreateUser } from "@/app/actions";
import { createUserSchema, UserSchema } from "@/validation/validations";

export default function Register() {
  
  const route = useRouter();
  const form = useForm<createUserSchema>({
    resolver: zodResolver(UserSchema),
  });

  async function onSubmit(values: createUserSchema) {
    const { email, name, password } = values;
    const response = await CreateUser({ email, name, password });
    if (response.status === 201) {
      route.push("/");
    } else {
      toast.error(response.message);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-[30rem] p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full py-2" type="submit">
              Sign up
            </Button>
            <div className="text-center bg-gray-900 mt-4 border w-full py-2">
              <Link href={"./login"} className="text-blue-500 hover:underline">
                Already have account
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
