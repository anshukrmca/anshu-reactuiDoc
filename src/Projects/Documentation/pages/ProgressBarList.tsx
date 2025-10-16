import { Card, ProgressBar } from "anshu-reactui";
import React from "react";
import { useAppSelector } from "../../../CustomeHooks/Hooks";

const ProgressBarList: React.FC = () => {
  const { CommonSave_GlobalValStore } = useAppSelector((state) => state);


  const testCases = [
    { progress: 0, fillColor: "bg-indigo-500", bgColor: "bg-indigo-100", duration: 500, height: "h-3", showPercentage: true },
    { progress: 1, fillColor: "bg-amber-500", bgColor: "bg-amber-100", duration: 500, height: "h-3", showPercentage: false },
    { progress: 2, fillColor: "bg-red-500", bgColor: "bg-red-100", duration: 500, height: "h-3" },
    { progress: 10, fillColor: "bg-green-500", bgColor: "bg-green-100", duration: 600, height: "h-3" },
    { progress: 30, fillColor: "bg-blue-500", bgColor: "bg-blue-100", duration: 700, height: "h-3" },
    { progress: 35, fillColor: "bg-yellow-500", bgColor: "bg-yellow-100", duration: 800, height: "h-3" },
    { progress: 30, fillColor: "bg-purple-500", bgColor: "bg-purple-100", duration: 900, height: "h-3" },
    { progress: 35, fillColor: "bg-pink-500", bgColor: "bg-pink-100", duration: 1000, height: "h-3" },
    { progress: 40, fillColor: "bg-indigo-500", bgColor: "bg-indigo-100", duration: 1100, height: "h-4" },
    { progress: 45, fillColor: "bg-orange-500", bgColor: "bg-orange-100", duration: 1200, height: "h-4" },
    { progress: 50, fillColor: "bg-teal-500", bgColor: "bg-teal-100", duration: 1300, height: "h-4" },
    { progress: 55, fillColor: "bg-cyan-500", bgColor: "bg-cyan-100", duration: 1400, height: "h-4" },
    { progress: 60, fillColor: "bg-lime-500", bgColor: "bg-lime-100", duration: 1500, height: "h-4" },
    { progress: 65, fillColor: "bg-rose-500", bgColor: "bg-rose-100", duration: 1600, height: "h-5" },
    { progress: 70, fillColor: "bg-emerald-500", bgColor: "bg-emerald-100", duration: 1700, height: "h-4" },
    { progress: 75, fillColor: "bg-violet-500", bgColor: "bg-violet-100", duration: 1800, height: "h-3" },
    { progress: 80, fillColor: "bg-fuchsia-500", bgColor: "bg-fuchsia-100", duration: 1900, height: "h-2" },
    { progress: 85, fillColor: "bg-indigo-600", bgColor: "bg-indigo-200", duration: 2000, height: "h-2" },
    { progress: 90, fillColor: "bg-blue-600", bgColor: "bg-blue-200", duration: 2100, height: "h-3" },
    { progress: 95, fillColor: "bg-green-600", bgColor: "bg-green-200", duration: 2200, height: "h-4" },
    { progress: 100, fillColor: "bg-red-600", bgColor: "bg-red-200", duration: 2300, height: "h-5" },
    { progress: 50, fillColor: "bg-slate-400", bgColor: "bg-gray-300", Rounded: "rounded-lg", duration: 1500, height: "h-6" },
  ];

  return (
    <>
      <Card
        className="my-2 p-2 md:p-4 border my-Border my-Background"
        style={{
          background: CommonSave_GlobalValStore.ThemeBackground,
        }}
      >
        <h2 className="text-xl font-semibold mb-4">Progressbar Component Demo</h2>
        <p className="text-sm opacity-70">A variety of test cases demonstrating different configurations of the ProgressBar component.</p>

       <div className="space-y-6 p-4">
      {testCases.map((tc, index) => (
        <div key={index} className="space-y-2 border my-Border p-3 rounded-md bg-gray-50 dark:bg-gray-800">
          <div className="space-y-1 flex sm:gap-8 flex-wrap text-sm text-gray-700 dark:text-gray-300">
            <p><strong>Progress:</strong> {tc.progress}%</p>
            <p><strong>Fill Color:</strong> {tc.fillColor || "default"}</p>
            <p><strong>Background Color:</strong> {tc.bgColor || "default"}</p>
            <p><strong>Height:</strong> {tc.height || "h-4"}</p>
            <p><strong>Rounded:</strong> {tc.Rounded || "rounded-full"}</p>
            <p><strong>Duration:</strong> {tc.duration ?? 1000} ms</p>
            <p><strong>Show Percentage:</strong> {tc.showPercentage ? "Yes" : "No"}</p>
          </div>

          <ProgressBar
            progress={tc.progress}
            fillColor={tc.fillColor}
            bgColor={tc.bgColor}
            height={tc.height || "h-4"}
            Rounded={tc.Rounded || "rounded-full"}
            duration={tc.duration ?? 1000}
            showPercentage={tc.showPercentage ?? true}
          />
        </div>
      ))}
    </div>
      </Card>

    </>

  );
};

export default ProgressBarList;
