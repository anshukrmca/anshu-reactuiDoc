import  { useState } from "react";
import { SearchBox } from "anshu-reactui";
import { useAppSelector } from "../CustomeHooks/Hooks";


const GlobalSearch = () => {
    const [Search, setSearch] = useState<string>("");
    const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
  
  return (
    <SearchBox
      value={Search}
      onChange={(val) => setSearch(val)}
      placeholder="Search by name or ID"
      className="w-full py-1"
      Theme={CommonSave_GlobalValStore?.ThemePrimary}
    />
  );
};

export default GlobalSearch;
