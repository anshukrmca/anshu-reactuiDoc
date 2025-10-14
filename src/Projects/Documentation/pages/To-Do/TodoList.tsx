import React, { useEffect, useState } from "react";
import {
    Button,
    Card,
    DataTable,
    Dropdown,
    hexToRgba,
    ModalStackManager,
    ProgressBar,
    SweetAlert,
    toast,
    type Column
} from "anshu-reactui";
import mediaLogo from '../../../../assets/images/media-66.png';
import { useAppSelector } from "../../../../CustomeHooks/Hooks";
import DynamicIcon from "../../../../Components/Icons/DynamicIcon";
import AddToDoForm from "./AddToDoForm";
import type { Task } from "../../../../Data/DataTypes";

type FilterOption =
    | "Today"
    | "Yesterday"
    | "Last 7 Days"
    | "Last 30 Days"
    | "Last 6 Months"
    | "Last Years"
    | "";

const TodoList: React.FC = () => {
    const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
    const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);

    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, title: "Complete Project Proposal", status: "In Progress", dueDate: "2025-12-10", priority: "Medium", progress: 40, checked: false, assignedTo: "Alice", assignedDate: "2025-12-01" },
        { id: 2, title: "Client Meeting", status: "Not Started", dueDate: "2025-10-12", priority: "High", progress: 70, checked: true, assignedTo: "Bob", assignedDate: "2025-10-05" },
        { id: 3, title: "Research Market Trends", status: "Completed", dueDate: "2025-03-12", priority: "Low", progress: 62, checked: false, assignedTo: "Carol", assignedDate: "2025-03-05" },
        { id: 4, title: "Update Website Content", status: "Not Started", dueDate: "2025-04-18", priority: "Low", progress: 85, checked: false, assignedTo: "David", assignedDate: "2025-04-10" },
        { id: 5, title: "Team Meeting", status: "Pending", dueDate: "2025-05-22", priority: "Medium", progress: 55, checked: true, assignedTo: "Eve", assignedDate: "2025-05-15" },
        { id: 6, title: "Prepare Monthly Report", status: "Not Started", dueDate: "2025-06-28", priority: "High", progress: 96, checked: true, assignedTo: "Frank", assignedDate: "2025-06-20" },
    ]);


    const dropdownData = [
        { id: "1", name: "Today" },
        { id: "2", name: "Yesterday" },
        { id: "3", name: "Last 7 Days" },
        { id: "4", name: "Last 30 Days" },
        { id: "5", name: "Last 6 Months" },
        { id: "6", name: "Last Years" },
        { id: "", name: "All" },
    ];

    const [filterOption, setFilterOption] = useState<string>(""); // store id
    const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);
    const [deletedTaskId, setDeletedTaskId] = useState<number | null>(null);

    // =========================
    // Color Helpers
    // =========================
    const priorityColor = (priority: string) => {
        switch (priority) {
            case "High": return "btn-danger";
            case "Medium": return "btn-purple";
            default: return "btn-success";
        }
    };

    const statusColor = (status: string) => {
        switch (status) {
            case "Completed": return "text-orange-500";
            case "In Progress": return "text-blue-500";
            case "Not Started": return "text-green-500";
            default: return "text-purple-500";
        }
    };

    // =========================
    // Columns
    // =========================
    const columns: Column<Task>[] = [
        { key: "title", header: "Task Title", sortable: true },
        { key: "assignedTo", header: "Assigned To", sortable: true },
        { key: "status", header: "Status", sortable: true, render: (_, row) => <p className={statusColor(row.status)}>{row.status}</p> },
        { key: "dueDate", header: "Due Date", sortable: true },
        { key: "assignedDate", header: "Assigned Date", sortable: true },
        { key: "priority", header: "Priority", sortable: true, width: "120px", render: (_, row) => <Button className={`py-0 ${priorityColor(row.priority)}`}>{row.priority}</Button> },
        {
            key: "progress", header: "Progress", sortable: true, render: (_, row) => (
                <div className="flex gap-2 items-center">
                    <span className="text-[10px]">{row.progress}%</span>
                    <ProgressBar progress={row.progress} height="h-1" showPercentage={false} fillColor={`${row.progress < 50 ? "bg-red-500" : row.progress < 70 ? "bg-amber-500" : 'bg-green-500'}`} />
                </div>
            )
        },
        {
            key: "actions", header: "Actions", width: "20px", render: (_, row) => (
                <div className="flex gap-2">
                    <Button variant="primary" pill className="px-2 py-2 text-xs" onClick={() => handleEditTask(row)}>
                        <DynamicIcon name="FaEdit" />
                    </Button>
                    <Button variant="danger" pill className="px-2 py-2 text-xs" onClick={() => handleDeleteTask(row.id)}>
                        <DynamicIcon name="FaRegTrashAlt" />
                    </Button>
                </div>
            )
        },
    ];

    // =========================
    // Filter Logic
    // =========================
    const filteredTasksByOption = (option: FilterOption) => {
        const today = new Date();
        today.setHours(23, 59, 59, 999);

        let fromDate = new Date();
        fromDate.setHours(0, 0, 0, 0);

        switch (option) {
            case "Today":
                fromDate = new Date();
                fromDate.setHours(0, 0, 0, 0);
                break;
            case "Yesterday":
                fromDate = new Date();
                fromDate.setDate(fromDate.getDate() - 1);
                fromDate.setHours(0, 0, 0, 0);
                break;
            case "Last 7 Days":
                fromDate = new Date();
                fromDate.setDate(fromDate.getDate() - 6);
                fromDate.setHours(0, 0, 0, 0);
                break;
            case "Last 30 Days":
                fromDate = new Date();
                fromDate.setDate(fromDate.getDate() - 29);
                fromDate.setHours(0, 0, 0, 0);
                break;
            case "Last 6 Months":
                fromDate = new Date();
                fromDate.setMonth(fromDate.getMonth() - 6);
                fromDate.setHours(0, 0, 0, 0);
                break;
            case "Last Years":
                fromDate = new Date();
                fromDate.setFullYear(fromDate.getFullYear() - 1);
                fromDate.setHours(0, 0, 0, 0);
                break;
            default:
                fromDate = new Date(0); // all tasks
        }

        const filtered = tasks.filter(task => {
            const taskDate = new Date(task.dueDate);
            taskDate.setHours(0, 0, 0, 0);
            return taskDate >= fromDate && taskDate <= today;
        });

        setFilteredTasks(filtered);
    };

    // =========================
    // useEffect for Filter
    // =========================
    useEffect(() => {
        if (filterOption) {
            const selectedName = dropdownData.find(d => d.id === filterOption)?.name as FilterOption;
            filteredTasksByOption(selectedName);
        } else {
            setFilteredTasks(tasks);
        }
    }, [tasks, filterOption]);

    // =========================
    // Add/Edit/Delete Task
    // =========================
    const handleAddToDo = () => {
        ModalStackManager.openModal({
            title: "Create Task",
            contentId: "AddToDoForm",
            content: (
                <AddToDoForm
                    onSave={(newTask) => {
                        const newId = tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
                        setTasks(prev => [...prev, { ...newTask, id: newId }]);
                        ModalStackManager.closeModal("AddToDoForm");
                        toast.success("Task Added Successfully!");
                    }}
                />
            ),
            icon: <DynamicIcon name="IoIosAddCircleOutline" size={20} />,
        });
    };

    const handleEditTask = (task: Task) => {
        ModalStackManager.openModal({
            title: "Edit Task",
            contentId: `EditTaskForm-${task.id}`,
            content: (
                <AddToDoForm
                    {...task}
                    onSave={(updatedTask) => {
                        setTasks(prev => prev.map(t => t.id === updatedTask.id ? updatedTask : t));
                        ModalStackManager.closeModal(`EditTaskForm-${updatedTask.id}`);
                        toast.success("Task Updated Successfully!");
                    }}
                />
            ),
            icon: <DynamicIcon name="FaEdit" size={20} />,
        });
    };

    const handleDeleteTask = (taskId: number) => setDeletedTaskId(taskId);

    const confirmDelete = () => {
        if (deletedTaskId !== null) {
            setTasks(prev => prev.filter(t => t.id !== deletedTaskId));
            toast.success("Task Deleted Successfully!");
            setDeletedTaskId(null);
        }
    };

    return (
        <>
            {deletedTaskId !== null && (
                <SweetAlert
                    show
                    type="confirm"
                    title="Are you sure?"
                    message="You won’t be able to revert this!"
                    onConfirm={confirmDelete}
                    onClose={() => setDeletedTaskId(null)}
                />
            )}

            <div className="flex flex-col lg:flex-row w-full gap-4">
                {/* Main Content */}
                <div className="flex-1 min-w-0 py-3">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                        <h2 className="text-lg font-semibold">To Do List</h2>
                        <div className="w-full md:w-32">
                            <Dropdown
                                valueName="id"
                                valueLabel="name"
                                displayLabel="name"
                                Get_selectedData={(val: string) => setFilterOption(val)}
                                Set_selectedData={filterOption}
                                placeholder="↹  Filter"
                                dataList={dropdownData}
                            />
                        </div>
                    </div>

                    <Card className="my-4 items-center shadow-sm p-0 border rounded-lg my-Background my-Border" style={{ background: bgColor }}>
                        <DataTable
                            columns={columns}
                            data={filteredTasks}
                            initialPageSize={10}
                            pageSizeOptions={[10, 25, 50]}
                            searchable
                            Colsearchable
                            PrintBtn
                            CSVBtn
                            isPagination
                            ThemeColor="teal"
                            style={{ background: bgColor }}
                        />
                    </Card>
                </div>

                {/* Sidebar */}
                <div className="flex-shrink-0 w-full lg:w-[300px]">
                    <Card className="my-4 shadow-sm p-2 border rounded-lg my-Background my-Border" style={{ background: bgColor }}>
                        <div className="p-4 flex flex-col gap-4">
                            <Button variant="primary" onClick={handleAddToDo}>
                                <DynamicIcon name="IoIosAddCircleOutline" size={20} /> Create New Task
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
                                <p className="text-xs font-semibold text-gray-400 mt-3 mb-2">CATEGORIES</p>
                                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <li>🏠 Personal</li>
                                    <li>💼 Work</li>
                                    <li>💪 Health & Fitness</li>
                                    <li>🎯 Daily Goals</li>
                                    <li>💰 Financial Management</li>
                                </ul>
                            </div>

                            <div className="mt-2">
                                <img src={mediaLogo} alt="Task Illustration" className="w-full h-auto" />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>


        </>
    );
};

export default TodoList;
