import * as React from "react";

import { cn } from "~/application/shared/lib/utils";
import { Label } from "./label";
import { Icon } from "@phosphor-icons/react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: Icon;
  endIcon?: Icon;
  label?: string;
  name: string;
  icon?: {
    start?: Icon;
    end?: Icon;
    handleIconClick?: () => void;
  };
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, label, name, ...props }, ref) => {
    const labelId = `input-${name}-${label}`;
    return (
      <div className="space-y-2 ">
        <Label className="text-gray-500" htmlFor={labelId}>
          {label}
        </Label>
        <div
          className={cn(
            "flex h-8 items-center rounded-sm border border-input bg-slate-50 px-3 text-sm ring-offset-0 focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-primary-700 space-x-2",
            className
          )}
        >
          {icon && icon.start && (
            <icon.start
              size={16}
              weight="bold"
              className="fill-gray-500"
              onClick={icon?.handleIconClick}
            />
          )}
          <input
            id={labelId}
            type={type}
            className="w-full  placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-gray-700 bg-transparent"
            ref={ref}
            {...props}
          />
          {icon && icon?.end && (
            <icon.end
              size={16}
              weight="bold"
              className="fill-gray-500"
              onClick={icon?.handleIconClick}
            />
          )}
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
