import React, { useState, useMemo } from "react";
import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
    TableFooter,
    TableCaption,
} from "./Table ";
import { Input, Button } from "anshu-reactui";

// Column definition
export interface Column<T> {
    key: keyof T;
    label: string;
    sortable?: boolean;
    render?: (row: T) => React.ReactNode; // custom cell rendering
}

// Props for DataTable
export interface DataTableProps<T> {
    data: T[];
    columns: Column<T>[];
    caption?: string;
    striped?: boolean;
    bordered?: boolean;
    hoverable?: boolean;
    searchable?: boolean;
}

export function DataTable<T extends Record<string, any>>({
    data,
    columns,
    caption,
    striped = false,
    bordered = true,
    hoverable = true,
    searchable = true,
}: DataTableProps<T>) {
    const [searchValues, setSearchValues] = useState<Record<string, string>>({});
    const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: "asc" | "desc" } | null>(null);

    // Filtered and sorted data
    const filteredData = useMemo(() => {
        let filtered = data;

        // column-wise search
        if (searchable) {
            filtered = filtered.filter((row) =>
                columns.every((col) => {
                    const searchValue = searchValues[String(col.key)] || "";
                    return String(row[col.key])
                        .toLowerCase()
                        .includes(searchValue.toLowerCase());
                })
            );
        }

        // sort
        if (sortConfig) {
            filtered = [...filtered].sort((a, b) => {
                const aValue = a[sortConfig.key];
                const bValue = b[sortConfig.key];
                if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
                if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
                return 0;
            });
        }

        return filtered;
    }, [data, searchValues, sortConfig, columns, searchable]);

    const handleSort = (key: keyof T) => {
        if (!sortConfig || sortConfig.key !== key) {
            setSortConfig({ key, direction: "asc" });
        } else if (sortConfig.direction === "asc") {
            setSortConfig({ key, direction: "desc" });
        } else {
            setSortConfig(null);
        }
    };

    return (
        <div className="w-full">
            <Table striped={striped} bordered={bordered} hoverable={hoverable}>
                {caption && <TableCaption>{caption}</TableCaption>}
                
                <TableHeader>
                    <TableRow>
                        <TableCell>+</TableCell>
                        {columns.map((col) => (
                            <TableHead key={String(col.key)}>
                                <div className="flex flex-col gap-1">
                                    {searchable && (
                                        <input
                                            placeholder={`Search ${col.label}`}
                                            className="w-full border-b border-slate-400 dark:border-slate-600 p-2 focus:outline-0"
                                            value={searchValues[String(col.key)] || ""}
                                            onChange={(e) =>
                                                setSearchValues({ ...searchValues, [col.key]: e.target.value })
                                            }
                                        />
                                    )}
                                    <div
                                        className={`flex items-center justify-between cursor-pointer`}
                                        onClick={() => col.sortable && handleSort(col.key)}
                                    >
                                        <span>{col.label}</span>
                                        {sortConfig?.key === col.key && (
                                            <span>{sortConfig.direction === "asc" ? "↑" : "↓"}</span>
                                        )}
                                    </div>

                                </div>
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {filteredData.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            <TableCell>
                                <span className="text-lg">+</span>
                            </TableCell>
                            {columns.map((col) => (
                                <TableCell key={String(col.key)}>
                                    {col.render ? col.render(row) : row[col.key]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
