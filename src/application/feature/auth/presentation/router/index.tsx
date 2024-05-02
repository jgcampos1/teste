import { IRoute } from "~/main/types/route-types";
import { Login } from "../pages/login";

export const authRoutes: IRoute[] = [
  {
    path: "/login",
    name: "Login",
    private: false,
    element: <Login />,
    layout: "AuthFormLayout",
    roles: [],
  },
];
