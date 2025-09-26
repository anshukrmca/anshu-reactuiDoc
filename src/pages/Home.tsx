import { Alert, Badge, Card, toast } from "anshu-reactui";
import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import ProgressBarTestCases from "../Components/ProgressBar/ProgressBarTestCases";
import TailwindDocPlayground from "./TailwindDocPlayground";
import SwitchTest from "../Components/UI/SwitchTest";
import BreadcrumbDemo from "../Components/UI/BreadcrumbDemo";
import TooltipDemo from "../Components/UI/TooltipDemo";
import TextareaDemo from "../Components/UI/TextareaDemo";
import SpinnerDemo from "../Components/UI/SpinnerDemo";

const Home: React.FC = () => {
  return (
    <>
    <SpinnerDemo/>
    <TextareaDemo/>
    <TooltipDemo/>
    <BreadcrumbDemo/>
      <Badge type="primary">Primary</Badge>
      <Badge type="secondary">Secondary</Badge>
      <Badge type="success">Success</Badge>
      <Badge type="danger">Danger</Badge>
      <Badge type="warning">Warning</Badge>
      <Badge type="info">Info</Badge>
      <Badge type="dark">Dark</Badge>
      <Badge type="orange">Orange</Badge>
      <Badge type="teal">Teal</Badge>
      <Badge type="purple">Purple</Badge>

      <Badge type="primary" light>Primary</Badge>
      <Badge type="secondary" light>Secondary</Badge>
      <Badge type="success" light>Success</Badge>
      <Badge type="danger" light>Danger</Badge>
      <Badge type="warning" light>Warning</Badge>
      <Badge type="info" light>Info</Badge>
      <Badge type="dark" light>Dark</Badge>
      <Badge type="orange" light>Orange</Badge>
      <Badge type="teal" light>Teal</Badge>
      <Badge type="purple" light>Purple</Badge>

      <Badge type="primary" pill>Primary</Badge>
      <Badge type="secondary" pill>Secondary</Badge>
      <Badge type="success" pill>Success</Badge>
      <Badge type="danger" pill>Danger</Badge>
      <Badge type="warning" pill>Warning</Badge>
      <Badge type="info" pill>Info</Badge>
      <Badge type="dark" pill>Dark</Badge>
      <Badge type="orange" pill>Orange</Badge>
      <Badge type="teal" pill>Teal</Badge>
      <Badge type="purple" pill>Purple</Badge>

      <Badge type="primary" light pill>Primary</Badge>
      <Badge type="secondary" light pill>Secondary</Badge>
      <Badge type="success" light pill>Success</Badge>
      <Badge type="danger" light pill>Danger</Badge>
      <Badge type="warning" light pill>Warning</Badge>
      <Badge type="info" light pill>Info</Badge>
      <Badge type="dark" light pill>Dark</Badge>
      <Badge type="orange" light pill>Orange</Badge>
      <Badge type="teal" light pill>Teal</Badge>
      <Badge type="purple" light pill>Purple</Badge>

      <Badge type="primary" gradient>Primary</Badge>
      <Badge type="secondary" gradient>Secondary</Badge>
      <Badge type="success" gradient>Success</Badge>
      <Badge type="danger" gradient>Danger</Badge>
      <Badge type="warning" gradient>Warning</Badge>
      <Badge type="info" gradient>Info</Badge>
      <Badge type="dark" gradient>Dark</Badge>
      <Badge type="orange" gradient>Orange</Badge>
      <Badge type="teal" gradient>Teal</Badge>
      <Badge type="purple" gradient>Purple</Badge>

      <Badge type="primary" gradient pill>Primary</Badge>
      <Badge type="secondary" gradient pill>Secondary</Badge>
      <Badge type="success" gradient pill>Success</Badge>
      <Badge type="danger" gradient pill>Danger</Badge>
      <Badge type="warning" gradient pill>Warning</Badge>
      <Badge type="info" gradient pill>Info</Badge>
      <Badge type="dark" gradient pill>Dark</Badge>
      <Badge type="orange" gradient pill>Orange</Badge>
      <Badge type="teal" gradient pill>Teal</Badge>
      <Badge type="purple" gradient pill>Purple</Badge>

      <Alert className='bg-green-600 text-white' CloseIconColor='white' dismissible AlertIcon={'IoInformationCircleOutline'}>
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      </Alert>
      <Alert className='alert-warning' dismissible AlertIcon={'CiWarning'}>
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      </Alert>
      <Alert className='bg-red-600 text-white rounded-full' CloseIconColor='white' dismissible AlertIcon={'MdOutlineDangerous'}>
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      </Alert>
      <Alert className='text-red-600 border-red-600' dismissible AlertIcon={'FaDAndD'}>
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      </Alert>
      <Alert className='bg-blue-400 text-white rounded-none rounded-tr-2xl rounded-bl-2xl' CloseIconColor='white' dismissible AlertIcon={'IoMdPeople'}>
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      </Alert>
      <Alert className='text-blue-400 border-blue-400 rounded-full' dismissible AlertIcon={'FaHome'}>
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      </Alert>


      <SwitchTest />
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
