import { Icon, Info } from "@phosphor-icons/react";
import { Control, Controller } from "react-hook-form";
import { useTranslation } from "../../hooks/use-translation";
import { Input } from "../../ui/input";

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  control?: Control<any>;
  icon?: {
    start?: Icon;
    end?: Icon;
    handleIconClick?: () => void;
  };
}

export const TextInput = ({
  className,
  type,
  icon,
  label,
  name,
  control,
  ...props
}: Props) => {
  const { translate } = useTranslation("exception");

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <div className="space-y-2 ">
            <Input
              {...field}
              {...{ className, type, icon, label, name, control, ...props }}
            />

            {error && (
              <div className="flex gap-1 items-center">
                <Info size={16} className="text-red-500" />
                <span className="text-red-500 text-sm">
                  {translate(error?.message ?? "")}
                </span>
              </div>
            )}
          </div>
        );
      }}
    />
  );
};
