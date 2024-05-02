import { FormLoginSchema, resolver } from "./components/form-login.schema";
import { FormProvider, useForm } from "react-hook-form";
import { FormLogin } from "./components/form-login";
import { useTranslation } from "~/application/shared/hooks/use-translation";
import { useEmailLoginMutation } from "../../../store/hooks";

export const Login = () => {
  const [handleLogin, { isError, error }] = useEmailLoginMutation();

  console.log(isError, error);
  const { translate } = useTranslation("login");
  const methods = useForm<FormLoginSchema>({
    resolver,
  });

  const onSubmit = (data: FormLoginSchema) => {
    handleLogin(data);
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
