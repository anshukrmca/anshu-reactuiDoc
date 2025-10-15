import { TabCard } from "anshu-reactui";
import React from "react";
import { CodeViewer } from "../CodeViewer/CodeViewer";

interface CheatsheetCardProps {
  htmlCode?: string;
  cssCode?: string;
  jsxCode?: string;
  tsxCode?: string;
}


const CheatsheetCard: React.FC<CheatsheetCardProps> = ({
  htmlCode,
  cssCode,
  jsxCode,
  tsxCode,
}) => {


  return (
    <div className="mt-4 animate-fadeIn">
      <TabCard
        tabs={[
          {
            id: "html",
            label: "HTML",
            content: (<CodeViewer code={htmlCode || ""}/>),
          },
          {
            id: "css",
            label: "CSS",
            content: (<CodeViewer code={cssCode || ""}/>),
          },
          {
            id: "jsx",
            label: "JSX",
            content: (<CodeViewer code={jsxCode || ""}/>),
          },
          {
            id: "tsx",
            label: "TSX",
            content: (<CodeViewer code={tsxCode || ""}/>),
          },
        ]}
        initialTab="html"
        panelClass="dark:bg-slate-500 bg-slate-100 max-h-72 overflow-y-auto"
        className="p-2 shadow-none"
      />
    </div>
  );
};

export default CheatsheetCard;