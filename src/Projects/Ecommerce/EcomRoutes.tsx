import { lazy } from "react";
const EcomLayout = lazy(() => import("./EcomLayout"));
const EcomDashboard = lazy(() => import("./pages/EcomDashboard"));
const Contacts = lazy(() => import("./pages/Contacts"));
const Leads = lazy(() => import("./pages/Leads"));

export const EcomRoutes = [
  {
    path: "ecommerce",
    label: "ECOMMERCE",
    element: <EcomLayout />, // 👈 should render layout, not dashboard
    children: [
      { index: true, element: <EcomDashboard />, label: "Dashboard" }, // 👈 default route
      { path: "contacts/all", label: "Contacts", element: <Contacts /> },
      { path: "leads/all", label: "Leads", element: <Leads /> },
    ],
  },
];
