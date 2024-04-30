import { Input } from "@/application/shared/components/ui/input";
import { useToggle } from "@/application/shared/hooks/use-toggle";
import { Eye, EyeClosed } from "@phosphor-icons/react";
import { FormLoginSchema } from "./form-login.schema";
import { useFormContext } from "react-hook-form";
import { Button } from "@/application/shared/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/main/types/routes-enum";
import { useTranslation } from "@/application/shared/hooks/use-translation";

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
        <Input
          placeholder={translate("form.email.placeholder")}
          label={translate("form.email.label")}
          name="email"
        />
      </div>
      <div className="space-y-2">
        <Input
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
      <div className="w-full flex justify-between">
        <Button variant={"link"} onClick={redirectToForgotPassword}>
          {translate("forgotPassword")}
        </Button>
        <Button type="submit">{translate("signIn")}</Button>
      </div>
    </form>
  );
};
