import { HorizontalBarMenu } from "anshu-reactui/lib";
import { useAppSelector } from "../../CustomeHooks/Hooks";
import type { MenuNode } from "../../Data/MenuTypes";

interface HorizontalMenuBarProps {
  Data: MenuNode[];
}

const HorizontalMenuBar: React.FC<HorizontalMenuBarProps> = ({ Data }) => {
  const CommonSave_GlobalValStore = useAppSelector((state) => state.CommonSave_GlobalValStore);
  return (
    <>
      <HorizontalBarMenu
        data={Data}
        ThemeColor={CommonSave_GlobalValStore?.ThemePrimary}
        dropdownBg={CommonSave_GlobalValStore?.MenuColors}
        className="shadow-sm bg-white dark:bg-slate-900 text-black dark:text-white"
        style={{
          backgroundColor: CommonSave_GlobalValStore?.MenuColors,
        }}
      />
      <div id="menu-portal" />
    </>
  );
};

export default HorizontalMenuBar;
