import React from "react"
import { Outlet } from "react-router-dom"
import ThemeSetting from "./ThemeSetting"
import { OffCanvace, ToastContainer, ModalStack, toggleOffCanvace, hexToRgba } from "anshu-reactui"
import DynamicIcon from "../Components/Icons/DynamicIcon"
import { useAppSelector } from "../CustomeHooks/Hooks"

const ProjectLayout: React.FC = () => {
  const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
  const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);
  return (
    <>
      <ToastContainer />
      {/* Settings OffCanvas */}
      <OffCanvace
        id={"ThemeSettingOffCanvace"}
        size="320px"
        ThemeColor={CommonSave_GlobalValStore?.ThemePrimary}
        style={{
          zIndex: 999999,
          background: CommonSave_GlobalValStore.ThemeBackground && bgColor,
        }}
        ClassName="my-Background"
      >
        <ThemeSetting />
      </OffCanvace>

      <ModalStack
        ThemeColor={CommonSave_GlobalValStore?.ThemePrimary}
        className="rounded-md bg-white dark:bg-gray-400 text-black dark:text-white"
        style={{
          background: CommonSave_GlobalValStore.ThemeBackground && bgColor,
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
      <Outlet />
    </>
  )
}

export default ProjectLayout
