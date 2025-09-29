import { TabCard } from "anshu-reactui";
import React from "react";

interface CheatsheetCardProps {
  htmlCode: string;
  cssCode: string;
  jsxCode: string;
}

// interface RootState {
//   CommonSave_GlobalValStore: {
//     ThemeBackground: string;
//     HeaderTextColor: string;
//   };
// }

const CheatsheetCard: React.FC<CheatsheetCardProps> = ({
  htmlCode,
  cssCode,
  jsxCode,
}) => {

//   const { CommonSave_GlobalValStore } = useSelector(
//     (store: RootState) => store
//   );


  return (
    <div className="mt-4 animate-fadeIn">
      <TabCard
        tabs={[
          {
            id: "html",
            label: "HTML",
            content: (
              <pre className="p-3 rounded text-sm overflow-x-auto">
                {htmlCode}
              </pre>
            ),
          },
          {
            id: "css",
            label: "CSS",
            content: (
              <pre className="p-3 rounded text-sm overflow-x-auto">
                {cssCode}
              </pre>
            ),
          },
          {
            id: "jsx",
            label: "JSX",
            content: (
              <pre className="p-3 rounded text-sm overflow-x-auto">
                {jsxCode}
              </pre>
            ),
          },
        ]}
        initialTab="html"
        panelClass="dark:bg-slate-500 bg-slate-100 max-h-72 overflow-y-auto"
        className="p-2 shadow-none"
        // style={{
        //   backgroundColor: CommonSave_GlobalValStore.ThemeBackground,
        //   color: CommonSave_GlobalValStore.HeaderTextColor,
        // }}
      />
    </div>
  );
};

export default CheatsheetCard;