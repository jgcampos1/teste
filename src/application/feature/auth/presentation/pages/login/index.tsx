import { Button } from "@/application/shared/components/ui/button";
import { Input } from "@/application/shared/components/ui/input";

export const Login = () => {
  return (
    <div className="space-y-5  shadow-lg p-5">
      <h1 className="text-2xl text-primary-500">Login</h1>
      <p className="text-base text-gray-700">
        Insira suas informações para realizar o login
      </p>
      <div className="space-y-2">
        <Input placeholder="Email" name="Input" label="Login" />
      </div>
      <div className="space-y-2">
        <Input placeholder="Senha" name="Senha" label="Senha" />
      </div>

      <div className="w-full flex justify-between">
        <Button>Entrar</Button>
        <Button variant={"link"}>Esqueceu sua senha?</Button>
      </div>
    </div>
  );
};
