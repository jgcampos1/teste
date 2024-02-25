import { ReactNode } from "react";

import { SideMenu } from "../../components/side-menu";
import { useDeviceSizes } from "../../hooks/use-device";
import { HeaderMenu } from "../../components/header-menu";
import { cn } from "../../lib/utils";

interface Props {
  children: ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  const { isDesktop } = useDeviceSizes();
  return (
    <div className={cn("flex", !isDesktop && "flex-col")}>
      {isDesktop ? <SideMenu /> : <HeaderMenu />}
      <div className="flex-1 h-screen">{children}</div>
    </div>
  );
};

export default DefaultLayout;
