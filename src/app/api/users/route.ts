import { prisma } from "@/lib/prisma";

export async function GET() {
  const allUsers = await prisma.user.findMany({
    include: {
      profile: true,
    },
  });

  const users = allUsers.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      dorsal: user.dorsal,
      profile: {
        nacionality: user.profile?.nacionality,
        age: user.profile?.age,
        best_foot: user.profile?.best_foot,
        position: user.profile?.position,
        goals: user.profile?.goals,
        team: user.profile?.team,
      },
    };
  });

  return Response.json(users);
}
