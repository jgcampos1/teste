import { useToggle } from "~/application/shared/hooks/use-toggle";
import { Eye, EyeClosed, SignIn } from "@phosphor-icons/react";
import { FormLoginSchema } from "./form-login.schema";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "~/main/types/routes-enum";
import { useTranslation } from "~/application/shared/hooks/use-translation";
import { Button } from "~/application/shared/components/button";
import { TextInput } from "~/application/shared/components/text-input";

interface Props {
  onSubmit: (data: FormLoginSchema) => void;
}
export const FormLogin = ({ onSubmit }: Props) => {
  const { translate } = useTranslation("login");
  const navigate = useNavigate();
  const [viewPassword, toggleViewPassword] = useToggle();
  const { handleSubmit } = useFormContext<FormLoginSchema>();

  const redirectToForgotPassword = () => {
    navigate(ROUTES.FORGOT_PASSWORD);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="space-y-2">
        <TextInput
          placeholder={translate("form.email.placeholder")}
          label={translate("form.email.label")}
          name="username"
        />
      </div>

      <div className="space-y-2">
        <TextInput
          placeholder={translate("form.password.placeholder")}
          label={translate("form.password.label")}
          name="password"
          type={viewPassword ? "texts" : "password"}
          icon={{
            end: viewPassword ? EyeClosed : Eye,
            handleIconClick: toggleViewPassword,
          }}
        />
      </div>
      <div className="w-full flex flex-col items-end justify-between">
        <Button type="submit" content={translate("signIn")} icon={SignIn} />
        <Button
          variant={"link"}
          onClick={redirectToForgotPassword}
          content={translate("forgotPassword")}
        />
      </div>
    </form>
  );
};
