import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Typography } from "@utils/typography";
import { useState } from "react";
import "./tableComp.css";

interface TableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  heading?: string;
  goTo?: string;
  goToText?: string;
  withSearch?: boolean;
  withPagination?: boolean;
  selectInput?: boolean;
}

export default function TableComp<TData, TValue>({
  data,
  columns,
}: TableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState<string>("");
  setGlobalFilter
  setColumnFilters
  const table = useReactTable({
    data,
    state: {
      globalFilter,
      columnFilters,
    },
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  // const handleSearch = (query: string) => {
  //   setGlobalFilter(query);
  // };
  // const handleFilterChange = (newFilter: { id: string; value: string }[]) => {
  //   setCurrentFilter(newFilter);
  //   setColumnFilters((prev) => [...prev, ...newFilter]);
  //   console.log(newFilter);
  // };
  return (
    <div className=" w-full overflow-x-auto border rounded-md">
      <table className="w-full">
        <thead className="bg-white border-b">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="py-4  whitespace-nowrap bg-[#F9FAFB]"
                >
                  <Typography variant="body-s" fontWeight="bold" color="wood9">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </Typography>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="w-full">
          {table.getRowModel().rows.map((row) => (
            <tr className="bg-white [&:not(last_of_type)]:" key={row.id}>
              {row.getVisibleCells().map((cell, cellIndex) => (
                <td
                  key={cell.id}
                  className={`py-4 ${
                    cellIndex < 2 ? "border-b" : ""
                  } first-of-type:px-4 last-of-type:px-4 pr-4 `}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
}
