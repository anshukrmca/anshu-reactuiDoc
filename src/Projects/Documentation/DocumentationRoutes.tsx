import { lazy } from "react";
// 🔹 Lazy imports for all pages
const DocLayout = lazy(() => import("./DocLayout"));
const Home = lazy(() => import("./pages/Home"));
const ButtonList = lazy(() => import("./pages/ButtonList"));
const AlertList = lazy(() => import("./pages/AlertList"));
const BadgeList = lazy(() => import("./pages/BadgeList"));
const SpinnerList = lazy(() => import("./Components/SpinnerList"));
const SwitchList = lazy(() => import("./pages/SwitchList"));
const BreadandSpin = lazy(() => import("./pages/BreadandSpin"));
const TableList = lazy(() => import("./pages/TableList"));
const ProgressBar = lazy(() => import("./pages/ProgressBarList"));
const InputTypes = lazy(() => import("./pages/InputTypes"));
const FileInputDocsPage = lazy(() => import("./pages/FileInputDocsPage"));
const ToastSweetAlert = lazy(() => import("./pages/ToastSweetAlert"));
const DemoOffCanvace = lazy(() => import("./pages/DemoOffCanvace"));
const DemoIconPage = lazy(() => import("./pages/DemoIconPage"));
const Modal = lazy(() => import("./pages/Modal"));
const FormFullTest = lazy(() => import("./Components/FormFullTest"));
const DemoAccordion = lazy(() => import("./pages/DemoAccordion"));


export const DocumentationRoutes = [
  {
    path: "/",
    label: "Documentation",
    layout: DocLayout,
    element: <DocLayout />,
    children: [
      { index: true, element: <Home />, label: "Home" },
      { path: "doc", label: "Documentation", element: <Home /> },
      { path: "buttons", element: <ButtonList />, label: "Buttons" },
      { path: "alerts", element: <AlertList />, label: "Alerts" },
      { path: "badges", element: <BadgeList />, label: "Badges" },
      { path: "breadcrumb", element: <BreadandSpin />, label: "Breadcrumb" },
      { path: "switch", element: <SwitchList />, label: "Switch" },
      { path: "nested-2.2.2", element: <SpinnerList />, label: "Nested-2.2.2" },
      { path: "basic-tables", element: <TableList />, label: "Table" },
      { path: "progressbar", element: <ProgressBar />, label: "ProgressBar" },
      { path: "input-types", element: <InputTypes />, label: "Input Types" },
      { path: "input-file", element: <FileInputDocsPage />, label: "Input File" },
      { path: "toast-alert", element: <ToastSweetAlert />, label: "Toast SweetAlert" },
      { path: "offCanvace", element: <DemoOffCanvace />, label: "OffCanvace" },
      { path: "react-icons", element: <DemoIconPage />, label: "React Icons" }, 
      { path: "modal-stack", element: <Modal />, label: "Modal Stack" },
      { path: "basic-form", element: <FormFullTest />, label: "Basic Form" },
      { path: "accordions-collapse", element: <DemoAccordion />, label: "Accordions/Collapse" },
      
    ],
  },
];
