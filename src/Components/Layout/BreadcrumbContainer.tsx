
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../CustomeHooks/Hooks";
import { findBreadcrumbPath, getBreadcrumbItems,Breadcrumb, type MenuNode } from "anshu-reactui";

interface BreadcrumbContainerData{
  Data: MenuNode[];
}

const BreadcrumbContainer: React.FC<BreadcrumbContainerData> = ({ Data }) => {
  const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
  const location = useLocation();
  const currentPath = location.pathname;
  if (!currentPath) return null;
  const path = findBreadcrumbPath(Data, currentPath);
  if (!path) return null;
  const breadcrumbItems = getBreadcrumbItems(path);
  return (
    <>
      <Breadcrumb
        items={breadcrumbItems}
        ThemeColor={CommonSave_GlobalValStore?.ThemePrimary}
        />
    </>

  )

}

export default BreadcrumbContainer

