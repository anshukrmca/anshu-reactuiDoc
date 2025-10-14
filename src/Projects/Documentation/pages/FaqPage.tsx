import React, { useState } from "react";
import { Accordion, Button, Card, hexToRgba, Input, SearchBox, TabCard, Textarea } from "anshu-reactui";
import { useAppSelector } from "../../../CustomeHooks/Hooks";
import DynamicIcon from "../../../Components/Icons/DynamicIcon";

// Corrected FAQ data with `title` and `content` for Accordion
export const faqData = {
  general: [
    {
      id: '1',
      title: 'What is this library for?',
      content: 'This NPM library provides reusable UI components and utilities to speed up your React project development.'
    },
    {
      id: '2',
      title: 'Which frameworks are supported?',
      content: 'It is primarily built for React, but some utilities can also work with other frameworks if adapted.'
    },
    {
      id: '3',
      title: 'How do I install it?',
      content: 'Run `npm install anshu-reactui` or `yarn add anshu-reactui` in your project directory.'
    },
  ],
  theme: [
    {
      id: '4',
      title: 'Can I customize the theme colors?',
      content: 'Yes! The library supports theme customization using a theme provider or passing color props directly.'
    },
    {
      id: '5',
      title: 'Does it support dark mode?',
      content: 'Absolutely. All components are compatible with both light and dark themes.'
    },
    {
      id: '6',
      title: 'Can I create my own custom themes?',
      content: 'Yes, you can override the default theme configuration and create your own color palettes and styles.'
    },
  ],
  userManagement: [
    {
      id: '7',
      title: 'Can I manage user roles?',
      content: 'The library provides components and hooks that help implement user role management in your project.'
    },
    {
      id: '8',
      title: 'Does it include authentication forms?',
      content: 'Yes, there are pre-built login, register, and forgot password components ready to use.'
    },
  ],
  security: [
    {
      id: '9',
      title: 'Are there built-in security features?',
      content: 'While the library focuses on UI, it includes components for secure input handling and token-based authentication workflows.'
    },
    {
      id: '10',
      title: 'Does it support OAuth or JWT?',
      content: 'Yes, it provides helper utilities to integrate OAuth or JWT authentication easily.'
    },
  ],
  troubleshooting: [
    {
      id: '11',
      title: 'What should I do if a component does not render?',
      content: 'Check that all required props are passed correctly and ensure your project meets the library’s version requirements.'
    },
    {
      id: '12',
      title: 'Where can I report bugs?',
      content: 'You can report issues on the GitHub repository under the "Issues" tab.'
    },
    {
      id: '13',
      title: 'Is there documentation available?',
      content: 'Yes, detailed documentation is available on the library’s GitHub README or the official docs site.'
    },
  ],
};

const FaqPage: React.FC = () => {
  const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
  const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);
  const [search, setSearch] = useState("");

  // Filter FAQs based on search text
  const filteredFaqs = (category: keyof typeof faqData) => {
    return faqData[category].filter(faq =>
      faq.title.toLowerCase().includes(search.toLowerCase()) ||
      faq.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <div className="w-full min-h-screen p-4 bg-gray-50 dark:bg-slate-900">
      {/* ---------- Header ---------- */}
      <Card className="my-4 items-center shadow-none  hover:shadow-none overflow-hidden my-Border p-6 my-Background" style={{ background: bgColor }}>
        <div className="w-full bg-indigo-500 rounded-lg text-center py-6 px-4 md:px-6 lg:px-0">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-3 text-white">FAQs</h3>
            <h5 className="text-lg md:text-xl font-medium text-indigo-100 opacity-90 mb-3">
              Require assistance? Here are some of our commonly asked questions!
            </h5>
            <p className="text-indigo-100 opacity-70 mb-2 px-2 md:px-0">
              Discover answers to common queries and find solutions to your concerns with our comprehensive list of frequently asked questions.
            </p>
          </div>
        </div>

        {/* ---------- Search Input ---------- */}
        <div className="my-4">
          <SearchBox
            value={search}
            onChange={(e) => setSearch(e)}
            className="my-Border p-2"
            placeholder="Search FAQ..."
            />
        </div>

        {/* ---------- Tabbed FAQ ---------- */}
        <TabCard
          className="my-4 p-4 hover:shadow-none !shadow-none"
          activeClass="px-6 py-2 font-semibold border-indigo-500 bg-indigo-300/20"
          inactiveClass="px-6 py-2 font-medium text-gray-500 hover:bg-indigo-300/20"
          headerClass="flex flex-wrap justify-center gap-2 md:gap-6"
          panelClass="mt-6"
          style={{ background: bgColor }}
          tabs={[
            { id: "1", label: (<span className="flex gap-2 items-center"><DynamicIcon size={22} color={CommonSave_GlobalValStore?.ThemePrimary} name="CiSettings" />General Settings</span>), content: <Accordion items={filteredFaqs("general")} /> },
            { id: "2", label: (<span className="flex gap-2 items-center"><DynamicIcon size={22} color={CommonSave_GlobalValStore?.ThemePrimary} name="AiOutlineDashboard" />Theme Customization</span>), content: <Accordion items={filteredFaqs("theme")} /> },
            { id: "3", label: <span className="flex gap-2 items-center"><DynamicIcon size={22} color={CommonSave_GlobalValStore?.ThemePrimary} name="FaUserPlus" />User Management</span>, content: <Accordion items={filteredFaqs("userManagement")} /> },
            { id: "4", label: <span className="flex gap-2 items-center"><DynamicIcon size={22} color={CommonSave_GlobalValStore?.ThemePrimary} name="MdOutlineAdminPanelSettings" />Security and Authentication</span>, content: <Accordion items={filteredFaqs("security")} /> },
            { id: "5", label: <span className="flex gap-2 items-center"><DynamicIcon size={22} color={CommonSave_GlobalValStore?.ThemePrimary} name="IoHeadset" />Troubleshooting and Support</span>, content: <Accordion items={filteredFaqs("troubleshooting")} /> },
          ]}
        />
      </Card>

      {/* ---------- Contact Form ---------- */}
      <Card className="my-4 shadow-sm overflow-hidden my-Border p-6 my-Background" style={{ background: bgColor }}>
        <h5 className="font-semibold mb-2">Still Have Questions? We're Here to Help!</h5>
        <span className="opacity-90">
          Contact our support team for personalized assistance. Your satisfaction is our priority! Write your question below and we'll get back to you shortly.
        </span>
        <div className="my-8 flex flex-col justify-center items-center w-full">
          <div className="md:flex gap-4 w-full space-y-4 md:space-y-0">
            <Input label="Your Name" placeholder="Enter Your Name" />
            <Input label="Your Email" placeholder="Enter Your Email" />
          </div>
          <div className="w-full my-4">
            <Textarea label="Your Query" placeholder="Enter your query here..." rows={6} className="my-2" />
          </div>
          <Button variant="primary" className="w-1/2 md:w-1/4">Send Your Query</Button>
        </div>
      </Card>
    </div>
  );
};

export default FaqPage;
