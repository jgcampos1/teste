import { authRoutes } from "@/application/feature/auth/presentation/router";
import { generalRoutes } from "@/application/feature/general/presentation/router";

export const appRoutes = [...generalRoutes, ...authRoutes];
