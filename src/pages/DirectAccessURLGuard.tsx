import React, {useState } from "react";
import { hexToRgba, Modal } from "anshu-reactui/lib";
import { useAppSelector } from "../CustomeHooks/Hooks";
import Unauthorised from "./Unauthorised";

const DirectAccessURLGuard: React.FC = () => {
  const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
  const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);
  const [isOpen] = useState(true);

  const handleClose = () => {
    // 🚀 Redirect to home instead of hiding modal
    window.location.href = "/";
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      ThemeColor={CommonSave_GlobalValStore?.ThemePrimary}
      className="rounded-md bg-white dark:bg-gray-700 text-black dark:text-white"
      style={{ background: CommonSave_GlobalValStore.ThemeBackground && bgColor }}
    >
      <Unauthorised />
    </Modal>
  );
};

export default DirectAccessURLGuard;
