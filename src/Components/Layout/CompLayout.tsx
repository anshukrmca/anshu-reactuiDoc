import React from "react";
import { Outlet } from "react-router-dom";
import App_Header from "./App_Header";
import App_Footer from "./App_Footer";
import { useAppSelector } from "../../CustomeHooks/Hooks";
import { hexToRgba} from "anshu-reactui";
import CompDashBoardLayout from "./CompDashBoardLayout";
import { CompHorizontalMenuData } from "../../Data/MenuData";
import HorizontalMenuBar from "./HorizontalMenuBar";

const MainLayout: React.FC = () => {
  const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
  const isHorizontal = CommonSave_GlobalValStore?.NavigationStyles === "Horizontal";
  const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9) || "white";
  const padding = CommonSave_GlobalValStore?.HeaderPositions === 'Scrollable' ? '10px' : '120px';

  return (
    <>
    <div className="bg-white dark:bg-slate-900 text-black dark:text-white">

      {/* Layout Wrapper */}
      {isHorizontal ? (
        <div
          // className="bg-white dark:bg-slate-900 text-black dark:text-white"
          // style={{ backgroundColor: bgColor}}
        >
          <div
            className={`${CommonSave_GlobalValStore?.MenuPositions === "Scrollable" ||
              CommonSave_GlobalValStore?.HeaderPositions === "Scrollable"
              ? "z-10"
              : "fixed z-20"
              } w-full`}
          >
            <App_Header />
            <HorizontalMenuBar Data={CompHorizontalMenuData} />
          </div>

          {/* Main content (flex-grow pushes footer down) */}
          <main
            className="max-w-screen p-2 w-full "
            style={{ paddingTop: padding, minHeight: "100vh" }}
          >
            <Outlet />
          </main>
          <App_Footer />
        </div>
      ) : (
        <CompDashBoardLayout />
      )}
    </div>
    </>
  );
};

export default MainLayout;
