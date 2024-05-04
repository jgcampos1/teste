import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { Button } from "../button";
import { Control, Controller } from "react-hook-form";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../../ui/command";
import { cn } from "../../lib/utils";
import { useTranslation } from "../../hooks/use-translation";

export interface OptionsModel {
  id: string | number;
  label: string;
  icon?: React.ReactNode;
}

interface Props {
  control: Control;
  name: string;
  options: OptionsModel[];
  onlyPlaceholderIcon?: boolean;
  className?: string;
  placeholder?: string;
}
export function ComboboxDemo({
  options,
  control,
  name,
  onlyPlaceholderIcon = false,
  className,
  placeholder,
}: Props) {
  const { translate } = useTranslation("common");
  const [open, setOpen] = React.useState(false);
  const [currentValueLabel, setCurrentValue] = React.useState<OptionsModel>();

  const showIcon = !currentValueLabel?.icon ? true : !onlyPlaceholderIcon;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => {
        return (
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger>
              <Button
                className={cn("w-[200px] justify-between", className)}
                variant="outline"
                role="combobox"
                aria-expanded={open}
              >
                {value ? (
                  <div className="w-full flex items-center gap-2">
                    {currentValueLabel?.icon}
                    {showIcon && <span>{currentValueLabel?.label}</span>}
                  </div>
                ) : (
                  placeholder
                )}
                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput
                  placeholder={translate("searchLabel")}
                  className="h-9"
                />
                <CommandEmpty>{translate("emptyValue")}</CommandEmpty>
                <CommandGroup>
                  {options?.map((item: OptionsModel) => (
                    <CommandItem
                      key={item?.id}
                      value={String(item?.id)}
                      onSelect={(currentValue) => {
                        onChange(
                          String(currentValue) === String(value)
                            ? ""
                            : currentValue
                        );
                        setCurrentValue(item);
                        setOpen(false);
                      }}
                    >
                      {item?.label}
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          value === item?.id ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        );
      }}
    />
  );
}
