import React from "react";
import { useAppSelector } from "../../CustomeHooks/Hooks";

const App_Footer: React.FC = () => {
  const {CommonSave_GlobalValStore} = useAppSelector((state) => state)

  return (
    <footer
      className="w-full p-4 text-center shadow-lg border-t bg-white dark:bg-slate-900 text-black dark:text-white"
      style={{
        backgroundColor: CommonSave_GlobalValStore?.HeaderColors,
      }}
    >
      <p className="text-sm">
        © {new Date().getFullYear()} All Rights Reserved | Author:{" "}
        <span className="font-semibold">Anshu Kumar</span>
      </p>
    </footer>
  );
};

export default App_Footer;
