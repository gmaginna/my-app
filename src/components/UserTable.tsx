"use client";

import { useEffect, useState, useMemo } from "react";
import { useUserStore } from "../store/useUserStore";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  ColumnDef,
  SortingState,
  ColumnFiltersState,
} from "@tanstack/react-table";
import { Trash2, ArrowUpDown } from "lucide-react";

export default function UserTable() {
  const { users, fetchUsers, deleteUser } = useUserStore();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const columns: ColumnDef<(typeof users)[0]>[] = [
    // { accessorKey: "id", header: "ID" },
    { accessorKey: "username", header: "Username" },
    {
      accessorKey: "name",
      header: ({ column }) => (
        <button
          className="w-full flex items-center justify-center gap-2 cursor-pointer"
          onClick={() => setSorting((prev) => [{ id: "name", desc: prev[0]?.id === "name" ? !prev[0].desc : false }])}
        >
          Nome <ArrowUpDown className="w-4 h-4" />
        </button>
      ),
    },
    {
      accessorKey: "email",
      header: ({ column }) => (
        <button
          className="w-full flex items-center justify-center gap-2 cursor-pointer"
          onClick={() => setSorting((prev) => [{ id: "email", desc: prev[0]?.id === "email" ? !prev[0].desc : false }])}
        >
          Email <ArrowUpDown className="w-4 h-4" />
        </button>
      ),
    },
    {
      id: "actions",
      header: "Ações",
      cell: ({ row }) => (
        <button
          className="flex items-center justify-center gap-2 bg-red-500 text-white px-3 py-2 rounded-lg shadow-md hover:bg-red-600 transition cursor-pointer mx-auto"
          onClick={() => deleteUser(row.original.id)}
        >
          <Trash2 className="w-4 h-4" />
        </button>
      ),
    },
  ];

  const table = useReactTable({
    data: users,
    columns,
    state: { sorting, columnFilters },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
  });

  return (
    <div className="mt-6 w-full max-w-4xl bg-gray-800 text-gray-300 p-6 rounded-lg shadow-lg overflow-x-auto">
      <div className="flex justify-end mb-4">
        <input
          type="text"
          placeholder="Filtrar por Nome..."
          value={String(columnFilters.find((f) => f.id === "name")?.value || "")}
          onChange={(e) => {
            const value = e.target.value;
            setColumnFilters((prev) => [...prev.filter((f) => f.id !== "name"), { id: "name", value }]);
          }}
          className="bg-gray-700 text-white border border-gray-600 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
        />
      </div>

      {users.length === 0 ? (
        <p className="text-gray-400 text-center py-6">Nenhum usuário encontrado.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="bg-gray-700 text-white">
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="border border-gray-600 p-3 text-center">
                    {header.isPlaceholder
                      ? null
                      : typeof header.column.columnDef.header === "function"
                      ? header.column.columnDef.header(header.getContext())
                      : header.column.columnDef.header}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row, index) => (
              <tr key={row.id} className={index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="border border-gray-600 p-3 text-center">
                    {typeof cell.column.columnDef.cell === "function" ? cell.column.columnDef.cell(cell.getContext()) : cell.getValue()}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
