import React, { useState, type ReactNode } from "react";

export interface AccordionItemProps {
  id: string;
  title: string;
  titleIcon?: ReactNode;
  content: ReactNode;
  defaultOpen?: boolean;
}

interface AccordionProps {
  items: AccordionItemProps[];
  allowMultipleOpen?: boolean; // allow multiple items open at once
  activeHeader?: string; // active header bg color (light/dark)
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultipleOpen = false,
  activeHeader = "bg-blue-100 dark:bg-blue-500",
}) => {
  const [openIds, setOpenIds] = useState<string[]>(
    items.filter((i) => i.defaultOpen).map((i) => i.id)
  );

  const toggleItem = (id: string) => {
    if (allowMultipleOpen) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  // Plus SVG
  const PlusIcon: React.FC<{ Theme?: string; Size?: number }> = ({ Theme,Size = 25}) => (
    <svg className={`cursor-pointer ${!Theme ? "text-black dark:text-white" : ""}`}
      width={Size} height={Size} fill={Theme ?? "currentColor"} stroke="currentColor" viewBox="0 0 92 92"
    >
      <path d="M72.5,46.5c0,2.5-2,4.5-4.5,4.5H50v17c0,2.5-2,4.5-4.5,4.5S41,70.5,41,68V51H24c-2.5,0-4.5-2-4.5-4.5 s2-4.5,4.5-4.5h17V24c0-2.5,2-4.5,4.5-4.5s4.5,2,4.5,4.5v18h18C70.5,42,72.5,44,72.5,46.5z" />
    </svg>
  );

  // Minus SVG
  const MinusIcon: React.FC<{ Theme?: string; Size?: number }> = ({ Theme,Size = 25,}) => (
    <svg
      className={`cursor-pointer ${!Theme ? "text-black dark:text-white" : ""}`}
      width={Size} height={Size}   fill={Theme ?? "currentColor"} stroke="currentColor" viewBox="0 0 24 24"
    >
        <path d="M5 11h14v2H5z"/>
    </svg>
  );
  return (
    <div className="space-y-2">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className="rounded-lg shadow overflow-hidden transition-all duration-300 bg-white dark:bg-slate-700"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className={`w-full flex justify-between items-center px-4 py-2 text-left focus:outline-none cursor-pointer
                ${isOpen ? activeHeader : ""} transition-colors`}
            >
              <span
                className={`flex gap-2 items-center font-medium ${
                  isOpen
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-900 dark:text-gray-200"
                }`}
              >
                {item.titleIcon} {item.title}
              </span>
              <span
                className={`p-0.5 rounded-full transition-transform duration-300 ${
                  isOpen ? "bg-blue-400 dark:bg-blue-600 text-white rotate-180" : "bg-blue-200 dark:bg-blue-400 text-black"
                }`}
              >
                {isOpen ? <MinusIcon  Size={16} /> : <PlusIcon Size={18}/>}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 px-4 ${
                isOpen ? "py-3 max-h-96" : "max-h-0"
              }`}
            >
              <div className="text-gray-700 dark:text-gray-200 text-sm md:text-base">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
