"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Login } from "@/app/actions";
import { userLoginSchema, LoginSchema } from "@/validation/validations";
import { toast } from "react-hot-toast";

export default function LoginForm() {
  const route = useRouter();
  const form = useForm<userLoginSchema>({
    resolver: zodResolver(LoginSchema),
  });

  async function onSubmit(values: userLoginSchema) {
    const { email, password } = values;
    const response = await Login({ email, password });
    if (response?.status === 200) {
      route.push("/");
    } else {
      toast.error(response?.message);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-[30rem] p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full py-2" type="submit">
              Login
            </Button>
            <div className="text-center bg-gray-900 mt-4 border w-full py-2">
              <Link
                href={"./register"}
                className="text-blue-500 hover:underline"
              >
                Register
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
