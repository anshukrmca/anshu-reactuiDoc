import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ModalItem } from "../../Data/MenuTypes";



// Define the state type
export interface CommonGlobalValState {   // ✅ export the interface
  isSidebarOpen: boolean;
  isSidebarExpand: boolean;
  ModalStack: ModalItem[];
  FullOpenModel: boolean;
  FullModelTitle: string;
  FullModelIcon: string;
  FullModelIconColor: string;
  FullModelIconSize: string;
  FullModelIconRotateAngle: string;
  FullModelWidth: string;
  FullModelHeight: string;
}

// Initial state
const initialState: CommonGlobalValState = {
  isSidebarOpen: true,
  isSidebarExpand: true,
  ModalStack: [],
  FullOpenModel: false,
  FullModelTitle: "Model Title",
  FullModelIcon: "IoIosOptions",
  FullModelIconColor: "",
  FullModelIconSize: "20",
  FullModelIconRotateAngle: "0",
  FullModelWidth: "max-w-2xl",
  FullModelHeight: "max-h-[500px]",
};

const MAX_MODAL_STACK = 5;


const CommonGlobalValSlice = createSlice({
  name: "CommonGlobalValSlice",
  initialState,
  reducers: {
    setisSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
    setisSidebarExpand: (state, action: PayloadAction<boolean>) => {
      state.isSidebarExpand = action.payload;
    },
    // for modal stack management
    PushFullModel: (state, action: PayloadAction<ModalItem>) => {
      const exists = state.ModalStack.some(
        (m) => m.contentId === action.payload.contentId
      );
      if (!exists) {
        if (state.ModalStack.length >= MAX_MODAL_STACK) {
          state.ModalStack.shift();
        }
        state.ModalStack.push({
          ...action.payload,
        });
      }
    },
    PopFullModel: (state, action: PayloadAction<string | undefined>) => {
      const idToRemove = action.payload;
      if (idToRemove) {
        state.ModalStack = state.ModalStack.filter(
          (modal) => modal.contentId !== idToRemove
        );
      } else {
        state.ModalStack.pop();
      }
    },
    ClearFullModel: (state) => {
      state.ModalStack = [];
    },
    setFullOpenModel: (state, action: PayloadAction<boolean>) => {
      state.FullOpenModel = action.payload;
    },
    setFullModelTitle: (state, action: PayloadAction<string>) => {
      state.FullModelTitle = action.payload;
    },
    setFullModelIcon: (state, action: PayloadAction<string>) => {
      state.FullModelIcon = action.payload;
    },
    setFullModelIconColor: (state, action: PayloadAction<string>) => {
      state.FullModelIconColor = action.payload;
    },
    setFullModelIconSize: (state, action: PayloadAction<string>) => {
      state.FullModelIconSize = action.payload;
    },
    setFullModelIconRotateAngle: (state, action: PayloadAction<string>) => {
      state.FullModelIconRotateAngle = action.payload;
    },
    setFullModelWidth: (state, action: PayloadAction<string>) => {
      state.FullModelWidth = action.payload;
    },
    setFullModelHeight: (state, action: PayloadAction<string>) => {
      state.FullModelHeight = action.payload;
    },
  },
});

// Export actions
export const {
  setisSidebarOpen,
  setisSidebarExpand,
  PushFullModel,
  PopFullModel,
  ClearFullModel,
  setFullOpenModel,
  setFullModelTitle,
  setFullModelIcon,
  setFullModelIconColor,
  setFullModelIconSize,
  setFullModelIconRotateAngle,
  setFullModelWidth,
  setFullModelHeight,
} =
  CommonGlobalValSlice.actions;

// Export reducer
export default CommonGlobalValSlice.reducer;
