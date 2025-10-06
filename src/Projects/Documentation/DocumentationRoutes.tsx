import { lazy } from "react";
import DocLayout from "./DocLayout";

// 🔹 Lazy imports for all pages
const Home = lazy(() => import("./pages/Home"));
const ButtonList = lazy(() => import("./pages/ButtonList"));
const AlertList = lazy(() => import("./pages/AlertList"));
const BadgeList = lazy(() => import("./pages/BadgeList"));
const SpinnerList = lazy(() => import("./Components/SpinnerList"));
const SwitchList = lazy(() => import("./pages/SwitchList"));
const BreadandSpin = lazy(() => import("./pages/BreadandSpin"));
const TableList = lazy(() => import("./pages/TableList"));

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
      { path: "table", element: <TableList />, label: "Table" },
    ],
  },
];
