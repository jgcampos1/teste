import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../../ui/dropdown-menu";
import { ReactNode, useState } from "react";
import { cn } from "../../lib/utils";

export type Item = {
  label: string;
  onClick: (value: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  variant?: "destructive" | "default";
  subItems?: Item[];
  icon?: ReactNode;
};
interface Props {
  children?: ReactNode;
  items: Item[];
}
export const MenuItem = ({ items, children }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuGroup>
          {items.map(({ onClick, label, icon, variant }, index) => (
            <>
              <DropdownMenuItem
                className={cn(
                  "flex gap-2 cursor-pointer p-2 hover:bg-gray-100",
                  variant === "destructive" && "bg-destructive text-white"
                )}
                onClick={onClick}
              >
                {icon && icon}
                {label}
              </DropdownMenuItem>
              {items.length - 1 !== index && <DropdownMenuSeparator />}
            </>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};