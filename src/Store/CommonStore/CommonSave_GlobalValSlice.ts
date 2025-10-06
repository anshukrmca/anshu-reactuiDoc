import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/* ---------- Helpers ---------- */
const NAMED: Record<string, string> = { white: "#ffffff", black: "#000000" };

type RGB = { r: number; g: number; b: number };

function parseToRGB(input: string): RGB {
  const val = (input || "").toString().trim().toLowerCase();
  const hex = NAMED[val] || val;

  if (/^#([0-9a-f]{3}){1,2}$/i.test(hex)) {
    let c = hex.substring(1).split("");
    if (c.length === 3) c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    const n = Number("0x" + c.join(""));
    return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
  }

  const m = hex.match(/^rgba?\(([^)]+)\)$/);
  if (m) {
    const parts = m[1].split(",").map((x) => parseFloat(x));
    return { r: parts[0], g: parts[1], b: parts[2] };
  }

  return { r: 255, g: 255, b: 255 }; // fallback white
}

function perceivedBrightness({ r, g, b }: RGB): number {
  return (r * 299 + g * 587 + b * 114) / 1000;
}

export function getContrastText(bgColor: string): string {
  const rgb = parseToRGB(bgColor);
  const bright = perceivedBrightness(rgb);
  return bright < 128 ? "#ffffff" : "#000000";
}
/* ---------- State Type ---------- */
export interface CommonSaveGlobalValState {
  ActiveModuleID: string;
  ThemeColorMode: "light" | "dark";
  ThemeBackground: string;
  ThemePrimary: string;
  HeaderColors: string;
  MenuColors: string;
  HeaderCustom: boolean;
  MenuCustom: boolean;

  NavigationStyles: string;
  Directions: string;
  PageStyles: string;
  LayoutWidth: string;
  MenuPositions: string;
  HeaderPositions: string;
  MenuStyles: string;
}

/* ---------- Initial State ---------- */
const initialState: CommonSaveGlobalValState = {
  ActiveModuleID: "",
  ThemeColorMode: "dark",
  ThemeBackground: "",
  ThemePrimary: "gray",
  HeaderColors: "",
  MenuColors: "",
  HeaderCustom: false,
  MenuCustom: false,
  NavigationStyles: "Vertical",
  Directions: "LTR",
  PageStyles: "Regular",
  LayoutWidth: "Full Width",
  MenuPositions: "Fixed",
  HeaderPositions: "Fixed",
  MenuStyles: "Menu Click",
};

/* ---------- Derived helpers ---------- */

/* ---------- Auto-fix ThemePrimary conflicts ---------- */
function autoFixPrimary(state: CommonSaveGlobalValState) {
  const headerIsWhite = state.HeaderColors.toLowerCase() === "white";
  const menuIsWhite = state.MenuColors.toLowerCase() === "white";
  const headerIsBlack = state.HeaderColors.toLowerCase() === "black";
  const menuIsBlack = state.MenuColors.toLowerCase() === "black";

  const primaryLower = (state.ThemePrimary || "").toLowerCase();

  if (primaryLower === "white" && (headerIsWhite || menuIsWhite)) {
    state.ThemePrimary = "black";
  } else if (primaryLower === "black" && (headerIsBlack || menuIsBlack)) {
    state.ThemePrimary = "white";
  }
}

/* ---------- Slice ---------- */
const CommonSave_GlobalValSlice = createSlice({
  name: "CommonSave_GlobalValSlice",
  initialState,
  reducers: {
    setActiveModuleID: (state, action: PayloadAction<string>) => {
      state.ActiveModuleID = action.payload;
    },
    setNavigationStyles: (state, action: PayloadAction<string>) => {
      state.NavigationStyles = action.payload;
    },
    setDirections: (state, action: PayloadAction<string>) => {
      state.Directions = action.payload;
    },
    setPageStyles: (state, action: PayloadAction<string>) => {
      state.PageStyles = action.payload;
    },
    setLayoutWidth: (state, action: PayloadAction<string>) => {
      state.LayoutWidth = action.payload;
    },
    setMenuPositions: (state, action: PayloadAction<string>) => {
      state.MenuPositions = action.payload;
    },
    setHeaderPositions: (state, action: PayloadAction<string>) => {
      state.HeaderPositions = action.payload;
    },
    setMenuStyles: (state, action: PayloadAction<string>) => {
      state.MenuStyles = action.payload;
    },

    /* ---------- Theme mode ---------- */
    setThemeColorMode: (state, action: PayloadAction<"light" | "dark">) => {
      state.ThemeColorMode = action.payload;
      if (!state.HeaderCustom) state.HeaderColors = state.ThemeBackground;
      if (!state.MenuCustom) state.MenuColors = state.ThemeBackground;
      if (typeof document !== "undefined") {
        document.documentElement.classList.toggle(
          "dark",
          action.payload === "dark"
        );
      }
    },

    /* ---------- Header & Menu ---------- */
    setHeaderColors: (state, action: PayloadAction<string>) => {
      state.HeaderColors = action.payload;
      state.HeaderCustom = true;
      autoFixPrimary(state);
    },

    setMenuColors: (state, action: PayloadAction<string>) => {
      state.MenuColors = action.payload;
      state.MenuCustom = true;
      autoFixPrimary(state);
    },

    resetHeaderToTheme: (state) => {
      state.HeaderCustom = false;
      state.HeaderColors = state.ThemeBackground;
      autoFixPrimary(state);
    },

    resetMenuToTheme: (state) => {
      state.MenuCustom = false;
      state.MenuColors = state.ThemeBackground;
      autoFixPrimary(state);
    },

    setThemeBackground: (state, action: PayloadAction<string>) => {
      state.ThemeBackground = action.payload;
      state.HeaderColors = action.payload;
      state.MenuColors = action.payload;
      state.HeaderCustom = false;
      state.MenuCustom = false;
      autoFixPrimary(state);
    },

    setThemePrimary: (state, action: PayloadAction<string>) => {
      const newPrimary = (action.payload || "").toLowerCase();
      const headerIsWhite = state.HeaderColors.toLowerCase() === "white";
      const menuIsWhite = state.MenuColors.toLowerCase() === "white";
      const headerIsBlack = state.HeaderColors.toLowerCase() === "black";
      const menuIsBlack = state.MenuColors.toLowerCase() === "black";

      if (
        (newPrimary === "white" && (headerIsWhite || menuIsWhite)) ||
        (newPrimary === "black" && (headerIsBlack || menuIsBlack))
      ) {
        return;
      }

      state.ThemePrimary = action.payload;
    },
    resetCommonSaveGlobalVal: () => initialState,
  },
});

/* ---------- Exports ---------- */
export const {
  setActiveModuleID,
  setThemeColorMode,
  setNavigationStyles,
  setDirections,
  setPageStyles,
  setLayoutWidth,
  setMenuPositions,
  setHeaderPositions,
  setMenuStyles,
  setHeaderColors,
  setMenuColors,
  resetHeaderToTheme,
  resetMenuToTheme,
  setThemeBackground,
  setThemePrimary,
  resetCommonSaveGlobalVal,
} = CommonSave_GlobalValSlice.actions;


export default CommonSave_GlobalValSlice.reducer;