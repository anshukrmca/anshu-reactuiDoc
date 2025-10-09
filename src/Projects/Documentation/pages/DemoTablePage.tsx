
import { DataTable, type Column } from "anshu-reactui/lib";
import React, { useState } from "react";
import { CodeViewer } from "../../../Components/CodeViewer/CodeViewer";

type User = {
    id: number;
    name: string;
    email: string;
    status: "active" | "inactive";
    avatar: string;
    score: number;
};

const DemoTablePage: React.FC = () => {
    const [selectedRows, setSelectedRows] = useState<User[]>([]);

    /** Column definitions for demo table */
    const columns: Column<User>[] = [
        { key: "id", header: "ID", sortable: true },
        { key: "name", header: "Name", sortable: true },
        { key: "email", header: "Email" },
        {
            key: "status",
            header: "Status",
            sortable: true,
            render: (val: any) => (
                <span
                    className={
                        val === "active" ? "text-green-600 font-semibold" : "text-red-500"
                    }
                >
                    {val.toUpperCase()}
                </span>
            ),
        },
        {
            key: "avatar",
            header: "Avatar",
            render: (val: any) => (
                <img
                    src={val}
                    alt="avatar"
                    className="h-10 w-10 md:h-12 md:w-12 mx-auto rounded-full border border-slate-300 dark:border-slate-600"
                />
            ),
        },
        { key: "score", header: "Score", sortable: true },
    ];

    /** Sample data */
    const data: User[] = [
        { id: 1, name: "John Doe", email: "john@example.com", status: "active", avatar: "https://i.pravatar.cc/150?img=1", score: 85 },
        { id: 2, name: "Jane Smith", email: "jane@example.com", status: "inactive", avatar: "https://i.pravatar.cc/150?img=2", score: 92 },
        { id: 3, name: "Alice Johnson", email: "alice@example.com", status: "active", avatar: "https://i.pravatar.cc/150?img=3", score: 78 },
        { id: 4, name: "Bob Brown", email: "bob@example.com", status: "inactive", avatar: "https://i.pravatar.cc/150?img=4", score: 66 },
    ];

    return (
        <div className="p-6 space-y-8">
            <h1 className="text-3xl font-bold">DataTable Component Documentation & Demo</h1>

            <p className="text-gray-600 dark:text-gray-300">
                The <strong>DataTable</strong> component is a fully-featured React table
                with support for sorting, filtering, pagination, row selection, CSV/Print export,
                serial numbers, custom renderers, and dark/light themes.
            </p>

            <div className="p-4 bg-gray-50 dark:bg-slate-900 rounded">
                <strong>Type Definition:</strong>
                <pre className="text-xs mt-1 overflow-x-auto">
                    {`type Person = { id: string; name: string; email: string; email2: string; email3: string; email4: string; age: number; city?: string;avatar?: string;
};`}
                </pre>
            </div>

            {/* ------------------ Columns Code ------------------ */}
            <div className="p-4 bg-gray-50 dark:bg-slate-900 rounded">
                <strong>Columns Definition:</strong>
                <pre className="text-xs mt-1 overflow-x-auto">
                    {`const columns: Column<Person>[] = [
  { key: "id", header: "ID", sortable: true },
  { key: "avatar", header: "Profile Picture", render: (val) => <img src={val} /> },
  { key: "name", header: "Name", sortable: true },
  { key: "email", header: "Email", sortable: true },
  { key: "email2", header: "Email", sortable: true },
  { key: "email3", header: "Email", sortable: true },
  { key: "email4", header: "Email", sortable: true },
  { key: "age", header: "Age", sortable: true },
  { key: "actions", header: "Actions", render: (_, row) => <div>Buttons</div> },
];`}
                </pre>
            </div>

            {/* ------------------ Data Code ------------------ */}
            <div className="p-4 bg-gray-50 dark:bg-slate-900 rounded">
                <strong>Sample Data Generation:</strong>
                <pre className="text-xs mt-1 overflow-x-auto">
                    {`const data: Person[] = Array.from({ length: 100 }).map((_, i) => ({
  id: \`\${i + 1}\`,
  name: \`Person \${i + 1}\`,
  avatar: "...",
  email: \`person\${i + 1}@example.com\`,
  email2: \`person\${i + 1}@example.com\`,
  email3: \`person\${i + 1}@example.com\`,
  email4: \`person\${i + 1}@example.com\`,
  age: Math.floor(Math.random() * 60) + 18,
  city: ["Mumbai","Delhi","Bengaluru","Chennai"][i % 4],
}));`}
                </pre>
            </div>
            {/* ---------------- Props Table ---------------- */}
            <section className="space-y-2">
                <h2 className="text-2xl font-semibold">Props Reference</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    Below are all props available for <strong>DataTable</strong>.
                </p>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border border-slate-300 dark:border-slate-600">
                        <thead className="bg-gray-200 dark:bg-slate-700">
                            <tr>
                                <th className="p-2 border border-slate-300 dark:border-slate-600">Prop</th>
                                <th className="p-2 border border-slate-300 dark:border-slate-600">Type</th>
                                <th className="p-2 border border-slate-300 dark:border-slate-600">Default</th>
                                <th className="p-2 border border-slate-300 dark:border-slate-600">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td className="p-2 border">columns</td><td className="p-2 border">Column&lt;T&gt;[]</td><td className="p-2 border">required</td><td className="p-2 border">Table column definitions</td></tr>
                            <tr><td className="p-2 border">data</td><td className="p-2 border">T[]</td><td className="p-2 border">required</td><td className="p-2 border">Table rows data</td></tr>
                            <tr><td className="p-2 border">ClassName</td><td className="p-2 border">string</td><td className="p-2 border">'bg-white dark:bg-slate-900 text-black dark:text-white'</td><td className="p-2 border">Custom table wrapper classes</td></tr>
                            <tr><td className="p-2 border">ThemeColor</td><td className="p-2 border">string</td><td className="p-2 border">'gray'</td><td className="p-2 border">Base color for row hover and buttons</td></tr>
                            <tr><td className="p-2 border">searchable</td><td className="p-2 border">boolean</td><td className="p-2 border">false</td><td className="p-2 border">Enables global search</td></tr>
                            <tr><td className="p-2 border">Colsearchable</td><td className="p-2 border">boolean</td><td className="p-2 border">false</td><td className="p-2 border">Enables column-specific search inputs</td></tr>
                            <tr><td className="p-2 border">selectable</td><td className="p-2 border">boolean</td><td className="p-2 border">false</td><td className="p-2 border">Adds row selection checkboxes</td></tr>
                            <tr><td className="p-2 border">showSerialNo</td><td className="p-2 border">boolean</td><td className="p-2 border">false</td><td className="p-2 border">Adds serial number column</td></tr>
                            <tr><td className="p-2 border">CSVBtn</td><td className="p-2 border">boolean</td><td className="p-2 border">false</td><td className="p-2 border">Show CSV export button</td></tr>
                            <tr><td className="p-2 border">PrintBtn</td><td className="p-2 border">boolean</td><td className="p-2 border">false</td><td className="p-2 border">Show Print button</td></tr>
                            <tr><td className="p-2 border">isPagination</td><td className="p-2 border">boolean</td><td className="p-2 border">false</td><td className="p-2 border">Enable pagination</td></tr>
                            <tr><td className="p-2 border">onSelectionChange</td><td className="p-2 border">(selected: T[]) =&gt; void</td><td className="p-2 border">undefined</td><td className="p-2 border">Callback for selected rows</td></tr>
                            <tr><td className="p-2 border">rowKey</td><td className="p-2 border">(row: T) =&gt; string | number</td><td className="p-2 border">undefined</td><td className="p-2 border">Unique key for each row</td></tr>
                            <tr><td className="p-2 border">onRowExpand</td><td className="p-2 border">(row: T) =&gt; void</td><td className="p-2 border">undefined</td><td className="p-2 border">Callback on row expand click</td></tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* ---------------- Demo Sections ---------------- */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold">1. Basic Table</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    This is the simplest usage. No search, pagination, or selection.
                </p>
                <DataTable columns={columns} data={data} />

                <div className="my-4 overflow-hidden">
                    <CodeViewer code={`<DataTable columns={columns} data={data} />`} />
                </div>

                <h2 className="text-2xl font-semibold">2. Table with Pagination & Selection</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    Enables row selection with checkboxes, serial numbers, and paginated rows.
                </p>
                <DataTable
                    columns={columns}
                    data={data}
                    selectable
                    showSerialNo
                    isPagination
                    initialPageSize={2}
                    pageSizeOptions={[2, 5, 10]}
                    onSelectionChange={(rows) => setSelectedRows(rows)}
                    rowKey={(row) => row.id}
                />
                <div className="mt-2 text-sm">
                    Selected IDs: {selectedRows.map((r) => r.id).join(", ") || "None"}
                </div>

                <div className="p-2 rounded space-y-1">
                    <strong>Selected Data:</strong>
                    {selectedRows.length > 0 ? (
                        selectedRows.map((r, idx) => (
                            <div key={idx} className="text-sm">
                                {JSON.stringify(r)}
                            </div>
                        ))
                    ) : (
                        <div>None</div>
                    )}
                </div>
                <div className="my-4 overflow-hidden">
                    <CodeViewer code={` <DataTable
    columns={columns}
    data={data}
    selectable
    showSerialNo
    isPagination
    initialPageSize={2}
    pageSizeOptions={[2, 5, 10]}
    onSelectionChange={(rows) => setSelectedRows(rows)}
    rowKey={(row) => row.id}
  />`} />
                </div>

                <h2 className="text-2xl font-semibold">3. Searchable Table</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    Supports global search and per-column search inputs.
                </p>
                <DataTable columns={columns} data={data} searchable Colsearchable />

                <div className="my-4 overflow-hidden">
                    <CodeViewer code={`<DataTable columns={columns} data={data} searchable Colsearchable />`} />
                </div>

                <h2 className="text-2xl font-semibold">4. CSV & Print Buttons</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    Use buttons to export filtered data to CSV or print the table.
                </p>
                <DataTable columns={columns} data={data} CSVBtn PrintBtn searchable ThemeColor="purple" />
                <div className="my-4 overflow-hidden">
                    <CodeViewer code={`<DataTable columns={columns} data={data} CSVBtn PrintBtn searchable ThemeColor="purple" />`} />
                </div>
                <h2 className="text-2xl font-semibold">5. Dark Mode</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    Customize colors and enable dark mode using ClassName and ThemeColor.
                </p>
                <DataTable
                    columns={columns}
                    data={data}
                    ClassName="bg-slate-800 dark:bg-red-400 text-black dark:text-white"
                    ThemeColor="red"
                    searchable
                    Colsearchable
                    isPagination
                />

                <div className="my-4 overflow-hidden">
                    <CodeViewer code={`<DataTable
    columns={columns}
    data={data}
    ClassName="bg-slate-800 dark:bg-red-400 text-black dark:text-white"
    ThemeColor="red"
    searchable
    Colsearchable
    isPagination
  />`} />
                </div>

                <h2 className="text-2xl font-semibold">6. Empty State</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    When no data is provided or filters return zero results, the table shows "No results".
                </p>
                <DataTable columns={columns} data={[]} />
                <div className="my-4 overflow-hidden">
                    <CodeViewer code={`<DataTable columns={columns} data={[]} />`} />
                </div>
            </section>
        </div>
    );
};

export default DemoTablePage;
