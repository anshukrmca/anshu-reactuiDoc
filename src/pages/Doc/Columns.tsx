import { Card, hexToRgba } from 'anshu-reactui';
import { useAppSelector } from '../../CustomeHooks/Hooks';

const Columns: React.FC = () => {
    const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
    const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);
    return (
        <>
            <Card
                className="my-4 items-center shadow-none hover:shadow-none overflow-hidden my-Background"
                style={{
                    background: CommonSave_GlobalValStore.ThemeBackground && bgColor,
                }}
            >
                <div className="space-y-10 px-4 py-6">
                    <h1 className="text-3xl font-bold mb-6">Styling with Columns</h1>
                    <p className="text-gray-700 dark:text-gray-300">
                        Tailwind provides utilities for controlling the number of columns, column widths, and gaps.
                        Use these utilities to build responsive multi-column layouts easily.
                    </p>

                    {/* Number of Columns */}
                    <section>
                        <h2 className="text-xl font-semibold mb-2">Set Number of Columns</h2>
                        <p className="mb-2 text-gray-700 dark:text-gray-300">
                            Use <code>columns-3</code> (or any number) to split content into that number of columns.
                        </p>
                        <div className="columns-3 gap-4 my-Background">
                            <p className="bg-gray-200 dark:bg-gray-500 p-4">Column 1</p>
                            <p className="bg-gray-200 dark:bg-gray-500 p-4">Column 2</p>
                            <p className="bg-gray-200 dark:bg-gray-500 p-4">Column 3</p>
                            <p className="bg-gray-200 dark:bg-gray-500 p-4">Column 4</p>
                            <p className="bg-gray-200 dark:bg-gray-500 p-4">Column 5</p>
                        </div>
                    </section>

                    {/* Column Width */}
                    <section>
                        <h2 className="text-xl font-semibold mb-2">Set Column Width</h2>
                        <p className="mb-2 text-gray-700 dark:text-gray-300">
                            Use <code>columns-[200px]</code> to define a fixed column width.
                        </p>
                        <div className="columns-[200px] gap-4">
                            <p className="bg-gray-200 dark:bg-gray-500 p-4">Column 1</p>
                            <p className="bg-gray-200 dark:bg-gray-500 p-4">Column 2</p>
                            <p className="bg-gray-200 dark:bg-gray-500 p-4">Column 3</p>
                        </div>
                    </section>

                    {/* Column Gap */}
                    <section>
                        <h2 className="text-xl font-semibold mb-2">Set Column Gap</h2>
                        <p className="mb-2 text-gray-700 dark:text-gray-300">
                            Use <code>gap-8</code> (or other spacing classes) to control spacing between columns.
                        </p>
                        <div className="columns-3 gap-8">
                            <p className="bg-gray-200 dark:bg-gray-500 p-4">Column 1</p>
                            <p className="bg-gray-200 dark:bg-gray-500 p-4">Column 2</p>
                            <p className="bg-gray-200 dark:bg-gray-500 p-4">Column 3</p>
                        </div>
                    </section>

                    {/* Custom Value */}
                    <section>
                        <h2 className="text-xl font-semibold mb-2">Use Custom Column Values</h2>
                        <p className="mb-2 text-gray-700 dark:text-gray-300">
                            You can provide custom values like <code>columns-[30vw]</code> to define the ideal column width.
                        </p>
                        <div className="columns-[30vw] gap-4">
                            <p className="bg-gray-200 dark:bg-gray-500 p-4">Column 1</p>
                            <p className="bg-gray-200 dark:bg-gray-500 p-4">Column 2</p>
                            <p className="bg-gray-200 dark:bg-gray-500 p-4">Column 3</p>
                        </div>
                    </section>
                </div>
            </Card>

        </>
    )
}

export default Columns