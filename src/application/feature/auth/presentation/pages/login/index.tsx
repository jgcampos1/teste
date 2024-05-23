import { FormLoginSchema, resolver } from "./components/form-login.schema";
import { FormProvider, useForm } from "react-hook-form";
import { FormLogin } from "./components/form-login";
import { useTranslation } from "~/application/shared/hooks/use-translation";
import { useEmailLoginMutation } from "../../../store/hooks";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "~/main/types/routes-enum";
import { useToastAlert } from "~/application/shared/hooks/use-toast-alert";
import { useEffect } from "react";

export const Login = () => {
  const [handleLogin, { error, isError }] = useEmailLoginMutation();
  const { translate } = useTranslation("login");

  const methods = useForm<FormLoginSchema>({
    resolver,
  });

  const navigate = useNavigate();

  const onSubmit = (data: FormLoginSchema) => {
    handleLogin(data)
      .unwrap()
      .then(() => {
        navigate(ROUTES.DASHBOARD);
      });
  };

  useToastAlert({
    error: error?.value?.message,
    isError,
  });

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
