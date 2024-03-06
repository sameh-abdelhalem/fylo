import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Navigate to={"/homepage"} />,
    },
    {
      path: "/homepage",
      element: <HomePage />,
    },
  ],
  { basename: "/fylo" }
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
