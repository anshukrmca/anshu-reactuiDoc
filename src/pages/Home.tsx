import { Card, toast } from "anshu-reactui";
import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import ProgressBarTestCases from "../Components/ProgressBar/ProgressBarTestCases";
import TailwindDocPlayground from "./TailwindDocPlayground";

const Home: React.FC = () => {
  return (
    <>
      <div className="w-full box-border">
        <TailwindDocPlayground />
      </div>
      <div className="flex flex-col gap-2">
        <Card padding="p-0">
          <ProgressBarTestCases />
        </Card>

        <Card padding="p-0">
          <div className="p-10 grid grid-rows-3 gap-3">
            <button
              onClick={() => toast.info("ℹ️ Info message!")}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Info
            </button>
            <button
              onClick={() => toast.success("✅ Success message!")}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Success
            </button>
            <button
              onClick={() => toast.warning({ message: "⚠️ Warning!", duration: 6000 })}
              className="px-4 py-2 bg-yellow-500 text-white rounded"
            >
              Warning
            </button>
            <button
              onClick={() =>
                toast.error({
                  message: "❌ Error message!",
                  icon: <AiFillInfoCircle />,
                  closeOnClick: false,
                })
              }
              className="px-4 py-2 bg-red-500 rounded text-white"
            >
              Error
            </button>
            <button
              onClick={() =>
                toast.default({
                  message: " default message!",
                  icon: <AiFillInfoCircle />,
                  closeOnClick: false,
                })
              }
              className="px-4 py-2 bg-gray-200 text-red-400 rounded"
            >
              default
            </button>

          </div>
        </Card>



      </div>

    </>

  );
};

export default Home;
