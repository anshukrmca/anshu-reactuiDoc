// -------------------- Interfaces --------------------

export interface SettingGroup {
  id: number;
  ThameSettingTypeId: number;
  type: "radio" | "color";
  title: string;
  items: string[];
}
