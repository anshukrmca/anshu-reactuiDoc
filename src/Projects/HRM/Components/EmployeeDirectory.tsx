import React from "react";
import DynamicIcon from "../../../Components/Icons/DynamicIcon";
import { Employee } from "../Data/DashboardData";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./Table ";
import { Card, Button, Badge, Input } from "anshu-reactui";
import { DataTable } from "./DataTable";

// Define color mapping for employee status
const statusColorMap: Record<string, string> = {
    green: "bg-green-600/20 text-green-500 border border-green-500",
    blue: "bg-blue-600/20 text-blue-500 border border-blue-500",
    red: "bg-red-600/20 text-red-500 border border-red-500",
};

interface EmployeeD {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
}

const employeesdata: EmployeeD[] = [
  { id: 1, name: "Alice", position: "Manager", department: "HR", email: "alice@xyz.com" },
  { id: 2, name: "Bob", position: "Developer", department: "IT", email: "bob@xyz.com" },
  { id: 3, name: "Charlie", position: "Designer", department: "Design", email: "charlie@xyz.com" },
];

export function EmployeeDirectory() {

const columns: { key: keyof EmployeeD; label: string }[] = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "position", label: "Position" },
    { key: "department", label: "Department" },
    { key: "email", label: "Email" },
];


    return (
        <>
        <DataTable data={employeesdata} columns={columns}/>
      
        <Card className="p-6 border my-Border rounded-xl shadow-sm">
            {/* ===== Header Section ===== */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <h3 className="text-lg font-semibold text-foreground">
                    Employee Directory
                </h3>

                <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
                    <div className="relative w-full sm:w-[220px]">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                            <DynamicIcon name="FaSearch" />
                        </div>
                        <Input
                            placeholder="Search here..."
                            className="pl-9 w-full border border-slate-200 dark:border-slate-600 rounded-md"
                        />
                    </div>

                    <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90 gap-2 whitespace-nowrap"
                    >
                        Sort By
                        <DynamicIcon name="FaChevronDown" />
                    </Button>

                    <Button
                        size="sm"
                        className="bg-success hover:bg-success/90 whitespace-nowrap"
                    >
                        + Add
                    </Button>
                </div>
            </div>

            {/* ===== Table Section ===== */}
            <div className="overflow-x-auto -mx-6 px-6">
                <Table striped hoverable bordered>
                    <TableHeader>
                        <TableRow className="border-b my-Border hover:bg-transparent">
                            {[
                                "S.No",
                                "Employee ID",
                                "Employee Name",
                                "Position",
                                "Department",
                                "Email",
                                "Status",
                                "Contact",
                                "Salary",
                                "Action",
                            ].map((heading, i) => (
                                <TableHead
                                    key={i}
                                    className="text-muted-foreground font-semibold whitespace-nowrap"
                                >
                                    {heading}
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {Employee.map((employee, index) => {
                            const colorClass = statusColorMap[employee.statusColor?.trim().toLowerCase() as keyof typeof statusColorMap] || statusColorMap.blue;
                            return (
                                (
                                    <TableRow
                                        key={employee.id}
                                        className="border-b my-Border hover:bg-accent/50 transition-colors"
                                    >
                                        <TableCell className="font-medium text-center w-[60px]">
                                            {String(index + 1).padStart(2, "0")}
                                        </TableCell>
                                        <TableCell className="text-primary font-medium">
                                            {employee.employeeId}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
                                                    {employee.avatar}
                                                </div>
                                                <span className="font-medium">{employee.name}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-muted-foreground">
                                            {employee.position}
                                        </TableCell>
                                        <TableCell className="text-muted-foreground">
                                            {employee.department}
                                        </TableCell>
                                        <TableCell className="text-muted-foreground whitespace-nowrap">
                                            {employee.email}
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="danger" className={`${colorClass} text-xs font-medium px-2 py-0.2 whitespace-nowrap`} >
                                                {employee.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-muted-foreground whitespace-nowrap">
                                            {employee.contact}
                                        </TableCell>
                                        <TableCell className="font-semibold">
                                            {employee.salary}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <Button
                                                    variant="primary"
                                                    size="sm"
                                                    className="h-8 w-8 flex items-center justify-center"
                                                >
                                                    <DynamicIcon name="FaEdit" />
                                                </Button>
                                                <Button
                                                    variant="danger"
                                                    size="sm"
                                                    className="h-8 w-8 flex items-center justify-center"
                                                >
                                                    <DynamicIcon name="FaTrash" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                )
                            )
                        })}
                    </TableBody>
                </Table>
            </div>

            {/* ===== Pagination Section ===== */}
            <div className="flex flex-col sm:flex-row items-center justify-between mt-6 pt-4 border-t my-Border gap-3">
                <p className="text-sm text-muted-foreground">
                    Showing <span className="font-semibold text-foreground">7</span> Entries
                </p>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" disabled>
                        Prev
                    </Button>
                    <Button variant="default" size="sm" className="bg-primary text-white">
                        1
                    </Button>
                    <Button variant="outline" size="sm">
                        2
                    </Button>
                    <Button variant="outline" size="sm">
                        Next
                    </Button>
                </div>
            </div>
        </Card>
          </>
    );
}
