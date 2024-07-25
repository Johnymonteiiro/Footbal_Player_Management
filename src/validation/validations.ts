import { z } from "zod";


export const  UserSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Must be 4 or more characters long" })
    .max(80, { message: "maximum 80 characters" }),
  email: z.string().email({ message: "Invalid email" }),
  password: z.coerce
    .string()
    .min(8, { message: "minimum 8 characters" })
    .max(8, { message: "maximum 8 characters" }),
});

export const LoginSchema = z.object({
  email: z.string().email({message:"Invalid email"}),
  password: z.coerce.string().min(8, { message: "minimum 8 characters" }).max(8, { message: "maximum 8 characters" })
});


const dorsalSchema = z.object({
  dorsal: z.number()
});



export type createUserSchema = z.infer<typeof UserSchema>;
export type userLoginSchema = z.infer<typeof LoginSchema>;
export type updateUserDorsalSchema = z.infer<typeof dorsalSchema>;