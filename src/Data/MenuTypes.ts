// -------------------- Interfaces --------------------

import type { ReactNode } from "react";

export interface MenuNode {
  id: number;
  icon?: ReactNode;
  label: string;
  link?: string;
  children?: MenuNode[];
}

export interface CategoryNode {
    id: number;
    icon?: ReactNode;
    label: string;
    lebel1id: string[];
}

// modal dataType 
export interface ModalItem {
  contentId: string;
  title?: string;
  icon?: string;
  iconSize?: string;
  iconRotateAngle?: string;
  width?: string;
  height?: string;
  props?: any;
}
