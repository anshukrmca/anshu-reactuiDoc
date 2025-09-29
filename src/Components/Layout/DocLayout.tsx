import { useAppSelector } from '../../CustomeHooks/Hooks';
import { hexToRgba } from 'anshu-reactui';
import App_Header from './App_Header';
import { Outlet } from 'react-router-dom';
import App_Footer from './App_Footer';
import DocDashBoardLayout from './DocDashBoardLayout';
import HorizontalMenuBar from './HorizontalMenuBar';
import { DocHorizontalMenuData } from '../../Data/MenuData';

const DocLayout = () => {
     const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
      const isHorizontal = CommonSave_GlobalValStore?.NavigationStyles === "Horizontal";
      const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9) || "white";
      const padding = CommonSave_GlobalValStore?.HeaderPositions === 'Scrollable' ? '10px' : '120px';
  return (
    <>
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
            <HorizontalMenuBar Data={DocHorizontalMenuData} />
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
        <DocDashBoardLayout/>
      )}
    
    </>
  )
}

export default DocLayout