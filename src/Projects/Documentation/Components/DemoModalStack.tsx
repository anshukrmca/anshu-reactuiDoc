import React, { useState } from "react";
import { Card, hexToRgba, ModalStack, ModalStackManager } from "anshu-reactui";
import DynamicIcon from "../../../Components/Icons/DynamicIcon";
import { CodeViewer } from "../../../Components/CodeViewer/CodeViewer";
import { useAppSelector } from "../../../CustomeHooks/Hooks";

const DemoModalStackPage: React.FC = () => {
    const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
       const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);
    const [theme, setTheme] = useState(CommonSave_GlobalValStore.ThemePrimary);

    /** Example component to show inside modals */
    const ExampleContent: React.FC<{ label: string }> = ({ label }) => (
        <div className="w-full p-4 space-y-2 text-center text-black dark:text-white">
            <h2 className="font-semibold text-lg">{label}</h2>
            <p className="text-sm">
                Example modal content showing dynamic data and props.
            </p>
        </div>
    );

    /** Open multiple modals dynamically */
    const openMultipleModals = (count: number) => {
        for (let i = 1; i <= count; i++) {
            ModalStackManager.openModal({
                contentId: `modal${i}`,
                title: `Demo Modal ${i}`,
                icon: <DynamicIcon name="FaWindowRestore" size={18} />,
                content: ExampleContent,
                props: { label: `Modal ${i}` },
                width: "500px",
                height: "300px",
            });
        }
    };

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
                    <header className="space-y-2">
                        <h1 className="text-3xl font-bold">🪟 ModalStack</h1>
                        <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
                            The <b>ModalStack</b> component manages multiple modals simultaneously,
                            allowing developers to open, close, and stack dialogs dynamically with a
                            global manager. Fully themeable using <code>ThemeColor</code> and
                            <code>ThemeBackground</code>.
                        </p>
                    </header>

                    {/* ---------- Live Example ---------- */}
                    <section>
                        <h2 className="text-xl font-semibold mb-3">🎯 Live Example</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Click below to open 1–4 modals. Each modal is stacked and draggable.
                        </p>

                        <div className="flex flex-wrap gap-3 mb-6">
                            {[1, 2, 3, 4].map((n) => (
                                <button
                                    key={n}
                                    onClick={() => openMultipleModals(n)}
                                    className={`px-4 py-2 rounded text-white text-sm ${["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-pink-500"][
                                        n - 1
                                    ]
                                        } hover:opacity-90 transition`}
                                >
                                    Open {n} Modal{n > 1 && "s"}
                                </button>
                            ))}
                        </div>

                        {/* Theme color controller */}
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

                        {/* ✅ Themed ModalStack */}
                        {/* <ModalStack
                            ThemeColor={theme}
                            className="rounded-md my-Background"
                        /> */}
                    </section>

                    {/* ========================= 📘 MODAL STACK DOC SECTION ========================= */}
                    <section className="space-y-4">
                        <h2 className="text-lg font-semibold">💻 ModalStack — Global Modal Manager</h2>
                        <p className=" text-sm">
                            The <code>ModalStack</code> component is a global modal handler that can display and stack multiple modals with
                            fullscreen, close, and custom content controls. It’s theme-aware and works perfectly with Tailwind v4.
                        </p>

                        {/* ========== Example Usage Snippet ========== */}
                        <CodeViewer code=
                            {`// 🧩 Import from anshu-reactui
import { ModalStack, ModalStackManager } from "anshu-reactui";

// ✅ Add this at the root of your app (usually in App.tsx ot in your Layout)
<ModalStack
  ThemeColor={CommonSave_GlobalValStore?.ThemePrimary} // any color for Header and Icons
  className="rounded-md my-Background"
  style={{
    background: CommonSave_GlobalValStore.ThemeBackground && bgColor, // for backgound BG color 
  }}
/>

// 🪄 Example: Open a new modal programmatically (trigger by a Function)
ModalStackManager.openModal({
  contentId: "modal1",
  title: "Demo Modal 1",
  content: ExampleContent, // Your React component
  props: { label: "Modal 1" },
  width: "500px",
  height: "300px",
});

// 🧠 Open multiple modals at once
ModalStackManager.openModal({
  contentId: "modal2",
  title: "Demo Modal 2",
  content: AnotherExample,
  props: { label: "Modal 2" },
  width: "600px",
  height: "400px",
});`} />

                        {/* ========== Props Table ========== */}
                        <h3 className="text-md font-semibold mt-4">🧾 Props</h3>
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
                                        <td className="px-3 py-2">className</td>
                                        <td className="px-3 py-2"><code>string</code></td>
                                        <td className="px-3 py-2">""</td>
                                        <td className="px-3 py-2">Additional Tailwind or custom classes applied to each modal wrapper.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2">style</td>
                                        <td className="px-3 py-2"><code>React.CSSProperties</code></td>
                                        <td className="px-3 py-2">{"{}"}</td>
                                        <td className="px-3 py-2">Inline styles for custom themes or layouts.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2">ThemeColor</td>
                                        <td className="px-3 py-2"><code>string</code></td>
                                        <td className="px-3 py-2">"lightgray"</td>
                                        <td className="px-3 py-2">Primary color used for modal header, border, and accents. Accepts any CSS color or hex code.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* ========== Helper Methods Table ========== */}
                        <h3 className="text-md font-semibold mt-6">⚙️ ModalStackManager Methods</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-sm border border-gray-700 rounded-md">
                                <thead className="bg-slate-200 dakr:bg-slate-600">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Method</th>
                                        <th className="px-3 py-2 text-left font-semibold">Arguments</th>
                                        <th className="px-3 py-2 text-left font-semibold">Description</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-700">
                                    <tr>
                                        <td className="px-3 py-2">openModal</td>
                                        <td className="px-3 py-2"><code>ModalItem</code></td>
                                        <td className="px-3 py-2">Opens a new modal with custom content, size, and props.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2">closeModal</td>
                                        <td className="px-3 py-2"><code>contentId: string</code></td>
                                        <td className="px-3 py-2">Closes a specific modal by its <code>contentId</code>.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2">toggleFullscreen</td>
                                        <td className="px-3 py-2"><code>contentId: string</code></td>
                                        <td className="px-3 py-2">Toggles fullscreen mode for the specified modal.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2">getModalStack</td>
                                        <td className="px-3 py-2"><code>() ⇒ ModalItem[]</code></td>
                                        <td className="px-3 py-2">Returns all modals currently managed by the stack.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* ========== Notes ========== */}
                        <div className="bg-gray-800 text-gray-200 p-4 rounded-lg mt-4 text-sm">
                            <p>💡 <strong>Tip:</strong> Place <code>&lt;ModalStack /&gt;</code> only once in your app root — all modals share the same global stack.</p>
                            <p className="mt-2">🎨 Use <code>ThemeColor</code> to sync modal color with your app theme dynamically.</p>
                            <p className="mt-2">🪶 Fully compatible with <code>Tailwind v4</code> utility classes.</p>
                        </div>
                    </section>


                    {/* ---------- API Reference ---------- */}
                    <section>
                        <h2 className="text-xl font-semibold mb-3">⚙️ API Reference</h2>
                        <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                            <div>
                                <strong>ModalStack Props:</strong>
                                <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                                    <li><code>ThemeColor?: string</code> — Sets modal header & highlight color.</li>
                                    <li><code>className?: string</code> — Custom Tailwind classes.</li>
                                    <li><code>style?: React.CSSProperties</code> — Inline style support.</li>
                                </ul>
                            </div>

                            <div>
                                <strong>ModalStackManager Methods:</strong>
                                <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                                    <li><code>openModal(item: ModalItem)</code> — Opens a new modal.</li>
                                    <li><code>closeModal(id: string)</code> — Closes a specific modal.</li>
                                    <li><code>closeAll()</code> — Closes all modals in the stack.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* ---------- Developer Notes ---------- */}
                    <section className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 rounded">
                        <p className="text-sm text-amber-800 dark:text-amber-200">
                            💡 Tip: You can use <code>ModalStackManager</code> anywhere in your
                            app — it doesn’t require direct parent-child linkage. It manages its
                            state globally.
                        </p>
                    </section>
                </div>
            </Card>
        </>
    );
};

export default DemoModalStackPage;
