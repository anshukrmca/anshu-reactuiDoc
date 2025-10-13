import { useAppSelector } from '../../CustomeHooks/Hooks';
import { hexToRgba, Loading } from 'anshu-reactui';
import App_Header from '../../Layouts/App_Header';
import { Outlet } from 'react-router-dom';
import App_Footer from '../../Layouts/App_Footer';
import DocDashBoardLayout from './DocDashBoardLayout';
import HorizontalMenuBar from '../../Components/Menu/HorizontalMenuBar';
import { DocHorizontalMenuData, DocSidebarMenuData } from '../../Data/MenuData';
import { Suspense } from 'react';
import BreadcrumbContainer from '../../Layouts/BreadcrumbContainer';

const DocLayout = () => {
     const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
      const isHorizontal = CommonSave_GlobalValStore?.NavigationStyles === "Horizontal";
      const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9) || "white";
      const padding = CommonSave_GlobalValStore?.HeaderPositions === 'Scrollable' ? '10px' : '110px';
  return (
    <>
     {/* Layout Wrapper */}
      {isHorizontal ? (
        <div
          className="my-Background"
          style={{ background: CommonSave_GlobalValStore?.ThemeBackground && bgColor}}
        >
          <div
            className={`${CommonSave_GlobalValStore?.MenuPositions === "Scrollable" ||
              CommonSave_GlobalValStore?.HeaderPositions === "Scrollable"
              ? "z-10"
              : "fixed z-20"
              } w-full`}
          >
            <App_Header />
            <HorizontalMenuBar Data={DocHorizontalMenuData} />
          </div>

          {/* Main content (flex-grow pushes footer down) */}
          <main
            className="max-w-screen py-2 px-4 w-full "
            style={{ paddingTop: padding, minHeight: "100vh" }}
          >
            <div className="my-2 ">
              <BreadcrumbContainer Data={DocSidebarMenuData} /></div>
            <Suspense fallback={<Loading />}>
              <Outlet />
           </Suspense>
          </main>
          {/* Footer (sticks to bottom) */}
          <App_Footer />
        </div>
      ) : (
        <DocDashBoardLayout/>
      )}
    
    </>
  )
}

export default DocLayout