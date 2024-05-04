import { ReactNode } from "react";
import {
  TooltipProvider,
  TooltipTrigger,
  Tooltip as TooltipComponent,
  TooltipContent,
} from "../../ui/tooltip";

interface Props {
  children: ReactNode;
  title?: string;
}
export const Tooltip = ({ children, title }: Props) => {
  return (
    <TooltipProvider>
      <TooltipComponent>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{title}</p>
        </TooltipContent>
      </TooltipComponent>
    </TooltipProvider>
  );
};
