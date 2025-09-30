import "anshu-reactui/dist/styles.css";
import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Components/Layout/MainLayout";
import { Loading } from "anshu-reactui";
import { BackgroundColors } from "./pages/Doc/BackgroundColors";
import ButtonList from "./pages/UiElement/ButtonList";
import UnknownPage from "./Components/Route/UnknownPage";
import AlertList from "./pages/UiElement/AlertList";
import BadgeList from "./pages/UiElement/BadgeList";
import SpinnerDemo from "./pages/UiElement/SpinnerDemo";
import DocHome from "./pages/Doc/DocHome";
import StylingWithUtilityClasses from "./pages/Doc/StylingWithUtilityClasses";
import Columns from "./pages/Doc/Columns";
import BreakUtilitiesDemo from "./pages/Doc/BreakUtilitiesDemo";
import BreakAndDecorationDemo from "./pages/Doc/BreakAndDecorationDemo";
import { ResponsiveExamples } from "./pages/Doc/ResponsiveExamples";
import SwitchDemo from "./pages/UiElement/SwitchTest";

function App() {
  // Define the router
  const router = createBrowserRouter([
    {
      path: "*",
      element: <UnknownPage />,
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <DocHome />,
        },
        {
          path: "doc",
          element: <DocHome />,
        },
        {
          path: "Installation",
          element: <DocHome />,
        },
        {
          path: "styling-with-utility-classes",
          element: <StylingWithUtilityClasses />,
        },
         {
          path: "columns",
          element: <Columns />,
        },
        {
          path: "break-utilities",
          element: <BreakUtilitiesDemo />,
        },
        {
          path:'responsive-design',
          element:<ResponsiveExamples/>
        },
        {
          path: "box-decoration-break",
          element: <BreakAndDecorationDemo />,
        },
        {
          path: "colors",
          element: <BackgroundColors />,
        },
        {
          path: "components", // ✅ /components
          children: [
            {
              index: true,
              element: <p>Default components page</p>,
            },
            {
              path: "buttons",
              element: <ButtonList />,
            },
            {
              path: "alerts",
              element: <AlertList />,
            },
            {
              path: "badges",
              element: <BadgeList />,
            },
            {
              path: "breadcrumb",
              element: <SpinnerDemo />,
            },
            {
              path: "switch",
              element: <SwitchDemo />,
            },
            {
              path: 'nested-2.2.2',
              element: <SpinnerDemo />,

            }
          ],
        },
      ],
    },
  ]);

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
