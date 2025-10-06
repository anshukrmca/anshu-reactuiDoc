import { useState, type ReactNode } from "react";
import CheatsheetCard from "../../../Components/Box/CheatsheetCard";
import { Alert, Card, hexToRgba } from "anshu-reactui";
import { useAppSelector } from "../../../CustomeHooks/Hooks";


interface ButtonData {
  ID: number;
  Tittle: string;
  jsxExample: ReactNode;
  jsxCode: string;
  htmlCode: string;
  cssCode: string;
}

const AlertList: React.FC = () => {
  const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
  const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);
  const [CheatsheetOpen, setCheatsheetOpen] = useState<string | null>(null);

  const code = `
import { useState } from "react";
import DynamicIcon from "../Icon/DynamicIcon";

const Alert = ({ 
  type = "",
  AlertIcon = null, 
  dismissible = true, 
  children, 
  className, 
  IconColor = '', 
  CloseIconColor = 'gray' 
}) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className={\`alert alert-\${type} \${className} \${dismissible ? "alert-dismissible" : ""} flex items-center\`}
      role="alert"
    >
      <div className="flex gap-2 flex-1">
        {AlertIcon && (
          <span>
            <DynamicIcon name={AlertIcon} size={18} color={IconColor} />
          </span>
        )}
        {children}
      </div>

      {dismissible && (
        <button
          type="button"
          className="btn-close flex items-center justify-center"
          onClick={() => setVisible(false)}
          aria-label="Close"
        >
          <DynamicIcon name="IoMdClose" color={CloseIconColor} size={18} />
        </button>
      )}
    </div>
  );
};

export default Alert;
  `;

  const ButtondataArray: ButtonData[] = [
    {
      ID: 1,
      Tittle: "Basic Alert with Class",
      jsxExample: (
        <>
          <Alert type="" className='alert-primary' dismissible>
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </Alert>
          <Alert type="" className='alert-secondary' dismissible>
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </Alert>
          <Alert type="" className='alert-success' dismissible>
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </Alert>
          <Alert type="" className='alert-info' dismissible>
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </Alert>
          <Alert type="" className='alert-warning' dismissible>
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </Alert>
          <Alert type="" className='alert-danger' dismissible>
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </Alert>
          <Alert type="" className='alert-light' dismissible>
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </Alert>
          <Alert type="" className='alert-dark' dismissible>
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </Alert>
        </>
      ),
      jsxCode: `<Alert type="" className='alert-primary' dismissible>
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
</Alert>

<Alert type="" className='alert-secondary' dismissible>
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
</Alert>

<Alert type="" className='alert-success' dismissible>
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
</Alert>

<Alert type="" className='alert-info' dismissible>
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
</Alert>

<Alert type="" className='alert-warning' dismissible>
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
</Alert>

<Alert type="" className='alert-danger' dismissible>
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
</Alert>

<Alert type="" className='alert-light' dismissible>
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
</Alert>

<Alert type="" className='alert-dark' dismissible>
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
</Alert>`,
      htmlCode: `No Code`,
      cssCode: `className="alert alert-primary"
className="alert alert-secondary"
className="alert alert-success"
className="alert alert-info"
className="alert alert-warning"
className="alert alert-danger"
className="alert alert-light"
className="alert alert-dark"`,
    },
    {
      ID: 2,
      Tittle: "Basic Alert with Type",
      jsxExample: (
        <>
          <Alert type="primary" dismissible>
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </Alert>
          <Alert type="secondary" dismissible>
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </Alert>
          <Alert type="success" dismissible>
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </Alert>
          <Alert type="info" dismissible>
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </Alert>
          <Alert type="warning" dismissible>
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </Alert>
          <Alert type="danger" dismissible>
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </Alert>
          <Alert type="light" dismissible>
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </Alert>
          <Alert type="dark" dismissible>
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </Alert>
        </>
      ),
      jsxCode: `<Alert type="primary" dismissible>
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
</Alert>

<Alert type="secondary" dismissible>
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
</Alert>

<Alert type="success" dismissible>
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
</Alert>

<Alert type="info" dismissible>
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
</Alert>

<Alert type="warning" dismissible>
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
</Alert>

<Alert type="danger" dismissible>
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
</Alert>

<Alert type="light" dismissible>
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
</Alert>

<Alert type="dark" dismissible>
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
</Alert>`,
      htmlCode: `No Html`,
      cssCode: `No Css`,
    },
    {
      ID: 3,
      Tittle: "Outline Alert",
      jsxExample: (
        <>
          <Alert className='alert-outline-primary' dismissible>
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </Alert>
          <Alert className='alert-outline-secondary' dismissible>
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </Alert>
          <Alert className='alert-outline-success' dismissible>
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </Alert>
          <Alert className='alert-outline-info' dismissible>
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </Alert>
          <Alert className='alert-outline-warning' dismissible>
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </Alert>
          <Alert className='alert-outline-danger' dismissible>
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </Alert>
        </>
      ),
      jsxCode: `<Alert className='alert-outline-primary' dismissible>
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
</Alert>

<Alert className='alert-outline-secondary' dismissible>
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
</Alert>

<Alert className='alert-outline-success' dismissible>
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
</Alert>

<Alert className='alert-outline-info' dismissible>
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
</Alert>

<Alert className='alert-outline-warning' dismissible>
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
</Alert>

<Alert className='alert-outline-danger' dismissible>
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
</Alert>`,
      htmlCode: `No Code`,
      cssCode: `className="alert alert-outline-primary"
className="alert alert-outline-secondary"
className="alert alert-outline-success"
className="alert alert-outline-info"
className="alert alert-outline-warning"
className="alert alert-outline-danger"`,
    },
    {
      ID: 4,
      Tittle: "Rounded Solid and Outline Alerts",
      jsxExample: (
        <>
          <Alert className='bg-green-600 text-white rounded-full' CloseIconColor='white' dismissible>
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </Alert>
          <Alert className='text-green-600 border-green-600 rounded-full' dismissible>
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </Alert>
          <Alert className='bg-red-600 text-white rounded-full' CloseIconColor='white' dismissible>
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </Alert>
          <Alert className='text-red-600 border-red-600 rounded-full' dismissible>
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </Alert>
          <Alert className='bg-blue-400 text-white rounded-full' CloseIconColor='white' dismissible>
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </Alert>
          <Alert className='text-blue-400 border-blue-400 rounded-full' dismissible>
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </Alert>

        </>
      ),
      jsxCode: `<Alert className='bg-green-600 text-white rounded-full' CloseIconColor='white' dismissible>
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
</Alert>

<Alert className='text-green-600 border-green-600 rounded-full' dismissible>
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
</Alert>

<Alert className='bg-red-600 text-white rounded-full' CloseIconColor='white' dismissible>
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
</Alert>

<Alert className='text-red-600 border-red-600 rounded-full' dismissible>
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
</Alert>

<Alert className='bg-blue-400 text-white rounded-full' CloseIconColor='white' dismissible>
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
</Alert>

<Alert className='text-blue-400 border-blue-400 rounded-full' dismissible>
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
</Alert>`,
      htmlCode: `No Code`,
      cssCode: `className="bg-green-600 text-white rounded-full"
className="text-green-600 border-green-600 rounded-full"
className="bg-red-600 text-white rounded-full"
className="text-red-600 border-red-600 rounded-full"
className="bg-blue-600 text-white rounded-full"
className="text-blue-600 border-blue-600 rounded-full"`,
    },
    {
      ID: 5,
      Tittle: "Alerts with Icon",
      jsxExample: (
        <>
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

        </>
      ),
      jsxCode: `<Alert className='bg-green-600 text-white' CloseIconColor='white' dismissible AlertIcon={'IoInformationCircleOutline'}>
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
</Alert>`,
      htmlCode: `No Code`,
      cssCode: `className="bg-green-600 text-white"
className="alert-warning"
className="bg-red-600 text-white rounded-full"
className="text-red-600 border-red-600"
className="bg-blue-600 text-white rounded-none rounded-tr-2xl rounded-bl-2xl"
className="text-blue-600 border-blue-600 rounded-full"`,
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
        <div className="flex justify-between mb-4 items-center">
          <h2 className="text-xl font-semibold underline uppercase">
            Alert Component
          </h2>
          <span
            className="text-[10px] cursor-pointer bg-blue-300/20 text-center py-1 px-2 rounded-lg"
            onClick={() =>
              setCheatsheetOpen(
                CheatsheetOpen === "Button Component"
                  ? null
                  : "Button Component"
              )
            }
          >
            {CheatsheetOpen === "Button Component" ? "Hide Code" : "Show Code"}
          </span>
        </div>

        {/* Smooth expandable panel */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden dark:bg-slate-500 bg-slate-100
            ${CheatsheetOpen === "Button Component"
              ? "opacity-100"
              : "max-h-0 opacity-0"
            }`}
        >
          <div className="p-3 rounded-md">
            <pre>
              <code>{code}</code>
            </pre>
          </div>
        </div>
      </Card>

      {ButtondataArray.map((items) => (
        <Card
          key={items.ID}
          className="my-4 items-center shadow-none hover:shadow-none overflow-hidden my-Border p-4 my-Background"
          style={{
            background: CommonSave_GlobalValStore.ThemeBackground && bgColor,
          }}
        >
          <div className="flex justify-between mb-4 items-center">
            <h2 className="text-xl font-semibold">{items.Tittle}</h2>
            <span
              className="text-[10px] cursor-pointer bg-blue-300/20 text-center py-1 px-2 rounded-lg "
              onClick={() =>
                setCheatsheetOpen(
                  CheatsheetOpen === items.Tittle ? null : items.Tittle
                )
              }
            >
              {CheatsheetOpen === items.Tittle ? "Hide Code" : "Show Code"}
            </span>
          </div>

          {/* Render JSX Example */}
          <div className="my-2">{items.jsxExample}</div>

          {/* Show Cheatsheet */}
          {CheatsheetOpen === items.Tittle && (
            <CheatsheetCard
              htmlCode={items.htmlCode}
              cssCode={items.cssCode}
              jsxCode={items.jsxCode}
            />
          )}
        </Card>
      ))}
    </>
  );
};

export default AlertList;
