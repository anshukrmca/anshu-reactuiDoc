import React, { useState } from "react";
import { Button, Input, Dropdown, ProgressBar, InputDatePicker, toast, hexToRgba, Card } from "anshu-reactui";
import DynamicIcon from "../../../../Components/Icons/DynamicIcon";
import type { Task } from "../../../../Data/DataTypes";
import { useAppSelector } from "../../../../CustomeHooks/Hooks";



interface AddToDoFormProps extends Partial<Task> {
    onSave?: (task: Task) => void;
}

const AddToDoForm: React.FC<AddToDoFormProps> = (props) => {
    const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
    const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);

    const [formData, setFormData] = useState<Omit<Task, "id">>({
        title: props.title || "",
        status: props.status || "Not Started",
        dueDate: props.dueDate || "",
        priority: props.priority || "Medium",
        progress: props.progress || 0,
        checked: props.checked || false,
        assignedTo: props.assignedTo || "",
        assignedDate: props.assignedDate || "",
    });

    const handleChange = (key: keyof typeof formData, value: any) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = () => {
        if (!formData.title.trim()) {
            toast.error("Task title is required!")
            return;
        }
        const newTask: Task = {
            id: props.id || Date.now(),
            ...formData,
        };
        props.onSave?.(newTask);
    };

    return (
        <>
            <Card
                className="my-4 items-center shadow-none hover:shadow-none overflow-hidden my-Border p-4 my-Background"
                style={{
                    background: CommonSave_GlobalValStore.ThemeBackground && bgColor,
                }}
            >
                <div className="space-y-4 p-4">
                    <div className="flex items-center gap-2 my-4">
                        <DynamicIcon name="FaTasks" size={18} />
                        <h3 className="text-md font-semibold">Add New Task</h3>
                    </div>

                    {/* Title */}
                    <div>
                        <Input
                            label="Title"
                            placeholder="Enter task title"
                            value={formData.title}
                            onChange={(e) => handleChange("title", e.target.value)}
                            mand={true}
                        />
                    </div>

                    {/* assignedTo */}
                    <div>
                        <Input
                            label="Assigned To"
                            placeholder="Enter task Assigned To"
                            value={formData.assignedTo}
                            onChange={(e) => handleChange("assignedTo", e.target.value)}
                            mand={true}
                        />
                    </div>

                    {/* Status */}
                    <div>
                        <Dropdown
                            label="Status"
                            dataList={[
                                { id: "Not Started", name: "Not Started" },
                                { id: "In Progress", name: "In Progress" },
                                { id: "Completed", name: "Completed" },
                                { id: "Pending", name: "Pending" },
                            ]}
                            valueName="id"
                            valueLabel="name"
                            displayLabel="name"
                            Set_selectedData={formData.status}
                            Get_selectedData={(val) => { handleChange("status", val) }}
                            placeholder="Select status"
                        />
                    </div>

                    {/* assignedDate */}
                    <div>
                        <InputDatePicker
                            label="Assigned Date"
                            setvalue={formData.assignedDate}
                            getvalue={(val) => handleChange("assignedDate", val)}
                            placeholder="YYYY-MM-DD"
                            format="YYYY-MM-DD"
                        />
                    </div>

                    {/* Due Date */}
                    <div>
                        <InputDatePicker
                            label="Due Date"
                            setvalue={formData.dueDate}
                            getvalue={(val) => handleChange("dueDate", val)}
                            placeholder="YYYY-MM-DD"
                            format="YYYY-MM-DD"
                        />
                    </div>

                    {/* Priority */}
                    <div>
                        <Dropdown
                            label="Priority"
                            dataList={[
                                { id: "Low", name: "Low" },
                                { id: "Medium", name: "Medium" },
                                { id: "High", name: "High" },
                            ]}
                            valueName="id"
                            valueLabel="name"
                            displayLabel="name"
                            Set_selectedData={formData.priority}
                            Get_selectedData={(val) => { handleChange("priority", val) }}
                            placeholder="Select priority"
                        />
                    </div>

                    {/* Progress */}
                    <div>
                        <Input
                            label={`Progress (${formData.progress}%)`}
                            type="range"
                            min="0"
                            max="100"
                            value={formData.progress}
                            onChange={(e) => handleChange("progress", parseInt(e.target.value))}
                            className="w-full"
                        />
                        <ProgressBar
                            progress={formData.progress}
                            fillColor={
                                formData.progress < 50
                                    ? "bg-red-500"
                                    : formData.progress < 80
                                        ? "bg-amber-500"
                                        : "bg-green-500"
                            }
                            showPercentage={false}
                            height="h-2"
                        />
                    </div>

                    {/* Save Button */}
                    <div className="pt-2 flex justify-end">
                        <Button
                            variant="primary"
                            iconName={<DynamicIcon name="FaSave" size={16} color={CommonSave_GlobalValStore?.ThemePrimary} />}
                            onClick={handleSubmit}
                        >
                            Save Task
                        </Button>
                    </div>
                </div>
            </Card>
        </>

    );
};

export default AddToDoForm;
