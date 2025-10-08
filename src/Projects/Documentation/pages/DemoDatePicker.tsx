import React, { useState } from "react";
import { CodeViewer } from "../../../Components/CodeViewer/CodeViewer";
import { useAppSelector } from "../../../CustomeHooks/Hooks";
import { Card, hexToRgba, InputDatePicker } from "anshu-reactui/lib";

const DemoDatePicker: React.FC = () => {
  const [selectedDate1, setSelectedDate1] = useState("");
  const [selectedDate2, setSelectedDate2] = useState("");
  const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
  const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);

  return (
    <Card
      className="my-4 items-center shadow-none hover:shadow-none overflow-hidden my-Border p-4 my-Background"
      style={{
        background: CommonSave_GlobalValStore.ThemeBackground && bgColor,
      }}
    >
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Input DatePicker Demo
      </h1>


      {/* ============================= */}
      {/* 🔹 Single Date Picker */}
      {/* ============================= */}
      <section>
        <h2 className="text-lg font-semibold my-2">Single Date Picker</h2>
        <InputDatePicker
          label="Select Date"
          placeholder="DD/MM/YYYY"
          mand
          setvalue={selectedDate1}
          getvalue={setSelectedDate1}
        />
        <p className="mt-2 text-gray-900 dark:text-gray-100">
          Selected Date: <strong>{selectedDate1 || "None"}</strong>
        </p>
      </section>

      {/* ============================= */}
      {/* 🔹 Another Date Picker */}
      {/* ============================= */}
      <section>
        <h2 className="text-lg font-semibold my-2">Another Date Picker</h2>
        <InputDatePicker
          label="Birthday"
          placeholder="DD/MM/YYYY"
          setvalue={selectedDate2}
          getvalue={setSelectedDate2}
        />
        <p className="mt-2 text-gray-900 dark:text-gray-100">
          Selected Birthday: <strong>{selectedDate2 || "None"}</strong>
        </p>
      </section>
      <div>
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
        label="Select Date" // Optional label
        placeholder="DD/MM/YYYY" // Placeholder text
        mand // Optional: makes the field mandatory
        setvalue={selectedDate}      // Current value
        getvalue={setSelectedDate}   // Handler to update value
      />
      <p>Selected: {selectedDate || "None"}</p>
    </div>
  );
};

export default Example;
`;
