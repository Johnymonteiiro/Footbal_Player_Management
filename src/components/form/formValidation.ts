import { z } from "zod";

export const formSchema = z.object({
  number: z.coerce
    .number()
    .positive("Must be positive number!")
    .max(1000, {
      message: "You exceeded the maximun (1000) number !",
    }),
});
