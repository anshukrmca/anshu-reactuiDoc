import { lazy } from "react";
import HRMLayout from "./HRMLayout";
import HRMDashboard from "./pages/HRMDashboard";
const Contacts = lazy(() => import("./pages/Contacts"));
const Leads = lazy(() => import("./pages/Leads"));

export const HRMRoutes = [
  {
    path: "hrm",
    label: "HRM",
    element: <HRMLayout />, // 👈 should render layout, not dashboard
    children: [
      { index: true, element: <HRMDashboard />, label: "Dashboard" }, // 👈 default route
      { path: "contacts/all", label: "Contacts", element: <Contacts /> },
      { path: "leads/all", label: "Leads", element: <Leads /> },
    ],
  },
];
