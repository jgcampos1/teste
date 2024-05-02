import { FormLoginSchema, resolver } from "./components/form-login.schema";
import { FormProvider, useForm } from "react-hook-form";
import { FormLogin } from "./components/form-login";
import { useTranslation } from "~/application/shared/hooks/use-translation";
import { useEmailLoginMutation } from "../../../store/hooks";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "~/main/types/routes-enum";

export const Login = () => {
  const [handleLogin, { isError, error }] = useEmailLoginMutation();
  const { translate } = useTranslation("login");

  const methods = useForm<FormLoginSchema>({
    resolver,
  });

  console.log(isError, error);

  const navigate = useNavigate();

  const onSubmit = (data: FormLoginSchema) => {
    handleLogin(data)
      .unwrap()
      .then((response) => {
        console.log("response", response);

        navigate(ROUTES.DASHBOARD);
      });
  };

  return (
    <div className="space-y-5 shadow-lg p-5 w-full">
      <h1 className="text-2xl text-primary-500"> {translate("title")}</h1>
      <p className="text-base text-gray-700">{translate("description")}</p>

      <FormProvider {...methods}>
        <FormLogin onSubmit={onSubmit} />
      </FormProvider>
    </div>
  );
};
