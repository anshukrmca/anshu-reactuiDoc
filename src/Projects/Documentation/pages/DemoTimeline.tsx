import React from "react";
import { Avatar, TimelineVerticalHang, TimelineHorizontalHang, hexToRgba, Card } from "anshu-reactui";
import { useAppSelector } from "../../../CustomeHooks/Hooks";
import { CodeViewer } from "../../../Components/CodeViewer/CodeViewer";

const DemoTimeline: React.FC = () => {
    const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
    const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);

    const TimeLineCard = () => (
        <div
            className="my-Border my-Background p-2  rounded-lg shadow-md transition-all duration-300 hover:shadow-lg "
        >
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
                {/* Avatar Section */}
                <div className="flex-shrink-0 self-center sm:self-auto">
                    <Avatar className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
                </div>

                {/* Text Section */}
                <div className="flex-1 text-center sm:text-left">
                    <p className="text-base sm:text-lg md:text-xl font-semibold my-1 text-gray-800 dark:text-gray-100">
                        Achievement: 10,000 Followers
                    </p>
                    <p className="text-sm sm:text-base opacity-80 leading-relaxed text-gray-600 dark:text-gray-300">
                        We’ve hit a milestone! Thanks to each and every one of our followers for being part of our community.
                        Here’s to the next 10,000!
                    </p>
                </div>
            </div>
        </div>
    );

    const items = [
        {
            id: 1,
            title: "Friday",
            subtitle: "01:00 PM",
            cardContent: <TimeLineCard />,
        },
        {
            id: 2,
            title: "Design Phase",
            subtitle: "03:30 PM",
            cardContent: <TimeLineCard />,
        },
        {
            id: 3,
            title: "Development",
            subtitle: "05:00 PM",
            cardContent: <TimeLineCard />,
        },
        {
            id: 4,
            title: "Testing",
            subtitle: "07:00 PM",
            cardContent: <TimeLineCard />,
        },
        {
            id: 5,
            title: "QA",
            subtitle: "07:00 PM",
            cardContent: <TimeLineCard />,
        },
    ];

    const codeSnipt = `const TimeLineCard = () => (
        <div className="my-Border my-Background p-2  rounded-lg shadow-md transition-all duration-300 hover:shadow-lg ">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
                {/* Avatar Section */}
                <div className="flex-shrink-0 self-center sm:self-auto">
                    <Avatar className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
                </div>

                {/* Text Section */}
                <div className="flex-1 text-center sm:text-left">
                    <p className="text-base sm:text-lg md:text-xl font-semibold my-1 text-gray-800 dark:text-gray-100">
                        Achievement: 10,000 Followers
                    </p>
                    <p className="text-sm sm:text-base opacity-80 leading-relaxed text-gray-600 dark:text-gray-300">
                        We’ve hit a milestone! Thanks to each and every one of our followers for being part of our community.
                        Here’s to the next 10,000!
                    </p>
                </div>
            </div>
        </div>
);

    const items = [
        {
            id: 1,
            title: "Friday",
            subtitle: "01:00 PM",
            cardContent: <TimeLineCard />,
        },
        {
            id: 2,
            title: "Design Phase",
            subtitle: "03:30 PM",
            cardContent: <TimeLineCard />,
        },
        {
            id: 3,
            title: "Development",
            subtitle: "05:00 PM",
            cardContent: <TimeLineCard />,
        },
        {
            id: 4,
            title: "Testing",
            subtitle: "07:00 PM",
            cardContent: <TimeLineCard />,
        },
        {
            id: 5,
            title: "QA",
            subtitle: "07:00 PM",
            cardContent: <TimeLineCard />,
        },
    ];`;


    return (
        <>
            <Card
                className="my-4 items-center shadow-none hover:shadow-none overflow-hidden my-Border p-4 my-Background space-y-10"
                style={{
                    background: CommonSave_GlobalValStore.ThemeBackground && bgColor,
                }}
            >
                {/* ===== PAGE TITLE ===== */}
                <h1 className="text-3xl font-bold mb-4">Timeline Component Documentation</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    This documentation demonstrates both Vertical and Horizontal Timeline components.
                    Each timeline supports auto-scroll, responsive layout, and dot/line connectors.
                </p>

                {/* ===== VERTICAL TIMELINE DEMO ===== */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Vertical Timeline</h2>
                    <p className="text-gray-500 text-sm">
                        Displays events vertically with alternating cards. Auto-scrolls up & down when content overflows.
                    </p>

                    {/* LIVE DEMO */}
                    <div className="my-Border p-4 rounded-md my-Background">
                        <TimelineVerticalHang
                            items={items}
                            lineColor="bg-blue-500"
                            dotColor="bg-white border-4 border-blue-600"
                            scrollSpeed={0.8}
                            parentClassName=""
                        />
                    </div>

                    {/* PROPS TABLE */}
                    <table className="w-full text-left border mt-4">
                        <thead className="bg-gray-200 dark:bg-gray-700">
                            <tr>
                                <th className="px-2 py-1 border">Prop</th>
                                <th className="px-2 py-1 border">Type</th>
                                <th className="px-2 py-1 border">Default</th>
                                <th className="px-2 py-1 border">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-2 py-1 border">items</td>
                                <td className="px-2 py-1 border">VerticalTimelineItem[]</td>
                                <td className="px-2 py-1 border">—</td>
                                <td className="px-2 py-1 border">Array of timeline items with title, subtitle, and card content.</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-1 border">lineColor</td>
                                <td className="px-2 py-1 border">string</td>
                                <td className="px-2 py-1 border">bg-slate-500</td>
                                <td className="px-2 py-1 border">Tailwind class for vertical line color.</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-1 border">dotColor</td>
                                <td className="px-2 py-1 border">string</td>
                                <td className="px-2 py-1 border">bg-white dark:bg-slate-900 border-4 border-slate-600</td>
                                <td className="px-2 py-1 border">Tailwind class for dot color.</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-1 border">connectorColor</td>
                                <td className="px-2 py-1 border">string</td>
                                <td className="px-2 py-1 border">bg-slate-400 dark:bg-slate-600</td>
                                <td className="px-2 py-1 border">Tailwind class for horizontal connector line on desktop.</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-1 border">cardClassName</td>
                                <td className="px-2 py-1 border">string</td>
                                <td className="px-2 py-1 border">""</td>
                                <td className="px-2 py-1 border">Additional classes for card styling.</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-1 border">scrollSpeed</td>
                                <td className="px-2 py-1 border">number</td>
                                <td className="px-2 py-1 border">0.6</td>
                                <td className="px-2 py-1 border">Auto-scroll speed (px/frame).</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* CODE SNIPPET */}
                    <CodeViewer code={`${codeSnipt}

<TimelineVerticalHang
  items={verticalItems}
  lineColor="bg-blue-500"
  dotColor="bg-white border-4 border-blue-600"
  connectorColor="bg-blue-300"
  scrollSpeed={0.8}
/>`}
                    />
                </section>

                {/* ===== HORIZONTAL TIMELINE DEMO ===== */}
                <section className="space-y-4 mt-10">
                    <h2 className="text-2xl font-semibold">Horizontal Timeline</h2>
                    <p className="text-gray-500 text-sm">
                        Displays events horizontally. Auto-scrolls left & right when content overflows.
                    </p>

                    {/* LIVE DEMO */}
                    <div className="my-Border  p-4 rounded-md my-Background">
                        <TimelineHorizontalHang
                            items={items}
                            lineColor="bg-green-500"
                            dotColor="bg-white border-4 border-green-600"
                            scrollSpeed={0.8}
                        />
                    </div>

                    {/* PROPS TABLE */}
                    <table className="w-full text-left border mt-4">
                        <thead className="bg-gray-200 dark:bg-gray-700">
                            <tr>
                                <th className="px-2 py-1 border">Prop</th>
                                <th className="px-2 py-1 border">Type</th>
                                <th className="px-2 py-1 border">Default</th>
                                <th className="px-2 py-1 border">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-2 py-1 border">items</td>
                                <td className="px-2 py-1 border">HorizontalTimelineItem[]</td>
                                <td className="px-2 py-1 border">—</td>
                                <td className="px-2 py-1 border">Array of timeline items with title, subtitle, and card content.</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-1 border">lineColor</td>
                                <td className="px-2 py-1 border">string</td>
                                <td className="px-2 py-1 border">bg-slate-500</td>
                                <td className="px-2 py-1 border">Tailwind class for horizontal line color.</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-1 border">dotColor</td>
                                <td className="px-2 py-1 border">string</td>
                                <td className="px-2 py-1 border">bg-white dark:bg-slate-900 border-4 border-slate-600</td>
                                <td className="px-2 py-1 border">Tailwind class for dot color.</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-1 border">connectorColor</td>
                                <td className="px-2 py-1 border">string</td>
                                <td className="px-2 py-1 border">bg-slate-400 dark:bg-slate-600</td>
                                <td className="px-2 py-1 border">Tailwind class for horizontal connector line.</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-1 border">cardClassName</td>
                                <td className="px-2 py-1 border">string</td>
                                <td className="px-2 py-1 border">""</td>
                                <td className="px-2 py-1 border">Additional classes for card styling.</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-1 border">scrollSpeed</td>
                                <td className="px-2 py-1 border">number</td>
                                <td className="px-2 py-1 border">0.6</td>
                                <td className="px-2 py-1 border">Auto-scroll speed (px/frame).</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* CODE SNIPPET */}
                    <CodeViewer code={`${codeSnipt}
<TimelineHorizontal
  items={horizontalItems}
  lineColor="bg-green-500"
  dotColor="bg-white border-4 border-green-600"
  connectorColor="bg-green-300"
  scrollSpeed={0.8}
/>`}
                    />
                </section>
            </Card>

        </>

    );
};

export default DemoTimeline;
