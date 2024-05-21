import { useAuthStore } from "~/application/feature/auth/store/auth-store";
import { useContractStore } from "~/application/feature/contracts/store/contract-store";
import { useTranslation } from "~/application/shared/hooks/use-translation";

import { TitlePage } from "~/application/shared/components/title-page";
import { DataTable } from "~/application/shared/components/table/table";
import { columns } from "~/application/shared/components/table/columns";
export const Dashboard = () => {
  const { authUser: auth } = useAuthStore();
  const { contract } = useContractStore();
  const { language } = useTranslation();

  const products = [
    { id: 1, name: "Product 1", value: 10 },
    { id: 2, name: "Product 2", value: 20 },
    { id: 3, name: "Product 3", value: 30 },
  ];

  const fetchProducts = () => {};
  return (
    <div className="">
      <h1 className="text-5xl text-primary-500 font-bold"></h1>

      <TitlePage title="dashboard" />
      <div className={"flex flex-col"}>
        <p>user: {auth?.name}</p>
        <p>contract: {contract?.name}</p>
        <p>lang: {language}</p>
      </div>
      <DataTable
        columns={columns}
        data={products}
        onFetchData={fetchProducts}
        primaryButton={{
          children: "Add product",
          onClick: () => console.log("add product"),
        }}
      />
    </div>
  );
};
