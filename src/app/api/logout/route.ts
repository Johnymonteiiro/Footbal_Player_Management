import { cookies } from "next/headers";

export async function GET() {
 const cookieStore = cookies()
  try {
    cookieStore.set('token', "", { httpOnly:true, expires: new Date(0)})
    return Response.json({ sucess: true}, {status: 200});
  } catch (error) {
    return Response.json({ message: error}, {status: 500});
  }
}
