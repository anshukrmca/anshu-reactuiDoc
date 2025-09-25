import 'anshu-reactui/dist/styles.css'
import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Components/Layout/MainLayout";
import { Loading } from 'anshu-reactui';
import Home from './pages/Home';
// import UnknownPage from "./Components/Routes/UnknownPage";



function App() {

  // Define the router
  const router = createBrowserRouter([
    {
      path: "*",
      element: <p> No page</p>,
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
          path: "/home",
          element: <Home />,
        },
         {
          path: "/doc",
          element: <Home />,
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

