import { useAppSelector } from "../../CustomeHooks/Hooks";
import { HorizontalmenuData, } from "../../Data/MenuData.tsx";
import { HorizontalBarMenu } from 'anshu-reactui'


export default function HorizontalMenu() {
  const CommonSave_GlobalValStore = useAppSelector((state) => state.CommonSave_GlobalValStore);
  return (
    <>
      <HorizontalBarMenu
        data={HorizontalmenuData}
       ThemeColor={CommonSave_GlobalValStore?.ThemePrimary}
        dropdownBg={CommonSave_GlobalValStore?.MenuColors} // dropdown panel
        className="shadow-sm bg-white dark:bg-slate-900 text-black dark:text-white"
        style={{
          backgroundColor: CommonSave_GlobalValStore?.MenuColors,
        }}
      />
      <div id="menu-portal" className="" />

    </>

  );
}
