import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


// Define the state type
export interface CommonGlobalValState {   // ✅ export the interface
  isSidebarOpen: boolean;
  isSidebarExpand: boolean;
}

// Initial state
const initialState: CommonGlobalValState = {
  isSidebarOpen: true,
  isSidebarExpand: true,
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
  },
});

// Export actions
export const {
  setisSidebarOpen,
  setisSidebarExpand,
} =
  CommonGlobalValSlice.actions;

// Export reducer
export default CommonGlobalValSlice.reducer;
