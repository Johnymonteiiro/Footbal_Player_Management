import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const user = await prisma.user.findUnique({
      where: { id },
      include: { profile: true },
    });

    return new NextResponse(JSON.stringify(user));
  } else {
    return new Response(
      JSON.stringify({ error: "User not found" }),
      { status: 404 }
    );
  }
}
