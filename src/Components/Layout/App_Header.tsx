import React, { useMemo, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import useWindowSize from "../../CustomeHooks/useWindowSize";
import { useAppDispatch, useAppSelector } from "../../CustomeHooks/Hooks";
import { hexToRgba, ModalStackManager, toggleOffCanvace } from "anshu-reactui";
import { setThemeColorMode } from "../../Store/CommonStore/CommonSave_GlobalValSlice";
import { setisSidebarExpand, setisSidebarOpen } from "../../Store/CommonStore/CommonGlobalValSlice";
import DynamicIcon from "../Icons/DynamicIcon";
import GlobalSearch from "../../pages/GlobalSearch";

const App_Header: React.FC = () => {
  const size = useWindowSize();
  const dispatch = useAppDispatch();
  const { CommonSave_GlobalValStore, CommonGlobalValStore } = useAppSelector((state) => state);
  const { isSidebarExpand, isSidebarOpen } = CommonGlobalValStore;

  // Memoized styles
  const headerStyles = useMemo(
    () => ({
      backgroundColor: CommonSave_GlobalValStore?.HeaderColors,
      color: CommonSave_GlobalValStore?.HeaderTextColor,
    }),
    [CommonSave_GlobalValStore?.HeaderColors, CommonSave_GlobalValStore?.HeaderTextColor]
  );

  const borderStyle = useMemo(
    () => ({
      borderColor: hexToRgba(CommonSave_GlobalValStore?.HeaderTextColor || "#000", 0.2),
    }),
    [CommonSave_GlobalValStore?.HeaderTextColor]
  );

  const iconColor = CommonSave_GlobalValStore?.ThemePrimary || "#000";

  // Callbacks
  const toggleSidebar = useCallback(() => {
    if (size.width && size.width < 769) {
      dispatch(setisSidebarOpen(!isSidebarOpen));
    } else {
      dispatch(setisSidebarExpand(!isSidebarExpand));
    }
  }, [size.width, isSidebarOpen, isSidebarExpand, dispatch]);

  const toggleTheme = useCallback(() => {
    const nextTheme = CommonSave_GlobalValStore?.ThemeColorMode === "Light" ? "Dark" : "Light";
    dispatch(setThemeColorMode(nextTheme));
  }, [CommonSave_GlobalValStore?.ThemeColorMode, dispatch]);



  const openGlobalSearchModal = () => {
    ModalStackManager.openModal({
      contentId: "GlobalSearch",
      title: "Search any things...",
      content: <div className="border-b border-slate-500"><GlobalSearch /></div>,
      icon: <DynamicIcon name="IoSearch" size={20} color={iconColor} />,
    });
  };


  useEffect(() => {
    if (size.width && size.width < 769) {
      ModalStackManager.closeModal("GlobalSearch")
    }
  }, [size.width])

  return (
    <div
      className="w-full flex sm:flex-row items-center h-14 border-b shadow-lg p-0 m-0"
      style={headerStyles}
    >

      {/* Sidebar / Logo */}
      {CommonSave_GlobalValStore?.NavigationStyles === "Horizontal" ?
        <Link to={"/"} className="flex gap-2 items-center p-2">
          <i className="fa-solid fa-cat" style={{ color: iconColor }}></i>
          <span className="font-bold text-[clamp(0.75rem,2vw,1.25rem)] whitespace-nowrap">
            Meow Dashboard
          </span>
        </Link>
        :
        <>
          <div onClick={toggleSidebar} className="cursor-pointer p-2">
            <i className="fa-solid fa-bars" style={{ color: iconColor }}></i>
          </div>
          <span className="md:hidden">
            <Link to={"/"} className="flex gap-2 items-center p-2">
              <i className="fa-solid fa-cat" style={{ color: iconColor }}></i>
              <span className="font-bold text-[clamp(0.75rem,2vw,1.25rem)] whitespace-nowrap">
                Meow Dashboard
              </span>
            </Link>
          </span>
        </>
      }

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
            style={borderStyle}
            onClick={openGlobalSearchModal}
          >
            <DynamicIcon name="IoSearch" color={iconColor} size={18} />
          </li>

          {/* Language Icon */}
          <li
            className="hidden md:flex items-center justify-center cursor-pointer border-l p-2 px-3 hover:bg-gray-100/20"
            style={borderStyle}
          >
            <DynamicIcon name="LuLanguages" color={iconColor} size={20} />
          </li>

          {/* Theme toggle */}
          <li
            className="hidden md:flex items-center justify-center cursor-pointer border-l p-2 px-3 hover:bg-gray-100/20"
            style={borderStyle}
            onClick={toggleTheme}
          >
            {CommonSave_GlobalValStore?.ThemeColorMode !== "Light" ? (
              <DynamicIcon name="IoPartlySunnyOutline" color={iconColor} size={20} />
            ) : (
              <DynamicIcon name="CiCloudMoon" color={iconColor} size={25} />
            )}
          </li>
          {/* Settings toggle */}
          <li
            className="hidden md:flex items-center justify-center cursor-pointer border-l p-2 px-3 hover:bg-gray-100/20"
            style={borderStyle}
            onClick={() => toggleOffCanvace("ThemeSettingOffCanvace")}
          >
            <span className="animate-spin">
              <DynamicIcon name='CiSettings' color={iconColor} size={20} />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App_Header;