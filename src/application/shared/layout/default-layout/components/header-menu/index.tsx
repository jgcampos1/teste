import { List } from "@phosphor-icons/react";
import { ListItems } from "../list-items";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "~/application/shared/ui/sheet";
import { BaseButton } from "~/application/shared/ui/button";
import { cn } from "~/application/shared/lib/utils";

export const HeaderMenu = () => {
  return (
    <div
      className={cn(
        "w-full min-wih-screen h-13 bg-background flex justify-end p-1"
      )}
    >
      <Sheet modal>
        <SheetTrigger>
          <BaseButton variant={"outline"}>
            <List size={22} />
          </BaseButton>
        </SheetTrigger>

        <SheetContent className="flex flex-col items-center ">
          <div className="flex gap-2 flex-col justify-between flex-1 w-full h-full">
            <img src="/images/logo-ituran-mob.png" className="w-2/3 max-w-36" />
            <ListItems />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
