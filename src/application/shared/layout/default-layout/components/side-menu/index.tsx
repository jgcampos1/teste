import { List, TextIndent } from "@phosphor-icons/react";
import { ListItems } from "../list-items";
import { useEffect } from "react";
import { cacheStorage } from "~/main/cache";
import { useToggle } from "~/application/shared/hooks/use-toggle";
import { cn } from "~/application/shared/lib/utils";
import { BaseButton } from "~/application/shared/ui/button";

export const SideMenu = () => {
  const [open, toggleMenu, { set }] = useToggle(false);

  const handleCollapseMenu = () => {
    cacheStorage.set("@menu", !open);
    toggleMenu();
  };

  useEffect(() => {
    const menuValue = cacheStorage.get<boolean>("@menu");
    set(menuValue || false);
  }, [set]);

  console.log(open, "open");
  return (
    <div
      className={cn(
        "min-wih-screen h-screen  flex flex-col justify-start items-center gap-1 p-1 shadow-md",
        open ? "w-2/12 min-w-3/12 " : "w-1/12 min-w-1/12"
      )}
    >
      <div className="flex gap-1 justify-between p-4">
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
    </div>
  );
};
