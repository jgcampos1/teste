import { ReactNode } from "react";
import { useDeviceSizes } from "../../hooks/use-device";
import { SelectLanguage } from "../../components/select-language";
import { useThemeStore } from "~/application/feature/general/store/theme.store";

interface Props {
  children: ReactNode;
}

const AuthFormLayout = ({ children }: Props) => {
  const { theme } = useThemeStore();
  const imageUrl =
    theme?.logo || "/src/application/shared/components/icons/logo-icon.svg";

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
        <div className="flex flex-col justify-end items-end w-2/3 gap-2">
          <img src={imageUrl} className="w-48" />
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
