import { useAuthStore } from "~/application/feature/auth/store/auth-store";
import { useContractStore } from "~/application/feature/contracts/store/contract-store";
import { Tooltip } from "~/application/shared/components/tooltip";
import { useTranslation } from "~/application/shared/hooks/use-translation";

export const Dashboard = () => {
  const { authUser: auth } = useAuthStore();
  const { contract } = useContractStore();
  const { language } = useTranslation();
  return (
    <div className="">
      <h1 className="text-5xl text-primary-500 font-bold">Dashboard</h1>
      <div className={"flex flex-col"}>
        <p>user: {auth?.name}</p>
        <p>contract: {contract?.name}</p>
        <p>lang: {language}</p>
      </div>
      <Tooltip title={"sdasd"}>hover</Tooltip>
    </div>
  );
};
