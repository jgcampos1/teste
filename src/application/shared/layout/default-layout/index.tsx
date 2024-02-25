import { ReactNode } from "react";

import { SideMenu } from "../../components/side-menu";

interface Props {
  children: ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <SideMenu />

      {children}
    </div>
  );
};

export default DefaultLayout;
