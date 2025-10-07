import { lazy } from "react";
import CrmLayout from "./CrmLayout";

const CrmDashboard = lazy(() => import("./CrmDashboard"));
const Contacts = lazy(() => import("./pages/Contacts"));
const Leads = lazy(() => import("./pages/Leads"));

export const CRMRoutes = [
  {
    path: "crm",
    label: "CRM",
    element: <CrmLayout />, // 👈 should render layout, not dashboard
    //  element: <MaintenancePage />,
    children: [
      { index: true, element: <CrmDashboard />, label: "Dashboard" }, // 👈 default route
      { path: "contacts", label: "Contacts", element: <Contacts /> },
      { path: "leads", label: "Leads", element: <Leads /> },
    ],
  },
];
