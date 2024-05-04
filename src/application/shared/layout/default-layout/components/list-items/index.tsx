import { useTranslation } from "~/application/shared/hooks/use-translation";
import { ITEMS_MENU } from "./constants/items-menu";
import { cn } from "~/application/shared/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { SubItem } from "./sub-item";
import { Tooltip } from "~/application/shared/components/tooltip";

interface Props {
  collapsed?: boolean;
}
export const ListItems = ({ collapsed }: Props) => {
  const { translate } = useTranslation();
  const { pathname } = useLocation();

  return (
    <div className="mt-2 w-full flex flex-col items-center justify-start gap-2 flex-1">
      {ITEMS_MENU.map((item) => {
        const selectedPath = pathname === item.path;

        if (!!item?.subRoutes?.length && item?.subRoutes?.length > 0) {
          return <SubItem menuItem={item} collapsed={collapsed || false} />;
        }
        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "p-1 flex items-center gap-2 justify-start rounded shadow-lg w-full hover:bg-primary-100",
              collapsed && "w-fit justify-center px-3",
              selectedPath && "bg-primary-500 hover:bg-primary-400"
            )}
          >
            <Tooltip title={translate(`sideMenu.${item?.name}`)}>
              <div className="p-1 flex items-center justify-start hover:bg-primary-10 rounded-t-sm gap-2">
                <item.icon
                  size={20}
                  className={cn(
                    "text-primary-400",
                    selectedPath && "text-gray-50"
                  )}
                />
                {!collapsed && (
                  <p
                    className={cn(
                      "text-xs text-primary-400",
                      selectedPath && "text-gray-50"
                    )}
                  >
                    {translate(`sideMenu.${item?.name}`)}
                  </p>
                )}
              </div>
            </Tooltip>
            <div className="w-2"></div>
          </Link>
        );
      })}
    </div>
  );
};
