import { PrimeErrorHandler } from "@/service/error/error";
import { NextResponse } from "next/server";

interface RequestTypes {
  number: number;
}

export async function POST(request: Request) {
  const { number }: Partial<RequestTypes> = await request.json();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/calculate`,
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
