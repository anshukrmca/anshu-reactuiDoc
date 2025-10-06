import React, { useMemo, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../CustomeHooks/Hooks";
import {
  setHeaderColors,
  setMenuColors,
  setThemeBackground,
  setThemeColorMode,
  setThemePrimary,
} from "../Store/CommonStore/CommonSave_GlobalValSlice";
import { setisSidebarExpand, setisSidebarOpen } from "../Store/CommonStore/CommonGlobalValSlice";
import DynamicIcon from "../Components/Icons/DynamicIcon";
import GlobalSearch from "../pages/GlobalSearch";
import { toggleOffCanvace, ModalStackManager, useWindowSize } from "anshu-reactui";
import { useThemeSync } from "../CustomeHooks/useThemeSync";

const App_Header: React.FC = () => {
  const size = useWindowSize();
  const dispatch = useAppDispatch();
  const { CommonSave_GlobalValStore, CommonGlobalValStore } = useAppSelector((state) => state);
  const { isSidebarExpand, isSidebarOpen } = CommonGlobalValStore;
  useThemeSync();

  // Header styles
  const headerStyles = useMemo(
    () => ({
      background: CommonSave_GlobalValStore?.HeaderColors,
    }),
    [CommonSave_GlobalValStore?.HeaderColors]
  );

  const iconColor = CommonSave_GlobalValStore?.ThemePrimary;

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
        content: (
          <div className="border-b border-slate-500 relative">
            <GlobalSearch />
          </div>
        ),
        icon: <DynamicIcon name="IoSearch" size={20} color={iconColor} />,
      });
    }
  };

  useEffect(() => {
    if (size.width && size.width < 769) {
      ModalStackManager.closeModal("GlobalSearch");
    }
  }, [size.width]);

  // Theme toggle function
  const toggleTheme = useCallback(() => {
    const nextTheme = CommonSave_GlobalValStore?.ThemeColorMode === "light" ? "dark" : "light";
    dispatch(setThemeColorMode(nextTheme));
    dispatch(setHeaderColors(""));
    dispatch(setMenuColors(""));
    dispatch(setThemeBackground(""));
    if (nextTheme === "light") {
      dispatch(setThemePrimary("black"));
    } else if (nextTheme === "dark") {
      dispatch(setThemePrimary("white")); 
    }
  }, [CommonSave_GlobalValStore?.ThemeColorMode, dispatch]);

  return (
    <div
      className="w-full flex sm:flex-row items-center h-14 z-50 shadow-lg p-0 m-0 my-Background overflow-hidden transition-colors"
      style={headerStyles}
    >
      {/* Sidebar / Logo */}
      {CommonSave_GlobalValStore?.NavigationStyles === "Horizontal" ? (
        <Link to={"/"} className="flex gap-2 items-center p-2">
          <DynamicIcon name="FaCat" size={22} color={iconColor} />
          <span className="font-bold text-[clamp(0.75rem,2vw,1.25rem)] whitespace-nowrap">
             Anshu React UI
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
                Anshu React UI
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
            className="flex md:hidden items-center justify-center cursor-pointer border-l border-l-slate-300 p-2 px-3 hover:bg-gray-100/20"
            onClick={openGlobalSearchModal}
          >
            <DynamicIcon name="IoSearch" color={iconColor} size={18} />
          </li>

          {/* Language Icon */}
          <li className="hidden md:flex items-center justify-center cursor-pointer border-l border-l-slate-300 p-2 px-3 hover:bg-gray-100/20">
            <DynamicIcon name="LuLanguages" color={iconColor} size={20} />
          </li>

          {/* Theme toggle */}
          <li
            className="hidden md:flex items-center justify-center cursor-pointer border-l border-l-slate-300 p-2 px-3 hover:bg-gray-100/20"
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
            className="hidden md:flex items-center justify-center cursor-pointer border-l border-l-slate-300 p-2 px-3 hover:bg-gray-100/20"
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
