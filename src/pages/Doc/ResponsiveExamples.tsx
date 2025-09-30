import { Card, hexToRgba } from "anshu-reactui";
import { useAppSelector } from "../../CustomeHooks/Hooks";

export function ResponsiveExamples() {
  const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
    const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);
  return (
     <Card
      className="my-2 p-2 md:p-4 my-Border my-Background space-y-8"
      style={{
        background: CommonSave_GlobalValStore.ThemeBackground && bgColor,
      }}
    >
      
      <h2 className="text-2xl font-bold">Responsive Examples with Tailwind CSS</h2>
      <p className="text-gray-700 dark:text-gray-300">
        Tailwind's responsive utilities allow you to apply different styles at different breakpoints using prefixes like <code>sm:</code>, <code>md:</code>, <code>lg:</code>, <code>xl:</code>, and <code>2xl:</code>.
      </p>

      {/* Grid Example */}
      <div className="my-Border p-4 rounded space-y-4">
        <h3 className="font-semibold">Responsive Grid</h3>
        <div className="text-sm font-mono mb-2">
          {`<div className="grid grid-cols-1 md:grid-cols-3 gap-3">...</div>`}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-cyan-200 p-4 text-center">1</div>
          <div className="bg-cyan-300 p-4 text-center">2</div>
          <div className="bg-cyan-400 p-4 text-center">3</div>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Note: The layout switches from 1 column on small screens to 3 columns on medium and larger screens.
        </p>
      </div>

      {/* Flex Example */}
      <div className="my-Border p-4 rounded space-y-4">
        <h3 className="font-semibold">Responsive Flex</h3>
        <div className="text-sm font-mono mb-2">
          {`<div className="flex flex-col sm:flex-row gap-3">...</div>`}
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="bg-purple-200 p-4 text-center">A</div>
          <div className="bg-purple-300 p-4 text-center">B</div>
          <div className="bg-purple-400 p-4 text-center">C</div>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Note: The layout is vertical by default but becomes horizontal on screens ≥640px (sm breakpoint).
        </p>
      </div>

      {/* Responsive Text Example */}
      <div className="my-Border p-4 rounded space-y-4">
        <h3 className="font-semibold">Responsive Text Sizes</h3>
        <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">
          Resize the screen to see text size change.
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Note: Tailwind allows you to define font sizes per breakpoint using prefixes.
        </p>
      </div>

      {/* Responsive Margin/Padding Example */}
      <div className="my-Border p-4 rounded space-y-4">
        <h3 className="font-semibold">Responsive Margin / Padding</h3>
        <div className="bg-green-200 p-2 sm:p-4 md:p-6 lg:p-8">
          This box has responsive padding.
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Note: You can adjust spacing at different breakpoints using responsive utilities.
        </p>
      </div>

      {/* Responsive Visibility Example */}
      <div className="my-Border p-4 rounded space-y-4">
        <h3 className="font-semibold">Responsive Visibility</h3>
        <div className="space-x-2">
          <span className="block sm:hidden bg-red-200 p-2">Visible only on mobile (sm:hidden)</span>
          <span className="hidden sm:block md:hidden bg-red-300 p-2">Visible only on small screens</span>
          <span className="hidden md:block lg:hidden bg-red-400 p-2">Visible only on medium screens</span>
          <span className="hidden lg:block bg-red-500 p-2">Visible on large screens and above</span>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Note: Tailwind's responsive visibility utilities control whether an element is visible or hidden at different breakpoints.
        </p>
      </div>
    </Card>
  );
}
