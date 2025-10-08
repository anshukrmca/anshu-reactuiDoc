import React, { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import App_Header from "../../Layouts/App_Header";
import App_Footer from "../../Layouts/App_Footer";
import "../../assets/CSS/DashBoardLayout.css";
import SideBarMenu from "../../Components/Menu/SideBarMenu";
import { useAppDispatch, useAppSelector } from "../../CustomeHooks/Hooks";
import { hexToRgba, Loading, useWindowSize } from "anshu-reactui/lib";
import { setisSidebarOpen } from "../../Store/CommonStore/CommonGlobalValSlice";
import { DocMenuCategories, DocSidebarMenuData } from "../../Data/MenuData";
import BreadcrumbContainer from "../../Layouts/BreadcrumbContainer";

const DocDashBoardLayout: React.FC = () => {
  const size = useWindowSize();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { CommonSave_GlobalValStore, CommonGlobalValStore } = useAppSelector((state) => state);

  const { isSidebarExpand, isSidebarOpen } = CommonGlobalValStore;
  const isHeaderFixed = CommonSave_GlobalValStore?.HeaderPositions === "Fixed";
  const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9) || "white";
  // Responsive sidebar open/close
  useEffect(() => {
    if ((size.width ?? window.innerWidth) < 769) {
      dispatch(setisSidebarOpen(false));
    } else {
      dispatch(setisSidebarOpen(true));
    }
  }, [size.width, dispatch]);

  return (
    <div
      className="overflow-x-hidden my-Background"
      style={{ background: CommonSave_GlobalValStore?.ThemeBackground && bgColor }}
    >
      {/* Sidebar */}
      <div
        className="sidebar relative border-r border-slate-200 dark:border-slate-600"
        style={{
          zIndex: 999,
          marginLeft: (size.width ?? window.innerWidth) < 769 ? (isSidebarOpen ? "0px" : "-100%") : "0px",
          width: (size.width ?? window.innerWidth) >= 769 ? (isSidebarExpand ? "270px" : "70px") : "270px",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <SideBarMenu MenuData={DocSidebarMenuData} CategoriesData={DocMenuCategories} />
      </div>

      {/* Main content area */}
      <div
        className="main-container flex flex-col min-h-screen"
        style={{
          marginLeft: (size.width ?? window.innerWidth) >= 769 ? (isSidebarExpand ? "270px" : "70px") : "0px",
          width:
            (size.width ?? window.innerWidth) >= 769
              ? `calc(100% - ${isSidebarExpand ? "270px" : "70px"})`
              : "100%",
          transition: "all 0.3s ease-in-out",
        }}
      >
        {/* Header */}
        <div
          className={isHeaderFixed ? "fixed top-0" : "relative"}
          style={{
            zIndex: 99,
            width:
              isHeaderFixed && (size.width ?? window.innerWidth) >= 769
                ? `calc(100% - ${isSidebarExpand ? "270px" : "70px"})`
                : "100%",
            transition: "all 0.3s ease-in-out",
            background: bgColor,
          }}
        >
          <App_Header />
        </div>

        {/* Content */}
        <div
          className="flex flex-col flex-1"
          key={location.pathname}
          style={{
            paddingTop: isHeaderFixed ? "64px" : "0px",
          }}
        >
          <div className="flex-1 p-2" style={{ minHeight: "100vh" }}>
            <div className="my-2"><BreadcrumbContainer Data={DocSidebarMenuData} /></div>
            <Suspense fallback={<Loading />}>
              <Outlet />
            </Suspense>
          </div>
          <App_Footer />
        </div>
      </div>
    </div>
  );
};

export default DocDashBoardLayout;
