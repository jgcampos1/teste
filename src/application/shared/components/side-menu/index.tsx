import { useToggle } from "../../hooks/use-toggle";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { List, TextIndent } from "@phosphor-icons/react";
import { ListItems } from "./components/list-items";
import { useEffect } from "react";
import { cacheStorage } from "@/main/cache";

export const SideMenu = () => {
  const [open, toggleMenu, { set }] = useToggle(false);
  const openClass = "w-18";

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
        "w-3/12 min-wih-screen bg-background flex flex-col justify-start items-center gap-2 p-4",
        !open && openClass
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
      <ListItems collapse={open} />
    </div>
  );
};
