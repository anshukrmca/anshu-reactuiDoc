import React, { useMemo, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import useWindowSize from "../../CustomeHooks/useWindowSize";
import { useAppDispatch, useAppSelector } from "../../CustomeHooks/Hooks";
import {
  setHeaderColors,
  setMenuColors,
  setThemeColorMode,
} from "../../Store/CommonStore/CommonSave_GlobalValSlice";
import { setisSidebarExpand, setisSidebarOpen } from "../../Store/CommonStore/CommonGlobalValSlice";
import DynamicIcon from "../Icons/DynamicIcon";
import GlobalSearch from "../../pages/GlobalSearch";
import { toggleOffCanvace, ModalStackManager } from "anshu-reactui";

const App_Header: React.FC = () => {
  const size = useWindowSize();
  const dispatch = useAppDispatch();
  const { CommonSave_GlobalValStore, CommonGlobalValStore } = useAppSelector((state) => state);
  const { isSidebarExpand, isSidebarOpen } = CommonGlobalValStore;

  // Detect system theme
  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  // Initialize theme once on mount
  useEffect(() => {
    const savedTheme = CommonSave_GlobalValStore?.ThemeColorMode;
    const initialTheme = savedTheme || getSystemTheme();
    dispatch(setThemeColorMode(initialTheme));
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []); // run once on mount

  // Apply theme class on Redux changes
  useEffect(() => {
    if (!CommonSave_GlobalValStore) return;
    document.documentElement.classList.toggle(
      "dark",
      CommonSave_GlobalValStore.ThemeColorMode === "dark"
    );
  }, [CommonSave_GlobalValStore?.ThemeColorMode]);

  // Listen to system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      const currentTheme = CommonSave_GlobalValStore?.ThemeColorMode;
      // Only update if user has not set manual theme
      if (!currentTheme) {
        dispatch(setThemeColorMode(e.matches ? "dark" : "light"));
      }
    };
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [dispatch, CommonSave_GlobalValStore?.ThemeColorMode]);

  // Header styles
  const headerStyles = useMemo(
    () => ({
      backgroundColor: CommonSave_GlobalValStore?.HeaderColors,
    }),
    [CommonSave_GlobalValStore?.HeaderColors]
  );
  const iconColor = CommonSave_GlobalValStore?.ThemePrimary || "#000";

  // Sidebar toggle
  const toggleSidebar = useCallback(() => {
    if (size.width && size.width < 769) {
      dispatch(setisSidebarOpen(!isSidebarOpen));
    } else {
      dispatch(setisSidebarExpand(!isSidebarExpand));
    }
  }, [size.width, isSidebarOpen, isSidebarExpand, dispatch]);

  // Global search modal
  const openGlobalSearchModal = () => {
    if (size.width && size.width < 769) {
      ModalStackManager.openModal({
        contentId: "GlobalSearch",
        title: "Search anything...",
        content: <div className="border-b border-slate-500 relative"><GlobalSearch /></div>,
        icon: <DynamicIcon name="IoSearch" size={20} color={iconColor} />,
      });
    }
  };

  useEffect(() => {
    if (size.width && size.width < 769) {
      ModalStackManager.closeModal("GlobalSearch");
    }
  }, [size.width]);

  // Theme toggle
  const toggleTheme = useCallback(() => {
    const nextTheme = CommonSave_GlobalValStore?.ThemeColorMode === "light" ? "dark" : "light";
    dispatch(setThemeColorMode(nextTheme));
    dispatch(setHeaderColors(''))
    dispatch(setMenuColors(''))
  }, [CommonSave_GlobalValStore?.ThemeColorMode, dispatch]);

  return (
    <div
      className="w-full flex sm:flex-row items-center h-14 z-50 shadow-lg p-0 m-0 bg-white dark:bg-slate-900 text-black dark:text-white overflow-hidden"
      style={headerStyles}
    >
      {/* Sidebar / Logo */}
      {CommonSave_GlobalValStore?.NavigationStyles === "Horizontal" ? (
        <Link to={"/"} className="flex gap-2 items-center p-2">
          <DynamicIcon name="FaCat" size={22} color={iconColor} />
          <span className="font-bold text-[clamp(0.75rem,2vw,1.25rem)] whitespace-nowrap">
            Meow Dashboard
          </span>
        </Link>
      ) : (
        <>
          <div onClick={toggleSidebar} className="cursor-pointer p-2">
            <DynamicIcon name="RiMenu2Fill" size={20} color={iconColor} />
          </div>
          <span className="md:hidden">
            <Link to={"/"} className="flex gap-2 items-center p-2">
              <DynamicIcon name="FaCat" size={22} color={iconColor} />
              <span className="font-bold text-[clamp(0.75rem,2vw,1.25rem)] whitespace-nowrap">
                Meow Dashboard
              </span>
            </Link>
          </span>
        </>
      )}

      {/* SearchBox */}
      <div className="flex-1 p-2">
        <div className="hidden md:block w-96 border-b">
          <GlobalSearch />
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center pr-4">
        <ul className="flex h-16 list-none m-0 p-0">
          {/* Mobile Search Icon */}
          <li
            className="flex md:hidden items-center justify-center cursor-pointer border-l p-2 px-3 hover:bg-gray-100/20"
            onClick={openGlobalSearchModal}
          >
            <DynamicIcon name="IoSearch" color={iconColor} size={18} />
          </li>

          {/* Language Icon */}
          <li
            className="hidden md:flex items-center justify-center cursor-pointer border-l p-2 px-3 hover:bg-gray-100/20"
          >
            <DynamicIcon name="LuLanguages" color={iconColor} size={20} />
          </li>

          {/* Theme toggle */}
          <li
            className="hidden md:flex items-center justify-center cursor-pointer border-l p-2 px-3 hover:bg-gray-100/20"
            onClick={toggleTheme}
          >
            {CommonSave_GlobalValStore?.ThemeColorMode === "dark" ? (
              <DynamicIcon name="IoPartlySunnyOutline" color={iconColor} size={20} />
            ) : (
              <DynamicIcon name="CiCloudMoon" color={iconColor} size={25} />
            )}
          </li>

          {/* Settings toggle */}
          <li
            className="hidden md:flex items-center justify-center cursor-pointer border-l p-2 px-3 hover:bg-gray-100/20"
            onClick={() => toggleOffCanvace("ThemeSettingOffCanvace")}
          >
            <span className="animate-spin">
              <DynamicIcon name="CiSettings" color={iconColor} size={20} />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App_Header;
