import React, { useState } from "react";
import { Card, hexToRgba,RadioGroup } from "anshu-reactui";
import { CodeViewer } from "../../../Components/CodeViewer/CodeViewer";
import { useAppSelector } from "../../../CustomeHooks/Hooks";
import type { RadioOption } from "anshu-reactui";

const DemoRadio: React.FC = () => {
    const [selected, setSelected] = useState("option 2");
    const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
    const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);

    const options: RadioOption[] = [
        { id: "option 1", label: "Option 1", value: "option 1", helperText: "This is Option 1 color" },
        { id: "option 2", label: "Option 2", value: "option 2", helperText: "This is Option 2 color" },
    ];

    const codeExample = `
import React, { useState } from "react";
import { RadioGroup , RadioOption } from "anshu-reactui";

const Example = () => {
  const [selected, setSelected] = useState("option 2");

  const options: RadioOption[] = [
    { id: "option 1", label: "Option 1", value: "option 1" , helperText: "This is Option 1 color"},
    { id: "option 2", label: "Option 2", value: "option 2" },
  ];

  // helperText="Please select an option"  Helper text below the radio group (Optional)
  // Help text will depends on error state

  return (
    <RadioGroup 
      options={options} // Array of options to display
      selectedValue={selected} // Currently selected value
      onChange={setSelected} // Handler to update selected value
      label="Pick an option" // Label for the radio group
      variant="primary" // Visual style variant
      size="md" // Size of the radio buttons
      horizontal = {true} // Layout direction (horizontal/vertical)
      mand = {true} // Whether selection is mandatory
      error={false} // Error state
      
    />
  );
};

export default Example;
`;

    return (
        <>
            <Card
                className="my-4 items-center shadow-none hover:shadow-none overflow-hidden my-Border p-4 my-Background"
                style={{
                    background: CommonSave_GlobalValStore.ThemeBackground && bgColor,
                }}
            >
                <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Radio Component</h1>
                <p className="mb-6 text-gray-700 dark:text-gray-300">
                    The Radio component allows users to select a single option from a set of predefined choices. It is ideal for scenarios where 
                    only one selection is permitted, such as choosing a payment method or selecting a shipping option. Radio buttons are typically
                     presented in groups, ensuring that selecting one option automatically deselects any previously chosen option within the same group.
                </p>
                <hr className="my-6 border-gray-300 dark:border-gray-700" />

                <div className="space-y-10 text-gray-900 dark:text-gray-100">
                    {/* ============================= */}
                    {/* 🔹 Basic Example */}
                    {/* ============================= */}
                    <section>
                        <h2 className="text-lg font-semibold my-3">Basic Usage</h2>
                        <RadioGroup
                            options={options}
                            selectedValue={selected}
                            onChange={setSelected}
                            label="Pick a color"
                            mand
                        />
                        <p className="mt-2 text-sm">Selected: <strong>{selected}</strong></p>
                    </section>

                    {/* ============================= */}
                    {/* 🔹 Variants Showcase */}
                    {/* ============================= */}
                    <section>
                        <h2 className="text-lg font-semibold mb-3">Variants</h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {[
                                "primary",
                                "success",
                                "danger",
                                "warning",
                                "info",
                                "teal",
                                "purple",
                                "pink",
                            ].map((variant) => (
                                <RadioGroup
                                    key={variant}
                                    options={options}
                                    selectedValue={selected}
                                    onChange={setSelected}
                                    label={`Variant: ${variant}`}
                                    variant={variant as any}
                                    horizontal
                                />
                            ))}
                        </div>
                    </section>

                    {/* ============================= */}
                    {/* 🔹 Sizes Showcase */}
                    {/* ============================= */}
                    <section>
                        <h2 className="text-lg font-semibold mb-3">Sizes</h2>
                        <div className="flex flex-col gap-4">
                            <RadioGroup
                                options={options}
                                selectedValue={selected}
                                onChange={setSelected}
                                size="sm"
                                label="Small Size"
                            />
                            <RadioGroup
                                options={options}
                                selectedValue={selected}
                                onChange={setSelected}
                                size="md"
                                label="Medium Size"
                            />
                            <RadioGroup
                                options={options}
                                selectedValue={selected}
                                onChange={setSelected}
                                size="lg"
                                label="Large Size"
                            />
                        </div>
                    </section>

                    {/* ============================= */}
                    {/* 🔹 Vertical Layout */}
                    {/* ============================= */}
                    <section>
                        <h2 className="text-lg font-semibold mb-3">Vertical Layout</h2>
                        <RadioGroup
                            options={options}
                            selectedValue={selected}
                            onChange={setSelected}
                            label="Select Orientation"
                            horizontal={false}
                            variant="orange"
                        />
                    </section>

                    {/* ============================= */}
                    {/* 🔹 With Mandatory Indicator */}
                    {/* ============================= */}
                    <section>
                        <h2 className="text-lg font-semibold mb-3">With Required Field</h2>
                        <RadioGroup
                            options={options}
                            selectedValue={selected}
                            onChange={setSelected}
                            label="Select an Option"
                            mand
                            variant="secondary"
                        />
                    </section>

                    {/* ============================= */}
                    {/* 💡 Code Example for Users */}
                    {/* ============================= */}
                    <section>
                        <h2 className="text-lg font-semibold mb-3">Code Example</h2>
                        <p className="my-2">Radio Size = "sm" | "md" | "lg";</p>
                        <p className="my-2">Radio Variant = | "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "orange" | "teal" | "purple" | "pink"</p>
                        <div className="rounded-md overflow-hidden"><CodeViewer code={codeExample} /></div>
                    </section>
                </div>
            </Card>
        </>
    );
};

export default DemoRadio;
