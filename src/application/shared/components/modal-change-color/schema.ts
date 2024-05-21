import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export const ChangeColorValidation = z.object({
  color: z.string().min(1, { message: "REQUIRED_FIELD" }),
});
export const resolver = zodResolver(ChangeColorValidation);
export type ChangeColorSchema = z.infer<typeof ChangeColorValidation>;
