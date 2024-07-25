"use server";

import { env } from "@/env";
import { generateToken, verifyToken } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";
import { createUserSchema, userLoginSchema } from "@/validation/validations";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface CreateDorsalTypes {
  dorsal: number;
  email: string;
}

export async function Logout() {
  const token = cookies().get("token")?.value;

  if (token) {
    cookies().delete("token");
    redirect("/user/login");
  }

  return;
}

export async function Session() {
  const token = cookies().get("token")?.value;
  const userId = verifyToken(token);

  try {
    const res = await fetch(
      `${env.NEXT_PUBLIC_BASE_URL}/api/profile/me?id=${userId}`,
      {
        cache: "no-store",
        next: { revalidate: 10 },
      }
    );
    if (res.ok) {
      const user = await res.json();
      return user;

    } else {
      redirect("/user/login")
    }
  } catch (error) {
    throw new Error("User not Found")
  }
}

/// FETCHING DATE:

export async function CreateUser(formData: createUserSchema) {
  const { name, password, email } = formData;

  const res = await fetch(`${env.NEXT_PUBLIC_BASE_URL}/api/auth/signUp`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, name, password }),
  });

  if (res.ok) {
    const user = await res.json();
    const token = generateToken(user);
    cookies().set("token", token);
    const response = { message: user.error, status: res.status };

    revalidatePath("/");
    return response;
  } else {
    const user = await res.json();
    const response = { message: user.error, status: res.status };
    return response;
  }
}

export async function Login(formData: userLoginSchema) {
  const { email, password } = formData;
  try {
    const res = await fetch(`${env.NEXT_PUBLIC_BASE_URL}/api/auth/signIn`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const user = await res.json();
      const token = generateToken(user);
      cookies().set("token", token);
      const response = { message: user.error, status: res.status };

      return response;
    } else {
      const user = await res.json();
      const response = { message: user.error, status: res.status };
      return response;
    }
  } catch (error) {}
}

export async function CreateDorsal({ email, dorsal }: CreateDorsalTypes) {
  const res = await fetch(`${env.NEXT_PUBLIC_BASE_URL}/api/dorsal`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, dorsal }),
  });

  if (res.ok) {
    revalidatePath("/");
  }

  return false;
}
