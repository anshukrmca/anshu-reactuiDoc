import { useState, type ReactNode } from "react";
import CheatsheetCard from "../../../Components/Box/CheatsheetCard";
import { Badge, Button, Card, hexToRgba } from "anshu-reactui";
import { useAppSelector } from "../../../CustomeHooks/Hooks";
import DynamicIcon from "../../../Components/Icons/DynamicIcon";

// Define types for button data
interface ButtonData {
  ID: number;
  Tittle: string;
  jsxExample: ReactNode;
  jsxCode: string;
  htmlCode: string;
  cssCode: string;
}


const BadgeList: React.FC = () => {
  const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
  const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);
  const [CheatsheetOpen, setCheatsheetOpen] = useState<string | null>(null);

  const code = `
import React from "react";
import DynamicIcon from "../Icon/DynamicIcon";

const Badge = ({
  children,
  type = "primary", // primary, secondary, success, danger, warning, info, light, dark, orange, teal, purple
  outline = false,
  light = false,
  gradient = false,
  pill = false,
  icon = null,
  iconPosition = "left", // "left" | "right"
  count = null, // for numbers inside badge
  position = null, // "top-right" | "bottom-right"
  className = "",
}) => {
  let variantClass = "badge-" + type;
  if (outline) variantClass = "badge-outline-" + type;
  else if (light) variantClass = "badge-light-" + type;
  else if (gradient) variantClass = "badge-gradient-" + type;

  const pillClass = pill ? "badge-pill" : "";
  let positionClass = "";
  if (position === "top-right") positionClass = "absolute -top-1 -right-1";
  if (position === "bottom-right") positionClass = "absolute -bottom-1 -right-1";

  return (
    <span
      className={"badge " + variantClass + " " + pillClass + " " + positionClass + " " + className}
    >
      {children}
    </span>
  );
};

export default Badge;
`;

  // Data array with examples
  const BadgedataArray: ButtonData[] = [
    {
      ID: 1,
      Tittle: "Default Badges",
      jsxExample: (
        <>
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
        </>
      ),
      jsxCode: `<Badge type="primary">Primary</Badge>
<Badge type="secondary">Secondary</Badge>
<Badge type="success">Success</Badge>
<Badge type="danger">Danger</Badge>
<Badge type="warning">Warning</Badge>
<Badge type="info">Info</Badge>
<Badge type="dark">Dark</Badge>
<Badge type="orange">Orange</Badge>
<Badge type="teal">Teal</Badge>
<Badge type="purple">Purple</Badge>`,
      htmlCode: `No Code`,
      cssCode: `className="badge badge-primary"
className="badge badge-secondary"
className="badge badge-success"
className="badge badge-danger"
className="badge badge-warning"
className="badge badge-info"
className="badge badge-light"
className="badge badge-dark"
className="badge badge-orange"
className="badge badge-teal"
className="badge badge-purple"`,
    },
    {
      ID: 2,
      Tittle: "Light Badges",
      jsxExample: (
        <>
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
        </>
      ),
      jsxCode: `<Badge type="primary" light>Primary</Badge>
<Badge type="secondary" light>Secondary</Badge>
<Badge type="success" light>Success</Badge>
<Badge type="danger" light>Danger</Badge>
<Badge type="warning" light>Warning</Badge>
<Badge type="info" light>Info</Badge>
<Badge type="dark" light>Dark</Badge>
<Badge type="orange" light>Orange</Badge>
<Badge type="teal" light>Teal</Badge>
<Badge type="purple" light>Purple</Badge>`,
      htmlCode: `No Code`,
      cssCode: `className="badge badge-light-primary"
className="badge badge-light-secondary"
className="badge badge-light-success"
className="badge badge-light-danger"
className="badge badge-light-warning"
className="badge badge-light-info"
className="badge badge-light-light"
className="badge badge-light-dark"
className="badge badge-light-orange"
className="badge badge-light-teal"
className="badge badge-light-purple"`,
    },
    {
      ID: 3,
      Tittle: "Pill Badges",
      jsxExample: (
        <>
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
        </>
      ),
      jsxCode: `<Badge type="primary" pill>Primary</Badge>
<Badge type="secondary" pill>Secondary</Badge>
<Badge type="success" pill>Success</Badge>
<Badge type="danger" pill>Danger</Badge>
<Badge type="warning" pill>Warning</Badge>
<Badge type="info" pill>Info</Badge>
<Badge type="dark" pill>Dark</Badge>
<Badge type="orange" pill>Orange</Badge>
<Badge type="teal" pill>Teal</Badge>
<Badge type="purple" pill>Purple</Badge>`,
      htmlCode: `No Code`,
      cssCode: `className="badge badge-primary badge-pill"
className="badge badge-secondary badge-pill"
className="badge badge-successbadge-pill"
className="badge badge-danger badge-pill"
className="badge badge-warning badge-pill"
className="badge badge-info badge-pill"
className="badge badge-light badge-pill"
className="badge badge-dark badge-pill"
className="badge badge-orange badge-pill"
className="badge badge-teal badge-pill"
className="badge badge-purple badge-pill"`,
    },
    {
      ID: 4,
      Tittle: "Light Pill Badges",
      jsxExample: (
        <>
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
        </>
      ),
      jsxCode: `<Badge type="primary" light pill>Primary</Badge>
<Badge type="secondary" light pill>Secondary</Badge>
<Badge type="success" light pill>Success</Badge>
<Badge type="danger" light pill>Danger</Badge>
<Badge type="warning" light pill>Warning</Badge>
<Badge type="info" light pill>Info</Badge>
<Badge type="dark" light pill>Dark</Badge>
<Badge type="orange" light pill>Orange</Badge>
<Badge type="teal" light pill>Teal</Badge>
<Badge type="purple" light pill>Purple</Badge>`,
      htmlCode: `No Code`,
      cssCode: `className="badge badge-light-primary badge-pill"
className="badge badge-light-secondary badge-pill"
className="badge badge-light-successbadge-pill"
className="badge badge-light-danger badge-pill"
className="badge badge-light-warning badge-pill"
className="badge badge-light-info badge-pill"
className="badge badge-light-light badge-pill"
className="badge badge-light-dark badge-pill"
className="badge badge-light-orange badge-pill"
className="badge badge-light-teal badge-pill"
className="badge badge-light-purple badge-pill"`,
    },
    {
      ID: 5,
      Tittle: "Gradient Badges",
      jsxExample: (
        <>
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
        </>
      ),
      jsxCode: `<Badge type="primary" gradient>Primary</Badge>
<Badge type="secondary" gradient>Secondary</Badge>
<Badge type="success" gradient>Success</Badge>
<Badge type="danger" gradient>Danger</Badge>
<Badge type="warning" gradient>Warning</Badge>
<Badge type="info" gradient>Info</Badge>
<Badge type="dark" gradient>Dark</Badge>
<Badge type="orange" gradient>Orange</Badge>
<Badge type="teal" gradient>Teal</Badge>
<Badge type="purple" gradient>Purple</Badge>`,
      htmlCode: `No Code`,
      cssCode: `className="badge badge-gradient-primary"
className="badge badge-gradient-secondary"
className="badge badge-gradient-success"
className="badge badge-gradient-danger"
className="badge badge-gradient-warning"
className="badge badge-gradient-info"
className="badge badge-gradient-light"
className="badge badge-gradient-dark"
className="badge badge-gradient-orange"
className="badge badge-gradient-teal"
className="badge badge-gradient-purple"`,
    },
    {
      ID: 6,
      Tittle: "Gradient Pill Badges",
      jsxExample: (
        <>
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
        </>
      ),
      jsxCode: `<Badge type="primary" gradient pill>Primary</Badge>
<Badge type="secondary" gradient pill>Secondary</Badge>
<Badge type="success" gradient pill>Success</Badge>
<Badge type="danger" gradient pill>Danger</Badge>
<Badge type="warning" gradient pill>Warning</Badge>
<Badge type="info" gradient pill>Info</Badge>
<Badge type="dark" gradient pill>Dark</Badge>
<Badge type="orange" gradient pill>Orange</Badge>
<Badge type="teal" gradient pill>Teal</Badge>
<Badge type="purple" gradient pill>Purple</Badge>`,
      htmlCode: `No Code`,
      cssCode: `className="badge badge-gradient-primary badge-pill"
className="badge badge-gradient-secondary badge-pill"
className="badge badge-gradient-successbadge-pill"
className="badge badge-gradient-danger badge-pill"
className="badge badge-gradient-warning badge-pill"
className="badge badge-gradient-info badge-pill"
className="badge badge-gradient-light badge-pill"
className="badge badge-gradient-dark badge-pill"
className="badge badge-gradient-orange badge-pill"
className="badge badge-gradient-teal badge-pill"
className="badge badge-gradient-purple badge-pill"`,
    },
    {
      ID: 7,
      Tittle: "Outline Badges",
      jsxExample: (
        <>
          <Badge type="primary" outline>Primary</Badge>
          <Badge type="secondary" outline>Secondary</Badge>
          <Badge type="success" outline>Success</Badge>
          <Badge type="danger" outline>Danger</Badge>
          <Badge type="warning" outline>Warning</Badge>
          <Badge type="info" outline>Info</Badge>
          <Badge type="dark" outline>Dark</Badge>
          <Badge type="orange" outline>Orange</Badge>
          <Badge type="teal" outline>Teal</Badge>
          <Badge type="purple" outline>Purple</Badge>
        </>
      ),
      jsxCode: `<Badge type="primary" outline>Primary</Badge>
<Badge type="secondary" outline>Secondary</Badge>
<Badge type="success" outline>Success</Badge>
<Badge type="danger" outline>Danger</Badge>
<Badge type="warning" outline>Warning</Badge>
<Badge type="info" outline>Info</Badge>
<Badge type="dark" outline>Dark</Badge>
<Badge type="orange" outline>Orange</Badge>
<Badge type="teal" outline>Teal</Badge>
<Badge type="purple" outline>Purple</Badge>`,
      htmlCode: `No Code`,
      cssCode: `className="badge badge-outline-primary"
className="badge badge-outline-secondary"
className="badge badge-outline-success"
className="badge badge-outline-danger"
className="badge badge-outline-warning"
className="badge badge-outline-info"
className="badge badge-outline-light"
className="badge badge-outline-dark"
className="badge badge-outline-orange"
className="badge badge-outline-teal"
className="badge badge-outline-purple"`,
    },
    {
      ID: 8,
      Tittle: "Outline Pill Badges",
      jsxExample: (
        <>
          <Badge type="primary" outline pill>Primary</Badge>
          <Badge type="secondary" outline pill>Secondary</Badge>
          <Badge type="success" outline pill>Success</Badge>
          <Badge type="danger" outline pill>Danger</Badge>
          <Badge type="warning" outline pill>Warning</Badge>
          <Badge type="info" outline pill>Info</Badge>
          <Badge type="dark" outline pill>Dark</Badge>
          <Badge type="orange" outline pill>Orange</Badge>
          <Badge type="teal" outline pill>Teal</Badge>
          <Badge type="purple" outline pill>Purple</Badge>
        </>
      ),
      jsxCode: `<Badge type="primary" outline pill>Primary</Badge>
<Badge type="secondary" outline pill>Secondary</Badge>
<Badge type="success" outline pill>Success</Badge>
<Badge type="danger" outline pill>Danger</Badge>
<Badge type="warning" outline pill>Warning</Badge>
<Badge type="info" outline pill>Info</Badge>
<Badge type="dark" outline pill>Dark</Badge>
<Badge type="orange" outline pill>Orange</Badge>
<Badge type="teal" outline pill>Teal</Badge>
<Badge type="purple" outline pill>Purple</Badge>`,
      htmlCode: `No Code`,
      cssCode: `className="badge badge-outline-primary badge-pill"
className="badge badge-outline-secondary badge-pill"
className="badge badge-outline-successbadge-pill"
className="badge badge-outline-danger badge-pill"
className="badge badge-outline-warning badge-pill"
className="badge badge-outline-info badge-pill"
className="badge badge-outline-light badge-pill"
className="badge badge-outline-dark badge-pill"
className="badge badge-outline-orange badge-pill"
className="badge badge-outline-teal badge-pill"
className="badge badge-outline-purple badge-pill"`,
    },
    {
      ID: 9,
      Tittle: "Buttons With Badges",
      jsxExample: (
        <>
          <Button className="btn btn-primary">
            Notification
            <Badge type="purple" count={1}>New</Badge>
          </Button>
          <Button className="btn btn-primary">
            Notification
            <Badge type="purple">1</Badge>
          </Button>
          <Button className="btn btn-outline-success">
            Notification
            <Badge type="info">1</Badge>
          </Button>
          <Button className="btn btn-outline-warning">
            Notification
            <Badge type="warning">1</Badge>
          </Button>
          <Button className="btn btn-outline-info" iconName={<DynamicIcon name="FaPlus"/>}>
            Notification
            <Badge type="danger" icon={<DynamicIcon name='FaPlus'/>} iconPosition={'right'}>1</Badge>
          </Button>
          <Button className="btn btn-outline-dark">
            Notification
            <Badge type="danger" icon={<DynamicIcon name='CiStar'/>} iconPosition={'left'}>1</Badge>
          </Button>
          <Badge type="success" pill count={10}>Secondary</Badge>
          <Badge type="orange" icon={<DynamicIcon name='FaRegGrinStars'/>}>Orange</Badge>
          <Badge type="teal" pill icon={<DynamicIcon name='FaRegFaceGrinHearts'/>} iconPosition='right'>Teal </Badge>
        </>
      ),
      jsxCode: `<Button className="btn btn-primary">
  Notification
<Badge type="purple" count={1}>New</Badge>
</Button>
<Button className="btn btn-primary">
  Notification
<Badge type="purple">1</Badge>
</Button>
<Button className="btn btn-outline-success">
  Notification
<Badge type="info">1</Badge>
</Button>
<Button className="btn btn-outline-warning">
  Notification
<Badge type="warning">1</Badge>
</Button>
<Button className="btn btn-outline-info" iconName={"FaPlus"}>
  Notification
<Badge type="danger" icon={'FaPlus'} iconPosition={'right'}>1</Badge>
</Button>
<Button className="btn btn-outline-info">
  Notification
<Badge type="danger" icon={'CiStar'} iconPosition={'left'}>1</Badge>
</Button>
<Badge type="success" pill count={10}>Secondary</Badge>
<Badge type="orange" icon={'FaRegGrinStars'}>Orange</Badge>
<Badge type="teal" pill icon={'FaRegFaceGrinHearts'} iconPosition='right'>Teal </Badge>`,
      htmlCode: `No Code`,
      cssCode: `No Code`,
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
            Badge Component
          </h2>
          <span
            className="text-[10px] cursor-pointer bg-blue-300/20 text-center py-1 px-2 rounded-lg"
            onClick={() =>
              setCheatsheetOpen(
                CheatsheetOpen === "Badge Component" ? null : "Badge Component"
              )
            }
          >
            {CheatsheetOpen === "Badge Component" ? "Hide Code" : "Show Code"}
          </span>
        </div>

        {/* Smooth expandable panel */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden dark:bg-slate-500 bg-slate-100
            ${CheatsheetOpen === "Badge Component"
              ? "opacity-100"
              : "max-h-0 opacity-0"
            }`}
        >
          <div className="p-3 rounded-md">
            <pre className="text-sm whitespace-pre overflow-x-auto">
              <code>{code}</code>
            </pre>
          </div>
        </div>
      </Card>

      {BadgedataArray.map((items) => (
        <Card
          key={items.ID}
          className="my-4 items-center shadow-none hover:shadow-none overflow-hidden my-Background my-Border p-4"
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
          <div className="flex flex-wrap gap-4 my-2">
            {items.jsxExample}
          </div>

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

export default BadgeList;
