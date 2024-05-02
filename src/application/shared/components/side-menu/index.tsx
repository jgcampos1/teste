import { useToggle } from "../../hooks/use-toggle";
import { BaseButton } from "../../ui/button";
import { cn } from "../../lib/utils";
import { List, SignOut, TextIndent } from "@phosphor-icons/react";
import { ListItems } from "../list-items";
import { useEffect } from "react";
import { cacheStorage } from "~/main/cache";
import { useTranslation } from "../../hooks/use-translation";
import { useAuth } from "../../hooks/use-auth";

export const SideMenu = () => {
  const { logout } = useAuth();
  const [open, toggleMenu, { set }] = useToggle(false);
  const { translate } = useTranslation();

  const handleCollapseMenu = () => {
    cacheStorage.set("@menu", !open);
    toggleMenu();
  };

  useEffect(() => {
    const menuValue = cacheStorage.get<boolean>("@menu");
    set(menuValue || false);
  }, []);

  console.log(open, "open");
  return (
    <div
      className={cn(
        "min-wih-screen h-screen  flex flex-col justify-start items-center gap-2 p-4 shadow-lg ",
        open ? "w-3/12 min-w-3/12 " : "w-1/12 min-w-1/12"
      )}
    >
      <div className="flex gap-2 justify-between">
        {open && <img src="/images/logo-ituran-mob.png" className="w-2/3" />}
        <BaseButton
          onClick={handleCollapseMenu}
          className="w-14 self-end"
          variant={"outline"}
        >
          {open ? <TextIndent size={32} /> : <List size={32} />}
        </BaseButton>
      </div>
      <ListItems collapsed={!open} />
      <BaseButton
        variant={"destructive"}
        className={cn(
          "flex justify-start gap-2 items-center p-2 shadow hover:bg-red-700",
          open ? "w-full" : "w-fit"
        )}
        onClick={logout}
      >
        <SignOut size={32} /> {open && translate("sideMenu.logout")}
      </BaseButton>
    </div>
  );
};
