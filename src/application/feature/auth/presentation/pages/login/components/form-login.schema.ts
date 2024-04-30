import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export const FormLoginValidation = z.object({
  email: z
    .string()
    .min(1, { message: "validator.requiredField" })
    .email({ message: "validator.invalidEmail" }),
  password: z.string().min(1, { message: "validator.requiredField" }),
});
export const resolver = zodResolver(FormLoginValidation);
export type FormLoginSchema = z.infer<typeof FormLoginValidation>;
