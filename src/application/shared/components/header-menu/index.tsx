import { useToggle } from "../../hooks/use-toggle";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { List, SignOut } from "@phosphor-icons/react";
import { useEffect } from "react";
import { cacheStorage } from "@/main/cache";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "../ui/sheet";

import { ListItems } from "../list-items";
import { useTranslation } from "../../hooks/use-translation";

export const HeaderMenu = () => {
  const { translate } = useTranslation();

  return (
    <div
      className={cn(
        "w-full min-wih-screen h-13 bg-background flex justify-end p-4"
      )}
    >
      <Sheet modal>
        <SheetTrigger>
          <Button variant={"outline"}>
            <List size={22} />
          </Button>
        </SheetTrigger>

        <SheetContent className="flex flex-col items-center ">
          <div className="flex gap-2 flex-col justify-between flex-1 w-full h-full">
            <img src="/images/logoIturan-mob.png" className="w-2/3 max-w-48" />
            <ListItems />
          </div>
          <SheetFooter className="bg-blue-400 flex">
            <SheetClose asChild>
              <Button
                variant={"destructive"}
                className={cn(
                  "w-full flex justify-start gap-2 items-center p-2 shadow hover:bg-red-700"
                )}
              >
                <SignOut size={32} /> {translate("sideMenu.logout")}
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};
