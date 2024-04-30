import { FormLoginSchema, resolver } from "./components/form-login.schema";
import { FormProvider, useForm } from "react-hook-form";
import { FormLogin } from "./components/form-login";

export const Login = () => {
  const methods = useForm<FormLoginSchema>({
    resolver,
  });

  console.log("i", methods.formState.errors);

  const onSubmit = (data: FormLoginSchema) => {
    console.log(data);
  };

  return (
    <div className="space-y-5 shadow-lg p-5 w-full">
      <h1 className="text-2xl text-primary-500">Login</h1>
      <p className="text-base text-gray-700">
        Insira suas informações para realizar o login
      </p>

      <FormProvider {...methods}>
        <FormLogin onSubmit={onSubmit} />
      </FormProvider>
    </div>
  );
};
