import { env } from "@/env";
import { User } from "@prisma/client";
import jwt from "jsonwebtoken";


const secret = env.JWT_SECRET;

export const generateToken = (user: User) => {
  return jwt.sign({ userId: user.id }, secret, { expiresIn: "1h" });
};

export const verifyToken = (token: any) => {
  try {
    const decoded = jwt.verify(token, secret);
    if (typeof decoded === "object" && "userId" in decoded) {
      return decoded.userId;
    }
    return null;
  } catch (error) {
    console.error("JWT verification failed:", error);
    return null;
  }
};
