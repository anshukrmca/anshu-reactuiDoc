import React, { useEffect, useState } from "react";
import type { AppState } from "../../Store/Store";
import {
  setThemeColorMode,
  setNavigationStyles,
  setDirections,
  setPageStyles,
  setLayoutWidth,
  setMenuPositions,
  setHeaderPositions,
  setMenuStyles,
  resetCommonSaveGlobalVal,
  setMenuColors,
  setHeaderColors,
  setThemePrimary,
  setThemeBackground,
} from "../../Store/CommonStore/CommonSave_GlobalValSlice";
import { useAppDispatch, useAppSelector } from "../../CustomeHooks/Hooks";
import DynamicIcon from "../Icons/DynamicIcon";

interface TabItem {
  id: number;
  name: string;
  icon: string;
}

interface SettingGroup {
  id: number;
  ThameSettingTypeId: number;
  type: "radio" | "color";
  title: string;
  items: string[];
}

const Tabs: TabItem[] = [
  { id: 1, name: "Theme Styles", icon: "CiSettings" },
  { id: 2, name: "Theme Colors", icon: "CiPalette" },
];

const ThemeSettingData: SettingGroup[] = [
  { id: 1, ThameSettingTypeId: 1, type: "radio", title: "Theme Color Mode", items: ["Light", "Dark"] },
  { id: 2, ThameSettingTypeId: 1, type: "radio", title: "Directions", items: ["LTR", "RTL"] },
  { id: 3, ThameSettingTypeId: 1, type: "radio", title: "Navigation Styles", items: ["Vertical", "Horizontal"] },
  { id: 5, ThameSettingTypeId: 1, type: "radio", title: "Page Styles", items: ["Regular", "Classic", "Modern"] },
  { id: 6, ThameSettingTypeId: 1, type: "radio", title: "Layout Width Styles", items: ["Full Width", "Boxed"] },
  { id: 7, ThameSettingTypeId: 1, type: "radio", title: "Menu Positions", items: ["Fixed", "Scrollable"] },
  { id: 8, ThameSettingTypeId: 1, type: "radio", title: "Header Positions", items: ["Fixed", "Scrollable"] },
  { id: 9, ThameSettingTypeId: 2, type: "color", title: "Menu Colors", items: ["white", "black", "#2998f2", "#20f7d3"] },
  { id: 10, ThameSettingTypeId: 2, type: "color", title: "Header Colors", items: ["white", "black", "#2998f2", "#20f7d3"] },
  { id: 11, ThameSettingTypeId: 2, type: "color", title: "Theme Primary", items: ["white", "black", "#773cd3", "red", "#0bcfd9", "#810cf5", "#07f59e", "#a4ba3f"] },
  { id: 12, ThameSettingTypeId: 2, type: "color", title: "Theme Background", items: ["#05666b", "#1E293B", "#202164", "#02613e"] },
];

const radioActions: Record<string, any> = {
  "Theme Color Mode": setThemeColorMode,
  "Directions": setDirections,
  "Navigation Styles": setNavigationStyles,
  "Vertical & Horizontal Menu Styles": setMenuStyles,
  "Page Styles": setPageStyles,
  "Layout Width Styles": setLayoutWidth,
  "Menu Positions": setMenuPositions,
  "Header Positions": setHeaderPositions,
};

const colorActions: Record<string, any> = {
  "Menu Colors": setMenuColors,
  "Header Colors": setHeaderColors,
  "Theme Primary": setThemePrimary,
  "Theme Background": setThemeBackground,
};

const storeKeyMap: Record<string, keyof AppState["CommonSave_GlobalValStore"]> = {
  "Theme Color Mode": "ThemeColorMode",
  "Directions": "Directions",
  "Navigation Styles": "NavigationStyles",
  "Vertical & Horizontal Menu Styles": "MenuStyles",
  "Page Styles": "PageStyles",
  "Layout Width Styles": "LayoutWidth",
  "Menu Positions": "MenuPositions",
  "Header Positions": "HeaderPositions",
  "Menu Colors": "MenuColors",
  "Header Colors": "HeaderColors",
  "Theme Primary": "ThemePrimary",
  "Theme Background": "ThemeBackground",
};

const ThemeSetting: React.FC = () => {
  const dispatch = useAppDispatch();
  const store = useAppSelector((s) => s.CommonSave_GlobalValStore);
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleRadioChange = (title: string, value: string) => {
    const action = radioActions[title];
    if (action) dispatch(action(value));
  };

  const handleColorChange = (title: string, color: string) => {
    const action = colorActions[title];
    if (!action) return;

    // Auto-contrast logic for ThemePrimary
    if (title === "Theme Primary") {
      const menuIsWhite = store.MenuColors?.toLowerCase() === "white";
      const headerIsWhite = store.HeaderColors?.toLowerCase() === "white";
      const menuIsBlack = store.MenuColors?.toLowerCase() === "black";
      const headerIsBlack = store.HeaderColors?.toLowerCase() === "black";
      const colorLower = color.toLowerCase();

      if ((colorLower === "white" && (menuIsWhite || headerIsWhite)) ||
        (colorLower === "black" && (menuIsBlack || headerIsBlack))) {
        return;
      }
    }

    // Auto-adjust if header/menu changes
    if (title === "Header Colors" || title === "Menu Colors") {
      const newColorLower = color.toLowerCase();
      const primaryLower = store.ThemePrimary?.toLowerCase();

      if (newColorLower === "white" && primaryLower === "white") {
        dispatch(setThemePrimary("black"));
        return;
      }
      if (newColorLower === "black" && primaryLower === "black") {
        dispatch(setThemePrimary("white"));
        return;
      }
    }

    dispatch(action(color));
  };

  const isChecked = (title: string, value: string) => {
    const key = storeKeyMap[title];
    return store[key] === value;
  };

  // Tailwind dark mode toggle
  useEffect(() => {
    document.documentElement.classList.toggle("dark", store.ThemeColorMode === "Dark");
  }, [store.ThemeColorMode]);

  return (
    <div
      className="flex flex-col h-screen"
      style={{
        backgroundColor: store.ThemeBackground,
        color: store.TextColor,
      }}
    >
      {/* Header */}
      <header className="px-4 text-lg font-semibold shrink-0">
        Switcher
      </header>

      {/* Tabs */}
      <div className="flex justify-between mt-2 shadow-md">
        {Tabs.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full p-2 px-6 cursor-pointer font-semibold flex gap-2 items-center justify-center
            ${activeTab === item.id ? "bg-red-500/20 text-red-600 border" : ""}`}
            style={{ color: activeTab === item.id ? undefined : store.TextColor }}
          >
            {item.name}
          </button>
        ))}
      </div>
      {/* Body (scrollable) */}
      <main className="flex-1 overflow-y-auto px-4 mt-2 pb-20">
        {/* Body Content */}
          {ThemeSettingData.filter((g) => g.ThameSettingTypeId === activeTab).map((group) => (
            <div key={group.id} className="mb-2">
              <p className="text-[14px] font-semibold mb-2 px-4">{group.title} :</p>

              <div className="flex flex-wrap gap-6 px-4 py-3 rounded-md border">
                {group.type === "color"
                  ? group.items.map((color, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleColorChange(group.title, color)}
                      className={`flex items-center justify-center rounded-full w-10 h-10 border-2 cursor-pointer transition-all ${isChecked(group.title, color)
                          ? "ring-2 ring-offset-1 ring-green-500 scale-100"
                          : "hover:scale-105 hover:shadow"
                        }`}
                      style={{ backgroundColor: color }}
                      title={color}
                    >
                      {isChecked(group.title, color) && (
                        <DynamicIcon name="FaCheck" color={store.TextColor}/>
                      )}
                    </div>
                  ))
                  : group.items.map((option, idx) => (
                    <label key={idx} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name={group.title}
                        checked={isChecked(group.title, option)}
                        onChange={() => handleRadioChange(group.title, option)}
                        className="accent-green-500"
                      />
                      <span className="text-sm">{option}</span>
                    </label>
                  ))}
              </div>
            </div>
          ))}
      </main>

      {/* Footer */}
      <footer className="p-2 mb-4 shadow-2xl border-t-2 flex justify-center items-center gap-4 shrink-0">
        <a className="py-1 px-8 bg-green-500 text-white rounded-md">Portfolio</a>
        <button
          onClick={() => dispatch(resetCommonSaveGlobalVal())}
          className="py-1 px-8 bg-red-500 text-white rounded-md"
        >
          Reset
        </button>
      </footer>
    </div>
  );


};

export default ThemeSetting;
