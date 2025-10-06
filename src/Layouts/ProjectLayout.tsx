import React from "react"
import { Outlet } from "react-router-dom"
import ThemeSetting from "./ThemeSetting"
import { OffCanvace, ToastContainer, ModalStack, toggleOffCanvace } from "anshu-reactui"
import DynamicIcon from "../Components/Icons/DynamicIcon"
import { useAppSelector } from "../CustomeHooks/Hooks"

const ProjectLayout: React.FC = () => {
  const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
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
      <Outlet />
    </>
  )
}

export default ProjectLayout
