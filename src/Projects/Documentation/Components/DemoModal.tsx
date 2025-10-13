import { Card, hexToRgba, Modal } from "anshu-reactui";
import React, { useState } from "react";
import { useAppSelector } from "../../../CustomeHooks/Hooks";

const DemoModal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState("#3498db"); // Default blue theme
    const [inputValue, setInputValue] = useState("");
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
                <div className="space-y-8">
                    {/* ---------- Header ---------- */}
                    <section>
                        <h1 className="text-3xl font-bold">Modal Documentation</h1>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">
                            The <code>Modal</code> component provides a simple, themeable dialog box with optional header, footer, and close-on-outside-click.
                        </p>
                    </section>

                    {/* ---------- Live Demo ---------- */}
                    <section>
                        <h2 className="text-xl font-semibold mb-3">🎯 Live Demo</h2>

                        <div className="flex flex-wrap gap-3 mb-4">
                            <button
                                className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                onClick={() => setIsOpen(true)}
                            >
                                Open Modal
                            </button>
                        </div>

                        <div className="flex items-center gap-2 mb-6">
                            <label className="font-medium">Theme Color:</label>
                            <input
                                type="color"
                                value={theme}
                                onChange={(e) => setTheme(e.target.value)}
                                className="w-10 h-8 border rounded"
                            />
                            <span className="text-sm text-gray-600 dark:text-gray-300">
                                Current: {theme}
                            </span>
                        </div>

                        <Modal
                            isOpen={isOpen}
                            onClose={() => setIsOpen(false)}
                            title="User Profile"
                            ThemeColor={theme}
                            footer={
                                <div className="flex justify-end gap-2">
                                    <button
                                        className="px-3 py-1 bg-gray-400 text-white rounded"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={() => alert(inputValue)}
                                        className="px-3 py-1 bg-blue-500 text-white rounded">
                                        Save
                                    </button>
                                </div>
                            }
                        >
                            <div className="p-4 space-y-2">
                                <p>This is the modal body content.</p>
                                <input
                                    id="dataId"
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Enter something..."
                                    className="border px-2 py-1 rounded w-full"
                                />
                            </div>
                        </Modal>
                    </section>

                    {/* ---------- Props Table ---------- */}
                    <section>
                        <h2 className="text-xl font-semibold mb-3">🧾 Props</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-sm border border-gray-700 rounded-md">
                                <thead className="bg-slate-200 dakr:bg-slate-600">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Prop</th>
                                        <th className="px-3 py-2 text-left font-semibold">Type</th>
                                        <th className="px-3 py-2 text-left font-semibold">Default</th>
                                        <th className="px-3 py-2 text-left font-semibold">Description</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-700">
                                    <tr>
                                        <td className="px-3 py-2">isOpen</td>
                                        <td className="px-3 py-2"><code>boolean</code></td>
                                        <td className="px-3 py-2"><code>false</code></td>
                                        <td className="px-3 py-2">Controls modal visibility.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2">onClose</td>
                                        <td className="px-3 py-2"><code>() ⇒ void</code></td>
                                        <td className="px-3 py-2">—</td>
                                        <td className="px-3 py-2">Callback when modal is closed (also on outside click).</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2">title</td>
                                        <td className="px-3 py-2"><code>string</code></td>
                                        <td className="px-3 py-2"><code>undefined</code></td>
                                        <td className="px-3 py-2">Header text of the modal.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2">children</td>
                                        <td className="px-3 py-2"><code>React.ReactNode</code></td>
                                        <td className="px-3 py-2">—</td>
                                        <td className="px-3 py-2">Body content of the modal.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2">className</td>
                                        <td className="px-3 py-2"><code>string</code></td>
                                        <td className="px-3 py-2"><code>"bg-white dark:bg-slate-400 text-black dark:text-white"</code></td>
                                        <td className="px-3 py-2">Custom Tailwind or CSS classes for the modal container.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2">style</td>
                                        <td className="px-3 py-2"><code>React.CSSProperties</code></td>
                                        <td className="px-3 py-2"><code>{`{}`}</code></td>
                                        <td className="px-3 py-2">Custom inline styles.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2">ThemeColor</td>
                                        <td className="px-3 py-2"><code>string</code></td>
                                        <td className="px-3 py-2"><code>"lightgray"</code></td>
                                        <td className="px-3 py-2">Color for header, footer, and close button.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2">footer</td>
                                        <td className="px-3 py-2"><code>React.ReactNode</code></td>
                                        <td className="px-3 py-2"><code>undefined</code></td>
                                        <td className="px-3 py-2">Footer section with buttons or extra info.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* ---------- Example Code Snippet ---------- */}
                    <section>
                        <h2 className="text-xl font-semibold mb-3">💡 Example Snippet</h2>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
                            {`<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="User Profile"
  ThemeColor="#3498db"
  footer={
    <div className="flex justify-end gap-2">
      <button className="px-3 py-1 bg-gray-400 text-white rounded">Cancel</button>
      <button className="px-3 py-1 bg-blue-500 text-white rounded">Save</button>
    </div>
  }
>
  <div className="p-4 space-y-2">
    <p>This is the modal body content.</p>
    <input type="text" placeholder="Enter something..." className="border px-2 py-1 rounded w-full"/>
  </div>
</Modal>`}
                        </pre>

                    </section>

                    {/* ---------- Notes ---------- */}
                    <section className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded text-sm">
                        <p className="text-blue-700 dark:text-blue-200">
                            💡 Tip: Use <code>ThemeColor</code> to match your app palette.
                            Clicking outside closes the modal. Supports responsive widths and heights for Tailwind v4.
                        </p>
                    </section>
                </div>
            </Card>
        </>
    );
};

export default DemoModal;
