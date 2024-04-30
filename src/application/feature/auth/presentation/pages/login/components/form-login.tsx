import { Input } from "@/application/shared/components/ui/input";
import { useToggle } from "@/application/shared/hooks/use-toggle";
import { Eye, EyeClosed } from "@phosphor-icons/react";
import { FormLoginSchema } from "./form-login.schema";
import { useFormContext } from "react-hook-form";
import { Button } from "@/application/shared/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/main/types/routes-enum";

interface Props {
  onSubmit: (data: FormLoginSchema) => void;
}
export const FormLogin = ({ onSubmit }: Props) => {
  const navigate = useNavigate();
  const [viewPassword, toggleViewPassword] = useToggle();
  const { handleSubmit } = useFormContext<FormLoginSchema>();

  const redirectToForgotPassword = () => {
    navigate(ROUTES.FORGOT_PASSWORD);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="space-y-2">
        <Input placeholder="Email" name="email" label="Login" />
      </div>
      <div className="space-y-2">
        <Input
          placeholder="Senha"
          name="password"
          type={viewPassword ? "texts" : "password"}
          label="Senha"
          icon={{
            end: viewPassword ? EyeClosed : Eye,
            handleIconClick: toggleViewPassword,
          }}
        />
      </div>
      <div className="w-full flex justify-between">
        <Button variant={"link"} onClick={redirectToForgotPassword}>
          Esqueceu sua senha?
        </Button>
        <Button type="submit">Entrar</Button>
      </div>
    </form>
  );
};
