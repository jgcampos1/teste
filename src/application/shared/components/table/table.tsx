import { ArrowClockwise, MagnifyingGlass } from "@phosphor-icons/react";
import {
  ColumnDef,
  PaginationState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  Button,
  InterfaceButton,
} from "~/application/shared/components/button";
import { TextInput } from "~/application/shared/components/text-input";
import { useTranslation } from "~/application/shared/hooks/use-translation";
import { FetcherParamsType } from "~/application/shared/types/fetcher-params-type";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/application/shared/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/application/shared/ui/table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  emptyMessage?: string;
  searchMode?: boolean;
  onFetchData: (paginationModel: FetcherParamsType) => void;
  primaryButton?: InterfaceButton;
  showFetcherButton?: boolean;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  searchMode = true,
  emptyMessage,
  primaryButton,
  showFetcherButton = true,
  onFetchData,
}: DataTableProps<TData, TValue>) {
  const { translate } = useTranslation("common");

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  useEffect(() => {
    onFetchData({
      page: pagination.pageIndex,
      pageSize: pagination.pageSize,
    });
  }, [pagination, onFetchData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    pageCount: Math.ceil(data.length / pagination.pageSize), // Update based on total data length
    manualPagination: true,
    onPaginationChange: setPagination,
    state: { pagination },
  });

  const methods = useForm();

  return (
    <div className="flex flex-col flex-1 gap-2 mt-10">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex gap-2 items-end">
          <FormProvider {...methods}>
            {searchMode && (
              <TextInput
                className="w-max mt-0 m-0"
                icon={{ start: MagnifyingGlass }}
                name="search"
                placeholder={translate("searchLabel")}
              />
            )}
          </FormProvider>
          {showFetcherButton && (
            <Button
              onClick={() => onFetchData(pagination)}
              variant="ghost"
              size="icon"
            >
              <ArrowClockwise size={22} className="text-primary-500" />
            </Button>
          )}
        </div>
        {primaryButton && <Button {...primaryButton} />}
      </div>
      <div className="rounded-md border">
        <Table className="overflow-scroll">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  {emptyMessage || translate("emptyValue")}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <Pagination className="flex w-full justify-end">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() =>
                  setPagination((prev) => ({
                    ...prev,
                    pageIndex: Math.max(prev.pageIndex - 1, 0),
                  }))
                }
              />
            </PaginationItem>
            {[...Array(table.getPageCount()).keys()].map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  onClick={() =>
                    setPagination((prev) => ({ ...prev, pageIndex: page }))
                  }
                >
                  {page + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() =>
                  setPagination((prev) => ({
                    ...prev,
                    pageIndex: Math.min(
                      prev.pageIndex + 1,
                      table.getPageCount() - 1
                    ),
                  }))
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
