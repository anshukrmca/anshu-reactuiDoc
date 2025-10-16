import React, { useMemo, useRef, useState } from "react";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "./Table ";
import { Button, Input, Card } from "anshu-reactui";
import { Employee } from "../Data/DashboardData";
import DynamicIcon from "../../../Components/Icons/DynamicIcon";

// Utility to export CSV
const exportToCSV = (data: any[], filename = "data.csv") => {
  const csv = [
    Object.keys(data[0]).join(","),
    ...data.map((row) => Object.values(row).map((v) => `"${v}"`).join(",")),
  ].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
};

export function EmployeeDataTable() {
  const [search, setSearch] = useState("");
  const [sortCol, setSortCol] = useState<keyof typeof Employee[0] | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState(1);
  const rowsPerPage = 7;
  const tableRef = useRef<HTMLDivElement>(null!);


  const filteredData = useMemo(() => {
    const lower = search.toLowerCase();
    return Employee.filter(
      (e) =>
        e.name.toLowerCase().includes(lower) ||
        e.department.toLowerCase().includes(lower) ||
        e.position.toLowerCase().includes(lower) ||
        e.email.toLowerCase().includes(lower)
    );
  }, [search]);

  const sortedData = useMemo(() => {
    if (!sortCol) return filteredData;
    return [...filteredData].sort((a, b) => {
      const aVal = a[sortCol] ?? "";
      const bVal = b[sortCol] ?? "";
      if (aVal < bVal) return sortDir === "asc" ? -1 : 1;
      if (aVal > bVal) return sortDir === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortCol, sortDir]);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    return sortedData.slice(start, start + rowsPerPage);
  }, [sortedData, page]);

  const totalPages = Math.ceil(sortedData.length / rowsPerPage);

  const handleSort = (col: keyof typeof Employee[0]) => {
    if (sortCol === col) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else {
      setSortCol(col);
      setSortDir("asc");
    }
  };

  const handlePrint = () => {
    if (!tableRef.current) return;
    const printContent = tableRef.current.innerHTML;
    const newWindow = window.open("", "_blank", "width=800,height=600");
    newWindow!.document.write(`
      <html>
        <head>
          <title>Print Table</title>
          <style>
            body { font-family: sans-serif; padding: 20px; }
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #999; padding: 8px; text-align: left; }
            th { background-color: #eee; }
          </style>
        </head>
        <body>
          ${printContent}
        </body>
      </html>
    `);
    newWindow!.document.close();
    newWindow!.focus();
    newWindow!.print();
    newWindow!.close();
  };

  return (
    <Card className="p-6 border border-border bg-card rounded-xl">
      {/* ==== Toolbar ==== */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-5">
        <h3 className="text-lg font-semibold">Employee DataTable</h3>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <div className="relative w-full sm:w-[220px]">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <DynamicIcon name="FaSearch" />
            </div>
            <Input
              placeholder="Search..."
              value={search}
              onChange={(e) => {
                setPage(1);
                setSearch(e.target.value);
              }}
              className="pl-9 w-full"
            />
          </div>

          <Button
            variant="success"
            // outline
            light
            size="sm"
            onClick={() => exportToCSV(sortedData, "employees.csv")}
          >
            <DynamicIcon name="FaFileCsv" /> CSV
          </Button>
          <Button
            variant="warning"
            light
            size="sm"
            onClick={() => handlePrint()}
          >
            <DynamicIcon name="FaPrint" /> Print
          </Button>
        </div>
      </div>

      {/* ==== Table ==== */}
      <div ref={tableRef} className="overflow-x-auto">
        <Table striped hoverable bordered>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead
                onClick={() => handleSort("name")}
                className="cursor-pointer"
              >
                Name {sortCol === "name" && (sortDir === "asc" ? "▲" : "▼")}
              </TableHead>
              <TableHead
                onClick={() => handleSort("position")}
                className="cursor-pointer"
              >
                Position {sortCol === "position" && (sortDir === "asc" ? "▲" : "▼")}
              </TableHead>
              <TableHead
                onClick={() => handleSort("department")}
                className="cursor-pointer"
              >
                Department {sortCol === "department" && (sortDir === "asc" ? "▲" : "▼")}
              </TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Salary</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((e, i) => (
              <TableRow key={e.id}>
                <TableCell>{(page - 1) * rowsPerPage + i + 1}</TableCell>
                <TableCell>{e.name}</TableCell>
                <TableCell>{e.position}</TableCell>
                <TableCell>{e.department}</TableCell>
                <TableCell>{e.email}</TableCell>
                <TableCell>{e.status}</TableCell>
                <TableCell>{e.salary}</TableCell>
              </TableRow>
            ))}
            {paginatedData.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-4 text-muted-foreground">
                  No data found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* ==== Pagination ==== */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-5">
        <p className="text-sm text-muted-foreground">
          Showing {paginatedData.length} of {sortedData.length} entries
        </p>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Prev
          </Button>
          {[...Array(totalPages)].map((_, i) => (
            <Button
              key={i}
              size="sm"
              variant={i + 1 === page ? "default" : "outline"}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </Button>
          ))}
          <Button
            size="sm"
            variant="outline"
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </Card>
  );
}
