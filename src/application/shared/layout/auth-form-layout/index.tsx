import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AuthFormLayout = ({ children }: Props) => {
  return <>AuthFormLayout {children}</>;
};

export default AuthFormLayout;
