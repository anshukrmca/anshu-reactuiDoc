import "anshu-reactui/styles.css";
import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//  Components
import { Loading } from "anshu-reactui";
import UnknownPage from "./pages/UnknownPage";
import ProjectLayout from "./Layouts/ProjectLayout";
import ComingSoonPage from "./pages/ComingSoonPage";
import Unauthorised from "./pages/Unauthorised";
import MaintenancePage from "./pages/MaintenancePage";
import SessionExpire from "./pages/SessionExpire";

//  Project route imports
import { CRMRoutes } from "./Projects/CRM/CRMRoutes";
import { DocumentationRoutes } from "./Projects/Documentation/DocumentationRoutes";
import { EcomRoutes } from "./Projects/Ecommerce/EcomRoutes";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";


//  Combine all routes
const allRoutes = [...DocumentationRoutes, ...CRMRoutes, ...EcomRoutes];

//  Setup router
const router = createBrowserRouter([
  { path: "*", element: <UnknownPage /> },
  { path: "login", element: <Login /> },
  { path: "sign-up", element: <Signup /> },
  { path: 'session-exipred', element: <SessionExpire /> },
  { path: "comming-soon", element: <ComingSoonPage /> },
  { path: "Error-401", element: <Unauthorised /> },
  { path: "Error-404", element: <UnknownPage /> },
  { path: "under-maintenance", element: <MaintenancePage /> },
  {
    path: "/",
    element: <ProjectLayout />,
    children: [
      ...allRoutes,
    ],
  },
]);

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
