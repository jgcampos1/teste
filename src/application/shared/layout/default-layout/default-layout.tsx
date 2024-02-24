import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  return <>DefaultLayout {children}</>;
};

export default DefaultLayout;
