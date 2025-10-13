// -------------------- Interfaces --------------------

export interface SettingGroup {
  id: number;
  ThameSettingTypeId: number;
  type: "radio" | "color";
  title: string;
  items: string[];
}


export interface Task {
    id: number;
    title: string;
    status: "Not Started" | "In Progress" | "Completed" | "Pending";
    dueDate: string;
    priority: "Low" | "Medium" | "High";
    progress: number;
    checked: boolean;
    assignedTo?: string,
    assignedDate?: string,
}