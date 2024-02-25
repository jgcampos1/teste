import { IRoute } from "@/main/types/route-types";
import { Dashboard } from "../pages/dashboard";

export const generalRoutes: IRoute[] = [
  {
    path: "/",
    name: "Dashboard",
    private: true,
    element: <Dashboard />,
    layout: "DefaultLayout",
    roles: [],
  },
  {
    path: "/contracts",
    name: "Dashboard",
    private: true,
    element: <Dashboard />,
    layout: "DefaultLayout",
    roles: [],
  },
];
