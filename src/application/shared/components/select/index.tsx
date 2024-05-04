import { Control, Controller } from "react-hook-form";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  Select as SelectUI,
  SelectValue,
} from "../../ui/select";

export interface SelectOptionsModel {
  id: string | number;
  label: string;
  icon?: React.ReactNode;
}
interface Props {
  options: SelectOptionsModel[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  className?: string;
  placeholder?: string;
}

export const Select = ({ control, name, options, placeholder }: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <SelectUI onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem
                  key={option.id}
                  className="flex items-center gap-2"
                  value={String(option.id)}
                >
                  <div className="flex items-center gap-2">
                    {option.icon}
                    <span>{option.label}</span>
                  </div>{" "}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectUI>
        );
      }}
    />
  );
};
