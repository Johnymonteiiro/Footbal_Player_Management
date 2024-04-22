import { PrimeErrorHandler } from "@/service/error/error";
import { NextResponse } from "next/server";

interface RequestTypes {
  number: number;
}

export async function GET() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/prime/result`);

    if (!res.ok) {
      return NextResponse.json({ message: "Failed to connect the database!" });
    }

    if (res.status === 204) {
      return NextResponse.json({ message: " The database is empty!" });
    }

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    throw new PrimeErrorHandler("Fail to fetch data!");
  }
}

export async function POST(request: Request) {
  const { number }: Partial<RequestTypes> = await request.json();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/prime/calculate`,
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
