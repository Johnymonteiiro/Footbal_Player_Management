import { env } from "@/env";

interface RequestTypes {
  number: number;
}

export async function POST(request: Request) {
  const { number }: Partial<RequestTypes> = await request.json();

  const res = await fetch(
    `${env.NEXT_PUBLIC_BASE_URL}/results`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ number: number }),
    }
  );

  const data = await res.json();

  return Response.json(data);
}
