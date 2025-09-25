import React from "react";
import { Outlet } from "react-router-dom";
import App_Header from "./App_Header";
import App_Footer from "./App_Footer";
import DashBoardLayout from "./DashBoardLayout";
import ThemeSetting from "./ThemeSetting";
import HorizontalMenu from "./HorizontalMenu";
import { useAppSelector } from "../../CustomeHooks/Hooks";
import { hexToRgba, OffCanvace, ToastContainer, toggleOffCanvace,ModalStack } from "anshu-reactui";
import DynamicIcon from "../Icons/DynamicIcon";

const MainLayout: React.FC = () => {
  const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
  const isHorizontal = CommonSave_GlobalValStore?.NavigationStyles === "Horizontal";
  const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9) || "white";
  const padding = CommonSave_GlobalValStore?.HeaderPositions === 'Scrollable' ? '10px' : '120px';

  return (
    <>
      <ToastContainer />
      {/* Settings OffCanvas */}
      <OffCanvace
        id={"ThemeSettingOffCanvace"}
        size="400px"
        Theme={CommonSave_GlobalValStore?.ThemePrimary}
        style={{
          zIndex: 999999,
          backgroundColor: CommonSave_GlobalValStore.ThemeBackground,
        }}
      >
        <ThemeSetting />
      </OffCanvace>
      <ModalStack
        Theme={CommonSave_GlobalValStore?.ThemePrimary}
        className="rounded-md"
        style={{
          backgroundColor: CommonSave_GlobalValStore.ThemeBackground,
        }}
      />
      {/* Settings Floating Button */}
      <div
        className="fixed bg-white dark:bg-slate-900 text-black dark:text-white top-1/2 right-0 z-50 flex items-center justify-center w-12 h-12 shadow-lg rounded-l-xl cursor-pointer transform -translate-y-1/2 transition-all hover:scale-105"
        style={{ backgroundColor: bgColor }}
        onClick={() => toggleOffCanvace("ThemeSettingOffCanvace")}
      >
        <span className="animate-spin">
          <DynamicIcon name='CiSettings' color={CommonSave_GlobalValStore?.ThemePrimary} size={20} />
        </span>
      </div>



      {/* Layout Wrapper */}
      {isHorizontal ? (
        <div
          className="bg-white dark:bg-slate-900 text-black dark:text-white"
          style={{ backgroundColor: bgColor}}
        >
          <div
            className={`${CommonSave_GlobalValStore?.MenuPositions === "Scrollable" ||
              CommonSave_GlobalValStore?.HeaderPositions === "Scrollable"
              ? "z-10"
              : "fixed z-20"
              } w-full`}
          >
            <App_Header />
            <HorizontalMenu />
          </div>

          {/* Main content (flex-grow pushes footer down) */}
          <main
            className="max-w-screen p-2 w-full "
            style={{ paddingTop: padding, minHeight: "100vh" }}
          >
            <Outlet />
          </main>


          {/* Footer (sticks to bottom) */}
          <App_Footer />
        </div>


      ) : (
        <DashBoardLayout />
      )}
    </>
  );
};

export default MainLayout;
