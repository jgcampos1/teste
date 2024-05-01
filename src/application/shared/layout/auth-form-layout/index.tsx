import { ReactNode } from "react";
import { useDeviceSizes } from "../../hooks/use-device";
import { SelectLanguage } from "../../components/select-language";

interface Props {
  children: ReactNode;
}

const AuthFormLayout = ({ children }: Props) => {
  const { isDesktop } = useDeviceSizes();
  return (
    <div className="w-screen h-screen flex items-center">
      {isDesktop && (
        <div className="w-1/2 h-screen flex items-center justify-center">
          <img
            src="/images/svg-login.png"
            alt="login illustration"
            className="object-cover max-w-2xl"
          />
        </div>
      )}
      <div className="flex-1 h-screen p-12 flex items-center justify-center flex-col ">
        <div className="flex items-center justify-end  w-2/3">
          <img src="/images/logo-ituran-mob.png" className="w-48" />
          <SelectLanguage />
        </div>
        <div className="flex-1 items-center flex justify-center  w-2/3">
          {children}{" "}
        </div>
      </div>
    </div>
  );
};

export default AuthFormLayout;
