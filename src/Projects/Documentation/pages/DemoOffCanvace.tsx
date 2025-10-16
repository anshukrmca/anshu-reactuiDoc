import React from "react";
import { OffCanvace, openOffCanvace, closeOffCanvace, toggleOffCanvace, hexToRgba, Card } from "anshu-reactui";
import { CodeViewer } from "../../../Components/CodeViewer/CodeViewer";
import { useAppSelector } from "../../../CustomeHooks/Hooks";


const DemoOffCanvace: React.FC = () => {
    const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
    const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);

    // Define all possible positions for demo
    const positions = ["left", "right", "top", "bottom"] as const;

    // Raw code string for developers (CodeViewer)
    const codeString = `import { OffCanvace, openOffCanvace, closeOffCanvace, toggleOffCanvace } from "anshu-reactui";

const App: React.FC = () => {

return (
    <div className="p-4 max-w-md mx-auto">
     
        <OffCanvace
            id="myCanvas"
            position="right"
            size="300px"
            ThemeColor="blue"
            style={{ zIndex: 9999, background: "#f3f4f6" }}
            >
                <div>
                    <h3>Sidebar Content</h3>
                    <p>Any React nodes go here.</p>
                    <button onClick={() => closeOffCanvace("myCanvas")}>Close</button>
                </div>    // You render you Components
            </OffCanvace>

        <button onClick={() => openOffCanvace("myCanvas")}>Open Sidebar</button>
        <button onClick={() => closeOffCanvace("myCanvas")}>Close Sidebar</button>
        <button onClick={() => toggleOffCanvace("myCanvas")}>Toggle Sidebar</button>
    </div>
  );
};

export default App;


`;

    return (
        <Card
            className="my-4 items-center shadow-none hover:shadow-none overflow-hidden border my-Border p-4 my-Background"
            style={{
                background: CommonSave_GlobalValStore.ThemeBackground && bgColor,
            }}
        >

            <h1 className="text-2xl font-bold mb-4">OffCanvace Demo</h1>

            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-2xl">
                OffCanvace is a sidebar/modal panel that slides from any side (left, right, top, bottom).
                You can control it programmatically, customize its size and theme, and use the overlay click-to-close feature.
            </p>

            {/* Example buttons for all positions */}
            <h2 className="text-xl font-semibold mb-2">Open OffCanvace (All Positions)</h2>
            <div className="flex flex-wrap gap-2 mb-4">
                {positions.map((pos) => (
                    <button
                        key={pos}
                        onClick={() => openOffCanvace(`canvas-${pos}`)}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Open {pos.charAt(0).toUpperCase() + pos.slice(1)}
                    </button>
                ))}
            </div>

            {/* Render OffCanvace for all positions */}
            {positions.map((pos) => (
                <OffCanvace
                    key={pos}
                    id={`canvas-${pos}`}
                    position={pos}
                    size={pos === "top" || pos === "bottom" ? "250px" : "300px"}
                    ThemeColor={CommonSave_GlobalValStore?.ThemePrimary || "blue"}
                    style={{
                        zIndex: 9999,
                        background: CommonSave_GlobalValStore.ThemeBackground && bgColor,
                    }}
                    ClassName="my-Background"
                >
                    <div className="p-4 flex flex-col gap-2">
                        <h3 className="text-xl font-bold mb-2">{pos.charAt(0).toUpperCase() + pos.slice(1)} Canvas Content</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            This off-canvas panel slides from <b>{pos}</b>. You can include any React nodes inside.
                        </p>
                        <div className="flex gap-2 flex-wrap mt-2">
                            <button
                                onClick={() => closeOffCanvace(`canvas-${pos}`)}
                                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Close
                            </button>
                            <button
                                onClick={() => toggleOffCanvace(`canvas-${pos}`)}
                                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                            >
                                Toggle
                            </button>
                        </div>
                    </div>
                </OffCanvace>
            ))}

            {/* Programmatic control description */}
            <div className="mt-6 space-y-2">
                <h2 className="text-xl font-bold">Programmatic Control</h2>
                <p className="text-gray-600 dark:text-gray-400">
                    You can open, close, or toggle any OffCanvace panel from anywhere in your app using these helper functions:
                </p>
                <ul className="list-disc ml-5 text-gray-600 dark:text-gray-400">
                    <li><code>openOffCanvace(id)</code> – opens the panel</li>
                    <li><code>closeOffCanvace(id)</code> – closes the panel</li>
                    <li><code>toggleOffCanvace(id)</code> – toggles the panel</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-2">
                    <button
                        onClick={() => openOffCanvace('canvas-left')}
                        className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
                    >
                        Open Left
                    </button>
                    <button
                        onClick={() => closeOffCanvace('canvas-left')}
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                        Close Left
                    </button>
                    <button
                        onClick={() => toggleOffCanvace('canvas-left')}
                        className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
                    >
                        Toggle Left
                    </button>
                </div>
            </div>

            {/* Props description */}
            <div className="mt-6 space-y-2">
                <h2 className="text-2xl font-bold">OffCanvace Props</h2>
                <table className="w-full text-left border-collapse border border-gray-300 dark:border-gray-600">
                    <thead>
                        <tr className="bg-gray-100 dark:bg-gray-700">
                            <th className="border p-2">Prop</th>
                            <th className="border p-2">Type</th>
                            <th className="border p-2">Default</th>
                            <th className="border p-2">Description</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800">
                        <tr>
                            <td className="border p-2">id</td>
                            <td className="border p-2">string</td>
                            <td className="border p-2">-</td>
                            <td className="border p-2">Unique identifier for OffCanvace. Required for programmatic control.</td>
                        </tr>
                        <tr>
                            <td className="border p-2">position</td>
                            <td className="border p-2">"left" | "right" | "top" | "bottom"</td>
                            <td className="border p-2">"right"</td>
                            <td className="border p-2">Position from which the panel slides in.</td>
                        </tr>
                        <tr>
                            <td className="border p-2">size</td>
                            <td className="border p-2">string</td>
                            <td className="border p-2">Responsive default: left/right=300px, top/bottom=250px</td>
                            <td className="border p-2">Width (left/right) or height (top/bottom) of the panel.</td>
                        </tr>
                        <tr>
                            <td className="border p-2">ThemeColor</td>
                            <td className="border p-2">string</td>
                            <td className="border p-2">"gray"</td>
                            <td className="border p-2">Color for close icon or theme customization.</td>
                        </tr>
                        <tr>
                            <td className="border p-2">ClassName</td>
                            <td className="border p-2">string</td>
                            <td className="border p-2">""</td>
                            <td className="border p-2">Custom CSS classes for the panel container.</td>
                        </tr>
                        <tr>
                            <td className="border p-2">style</td>
                            <td className="border p-2">CSSProperties</td>
                            <td className="border p-2">{ } </td>
                            <td className="border p-2">Inline styles for additional customization.</td>
                        </tr>
                        <tr>
                            <td className="border p-2">children</td>
                            <td className="border p-2">ReactNode</td>
                            <td className="border p-2">-</td>
                            <td className="border p-2">Content rendered inside the panel.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* CodeViewer for developers */}
            <h2 className="text-2xl font-semibold mt-6 mb-2">Code Example</h2>
            <div className="rounded-md overflow-hidden">
                <CodeViewer code={codeString} />
            </div>
        </Card>
    );
};

export default DemoOffCanvace;
