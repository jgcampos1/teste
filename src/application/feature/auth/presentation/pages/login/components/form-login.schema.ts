import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export const FormLoginValidation = z.object({
  email: z
    .string()
    .min(1, { message: "REQUIRED_FIELD" })
    .email({ message: "INVALID_EMAIL" }),
  password: z.string().min(1, { message: "REQUIRED_FIELD" }),
});
export const resolver = zodResolver(FormLoginValidation);
export type FormLoginSchema = z.infer<typeof FormLoginValidation>;
