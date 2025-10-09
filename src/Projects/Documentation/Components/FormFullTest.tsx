import React, { useState } from "react";
import { Switch, Input, Textarea, Checkbox, RadioGroup, hexToRgba, Card, FileInput } from "anshu-reactui";
import { useAppSelector } from "../../../CustomeHooks/Hooks";

const FormFullTest: React.FC = () => {
  const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
  const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);
  const [formData, setFormData] = useState({
    text: "",
    email: "",
    password: "",
    number: "",
    color: "#ff0000",
    date: "",
    time: "",
    range: 50,
    message: "",
    selectOption: "",
    acceptTerms: false,
    subscribe: false,
    notifications: true,
    radioOption: "option2",
    file: null as File | null,
    switch1: true,
    switch2: false,
    switch3: false,
  });

  const handleFormChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> | any) => {
      const value = e.target?.type === "checkbox" ? e.target.checked : e.target?.value ?? e;
      setFormData((prev) => ({ ...prev, [field]: value }));
    };


  const radioOptions = [
    { id: "option1", label: "Option 1", value: "option1" },
    { id: "option2", label: "Option 2", value: "option2" },
  ];

  return (
    <>
      <Card
        className="my-4 items-center shadow-none hover:shadow-none overflow-hidden my-Border p-4 my-Background"
        style={{
          background: CommonSave_GlobalValStore.ThemeBackground && bgColor,
        }}
      >
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Form Example</h1>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          This is a comprehensive form example demonstrating various input types including text inputs, textareas, checkboxes, radio buttons, file inputs, and switches.
        </p>


        <form className="p-6 space-y-6 rounded-lg">
          {/* Text Inputs */}
          <Input label="Text" value={formData.text} onChange={handleFormChange("text")} placeholder="Enter text" />
          <Input label="Email" type="email" value={formData.email} onChange={handleFormChange("email")} placeholder="Enter email" />
          <Input label="Password" type="password" value={formData.password} onChange={handleFormChange("password")} placeholder="Enter password" />
          <Input label="Number" type="number" value={formData.number} onChange={handleFormChange("number")} placeholder="Enter number" />
          <Input label="Color" type="color" value={formData.color} onChange={handleFormChange("color")} />
          <Input label="Date" type="date" value={formData.date} onChange={handleFormChange("date")} />
          <Input label="Time" type="time" value={formData.time} onChange={handleFormChange("time")} />
          <Input label="Range" type="range" value={formData.range} onChange={handleFormChange("range")} />

          {/* Textarea */}
          <Textarea label="Message" value={formData.message} onChange={handleFormChange("message")} placeholder="Type your message" rows={3} />

          {/* Checkboxes */}
          <div className="flex space-x-4">
            <Checkbox label="Accept Terms" checked={formData.acceptTerms} onChange={handleFormChange("acceptTerms")} />
            <Checkbox label="Subscribe" checked={formData.subscribe} onChange={handleFormChange("subscribe")} />
          </div>

          {/* Radio Group */}
          <div className="flex space-x-4">
            <RadioGroup
              label="Pick an Option"
              options={radioOptions}
              selectedValue={formData.radioOption}
              onChange={(value) => setFormData((prev) => ({ ...prev, radioOption: value }))}
              variant="primary"
            />
          </div>

          {/* File Input */}
          <FileInput 
            label="Upload your file"
              allowTypes={['.jpg', '.jpeg', '.png', 'application/pdf', '.csv']}
              view={true}
              download={true}
              // onChangeFile={handleFileChange}
              className=''
          />

          {/* Switches */}
          <div className="flex flex-col space-y-2">
            <Switch label="Tailwind Teal" SwitchColor="teal" checked={formData.switch1} onChange={handleFormChange("switch1")} />
            <Switch label="Disabled On" checked disabled />
            <Switch label="Disabled Off" checked={false} disabled />
            <Switch label="Notifications" checked={formData.notifications} onChange={handleFormChange("notifications")} />
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </Card>
    </>
  );
};

export default FormFullTest;
