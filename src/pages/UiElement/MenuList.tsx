import { menuData } from "../../Components/../Data/MenuData";
import HorizontalMenuComponent from "../../Components/UiElement/HorizontalMenuComponent";
import { useAppSelector } from "../../CustomeHooks/Hooks";





const MenuList = () => {
    const CommonSave_GlobalValStore = useAppSelector((state) => state.CommonSave_GlobalValStore);
    return (
        <>
            <HorizontalMenuComponent
                data={menuData}
                Theme={CommonSave_GlobalValStore?.ThemePrimary}  // grey dot for no icon
                TextColor={CommonSave_GlobalValStore?.MenuTextColor} // default top-bar text
                fontSize="13px"          // entire menu font
                dropdownBg={CommonSave_GlobalValStore?.MenuColors} // dropdown panel
                dropdownText= {CommonSave_GlobalValStore?.MenuTextColor}   // dropdown text
                className="shadow-sm bg-white"
                style={{
                    backgroundColor: CommonSave_GlobalValStore?.MenuColors,
                }}
            />
            <div id="menu-portal" className="" />
        </>
    )
}

export default MenuList