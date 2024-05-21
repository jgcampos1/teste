// This type is used to define the shape of our data.

import { ColumnDef } from "@tanstack/react-table";

// You can use a Zod schema here if you want.
export type Projects = {
  id: number;
  name: string;
  value: number;
};

export const columns: ColumnDef<Projects>[] = [
  {
    accessorKey: "id",
    header: "ID",
    size: 400,
    minSize: 200,
    maxSize: 200,
    enableColumnFilter: true,
    enableSorting: true,
    enableResizing: false,
  },
  {
    accessorKey: "name",
    header: "Name",
    minSize: 200,
  },
  {
    accessorKey: "value",
    header: "Value",
    minSize: 200,
    cell: (cell) => {
      return `R$ ${cell.row.original.value}`;
    },
  },
];
