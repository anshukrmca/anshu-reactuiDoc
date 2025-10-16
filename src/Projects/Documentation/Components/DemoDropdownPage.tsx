import React, { useState } from "react";
import { CodeViewer } from "../../../Components/CodeViewer/CodeViewer";
import { useAppSelector } from "../../../CustomeHooks/Hooks";
import { Card, Dropdown, hexToRgba } from "anshu-reactui";

const DemoDropdownPage: React.FC = () => {
  const [selectedPlain, setSelectedPlain] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [selectedSubType, setSelectedSubType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
  const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);

  // Plain text options
  const plainData = [
    { id: "1", name: "Option 1" },
    { id: "2", name: "Option 2" },
    { id: "3", name: "Option 3" },
  ];

  // Avatar options
  const avatarData = [
    { id: "1", name: "Virat Kohli", avatar: "https://i.pravatar.cc/40?img=1" },
    { id: "2", name: "Rohit Sharma", avatar: "https://i.pravatar.cc/40?img=2" },
    { id: "3", name: "MS Dhoni", avatar: "https://i.pravatar.cc/40?img=3" },
  ];

  // Sub-type options
  const subTypeData = [
    { id: "1", name: "Option A", type: "Type 1" },
    { id: "2", name: "Option B", type: "Type 2" },
    { id: "3", name: "Option C", type: "Type 3" },
  ];

  // Category/grouped options
  const categoryData = [
    {
      category: "Fruits",
      options: [
        { id: "1", name: "Apple" },
        { id: "2", name: "Banana" },
      ],
    },
    {
      category: "Vegetables",
      options: [
        { id: "3", name: "Carrot" },
        { id: "4", name: "Broccoli" },
      ],
    },
  ];


  return (
    <>
      <Card
        className="my-4 items-center shadow-none hover:shadow-none overflow-hidden border my-Border p-4 my-Background"
        style={{
          background: CommonSave_GlobalValStore.ThemeBackground && bgColor,
        }}
      >
        <h1 className="text-2xl font-bold mb-6">⬇️ Dropdown Component Demo</h1>
        <p className="mb-6 text-gray-700 dark:text-gray-300">The Dropdown component provides a versatile and user-friendly way to select options from a list.
          It supports various configurations, including plain text options, avatar options with images,
          sub-type options with additional context, and category/grouped options for better organization.
          The component is designed to be intuitive and easy to use, making it suitable for a wide range of applications such as forms,
          filters, and navigation menus.</p>
        <hr className="my-6 border-gray-300 dark:border-gray-700" />

        {/* ========================= */}
        {/* 🔹 Plain Options */}
        {/* ========================= */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Plain Options</h2>
          <Dropdown
            label="Plain Options"
            dataList={plainData}
            valueName="id"
            valueLabel="name"
            Get_selectedData={setSelectedPlain}
            Set_selectedData={selectedPlain}
            placeholder="Select plain option"
          />
          <CodeViewer
            code={`  const plainData = [
    { id: "1", name: "Option 1" },
    { id: "2", name: "Option 2" },
    { id: "3", name: "Option 3" },
  ];
              
  <Dropdown
    label="Plain Options" // label for the dropdown
    dataList={plainData} // your options data
    valueName="id" // meaning the selected value will be the id {e.g. "1"}
    valueLabel="name" //  meaning the label to show in dropdown is name {e.g. "Option 1"}
    Get_selectedData={setSelectedPlain} // function to set selected value
    Set_selectedData={selectedPlain} // selected value state
    placeholder="Select plain option" // placeholder text
/>`}
          />
        </section>

        {/* ========================= */}
        {/* 🔹 Avatar Options */}
        {/* ========================= */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Avatar Options</h2>
          <Dropdown
            label="Avatar Options"
            dataList={avatarData}
            valueName="name"
            valueLabel="avatar"
            displayLabel="name"
            showImage={true}
            Get_selectedData={setSelectedAvatar}
            Set_selectedData={selectedAvatar}
            placeholder="Select avatar"
          />
          <div>
            <CodeViewer
              code={`const avatarData = [
    { id: "1", name: "Virat Kohli", avatar: "https://i.pravatar.cc/40?img=1" },
    { id: "2", name: "Rohit Sharma", avatar: "https://i.pravatar.cc/40?img=2" },
    { id: "3", name: "MS Dhoni", avatar: "https://i.pravatar.cc/40?img=3" },
  ];
              
  <Dropdown
    label="Avatar Options" // label for the dropdown  
    dataList={avatarData} // your options data
    valueName="name" // meaning the selected value will be the name {e.g. "Virat Kohli"}
    valueLabel="avatar" // meaning the image url is in avatar key {e.g. "https://i.pravatar.cc/40?img=1"}
    displayLabel="name" // meaning the label to show in dropdown is name {e.g. "Virat Kohli"}
    showImage={true} // to show image in options
    Get_selectedData={setSelectedAvatar} // function to set selected value
    Set_selectedData={selectedAvatar} // selected value state
    placeholder="Select avatar" // placeholder text
/>`}
            />
          </div>
        </section>

        {/* ========================= */}
        {/* 🔹 Sub-type Options */}
        {/* ========================= */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Options with Type</h2>
          <Dropdown
            label="Options with Type"
            dataList={subTypeData}
            valueName="id"
            valueLabel="name"
            displayLabel="name"
            Get_selectedData={setSelectedSubType}
            Set_selectedData={selectedSubType}
            placeholder="Select option with type"
          />
          <CodeViewer
            code={`<Dropdown
  label="Options with Type"
  dataList={subTypeData}
  valueName="id"
  valueLabel="name"
  displayLabel="name"
  Get_selectedData={setSelectedSubType}
  Set_selectedData={selectedSubType}
  placeholder="Select option with type"
/>`}
          />
        </section>

        {/* ========================= */}
        {/* 🔹 Category / Grouped Options */}
        {/* ========================= */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Category / Grouped Options</h2>
          <Dropdown
            label="Category Group Options"
            dataList={categoryData}
            valueName="id"
            valueLabel="name"
            displayLabel="name"
            Get_selectedData={setSelectedCategory}
            Set_selectedData={selectedCategory}
            placeholder="Select category option"
          />
          <CodeViewer
            code={`const categoryData = [
    {
      category: "Fruits",
      options: [
        { id: "1", name: "Apple" },
        { id: "2", name: "Banana" },
      ],
    },
    {
      category: "Vegetables",
      options: [
        { id: "3", name: "Carrot" },
        { id: "4", name: "Broccoli" },
      ],
    },
  ];
              
  <Dropdown
    label="Category Group Options" // label for the dropdown
    dataList={categoryData} // your options data
    valueName="id" // meaning the selected value will be the id {e.g. "1"}
    valueLabel="name" //  meaning the label to show in dropdown is name {e.g. "Apple"}
    displayLabel="name" // meaning the label to show in dropdown is name {e.g. "Apple"}
    Get_selectedData={setSelectedCategory} // function to set selected value
    Set_selectedData={selectedCategory} // selected value state
    placeholder="Select category option" // placeholder text
/>`}
          />
        </section>

        {/* ========================= */}
        {/* 🔹 Selected Values Display */}
        {/* ========================= */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Selected Values</h2>
          <p>Selected Plain: <strong>{selectedPlain}</strong></p>
          <p>Selected Avatar: <strong>{selectedAvatar}</strong></p>
          <p>Selected SubType: <strong>{selectedSubType}</strong></p>
          <p>Selected Category: <strong>{selectedCategory}</strong></p>
        </section>
      </Card>
    </>
  );
};

export default DemoDropdownPage;
