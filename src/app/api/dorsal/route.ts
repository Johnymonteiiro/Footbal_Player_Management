import { prisma } from "@/lib/prisma";

interface DorsalTypes {
  email: string;
  dorsal: number;
}

export async function POST(request: Request) {
  const { dorsal, email }: DorsalTypes = await request.json();

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return Response.json({ error: "User not found" }, { status: 404 });
  }

  const newDorsal = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      ...user,
      dorsal
    }
  });

  return Response.json(newDorsal);
}
