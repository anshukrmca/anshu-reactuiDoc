import React, { useState } from "react";
import { CodeViewer } from "../../../Components/CodeViewer/CodeViewer";
import { useAppSelector } from "../../../CustomeHooks/Hooks";
import { Card, hexToRgba, InputDatePicker, Dropdown } from "anshu-reactui";

const availableFormats = [
  "YYYY-MM-DD",
  "DD-MM-YYYY",
  "MM-DD-YYYY",
  "DD/MM/YYYY",
  "MM/DD/YYYY",
  "YYYY/MM/DD",
  "YYYY.MM.DD",
  "DD.MM.YYYY",
  "DD MMM YYYY",
  "MMM DD, YYYY",
  "MMMM DD, YYYY",
  "DD MMMM YYYY",
  "MM/YYYY",
  "YYYY/MM",
  "MMM YYYY",
  "MMMM YYYY",
  "HH:mm",
  "HH:mm:ss",
  "hh:mm A",
  "YYYY-MM-DD HH:mm",
  "YYYY-MM-DD HH:mm:ss",
];

const DemoDatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("YYYY-MM-DD");
  const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
  const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);

  return (
    <Card
      className="my-4 items-center shadow-none hover:shadow-none overflow-hidden border my-Border p-4 my-Background"
      style={{
        background: CommonSave_GlobalValStore.ThemeBackground && bgColor,
      }}
    >
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Input DatePicker Demo
      </h1>

      {/* Format Selector */}
      <section className="mb-4">
        <h2 className="text-lg font-semibold my-2">Select Format</h2>
        <Dropdown
          dataList={availableFormats.map((f) => ({ id: f, name: f }))}
          valueName="id"
          valueLabel="name"
          displayLabel="name"
          Set_selectedData={selectedFormat}
          Get_selectedData={(val) => setSelectedFormat(val)}
          placeholder="Select format"
        />
      </section>

      {/* Date Picker */}
      <section>
        <h2 className="text-lg font-semibold my-2">Date Picker</h2>
        <InputDatePicker
          label="Pick a Date"
          placeholder={selectedFormat}
          mand
          setvalue={selectedDate}
          getvalue={setSelectedDate}
          format={selectedFormat}
        />
        <p className="mt-2 text-gray-900 dark:text-gray-100">
          Selected Date: <strong>{selectedDate || "None"}</strong>
        </p>
      </section>

      {/* Formats Info */}
      <section className="mt-4">
        <h2 className="text-lg font-semibold my-2">Available Formats</h2>
        <ul className="list-disc list-inside text-gray-900 dark:text-gray-100">
          {availableFormats.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </section>

      <div className="mt-6">
        <h1 className="my-4">Complete Code</h1>
        <CodeViewer code={codeExample} />
      </div>
    </Card>
  );
};

export default DemoDatePicker;

// =============================
// 🔹 Ready-to-use Code Snippet
// =============================
export const codeExample = `
import React, { useState } from "react";
import InputDatePicker from "anshu-reactui";

const Example = () => {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div className="space-y-4">
      <InputDatePicker
        label="Select Date"
        placeholder={"YYYY-MM-DD"}
        setvalue={selectedDate}
        getvalue={setSelectedDate}
        format={"YYYY-MM-DD} // Dynamic format
      />
      <p>Selected: {selectedDate || "None"}</p>
    </div>
  );
};

export default Example;
`;
