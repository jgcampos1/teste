import { cn } from "~/application/shared/lib/utils";
import { MenuItemType } from "../constants/items-menu";
import { Link } from "react-router-dom";
import { useToggle } from "~/application/shared/hooks/use-toggle";
import { useEffect, useMemo } from "react";
import { useTranslation } from "~/application/shared/hooks/use-translation";
import { CaretDown, CaretRight } from "@phosphor-icons/react";

interface Props {
  menuItem: MenuItemType;
  collapsed: boolean;
}

export const SubItem = ({ menuItem, collapsed }: Props) => {
  const { translate } = useTranslation();
  const [open, toggleOpen, { set }] = useToggle(false);
  const itemIsActive = (item: MenuItemType) => {
    if (location.pathname.includes(item.path)) {
      return true;
    }
    return false;
  };

  const activeTitle: boolean = useMemo(() => {
    const filtered = menuItem?.subRoutes?.filter((subitem) => {
      if (itemIsActive(subitem)) {
        return true;
      }
    });

    return !!filtered?.length && filtered?.length > 0;
  }, [menuItem]);

  useEffect(() => {
    if (activeTitle) {
      set(true);
    }
  }, [activeTitle, set]);

  return (
    <div
      className={cn(
        "flex flex-col w-full rounded-sm shadow-md",
        collapsed && "w-fit justify-center"
      )}
    >
      <div
        key={menuItem.path}
        className={cn(
          "p-1 flex items-center gap-2 justify-between rounded-t-md w-full hover:bg-primary-100",
          activeTitle && "bg-primary-500 hover:bg-primary-400",
          open && "border-b-2 border-gray-200",
          !open && "rounded-sm border-b-2 border-gray-200"
        )}
        onClick={toggleOpen}
      >
        <div className="p-1 flex items-center justify-start  rounded-t-sm gap-2">
          <menuItem.icon
            size={20}
            className={cn("text-primary-400", activeTitle && "text-gray-50")}
          />

          <p
            className={cn(
              "text-xs text-primary-400",
              activeTitle && "text-gray-50",
              collapsed && "hidden"
            )}
          >
            {translate(`sideMenu.${menuItem?.name}`)}
          </p>
        </div>

        {open ? (
          <CaretDown
            size={18}
            className={cn("text-primary-400", activeTitle && "text-gray-50")}
          />
        ) : (
          <CaretRight
            size={18}
            className={cn("text-primary-400", activeTitle && "text-gray-50")}
          />
        )}
      </div>

      {open && (
        <>
          {menuItem?.subRoutes?.map((item, index) => {
            const selectedPath = itemIsActive(item);

            return (
              <Link
                to={item.path}
                key={item.path}
                className={cn(
                  "p-1 pl-5 flex items-center justify-start w-full gap-2 hover:bg-primary-100 border-b-2 border-gray-200",
                  collapsed && "justify-center pl-0",
                  selectedPath && "bg-primary-500 hover:bg-primary-400",
                  index === (menuItem?.subRoutes?.length ?? 0) - 1 &&
                    "rounded-b-sm"
                )}
              >
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
              </Link>
            );
          })}
        </>
      )}
    </div>
  );
};
