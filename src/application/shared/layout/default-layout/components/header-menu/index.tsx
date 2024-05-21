import { List } from "@phosphor-icons/react";
import { ListItems } from "../list-items";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "~/application/shared/ui/sheet";
import { BaseButton } from "~/application/shared/ui/button";
import { cn } from "~/application/shared/lib/utils";
import { ProfileMenu } from "../profile-menu";
import { SelectLanguage } from "~/application/shared/components/select-language";

export const HeaderMenu = () => {
  return (
    <div
      className={cn(
        "w-full min-wih-screen shadow h-14  flex justify-between p-2 "
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
          <SelectLanguage />
        </SheetContent>
      </Sheet>
      <ProfileMenu />
    </div>
  );
};
