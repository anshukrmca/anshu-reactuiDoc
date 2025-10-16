import * as React from "react";

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  striped?: boolean;
  bordered?: boolean;
  hoverable?: boolean;
}

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className = "", striped = false, bordered = false, hoverable = true, ...props }, ref) => (
    <div className="relative w-full overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600 bg-background">
      <table
        ref={ref}
        className={`w-full min-w-[600px] text-sm text-left text-gray-700 dark:text-gray-200 caption-bottom 
          ${bordered ? "border-collapse border border-slate-200 dark:border-slate-600" : ""}
          ${striped ? "[&_tbody_tr:nth-child(odd)]:bg-gray-50/50 dark:[&_tbody_tr:nth-child(odd)]:bg-gray-800/30" : ""}
          ${hoverable ? "[&_tbody_tr:hover]:bg-blue-100/50 dark:[&_tbody_tr:hover]:bg-gray-700/50" : ""}
          ${className}`}
        {...props}
      />
    </div>
  )
);
Table.displayName = "Table";

export const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className = "", ...props }, ref) => (
  <thead
    ref={ref}
    className={`bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 sticky top-0 z-10 ${className}`}
    {...props}
  />
));
TableHeader.displayName = "TableHeader";

export const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className = "", ...props }, ref) => (
  <tbody ref={ref} className={`divide-y divide-gray-200 dark:divide-gray-700 ${className}`} {...props} />
));
TableBody.displayName = "TableBody";

export const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className = "", ...props }, ref) => (
  <tfoot
    ref={ref}
    className={`bg-gray-100 dark:bg-gray-900 font-medium border-t border-slate-200 dark:border-slate-600 ${className}`}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

export const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className = "", ...props }, ref) => (
  <tr
    ref={ref}
    className={`transition-colors ${className}`}
    {...props}
  />
));
TableRow.displayName = "TableRow";

export const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className = "", ...props }, ref) => (
  <th
    ref={ref}
    className={`px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 ${className}`}
    {...props}
  />
));
TableHead.displayName = "TableHead";

export const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className = "", ...props }, ref) => (
  <td
    ref={ref}
    className={`px-4 py-3 align-middle text-sm ${className}`}
    {...props}
  />
));
TableCell.displayName = "TableCell";

export const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className = "", ...props }, ref) => (
  <caption
    ref={ref}
    className={`mt-3 text-sm text-gray-500 dark:text-gray-400 ${className}`}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";
