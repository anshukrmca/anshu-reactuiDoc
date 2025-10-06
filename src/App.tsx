import "anshu-reactui/dist/styles.css";
import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//  Components
import { Loading } from "anshu-reactui";
import UnknownPage from "./pages/UnknownPage";
import ProjectLayout from "./Layouts/ProjectLayout";

//  Project route imports
import { CRMRoutes } from "./Projects/CRM/CRMRoutes";
import { DocumentationRoutes } from "./Projects/Documentation/DocumentationRoutes";
import SessionExpire from "./pages/SessionExpire";

//  Combine all routes
const allRoutes = [...DocumentationRoutes, ...CRMRoutes];

//  Setup router
const router = createBrowserRouter([
  { path: "*", element: <UnknownPage /> },
  { path: 'session', element: <SessionExpire /> },
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
