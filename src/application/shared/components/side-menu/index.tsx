import { useToggle } from "../../hooks/use-toggle";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { List, SignOut, TextIndent } from "@phosphor-icons/react";
import { ListItems } from "../list-items";
import { useEffect } from "react";
import { cacheStorage } from "@/main/cache";
import { useTranslation } from "../../hooks/use-translation";

export const SideMenu = () => {
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
  return (
    <div
      className={cn(
        "w-2/12 min-wih-screen h-screen bg-slate-200 flex flex-col justify-start items-center gap-2 p-4 shadow min-w-60",
        !open && "w-18"
      )}
    >
      <div className="flex gap-2 justify-between">
        {open && <img src="/images/logoIturan-mob.png" className="w-2/3" />}
        <Button
          onClick={handleCollapseMenu}
          className="w-14 self-end"
          variant={"outline"}
        >
          {open ? <TextIndent size={32} /> : <List size={32} />}
        </Button>
      </div>
      <ListItems collapsed={!open} />
      <Button
        variant={"destructive"}
        className={cn(
          "w-full flex justify-start gap-2 items-center p-2 shadow hover:bg-red-700"
        )}
      >
        <SignOut size={32} /> {open && translate("sideMenu.logout")}
      </Button>
    </div>
  );
};