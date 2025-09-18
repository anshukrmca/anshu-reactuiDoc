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
  ThemeColorMode: "Light" | "Dark";
  ThemeBackground: string;
  ThemePrimary: string;

  TextColor: string;

  HeaderColors: string;
  HeaderTextColor: string;
  MenuColors: string;
  MenuTextColor: string;

  HeaderCustom: boolean;
  MenuCustom: boolean;

  NavigationStyles: string;
  Directions: string;
  PageStyles: string;
  LayoutWidth: string;
  MenuPositions: string;
  HeaderPositions: string;
  MenuStyles: string;

  ActiveMenuGroups: number | null;
  ActiveMenuSubGroup: number | null;
  ActiveMenuSubOfSubGroup: number  | null;
  ActiveMenu: number | null;
}

/* ---------- Initial State ---------- */
const initialState: CommonSaveGlobalValState = {
  ActiveModuleID: "",
  ThemeColorMode: "Light",
  ThemeBackground: "white",
  ThemePrimary: "gray",

  TextColor: "",

  HeaderColors: "white",
  HeaderTextColor: "#000000",
  MenuColors: "white",
  MenuTextColor: "#000000",

  HeaderCustom: false,
  MenuCustom: false,

  NavigationStyles: "Vertical",
  Directions: "LTR",
  PageStyles: "Regular",
  LayoutWidth: "Full Width",
  MenuPositions: "Fixed",
  HeaderPositions: "Fixed",
  MenuStyles: "Menu Click",

  ActiveMenuGroups:null ,
  ActiveMenuSubGroup: null,
  ActiveMenuSubOfSubGroup: null,
  ActiveMenu:null,
};

/* ---------- Derived helpers ---------- */
function deriveTextAndIconFromBackground(state: CommonSaveGlobalValState) {
  const contrast = getContrastText(state.ThemeBackground);
  state.TextColor = contrast;
}

function deriveHeaderText(state: CommonSaveGlobalValState) {
  state.HeaderTextColor = getContrastText(state.HeaderColors || "#ffffff");
}

function deriveMenuText(state: CommonSaveGlobalValState) {
  state.MenuTextColor = getContrastText(state.MenuColors || "#ffffff");
}

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
    setThemeColorMode: (state, action: PayloadAction<"Light" | "Dark">) => {
      state.ThemeColorMode = action.payload;

      if (action.payload === "Light") {
        state.ThemeBackground = "white";
        state.TextColor = "#071c30";
        state.ThemePrimary = "#071c30";
      } else {
        state.ThemeBackground = "#071c30";
        state.TextColor = "white";
        state.ThemePrimary = "white";
      }

      if (!state.HeaderCustom) state.HeaderColors = state.ThemeBackground;
      if (!state.MenuCustom) state.MenuColors = state.ThemeBackground;

      state.HeaderTextColor = getContrastText(state.HeaderColors);
      state.MenuTextColor = getContrastText(state.MenuColors);

      if (typeof document !== "undefined") {
        document.documentElement.classList.toggle(
          "dark",
          action.payload === "Dark"
        );
      }
    },

    /* ---------- Header & Menu ---------- */
    setHeaderColors: (state, action: PayloadAction<string>) => {
      state.HeaderColors = action.payload;
      state.HeaderCustom = true;
      deriveHeaderText(state);
      autoFixPrimary(state);
      deriveTextAndIconFromBackground(state);
    },

    setMenuColors: (state, action: PayloadAction<string>) => {
      state.MenuColors = action.payload;
      state.MenuCustom = true;
      deriveMenuText(state);
      autoFixPrimary(state);
      deriveTextAndIconFromBackground(state);
    },

    resetHeaderToTheme: (state) => {
      state.HeaderCustom = false;
      state.HeaderColors = state.ThemeBackground;
      deriveHeaderText(state);
      autoFixPrimary(state);
      deriveTextAndIconFromBackground(state);
    },

    resetMenuToTheme: (state) => {
      state.MenuCustom = false;
      state.MenuColors = state.ThemeBackground;
      deriveMenuText(state);
      autoFixPrimary(state);
      deriveTextAndIconFromBackground(state);
    },

    setThemeBackground: (state, action: PayloadAction<string>) => {
      state.ThemeBackground = action.payload;
      state.HeaderColors = action.payload;
      state.MenuColors = action.payload;
      state.HeaderCustom = false;
      state.MenuCustom = false;
      deriveTextAndIconFromBackground(state);
      deriveHeaderText(state);
      deriveMenuText(state);
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
      deriveTextAndIconFromBackground(state);
    },

    /* ---------- Direct overrides ---------- */
    setTextColor: (state, action: PayloadAction<string>) => {
      state.TextColor = action.payload;
      state.HeaderTextColor = action.payload;
      state.MenuTextColor = action.payload;
    },
    /* ---------- Active menu markers ---------- */
    setActiveMenuGroups: (state, action: PayloadAction<number  | null>) => {
      state.ActiveMenuGroups = action.payload;
    },
    setActiveMenuSubGroup: (state, action: PayloadAction<number  | null>) => {
      state.ActiveMenuSubGroup = action.payload;
    },
    setActiveMenuSubOfSubGroup: (state, action: PayloadAction<number  | null>) => {
      state.ActiveMenuSubOfSubGroup = action.payload;
    },
    setActiveMenu: (state, action: PayloadAction<number | null>) => {
  state.ActiveMenu = action.payload;
}

    ,

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
  setTextColor,
  setActiveMenuGroups,
  setActiveMenuSubGroup,
  setActiveMenuSubOfSubGroup,
  setActiveMenu,
  resetCommonSaveGlobalVal,
} = CommonSave_GlobalValSlice.actions;


export default CommonSave_GlobalValSlice.reducer;