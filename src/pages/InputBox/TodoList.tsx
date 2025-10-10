import { Button, Card, DataTable, Dropdown, hexToRgba, ProgressBar, type Column } from "anshu-reactui/lib";
import React, { useState } from "react";
import mediaLogo from '../../assets/images/media-66.png'
import { useAppSelector } from "../../CustomeHooks/Hooks";

interface Task {
    id: number;
    title: string;
    status: "Not Started" | "In Progress" | "Completed" | "Pending";
    dueDate: string;
    priority: "Low" | "Medium" | "High";
    progress: number;
    checked: boolean;
}

const TodoList: React.FC = () => {
    const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
    const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);
    const [filterData, setfilterData] = useState("")


    const [tasks, setTasks] = useState<Task[]>([
        {
            id: 1,
            title: "Complete Project Proposal",
            status: "In Progress",
            dueDate: "2024-03-10",
            priority: "Medium",
            progress: 40,
            checked: false,
        },
        {
            id: 2,
            title: "Client Meeting",
            status: "Not Started",
            dueDate: "2024-03-15",
            priority: "High",
            progress: 70,
            checked: true,
        },
        {
            id: 3,
            title: "Research Market Trends",
            status: "Completed",
            dueDate: "2024-03-12",
            priority: "Low",
            progress: 62,
            checked: false,
        },
        {
            id: 4,
            title: "Update Website Content",
            status: "Not Started",
            dueDate: "2024-03-18",
            priority: "Low",
            progress: 85,
            checked: false,
        },
        {
            id: 5,
            title: "Team Meeting",
            status: "Pending",
            dueDate: "2024-03-22",
            priority: "Medium",
            progress: 55,
            checked: true,
        },
        {
            id: 6,
            title: "Prepare Monthly Report",
            status: "Not Started",
            dueDate: "2024-03-28",
            priority: "High",
            progress: 96,
            checked: true,
        },
    ]);

    const columns: Column<Task>[] = [
        { key: "title", header: "Task Title",sortable:true },
        {
            key: "status", header: "Status",sortable:true,
            render: (_, row) => (
                <p className={`${statusColor(row.status)}`}>{row?.status}</p>
            )
        },
        {
            key: "dueDate", header: "Due Date",sortable:true

        },
        {
            key: "priority", header: "Priority",sortable:true,
            width: "120px",
            render: (_, row) => (
                <div className="flex gap-2">
                    <Button className={`py-0  ${priorityColor(row.priority)}`}>{row.priority}</Button>
                </div>
            ),
        },
        {
            key: "progress", header: "Progress",sortable:true,
            render: (_, row) => (
                <div className="flex gap-2">
                    <span className="text-[10px]">{row.progress}%</span>
                    <ProgressBar progress={row.progress} height="h-1" showPercentage={false}
                        fillColor={`
                    ${row.progress < 50 ? "bg-red-500" : row.progress < 70 ? "bg-amber-500" : 'bg-green-500'}`} />
                </div>
            ),
        },
        {
            key: "actions",
            header: "Actions",
            width: "20px",
            render: (_, row) => (
                <div className="flex gap-2">
                    <button className="px-2 py-1 bg-blue-500 text-white rounded text-xs" onClick={() => alert("Edit: " + JSON.stringify(row, null, 2))}>Edit</button>
                    <button className="px-2 py-1 bg-red-500 text-white rounded text-xs" onClick={() => console.log("Delete:", row)}>Delete</button>
                </div>
            ),
        },
    ];

    const priorityColor = (priority: string) => {
        switch (priority) {
            case "High":
                return "btn-danger";
            case "Medium":
                return "btn-purple";
            default:
                return "btn-success";
        }
    };

    const statusColor = (status: string) => {
        switch (status) {
            case "Completed":
                return "text-orange-500";
            case "In Progress":
                return "text-blue-500";
            case "Not Started":
                return "text-green-500";
            default:
                return "text-purple-500";
        }
    };

    return (
        <>
            <div className="flex gap-2">
                {/* Left - Main Table */}
                <div className="flex-1 py-3">
                    <div className="flex justify-between items-center mb-4 ">
                        <h2 className="text-lg font-semibold">To Do List</h2>
                        <div className="flex gap-2 justify-between items-center">
                            <div className="w-32">
                                <Dropdown
                                    // label="Category Group Options"
                                    valueName="id"
                                    valueLabel="name"
                                    displayLabel="name"
                                    Get_selectedData={setfilterData}
                                    Set_selectedData={filterData}
                                    placeholder="↹  Filter "
                                    dataList={[
                                        { id: "1", name: "Option A", type: "Type 1" },
                                    ]} />
                            </div>
                          
                        </div>
                    </div>
                    <Card
                        className="my-4 items-center shadow-sm p-0 overflow-hidden my-Border my-Background"
                        style={{
                            background: CommonSave_GlobalValStore.ThemeBackground && bgColor,
                        }}
                    >
                        <DataTable
                            columns={columns}
                            data={tasks}
                            initialPageSize={10}
                            pageSizeOptions={[10, 25, 50]}
                            searchable={true}
                            Colsearchable={true}
                            PrintBtn={true}
                            CSVBtn={true}
                            isPagination={true}
                            ThemeColor={"teal"}
                            ClassName="bg-white dark:bg-slate-800 text-black dark:text-white"
                            style={{
                                background: CommonSave_GlobalValStore.ThemeBackground && bgColor,
                            }}
                        />
                    </Card>
                </div>

                {/* Right Sidebar */}
                <Card
                    className="my-4 lg:w-[300px] h-fit shadow-sm items-center overflow-hidden my-Border p-2 my-Background"
                    style={{
                        background: CommonSave_GlobalValStore.ThemeBackground && bgColor,
                    }}
                >
                    <div className="p-4 flex flex-col gap-4">
                        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium flex items-center justify-center gap-2">
                            Create New Task
                        </Button>

                        <div>
                            <p className="text-xs font-semibold text-gray-400 mb-2">TASKS</p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex justify-between text-gray-700 dark:text-gray-300">
                                    <span>All Tasks</span>
                                    <span className="text-xs bg-gray-100 dark:bg-slate-600 text-black dark:text-white px-2 py-0.5 rounded-full">
                                        {tasks.length}
                                    </span>
                                </li>
                                <li>⭐ Starred</li>
                                <li>⏸️ On Hold</li>
                                <li>🗑️ Trash</li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-xs font-semibold text-gray-400 mt-3 mb-2">
                                CATEGORIES
                            </p>
                            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                <li>🏠 Personal</li>
                                <li>💼 Work</li>
                                <li>💪 Health & Fitness</li>
                                <li>🎯 Daily Goals</li>
                                <li>💰 Financial Management</li>
                            </ul>
                        </div>

                        <div className="mt-2">
                            <img
                                src={mediaLogo}
                                alt="Task Illustration"
                                className="w-full"
                                height={10}
                            />
                        </div>
                    </div>
                </Card>
            </div>
        </>
    );
};

export default TodoList;
