import { FormLoginSchema, resolver } from "./components/form-login.schema";
import { FormProvider, useForm } from "react-hook-form";
import { FormLogin } from "./components/form-login";
import { useTranslation } from "~/application/shared/hooks/use-translation";

export const Login = () => {
  const { translate } = useTranslation("login");
  const methods = useForm<FormLoginSchema>({
    resolver,
  });

  const onSubmit = (data: FormLoginSchema) => {
    console.log({ data });
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
