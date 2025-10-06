import { HorizontalBarMenu, type MenuNode } from "anshu-reactui";
import { useAppSelector } from "../../CustomeHooks/Hooks";

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
        className="shadow-sm my-Background border-none"
        style={{
          background: CommonSave_GlobalValStore?.MenuColors,
        }}
      />
      <div id="menu-portal" />
    </>
  );
};

export default HorizontalMenuBar;
