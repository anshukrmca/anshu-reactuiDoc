import { useState } from "react";
import { toast, ToastContainer, Card, hexToRgba } from "anshu-reactui";
import { useAppSelector } from "../../../CustomeHooks/Hooks";
import { CodeViewer } from "../../../Components/CodeViewer/CodeViewer";

export default function DemoToast() {
    const [loading, setLoading] = useState(false);
    const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
    const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);

    const showExample = (type: string) => {
        switch (type) {
            case "success":
                toast.success("Operation completed successfully!");
                break;
            case "error":
                toast.error("Something went wrong!");
                break;
            case "info":
                toast.info("Here’s an informational message for you.");
                break;
            case "warning":
                toast.warning("Please check your inputs before proceeding!");
                break;
            case "custom":
                toast.success({
                    message: (
                        <div className="flex items-center gap-2">
                            <span>Custom JSX Toast 🎨</span>
                            <button className="px-2 py-1 bg-white/20 rounded text-sm hover:bg-white/30">
                                Click
                            </button>
                        </div>
                    ),
                    duration: 4000,
                });
                break;
            case "promise":
                setLoading(true);
                toast.info("Uploading file...");
                setTimeout(() => {
                    setLoading(false);
                    toast.success("Upload completed successfully!");
                }, 2500);
                break;
        }
    };

const getButtonClass = (type?: string) => {
    if (type === "error") return "btn-animate-danger";
    if (type === "custom" || type === "promise") return "btn-animate-teal";
    if (type) return `btn-animate-${type}`;
};




    const renderExample = (
        title: string,
        desc: string,
        type: string,
        code: string
    ) => (
        <div className="border my-Border rounded-2xl p-6 bg-white/5 dark:bg-slate-900/40 backdrop-blur">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{desc}</p>
            <p>{type}</p>

            <button
                onClick={() => showExample(type)}
                className={`px-4 py-1 btn-animate ${getButtonClass(type)} text-sm`}

            >
                Try {title}
            </button>

            <div className="rounded-md overflow-hidden my-2">
                <CodeViewer code={code} />
            </div>
        </div>
    );

    return (
        <>
            <Card
                className="my-4 items-center shadow-none hover:shadow-none overflow-hidden border my-Border p-4 my-Background space-y-4"
                style={{
                    background: CommonSave_GlobalValStore.ThemeBackground && bgColor,
                }}
            >
                {/* Header */}
                <div>
                    <h1 className="text-3xl font-bold mb-2">Toast Notifications</h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                        Lightweight, flexible toast notifications. Supports success, error,
                        info, warning, and custom JSX messages. Built with TailwindCSS and
                        React.
                    </p>
                </div>

                {/* ✅ Success Toast */}
                {renderExample(
                    "Success Toast",
                    "Displays a green toast for successful operations.",
                    "success",
                    `toast.success("Operation completed successfully!");`
                )}

                {/* ❌ Error Toast */}
                {renderExample(
                    "Error Toast",
                    "Displays a red toast for failed or invalid actions.",
                    "error",
                    `toast.error("Something went wrong!");`
                )}

                {/* ℹ️ Info Toast */}
                {renderExample(
                    "Info Toast",
                    "Displays a blue toast for general information.",
                    "info",
                    `toast.info("This is an informational message.");`
                )}

                {/* ⚠️ Warning Toast */}
                {renderExample(
                    "Warning Toast",
                    "Displays a yellow toast for caution messages.",
                    "warning",
                    `toast.warning("Please check your inputs before proceeding!");`
                )}

                {/* 🎨 Custom JSX Toast */}
                {renderExample(
                    "Custom JSX Toast",
                    "You can pass React nodes for fully custom toasts.",
                    "custom",
                    `toast.success({
  message: (
    <div className="flex items-center gap-2">
      <span>Custom JSX Toast 🎨</span>
      <button className="px-2 py-1 bg-white/20 rounded text-sm hover:bg-white/30">
        Click
      </button>
    </div>
  ),
  duration: 4000,
});`
                )}

                {/* ⏳ Promise Simulation Toast */}
                {renderExample(
                    "Async Toast",
                    "Simulates a loading → success flow with async code.",
                    "promise",
                    `toast.info("Uploading file...");
setTimeout(() => {
  toast.success("Upload completed successfully!");
}, 2500);`
                )}

                <div className="space-y-2">
                    <h1 className="my-4 font-bold">Complete Code</h1>
                    <p> ToastType = "success" | "info" | "warning" | "error" | "default"; </p>
                    <p> ToastTheme = "light" | "colored"; </p>
                    <p> Toast position =  "top-right" | "top-left" | "top-center" | "bottom-right" | "bottom-left" | "bottom-center";</p>

                    <div className="rounded-md overflow-hidden">
                        <CodeViewer
                            code={`import React, { useState } from 'react';
import { ToastContainer, toast } from 'anshu-reactui';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const showSuccess = () => toast.success("Operation completed successfully!");
  const showError = () => toast.error("Something went wrong!");
  const showInfo = () => toast.info("Here’s some information for you.");
  const showWarning = () => toast.warning("Please check your inputs before proceeding.");
  const showCustom = () =>
    toast.success({
      message: (
        <div className="flex items-center gap-2">
          <span>Custom JSX Toast 🎨</span>
          <button className="px-2 py-1 bg-white/20 rounded text-sm hover:bg-white/30">
            Click Me
          </button>
        </div>
      ),
      duration: 4000,
    });

  const showAsync = () => {
    setLoading(true);
    toast.info("Uploading file...");
    setTimeout(() => {
      setLoading(false);
      toast.success("Upload completed successfully!");
    }, 2500);
  };

  return (
    <div className="p-4 max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-bold mb-4">Toast Example</h2>

      <div className="flex flex-col gap-2">
        <button
          onClick={showSuccess}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Show Success Toast
        </button>

        <button
          onClick={showError}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Show Error Toast
        </button>

        <button
          onClick={showInfo}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Show Info Toast
        </button>

        <button
          onClick={showWarning}
          className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
        >
          Show Warning Toast
        </button>

        <button
          onClick={showCustom}
          className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
        >
          Show Custom JSX Toast
        </button>

        <button
          onClick={showAsync}
          disabled={loading}
          className={\`px-4 py-2 rounded-md text-white \${loading ? "bg-gray-400" : "bg-indigo-500 hover:bg-indigo-600"}\`}
        >
          {loading ? "Uploading..." : "Show Async Toast"}
        </button>
      </div>

      {/* ToastContainer must be included once in your app */}
      <ToastContainer
        position="top-right"
        theme="colored"
        autoClose={3000}
        newestOnTop
        pauseOnHover
      />
    </div>
  );
};

export default App;`}
                        />
                    </div>
                </div>
            </Card>

        </>
    );
}
