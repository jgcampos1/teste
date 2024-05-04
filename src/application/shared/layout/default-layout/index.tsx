import { ReactNode } from "react";

import { useDeviceSizes } from "../../hooks/use-device";
import { cn } from "../../lib/utils";
import { SideMenu } from "./components/side-menu";
import { HeaderMenu } from "./components/header-menu";
import { ProfileMenu } from "./components/profile-menu";
import { SelectLanguage } from "../../components/select-language";

interface Props {
  children: ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  const { isDesktop } = useDeviceSizes();
  return (
    <div className={cn("flex", !isDesktop && "flex-col")}>
      {isDesktop ? <SideMenu /> : <HeaderMenu />}
      <div className="flex-1 h-screen">
        {isDesktop && (
          <div className="w-full h-14 shadow-lg flex items-center justify-end px-5 gap-2">
            <SelectLanguage />
            <ProfileMenu />
          </div>
        )}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
