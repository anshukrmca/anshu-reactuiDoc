// src/components/ClassCard.tsx
import React from "react";

export const renderCode = (s: string) => (
  <pre className="bg-slate-50 dark:bg-slate-800 p-2 rounded text-sm overflow-auto">
    <code>{s}</code>
  </pre>
);

export const ClassCard: React.FC<{ cls: string; example?: React.ReactNode; note?: string }> = ({
  cls,
  example,
  note,
}) => {
  return (
    <div className="border rounded-md p-3 bg-white dark:bg-slate-900">
      <div className="font-mono text-sm break-words">{renderCode(cls)}</div>
      {note && <div className="text-xs mt-2 text-amber-700 dark:text-amber-300">{note}</div>}
      <div className="mt-3">
        <div className="p-3 border rounded">{example ?? <div className={cls}>Example</div>}</div>
      </div>
    </div>
  );
};