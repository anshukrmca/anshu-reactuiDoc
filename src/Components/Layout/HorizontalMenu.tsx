import { useAppSelector } from "../../CustomeHooks/Hooks";
import { menuData } from "../../Data/MenuData.tsx";
import { HorizontalBarMenu } from 'anshu-reactui'


export default function HorizontalMenu() {
  const CommonSave_GlobalValStore = useAppSelector((state) => state.CommonSave_GlobalValStore);
  return (
    <>
      <HorizontalBarMenu
        data={menuData}
        Theme={CommonSave_GlobalValStore?.ThemePrimary}
        TextColor={CommonSave_GlobalValStore?.MenuTextColor} // default top-bar text
        fontSize="13px"          // entire menu font
        dropdownBg={CommonSave_GlobalValStore?.MenuColors} // dropdown panel
        dropdownText={CommonSave_GlobalValStore?.MenuTextColor}   // dropdown text
        className="shadow-sm bg-white"
        style={{
          backgroundColor: CommonSave_GlobalValStore?.MenuColors,
        }}
      />
      <div id="menu-portal" className="" />

    </>

  );
}
