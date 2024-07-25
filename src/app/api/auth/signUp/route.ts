import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  const { name, email, password }: Prisma.UserCreateInput =
    await request.json();

  try {
    const userExist = await prisma.user.findUnique({
      where: { email },
    });

    if (userExist) {
      return new Response(JSON.stringify({ error: "User already exist" }), {
        status: 400,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 6);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      }
    });
    return new Response(JSON.stringify(user), { status: 201 });
  } catch (error) {
    return Response.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
