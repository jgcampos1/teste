import { AddressBook, Icon, SquaresFour } from "@phosphor-icons/react";
import { ROUTES } from "~/main/types/routes-enum";
export type MenuItemType = {
  path: string;
  name: string;
  icon: Icon;
  subRoutes?: MenuItemType[];
};
export const ITEMS_MENU: MenuItemType[] = [
  {
    path: ROUTES.DASHBOARD,
    name: "dashboard",
    icon: SquaresFour,
  },
  {
    path: ROUTES.CONTRACTS,
    name: "contracts",
    icon: AddressBook,
  },
];
