import { cn } from "~/application/shared/lib/utils";
import { Item } from "..";
import {
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "~/application/shared/ui/dropdown-menu";

interface SubItemProps {
  labelTitle?: string;
  subItems: Item[];
}

export const SubMenuItem = ({ subItems, labelTitle }: SubItemProps) => {
  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>{labelTitle}</DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          {subItems?.map(
            ({ label, onClick, icon, subItems, variant }, index) => (
              <>
                <DropdownMenuItem
                  key={index}
                  className={cn(
                    "flex gap-2 cursor-pointer p-2 hover:bg-gray-100",
                    variant === "destructive" && "bg-destructive text-white",
                    variant === "primary" && "bg-primary text-white"
                  )}
                  onClick={onClick}
                >
                  {icon && icon}
                  {label}
                </DropdownMenuItem>
                {subItems && subItems.length - 1 !== index && (
                  <DropdownMenuSeparator />
                )}
              </>
            )
          )}
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
};
