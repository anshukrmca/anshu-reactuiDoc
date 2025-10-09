import { Card, hexToRgba,DataTable, type Column } from "anshu-reactui/lib";
import { useAppSelector } from "../../../CustomeHooks/Hooks";
import DemoTablePage from "./DemoTablePage";

type Person = { id: string; name: string; email: string; email2: string; email3: string; email4: string; age: number; city?: string };

const columns: Column<Person>[] = [
    { key: "id", header: "ID", sortable: true },
    { key: "avatar", header: "Profile Picture" },
    { key: "name", header: "Name", sortable: true },
    { key: "email", header: "Email", sortable: true },
    { key: "email2", header: "Email", sortable: true },
    { key: "email3", header: "Email", sortable: true },
    { key: "email4", header: "Email", sortable: true },
    { key: "age", header: "Age", sortable: true },
    {
        key: "actions",
        header: "Actions",
        render: (_, row) => (
            <div className="flex gap-2">
                <button className="px-2 py-1 bg-blue-500 text-white rounded text-xs" onClick={() => alert("Edit: " + JSON.stringify(row, null, 2))}>Edit</button>
                <button className="px-2 py-1 bg-red-500 text-white rounded text-xs" onClick={() => console.log("Delete:", row)}>Delete</button>
            </div>
        ),
    },
];

const data: Person[] = Array.from({ length: 100 }).map((_, i) => ({
    id: `${i + 1}`,
    name: `Person ${i + 1}`,
    avatar: "https://static01.nyt.com/athletic/uploads/wp/2025/05/10092152/virat-kohli-scaled-e1746883367691-1024x681.jpg?width=1000&quality=70&auto=webp",
    email: `person${i + 1}@example.com`,
    email2: `person${i + 1}@example.com`,
    email3: `person${i + 1}@example.com`,
    email4: `person${i + 1}@example.com`,
    age: Math.floor(Math.random() * 60) + 18,
    city: ['Mumbai', 'Delhi', 'Bengaluru', 'Chennai'][i % 4]
}));

const TableList = () => {
    const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
    const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);
    return (
        <>
            <Card
                className="my-4 items-center shadow-none hover:shadow-none overflow-hidden my-Border p-4 my-Background"
                style={{
                    background: CommonSave_GlobalValStore.ThemeBackground && bgColor,
                }}
            >
                
                <DemoTablePage/>

                <div className="flex justify-between mb-4 items-center">
                    <h2 className="text-xl font-semibold underline uppercase">
                        Data Table
                    </h2>
                </div>

                <DataTable
                    columns={columns}
                    data={data}
                    initialPageSize={10}
                    pageSizeOptions={[10, 25, 50]}
                    searchable={true}
                    Colsearchable={true}
                    selectable={true}
                    showSerialNo={true}
                    PrintBtn={true}
                    CSVBtn={true}
                    rowKey={(r) => r.id}
                    onSelectionChange={(rowData) => {
                        console.log("Selected Rows:", rowData)
                    }}
                    onRowExpand={(rowData) => {
                        console.log("Plus clicked for:", rowData);
                    }}
                    ThemeColor={CommonSave_GlobalValStore?.ThemePrimary}
                    ClassName="bg-white dark:bg-slate-800 text-black dark:text-white"
                    style={{
                        background: CommonSave_GlobalValStore.ThemeBackground && bgColor,
                    }}
                />
            </Card>
        </>
    )
}

export default TableList