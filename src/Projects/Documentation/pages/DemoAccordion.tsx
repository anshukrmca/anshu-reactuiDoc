import React from "react";
import { CodeViewer } from "../../../Components/CodeViewer/CodeViewer";
import { Card, hexToRgba, Accordion } from "anshu-reactui";
import { useAppSelector } from "../../../CustomeHooks/Hooks";

const DemoAccordion: React.FC = () => {
    const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
    const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);

    // Basic Accordion Example
    const basicItems = [
        {
            id: "1",
            title: "What is an Accordion?",
            content:
                "An Accordion is a UI pattern that allows users to toggle the visibility of sections of related content. It helps keep layouts clean by showing only what's necessary at a time.",
        },
        {
            id: "2",
            title: "Why use Accordions?",
            content:
                "They are ideal for FAQs, feature explanations, or settings pages — anywhere you want to hide content until needed.",
        },
        {
            id: "3",
            title: "Is it responsive?",
            content:
                "Yes. This Accordion is built using Tailwind CSS v4 and is fully responsive with built-in dark mode support.",
            defaultOpen: true,
        },
    ];

    // Multiple Open Example
    const multipleItems = [
        {
            id: "1",
            title: "Open multiple sections",
            content:
                "When `allowMultipleOpen` is enabled, users can expand more than one section simultaneously.",
        },
        {
            id: "2",
            title: "Smooth transitions",
            content:
                "This Accordion uses Tailwind transitions for smooth open and close animations.",
        },
        {
            id: "3",
            title: "Accessibility",
            content:
                "Built with semantic HTML elements and keyboard accessibility in mind.",
        },
    ];

    // Icon Example
    const iconItems = [
        {
            id: "1",
            title: "Accordion with Icons",
            titleIcon: (
                <svg
                    className="w-5 h-5 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 2L15 8H9L12 2Z" />
                </svg>
            ),
            content:
                "You can pass any custom ReactNode or SVG as a `titleIcon` to visually represent sections.",
        },
        {
            id: "2",
            title: "Custom Header Colors",
            titleIcon: (
                <svg
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <circle cx="12" cy="12" r="10" />
                </svg>
            ),
            content:
                "Use the `activeHeader` prop to set a custom Tailwind class for open headers — like a soft green or gradient.",
        },
    ];

    return (
        <>
            <Card
                className="my-4 items-center shadow-none hover:shadow-none overflow-hidden my-Border p-4 my-Background"
                style={{
                    background: CommonSave_GlobalValStore.ThemeBackground && bgColor,
                }}
            >

                <div className="space-y-6">
                    {/* PAGE HEADER */}
                    <div className="space-y-2">
                        <h1 className="text-4xl font-extrabold">Accordion</h1>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                            Accordions let users expand and collapse sections of related content.
                            They are perfect for FAQs, content-heavy interfaces, or step-by-step explanations.
                        </p>
                    </div>

                    {/* INTRODUCTION / WHEN TO USE */}
                    <section className="space-y-2">
                        <h2 className="text-xl font-semibold">When to Use</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            Use accordions when you want to:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                            <li>Show or hide additional information dynamically</li>
                            <li>Display a large amount of related content in a compact view</li>
                            <li>Organize FAQs, settings, or expandable lists</li>
                        </ul>
                    </section>

                    {/* BASIC ACCORDION DEMO */}
                    <section className="space-y-4 my-Border p-4 rounded-md">
                        <h2 className="text-2xl font-semibold">Basic Accordion</h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                            A simple accordion with single-item expansion. Each section toggles open and closed when clicked.
                        </p>

                        <Accordion items={basicItems} />

                        <CodeViewer code={`import Accordion from "@/components/Accordion";

const items = [
  { id: "1", title: "What is Accordion?", content: "An Accordion is a collapsible section component." },
  { id: "2", title: "Why use it?", content: "Useful for FAQs and grouped content." },
  { id: "3", title: "Responsive?", content: "Yes, built with Tailwind v4.", defaultOpen: true },
];

<Accordion items={items} />`} />
                    </section>

                    {/* MULTIPLE OPEN ACCORDION */}
                    <section className="space-y-4 my-Border p-4 rounded-md">
                        <h2 className="text-2xl font-semibold">Allow Multiple Open</h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                            Enable the <code>allowMultipleOpen</code> prop to let users expand multiple panels at once.
                        </p>

                        <Accordion items={multipleItems} allowMultipleOpen />

                        <CodeViewer code={`<Accordion
  allowMultipleOpen
  items={[
    { id: "1", title: "Open multiple", content: "Expand multiple sections together." },
    { id: "2", title: "Smooth transitions", content: "Tailwind-powered animations." },
    { id: "3", title: "Accessibility", content: "Keyboard and screen reader friendly." },
  ]}
/>`} />
                    </section>

                    {/* ACCORDION WITH ICONS */}
                    <section className="space-y-4 my-Border p-4 rounded-md">
                        <h2 className="text-2xl font-semibold">Accordion with Icons</h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                            Add icons to each header using the <code>titleIcon</code> prop.
                            You can also style the active header using <code>activeHeader</code>.
                        </p>

                        <Accordion
                            items={iconItems}
                            activeHeader="bg-green-100 dark:bg-green-600"
                        />

                        <CodeViewer code={`<Accordion
  items={[
    {
      id: "1",
      title: "Accordion with Icons",
      titleIcon: <svg className="w-5 h-5 text-blue-500" ... />,
      content: "You can add custom icons in headers."
    },
    {
      id: "2",
      title: "Custom Colors",
      titleIcon: <svg className="w-5 h-5 text-green-500" ... />,
      content: "Use activeHeader for custom highlight color."
    }
  ]}
  activeHeader="bg-green-100 dark:bg-green-600"
/>`} />
                    </section>

                    {/* PROPS TABLE */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">Props</h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                            The Accordion component is flexible and customizable. Here’s a list of all available props:
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border border-gray-700 rounded-lg overflow-hidden">
                                <thead className="bg-gray-800 text-white">
                                    <tr>
                                        <th className="p-2 text-left">Prop</th>
                                        <th className="p-2 text-left">Type</th>
                                        <th className="p-2 text-left">Default</th>
                                        <th className="p-2 text-left">Description</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-gray-100 dark:bg-gray-900">
                                    <tr>
                                        <td className="p-2 font-medium">items</td>
                                        <td className="p-2">AccordionItemProps[]</td>
                                        <td className="p-2">—</td>
                                        <td className="p-2">List of accordion panels with title, content, and icons.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 font-medium">allowMultipleOpen</td>
                                        <td className="p-2">boolean</td>
                                        <td className="p-2">false</td>
                                        <td className="p-2">Allow more than one panel to be open at a time.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 font-medium">activeHeader</td>
                                        <td className="p-2">string</td>
                                        <td className="p-2">bg-blue-100 dark:bg-blue-500</td>
                                        <td className="p-2">Tailwind classes applied to the active header.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* END NOTE */}
                    <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-12">
                        ✨ Built with Tailwind v4 and React. Fully customizable and accessible out-of-the-box.
                    </p>
                </div>

            </Card>
        </>
    );
};

export default DemoAccordion;
