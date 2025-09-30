import React from "react";
import ThemeSetting from "./ThemeSetting";
import { useAppSelector } from "../../CustomeHooks/Hooks";
import {
  OffCanvace,
  ToastContainer,
  toggleOffCanvace,
  ModalStack,
} from "anshu-reactui";
import DynamicIcon from "../Icons/DynamicIcon";
import DocLayout from "./DocLayout";
import CompLayout from "./CompLayout";
import { useLocation } from "react-router-dom";

const MainLayout: React.FC = () => {
  const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
  const location = useLocation();
  const isComponentRoute = location.pathname.startsWith("/components");

  return (
    <>
      <ToastContainer />
      {/* Settings OffCanvas */}
      <OffCanvace
        id={"ThemeSettingOffCanvace"}
        size="320px"
        className="my-Background"
        Theme={CommonSave_GlobalValStore?.ThemePrimary}
        style={{
          zIndex: 999999,
          background: CommonSave_GlobalValStore.ThemeBackground,
        }}
      >
        <ThemeSetting />
      </OffCanvace>

      <ModalStack
        Theme={CommonSave_GlobalValStore?.ThemePrimary}
        className="rounded-md"
        style={{
          background: CommonSave_GlobalValStore.ThemeBackground,
        }}
      />

      {/* Settings Floating Button */}
      <div
        className="fixed my-Background top-1/2 right-0 z-50 flex items-center justify-center w-12 h-12 shadow-lg rounded-l-xl cursor-pointer transform -translate-y-1/2 transition-all hover:scale-105"
        style={{ background: CommonSave_GlobalValStore.ThemeBackground }}
        onClick={() => toggleOffCanvace("ThemeSettingOffCanvace")}
      >
        <span className="animate-spin">
          <DynamicIcon
            name="CiSettings"
            color={CommonSave_GlobalValStore?.ThemePrimary}
            size={20}
          />
        </span>
      </div>

      {/* Choose Layout based on URL */}
      {isComponentRoute ? <CompLayout /> : <DocLayout />}
    </>
  );
};

export default MainLayout;
