import HorizontalMenuComponent from "anshu-reactui/components/Menus/HorizontalMenuComponent";
import { useAppSelector } from "../../../CustomeHooks/Hooks";
import { CompHorizontalMenuData } from "../../../Data/MenuData";

const MenuList = () => {
    const CommonSave_GlobalValStore = useAppSelector((state) => state.CommonSave_GlobalValStore);
    return (
        <>
            <HorizontalMenuComponent
                data={CompHorizontalMenuData}
                ThemeColor={CommonSave_GlobalValStore?.ThemePrimary}  // grey dot for no icon
                dropdownBg={CommonSave_GlobalValStore?.MenuColors} // dropdown panel
                className="shadow-sm bg-white"
                style={{
                    background: CommonSave_GlobalValStore?.MenuColors,
                }}
            />
            <div id="menu-portal" className="" />
        </>
    )
}

export default MenuList