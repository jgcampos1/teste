import { BaseButton, ButtonProps } from "../../ui/button";
import Spinner from "../spinner";
import { Icon } from "@phosphor-icons/react";

type Props = ButtonProps & {
  loading?: boolean;
  title: string | React.ReactNode;
  icon?: Icon;
};
export const Button = ({
  title,
  loading,
  icon: Icon,
  disabled,
  ...rest
}: Props) => {
  console.log({ loading, title });
  return (
    <BaseButton disabled={loading ? true : disabled} {...rest}>
      <div className=" flex gap-2 items-center ">
        {loading ? (
          <div className="h-4 w-4 flex items-center justify-center">
            <Spinner />{" "}
          </div>
        ) : (
          <>
            {Icon && <Icon size={16} weight="bold" className="fill-gray-100" />}
          </>
        )}
        {title}
      </div>
    </BaseButton>
  );
};
