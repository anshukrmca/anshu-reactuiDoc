import { useState } from "react";
import DemoCheckboxPage from "./DemoCheckboxPage";
import { CodeViewer } from "../../../Components/CodeViewer/CodeViewer";
import { Card, hexToRgba, SweetAlert } from "anshu-reactui";
import { useAppSelector } from "../../../CustomeHooks/Hooks";

type AlertType =
    | "basic"
    | "confirm"
    | "autoClose"
    | "success"
    | "custom"
    | "error"
    | "ajax"
    | null;

export default function DemoSweetAlert() {
    const [alertType, setAlertType] = useState<AlertType>(null);
    const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
    const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);

    const show = (type: AlertType) => setAlertType(type);
    const close = () => setAlertType(null);

    // 🔹 Helper: Generate example block
    const renderExample = (
        title: string,
        description: string,
        type: AlertType,
        code: string
    ) => (
        <div className="border my-Border rounded-2xl p-4 backdrop-blur">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
            <button onClick={() => show(type)} className="px-4 py-2 btn btn-success">
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
                className="my-4 items-center shadow-none hover:shadow-none overflow-hidden border my-Border p-4 my-Background space-y-6"
                style={{
                    background: CommonSave_GlobalValStore.ThemeBackground && bgColor,
                }}
            >
                {/* 📘 Header */}
                <div>
                    <h1 className="text-3xl font-bold mb-2">SweetAlert Component</h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                        Beautiful, fully customizable alert modals built with React +
                        TailwindCSS v4. Supports variants like <b>Basic</b>,{" "}
                        <b>Confirm</b>, <b>Auto-Close</b>, <b>Success</b>, <b>Error</b>,{" "}
                        <b>Ajax</b>, and <b>Custom HTML</b>.
                    </p>
                </div>

                {/* 💡 Basic Alert */}
                {renderExample(
                    "Basic Alert",
                    "A simple alert with title and message.",
                    "basic",
                    `<SweetAlert
  show
  type="basic"
  title="Hello!"
  message="This is a simple Sweet Alert."
  onClose={() => setAlertType(null)}
/>`
                )}

                {/* ⚠️ Confirm Alert */}
                {renderExample(
                    "Confirm Alert",
                    "Shows confirmation dialog with OK/Cancel buttons. On confirm, transitions to success.",
                    "confirm",
                    `<SweetAlert
  show
  type="confirm"
  title="Are you sure?"
  message="You won’t be able to revert this!"
  onConfirm={() => console.log("Confirmed!")}
  onClose={() => setAlertType(null)}
/>`
                )}

                {/* ⏳ Auto-Close Alert */}
                {renderExample(
                    "Auto-Close Alert",
                    "Closes automatically after the given duration and shows a progress bar.",
                    "autoClose",
                    `<SweetAlert
  show
  type="autoClose"
  title="Auto close alert"
  message="This alert will close automatically."
  duration={4000}
  onClose={() => setAlertType(null)}
/>`
                )}

                {/* ✅ Success Alert */}
                {renderExample(
                    "Success Alert",
                    "Used to display successful completion of actions.",
                    "success",
                    `<SweetAlert
  show
  type="success"
  title="Success!"
  message="Operation completed successfully!"
  onClose={() => setAlertType(null)}
/>`
                )}

                {/* ❌ Error Alert */}
                {renderExample(
                    "Error Alert",
                    "Used to display error messages or failed actions.",
                    "error",
                    `<SweetAlert
  show
  type="error"
  title="Error!"
  message="Something went wrong!"
  onClose={() => setAlertType(null)}
/>`
                )}

                {/* 🔄 Ajax Request Alert */}
                {renderExample(
                    "Ajax Request Alert",
                    "Simulates an async request (loading → success).",
                    "ajax",
                    `<SweetAlert
  show
  type="ajax"
  title="Send data?"
  message="Simulate a request to the server."
  onClose={() => setAlertType(null)}
/>`
                )}

                {/* 🧩 Custom HTML */}
                {renderExample(
                    "Custom HTML / React Node",
                    "You can pass any JSX node instead of message text.",
                    "custom",
                    `<SweetAlert
  show
  type="custom"
  title="Custom Content"
  html={
    <div className="space-y-2 text-left">
      <p>You can render <b>React nodes</b> or elements here.</p>
      <button className="bg-gray-800 text-white px-3 py-1 rounded">Custom Button</button>
    </div>
    // you can render any components also.
  }
  onClose={() => setAlertType(null)}
/>`
                )}

                {/* 🧠 Live Active Alert Renderer */}
                {alertType && (
                    <SweetAlert
                        show={!!alertType}
                        type={alertType}
                        onClose={close}
                        onConfirm={() => console.log("Confirmed!")}
                        title={
                            alertType === "confirm"
                                ? "Are you sure?"
                                : alertType === "ajax"
                                    ? "Send data?"
                                    : alertType === "autoClose"
                                        ? "Auto close alert"
                                        : alertType === "success"
                                            ? "Success!"
                                            : alertType === "error"
                                                ? "Error!"
                                                : alertType === "custom"
                                                    ? "Custom Content"
                                                    : "Hello!"
                        }
                        message={
                            alertType === "autoClose"
                                ? "This alert will close automatically with a progress bar."
                                : alertType === "confirm"
                                    ? "You won’t be able to revert this!"
                                    : alertType === "ajax"
                                        ? "Simulate sending a request to the server."
                                        : alertType === "success"
                                            ? "Operation completed successfully!"
                                            : alertType === "error"
                                                ? "Something went wrong!"
                                                : alertType === "basic"
                                                    ? "This is a basic Sweet Alert message."
                                                    : ""
                        }
                        html={
                            alertType === "custom" ? (
                                <div className="text-left space-y-2">
                                    <p>
                                        You can render <b>React nodes</b> or <code>code blocks</code> here:
                                    </p>
                                    <button className="px-3 py-1 bg-gray-800 text-white rounded text-sm">
                                        Example Button
                                    </button>
                                    <DemoCheckboxPage />
                                </div>
                            ) : undefined
                        }
                        duration={3000}
                    />
                )}

                <section>
                    <h1 className="text-xl font-bold mb-3">Complete Example</h1>
                    <CodeViewer
                        code={`import React, { useState } from 'react';
import { SweetAlert } from 'anshu-reactui';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    console.log('User confirmed!');
    setOpen(false);
  };

  const handleCancel = () => {
    console.log('User cancelled!');
    setOpen(false);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">SweetAlert Example</h2>

      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Show Alert
      </button>

      <SweetAlert
        open={open}                         // Control alert visibility
        title="Delete Confirmation"          // Alert title
        message="Are you sure you want to delete this file?" // Alert message
        type="warning"                       // Type: success | error | warning | info
        showCancelButton={true}              // Show cancel button
        confirmText="Yes, Delete"            // Confirm button label
        cancelText="Cancel"                  // Cancel button label
        onConfirm={handleConfirm}            // Confirm callback
        onCancel={handleCancel}              // Cancel callback
        autoClose={false}                    // Auto-close after confirm (optional)
        iconSize={60}                        // Custom icon size (optional)
        className=""                         // Custom styling (optional)
      />
    </div>
  );
};

export default App;`}
                    />
                </section>

            </Card>
        </>
    );
}
