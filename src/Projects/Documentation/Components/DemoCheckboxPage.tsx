import React, { useState } from "react";
import { CodeViewer } from "../../../Components/CodeViewer/CodeViewer";
import { Card, Checkbox, hexToRgba } from "anshu-reactui/lib";
import { useAppSelector } from "../../../CustomeHooks/Hooks";

const DemoCheckboxPage: React.FC = () => {
    const [checkedPrimary, setCheckedPrimary] = useState(false);
    const [checkedDanger, setCheckedDanger] = useState(true);
    const [checkedLarge, setCheckedLarge] = useState(false);
    const [checkedError, setCheckedError] = useState(false);
    const [checkedDisabled, setCheckedDisabled] = useState(true);
    const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
    const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);

    const variants = [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
        "orange",
        "teal",
        "purple",
        "pink",
    ] as const;

const codeExample = `
import React, { useState } from "react";
import { Checkbox } from "anshu-reactui";

const ExampleCheckbox = () => {
  const [checkedPrimary, setCheckedPrimary] = useState(false);
  const [checkedDanger, setCheckedDanger] = useState(true);
  const [checkedLarge, setCheckedLarge] = useState(false);
  const [checkedError, setCheckedError] = useState(false);

  return (
    <div className="space-y-6">
      {/* Basic Checkboxes */}
      <Checkbox
        label="Primary Checkbox" // Label for the checkbox
        checked={checkedPrimary} // Controlled checked state    
        onChange={(e) => setCheckedPrimary(e.target.checked)} // Change handler to update state
        helperText="This is a primary checkbox" // Helper text below the checkbox (Optional) Depends on error state
        variant="primary" // Visual style variant 
        error={false} // Error state (Optional)
      />

      <Checkbox
        label="Danger Checkbox"
        checked={checkedDanger}
        onChange={(e) => setCheckedDanger(e.target.checked)}
        helperText="This checkbox is dangerous"
        variant="danger"
      />

      <Checkbox
        label="Large Checkbox"
        checked={checkedLarge}
        onChange={(e) => setCheckedLarge(e.target.checked)}
        helperText="A large sized checkbox"
        size="lg"
        variant="success"
      />

      <Checkbox
        label="Checkbox with Error"
        checked={checkedError}
        onChange={(e) => setCheckedError(e.target.checked)}
        helperText="You must check this"
        error={true}
        variant="warning"
      />

      {/* Sizes Example */}
      <Checkbox label="Small" size="sm" checked={checkedPrimary} onChange={(e) => setCheckedPrimary(e.target.checked)} />
      <Checkbox label="Medium" size="md" checked={checkedPrimary} onChange={(e) => setCheckedPrimary(e.target.checked)} />
      <Checkbox label="Large" size="lg" checked={checkedPrimary} onChange={(e) => setCheckedPrimary(e.target.checked)} />

      {/* Variants Example */}
      <Checkbox label="Secondary Variant" variant="secondary" checked={true} onChange={() => {}} />
      <Checkbox label="Info Variant" variant="info" checked={true} onChange={() => {}} />
      <Checkbox label="Pink Variant" variant="pink" checked={true} onChange={() => {}} />
    </div>
  );
};

export default ExampleCheckbox;
`;

    return (
        <>
            <Card
                className="my-4 items-center shadow-none hover:shadow-none overflow-hidden my-Border p-4 my-Background"
                style={{
                    background: CommonSave_GlobalValStore.ThemeBackground && bgColor,
                }}
            >
                <h1 className="text-2xl font-bold mb-6">☑️ Checkbox Component Demo</h1>

                <p className="my-2">Checkbox Size = "sm" | "md" | "lg";</p>
                <p className="my-2">Checkbox Variant = | "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "orange" | "teal" | "purple" | "pink"</p>

                {/* ========================= */}
                {/* 🔹 Basic Examples */}
                {/* ========================= */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Basic Examples</h2>
                    <div className="space-y-2">
                        <Checkbox
                            label="Primary Checkbox"
                            checked={checkedPrimary}
                            onChange={(e) => setCheckedPrimary(e.target.checked)}
                            helperText="This is a primary checkbox"
                            variant="primary"
                        />

                        <Checkbox
                            label="Danger Checkbox"
                            checked={checkedDanger}
                            onChange={(e) => setCheckedDanger(e.target.checked)}
                            helperText="This checkbox is dangerous"
                            variant="danger"
                        />

                        <Checkbox
                            label="Large Checkbox"
                            checked={checkedLarge}
                            onChange={(e) => setCheckedLarge(e.target.checked)}
                            helperText="A large sized checkbox"
                            size="lg"
                            variant="success"
                        />

                        <Checkbox
                            label="Checkbox with Error"
                            checked={checkedError}
                            onChange={(e) => setCheckedError(e.target.checked)}
                            helperText="You must check this"
                            error={true}
                            variant="warning"
                        />
                    </div>

                    <CodeViewer
                        code={`<Checkbox label="Primary Checkbox" checked={checkedPrimary} onChange={(e) => setCheckedPrimary(e.target.checked)} variant="primary" />`}
                    />
                </section>

                {/* ========================= */}
                {/* 🔹 All Variants Showcase */}
                {/* ========================= */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Variants Showcase</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {variants.map((variant) => (
                            <Checkbox
                                key={variant}
                                label={variant}
                                checked
                                onChange={() => { }}
                                variant={variant}
                                helperText={`This is ${variant} checkbox`}
                            />
                        ))}
                    </div>

                    <CodeViewer
                        code={`<Checkbox label="Danger" variant="danger" checked onChange={() => {}} helperText="This is danger checkbox" />`}
                    />
                </section>

                {/* ========================= */}
                {/* 🔹 Sizes Showcase */}
                {/* ========================= */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Sizes Showcase</h2>
                    <div className="flex items-center gap-6 flex-wrap">
                        <Checkbox
                            label="Small"
                            size="sm"
                            checked={checkedPrimary}
                            onChange={(e) => setCheckedPrimary(e.target.checked)}
                        />
                        <Checkbox
                            label="Medium"
                            size="md"
                            checked={checkedPrimary}
                            onChange={(e) => setCheckedPrimary(e.target.checked)}
                        />
                        <Checkbox
                            label="Large"
                            size="lg"
                            checked={checkedPrimary}
                            onChange={(e) => setCheckedPrimary(e.target.checked)}
                        />
                    </div>

                    <CodeViewer
                        code={`<Checkbox label="Small" size="sm" />\n<Checkbox label="Medium" size="md" />\n<Checkbox label="Large" size="lg" />`}
                    />
                </section>

                {/* ========================= */}
                {/* 🔹 Disabled State */}
                {/* ========================= */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Disabled State</h2>
                    <div className="flex flex-col gap-3">
                        <Checkbox
                            label="Disabled (Checked)"
                            checked={checkedDisabled}
                            onChange={() => setCheckedDisabled(!checkedDisabled)}
                            disabled
                            variant="secondary"
                        />
                        <Checkbox
                            label="Disabled (Unchecked)"
                            checked={false}
                            onChange={() => { }}
                            disabled
                            variant="light"
                        />
                    </div>

                    <CodeViewer
                        code={`<Checkbox label="Disabled" disabled checked variant="secondary" />`}
                    />
                </section>

                {/* ========================= */}
                {/* 🔹 With Helper Text */}
                {/* ========================= */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">With Helper Text</h2>
                    <div className="space-y-3">
                        <Checkbox
                            label="Accept Terms & Conditions"
                            helperText="You must agree before continuing"
                            checked={checkedPrimary}
                            onChange={(e) => setCheckedPrimary(e.target.checked)}
                            variant="info"
                        />
                        <Checkbox
                            label="Subscribe to Newsletter"
                            helperText="Stay up to date with our updates"
                            checked={checkedDanger}
                            onChange={(e) => setCheckedDanger(e.target.checked)}
                            variant="teal"
                            error={true}
                        />
                        <p className="text-sm">Help text depends on Error state (True || False)</p>
                    </div>

                    <CodeViewer
                        code={`<Checkbox label="Accept Terms" helperText="You must agree before continuing" error={true} variant="info" />`}
                    />
                </section>

                <h2 className="text-2xl font-bold mt-8 mb-4">Complete Code Example</h2>
                <CodeViewer code={codeExample} />
            </Card>
        </>
    );
};

export default DemoCheckboxPage;
