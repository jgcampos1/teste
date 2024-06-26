import { List, TextIndent } from "@phosphor-icons/react";
import { ListItems } from "../list-items";
import { useEffect } from "react";
import { cacheStorage } from "~/main/cache";
import { useToggle } from "~/application/shared/hooks/use-toggle";
import { cn } from "~/application/shared/lib/utils";
import { BaseButton } from "~/application/shared/ui/button";
import { useThemeStore } from "~/application/feature/general/store/theme.store";

export const SideMenu = () => {
  const [open, toggleMenu, { set }] = useToggle(false);
  const { theme } = useThemeStore();
  const imageUrl = theme?.logo || "/images/logo-ituran-mob.png";
  const handleCollapseMenu = () => {
    cacheStorage.set("@menu", !open);
    toggleMenu();
  };

  console.log(theme?.logo);
  useEffect(() => {
    const menuValue = cacheStorage.get<boolean>("@menu");
    set(menuValue || false);
  }, [set]);

  return (
    <div
      className={cn(
        "min-wih-screen h-screen  flex flex-col justify-start items-center gap-1 p-1 shadow-md",
        open ? "w-64 min-w-64 " : "w-1/12 min-w-1/12"
      )}
    >
      <div className="flex gap-1 justify-between p-4">
        {open && <img src={imageUrl} className="w-2/3" />}
        <BaseButton
          onClick={handleCollapseMenu}
          className="w-14 self-end"
          variant={"ghost"}
        >
          {open ? <TextIndent size={32} /> : <List size={32} />}
        </BaseButton>
      </div>
      <ListItems collapsed={!open} />
    </div>
  );
};
