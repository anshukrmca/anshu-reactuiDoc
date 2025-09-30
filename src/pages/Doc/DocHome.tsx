import { useAppSelector } from "../../CustomeHooks/Hooks";
import { Card, hexToRgba } from "anshu-reactui/lib";

type Step = {
    title: string;
    description: React.ReactNode;
    code?: string;
};

const DocHome = () => {
    const { CommonSave_GlobalValStore } = useAppSelector((s) => s);
    const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);

    const steps: Step[] = [
        {
            title: "Create your project",
            description: (
                <p>
                    Start by creating a new Vite project if you don’t have one set up
                    already. The most common approach is to use{" "}
                    <a
                        href="https://vite.dev/guide/#scaffolding-your-first-vite-project"
                        className="text-blue-600 dark:text-blue-400 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Create Vite
                    </a>
                    .
                </p>
            ),
            code: `npm create vite@latest my-project
cd my-project
npm install`,
        },

        {
            title: "Install anshu-reactui",
            description: (
                <p>
                    (Additional) Install <code>anshu-reactui</code> to use the UI
                    components in your project.
                </p>
            ),
            code: `npm install anshu-reactui`,
        },

        {
            title: "Import Pre-build CSS",
            description: (
                <p>
                    Import the pre-built CSS file for <code>anshu-reactui</code> into your
                    project.
                </p>
            ),
            code: `/* your CSS (e.g. src/index.css) */
import "anshu-reactui/dist/styles.css";`,
        },

        {
            title: "Start your build",
            description: (
                <p>
                    Run your build (e.g. <code>npm run dev</code>) and make sure your
                    compiled CSS is included in your HTML. Then start using Tailwind’s
                    utility classes.
                </p>
            ),
            code: `npm run dev`,
        },

        {
            title: "Install Tailwind CSS",
            description: (
                <p>
                    Install <code>tailwindcss</code> and <code>@tailwindcss/vite</code>{" "}
                    via npm.
                </p>
            ),
            code: `npm install tailwindcss @tailwindcss/vite`,
        },

        {
            title: "Import Tailwind CSS",
            description: (
                <p>
                    Add an <code>@import "tailwindcss"</code> to your CSS file.
                </p>
            ),
            code: `/* your CSS (e.g. src/index.css) */
@import "tailwindcss";`,
        },
    ];

    return (
        <Card
            className="my-8 shadow-none hover:shadow-none overflow-hidden my-Background"
            style={{
                background:
                    CommonSave_GlobalValStore.ThemeBackground && bgColor,
            }}
        >
            {/* Intro */}
            <div className="px-6 py-6 md:py-8 lg:py-10">
                <p
                    data-section="true"
                    className="font-mono text-xs tracking-widest uppercase text-gray-600 dark:text-gray-400"
                >
                    Installation
                </p>
                <h1 className="mt-2 text-2xl font-semibold tracking-tight text-gray-950 dark:text-white">
                    Get started with{" "}
                    <strong className="uppercase">anshu-reactui</strong> with Tailwind CSS
                </h1>
                <div className="mt-4 max-w-prose">
                    <p className="text-base text-gray-700 dark:text-gray-300">
                        Tailwind CSS works by scanning all of your HTML files, JavaScript
                        components, and other templates for class names, generating the
                        corresponding styles, and writing them to a static CSS file.
                    </p>
                    <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
                        It’s fast, flexible, and reliable — with zero-runtime.
                    </p>
                </div>
            </div>

            <div className="px-6 pb-8 md:pb-10 lg:pb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                    Installing Tailwind CSS as a Vite plugin
                </h2>

                <div className="space-y-10">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col lg:flex-row gap-6 lg:gap-10"
                        >
                            {/* Number + Title + Description */}
                            <div className="flex-none lg:w-1/2">
                                <div className="flex items-start gap-4">
                                    <div className="border text-xs px-2 py-1 border-t-transparent border-b-transparent">
                                        {String(idx + 1).padStart(2, "0")}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                            {step.title}
                                        </h3>
                                        <div className="mt-2 text-base text-gray-700 dark:text-gray-300">
                                            {step.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Code block */}
                            {step.code && (
                                <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto">
                                    <pre className="text-sm font-mono text-gray-900 dark:text-gray-100">
                                        <code>{step.code}</code>
                                    </pre>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
};

export default DocHome;
