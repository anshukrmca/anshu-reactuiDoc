import React, { useState } from "react";
import { CodeViewer } from "../../../Components/CodeViewer/CodeViewer";
import { useAppSelector } from "../../../CustomeHooks/Hooks";
import { Card, hexToRgba,Input } from "anshu-reactui";

const DemoInputPage: React.FC = () => {
    const [basicValue, setBasicValue] = useState("");
    const [xsValue, setXsValue] = useState("");
    const [smValue, setSmValue] = useState("");
    const [mdValue, setMdValue] = useState("");
    const [lgValue, setLgValue] = useState("");
    const [xlValue, setXlValue] = useState("");
    const [errorValue, setErrorValue] = useState("");
    const [customValue, setCustomValue] = useState("");
    const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
    const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);

    const basicCode = `
<Input
  label="Basic Input"
  placeholder="Enter text..."
  value={basicValue}
  onChange={(e) => setBasicValue(e.target.value)}
/>`;

    const sizeCode = `
<Input label="Extra Small" size="xs" placeholder="xs size" value={xsValue} onChange={e => setXsValue(e.target.value)} />
<Input label="Small" size="sm" placeholder="sm size" value={smValue} onChange={e => setSmValue(e.target.value)} />
<Input label="Medium" size="md" placeholder="md size" value={mdValue} onChange={e => setMdValue(e.target.value)} />
<Input label="Large" size="lg" placeholder="lg size" value={lgValue} onChange={e => setLgValue(e.target.value)} />
<Input label="Extra Large" size="xl" placeholder="xl size" value={xlValue} onChange={e => setXlValue(e.target.value)} />`;

    const errorCode = `
<Input
  label="Input with Error"
  placeholder="Type something..."
  value={errorValue}
  onChange={(e) => setErrorValue(e.target.value)}
  error={true}
  helperText="This field has an error!"
/>`;

    const customCode = `
<Input
  label="Custom Styled Input"
  placeholder="Custom styles"
  value={customValue}
  onChange={(e) => setCustomValue(e.target.value)}
  className="border-blue-500 focus:border-blue-700"
/>`;


    return (
        <>
            <Card
                className="my-4 items-center shadow-none hover:shadow-none overflow-hidden border my-Border p-4 my-Background"
                style={{
                    background: CommonSave_GlobalValStore.ThemeBackground && bgColor,
                }}
            >
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Input Component Demo
                </h1>

                {/* ============================= */}
                {/* 🔹 Basic Input */}
                {/* ============================= */}
                <section className="space-y-2">
                    <h2 className="text-lg font-semibold">Basic Usage</h2>
                    <Input
                        label="Basic Input"
                        placeholder="Enter text..."
                        value={basicValue}
                        onChange={(e) => setBasicValue(e.target.value)}
                    />
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                        Value: <strong>{basicValue}</strong>
                    </p>
                    <CodeViewer code={basicCode} />
                </section>

                {/* ============================= */}
                {/* 🔹 Sizes */}
                {/* ============================= */}
                <section className="space-y-4">
                    <h2 className="text-lg font-semibold">Sizes</h2>
                    <Input
                        label="Extra Small"
                        placeholder="xs size"
                        size="xs"
                        value={xsValue}
                        onChange={(e) => setXsValue(e.target.value)}
                    />
                    <Input
                        label="Small"
                        placeholder="sm size"
                        size="sm"
                        value={smValue}
                        onChange={(e) => setSmValue(e.target.value)}
                    />
                    <Input
                        label="Medium"
                        placeholder="md size"
                        size="md"
                        value={mdValue}
                        onChange={(e) => setMdValue(e.target.value)}
                    />
                    <Input
                        label="Large"
                        placeholder="lg size"
                        size="lg"
                        value={lgValue}
                        onChange={(e) => setLgValue(e.target.value)}
                    />
                    <Input
                        label="Extra Large"
                        placeholder="xl size"
                        size="xl"
                        value={xlValue}
                        onChange={(e) => setXlValue(e.target.value)}
                    />
                    <CodeViewer code={sizeCode} />
                </section>

                {/* ============================= */}
                {/* 🔹 Error State */}
                {/* ============================= */}
                <section className="space-y-2">
                    <h2 className="text-lg font-semibold">Error State</h2>
                    <Input
                        label="Input with Error"
                        placeholder="Type something..."
                        value={errorValue}
                        onChange={(e) => setErrorValue(e.target.value)}
                        error={true}
                        helperText="This field has an error!"
                    />
                    <CodeViewer code={errorCode} />
                </section>

                {/* ============================= */}
                {/* 🔹 Custom Styling */}
                {/* ============================= */}
                <section className="space-y-2">
                    <h2 className="text-lg font-semibold">Custom Styling</h2>
                    <Input
                        label="Custom Styled Input"
                        placeholder="Custom styles"
                        value={customValue}
                        onChange={(e) => setCustomValue(e.target.value)}
                        className="border-blue-500 focus:border-blue-700"
                    />
                    <CodeViewer code={customCode} />
                </section>

                <div className="mt-8">
                    <h1 className="">Complete Code </h1>
                    <CodeViewer code={`import React, { useState } from "react";
import {Input} from "anshu-reactui";

const DemoInputPage: React.FC = () => {

const [basicValue, setBasicValue] = useState("");

return (
    <> 
        <Input label="Extra Small" size="xs" placeholder="xs size" value={xsValue} onChange={e => setXsValue(e.target.value)} />
        <Input label="Small" size="sm" placeholder="sm size" value={smValue} onChange={e => setSmValue(e.target.value)} />
        <Input label="Medium" size="md" placeholder="md size" value={mdValue} onChange={e => setMdValue(e.target.value)} />
        <Input label="Large" size="lg" placeholder="lg size" value={lgValue} onChange={e => setLgValue(e.target.value)} />
        <Input label="Extra Large" size="xl" placeholder="xl size" value={xlValue} onChange={e => setXlValue(e.target.value)} />;
        <Input
            label="Custom Styled Input"
            placeholder="Custom styles"
            value={customValue}
            onChange={(e) => setCustomValue(e.target.value)}
            className="border-blue-500 focus:border-blue-700"
        /> 
    </>
)};
export default DemoInputPage;
    
    `} />


                </div>
            </Card>


        </>
    );
};

export default DemoInputPage;
