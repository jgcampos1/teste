import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../../ui/command";
import React, { useEffect, useMemo } from "react";
import { Button } from "../button";
import { useAuth } from "../../hooks/use-auth";
import {
  useGetContractByUserMutation,
  useLazyGetContractQuery,
} from "~/application/feature/contracts/store/hooks";
import { ContractModel } from "~/application/feature/contracts/domain/model/contract.model";
import { passToAlphabeticOrder } from "../../ultils/helpers/pass-to-alphabetic-order";

import { useContractStore } from "~/application/feature/contracts/store/contract-store";
import { ArrowsCounterClockwise, Check } from "@phosphor-icons/react";
import { cn } from "../../lib/utils";
import { useTranslation } from "../../hooks/use-translation";
import { STORAGE_TOKENS } from "~/main/core/domain/entities/storage-tokens";

export type CompanyList = {
  [key: string]: {
    contracts: ContractModel[];
    name: string;
    id: number;
  };
};
export const SelectContract = () => {
  const { user } = useAuth();
  const { contract, setContract } = useContractStore();

  const { translate } = useTranslation("common");
  const [getContractsList, { data: contractList }] =
    useGetContractByUserMutation();

  const [getContract, { data: actualContract }] = useLazyGetContractQuery();
  const [open, setOpen] = React.useState(false);

  const contractForCompanies = useMemo(() => {
    const companies: CompanyList = {};

    (contractList ?? []).forEach((item) => {
      const key = item?.company?.id || "";

      const contracts = companies?.[key]?.contracts ?? [];

      contracts.push(item);

      companies[key] = {
        contracts: passToAlphabeticOrder(contracts, "name"),
        name: item?.company?.name || "",
        id: Number(key),
      };
    });

    const result = Object.values(companies).map((item) => {
      return { name: item?.name, contracts: item?.contracts, id: item?.id };
    });

    const alphabeticCompany = passToAlphabeticOrder(result, "name");
    return alphabeticCompany;
  }, [contractList]);

  const changeContract = (contract: ContractModel) => {
    localStorage.setItem(STORAGE_TOKENS.CONTRACT_ID, contract.id.toString());
    window.location.reload();
  };

  useEffect(() => {
    const contractId = localStorage.getItem(STORAGE_TOKENS.CONTRACT_ID);
    if (contractId) {
      getContract({
        id: Number(contractId),
      });
    }
  }, [getContract]);

  useEffect(() => {
    if (actualContract) {
      setContract(actualContract);
    }
  }, [actualContract, setContract]);

  useEffect(() => {
    if (user) {
      getContractsList();
    }
  }, [getContractsList, user]);

  return (
    <>
      <Button onClick={() => setOpen(true)} variant={"outline"}>
        <p>{contract?.name}</p>
        <ArrowsCounterClockwise size={14} className="text-primary-500" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={translate("contract.searchLabel")} />
        <CommandList>
          <CommandEmpty>{translate("contract.emptyValue")}</CommandEmpty>
          {contractForCompanies.map((company) => {
            return (
              <CommandGroup heading={company.name}>
                {company?.contracts?.map((item) => (
                  <div
                    className="flex w-full font-bold cursor-pointer "
                    onClick={() => {
                      changeContract(item);
                    }}
                  >
                    <CommandItem
                      key={item?.name}
                      value={item?.name}
                      className="flex w-full"
                      onSelect={() => {
                        changeContract(item);
                      }}
                    >
                      {item.name}
                      <Check
                        className={cn(
                          "ml-auto h-4 w-4",
                          actualContract?.id === item?.id
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  </div>
                ))}
                <CommandSeparator />
              </CommandGroup>
            );
          })}
        </CommandList>
      </CommandDialog>
    </>
  );
};
