import "anshu-reactui/dist/styles.css";
import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Components/Layout/MainLayout";
import { Loading } from "anshu-reactui";
import Home from "./pages/Home/Home";
import { BackgroundColors } from "./pages/Doc/BackgroundColors";
import ButtonList from "./pages/UiElement/ButtonList";

function App() {
  // Define the router
  const router = createBrowserRouter([
    {
      path: "*",
      element: <p>No page</p>,
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
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
              element: <ButtonList/>,
            },
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
