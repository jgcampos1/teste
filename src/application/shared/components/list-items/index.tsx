import { useTranslation } from "@/application/shared/hooks/use-translation";
import { ITEMS_MENU } from "./constants/items-menu";
import { cn } from "@/application/shared/lib/utils";
import { Link, useLocation } from "react-router-dom";

interface Props {
  collapsed?: boolean;
}
export const ListItems = ({ collapsed }: Props) => {
  const { translate } = useTranslation();
  const { pathname } = useLocation();

  return (
    <div className="mt-5 w-full flex flex-col items-center justify-start gap-2 flex-1">
      {ITEMS_MENU.map((item) => {
        const selectedPath = pathname === item.path;

        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "m-0 p-1 rounded flex gap-2 items-center justify-start shadow w-full hover:bg-primary-100",
              collapsed && "w-fit justify-center",
              selectedPath && "bg-primary-500 hover:bg-primary-400"
            )}
          >
            <item.icon
              size={32}
              className={cn("text-primary-400", selectedPath && "text-gray-50")}
            />
            {!collapsed && (
              <p
                className={cn(
                  "text-primary-400",
                  selectedPath && "text-gray-50"
                )}
              >
                {translate(`sideMenu.${item?.name}`)}
              </p>
            )}
          </Link>
        );
      })}
    </div>
  );
};