import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return new Response(
        JSON.stringify({ error: "Invalid email or password" }),
        { status: 400 }
      );
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return new Response(
        JSON.stringify({ error: "Invalid email or password" }),
        { status: 401 }
      );
    }

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return Response.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
