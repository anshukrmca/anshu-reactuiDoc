import { TabCard } from "anshu-reactui";
import { FaHome, FaUser, FaCog } from "react-icons/fa";
import { CodeViewer } from "../../Components/CodeViewer/CodeViewer";

export default function DemoCardTab() {
    const tabs = [
        {
            id: "tab1",
            label: "Home",
            icon: <FaHome />,
            content: (
                <div className="p-4">
                    <h2 className="text-lg font-bold">Welcome Home</h2>
                    <p>This is the home tab content. You can put any React node here.</p>
                </div>
            ),
        },
        {
            id: "tab2",
            label: "Profile",
            icon: <FaUser />,
            content: (
                <div className="p-4">
                    <h2 className="text-lg font-bold">Your Profile</h2>
                    <p>Profile details, avatar, stats, or any other info can go here.</p>
                </div>
            ),
        },
        {
            id: "tab3",
            label: "Settings",
            icon: <FaCog />,
            content: (
                <div className="p-4">
                    <h2 className="text-lg font-bold">Settings</h2>
                    <p>Adjust your preferences and configurations in this tab.</p>
                </div>
            ),
        },
    ];

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">TabCard Component Demo</h1>

            {/* Default TabCard */}
            <div className="border rounded-md p-4">
                <h2 className="text-xl font-semibold mb-3">Default TabCard</h2>
                <TabCard tabs={tabs} />
                <div className="mt-3">
                     <h3 className="font-semibold my-4">Code Snippet:</h3>
                    <CodeViewer code={`<TabCard
  tabs={[
    { id: 'tab1', label: 'Home', icon: <FaHome />, content: <HomeContent /> },
    { id: 'tab2', label: 'Profile', icon: <FaUser />, content: <ProfileContent /> },
    { id: 'tab3', label: 'Settings', icon: <FaCog />, content: <SettingsContent /> },
  ]}
/>`}
                    />
                </div>
            </div>

            {/* Custom Active/Inactive Tab */}
            <div className="border rounded-md p-4">
                <h2 className="text-xl font-semibold mb-3">Custom Active/Inactive Style</h2>
                <TabCard
                    tabs={tabs}
                    activeClass="bg-blue-500 text-white py-1 px-4 rounded-md shadow"
                    inactiveClass="bg-gray-200 py-1 px-4 rounded-md text-gray-700"
                />
                <div className="mt-3">
                    <h3 className="font-semibold">Code Snippet:</h3>
                     <h3 className="font-semibold my-4">Code Snippet:</h3>
                    <CodeViewer code={`<TabCard
  tabs={tabs}
  activeClass="bg-blue-500 text-white py-1 px-4 rounded-md shadow"
  inactiveClass="bg-gray-200 py-1 px-4 rounded-md text-gray-700"
/>`}
                    />
                </div>
            </div>

            {/* Icon Only Tabs */}
            <div className="border rounded-md p-4">
                <h2 className="text-xl font-semibold mb-3">Icon Only Tabs (Scrollable)</h2>
                <TabCard
                    tabs={tabs.map((t) => ({ ...t, label: t.icon }))}
                    headerClass="overflow-x-auto"
                />
                <div className="mt-3">
                    <h3 className="font-semibold my-4">Code Snippet:</h3>
                    <CodeViewer code={`<TabCard
  tabs={tabs.map((t) => ({ ...t, label: t.icon }))}
  headerClass="overflow-x-auto"
/>`}
                    />
                </div>
            </div>

            {/* Props Documentation */}
            <div className="border rounded-md p-4">
                <h2 className="text-xl font-semibold mb-2">Props</h2>
                <table className="w-full table-auto border-collapse border border-gray-200 text-left">
                    <thead>
                        <tr className="bg-slate-400">
                            <th className="p-2 border">Prop</th>
                            <th className="p-2 border">Type</th>
                            <th className="p-2 border">Default</th>
                            <th className="p-2 border">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-2 border">tabs</td>
                            <td className="p-2 border">Tab[]</td>
                            <td className="p-2 border">[]</td>
                            <td className="p-2 border">Array of tab objects with id, label, icon, content</td>
                        </tr>
                        <tr>
                            <td className="p-2 border">initialTab</td>
                            <td className="p-2 border">string | null</td>
                            <td className="p-2 border">First tab id</td>
                            <td className="p-2 border">ID of the initially selected tab</td>
                        </tr>
                        <tr>
                            <td className="p-2 border">activeClass</td>
                            <td className="p-2 border">string</td>
                            <td className="p-2 border">bg-red-500 py-1 px-3 rounded</td>
                            <td className="p-2 border">Class for active tab</td>
                        </tr>
                        <tr>
                            <td className="p-2 border">inactiveClass</td>
                            <td className="p-2 border">string</td>
                            <td className="p-2 border">py-1 px-3 rounded</td>
                            <td className="p-2 border">Class for inactive tab</td>
                        </tr>
                        <tr>
                            <td className="p-2 border">activeStyle</td>
                            <td className="p-2 border">CSSProperties</td>
                            <td className="p-2 border">{`{}`}</td>
                            <td className="p-2 border">Inline style for active tab</td>
                        </tr>
                        <tr>
                            <td className="p-2 border">inactiveStyle</td>
                            <td className="p-2 border">CSSProperties</td>
                            <td className="p-2 border">{`{}`}</td>
                            <td className="p-2 border">Inline style for inactive tab</td>
                        </tr>
                        <tr>
                            <td className="p-2 border">className</td>
                            <td className="p-2 border">string</td>
                            <td className="p-2 border">""</td>
                            <td className="p-2 border">Wrapper container class</td>
                        </tr>
                        <tr>
                            <td className="p-2 border">headerClass</td>
                            <td className="p-2 border">string</td>
                            <td className="p-2 border">""</td>
                            <td className="p-2 border">Class for tab header container</td>
                        </tr>
                        <tr>
                            <td className="p-2 border">panelClass</td>
                            <td className="p-2 border">string</td>
                            <td className="p-2 border">""</td>
                            <td className="p-2 border">Class for tab content panel</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
