import React from "react";
import { useAppDispatch, useAppSelector } from "../../CustomeHooks/Hooks";
import { MenuCategories, menuData } from "../../Data/MenuData.tsx";
import useWindowSize from "../../CustomeHooks/useWindowSize";
import { setisSidebarExpand, setisSidebarOpen } from "../../Store/CommonStore/CommonGlobalValSlice";
import { SidebarMenu } from "anshu-reactui";
import DynamicIcon from "../Icons/DynamicIcon";
const SideBarMenu: React.FC = () => {
  const { CommonSave_GlobalValStore, CommonGlobalValStore } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const size = useWindowSize();
  return (
    <>
      {(size.width ?? window.innerWidth) < 769 && 
      <div className="absolute right-2 top-5 z-30"
        onClick={() => {
          if (CommonGlobalValStore.isSidebarOpen) {
            dispatch(setisSidebarOpen(false));
            dispatch(setisSidebarExpand(true));
          }
        }}
      >
        <DynamicIcon name="IoMdClose" size={18}/>
      </div>
      }
      <SidebarMenu
        CategoryData={MenuCategories}
        MenuData={menuData}
        ThemeColor={CommonSave_GlobalValStore?.ThemePrimary}
        isSidebarExpand={CommonGlobalValStore?.isSidebarExpand}
        SidebarExpandWidth={270}
        style={{
          backgroundColor: CommonSave_GlobalValStore?.MenuColors,
          width: "100%",
          height:'100vh'
        }}
        ClassName="bg-white dark:bg-slate-900 text-black dark:text-white"
        SideBarDetails={["Meow DashBoard", <DynamicIcon name="FaCat" size={22} color={CommonSave_GlobalValStore?.ThemePrimary}/>, "/"]}
      />

    </>
  );
};

export default SideBarMenu;
