import React, { useState } from "react";
import type { AppState } from "../Store/Store";
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
} from "../Store/CommonStore/CommonSave_GlobalValSlice";
import { useAppDispatch, useAppSelector } from "../CustomeHooks/Hooks";
import DynamicIcon from "../Components/Icons/DynamicIcon";
import { ThemeSettingData } from "../Data/MenuData";

interface TabItem {
  id: number;
  name: string;
  icon: string;
}

const Tabs: TabItem[] = [
  { id: 1, name: "Theme Styles", icon: "CiSettings" },
  { id: 2, name: "Theme Colors", icon: "CiPalette" },
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
    if (title === "Theme Color Mode") {
      dispatch(setHeaderColors(""));
      dispatch(setMenuColors(""));
      dispatch(setThemeBackground(""));
      dispatch(setThemePrimary(value === "light" ? "black" : "white"));
    }
    const action = radioActions[title];
    if (action) dispatch(action(value));
  };

  const handleColorChange = (title: string, color: string) => {
    const action = colorActions[title];
    if (!action) return;
    const themeMode = store.ThemeColorMode?.toLowerCase();
    const selected = color.toLowerCase();
    const isInvalid =
      (themeMode === "light" && selected === "white") ||
      (themeMode === "dark" && (selected === "black" || selected === "dark")) ||
      (themeMode === "dark" && title === "Theme Background" && selected === "white");
    if (isInvalid) {
      console.warn(`⚠️ Invalid color selection for ${themeMode} mode: ${color}`);
      return;
    }
    dispatch(action(color));
  };



  const isChecked = (title: string, value: string) => {
    const key = storeKeyMap[title];
    return store[key] === value;
  };

  return (
    <div
      className="flex flex-col h-screen pt-4"
      style={{
        background: store.ThemeBackground,
      }}
    >
      {/* Header */}
      <header className="px-4 text-sm md:text-lg font-semibold shrink-0">
        Switcher
      </header>

      {/* Tabs */}
      <div className="flex justify-between mt-2 shadow-md">
        {Tabs.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`text-[12px] md:text-sm w-full p-2 px-6 cursor-pointer font-semibold flex gap-2 items-center justify-center
            ${activeTab === item.id ? "border my-Border  text-red-400" : ""}`}
          >
            {item.name}
          </button>
        ))}
      </div>
      {/* Body (scrollable) */}
      <main className="flex-1 overflow-y-auto px-4 mt-3 pb-20">
        {/* Body Content */}
        {ThemeSettingData.filter((g) => g.ThameSettingTypeId === activeTab).map((group) => (
          <div key={group.id} className="mb-2">
            <p className="text-[12px] md:text-sm font-semibold mb-2">{group.title} :</p>
            <div className="flex flex-wrap gap-4 px-4 py-3 rounded-md border my-Border">
              {group.type === "color"
                ? group.items.map((color, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleColorChange(group.title, color)}
                    className={`flex items-center justify-center rounded-full w-8 h-8 border my-Border cursor-pointer transition-all ${isChecked(group.title, color)
                      ? "ring-2 ring-offset-1 ring-green-500 scale-100"
                      : "hover:scale-105 hover:shadow"
                      }`}
                    style={{ background: color }}
                    title={color}
                  >
                    {isChecked(group.title, color) && (
                      <DynamicIcon name="FaCheck" color={store.ThemePrimary} />
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
                      className="accent-red-500 dark:accent-green-500"
                    />
                    <span className="text-[12px] uppercase">{option}</span>
                  </label>
                ))}
            </div>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="p-2 shadow-2xl border my-Border flex justify-center items-center gap-4 shrink-0">
        <a href="https://anshuportfolioo.netlify.app/" target="_blank" className="py-1 px-8 bg-green-500 text-white rounded-md cursor-pointer">Portfolio</a>
        <button
          onClick={() => dispatch(resetCommonSaveGlobalVal())}
          className="py-1 px-8 bg-red-500 text-white rounded-md cursor-pointer"
        >
          Reset
        </button>
      </footer>
    </div>
  );


};

export default ThemeSetting;
